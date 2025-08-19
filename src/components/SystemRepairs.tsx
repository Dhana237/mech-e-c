import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Droplets, 
  Zap, 
  Settings, 
  Wrench,
  Shield,
  CheckCircle
} from 'lucide-react';

const SystemRepairs = () => {
  const systems = [
    {
      icon: Droplets,
      title: 'Hydraulic System',
      description: 'Complete hydraulic system diagnostics and repairs',
      services: [
        'Repairing leaks in hoses and fittings',
        'Troubleshooting pressure issues',
        'Replacing hydraulic pumps',
        'Hydraulic cylinder repairs',
        'Valve replacement and calibration',
        'System pressure testing'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Zap,
      title: 'Engine System',
      description: 'Professional engine maintenance and performance optimization',
      services: [
        'Addressing performance issues',
        'Engine oil and filter changes',
        'Fuel system repairs',
        'Cooling system maintenance',
        'Exhaust system repairs',
        'Engine diagnostics and tuning'
      ],
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Settings,
      title: 'Undercarriage System',
      description: 'Specialized undercarriage maintenance and repairs',
      services: [
        'Track tension adjustments',
        'Track link replacement',
        'Roller maintenance and replacement',
        'Fixing undercarriage leaks',
        'Sprocket and idler repairs',
        'Complete undercarriage overhaul'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Wrench,
      title: 'Electrical System',
      description: 'Advanced electrical diagnostics and repairs',
      services: [
        'Troubleshooting electrical problems',
        'Wiring harness repairs',
        'Battery and alternator replacement',
        'Sensor calibration and replacement',
        'Control module programming',
        'Electrical system upgrades'
      ],
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const otherComponents = [
    'Cab windows and mirrors repair',
    'HVAC system maintenance',
    'Seat and interior restoration',
    'Engine compartment cleaning',
    'Preventive maintenance scheduling',
    'Equipment safety inspections'
  ];

  return (
    <section id="systems" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            System-Specific <span className="text-accent">Repairs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized repair services for all major machinery systems, ensuring 
            optimal performance and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {systems.map((system, index) => {
            const Icon = system.icon;
            return (
              <Card key={index} className="group hover:shadow-industrial transition-all duration-300 hover:scale-105 border-border bg-card">
                <CardHeader className="pb-4">
                  <div className="mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <Icon className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {system.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {system.description}
                  </p>
                  <div className="space-y-3">
                    {system.services.map((service, idx) => (
                      <div key={idx} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Other Components */}
        <div className="bg-background rounded-lg p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-accent mr-4" />
            <h3 className="text-2xl font-bold text-foreground">
              Other Component Services
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherComponents.map((component, index) => (
              <div key={index} className="flex items-center text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="font-medium">{component}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemRepairs;
