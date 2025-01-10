import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function SpecialOffers() {
  const offers = [
    {
      id: 1,
      title: 'Free Delivery',
      description: 'On orders over $100',
      image: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&q=80&w=800',
      link: '/products'
    },
    {
      id: 2,
      title: 'Flash Sale',
      description: 'Up to 50% off',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800',
      link: '/products'
    },
    {
      id: 3,
      title: 'New Arrivals',
      description: 'Latest Products',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800',
      link: '/products'
    },
    {
      id: 4,
      title: 'Student Discount',
      description: 'Extra 10% off',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
      link: '/products'
    },
    {
      id: 5,
      title: 'Elevate Your Game',
      description: 'Gaming Accessories',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
      link: '/products'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Link
              key={offer.id}
              to={offer.link}
              className="group relative overflow-hidden rounded-lg aspect-[16/9]"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{offer.title}</h3>
                  <p className="text-white/80 mb-4">{offer.description}</p>
                  <div className="flex items-center text-white group-hover:text-[#fb7701] transition-colors">
                    <span className="font-medium">Shop Now</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}