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

type PublicTestimonial = { id: number; quote: string; author: string };
const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api";

export function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState<PublicTestimonial[]>([]);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [plugin] = useState(() =>
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  useEffect(() => {
    fetch(`${apiUrl}/testimonials?onlyVisible=true`, { next: { revalidate: 60 } } as RequestInit)
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
    <section className="bg-brand-bg py-16 md:py-[4.75rem]">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="mb-20 text-3xl font-bold text-brand-ink md:text-4xl">
          Testimonials
        </h2>
        <Carousel
          plugins={[plugin]}
          opts={{ loop: true }}
          setApi={setCarouselApi}
          className="px-10 md:px-16"
        >
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.id}>
                <blockquote className="mx-auto min-h-40 max-w-4xl px-2 text-brand-muted md:px-8">
                  <p className="text-base leading-relaxed md:text-lg md:leading-relaxed">
                    ⭐ &ldquo;{t.quote}&rdquo;
                    <span className="whitespace-nowrap"> — {t.author}</span>
                  </p>
                </blockquote>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 h-14 w-14 border-0 bg-black/[0.06] text-brand-ink shadow-none hover:bg-black/[0.1] md:h-16 md:w-16" />
          <CarouselNext className="right-0 h-14 w-14 border-0 bg-black/[0.06] text-brand-ink shadow-none hover:bg-black/[0.1] md:h-16 md:w-16" />
        </Carousel>
        {testimonials.length > 1 && (
          <div className="mt-20 flex items-center justify-center gap-2" aria-label="Testimonial slides">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => carouselApi?.scrollTo(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  activeIndex === index ? "bg-brand" : "bg-brand-ink/15"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
