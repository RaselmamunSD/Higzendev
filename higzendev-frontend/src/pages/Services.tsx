import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceDetailsSection from '../components/ServiceDetailsSection';
import { motion } from 'framer-motion';
import { Sparkles, Zap, ShieldCheck, Rocket, Code2, Users2, Clock, CheckCircle2, Award } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#040711] text-foreground">
      <Header />
      <main className="flex-grow">
        
        {/* Futuristic Services Hero Section with Crescent Office Hub Background */}
        <section className="relative min-h-[550px] lg:min-h-[620px] flex items-center justify-center overflow-hidden bg-[#040711] border-b border-white/10 py-20 lg:py-28">
          
          {/* Background Image: HigzenDev Crescent Illuminated Office Hub */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img
                src="/images/services-hero-office.jpg"
                alt="HigzenDev Engineering Hub Headquarters"
                className="w-full h-full object-cover object-center filter brightness-[0.90] contrast-[1.05]"
                loading="eager"
              />
            </motion.div>

            {/* Ambient Lighting & Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/20 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute top-10 right-10 w-[450px] h-[300px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

            {/* Gradient Overlays for High-Contrast Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040711]/92 via-[#040711]/70 to-[#040711]/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-transparent to-[#040711]/40" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-4xl">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md shadow-lg shadow-primary/10"
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>FULL-LIFECYCLE DIGITAL ENGINEERING SUITE</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] mb-6"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}
            >
              Our Elite{' '}
              <span className="bg-gradient-to-r from-white via-cyan-300 to-primary bg-clip-text text-transparent">
                Engineering Services
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
              Transforming businesses through mission-critical software, sovereign generative AI pipelines, cloud infrastructure, and dedicated high-velocity developer squads.
            </motion.p>

            {/* Capability Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-300"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
                <Rocket className="w-4 h-4 text-cyan-400" />
                <span>Enterprise Solutions</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Rapid Delivery Sprints</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span>Zero-Debt Architecture</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>Security & Scalability</span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Services Grid */}
        <ServiceDetailsSection isMarquee={false} />

        {/* Why Choose Us Section */}
        <section className="py-20 sm:py-24 bg-[#050814] relative overflow-hidden border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  HigzenDev Services?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
                We combine deep technical craftsmanship with domain business acumen to deliver exceptional outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-sm text-left group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-5 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">Elite Senior Engineers</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">Top 1% vetted developers and system architects dedicated to your stack.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-sm text-left group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-5 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-emerald-300 transition-colors">Fast Turnaround</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">Weekly live sprint demos and agile shipping without compromising stability.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm text-left group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-5 text-blue-400 group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-blue-300 transition-colors">Custom Architectures</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">Tailored proprietary solutions designed to scale smoothly to millions of users.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 backdrop-blur-sm text-left group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-5 text-purple-400 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-purple-300 transition-colors">Continuous Support</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">Proactive monitoring, SLA-backed maintenance, and site reliability engineering.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Services;
