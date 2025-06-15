import React from 'react';
import { Shield, Award, Clock, Truck } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Exodus Trucking</h2>
         <div className="w-24 mx-auto mb-6">
  <img
    src="public/truck.jpg"
    alt="Divider"
    className="w-full h-auto object-contain"
  />
</div>

          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Dedicated to excellence in transportation since our founding, we've built our reputation on reliability, integrity, and exceptional service.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2659054/pexels-photo-2659054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Exodus Trucking Fleet" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-700 text-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in Auburn, WA, Exodus Trucking LLC began with a vision to provide exceptional transportation services with integrity and reliability. What started as a small operation has grown into a respected company serving clients nationwide.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our team of professional drivers and logistics experts work together to ensure your cargo arrives safely and on time, every time. We've built long-lasting relationships with our clients based on trust and exceptional service.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-md text-red-700 mr-4">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Safety First</h4>
                  <p className="text-sm text-gray-600">Rigorous safety protocols and training</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-md text-blue-700 mr-4">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Certified Team</h4>
                  <p className="text-sm text-gray-600">Professional and licensed drivers</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-md text-green-700 mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">On-Time Delivery</h4>
                  <p className="text-sm text-gray-600">Punctual and reliable service</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-md text-yellow-700 mr-4">
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Modern Fleet</h4>
                  <p className="text-sm text-gray-600">Well-maintained vehicles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;