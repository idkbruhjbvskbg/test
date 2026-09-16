// Education Section with FULL-WIDTH HEADER BACKGROUND
// UPDATED: Matching Projects & Experience page structure and card styling

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useMemo } from 'react';
import { School, Calendar, TrendingUp, Rocket, Target, Layers } from 'lucide-react';

export default function EducationSection() {
  // Dates for progress bar calculation
  const startDate = new Date('2024-08-26');
  const gradDate = new Date('2028-05-10');
  const today = new Date();

  const progress = useMemo(() => {
    const total = gradDate.getTime() - startDate.getTime();
    const completed = Math.max(0, today.getTime() - startDate.getTime());
    return Math.min(100, (completed / total) * 100);
  }, [today, startDate, gradDate]);

  const education = [
    {
      degree: 'Mechanical Engineering (B.S.), Aerospace Concentration',
      institution: 'Central Connecticut State University → University of Connecticut',
      period: 'August 2024 - Expected graduation: May 2028',
      status: 'Current',
      description:
        'B.S. Mechanical Engineering major. Transferred from Central Connecticut State University (CCSU) after completing freshman year, and currently continuing studies at University of Connecticut (UCONN).',
    }
  ];

  return (
    <section>

      {/* ===================================================== */}
      {/* FULL-WIDTH HEADER WITH BACKGROUND + OVERLAY + FADES   */}
      {/* ===================================================== */}
      <div
        className="relative w-full bg-center bg-cover bg-no-repeat py-24"
        style={{ backgroundImage: "url('/home.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-[14vh] bg-gradient-to-b from-black/100 to-transparent"></div>

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[14vh] bg-gradient-to-t from-black/100 to-transparent"></div>

        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-[12vw] bg-gradient-to-r from-black/100 to-transparent"></div>

        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-[12vw] bg-gradient-to-l from-black/100 to-transparent"></div>

        {/* Text content */}
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey: Bachelor of Science in Mechanical Engineering
          </p>
        </div>
      </div>

      {/* ===================================================== */}
      {/* MAIN CONTENT (inside section-padding, matching pages) */}
      {/* ===================================================== */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">

            {/* Current Education Card */}
            <div className="space-y-12 mt-12">
              {education.map((edu, index) => (
                <Card key={index} className="card-hover rounded-xl overflow-hidden border-border/60">
                  <CardHeader className="p-6 sm:p-8">
                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <School className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl font-bold">{edu.degree}</CardTitle>
                            <CardDescription className="text-lg mt-1 text-foreground/80 font-medium">
                              {edu.institution}
                            </CardDescription>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <Badge
                            variant={edu.status.includes('Current') ? 'default' : 'secondary'}
                            className="text-sm px-3 py-1"
                          >
                            {edu.status}
                          </Badge>
                          <div className="flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1 rounded-md">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                          <Badge variant="outline" className="flex items-center gap-1.5 font-normal">
                            <Layers className="w-3.5 h-3.5" />
                            Undergraduate
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {edu.description}
                    </p>

                    {/* Visual Progress Bar */}
                    <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-medium flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          Degree Progress
                        </p>
                        <span className="text-sm font-bold text-primary">{progress.toFixed(1)}%</span>
                      </div>
                      
                      <div className="relative w-full h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000 ease-out"
                          style={{ width: `${progress}%` }}
                        />
                      </div>

                      <div className="flex justify-between text-xs text-muted-foreground mt-2 font-medium">
                        <span>Start: Aug 2024</span>
                        <span>Target: May 2028</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Future Goal Card */}
            <div className="mt-12">
              <Card className="card-hover rounded-xl overflow-hidden border-primary/20 bg-gradient-to-b from-background to-primary/5">
                <CardHeader className="p-6 sm:p-8 pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <Rocket className="w-6 h-6 text-primary animate-pulse-slow" />
                    <CardTitle className="text-xl">Future Ambitions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                    My academic goal is to continue specializing in aerodynamics and propulsion by pursuing advanced degrees.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline" className="text-sm py-1.5 px-4 border-primary/30 text-primary flex items-center gap-2">
                      <Target className="w-3.5 h-3.5" />
                      M.S. in Aerospace Engineering
                    </Badge>
                    <Badge variant="outline" className="text-sm py-1.5 px-4 border-dashed border-muted-foreground/40 text-muted-foreground">
                      Ph.D. (Potential)
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </section>
  );
}
