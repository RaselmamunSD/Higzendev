
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

import IndustriesSection from '../components/IndustriesSection';
import ContactSection from '../components/ContactSection';
import CTA from '../components/CTA';
import BusinessGoalsSection from '../components/BusinessGoalsSection';
import ServiceDetailsSection from '../components/ServiceDetailsSection';
import WorkProcessSection from '../components/WorkProcessSection';
import TechStacksSection from '../components/TechStacksSection';
import TeamSection from '../components/TeamSection';
import ClientTestimonialsSection from '../components/ClientTestimonialsSection';
import LocationSection from '../components/LocationSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <BusinessGoalsSection />
        
        <ServiceDetailsSection />
        <WorkProcessSection />
        <TechStacksSection />
        <TeamSection />
        <ClientTestimonialsSection />
        <IndustriesSection />
        <CTA />
        <ContactSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
