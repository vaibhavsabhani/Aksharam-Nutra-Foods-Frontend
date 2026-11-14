"use client";

import { extraContentBlocks } from "@/data/constants";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { InteractiveTiltCard } from "@/components/common/InteractiveTiltCard";

export function ExtraContentBlock() {
  return (
    <section className="relative overflow-hidden mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 2xl:py-28">
      {/* Background subtle ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 size-96 rounded-full bg-brand/5 blur-3xl -z-10" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 size-96 rounded-full bg-brand-accent/10 blur-3xl -z-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 2xl:gap-10">
        {extraContentBlocks.map((block, idx) => (
          <ScrollReveal
            key={block.title}
            animation="fade-up"
            delay={100 + idx * 100}
            duration={750}
          >
            <InteractiveTiltCard
              maxTilt={5}
              perspective={1100}
              className="group relative h-full flex flex-col justify-between rounded-3xl border border-black/8 dark:border-white/10 bg-white/90 dark:bg-neutral-900/90 p-6 sm:p-8 2xl:p-10 shadow-xs backdrop-blur-sm transition-all duration-500 hover:border-brand/30 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Subtle top gradient accent line */}
              <div className="absolute top-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-transparent via-brand/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div>
                {/* Header row with sleek numeric indicator */}
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <span className="font-mono text-xs sm:text-sm font-bold text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full">
                    0{idx + 1}
                  </span>
                  <span className="size-2 rounded-full bg-brand/30 transition-all duration-300 group-hover:scale-150 group-hover:bg-brand" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl 2xl:text-2xl font-bold text-brand-ink tracking-tight leading-snug transition-colors duration-300 group-hover:text-brand">
                  {block.title}
                </h3>

                {/* Paragraph */}
                <p className="mt-3 sm:mt-4 text-sm sm:text-base 2xl:text-lg text-brand-muted leading-relaxed font-normal">
                  {block.text}
                </p>
              </div>
            </InteractiveTiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
