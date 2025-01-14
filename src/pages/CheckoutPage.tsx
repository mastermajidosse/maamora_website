import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, User, Truck, CreditCard, Check } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { useCart } from '../contexts/CartContext';
import { formatPrice } from '../utils/product';

export function CheckoutPage() {
  const { user } = useAuth();
  const { state: cartState, dispatch } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    phone_number: '',
    address: '',
    city: '',
    country: '',
  });

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (cartState.items.length === 0) {
      navigate('/products');
      return;
    }

    async function loadProfile() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error) throw error;

        if (data) {
          setFormData({
            full_name: data.full_name || '',
            phone_number: data.phone_number || '',
            address: data.address || '',
            city: data.city || '',
            country: data.country || '',
          });
        }
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [user, navigate, cartState.items.length]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) return;

    try {
      setLoading(true);
      
      const isValid = Object.values(formData).every(value => value.trim() !== '');
      if (!isValid) {
        throw new Error('Please fill in all fields');
      }

      // Create order in database
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: user.id,
          status: 'pending',
          total_amount: cartState.total,
          shipping_address: {
            full_name: formData.full_name,
            phone_number: formData.phone_number,
            address: formData.address,
            city: formData.city,
            country: formData.country
          }
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = cartState.items.map(item => ({
        order_id: order.id,
        product_id: item.id,
        quantity: item.quantity,
        price: item.price * (1 - item.discount / 100)
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;
      
      // Show confirmation popup
      setShowConfirmation(true);
      
      // Clear cart and navigate home after delay
      setTimeout(() => {
        dispatch({ type: 'CLEAR_CART' });
        navigate('/');
      }, 3000);
      
    } catch (error) {
      console.error('Error processing order:', error);
      alert('Failed to process your order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading && !formData.full_name) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
    {/* Confirmation Popup */}
    {showConfirmation && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Order Confirmed!</h3>
          <p className="text-gray-600 mb-4">
            Thank you for your order. We'll contact you soon for delivery details.
          </p>
          <div className="text-sm text-gray-500">Redirecting to home page...</div>
        </div>
      </div>
    )}

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Rest of the component remains the same */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <div className="mt-1 relative">
                  <input
                    required
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-[#fb7701] focus:border-[#fb7701]"
                  />
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="mt-1 relative">
                  <input
                    required
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-[#fb7701] focus:border-[#fb7701]"
                  />
                  <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <div className="mt-1 relative">
                  <input
                    required
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-[#fb7701] focus:border-[#fb7701]"
                  />
                  <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <div className="mt-1 relative">
                    <input
                      required
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-[#fb7701] focus:border-[#fb7701]"
                    />
                    <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Country</label>
                  <div className="mt-1 relative">
                    <input
                      required
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-[#fb7701] focus:border-[#fb7701]"
                    />
                    <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading || showConfirmation}
                  className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#fb7701] hover:bg-[#e66901] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fb7701] disabled:opacity-50"
                >
                  {loading ? (
                    'Processing...'
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5" />
                      Place Order (Cash on Delivery)
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4">
              {cartState.items.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    <p className="text-sm font-medium">{formatPrice(item.price * item.quantity)} dhs</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t mt-6 pt-6 space-y-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>{formatPrice(cartState.total)} dhs</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck className="w-5 h-5" />
                <span>Free Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}