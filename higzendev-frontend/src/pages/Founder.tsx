
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FounderHeroSection from '../components/FounderHeroSection';
import ContactSection from '../components/ContactSection';

const Founder = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow bg-gradient-to-br from-background via-dark-section to-background">
        <FounderHeroSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Founder;
