import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from './Link';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundPosition: "50% 50%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 bg-red-700 rounded-full text-white font-medium mb-6 animate-pulse">
            <span className="text-sm">USDOT 4174476 • MC 1606218</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Reliable <span className="text-red-500">Trucking</span> Solutions for Your Business
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Exodus Trucking LLC provides reliable, efficient transportation and logistics services across the nation. We're committed to on-time delivery and customer satisfaction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#contact" 
              className="bg-red-700 hover:bg-red-800 text-white font-medium px-8 py-4 rounded-md inline-flex items-center transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              Get a Quote
              <ArrowRight size={20} className="ml-2" />
            </Link>
            
            <Link 
              href="#services" 
              className="bg-transparent text-white font-medium px-8 py-4 rounded-md inline-flex items-center border-2 border-white hover:bg-white/10 transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" className="text-white opacity-80 hover:opacity-100 transition-opacity">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Hero;