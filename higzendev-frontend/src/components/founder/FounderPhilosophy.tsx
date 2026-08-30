import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  Users2, 
  Compass, 
  Cpu, 
  Scale, 
  Sparkles, 
  Code2 
} from 'lucide-react';

const principles = [
  {
    icon: ShieldCheck,
    title: 'Zero-Compromise Engineering',
    tagline: 'Built to Scale, Never to Patch',
    description: 'We do not believe in fragile quick fixes or superficial code. Every system architecture designed by HigzenDev follows strict enterprise scalability, end-to-end type safety, automated CI/CD validation, and enterprise-grade security.',
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'group-hover:border-cyan-500/50',
    stat: '99.99% SLA'
  },
  {
    icon: Zap,
    title: 'Speed with Architectural Rigor',
    tagline: 'Velocity Without Technical Debt',
    description: 'Startups and scaleups must move rapidly without breaking the foundation. We institute modular micro-architectures that enable agile feature shipping in days while ensuring long-term resilience.',
    color: 'from-purple-500 to-indigo-500',
    borderColor: 'group-hover:border-purple-500/50',
    stat: '3x Faster Delivery'
  },
  {
    icon: Users2,
    title: 'Radical Direct Transparency',
    tagline: 'Engineers, Not Middlemen',
    description: 'Traditional agencies hide junior developers behind layers of account managers. At HigzenDev, clients collaborate directly with top-tier lead developers with real-time GitHub commits and daily syncs.',
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'group-hover:border-emerald-500/50',
    stat: '100% Direct Access'
  },
  {
    icon: Compass,
    title: 'Future-Proof Innovation',
    tagline: 'Living Three Steps Ahead',
    description: 'Technology moves at blistering speed. We continuously modernize our clients with sovereign AI agents, serverless distributed computing, edge processing, and next-generation developer tooling.',
    color: 'from-amber-500 to-orange-500',
    borderColor: 'group-hover:border-amber-500/50',
    stat: 'AI-Native Systems'
  }
];

export const FounderPhilosophy: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Accent */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Guiding Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            The Four Pillars of{' '}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Executive Leadership
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            The core tenets MD Rasel Mamun established to guide every engineer, product, and client partnership at HigzenDev.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {principles.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-3xl p-7 sm:p-8 bg-card/70 border border-border/80 ${item.borderColor} backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5`}
              >
                
                {/* Top Icon & Metric Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-tr ${item.color} text-white shadow-lg shadow-primary/10`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-muted/80 border border-border text-xs font-semibold text-foreground/80">
                    {item.stat}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mt-1 mb-4">
                  {item.tagline}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FounderPhilosophy;
