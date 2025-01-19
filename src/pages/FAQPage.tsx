import React from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I place an order?',
      answer: 'To place an order, simply browse our products, add items to your cart, and proceed to checkout. You can pay using various payment methods including credit cards and digital wallets.'
    },
    {
      question: 'What are the shipping options?',
      answer: 'We offer multiple shipping options including standard delivery (3-5 business days) and express delivery (1-2 business days). Shipping costs vary based on your location and chosen delivery method.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of purchase. Items must be unused and in their original packaging. Once we receive your return, we\'ll process your refund within 5-7 business days.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can use this number to track your package on our website or the carrier\'s website.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to select countries internationally. Shipping costs and delivery times vary by location. Please check our shipping calculator at checkout for specific details.'
    },
    {
      question: 'How do I contact customer service?',
      answer: 'You can reach our customer service team through our contact page, by email at contact@maamora.com, or by phone at 212601102257. We\'re available 24/7 to assist you.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-[#fb7701]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#fb7701]" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-4 bg-gray-50 border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}