import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const fleetData = [
  {
    id: 1,
    type: "Semi Truck",
    image: "https://images.pexels.com/photos/2659054/pexels-photo-2659054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Our semi trucks are the backbone of our long-haul operations, equipped with the latest safety features and comfort amenities for our drivers.",
    specs: ["53' Trailers Available", "GPS Tracking", "Climate-Controlled", "Sleeper Cabins"]
  },
  {
    id: 2,
    type: "Box Truck",
    image: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Perfect for urban deliveries and smaller loads, our box trucks provide efficient transportation for time-sensitive shipments.",
    specs: ["Lift Gates Available", "Temperature Control Options", "14'-26' Lengths", "5,000-10,000 lb Capacity"]
  },
  {
    id: 3,
    type: "Flatbed Truck",
    image: "https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Ideal for oversized loads and construction materials, our flatbed trucks offer versatile hauling solutions for various industries.",
    specs: ["Multiple Tie-Down Points", "Extended Length Options", "Up to 48' Deck", "Heavy Load Capacity"]
  },
  {
    id: 4,
    type: "Refrigerated Truck",
    image: "https://images.pexels.com/photos/2519484/pexels-photo-2519484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Temperature-controlled transportation for perishable goods, pharmaceuticals, and other climate-sensitive freight.",
    specs: ["Precise Temperature Control", "Continuous Monitoring", "Multi-Temperature Zones", "Backup Power Systems"]
  }
];

const FleetSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % fleetData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + fleetData.length) % fleetData.length);
  };

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Fleet</h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            We maintain a modern, diverse fleet of vehicles to accommodate various transportation needs.
          </p>
        </div>

        {/* Fleet Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Navigation */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
            <button 
              onClick={prevSlide} 
              className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
            <button 
              onClick={nextSlide} 
              className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>
          </div>
          
          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {fleetData.map((vehicle) => (
                <div key={vehicle.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={vehicle.image} 
                        alt={`${vehicle.type}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{vehicle.type}</h3>
                      <p className="text-gray-700 mb-6">{vehicle.description}</p>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-3">Specifications:</h4>
                        <ul className="space-y-2">
                          {vehicle.specs.map((spec, index) => (
                            <li key={index} className="flex items-center text-gray-700">
                              <svg 
                                className="h-5 w-5 text-green-500 mr-2" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M5 13l4 4L19 7" 
                                />
                              </svg>
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {fleetData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-red-700' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Fleet Maintenance Info */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Fleet Maintenance & Safety</h3>
          <p className="text-gray-700 mb-4">
            At Exodus Trucking, we prioritize the maintenance and safety of our fleet. All vehicles undergo regular inspections and maintenance to ensure reliability and optimal performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded shadow">
              <div className="font-bold text-gray-900 mb-2">Regular Maintenance</div>
              <p className="text-sm text-gray-600">Scheduled service checks and preventative maintenance</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="font-bold text-gray-900 mb-2">Safety Equipment</div>
              <p className="text-sm text-gray-600">Advanced safety features and monitoring systems</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="font-bold text-gray-900 mb-2">Clean Energy</div>
              <p className="text-sm text-gray-600">Investing in fuel-efficient and eco-friendly technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;