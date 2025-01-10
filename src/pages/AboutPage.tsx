import React from 'react';
import { Building2, Users, Globe, Award, Heart, Shield } from 'lucide-react';

export function AboutPage() {
  const stats = [
    { label: 'Active Users', value: '2M+' },
    { label: 'Products Listed', value: '100K+' },
    { label: 'Countries', value: '10+' },
    { label: 'Sellers', value: '5K+' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize customer satisfaction in everything we do, ensuring the best shopping experience.'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'We maintain the highest standards of security and reliability in all transactions.'
    },
    {
      icon: Globe,
      title: 'Local Impact',
      description: 'Supporting local businesses and communities through our marketplace.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fb7701] to-[#ff9233] text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">About Maamora</h1>
            <p className="text-xl text-blue-100 mb-8">
              Empowering commerce through technology, connecting millions of buyers and sellers across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-[#fb7701] mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-8">
              Founded in 2023, Maamora began with a simple mission: to revolutionize online shopping in our region. 
              What started as a small marketplace has grown into a thriving ecosystem of buyers, sellers, and partners.
            </p>
            <p className="text-gray-600">
              Today, we're proud to be one of the fastest-growing e-commerce platforms, connecting millions of customers 
              with the products they love while supporting thousands of businesses in their growth journey.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                  <value.icon className="w-8 h-8 text-[#fb7701]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}