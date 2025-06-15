import React from 'react';
import { Users, Calendar, DollarSign, Briefcase, Award, ShieldCheck } from 'lucide-react';
import { Link } from './Link';

const benefits = [
  {
    icon: <DollarSign className="h-6 w-6 text-blue-700" />,
    title: "Competitive Pay",
    description: "Industry-leading compensation with performance bonuses and regular increases."
  },
  {
    icon: <Calendar className="h-6 w-6 text-blue-700" />,
    title: "Home Time",
    description: "Regular schedules that prioritize work-life balance and family time."
  },
  {
    icon: <Briefcase className="h-6 w-6 text-blue-700" />,
    title: "Health Benefits",
    description: "Comprehensive medical, dental, and vision coverage for you and your family."
  },
  {
    icon: <Award className="h-6 w-6 text-blue-700" />,
    title: "Career Growth",
    description: "Opportunities for advancement and professional development."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-blue-700" />,
    title: "Safety Culture",
    description: "Strong commitment to driver safety with ongoing training and support."
  },
  {
    icon: <Users className="h-6 w-6 text-blue-700" />,
    title: "Team Environment",
    description: "Join a supportive team that values your contribution and experience."
  }
];

const RecruitmentSection: React.FC = () => {
  return (
    <section id="careers" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Drive With Us</h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Join our team of professional drivers and build your career with a company that values safety, reliability, and its people.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/6170398/pexels-photo-6170398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Professional Truck Driver" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold">Now</div>
              <div className="text-sm">Hiring</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Why Drive for Exodus?</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We're more than just a trucking company – we're a family of dedicated professionals committed to excellence. When you join Exodus Trucking, you become part of a team that respects your skills, values your time, and rewards your hard work.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-900 p-3 rounded-md mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h4 className="font-bold mb-3">Minimum Requirements</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Valid Commercial Driver's License (CDL-A)
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Minimum 2 years of verifiable driving experience
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Clean driving record
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ability to pass DOT physical and drug screening
                </li>
              </ul>
            </div>

            <Link 
              href="#contact" 
              className="bg-red-700 hover:bg-red-800 text-white font-medium px-8 py-4 rounded-md inline-flex items-center transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;