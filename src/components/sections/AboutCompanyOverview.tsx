"use client";

import { KineticText } from "@/components/common/KineticText";
import { ScrollReveal } from "@/components/common/ScrollReveal";

const paragraphs = [
  "Aksharam Nutra Foods Pvt. Ltd. is a manufacturer and supplier of high-quality spray-dried fruit powders, vegetable powders, Herbal Extract and fat powders, based in Surendranagar, Gujarat, India.",
  "We specialise in delivering innovative ingredient solutions that bring together the goodness of nature, product consistency, and functional versatility. Our product range is developed to serve the evolving requirements of diverse industries, supporting manufacturers in creating products with enhanced taste, texture, functionality, and nutritional value.",
  "With a commitment to quality, innovation, and customer satisfaction, we strive to make natural ingredient solutions accessible to businesses seeking dependable sourcing and consistent product quality.",
  "At Aksharam Nutra Foods, we believe that every ingredient plays an important role in shaping better products. Our focus is on combining nature-inspired solutions with manufacturing expertise to create value for our customers and build long-term business partnerships.",
];

export function AboutCompanyOverview() {
  return (
    <section className="relative overflow-hidden bg-brand-bg py-14 sm:py-18 md:py-24 2xl:py-32">
      <div className="pointer-events-none absolute -left-32 top-12 size-72 rounded-full bg-brand-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 size-96 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/85 p-6 shadow-xl shadow-brand/5 backdrop-blur-sm sm:p-10 md:p-14">
          <div className="mb-8 flex items-center gap-4 sm:mb-10">
            <span className="h-px w-12 bg-brand-accent sm:w-20" />
            <ScrollReveal animation="fade-right" duration={650}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                About Aksharam Nutra Foods
              </p>
            </ScrollReveal>
          </div>

          <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl md:text-5xl">
            <KineticText
              text="Transforming Nature's Goodness into Quality Ingredients"
              as="span"
              stagger={28}
              delay={80}
            />
          </h2>

          <div className="mt-8 space-y-5 border-l-2 border-brand-accent/50 pl-5 sm:mt-10 sm:space-y-6 sm:pl-8">
            {paragraphs.map((paragraph, index) => (
              <ScrollReveal
                key={paragraph}
                animation="fade-up"
                delay={180 + index * 100}
                duration={700}
              >
                <p className="text-sm leading-7 text-brand-muted sm:text-base sm:leading-8">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal
            animation="zoom-in"
            delay={650}
            duration={800}
            className="mt-10 rounded-2xl bg-brand px-5 py-5 text-center shadow-lg shadow-brand/15 sm:mt-12 sm:px-8 sm:py-6"
          >
            <p className="text-base font-bold leading-relaxed text-white sm:text-lg">
              Aksharam Nutra Foods - Bringing Nature, Quality, and Innovation
              Together.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
