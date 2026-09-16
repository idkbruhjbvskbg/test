import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';

export default function WindTunnelTestingPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Full-width header */}
      <div
        className="relative w-full bg-center bg-cover bg-no-repeat py-24"
        style={{ backgroundImage: "url('/home.png')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-x-0 top-0 h-[14vh] bg-gradient-to-b from-black/100 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-[14vh] bg-gradient-to-t from-black/100 to-transparent"></div>
        <div className="absolute left-0 top-0 h-full w-[12vw] bg-gradient-to-r from-black/100 to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-[12vw] bg-gradient-to-l from-black/100 to-transparent"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Wind Tunnel Testing</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Formula SAE — Aerodynamics Subsystem
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">

            {/* Back link */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Projects
            </Link>

            <Card className="card-hover rounded-xl overflow-hidden border-border/60 mt-4">
              <CardHeader className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="default">FSAE Aero</Badge>
                  <Badge variant="outline">In Progress</Badge>
                </div>
                <CardTitle className="text-2xl font-bold">Wind Tunnel Testing</CardTitle>
              </CardHeader>
              <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Conducting aerodynamic validation experiments in subsonic wind tunnel facilities to measure drag, downforce, and flow characteristics of Formula SAE vehicle components. This work directly informs design iterations for competition-ready aerodynamic packages.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  More details coming soon as the project progresses.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
