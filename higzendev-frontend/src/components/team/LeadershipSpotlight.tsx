import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  Linkedin, 
  Twitter, 
  Github, 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Layers, 
  Server, 
  ShieldCheck, 
  Award,
  GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface LeadEngineer {
  name: string;
  role: string;
  domain: string;
  experience: string;
  bio: string;
  techStack: string[];
  imagePath?: string;
  avatarBg: string;
  initials: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

const leadEngineers: LeadEngineer[] = [
  {
    name: 'Sarah Johnson',
    role: 'Principal Cloud & Distributed Systems Architect',
    domain: 'High-Concurrency & Microservices',
    experience: '12+ Years Experience (Ex-AWS Core)',
    bio: 'Leads HigzenDev’s distributed systems practice. Specializes in multi-region Kubernetes clusters, event-driven pipelines, and sub-millisecond API response latency for millions of concurrent requests.',
    techStack: ['Go', 'Rust', 'Kubernetes', 'Apache Kafka', 'AWS/GCP'],
    avatarBg: 'from-blue-600 to-cyan-500',
    initials: 'SJ',
    icon: Server,
    color: 'from-blue-500 to-cyan-400',
    borderColor: 'group-hover:border-cyan-500/50',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'David Martinez',
    role: 'Lead AI & Machine Learning Architect',
    domain: 'Enterprise GenAI & Multi-Agent Systems',
    experience: '10+ Years Experience (Stanford AI Alum)',
    bio: 'Directs the AI Innovation Lab at HigzenDev. Builds sovereign generative AI systems, domain-specific RAG architectures, and autonomous agent orchestration pipelines with enterprise security.',
    techStack: ['Python', 'PyTorch', 'LangChain', 'pgvector', 'FastAPI'],
    avatarBg: 'from-purple-600 to-indigo-500',
    initials: 'DM',
    icon: Cpu,
    color: 'from-purple-500 to-indigo-400',
    borderColor: 'group-hover:border-purple-500/50',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Alex Chen',
    role: 'Lead Full-Stack & Web Performance Architect',
    domain: 'Modern Reactive Frontends & Scalable Backends',
    experience: '9+ Years Experience (Open-Source Contributor)',
    bio: 'Ensures our client interfaces meet the highest performance standards. Master of 60fps micro-animations, type-safe architecture, state management, and real-time WebSocket communication.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL'],
    avatarBg: 'from-emerald-600 to-teal-500',
    initials: 'AC',
    icon: Layers,
    color: 'from-emerald-500 to-teal-400',
    borderColor: 'group-hover:border-emerald-500/50',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'James Wilson',
    role: 'Lead DevOps & Site Reliability Engineer (SRE)',
    domain: 'Zero-Downtime CI/CD & Security Hardening',
    experience: '11+ Years Experience (SOC 2 / HIPAA Lead)',
    bio: 'Architects rock-solid infrastructure automation. Oversees automated testing pipelines, proactive telemetry, infrastructure as code (IaC), and quantum-resilient cloud security compliance.',
    techStack: ['Terraform', 'Docker', 'GitHub Actions', 'Prometheus', 'ArgoCD'],
    avatarBg: 'from-amber-600 to-orange-500',
    initials: 'JW',
    icon: ShieldCheck,
    color: 'from-amber-500 to-orange-400',
    borderColor: 'group-hover:border-amber-500/50',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
  }
];

export const LeadershipSpotlight: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-muted/20 border-y border-border/40">
      {/* Ambient background orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Executive & Technical Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Led by Industry Veterans &{' '}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Principal Architects
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            A balanced leadership collective bridging high-level strategic vision with deep hands-on architectural craftsmanship.
          </p>
        </div>

        {/* 1. FOUNDER & CEO SPOTLIGHT CARD (Featured Top-Tier Anchor) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-5xl mx-auto"
        >
          <div className="relative group rounded-3xl p-1 bg-gradient-to-r from-primary/40 via-cyan-500/30 to-purple-600/40 shadow-2xl backdrop-blur-xl">
            <div className="relative rounded-[22px] bg-card/90 border border-border/80 p-6 sm:p-8 lg:p-10 overflow-hidden">
              
              {/* Background radial glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl group-hover:bg-primary/25 transition-all duration-700 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Founder Avatar & Core Badges (4 Cols) */}
                <div className="lg:col-span-4 flex flex-col items-center text-center">
                  <div className="relative w-44 h-44 sm:w-48 sm:h-48 mb-5">
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-primary via-cyan-400 to-purple-600 opacity-70 blur-md group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/50 bg-muted">
                      <img 
                        src="/lovable-uploads/a364049e-ac00-4930-bd2f-53ac02e911d9.png" 
                        alt="Michael Chen - Founder & CEO"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 justify-center mb-1">
                    <h3 className="text-2xl font-bold text-foreground">Michael Chen</h3>
                    <CheckCircle2 className="w-5 h-5 text-primary fill-primary/20" />
                  </div>
                  <p className="text-sm font-semibold text-primary">Founder & Chief Executive Officer</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Ex-Google Principal Engineer • MIT CSAIL</p>

                  <div className="flex items-center gap-2 mt-4">
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-muted/60 hover:bg-primary/20 hover:text-primary text-muted-foreground border border-border/60 transition-all duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-muted/60 hover:bg-cyan-500/20 hover:text-cyan-400 text-muted-foreground border border-border/60 transition-all duration-200"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-muted/60 hover:bg-purple-500/20 hover:text-purple-400 text-muted-foreground border border-border/60 transition-all duration-200"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Right: Short Introduction & Architectural Philosophy (8 Cols) */}
                <div className="lg:col-span-8 space-y-4 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Founder's Technical Manifesto
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
                    "Engineering excellence is not about complexity—it is about designing resilient systems that make complex challenges look effortlessly simple."
                  </h4>

                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    With over 15 years leading distributed cloud architectures and hyper-scale infrastructure at Google, Michael founded HigzenDev to bridge the global software talent crisis. He directly mentors our lead engineering squads and reviews architectural blueprints for mission-critical client deployments.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-muted/50 border border-border/60 text-xs text-foreground font-medium">
                      <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                      <span>MIT CSAIL (Computer Science Alum)</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-muted/50 border border-border/60 text-xs text-foreground font-medium">
                      <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Ex-Google Principal Tech Lead</span>
                    </div>
                  </div>

                  {/* Read full founder story CTA */}
                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <Button 
                      asChild
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl h-11 px-6 group"
                    >
                      <Link to="/about/founder" className="flex items-center gap-2">
                        Explore Michael's Full Vision & Story
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button 
                      asChild
                      variant="outline"
                      className="rounded-xl h-11 px-5 border-border hover:bg-muted font-medium"
                    >
                      <Link to="/schedule-meeting">
                        Schedule Strategy Session
                      </Link>
                    </Button>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </motion.div>

        {/* 2. LEAD SOFTWARE ENGINEERS & PRINCIPAL ARCHITECTS (2x2 Grid) */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-8 max-w-5xl mx-auto">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-primary">Core Engineering Leads</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-0.5">Principal Software Engineers</h3>
            </div>
            <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5">
              Top 1% Engineering Talent
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {leadEngineers.map((lead, index) => {
              const IconComp = lead.icon;
              return (
                <motion.div
                  key={lead.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative rounded-3xl p-6 sm:p-7 bg-card/80 border border-border/80 ${lead.borderColor} backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between`}
                >
                  <div>
                    {/* Top row: Avatar + Domain Badge + Icon */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3.5">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${lead.avatarBg} text-white font-extrabold text-lg flex items-center justify-center shadow-md shrink-0 border border-white/20`}>
                          {lead.initials}
                        </div>
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {lead.name}
                          </h4>
                          <p className="text-xs font-semibold text-primary mt-0.5">{lead.role}</p>
                          <p className="text-[11px] text-muted-foreground">{lead.experience}</p>
                        </div>
                      </div>

                      <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${lead.color} text-white shadow-sm shrink-0`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                      {lead.bio}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Chips */}
                    <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {lead.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-muted/60 text-[11px] font-medium text-foreground/90 border border-border/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Socials */}
                      <div className="flex items-center gap-1.5">
                        {lead.socials.linkedin && (
                          <a
                            href={lead.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {lead.socials.github && (
                          <a
                            href={lead.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-muted-foreground hover:text-purple-400 hover:bg-muted transition-colors"
                            aria-label="GitHub"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {lead.socials.twitter && (
                          <a
                            href={lead.socials.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-muted-foreground hover:text-cyan-400 hover:bg-muted transition-colors"
                            aria-label="Twitter"
                          >
                            <Twitter className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LeadershipSpotlight;
