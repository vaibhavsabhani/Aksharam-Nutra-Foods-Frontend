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
    <div className="relative overflow-hidden bg-brand-bg transition-colors duration-500">
      {/* Interactive dynamic ambient glow mesh */}
      <InteractiveGlowBackground />

      <div className="relative mx-auto grid max-w-7xl 2xl:max-w-[1600px] items-center gap-10 sm:gap-12 md:grid-cols-2 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 2xl:py-32">
        {/* Left Column: Kinetic Text & Magnetic Buttons */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold leading-[1.12] text-black tracking-tight">
            <KineticText text={title} as="span" stagger={30} delay={50} />
            {highlight ? (
              <span className="mt-2 block bg-gradient-to-r from-brand via-[#53826e] to-brand bg-clip-text text-transparent">
                <KineticText text={highlight} as="span" stagger={40} delay={300} />
              </span>
            ) : null}
          </h1>

          <ScrollReveal animation="fade-up" delay={250} duration={800}>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl 2xl:text-2xl leading-relaxed text-black/75 max-w-2xl font-normal">
              {description}
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={400} duration={800}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
              <MagneticButton strength={0.2}>
                <Button
                  nativeButton={false}
                  className="group relative h-auto overflow-hidden rounded-full bg-brand-accent px-8 sm:px-10 py-3.5 text-sm sm:text-base font-bold text-brand-ink shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand-accent/90 hover:shadow-xl active:scale-95"
                  render={<Link href="/contact" />}
                >
                  <span className="relative z-10">Contact Us</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                </Button>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <Button
                  nativeButton={false}
                  className="group relative h-auto overflow-hidden rounded-full border-2 border-white/40 bg-[#2f2f2f] px-8 sm:px-10 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:border-white hover:bg-[#1a1a1a] hover:shadow-xl active:scale-95"
                  render={<a href={`mailto:${companyEmail}`} />}
                >
                  <span className="relative z-10">Mail Us</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                </Button>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: 3D Interactive Media */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[480px] sm:max-w-[560px] md:max-w-none">
            {/* Ambient Radial Spotlight */}
            <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-brand/25 via-brand-accent/20 to-transparent blur-3xl -z-10" />

            <InteractiveTiltCard
              maxTilt={7}
              perspective={1200}
              className="animate-float-gentle rounded-3xl"
            >
              <RevealMedia delay={200} duration={900}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt="Aksharam Nutra Foods"
                  className="w-full max-h-[320px] sm:max-h-[440px] md:max-h-[520px] 2xl:max-h-[660px] rounded-3xl object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-[1.03]"
                />
              </RevealMedia>
            </InteractiveTiltCard>
          </div>
        </div>
      </div>
    </div>
  );
}
