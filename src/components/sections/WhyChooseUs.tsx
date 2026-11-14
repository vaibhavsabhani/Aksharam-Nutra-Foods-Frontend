"use client";

import { whyChooseUsFeatures } from "@/data/constants";
import { KineticText } from "@/components/common/KineticText";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { InteractiveTiltCard } from "@/components/common/InteractiveTiltCard";
import { RevealMedia } from "@/components/common/RevealMedia";

interface WhyChooseUsProps {
  image: string;
  description?: string;
  reverse?: boolean;
}

export function WhyChooseUs({ image, description, reverse }: WhyChooseUsProps) {
  return (
    <section className="relative overflow-hidden bg-brand-bg py-12 sm:py-16 md:py-20 2xl:py-28 transition-colors duration-500">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -bottom-36 -left-36 size-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute -top-36 -right-36 size-96 rounded-full bg-brand-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div
          className={`grid items-center gap-10 sm:gap-12 md:grid-cols-2 lg:gap-16 2xl:gap-24 ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Media Column with 3D Tilt & Curtain Reveal */}
          <div className="flex justify-center">
            <InteractiveTiltCard
              maxTilt={5}
              perspective={1100}
              className="w-full rounded-3xl shadow-xl"
            >
              <RevealMedia delay={150} duration={850}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt="Why Choose Us"
                  className="w-full max-h-[350px] sm:max-h-[460px] 2xl:max-h-[600px] rounded-3xl object-cover transition-transform duration-700 hover:scale-105"
                />
              </RevealMedia>
            </InteractiveTiltCard>
          </div>

          {/* Text & Features Column */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-brand-ink tracking-tight leading-tight">
              <KineticText text="Why Choose Us" as="span" stagger={35} delay={50} />
            </h2>

            {description ? (
              <ScrollReveal animation="fade-up" delay={200} duration={700}>
                <p className="mt-4 text-base sm:text-lg 2xl:text-xl leading-relaxed text-brand-muted font-normal">
                  {description}
                </p>
              </ScrollReveal>
            ) : null}

            {/* Feature Cards with Interactive Tilt & Staggered Reveal */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 2xl:gap-8">
              {whyChooseUsFeatures.map((feature, idx) => (
                <ScrollReveal
                  key={feature.title}
                  animation="fade-up"
                  delay={150 + idx * 90}
                  duration={650}
                >
                  <InteractiveTiltCard
                    maxTilt={6}
                    className="group h-full rounded-2xl border border-black/5 bg-white/80 dark:bg-neutral-900/80 p-5 sm:p-6 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-brand/30 hover:bg-white hover:shadow-xl"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={feature.icon}
                      alt=""
                      className="mb-3 size-8 sm:size-10 transition-transform duration-300 group-hover:scale-115 group-hover:-translate-y-1"
                    />
                    <h3 className="text-sm sm:text-base font-bold text-brand-ink transition-colors duration-300 group-hover:text-brand">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
                      {feature.text}
                    </p>
                  </InteractiveTiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
