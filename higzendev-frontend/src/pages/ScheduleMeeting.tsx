import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Video, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScheduleMeeting = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    meetingType: '',
    date: '',
    time: '',
    agenda: '',
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Meeting scheduled:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background dark:via-slate-900/40 relative overflow-hidden border-b border-border/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.08),transparent_60%)] pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
                Schedule a Meeting
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your project and explore how we can help bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Meeting Types */}
        <section className="py-16 bg-muted/20 border-b border-border/40 relative">
          <div className="container mx-auto px-4 relative">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-12 text-slate-900 dark:text-white">Choose Your Meeting Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
              <div className="text-center p-8 border border-border/70 rounded-2xl hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] bg-card backdrop-blur-sm">
                <div className="w-16 h-16 bg-blue-500/10 dark:bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-blue-500/30">
                  <Video className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Video Call</h3>
                <p className="text-muted-foreground mb-6 text-sm">30-60 minutes online discussion</p>
                <Link to="/video-meeting">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full shadow-md transition-all duration-300">
                    Book Video Call
                  </Button>
                </Link>
              </div>

              <div className="text-center p-8 border border-border/70 rounded-2xl hover:shadow-xl hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] bg-card backdrop-blur-sm">
                <div className="w-16 h-16 bg-purple-500/10 dark:bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-purple-500/30">
                  <MapPin className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">In-Person</h3>
                <p className="text-muted-foreground mb-6 text-sm">Face-to-face meeting at our office</p>
                <Button 
                  variant="outline"
                  className="w-full border-purple-500/40 text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
                  onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Rupnagar Residential Area, Road 13, House 27, Mirpur-2, Dhaka, Bangladesh")}`, '_blank')}
                >
                  View Location
                </Button>
              </div>

              <div className="text-center p-8 border border-border/70 rounded-2xl hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 hover:scale-[1.02] bg-card backdrop-blur-sm">
                <div className="w-16 h-16 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-emerald-500/30">
                  <MessageCircle className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Quick Call</h3>
                <p className="text-muted-foreground mb-6 text-sm">15-minute WhatsApp consultation</p>
                <Button 
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md transition-all duration-300"
                  onClick={() => window.open('https://wa.me/8801870966718', '_blank')}
                >
                  WhatsApp Call
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 bg-background relative border-b border-border/40">
          <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-8 text-slate-900 dark:text-white">Book Your Meeting</h2>
              <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-xl border border-border/70">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground/90">Full Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        className="bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground/90">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        className="bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground/90">Company</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Enter your company name"
                        className="bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground/90">Phone Number</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        className="bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground/90">Meeting Type *</label>
                    <Select value={formData.meetingType} onValueChange={(value) => handleInputChange('meetingType', value)}>
                      <SelectTrigger className="bg-background border-input text-foreground focus-visible:ring-primary">
                        <SelectValue placeholder="Select meeting type" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border text-popover-foreground shadow-lg">
                        <SelectItem value="video-call" className="cursor-pointer focus:bg-muted">Video Call</SelectItem>
                        <SelectItem value="in-person" className="cursor-pointer focus:bg-muted">In-Person Meeting</SelectItem>
                        <SelectItem value="quick-call" className="cursor-pointer focus:bg-muted">Quick Call</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground/90">Preferred Date *</label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="bg-background border-input text-foreground focus-visible:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground/90">Preferred Time *</label>
                      <Input
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleInputChange('time', e.target.value)}
                        className="bg-background border-input text-foreground focus-visible:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground/90">Meeting Agenda</label>
                    <Textarea
                      value={formData.agenda}
                      onChange={(e) => handleInputChange('agenda', e.target.value)}
                      placeholder="What would you like to discuss?"
                      className="bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                      rows={4}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground/90">Additional Information</label>
                    <Textarea
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      placeholder="Any additional details or requirements"
                      className="bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold py-6 text-base rounded-xl shadow-lg shadow-primary/20 transition-all duration-300" size="lg">
                    Schedule Meeting
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-muted/20 relative">
          <div className="container mx-auto px-4 text-center relative">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 text-slate-900 dark:text-white">Or Contact Us Directly</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-2xl border border-border/70 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-900 dark:text-white">Email</h3>
                <p className="text-muted-foreground">contact@higzendev.com</p>
              </div>
              <div className="p-6 bg-card rounded-2xl border border-border/70 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-900 dark:text-white">Phone & WhatsApp</h3>
                <a href="tel:+8801870966718" className="text-muted-foreground hover:text-primary transition-colors block">+880 1870-966718</a>
                <a href="https://wa.me/8801870966718" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 text-xs mt-1 block font-medium hover:underline">Chat on WhatsApp</a>
              </div>
              <div className="p-6 bg-card rounded-2xl border border-border/70 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-900 dark:text-white">Office Hours</h3>
                <p className="text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM BST</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ScheduleMeeting;
