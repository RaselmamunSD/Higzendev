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
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Layers,
  Cpu,
  Smartphone,
  Server,
  Globe2,
  Building2,
  MessageCircle,
  Phone,
  Info,
  ShieldCheck,
  Star,
  Search
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
  featured?: boolean;
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
      { value: '60%', label: 'Admin Time Saved' },
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
    id: 'fintrack-wallet',
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
      { value: '500K+', label: 'App Downloads' },
      { value: '4.8 ★', label: 'App Store Rating' },
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
  },
  {
    id: 'apex-logistics-control',
    title: 'Smart Freight & Logistics Control Tower (TMS/WMS)',
    client: 'TransPacific Supply Lines',
    category: 'enterprise',
    categoryLabel: 'Enterprise ERP & SaaS',
    year: '2024',
    image: '/lovable-uploads/b44b4376-6a18-4433-9b0e-6719c11aa425.png',
    tagline: 'Real-time GPS tracking, automated dock scheduling, and AI container route optimization.',
    description: 'An enterprise logistics management suite synchronizing fleet telematics, dynamic shipment routing, warehouse barcode scanning, and multi-carrier customs documentation.',
    problem: 'Fleet dispatchers operated on disjointed spreadsheets causing 22% idle container times and delivery delays.',
    solution: 'Constructed a unified IoT control tower with live Mapbox fleet visualization, automated driver mobile dispatch, and ERP syncing.',
    impactMetrics: [
      { value: '28%', label: 'Fuel & Transit Saved' },
      { value: '2,400+', label: 'Active Fleet Vehicles' },
      { value: '99.1%', label: 'On-Time Deliveries' }
    ],
    technologies: ['React', 'NestJS', 'PostgreSQL', 'Mapbox GL', 'Redis', 'MQTT', 'Docker'],
    deliverables: ['Dispatcher Fleet Control Tower', 'Driver Mobile App', 'Warehouse Barcode Scanner App', 'Automated Bill of Lading API'],
    featured: false
  },
  {
    id: 'mediscan-ai-radiology',
    title: 'MediScan AI Diagnostic Radiology Assistant',
    client: 'BioHealth Diagnostic Labs Inc.',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Telemed',
    year: '2024',
    image: '/lovable-uploads/72ace780-45bd-4fc9-a7d4-43f9d6b33361.png',
    tagline: 'Computer vision deep learning pipeline for high-precision thoracic anomaly detection.',
    description: 'A cloud-native radiology workstation utilizing PyTorch neural networks to analyze DICOM X-ray and CT imaging, generating automated triage heatmaps for radiologists.',
    problem: 'Radiology backlogs averaged 72 hours per diagnostic report due to a severe shortage of specialist radiologists.',
    solution: 'Developed a HIPAA-compliant inference pipeline with DICOM viewer integration, automated anomaly localization, and structured clinical draft reports.',
    impactMetrics: [
      { value: '98.4%', label: 'Diagnostic Accuracy' },
      { value: '12 Min', label: 'Avg Triage Time' },
      { value: '180K+', label: 'Scans Processed' }
    ],
    technologies: ['Python', 'PyTorch', 'FastAPI', 'DICOM Web', 'React', 'Tailwind CSS', 'AWS S3'],
    deliverables: ['Browser-based DICOM Medical Viewer', 'AI Anomaly Heatmap Generator', 'Structured Findings PDF Exporter', 'PACS Integration Bridge'],
    featured: false
  },
  {
    id: 'urbanride-fleet',
    title: 'UrbanRide - High-Concurrency Ride-Hailing Platform',
    client: 'MetroTransit Mobility Group',
    category: 'mobile',
    categoryLabel: 'Mobile Apps',
    year: '2023',
    image: '/lovable-uploads/a364049e-ac00-4930-bd2f-53ac02e911d9.png',
    tagline: 'Real-time WebSocket geospatial matching, dynamic surge pricing, and driver earnings hub.',
    description: 'An end-to-end ride hailing ecosystem powering rider passenger bookings, driver navigation, automated cashless payment processing, and administrative safety dispatch.',
    problem: 'Previous monolithic backend crashed during rush hour surges with high server timeouts and failed ride matchings.',
    solution: 'Architected high-throughput Go microservices with Geo-hashing (H3 index), real-time WebSockets, and Redis pub/sub location streams.',
    impactMetrics: [
      { value: '1.2M+', label: 'Completed Rides' },
      { value: '< 2.5s', label: 'Driver Match Time' },
      { value: '4.9 ★', label: 'Rider App Rating' }
    ],
    technologies: ['Flutter', 'Golang', 'PostgreSQL', 'Redis H3', 'Google Maps SDK', 'Stripe', 'WebSockets'],
    deliverables: ['Passenger Rider Mobile App', 'Driver Partner Navigation App', 'Admin Operations Hub', 'Automated Trip Fare Calculation Engine'],
    featured: false
  },
  {
    id: 'cyberguard-siem',
    title: 'CyberGuard Cloud SIEM & Zero-Trust Threat Platform',
    client: 'Defensor Security Solutions',
    category: 'enterprise',
    categoryLabel: 'Enterprise ERP & SaaS',
    year: '2024',
    image: '/lovable-uploads/62f17d6a-05cb-40df-8227-75e88f970645.png',
    tagline: 'Real-time security information and event management (SIEM) with automated attack containment.',
    description: 'A cybersecurity defense suite aggregating security event logs across servers, firewalls, and cloud assets with AI-driven anomaly detection and automated SOC playbook triggers.',
    problem: 'Security analysts were overwhelmed by 50,000+ daily alerts with high rates of false positives and slow incident response times.',
    solution: 'Built an automated log correlation engine using ClickHouse, Apache Kafka, and React visualization with automated IP blocking and policy enforcement.',
    impactMetrics: [
      { value: '92%', label: 'False Alerts Filtered' },
      { value: '< 30s', label: 'Incident Containment' },
      { value: '5B+', label: 'Daily Events Ingested' }
    ],
    technologies: ['ClickHouse', 'Apache Kafka', 'React', 'Go', 'Elasticsearch', 'Grafana', 'Docker'],
    deliverables: ['SOC Command Center Dashboard', 'Automated Threat Mitigation Agent', 'Compliance Audit Generator', 'API Gateway Security Proxy'],
    featured: false
  },
  {
    id: 'edulearn-global',
    title: 'EduLearn Global - AI Adaptive Learning LMS',
    client: 'Beacon International Academies',
    category: 'web',
    categoryLabel: 'Web Applications',
    year: '2023',
    image: '/lovable-uploads/64e0086b-d1a8-4fbe-9242-556584c00448.png',
    tagline: 'Interactive virtual classrooms, adaptive AI assessments, and live student progress tracking.',
    description: 'A cloud-based educational management system supporting online video lectures, interactive collaborative whiteboards, automated homework grading, and parent notification portals.',
    problem: 'Standard LMS software lacked real-time interactive engagement tools and required manual assignment grading.',
    solution: 'Engineered a real-time collaborative canvas, automated Rubric evaluation with NLP models, and gamified progress leaderboards.',
    impactMetrics: [
      { value: '120K+', label: 'Active Students' },
      { value: '+45%', label: 'Course Completion' },
      { value: '99.9%', label: 'Uptime Reliability' }
    ],
    technologies: ['React', 'Node.js', 'WebSockets', 'OpenAI API', 'MongoDB', 'AWS CloudFront', 'Tailwind CSS'],
    deliverables: ['Teacher Curriculum Builder', 'Student Learning Portal', 'Live Interactive Whiteboard', 'Automated Quiz Assessment Engine'],
    featured: false
  },
  {
    id: 'payflow-global-gateway',
    title: 'PayFlow - Multi-Currency Global Payment Gateway',
    client: 'Finova Global Financial Technologies',
    category: 'fintech',
    categoryLabel: 'FinTech & Banking',
    year: '2024',
    image: '/lovable-uploads/345bcc74-1822-47c9-a1ff-a8ae70f92542.png',
    tagline: 'PCI-DSS compliant cross-border payment gateway with smart multi-currency routing.',
    description: 'An enterprise fintech API suite allowing global merchants to accept credit cards, SEPA bank debits, Apple Pay, and local wallets across 35 countries with automatic FX settlement.',
    problem: 'International merchants experienced high payment decline rates (18%) due to rigid single-acquirer routing.',
    solution: 'Constructed an intelligent dynamic transaction router that automatically switches between acquirers based on lowest fee and highest approval probability.',
    impactMetrics: [
      { value: '+14%', label: 'Payment Success Rate' },
      { value: '35+', label: 'Countries Supported' },
      { value: '$45M+', label: 'Monthly Volume' }
    ],
    technologies: ['Go', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS KMS', 'HashiCorp Vault'],
    deliverables: ['Merchant API & SDKs (React/iOS/Android)', 'Real-time Settlement Dashboard', 'Fraud Risk Engine', 'Automated Invoice Generator'],
    featured: true
  },
  {
    id: 'autodealer-pro-3d',
    title: 'AutoDealer Pro - 3D Interactive Automotive Marketplace',
    client: 'Apex Automotive Group Europe',
    category: 'web',
    categoryLabel: 'Web Applications',
    year: '2024',
    image: '/lovable-uploads/4acf0bb3-60b8-4cf6-b59d-d2af4a64cb00.png',
    tagline: 'WebGL 3D car customizer, digital finance pre-approval, and live dealer inventory syncing.',
    description: 'A revolutionary digital dealership platform featuring 360-degree interactive vehicle configuration, instant trade-in valuations, and end-to-end digital lease signing.',
    problem: 'Dealership sales were lost due to static photo galleries and long in-person financing paperwork.',
    solution: 'Built a Three.js 3D vehicle visualizer coupled with automated Experian credit bureau scoring and digital contract signing.',
    impactMetrics: [
      { value: '+68%', label: 'Online Test Drive Bookings' },
      { value: '3.2 Min', label: 'Avg Digital Pre-approval' },
      { value: '150+', label: 'Dealerships Integrated' }
    ],
    technologies: ['React', 'Three.js / WebGL', 'Next.js', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
    deliverables: ['360° Interactive 3D Vehicle Viewer', 'Finance & Loan Calculator', 'Dealer Inventory Sync Feed', 'Digital Document Signer'],
    featured: false
  },
  {
    id: 'smartfactory-iot',
    title: 'SmartFactory Industrial IoT & Telemetry Platform',
    client: 'Vortex Manufacturing Systems',
    category: 'enterprise',
    categoryLabel: 'Enterprise ERP & SaaS',
    year: '2023',
    image: '/lovable-uploads/7dee89d9-7ad3-4f44-8567-2fab5c93a862.png',
    tagline: 'Edge sensor monitoring, predictive machine maintenance, and automated OEE reporting.',
    description: 'An industrial 4.0 IoT analytics system collecting high-frequency vibration, temperature, and power metrics across 500+ factory production lines to predict hardware failures.',
    problem: 'Unexpected production line breakdowns caused over $1.5M in unplanned factory downtime per year.',
    solution: 'Deployed TimescaleDB time-series ingestion, MQTT broker clustering, and machine learning anomaly detection on equipment degradation.',
    impactMetrics: [
      { value: '-74%', label: 'Unplanned Downtime' },
      { value: '500+', label: 'Connected Industrial Machines' },
      { value: '10K+', label: 'Metrics Ingested / Sec' }
    ],
    technologies: ['TimescaleDB', 'MQTT / EMQX', 'Python ML', 'React', 'Node.js', 'Docker', 'Grafana'],
    deliverables: ['Factory Floor Live Topology View', 'Predictive Failure Alerting Engine', 'Overall Equipment Effectiveness (OEE) Reports', 'Mobile Maintenance Tech App'],
    featured: false
  },
  {
    id: 'foodiego-delivery',
    title: 'FoodieGo - Hyperlocal Food & Grocery Ecosystem',
    client: 'QuickBite Delivery Network',
    category: 'mobile',
    categoryLabel: 'Mobile Apps',
    year: '2024',
    image: '/lovable-uploads/954ddfc6-3ae2-41b6-9dd6-0f792497c6d0.png',
    tagline: 'Tri-sided delivery ecosystem for Customers, Restaurant Kitchens, and Delivery Riders.',
    description: 'A high-speed delivery platform featuring live GPS rider tracking, automated kitchen order ticket printing, batch route optimization, and instant digital payout transfers.',
    problem: 'Legacy delivery apps had poor live tracking, causing late deliveries and restaurant kitchen order confusion.',
    solution: 'Built native mobile apps with real-time location streaming via WebSockets and automated rider assignment algorithms.',
    impactMetrics: [
      { value: '24 Min', label: 'Avg Delivery Time' },
      { value: '850K+', label: 'Orders Processed' },
      { value: '3,200+', label: 'Restaurant Partners' }
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Redis', 'Google Maps API', 'Stripe', 'WebSockets'],
    deliverables: ['Customer Ordering Mobile App', 'Restaurant Merchant Tablet App', 'Courier Delivery App', 'Admin Operations Hub'],
    featured: false
  },
  {
    id: 'legalbrief-ai',
    title: 'LegalBrief AI - Autonomous Contract Analysis & Redlining',
    client: 'Lexis Partners Global Legal Counsel',
    category: 'ai',
    categoryLabel: 'AI & Machine Learning',
    year: '2024',
    image: '/lovable-uploads/a0e619bc-b97f-4cfd-bef8-5fa4212e2be8.png',
    tagline: 'Automated legal risk detection, clause redline suggestions, and compliance audit assistant.',
    description: 'An AI legal tech assistant that ingests NDAs, MSAs, and employment contracts to highlight liability risks, missing indemnities, and generate standard corporate redlines.',
    problem: 'In-house legal teams spent 3+ days reviewing routine commercial contracts, delaying enterprise deal closures.',
    solution: 'Fine-tuned LLM on legal corpora with citation verification, risk scoring taxonomy, and deep Microsoft Word DOCX plugin integration.',
    impactMetrics: [
      { value: '78%', label: 'Review Speed Increase' },
      { value: '99.5%', label: 'Risk Clause Detection' },
      { value: '25K+', label: 'Agreements Reviewed' }
    ],
    technologies: ['Python', 'FastAPI', 'LangChain', 'OpenAI GPT-4', 'pgvector', 'React', 'TypeScript'],
    deliverables: ['Web Contract Review Studio', 'Microsoft Word Redlining Add-in', 'Compliance Risk Scorecard', 'Legal Clause Repository'],
    featured: false
  },
  {
    id: 'proptech-360',
    title: 'PropTech 360 - Real Estate & Property Asset Manager',
    client: 'Skyline Capital Property Group',
    category: 'web',
    categoryLabel: 'Web Applications',
    year: '2023',
    image: '/lovable-uploads/b9b8125a-32af-42bb-8078-5806ae38b242.png',
    tagline: 'Automated rent collection, tenant maintenance portal, and smart lock IoT access control.',
    description: 'An enterprise real estate management platform managing 12,000+ residential and commercial units with automated ACH rent invoicing, contractor dispatch, and financial ledger reporting.',
    problem: 'Property managers struggled with delinquent rent tracking and slow manual contractor maintenance coordination.',
    solution: 'Engineered an automated rent billing engine with Stripe ACH, integrated IoT keyless entry credentials, and automated tenant ticket routing.',
    impactMetrics: [
      { value: '99.2%', label: 'On-Time Rent Collection' },
      { value: '12,000+', label: 'Managed Units' },
      { value: '$35M+', label: 'Annual Rent Handled' }
    ],
    technologies: ['React', 'Next.js', 'PostgreSQL', 'Prisma', 'Stripe ACH', 'Twilio SMS', 'Tailwind CSS'],
    deliverables: ['Tenant Mobile Portal', 'Landlord Financial Analytics Hub', 'Contractor Work Order App', 'Smart Lock IoT Integration'],
    featured: false
  },
  {
    id: 'omnidesk-crm',
    title: 'OmniDesk - Omnichannel Enterprise Helpdesk CRM',
    client: 'GlobalSupport SaaS Solutions',
    category: 'enterprise',
    categoryLabel: 'Enterprise ERP & SaaS',
    year: '2024',
    image: '/lovable-uploads/e86d3e88-9e98-45c2-bae4-e324c827606f.png',
    tagline: 'Unified customer support inbox across Email, WhatsApp, Live Chat, and Voice telephony.',
    description: 'An intelligent customer engagement CRM aggregating messages across 6 channels with automated ticket routing, AI macro suggestions, and SLA breach alerting.',
    problem: 'Support agents toggled across 5 disconnected tools, causing average customer reply delays of 4.5 hours.',
    solution: 'Constructed a unified WebSocket real-time inbox with auto-assignment queues, AI suggested replies, and comprehensive CSAT reporting.',
    impactMetrics: [
      { value: '65%', label: 'First Response Time Cut' },
      { value: '4.9 ★', label: 'Average CSAT' },
      { value: '2M+', label: 'Tickets Resolved' }
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Twilio Voice', 'WebSockets'],
    deliverables: ['Omnichannel Unified Agent Inbox', 'Customer Self-Service Knowledge Base', 'AI Sentiment & Routing Engine', 'Executive SLA Dashboard'],
    featured: false
  },
  {
    id: 'fitpulse-health',
    title: 'FitPulse - AI Fitness & Biometric Health App',
    client: 'Kinetix Health & Wellness Labs',
    category: 'mobile',
    categoryLabel: 'Mobile Apps',
    year: '2024',
    image: '/lovable-uploads/ee4edf23-a52a-49aa-bee5-8e9610ca4992.png',
    tagline: 'Wearables biometric sync (Apple Health/Garmin), AI workout coach, and nutrition planner.',
    description: 'A connected mobile fitness app that syncs continuous heart rate, sleep stages, and workout telemetry to generate dynamically adapting fitness programs.',
    problem: 'Fitness apps lacked adaptive personalization, leading to a 70% user drop-off within 30 days.',
    solution: 'Built an AI workout coach that adjusts routine intensity based on biometric recovery scores and user goal progression.',
    impactMetrics: [
      { value: '650K+', label: 'Active Users' },
      { value: '4.9 ★', label: 'App Store Rating' },
      { value: '+82%', label: '30-Day Retention' }
    ],
    technologies: ['Flutter', 'Apple HealthKit', 'Google Fit API', 'FastAPI', 'PostgreSQL', 'Firebase'],
    deliverables: ['iOS & Android Fitness Apps', 'Apple Watch Companion App', 'AI Personalized Nutrition Planner', 'Community Social Feed'],
    featured: false
  },
  {
    id: 'quantumtrade-desk',
    title: 'QuantumTrade - Algorithmic High-Frequency Trading Desk',
    client: 'Apex Quantitative Capital',
    category: 'fintech',
    categoryLabel: 'FinTech & Banking',
    year: '2024',
    image: '/lovable-uploads/f1d2b0e1-1812-4659-9841-f6fd4f6a06a8.png',
    tagline: 'Sub-millisecond market data streaming, backtesting engine, and automated execution algorithms.',
    description: 'A low-latency quantitative trading terminal providing real-time level 2 order book feeds, automated risk limits, backtesting simulations, and instant trade execution.',
    problem: 'Trading desks faced execution slippage of 80ms during extreme volatility, degrading strategy profitability.',
    solution: 'Engineered a C++ / Rust low-latency trading core with WebAssembly charts in React and dedicated WebSocket multicast market feeds.',
    impactMetrics: [
      { value: '< 2ms', label: 'Execution Latency' },
      { value: '99.999%', label: 'Market Feed Uptime' },
      { value: '$100M+', label: 'Daily Trading Volume' }
    ],
    technologies: ['Rust', 'C++', 'React', 'WebAssembly', 'TimescaleDB', 'Redis', 'WebSockets'],
    deliverables: ['High-Frequency Order Execution Core', 'WebAssembly Candlestick & Order Book UI', 'Historical Backtesting Simulator', 'Automated Risk Control Firewall'],
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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const filteredProjects = portfolioProjects.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#040711] text-foreground">
      <SEO 
        title="Client Portfolio & Featured Software Engineering Work | HigzenDev"
        description="Explore HigzenDev's 20+ enterprise software case studies: mission-critical web applications, AI LLM pipelines, mobile apps, and distributed cloud backends delivered for global brands."
        keywords="HigzenDev portfolio, software development case studies, web development projects, mobile apps, enterprise software showcase, AI projects, FinTech development"
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
              PROVEN ENGINEERING EXCELLENCE • 20+ SHOWCASE WORKS
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

        {/* Search & Category Filter Toolbar */}
        <section className="py-8 bg-card/40 border-b border-border/60 sticky top-[60px] z-30 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                {categories.map((cat) => {
                  const IconComponent = cat.icon;
                  const isSelected = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 ${
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

              {/* Quick Search */}
              <div className="relative w-full md:w-72 shrink-0">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search 20+ projects, stacks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-background/80 border border-border/60 rounded-xl text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase Grid (20 Projects) */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Featured Case Work ({filteredProjects.length} Projects)
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Click Details on any project for technical architecture, problem statement, and delivered KPIs.
                </p>
              </div>
            </div>

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
                          <Building2 className="h-3.5 w-3.5 shrink-0" />
                          <span className="truncate">{project.client}</span>
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

            {filteredProjects.length === 0 && (
              <div className="text-center py-20 bg-card/40 rounded-2xl border border-border/50">
                <p className="text-lg text-muted-foreground">No projects found matching your search.</p>
                <Button 
                  onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                  variant="outline" 
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
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
