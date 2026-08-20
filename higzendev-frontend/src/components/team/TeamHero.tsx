import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Cpu, ShieldCheck, Globe2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const teamHighlights = [
  { value: '120+', label: 'Global Engineers', subtext: 'Top 1% Talent Pool', icon: Users, color: 'from-blue-500 to-cyan-400' },
  { value: '15+', label: 'Tech Disciplines', subtext: 'AI, Cloud, Full-Stack', icon: Cpu, color: 'from-purple-500 to-pink-500' },
  { value: '100%', label: 'Direct Access', subtext: 'Zero Middleman Overhead', icon: ShieldCheck, color: 'from-emerald-500 to-teal-400' },
  { value: '15+', label: 'Countries', subtext: '24/7 Agile Delivery', icon: Globe2, color: 'from-amber-500 to-orange-400' },
];

export const TeamHero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-background to-background pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-purple-500/15 rounded-full blur-[128px] pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Top Header Badge */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs md:text-sm font-semibold tracking-wide uppercase">The Architects of Scale</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground"
          >
            Meet the Minds Shaping{' '}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Tomorrow's Digital Future
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed"
          >
            We are a handpicked collective of visionary architects, lead engineers, and AI pioneers. Every member represents the top 1% of engineering craft, dedicated to building resilient, hyper-scale software systems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="h-13 px-8 rounded-2xl bg-gradient-to-r from-primary via-cyan-500 to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-semibold shadow-xl shadow-primary/20 group"
            >
              <Link to="/schedule-meeting" className="flex items-center gap-2">
                Work with Our Engineers
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-13 px-8 rounded-2xl border-border hover:bg-muted/80 font-medium"
            >
              <Link to="/careers">
                Explore Open Roles
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {teamHighlights.map((stat, index) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-card/60 border border-border/80 backdrop-blur-md hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-md`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">DNA</span>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-foreground mt-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.subtext}</div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TeamHero;
