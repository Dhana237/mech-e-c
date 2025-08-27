import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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
  ArrowRight,
  Mail,
  Phone,
  FileText
} from 'lucide-react';

const Career = () => {
  const jobOpenings = [
    {
      title: 'Heavy Equipment Mechanic',
      department: 'Technical Services',
      location: 'Singapore',
      type: 'Full-time',
      experience: '3-5 years',
      salary: 'S$3,500 - S$5,000',
      icon: Wrench,
      description: 'Perform maintenance and repair on excavators, wheel loaders, and other heavy machinery. Lead diagnostic procedures and ensure equipment meets safety standards.',
      requirements: [
        'Certificate in Heavy Equipment Maintenance',
        'Experience with hydraulic systems',
        'Welding and fabrication skills',
        'Ability to diagnose complex mechanical issues',
        'Valid Class 3 driving license preferred'
      ],
      responsibilities: [
        'Conduct routine maintenance and repairs',
        'Diagnose equipment malfunctions',
        'Maintain detailed service records',
        'Ensure compliance with safety protocols'
      ]
    },
    {
      title: 'Hydraulic Systems Technician',
      department: 'Specialized Repairs',
      location: 'Singapore',
      type: 'Full-time',
      experience: '2-4 years',
      salary: 'S$3,200 - S$4,500',
      icon: Cog,
      description: 'Specialize in hydraulic system repairs, pump overhauls, and cylinder rebuilds. Work with cutting-edge diagnostic equipment.',
      requirements: [
        'Diploma in Mechanical Engineering',
        'Hydraulic systems certification',
        'Experience with main pumps and cylinders',
        'Problem-solving and analytical skills',
        'Ability to read technical drawings'
      ],
      responsibilities: [
        'Repair and rebuild hydraulic components',
        'Perform pressure testing and calibration',
        'Troubleshoot hydraulic system issues',
        'Maintain workshop equipment and tools'
      ]
    },
    {
      title: 'Field Service Engineer',
      department: 'Customer Service',
      location: 'Singapore',
      type: 'Full-time',
      experience: '4-6 years',
      salary: 'S$4,000 - S$6,000',
      icon: Users,
      description: 'Provide on-site technical support and emergency repair services to clients. Represent the company with professionalism and expertise.',
      requirements: [
        'Engineering degree preferred',
        'Strong customer service skills',
        'Valid driving license',
        'Willingness to work flexible hours',
        'Excellent communication skills'
      ],
      responsibilities: [
        'Provide on-site equipment servicing',
        'Handle emergency repair callouts',
        'Conduct client consultations',
        'Prepare detailed service reports'
      ]
    },
    {
      title: 'Apprentice Technician',
      department: 'Training Program',
      location: 'Singapore',
      type: 'Apprenticeship',
      experience: 'Entry Level',
      salary: 'S$2,000 - S$2,800',
      icon: GraduationCap,
      description: 'Learn heavy machinery maintenance through our comprehensive training program. Work alongside experienced technicians.',
      requirements: [
        'ITE certificate in related field',
        'Eager to learn and develop skills',
        'Basic mechanical knowledge',
        'Good work attitude and reliability',
        'Physical fitness for workshop duties'
      ],
      responsibilities: [
        'Assist senior technicians with repairs',
        'Learn diagnostic procedures',
        'Maintain workshop cleanliness',
        'Complete training modules and assessments'
      ]
    }
  ];

  const benefits = [
    'Competitive salary packages',
    'Comprehensive medical coverage',
    'Skills development and training',
    'Performance bonuses',
    'Career advancement opportunities',
    'Professional certification support',
    'Annual leave and sick benefits',
    'Company transport provided'
  ];

  const companyValues = [
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do.'
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and continuous improvement.'
    },
    {
      title: 'Teamwork',
      description: 'We believe in collaboration and supporting each other.'
    },
    {
      title: 'Integrity',
      description: 'We conduct business with honesty and transparency.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Build Your <span className="text-accent">Career</span> With Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Join Singapore's leading heavy machinery service company and grow your career 
              in a dynamic, supportive environment with excellent opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <FileText className="mr-2 h-5 w-5" />
                View Open Positions
              </Button>
              <Button variant="secondary" size="lg">
                <Mail className="mr-2 h-5 w-5" />
                Submit Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Current <span className="text-accent">Openings</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore exciting career opportunities across various departments and experience levels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                        <div className="flex items-center text-sm text-muted-foreground mb-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center text-sm text-accent font-semibold">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.salary}
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
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-2">Main Responsibilities:</h4>
                      <ul className="space-y-1">
                        {job.responsibilities.slice(0, 3).map((resp, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="industrial" className="w-full group">
                      Apply for this Position
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits & Culture */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Company Values */}
            <Card className="border-border bg-card">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-accent mr-3" />
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Our Values
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {companyValues.map((value, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-foreground text-sm mb-1">{value.title}</h4>
                      <p className="text-xs text-muted-foreground">{value.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Why Join Us */}
            <Card className="border-border bg-card">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-accent mr-3" />
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Why Choose Us?
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-sm">
                    <strong className="text-foreground">Industry Leader:</strong> Work with Singapore's most trusted heavy machinery service company.
                  </p>
                  <p className="text-sm">
                    <strong className="text-foreground">Growth Opportunities:</strong> Clear career progression paths with training support.
                  </p>
                  <p className="text-sm">
                    <strong className="text-foreground">Modern Technology:</strong> Work with the latest diagnostic tools and equipment.
                  </p>
                  <p className="text-sm">
                    <strong className="text-foreground">Supportive Team:</strong> Join experienced professionals in a collaborative environment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Careers */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your <span className="text-accent">Career Journey?</span>
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Don't see the perfect role? We're always looking for talented individuals to join our team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center justify-center">
              <Mail className="h-5 w-5 mr-3 text-accent" />
              <div>
                <div className="font-semibold">Email Us</div>
                <div className="text-primary-foreground/80">careers@singmech.com.sg</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 mr-3 text-accent" />
              <div>
                <div className="font-semibold">Call Us</div>
                <div className="text-primary-foreground/80">+65 6123 4567</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Submit Your Resume
            </Button>
            <Button variant="secondary" size="lg">
              Schedule Interview
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;