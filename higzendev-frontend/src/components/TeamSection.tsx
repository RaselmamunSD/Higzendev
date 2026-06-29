import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Users, Shapes, Code, Globe, Shield, Linkedin, Facebook, Twitter, Star, Heart, Coffee, Pause, Play } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

const FeatureCard = ({ icon, title, description, bgColor }: FeatureCardProps) => {
  return (
    <div className="group relative">
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 h-full transition-all duration-300 hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="font-bold text-xl mb-3 text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      </div>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  position: string;
  color?: string;
  imagePath?: string;
  bio?: string;
  linkedIn?: string;
  facebook?: string;
  twitter?: string;
  isLeadership?: boolean;
  quote?: string;
  funFact?: string;
}

const TeamMember = ({ 
  name, 
  position, 
  color = "bg-gray-800", 
  imagePath,
  bio,
  linkedIn,
  facebook,
  twitter,
  isLeadership = false,
  quote,
  funFact
}: TeamMemberProps) => {
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('');

  return (
    <div className="group relative h-full">
      {/* Animated gradient glow halo */}
      <div className={`absolute -inset-[2px] rounded-2xl bg-gradient-to-br ${isLeadership ? 'from-primary via-secondary to-accent' : 'from-primary/40 via-secondary/40 to-accent/40'} opacity-40 group-hover:opacity-100 blur-md transition-all duration-500 group-hover:blur-lg`}></div>

      <Card className="relative bg-gradient-to-br from-[#0f1419] via-[#161b22] to-[#0d1117] border border-white/10 rounded-2xl overflow-hidden h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:border-primary/40 group-hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.5)]">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/60 rounded-tl-2xl transition-all duration-500"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-secondary/0 group-hover:border-secondary/60 rounded-br-2xl transition-all duration-500"></div>

        <div className="relative overflow-hidden">
          <AspectRatio ratio={1/1} className="w-full">
            {imagePath ? (
              <img
                src={imagePath}
                alt={name}
                className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 relative overflow-hidden">
                {/* Animated mesh background */}
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-primary/40 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <span className="relative z-10 text-5xl font-extrabold text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-500 tracking-wider">
                  {initials}
                </span>
              </div>
            )}
          </AspectRatio>

          {/* Bottom gradient overlay for legibility */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/70 to-transparent pointer-events-none"></div>

          {/* Fun Fact Tooltip */}
          {funFact && (
            <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 translate-y-[-4px] group-hover:translate-y-0 transition-all duration-300">
              <div className="bg-black/70 backdrop-blur-md rounded-full px-3 py-1.5 text-xs text-white border border-primary/40 shadow-lg">
                <Coffee size={12} className="inline mr-1 text-amber-400" />
                {funFact}
              </div>
            </div>
          )}

          {/* Leadership Badge */}
          {isLeadership && (
            <div className="absolute top-3 right-3">
              <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-full p-2 shadow-lg shadow-primary/50 ring-2 ring-white/20">
                <Star size={14} className="text-white fill-white" />
              </div>
            </div>
          )}

          {/* Social Media Overlay */}
          {(linkedIn || facebook || twitter) && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-all duration-500 flex items-end justify-center pb-24">
              <div className="flex space-x-3 translate-y-4 group-hover:translate-y-0 focus-within:translate-y-0 transition-transform duration-500">
                {linkedIn && (
                  <a href={linkedIn} target="_blank" rel="noopener noreferrer" aria-label={`${name} on LinkedIn`} className="bg-white/10 backdrop-blur-md p-2.5 rounded-full hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:scale-110 transition-all duration-300 border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                    <Linkedin size={18} className="text-white" aria-hidden="true" />
                  </a>
                )}
                {facebook && (
                  <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label={`${name} on Facebook`} className="bg-white/10 backdrop-blur-md p-2.5 rounded-full hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:scale-110 transition-all duration-300 border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                    <Facebook size={18} className="text-white" aria-hidden="true" />
                  </a>
                )}
                {twitter && (
                  <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label={`${name} on Twitter`} className="bg-white/10 backdrop-blur-md p-2.5 rounded-full hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:scale-110 transition-all duration-300 border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                    <Twitter size={18} className="text-white" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="relative p-6">
          {/* Position chip */}
          <div className="inline-flex items-center px-3 py-1 mb-3 rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 border border-primary/30 backdrop-blur-sm">
            <span className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {position}
            </span>
          </div>
          <h3 className="font-bold text-2xl text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {name}
          </h3>
          {bio && <p className="text-sm text-gray-400 leading-relaxed">{bio}</p>}
          {quote && isLeadership && (
            <div className="mt-4 p-4 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-xl border-l-4 border-primary relative">
              <span className="absolute -top-2 left-3 text-3xl text-primary/60 font-serif leading-none">"</span>
              <p className="text-sm text-gray-300 italic leading-relaxed pl-2">{quote}</p>
            </div>
          )}

          {/* Bottom shine line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500"></div>
        </div>
      </Card>
    </div>
  );
};

interface HomeTeamShowcaseProps {
  members: TeamMemberProps[];
}

const HomeTeamShowcase = ({ members }: HomeTeamShowcaseProps) => {
  const prefersReducedMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);
  const animationPaused = prefersReducedMotion || isPaused;
  const loop = prefersReducedMotion ? members : [...members, ...members];
  const headingId = 'home-team-showcase-heading';

  return (
    <section
      aria-labelledby={headingId}
      className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#070b1a] via-[#0a1230] to-[#050816] overflow-hidden border border-white/5"
    >
      {/* ambient glows */}
      <div aria-hidden="true" className="absolute -top-32 -left-20 w-[20rem] sm:w-[28rem] h-[20rem] sm:h-[28rem] rounded-full bg-primary/10 blur-[80px] sm:blur-[120px] pointer-events-none"></div>
      <div aria-hidden="true" className="absolute -bottom-32 -right-20 w-[20rem] sm:w-[28rem] h-[20rem] sm:h-[28rem] rounded-full bg-secondary/10 blur-[80px] sm:blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-end mb-4 sm:mb-6 lg:mb-8 px-1 sm:px-4 lg:px-6 pt-2 sm:pt-4">
        <div>
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <span aria-hidden="true" className="h-px w-8 sm:w-10 bg-primary"></span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] text-primary uppercase">
              The Engineering Core
            </span>
          </div>
          <h2 id={headingId} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
            Technological <span className="block md:inline">Masters<span className="text-primary" aria-hidden="true">.</span></span>
          </h2>
        </div>
        <div className="lg:text-right space-y-2 sm:space-y-3 lg:space-y-4">
          <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-md lg:ml-auto leading-relaxed">
            A multi-disciplinary collective of engineers pushing the boundaries
            of what's possible in the digital realm.
          </p>
          <div className="flex gap-2 sm:gap-3 lg:justify-end items-center">
            {!prefersReducedMotion && (
              <button
                type="button"
                onClick={() => setIsPaused(p => !p)}
                aria-label={isPaused ? 'Resume team carousel animation' : 'Pause team carousel animation'}
                aria-pressed={isPaused}
                className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/15 text-white/80 hover:bg-primary hover:text-white hover:border-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {isPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
              </button>
            )}
            <Link to="/about/team" aria-label="View all team members" className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/15 text-white/80 hover:bg-primary hover:text-white hover:border-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <span className="text-lg sm:text-xl leading-none" aria-hidden="true">‹</span>
            </Link>
            <Link to="/about/team" aria-label="View all team members" className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/15 text-white/80 hover:bg-primary hover:text-white hover:border-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <span className="text-lg sm:text-xl leading-none" aria-hidden="true">›</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Edge fades */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 md:w-32 lg:w-40 bg-gradient-to-r from-[#050816] to-transparent z-20"></div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 md:w-32 lg:w-40 bg-gradient-to-l from-[#050816] to-transparent z-20"></div>

      {/* Auto-rotating row */}
      <div
        className={prefersReducedMotion ? 'relative py-3 sm:py-4 overflow-x-auto' : 'relative overflow-hidden py-3 sm:py-4'}
        role="region"
        aria-label="Team members carousel"
        aria-roledescription="carousel"
      >
        <ul
          className={`flex gap-4 sm:gap-5 lg:gap-6 w-max list-none p-0 m-0 ${prefersReducedMotion ? '' : 'animate-marquee-slow hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]'} ${animationPaused ? '[animation-play-state:paused]' : ''}`}
          aria-live={prefersReducedMotion ? undefined : 'off'}
        >
          {loop.map((m, i) => {
            const initials = m.name.split(' ').map(p => p[0]).join('').slice(0, 2);
            const chip = m.position.split(' ')[0].toUpperCase();
            const isDuplicate = !prefersReducedMotion && i >= members.length;
            return (
              <li
                key={i}
                aria-hidden={isDuplicate ? 'true' : undefined}
                className="list-none"
              >
                <article
                  tabIndex={isDuplicate ? -1 : 0}
                  aria-label={`${m.name}, ${m.position}`}
                  className="group relative w-[170px] sm:w-[200px] md:w-[220px] lg:w-[230px] flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0c1530] to-[#05081a] transition-all duration-500 hover:border-primary/60 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_hsl(var(--primary)/0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background block"
                >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {m.imagePath ? (
                    <img
                      src={m.imagePath}
                      alt={`Portrait of ${m.name}`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div aria-hidden="true" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0a1230] via-[#0c1530] to-[#050816]">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white/20 tracking-widest">{initials}</span>
                    </div>
                  )}
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                  {/* Category chip */}
                  <div aria-hidden="true" className="absolute top-2 sm:top-3 right-2 sm:right-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40 text-[9px] sm:text-[10px] font-bold tracking-wider text-primary uppercase">
                    {chip}
                  </div>
                </div>

                <div className="relative p-3 sm:p-4">
                  <div className="flex items-center gap-2 text-[9px] sm:text-[10px] font-mono tracking-widest text-primary/80 uppercase mb-1.5 sm:mb-2">
                    <span aria-hidden="true">›_</span>
                    <span className="truncate">{m.position}</span>
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-extrabold text-white uppercase tracking-wide leading-tight truncate">
                    {m.name}
                  </h3>
                  <div aria-hidden="true" className="mt-2 sm:mt-3 flex items-center gap-1.5 sm:gap-2 text-white/30">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-md border border-white/10 flex items-center justify-center text-[10px] sm:text-xs">{`</>`}</span>
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-md border border-white/10 flex items-center justify-center text-[10px] sm:text-xs">DB</span>
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-md border border-white/10 flex items-center justify-center text-[10px] sm:text-xs">⚙</span>
                  </div>
                </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>

      <div aria-hidden="true" className="text-center mt-4 sm:mt-6 text-[9px] sm:text-[10px] font-mono tracking-[0.3em] sm:tracking-[0.4em] text-white/30 uppercase">
        ↔ Interactive Talent Stream
      </div>
    </section>
  );
};

const TeamSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [membersPaused, setMembersPaused] = useState(false);
  const membersAnimationPaused = prefersReducedMotion || membersPaused;
  const features = [
    {
      icon: <Users size={28} className="text-primary" />,
      title: 'Professional Developers',
      description: 'We have professional software developers with expertise in 100+ technologies',
      bgColor: 'bg-gradient-to-br from-primary/20 to-primary/30'
    },
    {
      icon: <Shapes size={28} className="text-secondary" />,
      title: 'Flexible Strategy',
      description: 'Innovative & flexible strategy suitable for any changing requirements',
      bgColor: 'bg-gradient-to-br from-secondary/20 to-secondary/30'
    },
    {
      icon: <Clock size={28} className="text-accent" />,
      title: 'On-time Delivery',
      description: 'Delivering ahead of schedule, every time',
      bgColor: 'bg-gradient-to-br from-accent/20 to-accent/30'
    },
    {
      icon: <Code size={28} className="text-primary" />,
      title: 'Quality Assurance',
      description: 'Strict quality standards ensure bug-free deliveries',
      bgColor: 'bg-gradient-to-br from-primary/20 to-primary/30'
    },
    {
      icon: <Globe size={28} className="text-secondary" />,
      title: 'Global Expertise',
      description: 'Team members from across the globe bringing diverse perspectives',
      bgColor: 'bg-gradient-to-br from-secondary/20 to-secondary/30'
    },
    {
      icon: <Shield size={28} className="text-accent" />,
      title: 'Dedicated Support',
      description: '24/7 support and maintenance from our expert team',
      bgColor: 'bg-gradient-to-br from-accent/20 to-accent/30'
    },
  ];

  // Founding team
  const foundingTeam = [
    {
      name: 'Bhuiyan Mohammad Iklash',
      position: 'CEO & Founder',
      imagePath: '/lovable-uploads/7dee89d9-7ad3-4f44-8567-2fab5c93a862.png',
      linkedIn: 'https://linkedin.com/',
      facebook: 'https://facebook.com/',
      twitter: 'https://twitter.com/',
      isLeadership: true,
      quote: "Innovation is not about having all the answers, it's about asking the right questions.",
      funFact: "Coffee enthusiast ☕"
    },
    {
      name: 'Biplab Chandra Sarker',
      position: 'Founding Director',
      color: 'bg-gray-900',
      linkedIn: 'https://linkedin.com/',
      imagePath: '',
      facebook: '',
      twitter: '',
      isLeadership: true,
      quote: "Excellence is not a destination; it's a continuous journey.",
      funFact: "Chess master 🏆"
    },
    {
      name: 'Md. Imrul Hasan',
      position: 'Founding Director',
      color: 'bg-gray-900',
      linkedIn: '',
      imagePath: '',
      facebook: '',
      twitter: '',
      isLeadership: true,
      quote: "Building tomorrow's solutions with today's passion.",
      funFact: "Guitar player 🎸"
    },
  ];

  // Executive team
  const executiveTeam = [
    {
      name: 'Md Abdul Mukit',
      position: 'Chief Operating Officer',
      color: 'bg-gray-900',
      linkedIn: 'https://linkedin.com/',
      imagePath: '',
      facebook: '',
      twitter: '',
      isLeadership: true,
      quote: "Operations excellence drives innovation forward.",
      funFact: "Marathon runner 🏃‍♂️"
    },
    {
      name: 'Sarah Johnson',
      position: 'SVP, Engineering',
      color: 'bg-gray-900',
      linkedIn: 'https://linkedin.com/',
      imagePath: '',
      facebook: '',
      twitter: '',
      isLeadership: true,
      quote: "Clean code is not written by following a set of rules, it's an art.",
      funFact: "Open source contributor 💻"
    },
    {
      name: 'David Martinez',
      position: 'VP, Product',
      color: 'bg-gray-900',
      linkedIn: 'https://linkedin.com/',
      imagePath: '',
      facebook: '',
      twitter: '',
      isLeadership: true,
      quote: "Great products solve real problems elegantly.",
      funFact: "Drone pilot 🚁"
    },
    {
      name: 'Emily Wong',
      position: 'AVP, Design',
      color: 'bg-gray-900',
      linkedIn: 'https://linkedin.com/',
      imagePath: '',
      facebook: '',
      twitter: '',
      isLeadership: true,
      quote: "Design is not just what it looks like, it's how it works.",
      funFact: "Digital artist 🎨"
    },
  ];

  // Our Team Members (12 members for marquee)
  const teamMembers = [
    {
      name: 'Robert Taylor',
      position: 'QA Engineer',
      color: 'bg-gray-900',
      linkedIn: '',
      imagePath: '',
      facebook: '',
      twitter: '',
      funFact: "Bug hunter 🐛",
      bio: "Ensuring quality with meticulous attention to detail"
    },
    {
      name: 'Alex Chen',
      position: 'Full Stack Developer',
      color: 'bg-gray-900',
      linkedIn: '',
      imagePath: '',
      facebook: '',
      twitter: '',
      funFact: "Night owl 🦉",
      bio: "Building scalable applications with modern technologies"
    },
    {
      name: 'Maria Rodriguez',
      position: 'UX/UI Designer',
      color: 'bg-gray-900',
      linkedIn: '',
      imagePath: '',
      facebook: '',
      twitter: '',
      funFact: "Color theory expert 🌈",
      bio: "Creating intuitive and beautiful user experiences"
    },
    {
      name: 'James Wilson',
      position: 'DevOps Engineer',
      color: 'bg-gray-900',
      linkedIn: '',
      imagePath: '',
      facebook: '',
      twitter: '',
      funFact: "Automation wizard ⚡",
      bio: "Streamlining deployment and infrastructure processes"
    },
    {
      name: 'Lisa Chang',
      position: 'Frontend Developer',
      color: 'bg-gray-900',
      linkedIn: '',
      imagePath: '',
      facebook: '',
      twitter: '',
      funFact: "React enthusiast ⚛️",
      bio: "Creating responsive and interactive user interfaces"
    },
    {
      name: 'Michael Brown',
      position: 'Backend Developer',
      color: 'bg-gray-900',
      linkedIn: '',
      imagePath: '',
      facebook: '',
      twitter: '',
      funFact: "API architect 🏗️",
      bio: "Building robust and scalable server-side solutions"
    },
    {
      name: 'Nina Patel',
      position: 'Data Scientist',
      color: 'bg-gray-900',
      linkedIn: '',
      imagePath: '',
      facebook: '',
      twitter: '',
      funFact: "Python wizard 🐍",
      bio: "Transforming data into actionable insights"
    },
    {
      name: 'Carlos Mendez',
      position: 'Mobile Developer',
      color: 'bg-gray-900',
      linkedIn: '',
      imagePath: '',
      facebook: '',
      twitter: '',
      funFact: "Flutter expert 📱",
      bio: "Creating native mobile experiences across platforms"
    },
    {
      name: 'Sophie Laurent',
      position: 'Product Manager',
      color: 'bg-gray-900',
      linkedIn: '',
      imagePath: '',
      facebook: '',
      twitter: '',
      funFact: "Agile master 📋",
      bio: "Bridging business needs with technical solutions"
    },
    {
      name: 'David Kim',
      position: 'Security Engineer',
      color: 'bg-gray-900',
      linkedIn: '',
      imagePath: '',
      facebook: '',
      twitter: '',
      funFact: "Ethical hacker 🛡️",
      bio: "Protecting systems from cyber threats"
    },
    {
      name: 'Amanda Foster',
      position: 'Technical Writer',
      color: 'bg-gray-900',
      linkedIn: '',
      imagePath: '',
      facebook: '',
      twitter: '',
      funFact: "Documentation guru 📚",
      bio: "Making complex technical concepts accessible"
    },
    {
      name: 'Ryan O\'Connor',
      position: 'Cloud Architect',
      color: 'bg-gray-900',
      linkedIn: '',
      imagePath: '',
      facebook: '',
      twitter: '',
      funFact: "AWS certified ☁️",
      bio: "Designing scalable cloud infrastructure solutions"
    },
  ];

  // Show all team members on the team page, but limit to 4 on other pages
  const isTeamPage = window.location.pathname === '/about/team';

  return (
    <section aria-label="Meet our team" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div aria-hidden="true" className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>
        <div className="absolute top-0 left-1/4 w-48 sm:w-60 lg:w-72 h-48 sm:h-60 lg:h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-60 sm:w-72 lg:w-96 h-60 sm:h-72 lg:h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Hero Section */}
        {isTeamPage && (
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="max-w-4xl mx-auto px-2 sm:px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent leading-tight">
                Meet the Minds Behind the Code
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                A passionate team driving digital innovation and <span className="text-white font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">solving problems</span> with cutting-edge technology
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Heart size={14} className="text-red-400" />
                  <span>We build with passion</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <Coffee size={14} className="text-amber-400" />
                  <span>Fueled by coffee</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <Star size={14} className="text-yellow-400" />
                  <span>Driven by innovation</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Our Values Section */}
        {isTeamPage && (
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16 px-2 sm:px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">Journey With Us</h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
                Collaborating With Us Is Your Pathway to Success
              </p>
            </div>
          
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  bgColor={feature.bgColor}
                />
              ))}
            </div>
          </div>
        )}

        {/* Founding Team Section */}
        {isTeamPage && (
          <>
            <div className="text-center mb-10 sm:mb-12 lg:mb-16 px-2 sm:px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Valued Shareholders
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
                Visionary leaders who founded our company and continue to guide our journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-16 sm:mb-20 lg:mb-24">
              {foundingTeam.map((member, index) => (
                <TeamMember 
                  key={index}
                  name={member.name}
                  position={member.position}
                  color={member.color}
                  imagePath={member.imagePath}
                  linkedIn={member.linkedIn}
                  facebook={member.facebook}
                  twitter={member.twitter}
                  isLeadership={member.isLeadership}
                  quote={member.quote}
                  funFact={member.funFact}
                />
              ))}
            </div>
          </>
        )}

        {/* Executive Team Section */}
        {isTeamPage && (
          <>
            <div className="text-center mb-10 sm:mb-12 lg:mb-16 px-2 sm:px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Executive Team
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
                Strategic leaders driving operational excellence and innovation
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 mb-16 sm:mb-20 lg:mb-24">
              {executiveTeam.map((member, index) => (
                <TeamMember 
                  key={index}
                  name={member.name}
                  position={member.position}
                  color={member.color}
                  imagePath={member.imagePath}
                  linkedIn={member.linkedIn}
                  facebook={member.facebook}
                  twitter={member.twitter}
                  isLeadership={member.isLeadership}
                  quote={member.quote}
                  funFact={member.funFact}
                />
              ))}
            </div>
          </>
        )}

        {isTeamPage ? (
          <>
            <div className="text-center mb-10 sm:mb-12 lg:mb-16 px-2 sm:px-4">
              <h2 id="our-team-members-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Our Team Members
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
                Talented individuals who bring our vision to life every day
              </p>
              {!prefersReducedMotion && (
                <div className="mt-4 sm:mt-6 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setMembersPaused(p => !p)}
                    aria-label={membersPaused ? 'Resume team members carousel' : 'Pause team members carousel'}
                    aria-pressed={membersPaused}
                    aria-controls="team-members-carousel"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-xs sm:text-sm text-white/80 hover:bg-primary hover:text-white hover:border-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {membersPaused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
                    <span>{membersPaused ? 'Resume' : 'Pause'} animation</span>
                  </button>
                </div>
              )}
            </div>

            <div
              id="team-members-carousel"
              className={prefersReducedMotion ? 'relative overflow-x-auto mb-12 sm:mb-16 lg:mb-20' : 'relative overflow-hidden mb-12 sm:mb-16 lg:mb-20'}
              role="region"
              aria-labelledby="our-team-members-heading"
              aria-roledescription="carousel"
            >
              <ul
                className={`flex space-x-4 sm:space-x-6 lg:space-x-8 list-none p-0 m-0 ${prefersReducedMotion ? 'w-max' : 'animate-marquee hover:pause-marquee focus-within:[animation-play-state:paused]'} ${membersAnimationPaused ? '[animation-play-state:paused]' : ''}`}
              >
                {(prefersReducedMotion ? teamMembers : teamMembers.concat(teamMembers)).map((member, index) => {
                  const isDuplicate = !prefersReducedMotion && index >= teamMembers.length;
                  return (
                    <li
                      key={index}
                      aria-hidden={isDuplicate ? 'true' : undefined}
                      className="flex-shrink-0 w-64 sm:w-72 lg:w-80 list-none"
                    >
                      <TeamMember {...member} />
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="text-center px-2 sm:px-4">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-10 lg:p-12 max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Want to Join the Team?
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  We're always looking for passionate individuals who want to make a difference
                </p>
                <Link to="/careers">
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">
                    See Open Roles
                  </Button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <HomeTeamShowcase members={[...foundingTeam, ...executiveTeam, ...teamMembers] as TeamMemberProps[]} />
        )}
      </div>
    </section>
  );
};

export default TeamSection;
