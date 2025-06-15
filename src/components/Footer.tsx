import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from './Link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center bg-red-700 rounded-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 8H8V16H16V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">EXODUS</span>
                <span className="text-xs -mt-1 text-gray-400">TRUCKING LLC</span>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6">
              Providing reliable transportation and logistics solutions for businesses across the nation since 2008.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="#fleet" className="text-gray-400 hover:text-white transition-colors">Fleet</Link>
              </li>
              <li>
                <Link href="#careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">Long-Haul Transport</Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">Regional Delivery</Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">Specialized Freight</Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">Logistics Management</Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">Secure Transport</Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">Expedited Shipping</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="text-red-500 mr-3 mt-1" />
                <div>
                  <p className="text-white">(253) 973-0709</p>
                  <p className="text-white">(206) 334-0268</p>
                  <p className="text-gray-400 text-sm">Mon-Fri, 8AM - 6PM PST</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-red-500 mr-3 mt-1" />
                <div>
                  <p className="text-white">exodussamtrucking@gmail.com</p>
                  <p className="text-gray-400 text-sm">24/7 Email Support</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-red-500 mr-3 mt-1" />
                <div>
                  <p className="text-white">5638 S 295TH PL</p>
                  <p className="text-white">Auburn, WA 98001</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Exodus Trucking LLC. All rights reserved. USDOT: 4174476 | MC: 1606218
            </div>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;