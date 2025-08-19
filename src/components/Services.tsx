import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Search, 
  RefreshCw, 
  Settings,
  Cog,
  Zap,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Oil Change / Servicing',
      description: 'Regular maintenance to keep your machinery running at peak performance',
      features: ['Engine oil replacement', 'Filter changes', 'Fluid top-ups', 'Performance checks']
    },
    {
      icon: Search,
      title: 'Diagnose & Troubleshooting',
      description: 'Advanced diagnostic tools to identify and resolve equipment faults',
      features: ['Computer diagnostics', 'System analysis', 'Error code reading', 'Performance testing']
    },
    {
      icon: RefreshCw,
      title: 'Components Rebuild',
      description: 'Complete restoration of critical machinery components',
      features: ['Engine rebuilds', 'Transmission overhaul', 'Component refurbishment', 'Quality testing']
    },
    {
      icon: Settings,
      title: 'Hydraulic Systems',
      description: 'Specialized hydraulic cylinder and pump services',
      features: ['Cylinder repairs', 'Main pump service', 'Hydraulic line maintenance', 'Pressure testing']
    },
    {
      icon: Cog,
      title: 'Motor & Drive Services',
      description: 'Travel and swing motor maintenance and replacement',
      features: ['Motor diagnostics', 'Drive system repair', 'Component replacement', 'Performance optimization']
    },
    {
      icon: Zap,
      title: 'Custom Solutions',
      description: 'Tailored engineering solutions for unique requirements',
      features: ['Custom hose assembly', 'Line boring services', 'Welding work', 'System modifications']
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive maintenance and repair services to maximize your equipment's 
            lifespan and performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-industrial transition-all duration-300 hover:scale-105 border-border bg-card">
                <CardHeader className="pb-4">
                  <div className="mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <Icon className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full group-hover:border-accent hover:text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;