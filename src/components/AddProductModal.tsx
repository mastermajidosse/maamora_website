import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProductAdded: () => void;
}

export function AddProductModal({ isOpen, onClose, onProductAdded }: AddProductModalProps) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category_id: '',
    image_url: '',
    stock: '',
    discount: '0'
  });
  const [categories, setCategories] = useState<Array<{ id: string; name: string }>>([]);

  React.useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('id, name')
        .order('name');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    // Validate required fields
    if (!formData.name || !formData.description || !formData.price || 
        !formData.category_id || !formData.image_url || !formData.stock) {
      alert('Please fill in all required fields');
      return;
    }

    const slug = formData.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    try {
      setLoading(true);

      const { data, error } = await supabase
        .from('products')
        .insert([
          {
            name: formData.name,
            slug,
            description: formData.description,
            price: parseFloat(formData.price),
            category_id: formData.category_id,
            image_url: formData.image_url,
            stock: parseInt(formData.stock),
            author: user.email,
            discount: parseInt(formData.discount),
            rating: 0,
            reviews_count: 0,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ])
        .select()
        .single();

      if (error) throw error;
      
      // Reset form and close modal
      setFormData({
        name: '',
        description: '',
        price: '',
        category_id: '',
        image_url: '',
        stock: '',
        discount: '0'
      });

      onProductAdded();
      onClose();
    } catch (error) {
      console.error('Error adding product:', error);
      if (error instanceof Error) {
        if (error.message.includes('duplicate key')) {
          alert('A product with this name already exists. Please use a different name.');
        } else {
          alert('Failed to add product. Please try again.');
        }
      } else {
        alert('Failed to add product. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Add New Product</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb7701]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb7701]"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  required
                  value={formData.category_id}
                  onChange={e => setFormData(prev => ({ ...prev, category_id: e.target.value }))}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb7701]"
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  type="url"
                  required
                  value={formData.image_url}
                  onChange={e => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb7701]"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price (dhs)
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    step="0.01"
                    value={formData.price}
                    onChange={e => setFormData(prev => ({ ...prev, price: e.target.value }))}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb7701]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stock
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={formData.stock}
                    onChange={e => setFormData(prev => ({ ...prev, stock: e.target.value }))}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb7701]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Discount (%)
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    max="100"
                    value={formData.discount}
                    onChange={e => setFormData(prev => ({ ...prev, discount: e.target.value }))}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fb7701]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center gap-2 bg-[#fb7701] text-white py-2 rounded-lg font-semibold hover:bg-[#e66901] transition-colors disabled:opacity-50"
              >
                {loading ? (
                  'Adding Product...'
                ) : (
                  <>
                    <Upload className="w-5 h-5" />
                    Add Product
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}