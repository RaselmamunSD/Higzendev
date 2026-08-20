import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Zap, 
  Globe2, 
  GraduationCap, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';

const cultureValues = [
  {
    icon: Code2,
    title: 'Code Craftsmanship as Art',
    subtitle: 'Zero Technical Debt Doctrine',
    description: 'We treat code as living architecture. Every pull request undergoes multi-layer automated validation, static analysis, and peer review to ensure lasting reliability.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'High-Velocity Autonomy',
    subtitle: 'Solve Problems, Don\'t Wait for Tickets',
    description: 'Our engineers are problem solvers with product intuition. We move fast, communicate openly, and remove bureaucratic hurdles to ship features rapidly.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Globe2,
    title: 'Global Asynchronous Collaboration',
    subtitle: 'Silicon Valley Standards Worldwide',
    description: 'Distributed across multiple continents, our teams operate with high-context documentation, overlapping sync hours, and seamless continuous integration.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: GraduationCap,
    title: 'Obsessive Continuous Mastery',
    subtitle: 'Always Three Steps Ahead',
    description: 'From weekly internal AI workshops to architecture teardowns, our engineering collective is constantly experimenting with cutting-edge tools and frameworks.',
    color: 'from-amber-500 to-orange-500'
  }
];

export const EngineeringCulture: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/20 border-t border-border/40">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering DNA
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            The Principles That Power Our{' '}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Engineering Culture
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            What it means to write code and architect systems at HigzenDev.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {cultureValues.map((val, index) => {
            const IconComp = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-7 sm:p-8 rounded-3xl bg-card/80 border border-border/80 hover:border-primary/40 backdrop-blur-xl transition-all duration-300 group shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-tr ${val.color} text-white shadow-md`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-xs font-semibold text-primary mt-0.5">{val.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EngineeringCulture;
