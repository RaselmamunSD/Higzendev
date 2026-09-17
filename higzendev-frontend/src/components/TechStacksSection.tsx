import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, Cpu, Server, ShieldCheck, Smartphone, Database, CheckCircle2 } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'ai' | 'cloud' | 'mobile' | 'db';
  categoryLabel: string;
  logo: string;
  color: string;
  borderHover: string;
}

const techListRow1: TechItem[] = [
  { name: 'React', category: 'frontend', categoryLabel: 'UI Library', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'from-cyan-500/20 to-blue-500/10', borderHover: 'hover:border-cyan-400/60' },
  { name: 'Next.js', category: 'frontend', categoryLabel: 'React Framework', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: 'from-white/20 to-slate-500/10', borderHover: 'hover:border-white/60' },
  { name: 'React Native', category: 'mobile', categoryLabel: 'Cross-Platform Mobile', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'from-cyan-500/20 to-blue-500/10', borderHover: 'hover:border-cyan-400/60' },
  { name: 'MongoDB', category: 'db', categoryLabel: 'NoSQL Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'from-green-500/20 to-emerald-500/10', borderHover: 'hover:border-green-400/60' },
  { name: 'Supabase', category: 'db', categoryLabel: 'Postgres & Auth', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', color: 'from-emerald-500/20 to-teal-500/10', borderHover: 'hover:border-emerald-400/60' },
  { name: 'Terraform', category: 'cloud', categoryLabel: 'IaC & Automation', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', color: 'from-purple-500/20 to-indigo-500/10', borderHover: 'hover:border-purple-400/60' },
  { name: 'Python', category: 'ai', categoryLabel: 'AI & Data', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'from-yellow-500/20 to-blue-500/10', borderHover: 'hover:border-yellow-400/60' },
  { name: 'FastAPI', category: 'backend', categoryLabel: 'Python Async API', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', color: 'from-teal-500/20 to-emerald-500/10', borderHover: 'hover:border-teal-400/60' },
  { name: 'Node.js', category: 'backend', categoryLabel: 'Runtime', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'from-green-500/20 to-emerald-500/10', borderHover: 'hover:border-green-400/60' },
  { name: 'TypeScript', category: 'frontend', categoryLabel: 'Type Safety', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'from-blue-500/20 to-indigo-500/10', borderHover: 'hover:border-blue-400/60' },
  { name: 'Go', category: 'backend', categoryLabel: 'Distributed Systems', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', color: 'from-cyan-500/20 to-teal-500/10', borderHover: 'hover:border-cyan-400/60' },
  { name: 'Rust', category: 'backend', categoryLabel: 'High Performance', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg', color: 'from-orange-500/20 to-amber-500/10', borderHover: 'hover:border-orange-400/60' },
  { name: 'Vue.js', category: 'frontend', categoryLabel: 'Progressive UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: 'from-emerald-500/20 to-green-500/10', borderHover: 'hover:border-emerald-400/60' },
  { name: 'AWS', category: 'cloud', categoryLabel: 'Cloud Platform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', color: 'from-amber-500/20 to-orange-500/10', borderHover: 'hover:border-amber-400/60' },
  { name: 'Kubernetes', category: 'cloud', categoryLabel: 'Orchestration', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: 'from-blue-500/20 to-indigo-500/10', borderHover: 'hover:border-blue-400/60' },
];

const techListRow2: TechItem[] = [
  { name: 'Django', category: 'backend', categoryLabel: 'Python Framework', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', color: 'from-emerald-700/20 to-green-600/10', borderHover: 'hover:border-emerald-400/60' },
  { name: 'Azure', category: 'cloud', categoryLabel: 'Microsoft Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', color: 'from-blue-500/20 to-cyan-500/10', borderHover: 'hover:border-blue-400/60' },
  { name: 'MySQL', category: 'db', categoryLabel: 'Relational Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: 'from-blue-500/20 to-cyan-500/10', borderHover: 'hover:border-blue-400/60' },
  { name: 'Flutter', category: 'mobile', categoryLabel: 'Cross-Platform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: 'from-cyan-500/20 to-blue-500/10', borderHover: 'hover:border-cyan-400/60' },
  { name: 'Java', category: 'mobile', categoryLabel: 'Android & Core', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: 'from-orange-500/20 to-red-500/10', borderHover: 'hover:border-orange-400/60' },
  { name: 'Docker', category: 'cloud', categoryLabel: 'Containers', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: 'from-blue-500/20 to-cyan-500/10', borderHover: 'hover:border-blue-400/60' },
  { name: 'PostgreSQL', category: 'db', categoryLabel: 'Relational DB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: 'from-blue-500/20 to-indigo-500/10', borderHover: 'hover:border-blue-400/60' },
  { name: 'PyTorch', category: 'ai', categoryLabel: 'Deep Learning', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: 'from-orange-500/20 to-red-500/10', borderHover: 'hover:border-orange-400/60' },
  { name: 'TensorFlow', category: 'ai', categoryLabel: 'ML Framework', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: 'from-amber-500/20 to-orange-500/10', borderHover: 'hover:border-amber-400/60' },
  { name: 'Laravel', category: 'backend', categoryLabel: 'PHP Framework', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', color: 'from-red-500/20 to-rose-500/10', borderHover: 'hover:border-red-400/60' },
  { name: '.NET Core', category: 'backend', categoryLabel: 'Enterprise Framework', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', color: 'from-purple-500/20 to-indigo-500/10', borderHover: 'hover:border-purple-400/60' },
  { name: 'Google Cloud', category: 'cloud', categoryLabel: 'Cloud Platform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', color: 'from-blue-500/20 to-red-500/10', borderHover: 'hover:border-blue-400/60' },
  { name: 'Redis', category: 'db', categoryLabel: 'In-Memory DB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: 'from-red-500/20 to-rose-500/10', borderHover: 'hover:border-red-400/60' },
  { name: 'GraphQL', category: 'backend', categoryLabel: 'Query Language', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', color: 'from-pink-500/20 to-purple-500/10', borderHover: 'hover:border-pink-400/60' },
];

const allTechs = [...techListRow1, ...techListRow2];

const filterCategories = [
  { id: 'all', label: 'All Stacks', icon: Layers },
  { id: 'ai', label: 'AI & Data', icon: Cpu },
  { id: 'backend', label: 'Backend & APIs', icon: Server },
  { id: 'frontend', label: 'Frontend UI', icon: Sparkles },
  { id: 'cloud', label: 'DevOps & Cloud', icon: ShieldCheck },
  { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
  { id: 'db', label: 'Databases', icon: Database },
];

const TechCard: React.FC<{ item: TechItem }> = ({ item }) => (
  <div className={`flex-shrink-0 mx-2.5 sm:mx-3.5 p-3.5 sm:p-4 rounded-2xl bg-card/80 border border-border/80 ${item.borderHover} backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-3.5 min-w-[170px] sm:min-w-[200px] group shadow-sm`}>
    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.color} p-2 flex items-center justify-center border border-white/10 shrink-0 group-hover:scale-110 transition-transform shadow-inner`}>
      <img
        src={item.logo}
        alt={item.name}
        className="w-full h-full object-contain filter drop-shadow"
        loading="lazy"
      />
    </div>
    <div className="text-left overflow-hidden">
      <div className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors truncate">
        {item.name}
      </div>
      <div className="text-[11px] font-medium text-muted-foreground truncate">
        {item.categoryLabel}
      </div>
    </div>
  </div>
);

const TechStacksSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all'
    ? allTechs
    : allTechs.filter(t => t.category === selectedCategory);

  return (
    <section className="pt-16 sm:pt-20 pb-8 sm:pb-10 relative bg-gradient-to-b from-background via-muted/15 to-background overflow-hidden border-y border-border/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span>ENTERPRISE-GRADE TECH ARSENAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            We Serve All{' '}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Modern Tech Stacks
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            From high-throughput distributed backends and autonomous AI pipelines to responsive, fluid web interfaces and cloud-native Kubernetes infrastructure.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {filterCategories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                      : 'bg-card/60 text-muted-foreground hover:text-foreground hover:bg-card border border-border/70'
                  }`}
                >
                  <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Marquee or Grid View */}
      {selectedCategory === 'all' ? (
        <div className="relative w-full overflow-hidden space-y-4">
          {/* Side Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

          {/* Row 1: Scrolling Right */}
          <div className="flex animate-marquee-right hover:[animation-play-state:paused] py-1" style={{ width: 'max-content' }}>
            {[...techListRow1, ...techListRow1, ...techListRow1].map((tech, index) => (
              <TechCard key={`row1-${tech.name}-${index}`} item={tech} />
            ))}
          </div>

          {/* Row 2: Scrolling Left */}
          <div className="flex animate-marquee-left hover:[animation-play-state:paused] py-1" style={{ width: 'max-content' }}>
            {[...techListRow2, ...techListRow2, ...techListRow2].map((tech, index) => (
              <TechCard key={`row2-${tech.name}-${index}`} item={tech} />
            ))}
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {filteredItems.map((tech) => (
              <div
                key={tech.name}
                className={`p-4 rounded-2xl bg-card/90 border border-border/80 ${tech.borderHover} backdrop-blur-xl transition-all duration-300 hover:scale-105 flex items-center gap-3.5 shadow-md`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} p-2 flex items-center justify-center border border-white/10 shrink-0`}>
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-sm sm:text-base font-bold text-foreground truncate">
                    {tech.name}
                  </div>
                  <div className="text-[11px] font-medium text-muted-foreground truncate">
                    {tech.categoryLabel}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default TechStacksSection;
