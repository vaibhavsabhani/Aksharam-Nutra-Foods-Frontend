"use client";

import Link from "next/link";
import { KineticText } from "@/components/common/KineticText";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { InteractiveTiltCard } from "@/components/common/InteractiveTiltCard";
import { MagneticButton } from "@/components/common/MagneticButton";
import { RevealMedia } from "@/components/common/RevealMedia";

interface ProductIntroProps {
  title: string;
  lead?: string;
  paragraphs: string[];
  image: string;
  readMoreHref?: string;
  reverse?: boolean;
}

export function ProductIntro({
  title,
  lead,
  paragraphs,
  image,
  readMoreHref,
  reverse,
}: ProductIntroProps) {
  return (
    <section className="relative overflow-hidden mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 2xl:py-28">
      <div
        className={`grid items-center gap-10 sm:gap-12 md:grid-cols-2 lg:gap-16 2xl:gap-24 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Text Column with Kinetic Reveal */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-brand-ink tracking-tight leading-tight">
            <KineticText text={title} as="span" stagger={30} delay={50} />
          </h2>

          {lead ? (
            <ScrollReveal animation="fade-up" delay={200} duration={700}>
              <p className="mt-4 text-base sm:text-lg 2xl:text-xl font-semibold text-brand">
                {lead}
              </p>
            </ScrollReveal>
          ) : null}

          <div className="mt-4 space-y-3 sm:space-y-4">
            {paragraphs.map((p, i) => (
              <ScrollReveal
                key={i}
                animation="fade-up"
                delay={280 + i * 80}
                duration={700}
              >
                <p className="text-sm sm:text-base 2xl:text-lg leading-relaxed text-brand-muted font-normal">
                  {p}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {readMoreHref ? (
            <ScrollReveal animation="fade-up" delay={400} duration={700} className="mt-7">
              <MagneticButton strength={0.25}>
                <Link
                  href={readMoreHref}
                  className="group relative inline-flex overflow-hidden rounded-full bg-[#2f2f2f] px-8 sm:px-9 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-brand hover:shadow-xl active:scale-95"
                >
                  <span className="relative z-10">Read More</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                </Link>
              </MagneticButton>
            </ScrollReveal>
          ) : null}
        </div>

        {/* Media Column: 3D Interactive Tilt & Curtain Reveal Image */}
        <div className="flex justify-center w-full">
          <InteractiveTiltCard
            maxTilt={6}
            perspective={1100}
            className="w-full rounded-3xl shadow-xl transition-shadow duration-500 hover:shadow-2xl"
          >
            <RevealMedia delay={150} duration={850}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={title}
                className="w-full max-h-[350px] sm:max-h-[460px] 2xl:max-h-[600px] rounded-3xl object-cover transition-transform duration-700 hover:scale-105"
              />
            </RevealMedia>
          </InteractiveTiltCard>
        </div>
      </div>
    </section>
  );
}
