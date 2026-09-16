// Experience & Skills Section with FULL-WIDTH HEADER BACKGROUND
// FINAL VERSION: Certifications centered with UNIFIED, SYMMETRICAL BADGES

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award, Layers } from 'lucide-react';

const workExperience = [
  {
    title: 'Fountain/Cashier',
    company: "Friendly's",
    period: 'March 2023 – Present',
    location: 'Avon, CT',
    type: 'Part-time',
    description:
      'Collaborated with team members to manage customer flow and ensure timely order fulfillment in a restaurant environment.',
    achievements: [
      'Developed strong time management skills through coordinating multiple orders simultaneously',
      'Enhanced communication and teamwork abilities by working effectively with co-workers',
      'Demonstrated customer service experience by maintaining positive guest interactions',
    ],
    skills: ['Time Management', 'Team Communication', 'Customer Service', 'Problem Solving'],
  },
];

const extracurricularActivities = [
  {
    title: 'FSAE Aerodynamics & Composites',
    organization: 'UConn Formula SAE',
    period: 'September 2025 – Present',
    location: 'Storrs Mansfield, CT',
    type: 'Technical Team',
    description:
      'Active in the UConn Formula SAE team working on aerodynamics and composites of the FSAE car, contributing to the design and performance optimization',
    responsibilities: [
      'Contributing to aerodynamic component design and analysis using CAD and CFD tools',
      'Assisting with composite material fabrication and testing for vehicle structures',
      'Collaborating with cross-functional subsystem teams on vehicle integration',
      'Participating in wind tunnel testing and data-driven design iterations',
    ],
    achievements: [
      'Gained hands-on experience with computational fluid dynamics (CFD) workflows',
      'Applied computer-aided design (CAD) skills to real-world engineering challenges',
      'Developed understanding of mechanical integrity and equipment design principles',
      'Strengthened engineering teamwork and electro-mechanical product development skills',
    ],
    skills: ['SolidWorks/CAD', 'Ansys/CFD', 'Mechanical Product Design'],
  },
  {
    title: 'American Society of Mechanical Engineers (ASME)',
    organization: 'Central Connecticut State University',
    period: 'August 2024 - May 2025',
    type: 'Professional Organization',
    description:
      'Was an active member participating in engineering workshops, technical projects, and professional development activities.',
    responsibilities: [
      'Attended regular chapter meetings and engineering workshops',
      'Participated in team-based technical projects and competitions',
      'Engaged in networking events with industry professionals',
      'Contributed to community outreach and STEM promotion activities',
    ],
    achievements: [
      'Expanded professional network within the engineering community',
      'Gained exposure to various engineering disciplines and career paths',
      'Developed teamwork skills through collaborative projects',
      'Enhanced understanding of professional engineering practices',
    ],
  },
];

const honorsAndCertifications = [
  {
    title: 'Excellence In Engineering',
    organization: 'Avon High School',
    period: '2024',
    type: 'Academic Honor',
    description:
      'Recognized for outstanding achievement and dedication to engineering studies during high school.',
  },
];

export default function ExperienceAndSkillsSection() {
  return (
    <section>

      {/* ============================================ */}
      {/* FULL-WIDTH HEADER (MATCHES EDUCATION PAGE)    */}
      {/* ============================================ */}
      <div
        className="relative w-full bg-center bg-cover bg-no-repeat py-24"
        style={{ backgroundImage: "url('/home.png')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-[14vh] bg-gradient-to-b from-black/100 to-transparent"></div>

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[14vh] bg-gradient-to-t from-black/100 to-transparent"></div>

        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-[12vw] bg-gradient-to-r from-black/100 to-transparent"></div>

        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-[12vw] bg-gradient-to-l from-black/100 to-transparent"></div>

        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience & Skills</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional experience, extracurricular activities, and certifications
          </p>
        </div>
      </div>

      <section className="section-padding">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">

          {/* Extracurricular Activities */}
          <div className="mb-12 mt-12">
            <h3 className="text-3xl font-semibold mb-6">Extracurricular Activities</h3>
            <div className="space-y-12">
              {extracurricularActivities.map((activity, index) => (
                <Card key={index} className="card-hover rounded-xl overflow-hidden border-border/60">
                  <CardHeader className="p-6 sm:p-8">
                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4">
                      <div className="space-y-3">
                        <div>
                          <CardTitle className="text-2xl font-bold">{activity.title}</CardTitle>
                          <CardDescription className="text-lg mt-1 text-foreground/80 font-medium">
                            {activity.organization}
                          </CardDescription>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1 rounded-md">
                            <Calendar className="w-4 h-4" />
                            <span>{activity.period}</span>
                          </div>
                          {'location' in activity && activity.location && (
                            <div className="flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1 rounded-md">
                              <MapPin className="w-4 h-4" />
                              <span>{(activity as any).location}</span>
                            </div>
                          )}
                          <Badge variant="outline" className="flex items-center gap-1.5 font-normal">
                            <Layers className="w-3.5 h-3.5" />
                            {activity.type}
                          </Badge>
                        </div>
                      </div>

                      {'skills' in activity && (activity as any).skills && (
                        <div className="flex flex-wrap gap-2 xl:justify-end xl:max-w-xs">
                          {(activity as any).skills.map((skill: string, skillIndex: number) => (
                            <Badge key={skillIndex} variant="secondary" className="hover:bg-primary/20 transition-colors">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {activity.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-3">Responsibilities:</h4>
                        <ul className="space-y-2">
                          {activity.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex} className="text-muted-foreground flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Achievements:</h4>
                        <ul className="space-y-2">
                          {activity.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-muted-foreground flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-6">Work Experience</h3>
            <div className="space-y-12">
              {workExperience.map((exp, index) => (
                <Card key={index} className="card-hover rounded-xl overflow-hidden border-border/60">
                  <CardHeader className="p-6 sm:p-8">
                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4">
                      <div className="space-y-3">
                        <div>
                          <CardTitle className="text-2xl font-bold">{exp.title}</CardTitle>
                          <CardDescription className="text-lg mt-1 text-foreground/80 font-medium">
                            {exp.company}
                          </CardDescription>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1 rounded-md">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1 rounded-md">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <Badge variant="outline" className="flex items-center gap-1.5 font-normal">
                            <Layers className="w-3.5 h-3.5" />
                            {exp.type}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 xl:justify-end xl:max-w-xs">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="hover:bg-primary/20 transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Key Responsibilities & Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Honors & Awards */}
          <div className="mt-12">
            <h3 className="text-3xl font-semibold mb-6">Honors & Awards</h3>
            <div className="space-y-12">
              {honorsAndCertifications.map((honor, index) => (
                <Card key={index} className="card-hover rounded-xl overflow-hidden border-border/60 relative">
                  {/* Decorative top gradient bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>

                  <CardHeader className="p-6 sm:p-8 pt-8 sm:pt-10">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                      {/* Award icon */}
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Award className="w-8 h-8 text-primary" />
                      </div>

                      <div className="flex-1 space-y-3">
                        <div>
                          <Badge 
                            variant="secondary" 
                            className="mb-2 px-4 py-1.5 text-xs uppercase tracking-widest font-semibold bg-primary/10 text-primary hover:bg-primary/15 border-0"
                          >
                            {honor.type}
                          </Badge>
                          <CardTitle className="text-2xl font-bold">{honor.title}</CardTitle>
                          <CardDescription className="text-lg mt-1 text-foreground/80 font-medium">
                            {honor.organization}
                          </CardDescription>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1 rounded-md">
                            <Calendar className="w-4 h-4" />
                            <span>{honor.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <p className="text-muted-foreground leading-relaxed">
                      {honor.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
      </section>
    </section>
  );
}
