import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-16 border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Your privacy is important to us. Learn how we protect your data.
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
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">1</span>
                  Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This may include your name, email address, phone number, 
                  and other contact information.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">2</span>
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base mb-4">
                  We use the information we collect to:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Provide, maintain, and improve our services</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Process transactions and send related information</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Send you technical notices and support messages</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Communicate with you about products, services, and events</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Monitor and analyze trends and usage</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">3</span>
                  Information Sharing
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy. We may share information with 
                  trusted partners who assist us in operating our website and conducting our business.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">4</span>
                  Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the internet is 100% secure.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">5</span>
                  Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  You have the right to access, update, or delete your personal information. You may also 
                  opt out of receiving promotional communications from us by following the instructions in 
                  those messages.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">6</span>
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 space-y-2 p-6 bg-muted/30 rounded-xl border border-border/30">
                  <p className="text-foreground font-medium">📧 Email: privacy@techwave.com</p>
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

export default PrivacyPolicy;