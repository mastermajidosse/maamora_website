import React from 'react';
import { TrendingUp, Users, ShieldCheck, Zap, BarChart3, HeartHandshake } from 'lucide-react';

export function SellPage() {
  const benefits = [
    {
      icon: Users,
      title: 'Reach Millions',
      description: 'Access our vast customer base across multiple countries'
    },
    {
      icon: ShieldCheck,
      title: 'Secure Platform',
      description: 'Advanced security measures to protect your business'
    },
    {
      icon: Zap,
      title: 'Easy Setup',
      description: 'Start selling in minutes with our simple onboarding process'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Create Account',
      description: 'Sign up for a seller account with your business details'
    },
    {
      number: '02',
      title: 'List Products',
      description: 'Upload your products with descriptions and pricing'
    },
    {
      number: '03',
      title: 'Start Selling',
      description: 'Receive orders and start growing your business'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#fb7701] to-[#ff9233] text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Sell on Maamora</h1>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of successful sellers and grow your business with Maamora's powerful e-commerce platform.
            </p>
            <button className="bg-white text-[#fb7701] px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Start Selling
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Sell on Maamora?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                  <benefit.icon className="w-8 h-8 text-[#fb7701]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
              <p className="text-gray-600 mb-8">
                Join thousands of successful sellers who have grown their businesses on Maamora. Our platform provides all the tools and support you need to succeed in the digital marketplace.
              </p>
              <div className="space-y-4 text-[#fb7701]">
                <div className="flex items-center gap-4">
                  <TrendingUp className="w-8 h-8" />
                  <div>
                    <h4 className="font-semibold">200% Average Growth</h4>
                    <p className="text-gray-600">For active sellers in first year</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <BarChart3 className="w-8 h-8" />
                  <div>
                    <h4 className="font-semibold">5K+ Active Sellers</h4>
                    <p className="text-gray-600">Growing community of entrepreneurs</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <HeartHandshake className="w-8 h-8" />
                  <div>
                    <h4 className="font-semibold">24/7 Support</h4>
                    <p className="text-gray-600">Dedicated seller support team</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800"
                alt="Successful seller"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-6xl font-bold text-orange-100 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}