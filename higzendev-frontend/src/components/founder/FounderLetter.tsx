import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, HeartHandshake, CheckCircle } from 'lucide-react';

export const FounderLetter: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-1 bg-gradient-to-b from-primary/30 via-border/50 to-purple-500/20 shadow-2xl"
        >
          <div className="relative rounded-[22px] bg-card/90 border border-border/80 p-8 sm:p-12 md:p-16 backdrop-blur-xl">
            
            {/* Header / Watermark Icon */}
            <div className="flex items-center justify-between pb-8 border-b border-border/60 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">Executive Message</h3>
                  <p className="text-xl sm:text-2xl font-bold text-foreground">A Personal Note from Michael</p>
                </div>
              </div>
              <div className="hidden sm:block text-right">
                <span className="text-xs text-muted-foreground font-mono">CONFIDENTIAL & DIRECT</span>
              </div>
            </div>

            {/* Letter Body */}
            <div className="space-y-6 text-foreground/90 leading-relaxed text-base sm:text-lg font-normal">
              <p>
                <strong className="text-foreground">Dear Founders, CTOs, and Engineering Leaders,</strong>
              </p>
              
              <p>
                When I started my journey in tech over 15 years ago, software engineering was about craftsmanship, elegance, and solving human problems. Over the years, as software ate the world, an unfortunate trend emerged: agencies started viewing developers as fungible commodities and clients as transaction numbers.
              </p>

              <p>
                I founded <span className="text-primary font-semibold">HigzenDev</span> to restore that lost ethos. We don’t just write code; we take complete technical stewardship of your vision. We bring Silicon Valley engineering standards, transparent real-time communication, and an uncompromising pursuit of perfection.
              </p>

              <p>
                Whether you are modernizing a legacy enterprise cloud or building a disruptive AI-first venture, my team and I stand beside you as deeply committed co-architects. We measure our success solely by the compounding value we deliver to your bottom line.
              </p>

              <p>
                Thank you for trusting us with your most ambitious ideas.
              </p>
            </div>

            {/* Signature & Signoff */}
            <div className="mt-10 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-serif italic text-primary font-medium tracking-wide">
                  Michael Chen
                </div>
                <div className="text-xs font-semibold text-muted-foreground mt-1">
                  Founder & CEO, HigzenDev Technologies
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
                <CheckCircle className="w-4 h-4 text-primary" />
                Founder's Direct Commitment
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FounderLetter;
