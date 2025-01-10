import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ContactPage() {
  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team',
      action: 'Start Chat',
      available: true
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email',
      action: 'Send Email',
      available: true
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with an agent',
      action: 'Call Now',
      available: true
    },
    {
      icon: HelpCircle,
      title: 'Help Center',
      description: 'Find answers quickly',
      action: 'Visit Help Center',
      available: true
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#fb7701] to-[#ff9233] text-white py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">We're Here to Help</h1>
          <p className="text-lg">Choose how you'd like to get in touch with us</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => (
              <div 
                key={method.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#fb7701] bg-opacity-10 mb-4">
                  <method.icon className="w-6 h-6 text-[#fb7701]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <button className="w-full bg-[#fb7701] text-white py-2 rounded-lg font-medium hover:bg-[#e66901] transition-colors">
                  {method.action}
                </button>
                {method.available && (
                  <p className="text-sm text-green-600 mt-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                    Available now
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Business Hours */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-[#fb7701]" />
                <h2 className="text-2xl font-semibold">Business Hours</h2>
              </div>
              <div className="space-y-4">
                {businessHours.map((schedule) => (
                  <div 
                    key={schedule.day}
                    className="flex justify-between items-center py-2 border-b"
                  >
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Location */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-[#fb7701]" />
                <h2 className="text-2xl font-semibold">Office Location</h2>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.6750877193407!2d-6.870699323554034!3d33.98932002805946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76ce7f9462dd1%3A0x2e9c39cfa1d9e8d7!2sTechnopark%20de%20Rabat!5e0!3m2!1sen!2sma!4v1710347161099!5m2!1sen!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <p className="font-medium">Maamora Headquarters</p>
                <p className="text-gray-600">Technopark rabat</p>
                <p className="text-gray-600">Rabat, Morocco</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}