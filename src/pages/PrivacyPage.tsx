import React from 'react';
import { Shield, Lock, Eye, Database, Bell, Share2 } from 'lucide-react';

export function PrivacyPage() {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal identification information (Name, email address, phone number, etc.)',
        'Payment information',
        'Demographic information',
        'Device and usage information',
        'Location data'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'To process your orders and transactions',
        'To provide customer support',
        'To send administrative information',
        'To send marketing communications',
        'To improve our services'
      ]
    },
    {
      icon: Share2,
      title: 'Information Sharing',
      content: [
        'With service providers',
        'For legal requirements',
        'With your consent',
        'In business transfers',
        'To protect rights and safety'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#fb7701] to-[#ff9233] text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl">
              We are committed to protecting your privacy and ensuring the security of your personal information.
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
              This Privacy Policy describes how Maamora ("we," "us," or "our") collects, uses, and shares your personal information when you use our website, mobile application, and services (collectively, the "Services").
            </p>
            <p className="text-gray-600 mt-4">
              By using our Services, you agree to the collection and use of information in accordance with this policy.
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
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Security</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational measures to maintain the security of your personal information, including but not limited to encryption, access controls, and secure networks.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
              <p className="text-gray-600">
                We use cookies and similar tracking technologies to track activity on our Services and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>Email: privacy@maamora.com</li>
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