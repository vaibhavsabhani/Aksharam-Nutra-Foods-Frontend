"use client";

import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { API_URL } from "@/lib/api";
import { KineticText } from "@/components/common/KineticText";
import { ScrollReveal } from "@/components/common/ScrollReveal";

type PublicTestimonial = { id: number; quote: string; author: string };

export function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState<PublicTestimonial[]>([]);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [plugin] = useState(() =>
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  useEffect(() => {
    fetch(`${API_URL}/testimonials?onlyVisible=true`, { next: { revalidate: 60 } } as RequestInit)
      .then((response) => response.ok ? response.json() : Promise.reject(new Error("Unable to load testimonials")))
      .then(setTestimonials)
      .catch(() => setTestimonials([]));
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    const updateActiveIndex = () => setActiveIndex(carouselApi.selectedScrollSnap());
    updateActiveIndex();
    carouselApi.on("select", updateActiveIndex);

    return () => {
      carouselApi.off("select", updateActiveIndex);
    };
  }, [carouselApi]);

  return (
    <section className="relative overflow-hidden bg-brand-bg py-14 sm:py-20 md:py-24 2xl:py-32">
      <div className="mx-auto max-w-5xl 2xl:max-w-6xl px-4 sm:px-6 text-center">
        <h2 className="mb-8 sm:mb-12 md:mb-16 text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-brand-ink tracking-tight">
          <KineticText text="Testimonials" as="span" stagger={40} delay={50} />
        </h2>

        <ScrollReveal animation="zoom-in" delay={150} duration={850}>
          <div className="relative rounded-3xl bg-white/70 dark:bg-neutral-900/70 p-6 sm:p-10 shadow-xl backdrop-blur-md border border-white/60">
            <Carousel
              plugins={[plugin]}
              opts={{ loop: true }}
              setApi={setCarouselApi}
              className="px-6 sm:px-12 md:px-16"
            >
              <CarouselContent>
                {testimonials.map((t) => (
                  <CarouselItem key={t.id} className="flex min-h-36 sm:min-h-40 items-center justify-center">
                    <blockquote className="mx-auto w-full max-w-4xl px-2 sm:px-4 text-brand-muted">
                      <p className="text-sm sm:text-base md:text-lg 2xl:text-xl leading-relaxed">
                        ⭐ &ldquo;{t.quote}&rdquo;
                        <span className="whitespace-nowrap font-medium text-brand-ink"> — {t.author}</span>
                      </p>
                    </blockquote>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 size-8 sm:size-10 md:size-12 border-0 bg-black/[0.07] text-brand-ink shadow-none hover:bg-black/[0.12]" />
              <CarouselNext className="right-0 size-8 sm:size-10 md:size-12 border-0 bg-black/[0.07] text-brand-ink shadow-none hover:bg-black/[0.12]" />
            </Carousel>

            {testimonials.length > 1 && (
              <div className="mt-8 sm:mt-12 md:mt-16 flex items-center justify-center gap-2" aria-label="Testimonial slides">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    type="button"
                    aria-label={`Show testimonial ${index + 1}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    onClick={() => carouselApi?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "w-7 bg-brand" : "w-2 bg-brand-ink/20"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
