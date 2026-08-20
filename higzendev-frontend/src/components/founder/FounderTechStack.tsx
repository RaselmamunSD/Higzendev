import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Layers, 
  Server, 
  Bot, 
  Lock, 
  GitBranch, 
  Globe2, 
  Zap, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';

const domainMastery = [
  {
    category: 'Distributed Systems & Cloud Architecture',
    icon: Server,
    color: 'from-blue-500 to-cyan-500',
    description: 'Ultra-low latency microservices, event-driven backends, and fault-tolerant infrastructure built for tens of millions of concurrent requests.',
    skills: ['Kubernetes & Docker', 'AWS / GCP / Cloudflare Edge', 'Apache Kafka & RabbitMQ', 'Zero-Downtime Migration', 'PostgreSQL & Redis Clusters']
  },
  {
    category: 'Enterprise AI & LLM Systems',
    icon: Bot,
    color: 'from-purple-500 to-indigo-500',
    description: 'Transforming enterprise operations with sovereign generative AI pipelines, vector retrieval (RAG), and multi-agent workflows.',
    skills: ['Autonomous Agent Pipelines', 'LangChain & LlamaIndex', 'Pinecone & pgvector', 'Fine-tuned Foundation Models', 'AI Observability & Guardrails']
  },
  {
    category: 'Full-Stack & Web Performance',
    icon: Layers,
    color: 'from-emerald-500 to-teal-500',
    description: 'Modern frontends with sub-second Time-To-Interactive, fluid 60fps micro-animations, and type-safe backend integration.',
    skills: ['React / Next.js / Vite', 'TypeScript Strict Mode', 'Tailwind CSS & Framer Motion', 'GraphQL & RESTful APIs', 'Real-time WebSockets / WebRTC']
  },
  {
    category: 'Security & DevOps Automation',
    icon: Lock,
    color: 'from-amber-500 to-orange-500',
    description: 'Hardened end-to-end security posture, automated CI/CD deployment pipelines, and proactive site reliability monitoring.',
    skills: ['Terraform / IaC', 'SOC 2 & HIPAA Compliance', 'GitHub Actions CI/CD', 'Prometheus & Grafana', 'Automated Penetration Testing']
  }
];

export const FounderTechStack: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Core Engineering &{' '}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Architectural Mastery
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            A deep-dive into the technical stacks and architectural patterns Michael and HigzenDev lead for global enterprises.
          </p>
        </div>

        {/* Technical Domain Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {domainMastery.map((domain, index) => {
            const IconComp = domain.icon;
            return (
              <motion.div
                key={domain.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-7 sm:p-8 rounded-3xl bg-card/80 border border-border/80 hover:border-primary/40 backdrop-blur-xl transition-all duration-300 group shadow-lg"
              >
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-tr ${domain.color} text-white shadow-md`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {domain.category}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {domain.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
                  {domain.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-muted/60 text-xs font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                      {skill}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FounderTechStack;
