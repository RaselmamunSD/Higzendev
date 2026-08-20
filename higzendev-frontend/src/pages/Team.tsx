import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamHero from '../components/team/TeamHero';
import LeadershipSpotlight from '../components/team/LeadershipSpotlight';
import TeamRoster from '../components/team/TeamRoster';
import EngineeringCulture from '../components/team/EngineeringCulture';
import TeamCTA from '../components/team/TeamCTA';
import ContactSection from '../components/ContactSection';

const Team: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main className="flex-grow">
        {/* Team Hero with DNA Stats */}
        <TeamHero />

        {/* Founder & Lead Software Engineers Spotlight (Short Introductions) */}
        <LeadershipSpotlight />

        {/* Interactive Discipline-Filtered Engineering Squads */}
        <TeamRoster />

        {/* Engineering Culture & Standards */}
        <EngineeringCulture />

        {/* Strategic Hiring & Careers CTA Banner */}
        <TeamCTA />

        {/* Contact Form Section */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Team;
