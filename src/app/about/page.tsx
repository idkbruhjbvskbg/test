import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">About Me</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A passionate engineering student dedicated to innovation and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Professional Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold mb-6">Professional Overview</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Mechanical/Aerospace Engineering student with hands-on experience in wind tunnel testing 
                  and technical project collaboration. I am skilled in SolidWorks, Python, and collaborative teams.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Dedicated to innovative design and testing in dynamic, fast-paced environments and 
                  advancing real-world engineering challenges through practical application.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge variant="secondary">Mechanical Engineering</Badge>
                  <Badge variant="secondary">Aerospace Engineering</Badge>
                  <Badge variant="secondary">Wind Tunnel Testing</Badge>
                  <Badge variant="secondary">CAD Design</Badge>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Key Strengths</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Technical Collaboration</p>
                        <p className="text-sm text-muted-foreground">Effective team communication and project coordination</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Hands-on Experience</p>
                        <p className="text-sm text-muted-foreground">Practical application of engineering principles</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Problem Solving</p>
                        <p className="text-sm text-muted-foreground">Analytical approach to engineering challenges</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Adaptability</p>
                        <p className="text-sm text-muted-foreground">Quick learning and flexibility in dynamic environments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle className="text-lg">Education Journey</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Central Connecticut State University</p>
                        <p className="text-sm text-muted-foreground">Freshman Year Completed</p>
                        <p className="text-sm text-muted-foreground">Mechanical Engineering (B.S.), Aerospace Concentration</p>
                      </div>
                      <div>
                        <p className="font-medium">University of Connecticut</p>
                        <p className="text-sm text-muted-foreground">Current (Sophomore Year)</p>
                        <p className="text-sm text-muted-foreground">Mechanical Engineering</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle className="text-lg">Current Focus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Actively involved in Formula SAE aerodynamics subsystem, focusing on wind tunnel testing and computational fluid dynamics analysis of racecar prototypes.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Aerodynamics</Badge>
                      <Badge variant="outline">CFD Analysis</Badge>
                      <Badge variant="outline">Wind Tunnel Testing</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests & Goals */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Interests & Goals</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Academic Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Aerodynamic design and optimization</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Computational fluid dynamics</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Wind tunnel testing methodologies</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Advanced CAD modeling and simulation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Career Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Aerospace engineering research and development</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Automotive aerodynamics and performance optimization</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Advanced manufacturing and prototyping</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Sustainable engineering solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}