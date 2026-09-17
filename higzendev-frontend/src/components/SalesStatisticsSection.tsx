import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Users, 
  Star, 
  Award, 
  MessageCircle, 
  Calendar, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

interface StatItem {
  value: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  gradient: string;
  glowColor: string;
  borderColor: string;
}

const stats: StatItem[] = [
  {
    value: '145+',
    label: 'Projects Delivered',
    sublabel: '100% On-Time Completion',
    icon: Rocket,
    gradient: 'from-cyan-400 via-blue-500 to-indigo-500',
    glowColor: 'bg-cyan-500/20',
    borderColor: 'group-hover:border-cyan-500/50',
  },
  {
    value: '127+',
    label: 'Happy Global Clients',
    sublabel: 'Startups to Enterprises',
    icon: Users,
    gradient: 'from-blue-400 via-indigo-400 to-purple-500',
    glowColor: 'bg-blue-500/20',
    borderColor: 'group-hover:border-blue-500/50',
  },
  {
    value: '4.7',
    label: 'Client Satisfaction',
    sublabel: 'Out of 5.0 Star Rating',
    icon: Star,
    gradient: 'from-amber-400 via-orange-400 to-yellow-500',
    glowColor: 'bg-amber-500/20',
    borderColor: 'group-hover:border-amber-500/50',
  },
  {
    value: '4+',
    label: 'Years of Excellence',
    sublabel: 'Continuous Innovation',
    icon: ShieldCheck,
    gradient: 'from-emerald-400 via-teal-400 to-cyan-500',
    glowColor: 'bg-emerald-500/20',
    borderColor: 'group-hover:border-emerald-500/50',
  },
];

const SalesStatisticsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#050814] relative overflow-hidden border-y border-border/40">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-6xl">
        
        {/* Top Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md"
        >
          <TrendingUp className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>REVENUE ACCELERATION & BUSINESS SCALING</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6"
        >
          We Generate High-Impact{' '}
          <span className="bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Sales, Leads & Growth
          </span>{' '}
          for Our Clients.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-10"
        >
          Achieve your digital transformation and revenue milestones with us. From high-converting digital architectures to automated growth pipelines, we deliver measurable results.
        </motion.p>

        {/* Dual Interactive Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            onClick={() => window.open('https://wa.me/8801870966718', '_blank')}
            size="lg"
            className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold shadow-xl shadow-emerald-500/20 group transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-3">
              <img 
                src="/images/whatsapp-icon.png" 
                alt="WhatsApp" 
                className="w-5 h-5 object-contain"
              />
              <span>Chat on WhatsApp (+880 1870-966718)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto h-14 px-8 rounded-2xl border-white/15 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Link to="/schedule-meeting" className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>Book Strategy Meeting</span>
            </Link>
          </Button>
        </motion.div>

        {/* 4 Interactive Luxury Holographic Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {stats.map((stat, index) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-slate-900/90 via-[#070e22]/90 to-slate-950/90 border border-slate-800/80 ${stat.borderColor} shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/10 overflow-hidden cursor-default`}
              >
                {/* Background Ambient Corner Glow on Hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${stat.glowColor} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Top Icon Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-white shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <IconComp className="w-6 h-6 text-cyan-400" />
                  </div>
                  
                  {stat.value === '4.7' && (
                    <div className="flex items-center gap-0.5 text-amber-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  )}
                </div>

                {/* Stat Value */}
                <div className={`text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300 origin-left`}>
                  {stat.value}
                </div>

                {/* Label & Sublabel */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  {stat.sublabel}
                </p>

                {/* Bottom Active Glow Line */}
                <div className="absolute bottom-0 inset-x-6 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SalesStatisticsSection;
