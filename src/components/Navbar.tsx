import React, { useState, useEffect } from 'react';
import { Truck, Menu, X, Phone } from 'lucide-react';
import { Link } from '../components/Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10 flex items-center justify-center bg-red-700 rounded-md overflow-hidden">
  <img
    src="src/assets/logo.jpg"
    alt="Logo"
    className="w-12 h-12 object-contain"
  />
</div>

            <div className="flex flex-col">
              <span className={`font-bold text-lg ${isScrolled ? 'text-red-700' : 'text-white'}`}>
                EXODUS
              </span>
              <span className={`text-xs -mt-1 ${isScrolled ? 'text-blue-800' : 'text-white'}`}>
                TRUCKING LLC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors duration-200`}>Home</Link>
            <Link href="#about" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors duration-200`}>About</Link>
            <Link href="#services" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors duration-200`}>Services</Link>
            <Link href="#fleet" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors duration-200`}>Fleet</Link>
            <Link href="#careers" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors duration-200`}>Careers</Link>
            <Link href="#contact" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors duration-200`}>Contact</Link>
            <Link 
              href="tel:+12345678910" 
              className="flex items-center bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors duration-200"
            >
              <Phone size={16} className="mr-2" />
              <span className="font-semibold">Call Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800"
          >
            <Menu size={24} className={isScrolled ? 'text-black' : 'text-white'} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)}>
              <X size={24} className="text-gray-800" />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 mt-20">
            <Link 
              href="/" 
              className="text-gray-800 text-xl font-medium hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="text-gray-800 text-xl font-medium hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#services" 
              className="text-gray-800 text-xl font-medium hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#fleet" 
              className="text-gray-800 text-xl font-medium hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Fleet
            </Link>
            <Link 
              href="#careers" 
              className="text-gray-800 text-xl font-medium hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-800 text-xl font-medium hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="tel:+12345678910" 
              className="flex items-center bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800 transition-colors duration-200 mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={18} className="mr-2" />
              <span className="font-semibold">Call Now</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;