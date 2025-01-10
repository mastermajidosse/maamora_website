import React from 'react';
import { Package, RefreshCw, CreditCard, Clock, ShieldCheck, HelpCircle } from 'lucide-react';

export function ReturnsPage() {
  const policies = [
    {
      icon: Clock,
      title: '30-Day Return Window',
      description: 'Return eligible items within 30 days of delivery for a full refund.'
    },
    {
      icon: Package,
      title: 'Free Returns',
      description: 'We cover return shipping costs for eligible items.'
    },
    {
      icon: ShieldCheck,
      title: 'Easy Process',
      description: 'Simple, hassle-free returns through your account dashboard.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Initiate Return',
      description: 'Log into your account and select the items you wish to return'
    },
    {
      number: '02',
      title: 'Package Items',
      description: 'Pack items in their original packaging with all accessories'
    },
    {
      number: '03',
      title: 'Ship Return',
      description: 'Use our prepaid shipping label to send items back'
    },
    {
      number: '04',
      title: 'Refund Processing',
      description: 'Receive your refund within 5-7 business days after we receive the return'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#fb7701] to-[#ff9233] text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Returns & Refunds</h1>
            <p className="text-xl">
              We want you to be completely satisfied with your purchase. If you're not happy with your order, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {policies.map((policy) => (
              <div key={policy.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                  <policy.icon className="w-8 h-8 text-[#fb7701]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{policy.title}</h3>
                <p className="text-gray-600">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Return Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Return Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
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

      {/* Eligibility */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Return Eligibility</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              To be eligible for a return, your item must be:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
              <li>Unused and in the same condition that you received it</li>
              <li>In the original packaging</li>
              <li>Accompanied by the receipt or proof of purchase</li>
              <li>Returned within 30 days of delivery</li>
            </ul>
            <p className="text-gray-600 mb-6">
              The following items cannot be returned:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Perishable goods such as food, flowers, newspapers</li>
              <li>Gift cards</li>
              <li>Downloadable software products</li>
              <li>Personal care items</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Refund Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Refund Information</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-[#fb7701]" />
                Refund Methods
              </h3>
              <p className="text-gray-600 mb-4">
                Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
              </p>
              <p className="text-gray-600">
                If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-7 business days.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#fb7701]" />
                Late or Missing Refunds
              </h3>
              <p className="text-gray-600 mb-4">
                If you haven't received your refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted.
              </p>
              <p className="text-gray-600">
                If you've done all of this and you still have not received your refund, please contact our customer support team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}