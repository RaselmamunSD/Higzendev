import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Briefcase, Sparkles, Code2, Globe2, TrendingUp, Users, CheckCircle2, Terminal } from 'lucide-react';
import { Button } from './ui/button';
import ParticleBackground from './ParticleBackground';

const CareersHeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-background via-muted/30 to-background dark:via-slate-950/40">
      {/* Dynamic Canvas Particles */}
      <ParticleBackground />

      {/* Ambient background glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.12, 0.22, 0.12],
          x: [0, -30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[130px] pointer-events-none" 
      />

      {/* Cyber grid subtle overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Animated Hiring Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 backdrop-blur-md text-primary text-xs sm:text-sm font-semibold shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>We're Actively Hiring • Join 50+ Global Innovators</span>
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            </motion.div>

            {/* Main Animated Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]"
            >
              Shape the Future of <br className="hidden sm:inline" />
              Technology with{' '}
              <span className="bg-gradient-to-r from-primary via-cyan-500 to-blue-600 bg-clip-text text-transparent inline-block">
                HigzenDev
              </span>
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Join an extraordinary team of engineers, designers, and problem solvers building enterprise-grade software, AI systems, and scalable cloud solutions for visionary brands worldwide.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('open-positions')}
                className="bg-gradient-to-r from-primary via-cyan-500 to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-bold px-8 py-6 rounded-xl shadow-xl shadow-primary/25 group transition-all duration-300 hover:scale-105"
              >
                <span>Explore Open Roles</span>
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform animate-bounce" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('why-join-us')}
                className="border-border/80 hover:bg-muted font-semibold px-7 py-6 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <span>Why Work With Us</span>
              </Button>
            </motion.div>

            {/* Quick Stats Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border/60"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">100%</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Remote & Flexible</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-primary">98%</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Team Retention</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-500">25+</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Global Projects</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-500">4.9 ★</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Culture Rating</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive 3D/Glass Animated Showcase */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            
            {/* Main Interactive Glass Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl p-6 sm:p-7 bg-card/85 dark:bg-slate-900/85 backdrop-blur-xl border border-border/80 dark:border-white/15 shadow-2xl overflow-hidden"
            >
              {/* Window Header bar */}
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                  <Terminal className="w-3.5 h-3.5 text-primary" />
                  <span>career@higzendev ~ zsh</span>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="mt-4 p-4 rounded-xl bg-muted/40 dark:bg-slate-950/70 border border-border/40 font-mono text-xs sm:text-sm text-left leading-relaxed overflow-x-auto">
                <p className="text-muted-foreground">// Your journey starts here</p>
                <p className="text-emerald-500 dark:text-emerald-400 mt-1">
                  <span className="text-primary font-bold">const</span> candidate = <span className="text-primary font-bold">await</span> higzenDev.hire(&#123;
                </p>
                <p className="pl-4 text-foreground">
                  role: <span className="text-amber-500">"Senior Engineer / Designer"</span>,
                </p>
                <p className="pl-4 text-foreground">
                  mode: <span className="text-cyan-500">"Remote First"</span>,
                </p>
                <p className="pl-4 text-foreground">
                  growth: <span className="text-purple-500">"Unlimited"</span>,
                </p>
                <p className="pl-4 text-foreground">
                  empowerment: <span className="text-emerald-500">true</span>
                </p>
                <p className="text-emerald-500 dark:text-emerald-400">&#125;);</p>
                <p className="text-primary font-semibold mt-2">
                  &gt; Status: Ready to make an impact 🚀
                </p>
              </div>

              {/* Team Collaboration Live Strip */}
              <div className="mt-5 p-3.5 rounded-2xl bg-card border border-border/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    <div className="inline-block h-9 w-9 rounded-full ring-2 ring-background bg-gradient-to-tr from-blue-500 to-cyan-400 text-white font-bold text-xs flex items-center justify-center">
                      RM
                    </div>
                    <div className="inline-block h-9 w-9 rounded-full ring-2 ring-background bg-gradient-to-tr from-purple-500 to-pink-500 text-white font-bold text-xs flex items-center justify-center">
                      AK
                    </div>
                    <div className="inline-block h-9 w-9 rounded-full ring-2 ring-background bg-gradient-to-tr from-emerald-500 to-teal-400 text-white font-bold text-xs flex items-center justify-center">
                      SR
                    </div>
                    <div className="inline-block h-9 w-9 rounded-full ring-2 ring-background bg-muted text-foreground font-bold text-xs flex items-center justify-center">
                      +45
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-foreground">Active Team</p>
                    <p className="text-[11px] text-muted-foreground">Collaborating globally</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Online</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Satellite Card 1 (Top-Right) */}
            <motion.div
              animate={{ 
                y: [0, -12, 0],
                rotate: [0, 1.5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 sm:-right-6 p-3 sm:p-3.5 rounded-2xl bg-card/95 dark:bg-slate-800/95 border border-primary/30 shadow-xl backdrop-blur-md flex items-center gap-2.5 text-xs font-bold text-foreground pointer-events-none"
            >
              <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold">Cutting-Edge Tech</p>
                <p className="text-[10px] text-muted-foreground font-normal">React, AI, Node, Cloud</p>
              </div>
            </motion.div>

            {/* Floating Satellite Card 2 (Bottom-Left) */}
            <motion.div
              animate={{ 
                y: [0, 12, 0],
                rotate: [0, -1.5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-4 sm:-left-6 p-3 sm:p-3.5 rounded-2xl bg-card/95 dark:bg-slate-800/95 border border-emerald-500/30 shadow-xl backdrop-blur-md flex items-center gap-2.5 text-xs font-bold text-foreground pointer-events-none"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold">Rapid Growth</p>
                <p className="text-[10px] text-muted-foreground font-normal">Mentorship & Equity</p>
              </div>
            </motion.div>

            {/* Floating Satellite Card 3 (Bottom-Right) */}
            <motion.div
              animate={{ 
                x: [0, 8, 0],
                y: [0, -8, 0]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="hidden sm:flex absolute bottom-10 -right-8 p-2.5 rounded-xl bg-card/95 dark:bg-slate-800/95 border border-cyan-500/30 shadow-lg backdrop-blur-md items-center gap-2 text-xs font-bold text-foreground pointer-events-none"
            >
              <Globe2 className="w-4 h-4 text-cyan-500" />
              <span>Global Remote</span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CareersHeroSection;
