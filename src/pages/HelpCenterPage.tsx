import React from 'react';
import { Search, ShoppingBag, Truck, RotateCcw, HeadphonesIcon, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HelpCenterPage() {
  const categories = [
    {
      icon: ShoppingBag,
      title: 'Shopping Guide',
      description: 'Learn how to shop on Maamora',
      articles: [
        'How to create an account',
        'Browsing products',
        'Using filters and search',
        'Adding items to cart'
      ]
    },
    {
      icon: Truck,
      title: 'Orders & Shipping',
      description: 'Everything about your orders',
      articles: [
        'Tracking your package',
        'Shipping methods',
        'Order cancellation',
        'Delivery areas'
      ]
    },
    {
      icon: RotateCcw,
      title: 'Returns & Refunds',
      description: 'Return policies and process',
      articles: [
        'Return eligibility',
        'Return process',
        'Refund timeline',
        'Return shipping'
      ]
    },
    {
      icon: HeadphonesIcon,
      title: 'Customer Support',
      description: 'Get help when you need it',
      articles: [
        'Contact methods',
        'Response times',
        'Common issues',
        'Account support'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#fb7701] to-[#ff9233] text-white py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to the Help Center</h1>
          <p className="text-lg mb-8">Find answers, guides, and support for all your Maamora needs</p>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="w-full px-4 py-3 pl-12 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#fb7701]"
            />
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div 
                key={category.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#fb7701] bg-opacity-10">
                    <category.icon className="w-6 h-6 text-[#fb7701]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.articles.map((article, index) => (
                        <li key={index}>
                          <Link 
                            to="#" 
                            className="flex items-center text-sm text-gray-600 hover:text-[#fb7701] group"
                          >
                            <ChevronRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 transition-opacity" />
                            {article}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-8">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/faq" 
              className="p-4 border rounded-lg hover:border-[#fb7701] transition-colors group"
            >
              <h3 className="font-semibold group-hover:text-[#fb7701]">Frequently Asked Questions</h3>
              <p className="text-sm text-gray-600">Find answers to common questions</p>
            </Link>
            <Link 
              to="/contact" 
              className="p-4 border rounded-lg hover:border-[#fb7701] transition-colors group"
            >
              <h3 className="font-semibold group-hover:text-[#fb7701]">Contact Support</h3>
              <p className="text-sm text-gray-600">Get in touch with our team</p>
            </Link>
            <Link 
              to="/about" 
              className="p-4 border rounded-lg hover:border-[#fb7701] transition-colors group"
            >
              <h3 className="font-semibold group-hover:text-[#fb7701]">About Maamora</h3>
              <p className="text-sm text-gray-600">Learn more about us</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}