import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Category {
  name: string;
  slug: string;
}

interface FilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function FilterSidebar({ selectedCategory, onCategoryChange }: FilterSidebarProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('name, slug')
        .order('name');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="w-64 pr-8">Loading categories...</div>;
  }

  return (
    <div className="w-64 pr-8">
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === 'All'}
                onChange={() => onCategoryChange('All')}
                className="h-4 w-4 border-gray-300 text-black focus:ring-black"
              />
              <span className="ml-3 text-sm text-gray-600">All Categories</span>
            </label>
            {categories.map((category) => (
              <label key={category.slug} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  checked={category.name === selectedCategory}
                  onChange={() => onCategoryChange(category.name)}
                  className="h-4 w-4 border-gray-300 text-black focus:ring-black"
                />
                <span className="ml-3 text-sm text-gray-600">{category.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}