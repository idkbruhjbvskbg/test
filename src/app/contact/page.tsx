'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, ExternalLink, Linkedin, Calendar, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Get In Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Let's connect and discuss opportunities in mechanical and aerospace engineering
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Contact Information */}
              <div className="flex">
                <Card className="card-hover w-full flex flex-col">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>
                      Get in touch through these channels
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="space-y-5 flex-1">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Location</h4>
                          <p className="text-muted-foreground">CT, US</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Linkedin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">LinkedIn</h4>
                          <Link 
                            href="https://linkedin.com/in/vivyn" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline flex items-center gap-1"
                          >
                            linkedin.com/in/vivyn
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Send a Message */}
              <div className="flex">
                <Card className="w-full flex flex-col">
                  <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <CardDescription>
                      Feel free to reach out for collaborations or opportunities
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="space-y-5 flex-1">
                      <div>
                        <p className="text-muted-foreground leading-relaxed">
                          I'm always interested in hearing about new opportunities and collaborations in 
                          mechanical and aerospace engineering, especially in wind tunnel testing and 
                          hands-on design projects.
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold">Response Time</h4>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>Typically within 6-70 hours</span>
                        </div>
                      </div>

                      <div className="mt-auto pt-2">
                        <Button 
                          className="w-full" 
                          onClick={() => {
                            if (typeof window !== 'undefined') {
                              window.open('https://docs.google.com/forms/d/e/1FAIpQLSc4I6DvQKbmEkDVJTiYuKIrGCwv1DTCFRCj9ne2qJRy2dWuPw/viewform?usp=dialog', '_blank');
                            }
                          }}
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Contact Me
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Current Status</CardTitle>
                <CardDescription>
                  My current academic and professional standing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Academic Status</h4>
                    <div className="space-y-2.5">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">Junior Year in College</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">Mechanical Engineering Major</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">Expected Graduation: May 2028</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Availability</h4>
                    <div className="space-y-2.5">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Actively searching for internships and co-op opportunities</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Flexible scheduling</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Available for any remote or local opportunities</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
