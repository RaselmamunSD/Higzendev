import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ClientSuccessSection from '../components/ClientSuccessSection';
import SalesStatisticsSection from '../components/SalesStatisticsSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import IndustriesSection from '../components/IndustriesSection';
import IndustryExpertiseSection from '../components/IndustryExpertiseSection';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import { motion } from 'framer-motion';
import { Sparkles, Layers, ShieldCheck, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';

const Industries: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#040711] text-foreground">
      <SEO 
        title="Enterprise Industry Solutions & Digital Transformation | HigzenDev"
        description="HigzenDev delivers custom software and AI engineering across FinTech, HealthTech, E-Commerce, Logistics, SaaS, and High-Growth tech enterprises."
        canonical="https://higzendev.com/industries"
      />
      <Header />
      <main className="flex-grow">
        
        {/* Futuristic Industries Hero Section with Team Collaboration Background */}
        <section className="relative min-h-[550px] lg:min-h-[620px] flex items-center justify-center overflow-hidden bg-[#040711] border-b border-white/10 py-20 lg:py-28">
          
          {/* Background Image: HigzenDev Team Collaboration Banner */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img
                src="/images/industries-hero-team.jpg"
                alt="HigzenDev Engineering Team Delivering Industry Solutions"
                className="w-full h-full object-cover object-center filter brightness-[0.90] contrast-[1.05]"
                loading="eager"
              />
            </motion.div>

            {/* Ambient Lighting & Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/20 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

            {/* Gradient Overlays for High-Contrast Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040711]/92 via-[#040711]/70 to-[#040711]/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-transparent to-[#040711]/40" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-4xl">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] mb-6"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}
            >
              Industries We{' '}
              <span className="bg-gradient-to-r from-white via-cyan-300 to-primary bg-clip-text text-transparent">
                Transform & Scale
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8 font-medium"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
            >
              Empowering global leaders with mission-critical software, sovereign AI workflows, and high-concurrency cloud architectures tailored to specific industry demands.
            </motion.p>

            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-300"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>FinTech & HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>High-Throughput Architectures</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span>Measurable Business ROI</span>
              </div>
            </motion.div>

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
