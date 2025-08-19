import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  RefreshCw, 
  Shield, 
  Wrench,
  Zap,
  Users,
  CheckCircle
} from 'lucide-react';

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: BookOpen,
      title: 'Consultancy Services',
      description: 'Expert guidance on periodic servicing and maintenance schedules to optimize equipment performance.',
      highlights: ['Maintenance planning', 'Cost optimization', 'Performance analysis', 'Lifecycle management']
    },
    {
      icon: RefreshCw,
      title: 'Complete Overhauls',
      description: 'Comprehensive overhaul services for all major machinery components.',
      highlights: ['Cylinders', 'Swing motors', 'Travel motors', 'Engine systems', 'Main pumps', 'Undercarriage']
    },
    {
      icon: Shield,
      title: 'Replacement Services',
      description: 'Professional replacement of critical components and systems.',
      highlights: ['Undercarriage replacement', 'Air conditioning systems', 'Component upgrades', 'System modernization']
    },
    {
      icon: Wrench,
      title: 'Body Work & Reconditioning',
      description: 'Complete body work reconditioning and structural repairs.',
      highlights: ['Frame repairs', 'Cab restoration', 'Structural welding', 'Paint and finishing']
    },
    {
      icon: Zap,
      title: 'Electrical & Control Systems',
      description: 'Advanced electrical and control panel services.',
      highlights: ['Electrical re-wiring', 'Control panel replacement', 'System diagnostics', 'Computer integration']
    },
    {
      icon: Users,
      title: 'Specialized Welding',
      description: 'Professional welding services for structural repairs and reinforcement.',
      highlights: ['Bucket repairs', 'Undercarriage welding', 'Full cabin guard', 'Reinforcement work']
    }
  ];

  const additionalServices = [
    'Hydraulic system/piping fitting',
    'Computer control panel replacement',
    'Line boring and pins & bushing services',
    'Custom hose assembly',
    'Engine overhaul services'
  ];

  return (
    <section id="expertise" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Additional <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized services and technical expertise to handle the most complex 
            machinery challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card key={index} className="group hover:shadow-industrial transition-all duration-300 hover:scale-105 border-border">
                <CardHeader className="pb-4">
                  <div className="mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {area.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {area.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-accent mr-2 flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Additional Technical Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;