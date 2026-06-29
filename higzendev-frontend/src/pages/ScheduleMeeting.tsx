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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-purple-950/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Schedule a Meeting
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and explore how we can help bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Meeting Types */}
        <section className="py-16 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
          <div className="container mx-auto px-4 relative">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-100">Choose Your Meeting Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 border border-slate-700/30 rounded-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 bg-slate-800/40 backdrop-blur-sm hover:bg-slate-800/60">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-blue-500/30">
                  <Video className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-100">Video Call</h3>
                <p className="text-slate-400 mb-6">30-60 minutes online discussion</p>
                <Link to="/video-meeting">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full transition-all duration-300">Book Video Call</Button>
                </Link>
              </div>
              <div className="text-center p-8 border border-slate-700/30 rounded-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105 bg-slate-800/40 backdrop-blur-sm hover:bg-slate-800/60">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-purple-500/30">
                  <MapPin className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-100">In-Person</h3>
                <p className="text-slate-400 mb-6">Face-to-face meeting at our office</p>
                <Button 
                  variant="outline"
                  className="w-full border-purple-500/50 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-300"
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                >
                  View Location
                </Button>
              </div>
              <div className="text-center p-8 border border-slate-700/30 rounded-xl hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 hover:scale-105 bg-slate-800/40 backdrop-blur-sm hover:bg-slate-800/60">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-green-500/30">
                  <MessageCircle className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-100">Quick Call</h3>
                <p className="text-slate-400 mb-6">15-minute WhatsApp consultation</p>
                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white transition-all duration-300"
                  onClick={() => window.open('https://wa.me/8801811966314', '_blank')}
                >
                  WhatsApp Call
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-slate-900/70 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-cyan-600/5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-slate-100">Book Your Meeting</h2>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/30 ring-1 ring-slate-600/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Full Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        className="bg-slate-700/50 border-slate-600/50 text-slate-100 placeholder:text-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        className="bg-slate-700/50 border-slate-600/50 text-slate-100 placeholder:text-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Company</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Enter your company name"
                        className="bg-slate-700/50 border-slate-600/50 text-slate-100 placeholder:text-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Phone Number</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        className="bg-slate-700/50 border-slate-600/50 text-slate-100 placeholder:text-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">Meeting Type *</label>
                    <Select value={formData.meetingType} onValueChange={(value) => handleInputChange('meetingType', value)}>
                      <SelectTrigger className="bg-slate-700/50 border-slate-600/50 text-slate-100 focus:border-blue-500/50 focus:ring-blue-500/20">
                        <SelectValue placeholder="Select meeting type" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="video-call" className="text-slate-100 focus:bg-slate-700">Video Call</SelectItem>
                        <SelectItem value="in-person" className="text-slate-100 focus:bg-slate-700">In-Person Meeting</SelectItem>
                        <SelectItem value="quick-call" className="text-slate-100 focus:bg-slate-700">Quick Call</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Preferred Date *</label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="bg-slate-700/50 border-slate-600/50 text-slate-100 focus:border-blue-500/50 focus:ring-blue-500/20"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Preferred Time *</label>
                      <Input
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleInputChange('time', e.target.value)}
                        className="bg-slate-700/50 border-slate-600/50 text-slate-100 focus:border-blue-500/50 focus:ring-blue-500/20"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">Meeting Agenda</label>
                    <Textarea
                      value={formData.agenda}
                      onChange={(e) => handleInputChange('agenda', e.target.value)}
                      placeholder="What would you like to discuss?"
                      className="bg-slate-700/50 border-slate-600/50 text-slate-100 placeholder:text-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20"
                      rows={4}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">Additional Information</label>
                    <Textarea
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      placeholder="Any additional details or requirements"
                      className="bg-slate-700/50 border-slate-600/50 text-slate-100 placeholder:text-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20"
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300" size="lg">
                    Schedule Meeting
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 via-blue-600/5 to-purple-600/5"></div>
          <div className="container mx-auto px-4 text-center relative">
            <h2 className="text-3xl font-bold mb-8 text-slate-100">Or Contact Us Directly</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:bg-slate-800/60 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-slate-100">Email</h3>
                <p className="text-slate-400">contact@higzendev.com</p>
              </div>
              <div className="p-6 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:bg-slate-800/60 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-slate-100">Phone</h3>
                <p className="text-slate-400">+880 1811-966314</p>
              </div>
              <div className="p-6 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:bg-slate-800/60 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-slate-100">Office Hours</h3>
                <p className="text-slate-400">Mon-Fri: 9:00 AM - 6:00 PM BST</p>
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