import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+65 6123 4567",
      subtitle: "24/7 Emergency Service",
    },
    {
      icon: Mail,
      title: "Email",
      details: "singmech@ec.sg",
      subtitle: "Quick Response Guaranteed",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Singapore Industrial Area",
      subtitle: "Strategic Location for Fast Service",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: "Mon - Sat: 8AM - 6PM",
      subtitle: "Emergency Service Available",
    },
  ];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setStatus("Email sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send email");
      }
    } catch (err) {
      setStatus("Error sending email");
    }
  };
  


  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to service your heavy machinery? Contact us today for
            professional maintenance and repair solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <MessageCircle className="h-6 w-6 text-accent mr-3" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {info.title}
                        </h4>
                        <p className="text-foreground font-medium">
                          {info.details}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Quote CTA */}
            <Card className="border-accent bg-gradient-accent text-accent-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Need a Quick Quote?</h3>
                <p className="mb-4 opacity-90">
                  Call us now for immediate assistance and competitive pricing
                </p>
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-accent"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Request a Quote
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Full Name *
                      </label>
                      <Input placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Company Name
                      </label>
                      <Input placeholder="Enter your company name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number *
                      </label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Service Required
                    </label>
                    <select className="w-full p-3 border border-input rounded-md bg-background text-foreground">
                      <option value="">Select a service</option>
                      <option value="maintenance">Regular Maintenance</option>
                      <option value="repair">Equipment Repair</option>
                      <option value="overhaul">Complete Overhaul</option>
                      <option value="consultation">
                        Technical Consultation
                      </option>
                      <option value="emergency">Emergency Service</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Equipment Details
                    </label>
                    <Input placeholder="e.g., Excavator Model XYZ-123, 2019" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please describe your requirements in detail..."
                      rows={4}
                    />
                  </div>

                  <Button variant="hero" size="lg" className="w-full text-lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
