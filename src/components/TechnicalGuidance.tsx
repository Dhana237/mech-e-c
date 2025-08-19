import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  Wrench, 
  FileText, 
  Shield,
  CheckCircle,
  Cog
} from 'lucide-react';

const TechnicalGuidance = () => {
  const guidanceAreas = [
    {
      icon: Search,
      title: 'Troubleshooting',
      description: 'Advanced diagnostic tools and systematic procedures for identifying equipment issues',
      items: [
        'Computer diagnostic systems',
        'Error code interpretation',
        'Performance analysis tools',
        'Systematic fault finding',
        'Root cause analysis',
        'Diagnostic reporting'
      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Equipment',
      description: 'Professional-grade tools and equipment for all maintenance and repair operations',
      items: [
        'Precision wrenches and socket sets',
        'Hydraulic pressure gauges',
        'Bearing pullers and installers',
        'Specialized hammers and pry bars',
        'Torque measurement tools',
        'Electrical testing equipment'
      ]
    },
    {
      icon: FileText,
      title: 'Repair Procedures',
      description: 'Step-by-step procedures for component replacement and system maintenance',
      items: [
        'Component replacement guides',
        'System flushing procedures',
        'Fluid level checks and adjustments',
        'Calibration procedures',
        'Safety protocols',
        'Quality control checklists'
      ]
    },
    {
      icon: Cog,
      title: 'Parts & Components',
      description: 'Comprehensive knowledge of OEM and aftermarket parts for optimal performance',
      items: [
        'OEM parts specifications',
        'Aftermarket alternatives',
        'Parts compatibility matrix',
        'Quality standards compliance',
        'Inventory management',
        'Supplier network access'
      ]
    }
  ];

  const preventiveMaintenance = [
    {
      category: 'Daily Checks',
      items: ['Engine oil level', 'Hydraulic fluid level', 'Coolant level', 'Visual inspection']
    },
    {
      category: 'Weekly Maintenance',
      items: ['Lubrication points', 'Air filter inspection', 'Battery check', 'Safety systems']
    },
    {
      category: 'Monthly Service',
      items: ['Filter replacements', 'Hydraulic system check', 'Undercarriage inspection', 'Performance testing']
    },
    {
      category: 'Annual Overhaul',
      items: ['Complete system analysis', 'Major component service', 'Compliance certification', 'Upgrade recommendations']
    }
  ];

  return (
    <section id="technical" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical <span className="text-accent">Guidance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional technical support and guidance to ensure optimal equipment 
            performance and longevity
          </p>
        </div>

        {/* Technical Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {guidanceAreas.map((area, index) => {
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
                  <p className="text-muted-foreground mb-6">
                    {area.description}
                  </p>
                  <div className="space-y-2">
                    {area.items.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Preventive Maintenance */}
        <div className="bg-muted/30 rounded-lg p-8">
          <div className="flex items-center mb-8 justify-center">
            <Shield className="h-8 w-8 text-accent mr-4" />
            <h3 className="text-3xl font-bold text-foreground">
              Preventative Maintenance Schedule
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preventiveMaintenance.map((schedule, index) => (
              <Card key={index} className="border-border bg-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-center text-accent">
                    {schedule.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {schedule.items.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalGuidance;