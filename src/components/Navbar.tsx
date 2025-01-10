import React, { useState, useEffect } from 'react';
import { Search, Menu, LogIn, LogOut, User, ShoppingBag, Package, Shield } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { supabase } from '../lib/supabase';
import { Profile } from '../types/profile';
import { CartDrawer } from './CartDrawer';

interface NavbarProps {
  onSearch: (query: string) => void;
  onMenuClick: () => void;
}

export function Navbar({ onSearch, onMenuClick }: NavbarProps) {
  const { user, signOut } = useAuth();
  const { state: cartState } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  const showSearch = location.pathname === '/' || location.pathname === '/products';

  useEffect(() => {
    if (user) {
      fetchProfile();
      fetchUserRole();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (error) throw error;
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const fetchUserRole = async () => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select(`
          roles:role_id (
            name
          )
        `)
        .eq('user_id', user?.id);

      if (error) throw error;
      
      // Get the first role if exists
      const role = data?.[0]?.roles?.name || 'customer';
      setUserRole(role);
    } catch (error) {
      console.error('Error fetching user role:', error);
      // Default to customer role if there's an error
      setUserRole('customer');
    }
  };

  const handleSearch = () => {
    if (searchInput.trim()) {
      onSearch(searchInput);
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const cartItemsCount = cartState.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button 
                onClick={onMenuClick}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Menu className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              </button>
              <Link to="/" className="ml-2 relative">
                <span className="text-[36px] font-bold text-[#fb7701] font-['Calibri']">
                  Maamora
                </span>
              </Link>
            </div>
            
            {showSearch && (
              <div className="flex-1 max-w-2xl mx-4">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full pl-4 pr-14 py-2.5 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-[#fb7701] focus:ring-1 focus:ring-[#fb7701] transition-colors"
                  />
                  <button 
                    onClick={handleSearch}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#fb7701] text-white p-2 rounded-full hover:bg-[#e66901] transition-colors"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}

            <div className="flex items-center gap-4">
      
                <button
                  onClick={() => setShowCart(true)}
                  className="relative p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-900"
                >
                  <ShoppingBag className="h-6 w-6" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#fb7701] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </button>
           

              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <User className="h-6 w-6 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {profile?.full_name || user.email}
                    </span>
                  </button>
                  
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                      <Link
                        to="/profile"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <User className="h-4 w-4" />
                        Profile
                      </Link>
                      
                      {(userRole === 'vendor' || userRole === 'admin') && (
                        <Link
                          to="/vendor/dashboard"
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                          onClick={() => setShowUserMenu(false)}
                        >
                          <Package className="h-4 w-4" />
                          Vendor Dashboard
                        </Link>
                      )}

                      {userRole === 'admin' && (
                        <Link
                          to="/admin/dashboard"
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                          onClick={() => setShowUserMenu(false)}
                        >
                          <Shield className="h-4 w-4" />
                          Admin Dashboard
                        </Link>
                      )}

                      <button
                        onClick={handleSignOut}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                      >
                        <LogOut className="h-4 w-4" />
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-900"
                >
                  <LogIn className="h-6 w-6" />
                  <span className="text-sm font-medium">Sign in</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {showCart && (
        <CartDrawer 
          isOpen={showCart} 
          onClose={() => setShowCart(false)} 
        />
      )}
    </>
  );
}