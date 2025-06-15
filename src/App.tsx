import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import FleetSection from './components/FleetSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import RecruitmentSection from './components/RecruitmentSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Exodus Trucking LLC | Professional Transportation Services';
    
    // Get the default title element
    const defaultTitleElement = document.querySelector('title[data-default]');
    if (defaultTitleElement) {
      defaultTitleElement.removeAttribute('data-default');
    }
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FleetSection />
      <TestimonialsSection />
      <RecruitmentSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;