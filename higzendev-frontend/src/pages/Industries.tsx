
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientSuccessSection from '../components/ClientSuccessSection';
import SalesStatisticsSection from '../components/SalesStatisticsSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import IndustriesSection from '../components/IndustriesSection';
import IndustryExpertiseSection from '../components/IndustryExpertiseSection';
import SuccessStoriesSection from '../components/SuccessStoriesSection';

const Industries = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/20 to-accent/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 text-center relative">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transforming businesses across multiple industries with cutting-edge technology solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>
        </section>

        <IndustryExpertiseSection />
        <ClientSuccessSection />
        <SuccessStoriesSection />
        <SalesStatisticsSection />
        <CaseStudiesSection />
        <IndustriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
