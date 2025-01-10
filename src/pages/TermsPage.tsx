import React from 'react';
import { FileText, ShieldCheck, Scale, AlertCircle } from 'lucide-react';

export function TermsPage() {
  const sections = [
    {
      icon: FileText,
      title: 'Account Terms',
      content: [
        'You must be 18 years or older to use this Service',
        'You must provide accurate and complete information',
        'You are responsible for maintaining account security',
        'One person or legal entity may maintain only one account'
      ]
    },
    {
      icon: ShieldCheck,
      title: 'User Responsibilities',
      content: [
        'Comply with all applicable laws and regulations',
        'Maintain accurate account information',
        'Protect account credentials',
        'Report unauthorized access immediately'
      ]
    },
    {
      icon: Scale,
      title: 'Prohibited Activities',
      content: [
        'Violate any laws or regulations',
        'Infringe on intellectual property rights',
        'Engage in fraudulent activities',
        'Interfere with service operation'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#fb7701] to-[#ff9233] text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600">Last updated: March 15, 2024</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <p className="text-gray-600">
              These Terms of Service ("Terms") govern your access to and use of Maamora's website, mobile application, and services (collectively, the "Service"). By using the Service, you agree to be bound by these Terms.
            </p>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.title} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 mb-6">
                  <section.icon className="w-6 h-6 text-[#fb7701]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.content.map((item, index) => (
                    <li key={index} className="text-gray-600 flex items-start gap-2">
                      <span className="text-[#fb7701]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Service Usage</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Our Service allows you to discover, purchase, and sell products. You understand and agree that:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>You must provide accurate information when creating listings</li>
                  <li>You are responsible for any content you post</li>
                  <li>We reserve the right to remove content that violates these Terms</li>
                  <li>We may modify or discontinue the Service at any time</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-gray-600">
                The Service and its original content, features, and functionality are owned by Maamora and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  When making purchases through our Service:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>You agree to provide current, complete, and accurate purchase information</li>
                  <li>You agree to promptly update your account and payment information</li>
                  <li>You agree to pay all charges at the prices then in effect for your purchases</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-gray-600">
                In no event shall Maamora, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms, please contact us at:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>Email: legal@maamora.com</li>
                <li>Phone: +212 601102257</li>
                <li>Address: Technopark rabat, Morocco</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}