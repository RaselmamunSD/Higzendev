import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-secondary/10 via-primary/5 to-background py-16 border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Terms & Conditions
              </h1>
              <p className="text-lg text-muted-foreground">
                Please read these terms carefully before using our services.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl shadow-lg border border-border/30 p-8 md:p-12 space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold">1</span>
                  Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  By accessing and using HigzenDev Limited's services, you accept and agree to be bound by 
                  the terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold">2</span>
                  Services Description
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  HigzenDev Limited provides software development, web development, mobile app development, 
                  and related technology services. We reserve the right to modify or discontinue any 
                  service at any time without notice.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold">3</span>
                  User Responsibilities
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                    <span>Provide accurate and complete information</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                    <span>Use our services only for lawful purposes</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                    <span>Not interfere with or disrupt our services</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                    <span>Respect intellectual property rights</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                    <span>Comply with all applicable laws and regulations</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold">4</span>
                  Payment Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Payment terms will be specified in individual project contracts. Generally, payments 
                  are due according to the milestone schedule agreed upon in the project contract. 
                  Late payments may result in project delays or suspension of services.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold">5</span>
                  Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Upon full payment, clients retain ownership of custom-developed software. However, 
                  HigzenDev Limited retains rights to any pre-existing intellectual property, frameworks, 
                  or methodologies used in the development process.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold">6</span>
                  Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  HigzenDev Limited shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages arising out of or relating to the use of our 
                  services, even if we have been advised of the possibility of such damages.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold">7</span>
                  Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Either party may terminate services with written notice. Upon termination, all 
                  outstanding payments become due immediately, and access to services will be 
                  discontinued.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold">8</span>
                  Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  These terms shall be governed by and construed in accordance with the laws of 
                  Bangladesh, without regard to its conflict of law provisions.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold">9</span>
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  For questions regarding these terms and conditions, please contact us at:
                </p>
                <div className="mt-4 space-y-2 p-6 bg-muted/30 rounded-xl border border-border/30">
                  <p className="text-foreground font-medium">📧 Email: contact@higzendev.com</p>
                  <p className="text-foreground font-medium">📞 Phone: +880 1234 567890</p>
                  <p className="text-foreground font-medium">📍 Address: 123 Tech Street, Dhaka, Bangladesh</p>
                </div>
              </div>
              
              <div className="border-t border-border/30 pt-6">
                <p className="text-sm text-muted-foreground text-center">
                  Last updated: January 1, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsConditions;