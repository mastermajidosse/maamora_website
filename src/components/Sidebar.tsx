import React from 'react';
import { Home, Briefcase, BookOpen, Info, ShoppingBag, HelpCircle, X, ShoppingBasket } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Home', to: '/' },
    { icon: <ShoppingBasket className="w-5 h-5" />, label: 'Products', to: '/products' },
    { icon: <Briefcase className="w-5 h-5" />, label: 'Careers', to: '/careers' },
    { icon: <BookOpen className="w-5 h-5" />, label: 'Blog', to: '/blog' },
    { icon: <Info className="w-5 h-5" />, label: 'About Maamora', to: '/about' },
    { icon: <ShoppingBag className="w-5 h-5" />, label: 'Sell products on Maamora', to: '/sell' },
    { icon: <HelpCircle className="w-5 h-5" />, label: 'Help Center', to: '/help' },
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Maamora</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}