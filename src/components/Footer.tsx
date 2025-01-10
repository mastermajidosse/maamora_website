import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer>
      {/* Top Section */}
      <div className="bg-[#131a22] pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-[#DDD]">About Maamora</h3>
              <ul className="space-y-2 text-sm text-[#999]">
                <li><Link to="/about" className="hover:text-[#DDD]">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-[#DDD]">Careers</Link></li>
                <li><Link to="/blog" className="hover:text-[#DDD]">Blog</Link></li>
                <li><Link to="/sell" className="hover:text-[#DDD]">Sell on Maamora</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-[#DDD]">Customer Service</h3>
              <ul className="space-y-2 text-sm text-[#999]">
                <li><Link to="/help" className="hover:text-[#DDD]">Help Center</Link></li>
                <li><Link to="/faq" className="hover:text-[#DDD]">Returns & Refunds</Link></li>
                <li><Link to="/contact" className="hover:text-[#DDD]">Contact Us</Link></li>
                <li><Link to="/faq" className="hover:text-[#DDD]">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-[#DDD]">Download Our App</h3>
              <div className="space-y-2">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.otot.maamora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img 
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                    alt="Get it on Google Play" 
                    className="h-16"
                  />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-[#DDD]">Follow Us</h3>
              <div className="flex space-x-4 mb-4">
                <a 
                  href="https://www.instagram.com/maamora.officiel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#999] hover:text-[#DDD]"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/maamora" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#999] hover:text-[#DDD]"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-start space-x-2 text-sm text-[#999]">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <p>Technopark rabat</p>
              </div>
              <div className="flex items-start space-x-2 text-sm text-[#999] mt-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p>+212601102257</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Maamora. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}