"use client";

import { KineticText } from "@/components/common/KineticText";
import { ScrollReveal } from "@/components/common/ScrollReveal";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
}

export function HeroBanner({ title, subtitle }: HeroBannerProps) {
  return (
    <div className="relative overflow-hidden bg-brand py-14 sm:py-18 md:py-24 2xl:py-32 text-center text-brand-foreground transition-colors duration-500">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute -top-24 -left-24 size-80 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 size-80 rounded-full bg-brand-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold tracking-tight break-words">
          <KineticText text={title} as="span" stagger={35} delay={50} />
        </h1>
        {subtitle ? (
          <ScrollReveal animation="fade-up" delay={200} duration={700}>
            <p className="mx-auto mt-4 sm:mt-5 max-w-3xl text-sm sm:text-base md:text-lg 2xl:text-xl text-brand-foreground/90 font-normal leading-relaxed">
              {subtitle}
            </p>
          </ScrollReveal>
        ) : null}
      </div>
    </div>
  );
}
