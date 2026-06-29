
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import { ArrowDown } from 'lucide-react';

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
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
