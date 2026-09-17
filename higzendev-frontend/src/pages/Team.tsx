import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="The Elite Collective | Senior Engineers & Cloud Architects at HigzenDev"
        description="Meet the top 1% engineering minds behind HigzenDev. Our distributed squads of full-stack engineers, AI researchers, and DevOps architects build world-class tech."
        canonical="https://higzendev.com/team"
      />
      <Header />
      <main className="flex-grow">
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Team;
