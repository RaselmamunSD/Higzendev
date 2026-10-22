
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Award, Headphones, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureItem {
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  badge: string;
}

const WhyWorkWithUsSection: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: <Award className="w-7 h-7" />,
      tag: "01",
      badge: "Proven Excellence",
      title: "High-Quality Work and On-time Delivery",
      description: "Consistently delivering high-caliber engineering with a strict commitment to deadlines, ensuring superior quality and punctuality across every project."
    },
    {
      icon: <CheckCircle2 className="w-7 h-7" />,
      tag: "02",
      badge: "Risk-Free Guarantee",
      title: "100% Satisfaction Guaranteed",
      description: "We guarantee 100% satisfaction, ensuring that our services not only meet but exceed your benchmarks. Your business growth is our top priority."
    },
    {
      icon: <Headphones className="w-7 h-7" />,
      tag: "03",
      badge: "Always Available",
      title: "Quick Response with 24/7 Support",
      description: "Get lightning-fast response times and round-the-clock technical assistance. Our dedicated team is always ready to resolve your queries promptly."
    },
    {
      icon: <Clock className="w-7 h-7" />,
      tag: "04",
      badge: "Post-Launch Care",
      title: "30 Days of Free Post-Delivery Support",
      description: "Enjoy complete peace of mind with 30 days of comprehensive free maintenance and troubleshooting support after your system goes live."
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-950/40 border-t border-border/40">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Choose HigzenDev</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
            Why Work{' '}
            <span className="bg-gradient-to-r from-primary via-cyan-500 to-purple-600 dark:via-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
              With Us
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            We collaborate closely with you to understand your core business objectives, streamline execution, and engineer scalable digital solutions that drive measurable growth.
          </p>
        </div>

        {/* Features 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative h-full"
            >
              <Card className="h-full bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 hover:border-primary/50 shadow-md hover:shadow-xl dark:shadow-2xl dark:hover:shadow-glow transition-all duration-300 rounded-3xl overflow-hidden group-hover:-translate-y-1">
                {/* Subtle top glow highlight on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardContent className="p-7 sm:p-8 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Row: Icon & Tag/Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 dark:from-primary/25 dark:to-primary/10 border border-primary/25 text-primary flex items-center justify-center shadow-md shadow-primary/10 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-xl bg-muted text-muted-foreground border border-border/50">
                          {feature.badge}
                        </span>
                        <span className="font-mono text-xs font-bold text-primary/60 dark:text-cyan-400/60">
                          {feature.tag}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-snug mb-3">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-xs font-semibold text-primary">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Guaranteed Quality Standard</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsSection;
