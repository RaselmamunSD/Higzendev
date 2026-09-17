import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import FounderHero from '../components/founder/FounderHero';
import FounderTimeline from '../components/founder/FounderTimeline';
import FounderPhilosophy from '../components/founder/FounderPhilosophy';
import FounderTechStack from '../components/founder/FounderTechStack';
import FounderLetter from '../components/founder/FounderLetter';
import FounderCTA from '../components/founder/FounderCTA';
import ContactSection from '../components/ContactSection';

const Founder: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary selection:text-primary-foreground">
      <SEO 
        title="MD Rasel Mamun | Founder & Lead Software Engineer at HigzenDev"
        description="Meet MD Rasel Mamun, Founder and Lead Software Engineer at HigzenDev Technologies. Full-Stack architect, distributed systems engineer, and enterprise cloud strategist."
        canonical="https://higzendev.com/about/founder"
        ogType="profile"
        ogImage="/images/rasel-mamun-desk.jpg"
      />
      <Header />
      <main className="flex-grow">
        {/* Hero & Interactive Story */}
        <FounderHero />

        {/* Career & Milestone Timeline */}
        <FounderTimeline />

        {/* Core Leadership & Engineering Principles */}
        <FounderPhilosophy />

        {/* Technical Domain Matrix */}
        <FounderTechStack />

        {/* Executive Letter from Michael */}
        <FounderLetter />

        {/* Strategic Booking Banner */}
        <FounderCTA />

        {/* Contact Form Section */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Founder;
