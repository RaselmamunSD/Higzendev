import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Cpu, Zap, Shield, Cog, Smartphone, Car, Home, Activity, CheckCircle, ArrowRight, Monitor, Wifi, Battery } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const EmbeddedSystemDesign = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-6">
                <Cpu size={20} />
                Embedded System Design & Development
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Power the Internet of Things
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Design and develop cutting-edge embedded systems that power the connected world. From IoT devices to 
                industrial automation, we create intelligent hardware solutions that bridge the physical and digital realms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/request-quote" className="flex items-center gap-2">
                    Start Your Project <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Link to="/request-quote">Explore Solutions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Embedded Solutions</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From concept to production, we deliver complete embedded system solutions for diverse applications
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Cpu className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Hardware Design</h3>
                <p className="text-muted-foreground mb-4">
                  Custom PCB design, circuit development, and hardware optimization for specific requirements.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> PCB Design & Layout</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Component Selection</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Signal Integrity Analysis</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Cog className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Firmware Development</h3>
                <p className="text-muted-foreground mb-4">
                  Low-level programming and firmware development for microcontrollers and embedded processors.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Real-time Programming</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Device Drivers</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Bootloader Development</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Wifi className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">IoT Connectivity</h3>
                <p className="text-muted-foreground mb-4">
                  Wireless communication solutions including WiFi, Bluetooth, LoRa, and cellular connectivity.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Wireless Protocols</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Cloud Integration</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Edge Computing</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Activity className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sensor Integration</h3>
                <p className="text-muted-foreground mb-4">
                  Integration of various sensors for environmental monitoring, motion detection, and data collection.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Environmental Sensors</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Motion & Position</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Data Fusion</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Battery className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Power Management</h3>
                <p className="text-muted-foreground mb-4">
                  Efficient power management solutions for battery-operated and energy-harvesting devices.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Low Power Design</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Energy Harvesting</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Battery Management</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Security & Encryption</h3>
                <p className="text-muted-foreground mb-4">
                  Hardware-level security implementation with encryption, secure boot, and tamper protection.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Hardware Security</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Secure Communication</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Cryptographic Keys</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Application Areas */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Application Areas</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our embedded systems power innovations across diverse industries and applications
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Consumer Electronics</h3>
                <p className="text-muted-foreground">Smart devices, wearables, and connected home appliances.</p>
              </div>

              <div className="bg-background p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Automotive</h3>
                <p className="text-muted-foreground">Vehicle control systems, infotainment, and autonomous driving.</p>
              </div>

              <div className="bg-background p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Healthcare</h3>
                <p className="text-muted-foreground">Medical devices, patient monitoring, and diagnostic equipment.</p>
              </div>

              <div className="bg-background p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Industrial</h3>
                <p className="text-muted-foreground">Process control, automation systems, and industrial IoT.</p>
              </div>

              <div className="bg-background p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Buildings</h3>
                <p className="text-muted-foreground">Building automation, energy management, and security systems.</p>
              </div>

              <div className="bg-background p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Energy</h3>
                <p className="text-muted-foreground">Smart meters, renewable energy systems, and grid management.</p>
              </div>

              <div className="bg-background p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Telecommunications</h3>
                <p className="text-muted-foreground">Network equipment, base stations, and communication devices.</p>
              </div>

              <div className="bg-background p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Security</h3>
                <p className="text-muted-foreground">Access control, surveillance systems, and security monitoring.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technologies & Platforms</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'ARM Cortex', 'ESP32/ESP8266', 'Arduino', 'Raspberry Pi', 'STM32', 'PIC', 'FPGA', 'RISC-V',
                'FreeRTOS', 'Embedded Linux', 'Zephyr', 'C/C++', 'Python', 'Rust', 'Altium Designer', 'KiCad'
              ].map((tech) => (
                <div key={tech} className="bg-card p-6 rounded-xl text-center hover:shadow-md transition-all border">
                  <h4 className="font-semibold text-lg">{tech}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Embedded Solutions?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our expertise in embedded systems ensures reliable, efficient, and scalable solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Optimized Performance</h3>
                    <p className="text-muted-foreground">Highly optimized code and hardware design for maximum efficiency and performance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Battery className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Power Efficient</h3>
                    <p className="text-muted-foreground">Ultra-low power designs that extend battery life and reduce operational costs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Robust Security</h3>
                    <p className="text-muted-foreground">Built-in security features to protect against cyber threats and ensure data integrity.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Embedded System Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Real-time Performance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Cost-effective Solutions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Reliable Operation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Scalable Architecture</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Future-proof Design</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Systematic approach from concept to production-ready embedded systems
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">1</div>
                <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                <p className="text-muted-foreground text-sm">Define system specifications and constraints.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">2</div>
                <h3 className="text-lg font-semibold mb-3">Architecture</h3>
                <p className="text-muted-foreground text-sm">Design system architecture and components.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">3</div>
                <h3 className="text-lg font-semibold mb-3">Hardware</h3>
                <p className="text-muted-foreground text-sm">Develop PCB and hardware components.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">4</div>
                <h3 className="text-lg font-semibold mb-3">Firmware</h3>
                <p className="text-muted-foreground text-sm">Implement and optimize firmware code.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">5</div>
                <h3 className="text-lg font-semibold mb-3">Testing</h3>
                <p className="text-muted-foreground text-sm">Comprehensive testing and validation.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">6</div>
                <h3 className="text-lg font-semibold mb-3">Production</h3>
                <p className="text-muted-foreground text-sm">Manufacturing support and deployment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Smart Connected Devices?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let us help you create innovative embedded systems that power the future of technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/request-quote" className="flex items-center gap-2">
                  Start Your Project <ArrowRight size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/request-quote">Discuss Requirements</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EmbeddedSystemDesign;