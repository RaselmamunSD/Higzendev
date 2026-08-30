import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Linkedin, Facebook, Twitter, Github, Mail, ArrowRight, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EliteFounderSection: React.FC = () => {
  return (
    <section className="relative my-12 sm:my-16 lg:my-20 overflow-hidden rounded-3xl border border-white/10 bg-[#060b18] shadow-2xl">
      {/* Background glow ambiance */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Cyber Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left pb-8 lg:pb-16">
            
            {/* Top Sub-tagline */}
            <div className="flex items-center gap-3">
              <span className="w-8 sm:w-12 h-[2px] bg-cyan-400"></span>
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.3em] uppercase text-cyan-400">
                HUMAN CAPITAL LATTICE
              </span>
            </div>

            {/* Massive Heading */}
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

            {/* Founder & Lead Bio Spotlight */}
            <div className="pt-2">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md max-w-xl">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">MD Rasel Mamun</h3>
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 font-semibold">
                    LEAD ARCHITECT
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-primary mb-2">
                  Founder & Lead Software Engineer
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Driving architectural excellence, high-concurrency systems, and cutting-edge software engineering solutions for global enterprises.
                </p>
                
                {/* Tech Badges & Connects */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-mono text-slate-300">Full-Stack</span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-mono text-slate-300">Distributed Cloud</span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-mono text-slate-300">System Architecture</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a 
                      href="https://www.linkedin.com/company/higzendev/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-400 text-slate-400 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a 
                      href="https://www.facebook.com/share/19MBiAE2x8/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-blue-500/20 hover:text-blue-400 text-slate-400 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-3.5 h-3.5" />
                    </a>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-purple-500/20 hover:text-purple-400 text-slate-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <a 
                      href="https://wa.me/8801870966718" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-emerald-500/20 hover:text-emerald-400 text-slate-400 transition-colors"
                      aria-label="WhatsApp"
                    >
                      <span className="text-[10px] font-bold">WA</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                asChild
                className="h-12 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-lg shadow-cyan-500/20 group"
              >
                <Link to="/schedule-meeting" className="flex items-center gap-2">
                  Connect with Lead Engineer
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

          </div>

          {/* Right Column: Founder Portrait (5 Cols) */}
          <div className="lg:col-span-5 flex items-end justify-center lg:justify-end relative">
            <div className="relative max-w-[340px] sm:max-w-[400px] lg:max-w-none w-full">
              {/* Backlight halo */}
              <div className="absolute -inset-4 bg-gradient-to-t from-blue-600/30 via-indigo-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />
              
              <img 
                src="/images/rasel-mamun-portrait.png" 
                alt="MD Rasel Mamun - Founder & Lead Software Engineer" 
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] filter contrast-[1.05]"
              />
            </div>
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
