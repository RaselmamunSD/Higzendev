import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Building, 
  Rocket, 
  Globe, 
  Bot, 
  ArrowUpRight, 
  CheckCircle 
} from 'lucide-react';

const milestones = [
  {
    year: '2008',
    period: 'Foundation & Research',
    role: 'MIT CSAIL Researcher & Top Honors Graduate',
    institution: 'Massachusetts Institute of Technology',
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-500',
    description: 'Conducted high-performance computing research focusing on distributed data structures and algorithmic efficiency. Published multiple papers on asynchronous task execution.',
    highlights: ['B.S. & M.Eng in Computer Science', 'MIT AI Lab Research Fellow', 'Summa Cum Laude Honors']
  },
  {
    year: '2011 - 2017',
    period: 'Hyper-Scale Engineering',
    role: 'Principal Engineer & Infrastructure Lead',
    institution: 'Google LLC (Mountain View, CA)',
    icon: Building,
    color: 'from-cyan-500 to-teal-500',
    description: 'Spearheaded distributed system architecture across Google Cloud services. Managed cross-continental engineering squads delivering sub-millisecond query latencies for 500M+ users.',
    highlights: ['Scaled Cloud Pipelines to Petabytes/day', 'Pioneered Zero-Downtime Microservices', 'Mentored 40+ Senior Engineers']
  },
  {
    year: '2018',
    period: 'The Genesis',
    role: 'Founded HigzenDev Technologies',
    institution: 'HigzenDev HQ',
    icon: Rocket,
    color: 'from-purple-500 to-pink-500',
    description: 'Started HigzenDev with a handpicked team of 5 elite developers to disrupt traditional IT outsourcing with high-velocity Silicon Valley standards and transparent delivery.',
    highlights: ['Bootstrapped to Profitability in 6 Months', 'First 10 Enterprise Clients Acquired', 'Zero-Bug SLA Delivery Model']
  },
  {
    year: '2021 - 2023',
    period: 'Global Scalability',
    role: 'Expanded to 120+ Engineers Globally',
    institution: 'Global Delivery Hubs',
    icon: Globe,
    color: 'from-amber-500 to-orange-500',
    description: 'Scaled HigzenDev into an international powerhouse with vetted tech talent across 15+ countries, serving Fortune 500 enterprises, Series A-D startups, and digital innovators.',
    highlights: ['500+ Web & Mobile Products Delivered', '$120M+ Client Valuation Generated', 'Top Rated Tech Partner on Clutch']
  },
  {
    year: '2024 - Present',
    period: 'Next-Gen Era',
    role: 'Pioneering AI & Cloud Transformation',
    institution: 'HigzenDev Innovation Lab',
    icon: Bot,
    color: 'from-primary to-indigo-500',
    description: 'Leading the charge into enterprise Generative AI, autonomous multi-agent pipelines, Kubernetes automation, and quantum-resistant security protocols.',
    highlights: ['Autonomous Agent Framework Deployments', 'Next-Gen Enterprise LLM Consulting', '99.4% Client Long-term Retention']
  }
];

export const FounderTimeline: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/20">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Milestone Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            A Journey Defined by{' '}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Relentless Innovation
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            From MIT research labs and Google’s core infrastructure to founding a global tech powerhouse.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central glowing vertical track */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-cyan-500 to-purple-600 -translate-x-1/2 opacity-30" />

          <div className="space-y-12 sm:space-y-16">
            {milestones.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-8 md:gap-0`}
                >
                  
                  {/* Timeline Central Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${item.color} p-0.5 shadow-lg shadow-primary/20`}>
                      <div className="w-full h-full bg-card rounded-[14px] flex items-center justify-center text-primary">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="group p-6 sm:p-7 rounded-3xl bg-card/80 border border-border/80 hover:border-primary/50 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
                      
                      {/* Top Badges */}
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${item.color}`}>
                          {item.year}
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          {item.period}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-primary/90 mt-0.5">
                        {item.institution}
                      </p>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className={`mt-4 pt-4 border-t border-border/60 flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        {item.highlights.map((highlight, hIdx) => (
                          <div 
                            key={hIdx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted/60 text-xs text-foreground/90 font-medium"
                          >
                            <CheckCircle className="w-3 h-3 text-primary shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Empty side for layout balance */}
                  <div className="hidden md:block md:w-1/2" />

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FounderTimeline;
