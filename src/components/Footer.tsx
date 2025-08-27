import React from 'react';
import { Wrench, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Oil Change & Servicing',
    'Hydraulic System Repair',
    'Engine Overhaul',
    'Component Rebuild',
    'Technical Consultation',
    'Emergency Repair'
  ];

  const products = [
    'Excavators',
    'Wheel Loaders',
    'Road Rollers',
    'Generators',
    'Forklifts',
    'Compactors'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Wrench className="h-8 w-8 text-accent" />
              <div className="font-bold text-xl">SING MECH E&C</div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Professional heavy machinery servicing, maintenance, and repair solutions. 
              Your trusted partner for all construction equipment needs in Singapore.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+65 6123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">info@singmech.com.sg</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">Singapore Industrial Area</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80 text-sm block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Equipment</h3>
            <ul className="space-y-3 mb-6">
              {products.map((product, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80 text-sm block">
                    {product}
                  </span>
                </li>
              ))}
            </ul>
            <Button variant="hero" size="sm" className="w-full">
              Request Quote
            </Button>
          </div>
        </div>

        {/* Emergency Service Banner */}
        <div className="border-t border-primary-light py-8">
          <div className="bg-accent/10 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-accent mb-2">24/7 Emergency Service</h3>
            <p className="text-primary-foreground/80 mb-4">
              Equipment breakdown? We're here to help anytime, anywhere in Singapore.
            </p>
            <Button variant="hero" size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Call Emergency Line
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-light py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 SING MECH E&C PTE LTD. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
                Safety Standards
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;