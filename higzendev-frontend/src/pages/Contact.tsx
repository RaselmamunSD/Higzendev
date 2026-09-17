import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ContactSection from '../components/ContactSection';
import LocationSection from '../components/LocationSection';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, Zap, Clock, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#040711] text-foreground">
      <SEO 
        title="Contact HigzenDev | Rapid Project Consultation & Technical Advisory"
        description="Get in touch with HigzenDev for custom software development, AI systems, and cloud architectures. Response guaranteed within 2 hours under strict NDA."
        canonical="https://higzendev.com/contact"
      />
      <Header />
      <main className="flex-grow">
        
        {/* Futuristic Contact Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#060c1e] via-[#050916] to-[#050814] border-b border-white/10">
          
          {/* Ambient Lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-primary/15 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute top-1/2 right-10 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
          
          {/* Cyber Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-4xl">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md shadow-lg shadow-primary/10"
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>RAPID RESPONSE SQUAD • UNDER 2 HOURS</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6"
            >
              Let’s Build Something{' '}
              <span className="bg-gradient-to-r from-white via-cyan-300 to-primary bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8"
            >
              Have an ambitious vision or need a high-velocity engineering team? Get in touch with us for confidential project scoping, technical consultations, and estimates.
            </motion.p>

            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Response in &lt; 2 Hours</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Strict NDA Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Free Technical Advisory</span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Contact Form & Direct Channels */}
        <ContactSection />

        {/* Google Maps & Office Location Hub */}
        <LocationSection />
        
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
