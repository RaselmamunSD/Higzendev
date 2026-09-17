import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Users, 
  MessageCircle,
  CheckCircle2,
  Clock
} from 'lucide-react';

const trustHighlights = [
  { icon: Zap, label: '48-Hour Rapid Squad Onboarding', color: 'text-amber-400' },
  { icon: ShieldCheck, label: 'Enterprise Security & SLA Guarantee', color: 'text-emerald-400' },
  { icon: Users, label: 'Top 1% Vetted Global Engineers', color: 'text-cyan-400' },
];

const CTA: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 bg-[#050814] overflow-hidden border-y border-border/40">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        
        {/* Holographic Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-1 bg-gradient-to-r from-primary/40 via-cyan-500/30 to-purple-600/40 shadow-2xl backdrop-blur-2xl"
        >
          <div className="relative rounded-[22px] bg-gradient-to-b from-[#0a1226]/95 via-[#060b18]/95 to-[#040711]/95 border border-white/10 p-8 sm:p-12 md:p-16 text-center overflow-hidden">
            
            {/* Background Corner Light Flare */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            {/* Sub-heading */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300 mb-3 tracking-wide">
              Looking for a reliable enterprise IT & software partner?
            </h3>

            {/* Main Big Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Choose{' '}
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                HigzenDev.
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Empower your business with custom software, distributed cloud systems, and cutting-edge AI pipelines built to scale without limits.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-gradient-to-r from-primary via-cyan-500 to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-bold shadow-xl shadow-primary/25 group transition-all duration-300 hover:scale-105"
              >
                <Link to="/schedule-meeting" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-cyan-200" />
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-14 px-8 rounded-2xl border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-950/40 text-emerald-400 hover:text-emerald-300 font-semibold shadow-lg transition-all duration-300 hover:scale-105"
              >
                <a
                  href="https://wa.me/8801870966718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-emerald-500/20 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </Button>
            </div>

            {/* Trust Highlights Grid */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-300">
              {trustHighlights.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex items-center justify-center gap-2 p-2 rounded-xl bg-slate-900/50 border border-slate-800/60">
                    <IconComp className={`w-4 h-4 ${item.color} shrink-0`} />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Micro Live Status */}
            <div className="mt-6 flex items-center justify-center gap-2 text-[11px] font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for New Projects • 24/7 Global Engineering Hubs</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
