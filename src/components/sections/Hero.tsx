"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { companyEmail } from "@/data/constants";
import { KineticText } from "@/components/common/KineticText";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { InteractiveGlowBackground } from "@/components/common/InteractiveGlowBackground";
import { InteractiveTiltCard } from "@/components/common/InteractiveTiltCard";
import { MagneticButton } from "@/components/common/MagneticButton";
import { RevealMedia } from "@/components/common/RevealMedia";

interface HeroProps {
  title: string;
  highlight?: string;
  description: string;
  image: string;
}

export function Hero({ title, highlight, description, image }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-bg py-5 transition-colors duration-500 sm:py-8 lg:py-12">
      <InteractiveGlowBackground />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[1600px]">
        <div className="relative isolate grid items-center gap-10 overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 px-6 py-10 shadow-2xl shadow-brand/10 backdrop-blur-sm sm:gap-12 sm:px-10 sm:py-14 md:grid-cols-[1.05fr_0.95fr] md:px-14 md:py-16 lg:gap-16 lg:px-20 2xl:py-24">
          <div className="pointer-events-none absolute -left-24 -top-24 -z-10 size-72 rounded-full bg-brand-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-24 -z-10 size-96 rounded-full bg-brand/15 blur-3xl" />

          <div className="relative z-10">
            <ScrollReveal animation="fade-right" duration={800}>
              <div className="mb-5 flex items-center gap-3 sm:mb-7">
                <span className="h-1 w-10 rounded-full bg-brand-accent sm:w-14" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                  Pure ingredients. Better products.
                </span>
              </div>
            </ScrollReveal>

            <h1 className="max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-tight text-brand-ink sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
              <KineticText text={title} as="span" stagger={30} delay={50} />
              {highlight ? (
                <span className="mt-3 block bg-gradient-to-r from-brand via-[#53826e] to-brand bg-clip-text text-red-500 text-3xl">
                  <KineticText text={highlight} as="span" stagger={40} delay={300} />
                </span>
              ) : null}
            </h1>

            <ScrollReveal animation="fade-up" delay={250} duration={800}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-muted sm:mt-6 sm:text-lg md:text-xl">
                {description}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400} duration={800}>
              <div className="mt-8 flex flex-col items-stretch gap-4 sm:mt-10 sm:flex-row sm:items-center">
                <MagneticButton strength={0.2}>
                  <Button
                    nativeButton={false}
                    className="group relative h-auto overflow-hidden rounded-full bg-brand-accent px-8 py-3.5 text-sm font-bold text-brand-ink shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand-accent/90 hover:shadow-xl active:scale-95 sm:px-10 sm:text-base"
                    render={<Link href="/contact" />}
                  >
                    <span className="relative z-10">Contact Us</span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                  </Button>
                </MagneticButton>

                <MagneticButton strength={0.2}>
                  <Button
                    nativeButton={false}
                    className="group relative h-auto overflow-hidden rounded-full border-2 border-brand/20 bg-brand px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand/90 hover:shadow-xl active:scale-95 sm:px-10 sm:text-base"
                    render={<a href={`mailto:${companyEmail}`} />}
                  >
                    <span className="relative z-10">Mail Us</span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                  </Button>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="zoom-in" delay={180} duration={900} className="relative flex justify-center">
            <div className="relative w-full max-w-[420px] sm:max-w-[500px]">
              <div className="absolute inset-4 rounded-full bg-brand-accent/25 blur-3xl" />

              <InteractiveTiltCard
                maxTilt={8}
                perspective={1200}
                className="relative animate-float-gentle rounded-full border-8 border-white/90 bg-brand-bg p-2 shadow-2xl shadow-brand/20"
              >
                <RevealMedia delay={250} duration={900} className="rounded-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt="Aksharam Nutra Foods"
                    className="aspect-square w-full rounded-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </RevealMedia>
              </InteractiveTiltCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
