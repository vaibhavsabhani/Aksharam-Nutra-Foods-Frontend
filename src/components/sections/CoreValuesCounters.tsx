"use client";

import { coreValuesDefault } from "@/data/constants";
import { KineticText } from "@/components/common/KineticText";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { InteractiveTiltCard } from "@/components/common/InteractiveTiltCard";

interface CoreValuesCountersProps {
  values?: { value: string; label: string }[];
  title?: string;
}

export function CoreValuesCounters({
  values = coreValuesDefault,
  title = "Our Core Values",
}: CoreValuesCountersProps) {
  return (
    <section className="relative overflow-hidden mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 2xl:py-28">
      <div className="mb-8 sm:mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-brand-ink tracking-tight">
          <KineticText text={title} as="span" stagger={35} delay={50} />
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 2xl:gap-8">
        {values.map((item, idx) => (
          <ScrollReveal
            key={item.label}
            animation="fade-up"
            delay={100 + idx * 90}
            duration={700}
          >
            <InteractiveTiltCard
              maxTilt={6}
              perspective={1100}
              className="h-full rounded-3xl border border-black/5 bg-brand-bg/80 dark:bg-neutral-900/60 p-6 sm:p-8 2xl:p-10 text-center shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-brand/30 hover:shadow-xl"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-brand tracking-tight">
                <AnimatedCounter value={item.value} duration={2000} />
              </div>
              <p className="mt-2 text-xs sm:text-sm md:text-base 2xl:text-lg font-medium text-brand-muted">
                {item.label}
              </p>
            </InteractiveTiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
