import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Services from '@/components/Services';
import Expertise from '@/components/Expertise';
import SystemRepairs from '@/components/SystemRepairs';
import TechnicalGuidance from '@/components/TechnicalGuidance';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Products />
        <Services />
        <Expertise />
        <SystemRepairs />
        <TechnicalGuidance />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
