'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import {
  Calendar,
  ChevronRight,
  ImageIcon,
  X,
  FileText,
  ExternalLink,
  ChevronLeft,
  ChevronRight as ArrowRight,
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface SubProject {
  name: string;
  href: string;
  description: string;
}

interface ProjectItem {
  title: string;
  organization: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  thumbnail?: string;
  videos?: string[];
  images?: string[];
  pdf?: string;
  subProjects?: SubProject[];
}

export default function ProjectsPage() {
  const projects: ProjectItem[] = [
    {
      title: 'Formula SAE - Aerodynamics Subsystem',
      organization: 'University of Connecticut',
      period: 'Current',
      type: 'Technical Team',
      description:
        'Current member of the Aerodynamics Subsystem, collaborating on the design and testing of racecar prototypes.',
      responsibilities: [],
      achievements: [
        'Wind tunnel equipment experience',
        'CFD analysis understanding',
        'Engineering teamwork',
        'Vehicle development contribution'
      ],
      technologies: ['CFD Analysis', 'Wind Tunnel Testing', 'CAD Design', 'Team Collaboration'],
      thumbnail: '/fsae_bg.png',
      images: ['/fsae-1.jpg', '/fsae-2.jpg', '/fsae-3.jpg', '/fsae-4.jpg', '/fsae-5.jpg'],
      subProjects: [
        {
          name: 'Wind Tunnel Testing',
          href: '/projects/fsae/wind-tunnel-testing',
          description: 'Aerodynamic validation and data acquisition in subsonic wind tunnel facilities',
        },
        {
          name: 'Inverted Wing',
          href: '/projects/fsae/inverted-wing',
          description: 'Design and analysis of inverted wing elements for maximum downforce generation',
        },
        {
          name: 'Sidepods',
          href: '/projects/fsae/sidepods',
          description: 'Aerodynamic sidepod design for cooling optimization and drag reduction',
        },
      ],
    },
    {
      title: 'VAWT Project Fellow',
      organization: 'Central Connecticut State University',
      period: 'Feb 2025 – Aug 2025',
      type: 'Technical Project',
      description:
        'Selected as a fellow for the Vertical Axis Wind Turbine (VAWT) senior project...',
      responsibilities: [
        'Selected appropriate components',
        'Exposure to CAD models and design processes',
        'Observing turbine engineering',
        'Component selection and mechanical integration',
        'Wind tunnel testing'
      ],
      achievements: [
        'Wind tunnel experience',
        'Understanding aerodynamic design',
        'Technical component selection skills',
        'Contribution to real-world engineering projects'
      ],
      technologies: [
        'CAD Design',
        'Component Selection',
        'Engineering Documentation',
        'Wind Tunnel Testing'
      ],
      thumbnail: '/VAWT_bg.png',
      images: [
        '/vawt-wind-tunnel-1.jpg',
        '/vawt-wind-tunnel-2.jpg',
        '/vawt-wind-tunnel-3.jpg'
      ]
    },
    {
      title: 'V12 Engine Project',
      organization: 'Central Connecticut State University',
      period: 'May 2025',
      type: 'CAD Design Project',
      description:
        'Engineering design project using Siemens NX CAD software for advanced 3D modeling, assembly design, and technical documentation of a V12 engine.',
      responsibilities: [
        'Created detailed 3D models and assemblies using Siemens NX',
        'Developed technical drawings and engineering documentation',
        'Applied advanced CAD modeling techniques and best practices',
        'Collaborated on design iterations and improvements'
      ],
      achievements: [
        'Gained proficiency in Siemens NX CAD software',
        'Developed skills in advanced 3D modeling and assembly design',
        'Created comprehensive technical documentation',
        'Applied engineering design principles to real-world projects'
      ],
      technologies: [
        'Siemens NX',
        'CAD Design',
        '3D Modeling',
        'Technical Documentation'
      ],
      thumbnail: '/ETM_BG.png',
      videos: ['/v12.mp4'],
      images: [
        '/etm-260-1.jpg',
        '/etm-260-2.jpg',
        '/etm-260-3.gif',
        '/etm-260-4.jpg',
        '/etm-260-5.jpg'
      ],
      pdf: '/ETM-260 (brviv).pdf'
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [modalItems, setModalItems] = useState<string[]>([]);
  const [openImageSections, setOpenImageSections] = useState<Record<number, boolean>>({});

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === 'ArrowRight') {
        setSelectedIndex((i) =>
          i !== null ? (i + 1) % modalItems.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((i) =>
          i !== null ? (i - 1 + modalItems.length) % modalItems.length : null
        );
      } else if (e.key === 'Escape') {
        setSelectedIndex(null);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex, modalItems.length]);

  const openModal = (items: string[], index: number) => {
    setModalItems(items);
    setSelectedIndex(index);
  };

  return (
    <div className="min-h-screen bg-background">

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hands-on engineering projects and learning experiences
          </p>
        </div>
      </div>

      {/* ===================================================== */}
      {/* PROJECTS LIST SECTION                                 */}
      {/* ===================================================== */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto space-y-12">
            {projects.map((project, index) => {
              const media = [...(project.images || []), ...(project.videos || [])];
              const isImageOpen = openImageSections[index] || false;

              return (
                <Card key={index} className="card-hover rounded-xl overflow-hidden border-border/60">
                  <CardHeader className="p-0">
                    <div className="flex flex-col md:flex-row">
                      
                      {/* Thumbnail Image */}
                      {project.thumbnail && (
                        <div className="relative w-full md:w-64 h-56 md:h-auto flex-shrink-0 md:border-r border-border/50">
                          <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            unoptimized
                            className="object-cover"
                          />
                          {/* Mobile-only overlay to distinguish text */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:hidden" />
                        </div>
                      )}

                      {/* Card Header Content */}
                      <div className="flex-1 p-6 sm:p-8">
                        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4">
                          <div className="space-y-3">
                            <div>
                              <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                              <CardDescription className="text-lg mt-1 text-foreground/80 font-medium">
                                {project.organization}
                              </CardDescription>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1 rounded-md">
                                <Calendar className="w-4 h-4" />
                                <span>{project.period}</span>
                              </div>
                              <Badge variant="outline" className="flex items-center gap-1.5 font-normal">
                                <Layers className="w-3.5 h-3.5" />
                                {project.type}
                              </Badge>
                            </div>
                          </div>

                          {/* Technologies Badges */}
                          <div className="flex flex-wrap gap-2 xl:justify-end xl:max-w-xs">
                            {project.technologies.map((t, i) => (
                              <Badge key={i} variant="secondary" className="hover:bg-primary/20 transition-colors">
                                {t}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 sm:p-8 pt-0">
                    <div className="h-px w-full bg-border/50 mb-6" /> {/* Divider */}

                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                      {project.description}
                    </p>

                    {project.subProjects && project.subProjects.length > 0 ? (
                      <>
                        {/* Sub-Projects — horizontal mini-cards */}
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold mb-5">Projects</h4>
                          <div className="grid sm:grid-cols-3 gap-4">
                            {project.subProjects.map((sub, i) => (
                              <Link
                                key={i}
                                href={sub.href}
                                className="group relative flex flex-col justify-between p-5 rounded-xl border border-border/50 bg-card/30 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 overflow-hidden"
                              >
                                {/* Top gradient accent */}
                                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div>
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                      {sub.name}
                                    </span>
                                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
                                  </div>
                                  <p className="text-xs text-muted-foreground/60 leading-relaxed">
                                    {sub.description}
                                  </p>
                                </div>

                                <div className="mt-4 pt-3 border-t border-border/30">
                                  <span className="text-xs font-medium text-primary/70 group-hover:text-primary transition-colors duration-300">
                                    View details →
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Achievements — compact row */}
                        <div>
                          <h4 className="text-lg font-semibold mb-4">Achievements</h4>
                          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                            {project.achievements.map((a, i) => (
                              <li key={i} className="text-muted-foreground flex items-start text-sm md:text-base">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                <span>{a}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      /* Standard Responsibilities / Achievements grid */
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            Responsibilities
                          </h4>
                          <ul className="space-y-3">
                            {project.responsibilities.map((r, i) => (
                              <li key={i} className="text-muted-foreground flex items-start text-sm md:text-base">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            Achievements
                          </h4>
                          <ul className="space-y-3">
                            {project.achievements.map((a, i) => (
                              <li key={i} className="text-muted-foreground flex items-start text-sm md:text-base">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                <span>{a}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* PDF Link */}
                    {project.pdf && (
                      <div className="mt-6 pt-6 border-t border-border/50">
                        <a
                          href={project.pdf}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-md transition-colors font-medium text-sm"
                        >
                          <FileText className="w-4 h-4" />
                          <span>View Project Documentation (PDF)</span>
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    )}

                    {/* Media Section (Collapsible) */}
                    {(project.images?.length || project.videos?.length) && (
                      <div className="mt-6 pt-6 border-t border-border/50">
                        <Collapsible
                          open={isImageOpen}
                          onOpenChange={(open) =>
                            setOpenImageSections((prev) => ({
                              ...prev,
                              [index]: open
                            }))
                          }
                        >
                          <CollapsibleTrigger asChild>
                            <Button variant="outline" className="w-full justify-between py-6 group">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-secondary rounded-full group-hover:bg-primary/20 transition-colors">
                                  <ImageIcon className="w-5 h-5 text-foreground" />
                                </div>
                                <span className="text-base font-medium">View Project Gallery ({media.length})</span>
                              </div>
                              <ChevronRight
                                className={`w-5 h-5 transition-transform duration-300 ${
                                  isImageOpen ? 'rotate-90' : ''
                                }`}
                              />
                            </Button>
                          </CollapsibleTrigger>

                          <CollapsibleContent className="mt-6 animate-in slide-in-from-top-2 fade-in duration-300">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                              {media.map((file, i) => {
                                const isVideo =
                                  file.toLowerCase().includes('.mp4') ||
                                  file.toLowerCase().includes('.mov');
                                const isGif = file.toLowerCase().endsWith('.gif');

                                return (
                                  <div
                                    key={i}
                                    className="group relative aspect-video rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 cursor-pointer shadow-sm hover:shadow-md transition-all"
                                    onClick={() => openModal(media, i)}
                                  >
                                    {isVideo ? (
                                      <div className="w-full h-full relative">
                                        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/20 group-hover:bg-black/10 transition-colors">
                                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                                          </div>
                                        </div>
                                        <video
                                          src={file}
                                          className="w-full h-full object-cover"
                                          muted
                                        />
                                      </div>
                                    ) : isGif ? (
                                      <img
                                        src={file}
                                        alt="Project media"
                                        className="w-full h-full object-cover"
                                      />
                                    ) : (
                                      <Image
                                        src={file}
                                        alt="Project media"
                                        fill
                                        unoptimized
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                      />
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* MODAL LIGHTBOX WITH ARROWS                            */}
      {/* ===================================================== */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Prevent modal from closing when clicking inside content */}
          <div
            className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
              aria-label="Close media"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Left arrow */}
            <button
              type="button"
              onClick={() =>
                setSelectedIndex((i) =>
                  i !== null
                    ? (i - 1 + modalItems.length) % modalItems.length
                    : null
                )
              }
              className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-primary/80 border border-white/10 rounded-full text-white transition-all z-50"
              aria-label="Previous media"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Right arrow */}
            <button
              type="button"
              onClick={() =>
                setSelectedIndex((i) =>
                  i !== null ? (i + 1) % modalItems.length : null
                )
              }
              className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-primary/80 border border-white/10 rounded-full text-white transition-all z-50"
              aria-label="Next media"
            >
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* IMAGE / VIDEO DISPLAY */}
            <div className="relative w-full h-[60vh] md:h-[80vh] rounded-xl overflow-hidden shadow-2xl bg-black">
              {modalItems[selectedIndex]?.toLowerCase().endsWith('.mov') ||
              modalItems[selectedIndex]?.toLowerCase().endsWith('.mp4') ? (
                <video
                  src={modalItems[selectedIndex]}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : modalItems[selectedIndex]?.toLowerCase().endsWith('.gif') ? (
                <img
                  src={modalItems[selectedIndex]}
                  alt="Project animation"
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image
                  src={modalItems[selectedIndex]}
                  alt="Project image"
                  fill
                  unoptimized
                  className="object-contain"
                />
              )}
            </div>
            
            {/* Counter */}
            <div className="absolute -bottom-10 text-white/50 text-sm font-medium">
              {selectedIndex + 1} / {modalItems.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
