"use client";

import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/constants";

export function TestimonialCarousel() {
  const [plugin] = useState(() =>
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="bg-brand-bg py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-10 text-3xl font-bold text-brand-ink md:text-4xl">
          Testimonials
        </h2>
        <Carousel
          plugins={[plugin]}
          opts={{ loop: true }}
          onMouseLeave={() => plugin.play()}
        >
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i}>
                <blockquote className="px-2 text-brand-muted md:px-8">
                  <p className="text-base leading-relaxed md:text-lg">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-4 font-semibold text-brand-ink">
                    — {t.author}
                  </footer>
                </blockquote>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
