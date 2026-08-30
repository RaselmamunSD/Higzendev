import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Sparkles, MessageSquare, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FounderCTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 border border-primary/30 bg-gradient-to-br from-primary/15 via-card to-purple-950/20 shadow-2xl backdrop-blur-2xl text-center"
        >
          {/* Decorative floating blur orbs */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Direct Strategic Access
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight max-w-3xl mx-auto">
            Ready to Build Something{' '}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Extraordinary?
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have an ambitious software roadmap or enterprise scaling challenge? Book a 30-minute strategic architecture session directly with MD Rasel Mamun.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-gradient-to-r from-primary via-cyan-500 to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-bold shadow-xl shadow-primary/25 group transition-all duration-300 hover:scale-105"
            >
              <Link to="/schedule-meeting" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book 1-on-1 Strategy Session
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-14 px-8 rounded-2xl border-border hover:bg-muted/80 font-medium"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Send a Direct Message
              </Link>
            </Button>
          </div>

          {/* Micro Trust Points */}
          <div className="mt-8 pt-8 border-t border-border/60 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-medium">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-400" />
              Strict NDA Protected
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-primary" />
              No Sales Reps • Direct Founder Call
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-cyan-400" />
              Actionable Technical Roadmap
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default FounderCTA;
