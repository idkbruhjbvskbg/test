'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  FileText,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Layers
} from 'lucide-react';

const postProcessImages = [
  { src: '/Invertedwingpostprocess1.png', label: 'Post-Process 01' },
  { src: '/Invertedwingpostprocess2.png', label: 'Post-Process 02' },
  { src: '/Invertedwingpostprocess3.png', label: 'Post-Process 03' },
  { src: '/Invertedwingpostprocess4.png', label: 'Post-Process 04' },
  { src: '/Invertedwingpostprocess5.png', label: 'Post-Process 05' },
  { src: '/Invertedwingpostprocess6.png', label: 'Post-Process 06' },
  { src: '/Invertedwingpostprocess7.png', label: 'Post-Process 07' },
  { src: '/Invertedwingpostprocess8.png', label: 'Post-Process 08' },
  { src: '/Invertedwingpostprocess9.png', label: 'Post-Process 09' },
];

export default function InvertedWingPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay loop
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % postProcessImages.length);
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  // Keyboard navigation for active slide and fullscreen modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % postProcessImages.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex(
          (prev) => (prev - 1 + postProcessImages.length) % postProcessImages.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % postProcessImages.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + postProcessImages.length) % postProcessImages.length
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Full-width header matching site standards */}
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
            <span className="text-gradient">CT18 Inverted Wing</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Formula SAE — Aerodynamics Subsystem
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-7xl mx-auto">
            {/* Back link */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Projects
            </Link>

            {/* Side-by-side layout: Left = Full narrative text, Right = Interactive Animated Visualizer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Full Unbroken Narrative (5 cols on lg) */}
              <div className="lg:col-span-6 xl:col-span-5 space-y-6">
                <Card className="rounded-xl overflow-hidden border-border/60 bg-card/70 backdrop-blur-sm">
                  <CardHeader className="p-6 sm:p-8 pb-4">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Badge variant="default">FSAE Aero</Badge>
                      <Badge variant="secondary">OpenFOAM</Badge>
                      <Badge variant="secondary">ANSYS Fluent</Badge>
                      <Badge variant="secondary">SolidWorks</Badge>
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">HPC</Badge>
                    </div>

                    <CardTitle className="text-2xl sm:text-3xl font-bold">
                      CT18 Inverted Wing
                    </CardTitle>

                    <div>
                      <a
                        href="/invertedwing.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-md transition-colors font-medium text-sm w-fit border border-primary/20"
                      >
                        <FileText className="w-4 h-4" />
                        <span>View Project Documentation (PDF)</span>
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 sm:p-8 pt-2 space-y-6">
                    <div className="h-px w-full bg-border/50" />

                    {/* Verbatim Text - Unbroken Flow */}
                    <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                      <p>
                        The CT18 car&apos;s front wing has upwash at a steep angle, which sends dirty air into the rear wing and cuts its downforce compared to what the rear wing does in isolation. This project designs an inverted wing/winglet that mounts behind the front wing to redirect that flow away from the rear wing and toward the side pods and radiator inlet instead.
                      </p>

                      <p>
                        I started by pulling numbers off the front wing sim to set the design target: exit velocity around 13 m/s, upwash angle near 62°, about 10% turbulence intensity. ParaView and CFD Post kept crashing trying to visualize that sim, even through UConn Anyware, so before doing any of the airfoil work I wrote a Python script that reads the Fluent HDF5 output directly. That let me actually see the dirty air coming off the front wing.
                      </p>

                      <p>
                        From there I ran 2D sweeps in OpenFOAM on five candidate airfoils: NACA 9411, two cambered plates, GOE 531, GOE 462/464, across 0 to 20 degrees AoA, testing 2% chord gurney flaps on a couple of them. NACA 9411 and the &quot;#2&quot; cambered plate section came out on top on L/D. GOE 531 dragged too much to bother with. The best result across all runs was the #2 airfoil with a gurney flap, hitting an L/D around 51.
                      </p>

                      <p>
                        With an airfoil chosen, I modeled the wing and its mount to the nose in SolidWorks, then ran the full car in ANSYS Fluent on the HPC cluster for 3D validation (mesh and case files ran over 2 GB). Once that sim finished, I pulled downforce and drag components straight from Ansys and checked how the wake off the inverted wing interacted with the rest of the car.
                      </p>
                    </div>

                    {/* Tools Box */}
                    <div className="pt-4 border-t border-border/50">
                      <div className="p-3.5 rounded-lg bg-secondary/40 border border-border/40 text-xs md:text-sm text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">Tools:</span>{' '}
                        OpenFOAM (2D airfoil CFD), ANSYS Fluent (3D full-car validation), SolidWorks (CAD/mounting), Python (custom HDF5 post-processing pipeline), HPC/UConn Anyware
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column: Interactive Animated Visualizer (Sticky on desktop) */}
              <div className="lg:col-span-6 xl:col-span-7 lg:sticky lg:top-24 space-y-4">
                <Card className="rounded-xl overflow-hidden border-border/60 bg-card/70 backdrop-blur-sm">
                  <CardHeader className="p-4 sm:p-6 pb-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-sm sm:text-base text-foreground">
                          CFD Post-Processing Log
                        </span>
                        <Badge variant="outline" className="text-xs font-mono">
                          {activeIndex + 1} / {postProcessImages.length}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-4 sm:p-6 pt-0 space-y-4">
                    {/* Main Featured Display Frame */}
                    <div className="relative rounded-lg overflow-hidden border border-border/60 bg-black aspect-[16/10] group">
                      {/* Animated Progress Bar along top when playing */}
                      {isPlaying && (
                        <div
                          key={activeIndex}
                          className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 z-20 animate-[progress_4000ms_linear_infinite]"
                          style={{
                            width: '100%',
                            animation: 'shrink 4000ms linear infinite',
                          }}
                        />
                      )}

                      {/* Current Image with smooth transition */}
                      <div
                        className="w-full h-full relative cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                      >
                        <Image
                          key={postProcessImages[activeIndex].src}
                          src={postProcessImages[activeIndex].src}
                          alt={postProcessImages[activeIndex].label}
                          fill
                          unoptimized
                          className="object-contain p-2 transition-all duration-500 ease-out"
                          priority
                        />

                        {/* Hover Overlay with expand hint */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <div className="px-3.5 py-1.5 rounded-full bg-black/70 border border-white/20 text-white text-xs font-medium flex items-center gap-1.5 backdrop-blur-sm">
                            <Maximize2 className="w-3.5 h-3.5" />
                            Click to view full resolution
                          </div>
                        </div>
                      </div>

                      {/* Left Navigation Arrow */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrev();
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-primary text-white border border-white/20 opacity-80 hover:opacity-100 transition-all z-20 shadow-md cursor-pointer hover:scale-105"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      {/* Right Navigation Arrow */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNext();
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-primary text-white border border-white/20 opacity-80 hover:opacity-100 transition-all z-20 shadow-md cursor-pointer hover:scale-105"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Bottom Info Ribbon */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-2 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-xs text-white/80 pointer-events-none z-10">
                        <span className="font-mono font-medium text-white">
                          InvertedWingPostProcess{activeIndex + 1}
                        </span>
                        <span className="text-[11px] text-white/70 font-mono">
                          {activeIndex + 1} / {postProcessImages.length}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal (Reusing existing codebase modal standard) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left arrow */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-primary/90 border border-white/10 rounded-full text-white transition-all z-50 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Right arrow */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-primary/90 border border-white/10 rounded-full text-white transition-all z-50 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Fullscreen Image Display */}
            <div className="relative w-full h-[65vh] md:h-[80vh] rounded-xl overflow-hidden shadow-2xl bg-black border border-white/10">
              <Image
                src={postProcessImages[activeIndex].src}
                alt={postProcessImages[activeIndex].label}
                fill
                unoptimized
                className="object-contain p-2"
                priority
              />
            </div>

            {/* Modal Bottom Counter & Label */}
            <div className="mt-3 flex items-center gap-3 text-white/70 text-sm font-medium">
              <span>InvertedWingPostProcess{activeIndex + 1}</span>
              <span>•</span>
              <span>
                {activeIndex + 1} of {postProcessImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
