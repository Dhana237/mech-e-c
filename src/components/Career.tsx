import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Cog, 
  Users, 
  GraduationCap,
  MapPin,
  Clock,
  DollarSign,
  ArrowRight
} from 'lucide-react';

const Career = () => {
  const jobOpenings = [
    {
      title: 'Heavy Equipment Mechanic',
      department: 'Technical Services',
      location: 'Singapore',
      type: 'Full-time',
      experience: '3-5 years',
      icon: Wrench,
      description: 'Perform maintenance and repair on excavators, wheel loaders, and other heavy machinery.',
      requirements: [
        'Certificate in Heavy Equipment Maintenance',
        'Experience with hydraulic systems',
        'Welding and fabrication skills',
        'Ability to diagnose complex mechanical issues'
      ]
    },
    {
      title: 'Hydraulic Systems Technician',
      department: 'Specialized Repairs',
      location: 'Singapore',
      type: 'Full-time',
      experience: '2-4 years',
      icon: Cog,
      description: 'Specialize in hydraulic system repairs, pump overhauls, and cylinder rebuilds.',
      requirements: [
        'Diploma in Mechanical Engineering',
        'Hydraulic systems certification',
        'Experience with main pumps and cylinders',
        'Problem-solving and analytical skills'
      ]
    },
    {
      title: 'Field Service Engineer',
      department: 'Customer Service',
      location: 'Singapore',
      type: 'Full-time',
      experience: '4-6 years',
      icon: Users,
      description: 'Provide on-site technical support and emergency repair services to clients.',
      requirements: [
        'Engineering degree preferred',
        'Strong customer service skills',
        'Valid driving license',
        'Willingness to work flexible hours'
      ]
    },
    {
      title: 'Apprentice Technician',
      department: 'Training Program',
      location: 'Singapore',
      type: 'Apprenticeship',
      experience: 'Entry Level',
      icon: GraduationCap,
      description: 'Learn heavy machinery maintenance through our comprehensive training program.',
      requirements: [
        'ITE certificate in related field',
        'Eager to learn and develop skills',
        'Basic mechanical knowledge',
        'Good work attitude and reliability'
      ]
    }
  ];

  const benefits = [
    'Competitive salary packages',
    'Comprehensive medical coverage',
    'Skills development and training',
    'Performance bonuses',
    'Career advancement opportunities',
    'Professional certification support'
  ];

  return (
    <section id="career" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our <span className="text-accent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build your career with Singapore's leading heavy machinery service company. 
            We offer excellent opportunities for skilled professionals and apprentices.
          </p>
        </div>

        {/* Job Openings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {jobOpenings.map((job, index) => {
            const Icon = job.icon;
            return (
              <Card key={index} className="group hover:shadow-industrial transition-all duration-300 hover:scale-105 border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {job.title}
                  </CardTitle>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{job.department}</span>
                    <span>{job.experience}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {job.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="industrial" className="w-full group">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits & Culture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Benefits */}
          <Card className="border-border bg-card">
            <CardHeader>
              <div className="flex items-center mb-4">
                <DollarSign className="h-6 w-6 text-accent mr-3" />
                <CardTitle className="text-2xl font-bold text-foreground">
                  Benefits & Perks
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Why Join Us */}
          <Card className="border-border bg-card">
            <CardHeader>
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-accent mr-3" />
                <CardTitle className="text-2xl font-bold text-foreground">
                  Why Join SING MECH E&C?
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Industry Leader:</strong> Work with Singapore's most trusted heavy machinery service company.
                </p>
                <p>
                  <strong className="text-foreground">Growth Opportunities:</strong> Advance your career with comprehensive training and mentorship programs.
                </p>
                <p>
                  <strong className="text-foreground">Latest Technology:</strong> Work with cutting-edge diagnostic tools and modern equipment.
                </p>
                <p>
                  <strong className="text-foreground">Team Culture:</strong> Join a supportive team of experienced professionals dedicated to excellence.
                </p>
              </div>
              <Button variant="hero" size="lg" className="w-full mt-6">
                View All Openings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Career;