import React from 'react';
import { TruckIcon, Globe, Package, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { Link } from './Link';

const services = [
  {
    icon: <TruckIcon className="h-12 w-12 text-red-700" />,
    title: "Long-Haul Transport",
    description: "Reliable coast-to-coast transportation services with our professional team of drivers and modern fleet of trucks."
  },
  {
    icon: <Package className="h-12 w-12 text-red-700" />,
    title: "Specialized Freight",
    description: "Custom solutions for oversized, heavy, or sensitive shipments requiring special handling and equipment."
  },
  {
    icon: <MapPin className="h-12 w-12 text-red-700" />,
    title: "Regional Delivery",
    description: "Efficient transportation services throughout the Western states with flexible scheduling options."
  },
  {
    icon: <Globe className="h-12 w-12 text-red-700" />,
    title: "Logistics Management",
    description: "Comprehensive logistics solutions including route optimization, load planning, and shipment tracking."
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-red-700" />,
    title: "Secure Transport",
    description: "Enhanced security options for high-value or sensitive cargo requiring extra protection measures."
  },
  {
    icon: <Clock className="h-12 w-12 text-red-700" />,
    title: "Expedited Shipping",
    description: "Fast, time-critical delivery services when your shipment needs to arrive on a tight schedule."
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            We offer comprehensive transportation and logistics solutions tailored to meet your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                href="#contact" 
                className="text-red-700 font-medium inline-flex items-center hover:text-red-800 transition-colors"
              >
                Learn More 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-1" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-lg p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:max-w-2xl mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Need a Custom Transportation Solution?</h3>
              <p className="text-blue-100">
                Contact our team to discuss your specific transportation requirements. We'll work with you to develop a customized solution that fits your needs and budget.
              </p>
            </div>
            <Link 
              href="#contact" 
              className="bg-white text-blue-800 font-bold px-8 py-4 rounded-md hover:bg-blue-50 transition-colors duration-300 whitespace-nowrap"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;