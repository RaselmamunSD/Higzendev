import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  ExternalLink,
  Github,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Layers,
  Cpu,
  Smartphone,
  Server,
  Globe2,
  Calendar,
  Building2,
  MessageCircle,
  Phone,
  Info,
  ChevronRight,
  ShieldCheck,
  Star,
  Users
} from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  client: string;
  category: 'web' | 'mobile' | 'enterprise' | 'ai' | 'fintech' | 'healthcare';
  categoryLabel: string;
  year: string;
  image: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  impactMetrics: { value: string; label: string }[];
  technologies: string[];
  deliverables: string[];
  liveUrl?: string;
  featured: boolean;
}

const portfolioProjects: Project[] = [
  {
    id: 'bkash-automation',
    title: 'Enterprise Transaction Automation System',
    client: 'bKash Limited (Mobile Financial Services)',
    category: 'fintech',
    categoryLabel: 'FinTech & Banking',
    year: '2024',
    image: '/images/hero-1.png',
    tagline: 'High-throughput payment orchestration processing millions of automated settlement queries.',
    description: 'Designed and deployed a fault-tolerant microservice engine to orchestrate automated reconciliations, transaction verification, and fraud detection workflows for Bangladesh\'s leading MFS provider.',
    problem: 'Manual transaction batch verification caused high processing latency during peak festival hours with millions of concurrent transactions.',
    solution: 'Engineered an event-driven distributed system using Node.js, Redis clusters, and PostgreSQL with automated failover and sub-50ms queue processing.',
    impactMetrics: [
      { value: '3.5x', label: 'Processing Speed' },
      { value: '99.99%', label: 'System Uptime' },
      { value: '10M+', label: 'Daily Operations' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'Apache Kafka'],
    deliverables: ['Real-time Analytics Dashboard', 'Fraud Detection Rule Engine', 'Automated Dispute Settlement API', 'Multi-tenant Admin Panel'],
    featured: true
  },
  {
    id: 'healthcare-ehr',
    title: 'HealthCare Pro - Unified Hospital EHR & Telemed',
    client: 'Global MediCare Network',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Telemed',
    year: '2024',
    image: '/images/hero-2.png',
    tagline: 'HIPAA-compliant telemedicine and electronic health record system connecting 50+ clinics.',
    description: 'A comprehensive digital health ecosystem enabling real-time video consultations, electronic prescription dispatch, secure lab report sharing, and automated patient appointment scheduling.',
    problem: 'Fragmented patient records across disparate legacy systems resulted in delayed treatments and administrative overhead.',
    solution: 'Constructed an encrypted end-to-end medical portal with WebRTC video calling, automated HL7/FHIR data interoperability, and cross-platform mobile apps.',
    impactMetrics: [
      { value: '60%', label: 'Admin Time Reduced' },
      { value: '250K+', label: 'Patients Managed' },
      { value: '4.9/5', label: 'Doctor CSAT Rating' }
    ],
    technologies: ['React Native', 'React.js', 'TypeScript', 'WebRTC', 'FastAPI', 'PostgreSQL', 'AWS HIPAA Cloud'],
    deliverables: ['Doctor & Patient Mobile Apps', 'Hospital Administration Hub', 'Secure Video Teleconsultation', 'Prescription Generator'],
    featured: true
  },
  {
    id: 'nexus-ai-engine',
    title: 'Autonomous Enterprise AI Document & RAG Engine',
    client: 'Apex Global Logistics & Supply Chain',
    category: 'ai',
    categoryLabel: 'AI & Machine Learning',
    year: '2024',
    image: '/images/hero-3.png',
    tagline: 'LLM-powered document intelligence parsing customs declarations and supply contracts.',
    description: 'Engineered an enterprise generative AI retrieval-augmented generation (RAG) platform that indexes thousands of multi-lingual customs documents, contracts, and bills of lading to extract structured entities in real-time.',
    problem: 'Supply chain clerks spent 4+ hours daily manually cross-checking customs declarations and international compliance codes.',
    solution: 'Deployed custom embedding pipelines, vector search with Pinecone/pgvector, and fine-tuned LLM agents with hallucination guardrails.',
    impactMetrics: [
      { value: '85%', label: 'Extraction Time Saved' },
      { value: '99.2%', label: 'Data Accuracy' },
      { value: '500K+', label: 'Docs Parsed' }
    ],
    technologies: ['Python', 'LangChain', 'OpenAI API', 'Pinecone', 'FastAPI', 'Next.js', 'Tailwind CSS'],
    deliverables: ['Customs Document OCR & Parser', 'Conversational AI Contract Assistant', 'Compliance Alerting Webhook', 'Audit Trail Dashboard'],
    featured: true
  },
  {
    id: 'omnichannel-ecommerce',
    title: 'High-Scale Omnichannel E-Commerce Suite',
    client: 'Nordic Lifestyle Brands Group',
    category: 'web',
    categoryLabel: 'Web Applications',
    year: '2023',
    image: '/images/office-workspace.png',
    tagline: 'Headless storefront with sub-second page loads and multi-currency checkout across 12 countries.',
    description: 'Complete architecture modernization migrating a monolithic store into a modern headless commerce platform powered by Next.js edge rendering and distributed inventory synchronization.',
    problem: 'Slow site speed (4.2s TTI) and checkout bottlenecks caused a 40% cart abandonment rate during peak sales.',
    solution: 'Implemented Next.js App Router edge SSR, optimized image pipelines, unified Stripe/PayPal checkout, and distributed caching.',
    impactMetrics: [
      { value: '+42%', label: 'Conversion Rate' },
      { value: '0.6s', label: 'Time To Interactive' },
      { value: '$12M+', label: 'Gross Annual GMV' }
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shopify Storefront API', 'Stripe', 'Redis', 'Vercel Edge'],
    deliverables: ['High-Speed Headless Storefront', 'Real-time Stock Sync Engine', 'Personalized Product Recommendation', 'PWA Mobile Web App'],
    featured: false
  },
  {
    id: 'fintech-crypto-wallet',
    title: 'FinTrack Pro - Multi-Asset Wealth & Expense App',
    client: 'Vanguard FinTech Labs',
    category: 'mobile',
    categoryLabel: 'Mobile Apps',
    year: '2023',
    image: '/images/tech-office-lounge.png',
    tagline: 'Native iOS & Android financial management app with real-time bank linking and portfolio tracking.',
    description: 'An intuitive personal finance and portfolio tracker supporting multi-currency accounts, automated recurring expense categorization, and intelligent budget forecasting.',
    problem: 'Users struggled with clunky budget apps that lacked automatic bank synchronization and real-time investment tracking.',
    solution: 'Built with React Native and Plaid API integration, featuring end-to-end biometric encryption and offline-first SQLite sync.',
    impactMetrics: [
      { value: '500K+', label: 'App Store Downloads' },
      { value: '4.8 ★', label: 'Average User Rating' },
      { value: '100%', label: 'Biometric Encrypted' }
    ],
    technologies: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'Plaid API', 'Firebase', 'Chart.js'],
    deliverables: ['iOS & Android Native Apps', 'Bank Account Sync Integration', 'Automated Expense Categorizer', 'Exportable Tax Summary Generator'],
    featured: false
  },
  {
    id: 'cloud-devops-migration',
    title: 'Multi-Cloud Infrastructure & Zero-Downtime CI/CD',
    client: 'CloudScale SaaS Enterprise',
    category: 'enterprise',
    categoryLabel: 'Enterprise ERP & SaaS',
    year: '2023',
    image: '/images/colleagues-working.png',
    tagline: 'Kubernetes orchestration, Terraform IaC, and automated release pipeline across AWS & GCP.',
    description: 'Architected and executed a comprehensive multi-cloud migration from legacy on-premises servers to an elastic containerized cluster on AWS EKS with automated GitHub Actions CI/CD.',
    problem: 'Manual server deployments took 6 hours per release and suffered frequent rollback downtime during peak traffic.',
    solution: 'Implemented Terraform infrastructure-as-code, GitOps with ArgoCD, dynamic autoscaling, and Prometheus/Grafana observability.',
    impactMetrics: [
      { value: '99.99%', label: 'Guaranteed SLA' },
      { value: '15 Min', label: 'Deploy Turnaround' },
      { value: '-45%', label: 'Cloud Hosting Costs' }
    ],
    technologies: ['AWS EKS', 'Kubernetes', 'Terraform', 'ArgoCD', 'Prometheus', 'Grafana', 'Docker'],
    deliverables: ['Multi-region Kubernetes Cluster', 'Automated Canary Deployments', 'Live Observability Dashboard', 'Disaster Recovery Automation'],
    featured: true
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: Layers },
  { id: 'fintech', label: 'FinTech & Banking', icon: TrendingUp },
  { id: 'ai', label: 'AI & Machine Learning', icon: Cpu },
  { id: 'healthcare', label: 'Healthcare & Telemed', icon: ShieldCheck },
  { id: 'web', label: 'Web Applications', icon: Globe2 },
  { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
  { id: 'enterprise', label: 'Enterprise ERP & SaaS', icon: Server },
];

const stats = [
  { value: '100+', label: 'Engineered Solutions', desc: 'Delivered on time & budget' },
  { value: '99.4%', label: 'Client Satisfaction', desc: 'Long-term partnership rate' },
  { value: '15+', label: 'Countries Served', desc: 'Global enterprise reach' },
  { value: '40M+', label: 'End Users Impacted', desc: 'Across active platforms' },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const filteredProjects = activeCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#040711] text-foreground">
      <SEO 
        title="Client Portfolio & Featured Software Engineering Work | HigzenDev"
        description="Explore HigzenDev's enterprise portfolio: mission-critical web applications, AI LLM pipelines, mobile apps, and distributed cloud backends delivered for global brands."
        keywords="HigzenDev portfolio, software development case studies, web development projects, mobile apps, enterprise software showcase, AI projects"
        canonical="https://higzendev.com/portfolio"
      />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-b from-background via-[#090d1f] to-background border-b border-border/40">
          {/* Ambient Glows */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 -right-32 w-96 h-96 bg-purple-500/15 rounded-full blur-[140px] pointer-events-none" />

          {/* Cyber Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md"
            >
              PROVEN ENGINEERING EXCELLENCE
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
            >
              Our Portfolio &{' '}
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Engineered Works
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              Discover how HigzenDev transforms enterprise workflows, scales startups, and engineers high-performance web, mobile, and AI solutions worldwide.
            </motion.p>

            {/* CTA in Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 shadow-lg shadow-primary/20">
                <Link to="/request-quote">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted/80">
                <Link to="/schedule-meeting">
                  Schedule Tech Consultation
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <div className="container mx-auto px-4 mt-16 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-card/60 border border-border/60 backdrop-blur-xl text-center hover:border-primary/40 transition-all duration-300"
                >
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-primary via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-foreground mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 bg-card/40 border-b border-border/60 sticky top-[60px] z-30 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 ${
                      isSelected
                        ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105'
                        : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/50'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Showcase Grid */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-card/80 border border-border/80 hover:border-primary/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-glow transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image & Badges */}
                  <div>
                    <div className="relative h-52 sm:h-56 bg-muted overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/600x400?text=${project.title}`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                      
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <Badge variant="outline" className="bg-background/80 backdrop-blur-md text-xs font-semibold border-white/20">
                          {project.categoryLabel}
                        </Badge>
                      </div>

                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-black/60 backdrop-blur-md text-xs font-mono text-cyan-300 border border-cyan-500/30">
                          {project.year}
                        </Badge>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <div className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                          <Building2 className="h-3.5 w-3.5" />
                          <span>{project.client}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-1 mb-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Impact Metrics Mini Row */}
                      <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-muted/40 border border-border/50 mb-4 text-center">
                        {project.impactMetrics.map((metric, i) => (
                          <div key={i}>
                            <div className="text-xs sm:text-sm font-extrabold text-cyan-400 font-mono">
                              {metric.value}
                            </div>
                            <div className="text-[10px] text-muted-foreground truncate">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-muted/70 text-muted-foreground text-[11px] rounded-md font-mono border border-border/40"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-muted/40 text-muted-foreground text-[11px] rounded-md font-mono">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 3 Action Buttons */}
                  <div className="p-6 pt-0 border-t border-border/50">
                    <div className="grid grid-cols-3 gap-2 pt-4">
                      {/* Details Button */}
                      <button
                        type="button"
                        onClick={() => openProjectDetails(project)}
                        className="w-full py-2.5 px-2 text-xs font-semibold rounded-lg bg-blue-500/15 text-blue-400 border border-blue-400/40 hover:bg-blue-500/25 hover:border-blue-400/70 transition-all text-center flex items-center justify-center gap-1 active:scale-95 shadow-sm"
                      >
                        <Info className="h-3.5 w-3.5 shrink-0" />
                        <span>Details</span>
                      </button>

                      {/* WhatsApp Button */}
                      <a
                        href={`https://wa.me/8801870966718?text=${encodeURIComponent(`Hello HigzenDev! I am interested in building a solution similar to your portfolio project: ${project.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-2 text-xs font-semibold rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-400/40 hover:bg-emerald-500/25 hover:border-emerald-400/70 transition-all text-center flex items-center justify-center gap-1 active:scale-95 shadow-sm"
                      >
                        <MessageCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>WhatsApp</span>
                      </a>

                      {/* Call Now Button */}
                      <a
                        href="tel:+8801870966718"
                        className="w-full py-2.5 px-2 text-xs font-semibold rounded-lg bg-amber-500/15 text-amber-400 border border-amber-400/40 hover:bg-amber-500/25 hover:border-amber-400/70 transition-all text-center flex items-center justify-center gap-1 active:scale-95 shadow-sm"
                      >
                        <Phone className="h-3.5 w-3.5 shrink-0" />
                        <span>Call Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study Spotlight Banner */}
        <section className="py-16 bg-muted/20 border-y border-border/40">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-purple-900/10 border border-primary/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
              <div className="space-y-4 max-w-xl">
                <Badge variant="outline" className="text-xs bg-primary/20 text-cyan-300 border-primary/40">
                  ENTERPRISE ARCHITECTURE HIGHLIGHT
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Need a Custom High-Concurrency Architecture?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We specialize in taking complex, distributed systems from concept to production-ready scale. Speak directly with our lead architects today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  <Link to="/schedule-meeting">Schedule 1-on-1 Session</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border">
                  <Link to="/request-quote">Request Proposal</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
            {selectedProject && (
              <div>
                <DialogHeader className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{selectedProject.categoryLabel}</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">{selectedProject.year}</Badge>
                  </div>
                  <DialogTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm font-medium text-primary flex items-center gap-1.5 mt-1">
                    <Building2 className="h-4 w-4" />
                    <span>Client: {selectedProject.client}</span>
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Image */}
                  <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-muted">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/800x400?text=${selectedProject.title}`;
                      }}
                    />
                  </div>

                  {/* Impact Metrics Grid */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-muted/40 border border-border">
                    {selectedProject.impactMetrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xl sm:text-2xl font-black text-cyan-400 font-mono">
                          {m.value}
                        </div>
                        <div className="text-xs text-muted-foreground font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Problem & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20">
                      <h4 className="font-bold text-sm text-rose-400 mb-1.5">The Challenge</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {selectedProject.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <h4 className="font-bold text-sm text-emerald-400 mb-1.5">Our Solution</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="font-semibold text-base mb-3 text-foreground">Key Deliverables & Modules</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm bg-muted/30 p-2.5 rounded-lg border border-border/40">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span className="text-foreground text-xs sm:text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-base mb-2 text-foreground">Technology Architecture</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="px-3 py-1 font-mono text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/8801870966718?text=${encodeURIComponent(`Hello HigzenDev! I would like to build a project similar to ${selectedProject.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 text-sm font-semibold rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-all text-center flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <a
                      href="tel:+8801870966718"
                      className="flex-1 py-3 px-4 text-sm font-semibold rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-all text-center flex items-center justify-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      <span>Call Us Directly</span>
                    </a>

                    <Button asChild className="flex-1" variant="outline">
                      <Link to="/request-quote" onClick={() => setIsModalOpen(false)}>
                        <span>Request Similar Scope</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
