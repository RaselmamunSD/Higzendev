import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PhoneCall, Mail, MapPin, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-24 bg-background/95">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get a FREE Consultation</h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help your business grow
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg border border-border shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Us</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-foreground">Full Name</label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-foreground">Email</label>
                    <Input placeholder="example@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-foreground">Phone</label>
                    <Input placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-foreground">Company</label>
                    <Input placeholder="Your Company" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1 text-foreground">Message</label>
                  <Textarea placeholder="How can we help you?" className="h-32" />
                </div>
                
                <Button className="w-full shadow-glow">Submit Request</Button>
              </form>
            </div>

            <div>
              <div className="bg-card text-foreground p-8 rounded-lg mb-8 border border-border shadow-lg">
                <h3 className="text-2xl font-bold mb-6">HigzenDev at a Glance:</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    <span>Full-fledged Web Design and Development Services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    <span>Quality Work at Competitive Rates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    <span>Nurturing Long-Term Partnerships</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    <span>13+ Years of Success Stories</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <PhoneCall size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-foreground">Phone</h4>
                    <p className="text-muted-foreground">01870966718</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-foreground">Email</h4>
                    <p className="text-muted-foreground">contact@higzendev.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-foreground">Office Location</h4>
                    <p className="text-muted-foreground">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
