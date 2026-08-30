import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  Linkedin, 
  Facebook, 
  Twitter, 
  Github, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Terminal, 
  Cpu,
  Layers,
  Code2,
  Building2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const techBadges = [
  'Distributed Cloud',
  'Full-Stack Architecture',
  'AI & LLM Pipelines',
  'High-Concurrency Systems'
];

const EliteFounderSection: React.FC = () => {
  return (
    <section className="relative my-12 sm:my-16 lg:my-20 overflow-hidden rounded-3xl border border-white/10 bg-[#060b18] shadow-2xl">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Cyber Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-10 lg:px-14 pt-10 sm:pt-14 pb-8 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Strategic Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Sub-tagline */}
            <div className="flex items-center gap-3">
              <span className="w-8 sm:w-12 h-[2px] bg-cyan-400"></span>
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.3em] uppercase text-cyan-400">
                HUMAN CAPITAL LATTICE
              </span>
            </div>

            {/* Massive Display Heading */}
            <div className="space-y-1">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
                The Elite
              </h2>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Collective<span className="text-indigo-400">.</span>
              </h2>
            </div>

            {/* Subtitle / Manifesto */}
            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl font-normal leading-relaxed">
              HigzenDev is not a traditional hierarchy. We are a synchronized neural network of industry leaders, engineers, and strategists.
            </p>

            {/* Founder & Lead Bio Spotlight Card */}
            <div className="pt-2">
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 backdrop-blur-xl shadow-xl max-w-xl relative overflow-hidden group">
                
                {/* Subtle corner light highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">MD Rasel Mamun</h3>
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 fill-cyan-400/20" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] sm:text-[11px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
                    FOUNDING ARCHITECT & LEAD
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-primary mb-2.5">
                  Founder & Lead Software Engineer
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Pioneering enterprise architectural design, distributed cloud scalability, and full-stack software innovations for global brands and high-growth companies.
                </p>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {techBadges.map((badge, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-[11px] font-mono text-slate-200 border border-slate-700/50"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Social Connects Bar */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-slate-400 font-medium">Connect with Founder:</span>

                  <div className="flex items-center gap-2.5">
                    {/* LinkedIn */}
                    <a 
                      href="https://www.linkedin.com/company/higzendev/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-9 h-9 rounded-xl bg-slate-800/90 hover:bg-[#0A66C2]/20 border border-slate-700/80 hover:border-[#0A66C2]/60 flex items-center justify-center text-slate-300 hover:text-[#0A66C2] transition-all duration-200 hover:scale-110 shadow-sm"
                      aria-label="LinkedIn"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>

                    {/* Facebook */}
                    <a 
                      href="https://www.facebook.com/share/19MBiAE2x8/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-9 h-9 rounded-xl bg-slate-800/90 hover:bg-[#1877F2]/20 border border-slate-700/80 hover:border-[#1877F2]/60 flex items-center justify-center text-slate-300 hover:text-[#1877F2] transition-all duration-200 hover:scale-110 shadow-sm"
                      aria-label="Facebook"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>

                    {/* WhatsApp */}
                    <a 
                      href="https://wa.me/8801870966718" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-9 h-9 rounded-xl bg-slate-800/90 hover:bg-[#25D366]/20 border border-slate-700/80 hover:border-[#25D366]/60 flex items-center justify-center p-1.5 transition-all duration-200 hover:scale-110 shadow-sm"
                      aria-label="WhatsApp"
                    >
                      <img 
                        src="/images/whatsapp-icon.png" 
                        alt="WhatsApp" 
                        className="w-full h-full object-contain"
                      />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              <Button
                asChild
                className="h-12 px-7 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-cyan-500/20 group transition-all duration-300 hover:scale-105"
              >
                <Link to="/schedule-meeting" className="flex items-center gap-2">
                  <span>Connect with Lead Engineer</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

          </div>

          {/* Right Column: Founder Office Photo (5 Cols) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-none group"
            >
              {/* Animated Glowing Gradient Halo behind Photo Card */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/40 via-blue-600/30 to-purple-600/40 opacity-70 blur-xl group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
              
              {/* Photo Frame Container */}
              <div className="relative rounded-[26px] overflow-hidden border-2 border-white/15 bg-card/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-md">
                <img 
                  src="/images/elite-founder-higzendev.jpg" 
                  alt="MD Rasel Mamun - Founder & Lead Software Engineer at HigzenDev" 
                  className="w-full h-auto object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />

                {/* Subtle Gradient Shadow at bottom of photo */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                {/* Live Office Location Pill Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="font-semibold text-white truncate">MD Rasel Mamun</span>
                  </div>
                  <span className="text-cyan-400 font-semibold uppercase text-[10px] shrink-0">
                    HigzenDev HQ
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Cyber-Telemetry Status Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950/90 px-6 sm:px-10 py-3.5 flex flex-wrap items-center justify-between gap-3 text-[10px] sm:text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SYSTEM: <strong className="text-emerald-400">OPTIMAL</strong></span>
          </div>
          <span>SYNCHRONIZATION: <strong className="text-cyan-400">99.8%</strong></span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="hidden md:inline">FOUNDER & LEAD SOFTWARE ENGINEER</span>
        </div>

        <div className="text-slate-500 tracking-wider">
          HIGZENDEV // HQ: GLOBAL // PROTOCOL: ALPHA-7
        </div>
      </div>
    </section>
  );
};

export default EliteFounderSection;
