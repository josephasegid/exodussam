import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  serviceType: string;
}

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: 'Long-Haul Transport',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xdkgbeyg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          serviceType: 'Long-Haul Transport',
        });

        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred. Please check your internet and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Get in touch with our team for quotes, questions, or to schedule a shipment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full text-red-700 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600">(253) 973-0709</p>
                  <p className="text-gray-600">(206) 334-0268</p>
                  <p className="text-gray-600">Mon-Fri, 8AM - 6PM PST</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full text-red-700 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600">exodussamtrucking@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full text-red-700 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Headquarters</h4>
                  <p className="text-gray-600">5638 S 295TH PL</p>
                  <p className="text-gray-600">Auburn, WA 98001</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-3">Our Hours</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span><span>8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span><span>9:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span><span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get a Quote</h3>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text" name="name" value={formState.name} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500" required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email" name="email" value={formState.email} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500" required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel" name="phone" value={formState.phone} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label>
                      <select
                        name="serviceType" value={formState.serviceType} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500" required
                      >
                        <option>Long-Haul Transport</option>
                        <option>Regional Delivery</option>
                        <option>Specialized Freight</option>
                        <option>Logistics Management</option>
                        <option>Expedited Shipping</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div className="md:col-span-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                      <input
                        type="text" name="subject" value={formState.subject} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500" required
                      />
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                      <textarea
                        name="message" rows={5} value={formState.message} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500" required
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={`w-full bg-red-700 text-white font-medium py-3 px-6 rounded-md hover:bg-red-800 transition-colors duration-300 flex items-center justify-center ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0..." />
                      </svg>
                    ) : (
                      <Send size={18} className="mr-2" />
                    )}
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
