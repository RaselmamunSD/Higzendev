import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Cpu, 
  Layers, 
  Server, 
  ShieldCheck, 
  Smartphone, 
  Linkedin, 
  Twitter, 
  Github, 
  CheckCircle
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface TeamMember {
  name: string;
  position: string;
  category: 'all' | 'ai' | 'fullstack' | 'frontend' | 'cloud' | 'mobile';
  categoryLabel: string;
  bio: string;
  funFact: string;
  skills: string[];
  initials: string;
  avatarGradient: string;
  imagePath?: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

const allMembers: TeamMember[] = [
  {
    name: 'Abubakr Kazi',
    position: 'Software Engineer',
    category: 'fullstack',
    categoryLabel: 'Software Engineering',
    bio: 'Develops robust enterprise backend services, scalable distributed systems, and modern web applications.',
    funFact: 'Algorithms & Clean Code 💻',
    skills: ['TypeScript', 'Node.js', 'React', 'Python', 'PostgreSQL', 'Docker'],
    initials: 'AK',
    avatarGradient: 'from-blue-600 to-indigo-600',
    imagePath: '/images/abubakr-kazi.jpg',
    socials: { linkedin: 'https://www.linkedin.com/company/higzendev/' }
  },
  {
    name: 'Abdur Rahman At Tarak',
    position: 'Lead Product Manager',
    category: 'fullstack',
    categoryLabel: 'Product & Strategy',
    bio: 'Drives end-to-end product lifecycle from technical discovery to global scale, aligning user experience with business KPIs.',
    funFact: 'Agile & Product Strategist 🚀',
    skills: ['Product Strategy', 'Agile / Scrum', 'Roadmapping', 'User Research', 'System Architecture'],
    initials: 'AT',
    avatarGradient: 'from-blue-600 to-emerald-600',
    imagePath: '/images/abdur-rahman-at-tarak.jpg',
    socials: { linkedin: 'https://www.linkedin.com/company/higzendev/' }
  },
  {
    name: 'MD Ekramul Islam',
    position: 'Marketing Lead',
    category: 'frontend',
    categoryLabel: 'Marketing & Growth',
    bio: 'Oversees digital acquisition pipelines, international tech branding, and global client outreach initiatives.',
    funFact: 'Growth & Brand Strategist 📈',
    skills: ['Growth Marketing', 'Brand Strategy', 'Performance Marketing', 'SEO', 'Conversion Optimization'],
    initials: 'EI',
    avatarGradient: 'from-amber-600 to-rose-600',
    imagePath: '/images/md-ekramul-islam.jpg',
    socials: { linkedin: 'https://www.linkedin.com/company/higzendev/' }
  },
  {
    name: 'MD Abir Hassan Rabbani',
    position: 'Marketing Executive',
    category: 'frontend',
    categoryLabel: 'Marketing & Campaigns',
    bio: 'Drives high-converting digital campaigns, market research, and audience engagement across global channels.',
    funFact: 'Campaign Strategist 🎯',
    skills: ['Digital Marketing', 'Campaign Management', 'Social Outreach', 'Content Distribution', 'Analytics'],
    initials: 'AR',
    avatarGradient: 'from-blue-600 to-cyan-600',
    imagePath: '/images/md-abir-hassan-rabbani.jpg',
    socials: { linkedin: 'https://www.linkedin.com/company/higzendev/' }
  },
  {
    name: 'Nina Patel',
    position: 'Senior AI / Data Scientist',
    category: 'ai',
    categoryLabel: 'AI & Data',
    bio: 'Transforms complex multidimensional datasets into actionable predictive insights and custom enterprise models.',
    funFact: 'Python & Kaggle Grandmaster 🐍',
    skills: ['Python', 'TensorFlow', 'LLMs', 'Vector DBs'],
    initials: 'NP',
    avatarGradient: 'from-purple-600 to-indigo-600',
    socials: { linkedin: 'https://www.linkedin.com/company/higzendev/', github: 'https://github.com' }
  },
  {
    name: 'Michael Brown',
    position: 'Lead Backend Architect',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    bio: 'Designs resilient high-throughput microservice APIs and distributed database clusters with zero lag.',
    funFact: 'Distributed Systems Geek 🏗️',
    skills: ['Node.js', 'Go', 'PostgreSQL', 'Redis'],
    initials: 'MB',
    avatarGradient: 'from-blue-600 to-cyan-600',
    socials: { linkedin: 'https://www.linkedin.com/company/higzendev/', github: 'https://github.com' }
  },
  {
    name: 'Lisa Chang',
    position: 'Senior Frontend Engineer',
    category: 'frontend',
    categoryLabel: 'Frontend',
    bio: 'Passionate about crafting ultra-responsive web interfaces with fluid micro-animations and accessibility.',
    funFact: 'React Core Enthusiast ⚛️',
    skills: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
    initials: 'LC',
    avatarGradient: 'from-cyan-600 to-teal-600',
    socials: { linkedin: 'https://www.linkedin.com/company/higzendev/', github: 'https://github.com' }
  },
  {
    name: 'Maria Rodriguez',
    position: 'Lead UI/UX Product Designer',
    category: 'frontend',
    categoryLabel: 'Design & UI',
    bio: 'Bridges deep user empathy with high-tech interactive visual design systems and design tokens.',
    funFact: 'Color Theory Master 🎨',
    skills: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
    initials: 'MR',
    avatarGradient: 'from-pink-600 to-rose-600',
    socials: { linkedin: 'https://www.linkedin.com/company/higzendev/' }
  },
  {
    name: 'Carlos Mendez',
    position: 'Senior Mobile Engineer',
    category: 'mobile',
    categoryLabel: 'Mobile',
    bio: 'Architects cross-platform native iOS & Android applications with buttery smooth 120Hz gesture animations.',
    funFact: 'Flutter & Swift Expert 📱',
    skills: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
    initials: 'CM',
    avatarGradient: 'from-amber-600 to-orange-600',
    socials: { linkedin: 'https://www.linkedin.com/company/higzendev/', github: 'https://github.com' }
  },
  {
    name: 'David Kim',
    position: 'Lead Security & Pen-Tester',
    category: 'cloud',
    categoryLabel: 'Security & Cloud',
    bio: 'Performs continuous threat modeling, zero-trust infrastructure audits, and SOC 2 security compliance.',
    funFact: 'Ethical Hacker 🛡️',
    skills: ['Zero-Trust', 'Pen-Testing', 'Kubernetes Security', 'AWS IAM'],
    initials: 'DK',
    avatarGradient: 'from-emerald-600 to-teal-700',
    socials: { linkedin: 'https://www.linkedin.com/company/higzendev/', github: 'https://github.com' }
  },
  {
    name: 'Robert Taylor',
    position: 'Lead QA & Automation Engineer',
    category: 'cloud',
    categoryLabel: 'QA & Testing',
    bio: 'Ensures pristine software delivery with automated end-to-end regression suites and load tests.',
    funFact: 'Zero-Bug Crusader 🐛',
    skills: ['Cypress', 'Playwright', 'Jest', 'K6 Load Testing'],
    initials: 'RT',
    avatarGradient: 'from-blue-600 to-indigo-600',
    socials: { linkedin: 'https://www.linkedin.com/company/higzendev/', github: 'https://github.com' }
  },
  {
    name: 'Sophie Laurent',
    position: 'Senior Technical Product Manager',
    category: 'fullstack',
    categoryLabel: 'Product & Agile',
    bio: 'Translates complex enterprise business requirements into high-velocity sprint backlogs and architecture specs.',
    funFact: 'Agile & Scrum Champion 📋',
    skills: ['Agile Roadmap', 'Technical Specs', 'System Analysis', 'Jira'],
    initials: 'SL',
    avatarGradient: 'from-violet-600 to-purple-700',
    socials: { linkedin: 'https://www.linkedin.com/company/higzendev/' }
  },
  {
    name: 'Ryan O\'Connor',
    position: 'Senior Cloud & SRE Engineer',
    category: 'cloud',
    categoryLabel: 'Cloud & SRE',
    bio: 'Specializes in multi-cloud cost optimization, serverless scaling, and automated disaster recovery.',
    funFact: 'Terraform Automator ⚡',
    skills: ['Terraform', 'AWS ECS/EKS', 'GCP Cloud Run', 'Grafana'],
    initials: 'RO',
    avatarGradient: 'from-cyan-600 to-blue-700',
    socials: { linkedin: 'https://www.linkedin.com/company/higzendev/', github: 'https://github.com' }
  }
];

const categories = [
  { id: 'all', label: 'All Engineers', icon: Users },
  { id: 'ai', label: 'AI & Data Science', icon: Cpu },
  { id: 'fullstack', label: 'Full-Stack & Backend', icon: Server },
  { id: 'frontend', label: 'Frontend & UI/UX', icon: Layers },
  { id: 'cloud', label: 'Cloud, DevOps & Security', icon: ShieldCheck },
  { id: 'mobile', label: 'Mobile & QA', icon: Smartphone },
];

export const TeamRoster: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredMembers = activeCategory === 'all'
    ? allMembers
    : allMembers.filter(m => m.category === activeCategory);

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Engineering Collective
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Our Elite{' '}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Engineering Squads
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Explore our specialized talent across AI, distributed backend systems, modern web, cloud, and cybersecurity.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                    : 'bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted border border-border/60'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Members Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence>
            {filteredMembers.map((member) => (
              <motion.div
                key={member.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl p-6 bg-card/70 border border-border/80 hover:border-primary/40 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Avatar + Category Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${member.avatarGradient} text-white font-extrabold text-lg flex items-center justify-center shadow-md border border-white/20 group-hover:scale-105 transition-transform`}>
                      {member.initials}
                    </div>
                    <Badge variant="outline" className="text-xs bg-muted/50 border-border/80 text-foreground/80 font-medium">
                      {member.categoryLabel}
                    </Badge>
                  </div>

                  {/* Name & Position */}
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-primary mt-0.5 mb-3">
                    {member.position}
                  </p>

                  {/* Bio */}
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div>
                  {/* Fun Fact */}
                  <div className="p-2.5 rounded-xl bg-muted/40 border border-border/50 text-[11px] text-foreground/90 font-medium mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{member.funFact}</span>
                  </div>

                  {/* Tech Stack Chips & Socials */}
                  <div className="pt-3 border-t border-border/60 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {member.skills.slice(0, 3).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md bg-muted/60 text-[10px] font-medium text-foreground/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.socials.github && (
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-muted-foreground hover:text-purple-400 transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default TeamRoster;
