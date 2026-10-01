import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Cog, 
  Users2, 
  Trophy, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const highlights = [
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'Redefining global industries with cutting-edge architectures and tailored engineering.',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: Cog,
    title: 'Determined Success',
    description: 'Overcoming mission-critical tech bottlenecks with dedicated HigzenDev squads.',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Users2,
    title: 'Growth through Partnership',
    description: 'Long-term collaborative synergies driving multi-million dollar client valuations.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: Trophy,
    title: 'Passion Meets Technology',
    description: 'Where elite craftsmanship meets advanced AI and cloud platforms to deliver trophies.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10 border-purple-500/20',
  },
];

const SuccessStoriesSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#050814] relative overflow-hidden border-y border-border/40">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: New 3D Isometric Visual Showcase (6 Cols) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* Background ambient glow behind image */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-primary/20 to-purple-500/30 opacity-70 blur-xl group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
              
              {/* Image Frame Card */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 bg-card/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-md p-2">
                <img 
                  src="/images/higzendev-success-stories.jpg" 
                  alt="HigzenDev Success Stories That Inspire" 
                  className="w-full h-auto rounded-xl object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Right Column: Strategic Content & Value Pillars (6 Cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Success Stories That{' '}
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Inspire
              </span>
            </h2>

            {/* Paragraphs */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              At HigzenDev, we believe in the power of innovation and determination. Our journey is
              paved with inspiring success stories that showcase the incredible potential when passion
              meets engineering excellence.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore the inspiring tales of high-growth startups and established enterprises alike, as they soar to new
              heights by unlocking the potential of HigzenDev custom digital solutions.
            </p>

            {/* 4 Feature Value Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-1.5 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`p-1.5 rounded-lg ${item.bgColor}`}>
                        <IconComp className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <h3 className="font-bold text-sm text-white">{item.title}</h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-8">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              <Button 
                asChild
                className="h-12 px-7 rounded-xl bg-gradient-to-r from-primary via-cyan-500 to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-semibold shadow-lg shadow-primary/25 group transition-all duration-300 hover:scale-105"
              >
                <Link to="/case-studies" className="flex items-center gap-2">
                  <span>View Case Studies</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
