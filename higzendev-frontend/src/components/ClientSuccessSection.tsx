import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const ClientSuccessSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#050814] relative overflow-hidden border-y border-border/40">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[350px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Cyber grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Content */}
          <div className="lg:w-1/2 space-y-6 text-left">
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Client Success Stories: How{' '}
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                HigzenDev Delivers
              </span>{' '}
              Results
            </h2>

            {/* Body Paragraphs */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              At HigzenDev, we believe success isn't just about products or services, but the real results we deliver to our clients. 
              Our client success stories showcase how we partner with businesses from various industries to solve complex 
              challenges and create tailored solutions that drive true value.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Whether it's streamlining business processes, boosting efficiency, or developing innovative digital products, 
              our projects are diverse and impactful. Explore our customer success stories to see how we've helped companies 
              achieve their goals and transform their visions into reality.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tailored Enterprise Solutions</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-300">
                <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Measurable ROI & Performance</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                asChild
                className="bg-gradient-to-r from-primary via-cyan-500 to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-bold px-8 py-5 h-auto text-base rounded-xl shadow-xl shadow-primary/25 group transition-all duration-300 hover:scale-105"
              >
                <Link to="/success-stories" className="flex items-center gap-2">
                  <span>Explore Success Stories</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

          </div>

          {/* Right Column: Visual Showcase Frame */}
          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              {/* Background ambient glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/30 via-cyan-500/20 to-purple-500/30 opacity-70 blur-xl group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              
              {/* Frame Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-card/80 shadow-2xl backdrop-blur-md p-2">
                <img 
                  src="/images/higzendev-client-success.jpg" 
                  alt="HigzenDev Client Success Collaboration & Handshake" 
                  className="rounded-xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientSuccessSection;
