import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "John Anderson",
    company: "Pacific Manufacturing",
    role: "Logistics Manager",
    quote: "Exodus Trucking has been our go-to transportation partner for over five years. Their reliability and professionalism have made them an invaluable part of our supply chain.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Northwest Distributors",
    role: "Operations Director",
    quote: "We've worked with many trucking companies, but Exodus stands out for their exceptional communication and on-time delivery. They treat our cargo as if it were their own.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Michael Chen",
    company: "West Coast Electronics",
    role: "Supply Chain Manager",
    quote: "The team at Exodus Trucking has helped us streamline our distribution network and reduce transit times. Their attention to detail and problem-solving abilities are impressive.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    company: "Coastal Fresh Foods",
    role: "Procurement Specialist",
    quote: "For our temperature-sensitive shipments, we need a partner we can trust. Exodus Trucking delivers consistently and has never let us down, even during challenging weather conditions.",
    avatar: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Don't just take our word for it—hear from the businesses that rely on our transportation services.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-12 -left-12 text-gray-200 opacity-50">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9999 14.1999H8.3999C8.3999 12.5999 8.3999 11.3999 9.1999 10.5999C9.9999 9.79992 11.1999 9.79992 11.9999 9.79992V8.39992C10.7999 8.39992 9.5999 8.79992 8.7999 9.59992C7.1999 11.1999 7.1999 13.5999 7.1999 15.9999H11.9999V14.1999Z"/>
                <path d="M16.7999 14.1999H13.1999C13.1999 12.5999 13.1999 11.3999 13.9999 10.5999C14.7999 9.79992 15.9999 9.79992 16.7999 9.79992V8.39992C15.5999 8.39992 14.3999 8.79992 13.5999 9.59992C11.9999 11.1999 11.9999 13.5999 11.9999 15.9999H16.7999V14.1999Z"/>
              </svg>
            </div>
            
            {/* Testimonials */}
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
              <div className="overflow-hidden h-64">
                <div 
                  className="transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateY(-${activeIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="h-64 flex-shrink-0">
                      <p className="text-gray-700 italic text-lg mb-6">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Testimonial Navigation */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 w-8 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-red-700' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-16">
            <h3 className="text-center text-lg font-medium text-gray-700 mb-8">Trusted By Industry Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white p-4 rounded-lg flex items-center justify-center h-20 shadow-sm">
                <span className="text-gray-400 font-medium">COMPANY LOGO</span>
              </div>
              <div className="bg-white p-4 rounded-lg flex items-center justify-center h-20 shadow-sm">
                <span className="text-gray-400 font-medium">COMPANY LOGO</span>
              </div>
              <div className="bg-white p-4 rounded-lg flex items-center justify-center h-20 shadow-sm">
                <span className="text-gray-400 font-medium">COMPANY LOGO</span>
              </div>
              <div className="bg-white p-4 rounded-lg flex items-center justify-center h-20 shadow-sm">
                <span className="text-gray-400 font-medium">COMPANY LOGO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;