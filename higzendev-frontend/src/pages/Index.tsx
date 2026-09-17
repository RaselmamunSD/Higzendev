
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import ClientLogosSection from '../components/ClientLogosSection';
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
      <SEO 
        title="HigzenDev | Enterprise Software Solutions, AI Systems & Dedicated Squads"
        description="HigzenDev is a premier software engineering & AI development agency founded by MD Rasel Mamun. We build high-throughput distributed backends, autonomous AI pipelines, custom web apps, and enterprise cloud solutions."
        canonical="https://higzendev.com"
      />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ClientLogosSection />
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
