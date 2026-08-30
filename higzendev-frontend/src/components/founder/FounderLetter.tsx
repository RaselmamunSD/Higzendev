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
                  <p className="text-xl sm:text-2xl font-bold text-foreground">A Personal Note from MD Rasel Mamun</p>
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
                Software engineering is about craftsmanship, architectural elegance, and solving mission-critical problems with resilience. In a world full of cookie-cutter agencies, we take pride in taking complete technical stewardship of your vision.
              </p>

              <p>
                I founded <span className="text-primary font-semibold">HigzenDev</span> to provide global founders and businesses with top-tier engineering talent, transparent real-time communication, and uncompromising software quality.
              </p>

              <p>
                Whether you are modernizing complex cloud infrastructure, deploying high-concurrency backends, or launching AI-first products, my team and I stand beside you as deeply committed technical partners.
              </p>

              <p>
                Thank you for trusting HigzenDev with your most ambitious digital products.
              </p>
            </div>

            {/* Signature & Signoff */}
            <div className="mt-10 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-serif italic text-primary font-medium tracking-wide">
                  MD Rasel Mamun
                </div>
                <div className="text-xs font-semibold text-muted-foreground mt-1">
                  Founder & Lead Software Engineer, HigzenDev
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
