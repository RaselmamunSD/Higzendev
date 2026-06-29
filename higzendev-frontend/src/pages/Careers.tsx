
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CareersHeroSection from '../components/CareersHeroSection';
import WhyJoinUsSection from '../components/WhyJoinUsSection';
import BenefitsSection from '../components/BenefitsSection';
import OpenPositionsSection from '../components/OpenPositionsSection';

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <CareersHeroSection />
        <WhyJoinUsSection />
        <BenefitsSection />
        <OpenPositionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
