import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Rocket, Code2, Wrench } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Vivyn Bhavani Raaman – Mechanical & Aerospace Engineer</title>
        <meta
          name="description"
          content="Official website of Vivyn Bhavani Raaman, Mechanical & Aerospace Engineer. Portfolio showcasing projects, skills in SolidWorks, Python, and hands-on prototyping."
        />
        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Vivyn Bhavani Raaman – Mechanical & Aerospace Engineer" />
        <meta property="og:description" content="Official website of Vivyn Bhavani Raaman, Mechanical & Aerospace Engineer. Portfolio showcasing projects, skills in SolidWorks, Python, and hands-on prototyping." />
        <meta property="og:url" content="https://www.vivyn.me" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.vivyn.me/home.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vivyn Bhavani Raaman",
              "url": "https://www.vivyn.me",
              "jobTitle": "Mechanical & Aerospace Engineer",
              "sameAs": [
                "https://www.linkedin.com/in/vivyn", // replace with your LinkedIn
                "https://github.com/vivyn"           // replace with your GitHub
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section
          className="relative flex items-center justify-center min-h-screen section-padding bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/home.png')",
            backgroundAttachment: "scroll",
          }}
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/95"></div>
            <div className="absolute inset-x-0 top-0 h-[15vh] sm:h-[20vh] bg-gradient-to-b from-black/100 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-[15vh] sm:h-[20vh] bg-gradient-to-t from-black/100 to-transparent"></div>
          </div>

          <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gradient">Vivyn Bhavani Raaman</span>
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8">
                Mechanical & Aerospace Engineering
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Focused on mechanical and aerospace engineering with experience in wind tunnel testing and technical project collaboration. Skilled in SolidWorks, Python, and collaborative teamwork.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/projects">View Projects</Link>
                </Button>
              </div>

              <div className="mt-16 flex justify-center">
                <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-max">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-gradient">About Me</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
              </div>

              <Card className="card-hover border-2 border-primary/10 bg-gradient-to-br from-background via-background to-muted/10">
                <CardContent className="p-8 md:p-10">
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary rounded-full"></div>
                    <div className="pl-6">
                      <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                        I decided to go into engineering because of a high school teacher named Mr. Buys. While others simply said "follow your dreams," he was realistic about life outside the classroom, connecting lessons to the real world and emphasizing how our career choices affect our lifestyle. That grounded perspective gave me direction, but my curiosity started long before that. As a kid, I spent hours disassembling <span className="font-semibold text-foreground">RC cars</span> just to see how they worked, and later built <span className="font-semibold text-foreground">solid rocket motors</span> and <span className="font-semibold text-foreground">foam model planes</span> over the pandemic—projects I was too busy learning from to document. That combination of realistic mentorship and innate hands-on curiosity solidified my path. Since finishing Mr. Buys' class, I've known exactly where I wanted to go: the <span className="font-semibold text-foreground">Mechanical and Aerospace Engineering industry</span>, where I can apply that practical approach to solving real-world challenges.
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-border/50">
                    <div className="flex flex-wrap gap-3 justify-center">
                      <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                        <Wrench className="w-3 h-3 mr-1.5" />
                        Mechanical Engineering
                      </Badge>
                      <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                        <Rocket className="w-3 h-3 mr-1.5" />
                        Aerospace & Propulsion
                      </Badge>
                      <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                        Hands-on Prototyping
                      </Badge>
                      <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                        <Code2 className="w-3 h-3 mr-1.5" />
                        CAD & Simulation
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
