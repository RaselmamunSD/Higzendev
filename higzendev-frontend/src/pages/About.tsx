
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import AboutHeroSection from '../components/AboutHeroSection';
import VisionSection from '../components/VisionSection';
import TeamSection from '../components/TeamSection';
import IndustryExpertiseSection from '../components/IndustryExpertiseSection';
import ClientTestimonialsSection from '../components/ClientTestimonialsSection';
import TechStacksSection from '../components/TechStacksSection';
import WorkProcessSection from '../components/WorkProcessSection';
import AboutSection from '../components/AboutSection';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import WhyWorkWithUsSection from '../components/WhyWorkWithUsSection';
import ContactSection from '../components/ContactSection';
import ClientLogosSection from '../components/ClientLogosSection';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="About HigzenDev | Engineering Craftsmanship & Company Mission"
        description="Learn about HigzenDev's story, vision, and elite engineering culture. We empower global enterprises with cutting-edge software and autonomous AI architectures."
        canonical="https://higzendev.com/about"
      />
      <Header />
      <main className="flex-grow">
        <AboutHeroSection />
        <AboutSection />
        <ClientLogosSection />
        <VisionSection />
        <TeamSection />
        <IndustryExpertiseSection />
        <SuccessStoriesSection />
        <WhyWorkWithUsSection />
        <ClientTestimonialsSection />
        <TechStacksSection />
        <WorkProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
