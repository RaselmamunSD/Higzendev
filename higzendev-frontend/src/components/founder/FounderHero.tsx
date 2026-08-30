import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Linkedin, 
  Facebook,
  Twitter, 
  Github, 
  Mail, 
  ArrowRight, 
  Calendar, 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  Terminal, 
  Zap, 
  Layers, 
  Cpu, 
  Globe2, 
  Quote 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { value: '15+', label: 'Years in Tech', subtitle: 'Architecture & Leadership', icon: Briefcase, color: 'from-blue-500 to-cyan-400' },
  { value: '500+', label: 'Shipped Systems', subtitle: 'Enterprise Scale', icon: Layers, color: 'from-purple-500 to-pink-500' },
  { value: '120+', label: 'Vetted Engineers', subtitle: 'Under Leadership', icon: Globe2, color: 'from-emerald-500 to-teal-400' },
  { value: '99.4%', label: 'Retention Rate', subtitle: 'Long-term Partners', icon: Award, color: 'from-amber-500 to-orange-400' },
];

const storyTabs = [
  {
    id: 'origin',
    title: 'The Engineering Journey',
    icon: Terminal,
    headline: 'Architecting Hyper-Systems & Distributed Cloud',
    description: `With a relentless passion for high-performance software engineering and complex system architecture, MD Rasel Mamun has spearheaded mission-critical digital systems and distributed infrastructure.

Managing hyper-scalable systems with zero downtime gave him deep firsthand insights into what separates standard development from elite, failure-proof software engineering.`,
    highlight: 'Key Focus: Distributed Cloud Infrastructure, System Architecture, High-Concurrency Engines'
  },
  {
    id: 'mission',
    title: 'Why HigzenDev Was Born',
    icon: Zap,
    headline: 'Eliminating the Software Engineering Quality Gap',
    description: `MD Rasel Mamun observed a critical industry bottleneck: traditional outsourcing agencies prioritized headcount over craftsmanship, while hiring in-house talent took months and exorbitant capital.

HigzenDev was built on a radically different premise: providing global founders and enterprises with instant access to top-tier vetted engineering talent, operating as deeply embedded strategic partners.`,
    highlight: 'Key Focus: Top 1% Engineering Rigor, Clean Code Standards, Direct Technical Collaboration'
  },
  {
    id: 'philosophy',
    title: 'Engineering Doctrine',
    icon: Layers,
    headline: 'Zero-Fluff, High-Velocity, Bulletproof Code',
    description: `MD Rasel Mamun champions a "Zero-Technical-Debt" culture. Every line of code written by HigzenDev teams is treated as high-leverage business infrastructure that must scale gracefully for years.

His philosophy bridges executive strategic clarity with hands-on technical precision—ensuring engineering roadmaps directly accelerate product moat and client growth.`,
    highlight: 'Key Focus: Clean Microservices, Automated QA by Default, Radical Technical Transparency'
  },
  {
    id: 'vision',
    title: 'The AI & Cloud Frontier',
    icon: Cpu,
    headline: 'Pioneering Next-Gen Intelligent Architectures',
    description: `Steering HigzenDev into the forefront of generative AI, autonomous dev workflows, and edge-native architectures.

We help enterprises transition from legacy monolithic systems to intelligent, self-optimizing platforms powered by cutting-edge LLMs and resilient cloud ecosystems.`,
    highlight: 'Key Focus: Enterprise LLM Integration, Vector Data Stores, Edge AI Scalability'
  }
];

export const FounderHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState('origin');
  const currentTab = storyTabs.find(tab => tab.id === activeTab) || storyTabs[0];

  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* Background dynamic glow grids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-background to-background pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-purple-500/15 rounded-full blur-[128px] pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Top Header Badge */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs md:text-sm font-semibold tracking-wide uppercase">Architect of Scale & Innovation</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl"
          >
            Behind the Vision of{' '}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              HigzenDev
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl font-normal leading-relaxed"
          >
            Meet <strong className="text-foreground font-semibold">MD Rasel Mamun</strong> — Founder & Lead Software Engineer at HigzenDev, architecting high-scale software systems, distributed cloud platforms, and modern AI engineering.
          </motion.p>
        </div>

        {/* Main Grid: Founder Hologram Card + Interactive Storyboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Futuristic Founder Holographic Card (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-primary/30 via-border/50 to-purple-500/20 shadow-2xl backdrop-blur-xl">
              <div className="relative rounded-[22px] bg-card/90 border border-border/80 p-6 sm:p-8 overflow-hidden">
                
                {/* Glow Orb behind image */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700 pointer-events-none" />

                {/* Status indicator badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Available for Architecture Advisory
                  </div>
                  <Badge variant="outline" className="border-primary/40 text-primary bg-primary/5 text-xs font-mono font-semibold">
                    Lead Architect
                  </Badge>
                </div>

                {/* Avatar with Cyber Halo */}
                <div className="relative mx-auto w-52 sm:w-60 mb-6">
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-primary via-cyan-400 to-purple-600 opacity-70 blur-md group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-primary/50 bg-muted shadow-2xl">
                    <img 
                      src="/images/rasel-mamun-desk.jpg" 
                      alt="MD Rasel Mamun - Founder & Lead Software Engineer at HigzenDev"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-1.5 justify-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground">MD Rasel Mamun</h2>
                    <CheckCircle2 className="w-5 h-5 text-primary fill-primary/20" />
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-primary mt-1">Founder & Lead Software Engineer</p>
                  <p className="text-xs text-muted-foreground mt-0.5">HigzenDev Technologies</p>
                </div>

                {/* Verified Credentials Pills */}
                <div className="space-y-2.5 mb-6 text-xs sm:text-sm">
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-muted/40 border border-border/60 hover:border-primary/40 transition-colors">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Full-Stack & Cloud Architecture</div>
                      <div className="text-muted-foreground text-xs">High-Throughput Enterprise Systems</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-muted/40 border border-border/60 hover:border-primary/40 transition-colors">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Distributed Systems & AI Pipelines</div>
                      <div className="text-muted-foreground text-xs">Microservices, FastAPI & Modern Stacks</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-muted/40 border border-border/60 hover:border-primary/40 transition-colors">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Engineering Craftsmanship</div>
                      <div className="text-muted-foreground text-xs">Zero-Debt Scalable Architectures</div>
                    </div>
                  </div>
                </div>

                {/* Social Connects */}
                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-medium">Connect Directly:</span>
                  <div className="flex items-center gap-2">
                    <a 
                      href="https://www.linkedin.com/company/higzendev/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-muted/60 hover:bg-primary/20 hover:text-primary text-muted-foreground border border-border/60 transition-all duration-200 hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://www.facebook.com/share/19MBiAE2x8/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-muted/60 hover:bg-blue-500/20 hover:text-blue-400 text-muted-foreground border border-border/60 transition-all duration-200 hover:scale-110"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-muted/60 hover:bg-cyan-500/20 hover:text-cyan-400 text-muted-foreground border border-border/60 transition-all duration-200 hover:scale-110"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-muted/60 hover:bg-purple-500/20 hover:text-purple-400 text-muted-foreground border border-border/60 transition-all duration-200 hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://wa.me/8801870966718" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-muted/60 hover:bg-emerald-500/20 hover:text-emerald-400 text-muted-foreground border border-border/60 transition-all duration-200 hover:scale-110"
                      aria-label="WhatsApp (+880 1870-966718)"
                      title="WhatsApp: +880 1870-966718"
                    >
                      <span className="text-xs font-bold">WA</span>
                    </a>
                    <a 
                      href="tel:+8801870966718" 
                      className="p-2.5 rounded-xl bg-muted/60 hover:bg-primary/20 hover:text-primary text-muted-foreground border border-border/60 transition-all duration-200 hover:scale-110"
                      aria-label="Call (+880 1870-966718)"
                      title="Call: +880 1870-966718"
                    >
                      <span className="text-xs font-bold">Tel</span>
                    </a>
                    <a 
                      href="mailto:contact@higzendev.com" 
                      className="p-2.5 rounded-xl bg-muted/60 hover:bg-blue-500/20 hover:text-blue-400 text-muted-foreground border border-border/60 transition-all duration-200 hover:scale-110"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Storyboard & Vision Architecture (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Story Tabs Bar */}
            <div className="p-1.5 rounded-2xl bg-muted/50 border border-border/80 backdrop-blur-md flex flex-wrap sm:flex-nowrap gap-1.5">
              {storyTabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 relative ${
                      isActive 
                        ? 'text-primary-foreground bg-primary shadow-lg shadow-primary/25' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
                    <span className="truncate">{tab.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Story Card with AnimatePresence */}
            <div className="rounded-3xl bg-card/70 border border-border/80 p-6 sm:p-8 backdrop-blur-xl relative min-h-[340px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTab.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-4"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    Chapter: {currentTab.title}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
                    {currentTab.headline}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base whitespace-pre-line">
                    {currentTab.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/20 text-xs sm:text-sm text-foreground flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    <span className="font-medium">{currentTab.highlight}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Founder Personal Quote Box */}
              <div className="mt-6 pt-6 border-t border-border/60 relative">
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div>
                    <blockquote className="text-sm italic text-foreground/90 font-medium leading-relaxed">
                      "World-class software is never an accident. It is the result of high intention, deep architectural craftsmanship, and obsessive execution."
                    </blockquote>
                    <p className="text-xs text-primary font-semibold mt-1.5">— MD Rasel Mamun, Founder & Lead Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Callouts */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button 
                asChild
                size="lg" 
                className="flex-1 bg-gradient-to-r from-primary via-cyan-500 to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-semibold shadow-xl shadow-primary/20 h-13 rounded-2xl group transition-all duration-300 hover:scale-[1.02]"
              >
                <Link to="/schedule-meeting" className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Schedule Advisory with MD Rasel Mamun
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="h-13 rounded-2xl border-border hover:bg-muted/80 font-medium px-6"
              >
                <Link to="/contact">
                  Explore Enterprise Solutions
                </Link>
              </Button>
            </div>

          </motion.div>
        </div>

        {/* Fast Metrics Strip */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-card/60 border border-border/80 backdrop-blur-md hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-md`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Impact</span>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-foreground mt-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.subtitle}</div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FounderHero;
