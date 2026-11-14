"use client";

import Link from "next/link";
import { HeroBanner } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { KineticText } from "@/components/common/KineticText";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { InteractiveTiltCard } from "@/components/common/InteractiveTiltCard";
import { MagneticButton } from "@/components/common/MagneticButton";
import { InteractiveGlowBackground } from "@/components/common/InteractiveGlowBackground";
import { FileText, Eye, Download } from "lucide-react";

interface Brochure {
  title: string;
  description: string;
  href: string;
}

const brochures: Brochure[] = [
  {
    title: "Spray Dried Products",
    description: "Complete range of Fruit, Vegetable & Fat powders.",
    href: "/images/01.ANFPL Spray Dried Product Kist.pdf",
  },
  {
    title: "Dehydrated Products",
    description: "Premium dehydrated vegetables and spices.",
    href: "/images/02.AFPL Dehydrated Product List.pdf",
  },
  {
    title: "Freeze Dried Products",
    description: "Nutrient-rich freeze-dried ingredients.",
    href: "/images/03.ANFPL Freeze Dried Product List.pdf",
  },
  {
    title: "Indian Herbal Extracts",
    description: "Premium Indian herbal extracts for nutraceutical and wellness applications.",
    href: "/images/04 INDIAN HERBAL EXTRACTS.pdf",
  },
];

export default function BrochurePage() {
  return (
    <>
      <HeroBanner
        title="Download Brochures"
        subtitle="Official technical product catalogues and specifications."
      />

      <section className="relative overflow-hidden mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 2xl:py-28">
        {/* 4 Brochure Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-8 items-stretch">
          {brochures.map((brochure, idx) => (
            <ScrollReveal
              key={brochure.title}
              animation="fade-up"
              delay={100 + idx * 80}
              duration={700}
              className="h-full flex flex-col"
            >
              <InteractiveTiltCard
                maxTilt={6}
                perspective={1100}
                className="group relative h-full flex flex-col justify-between rounded-3xl border border-black/8 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 sm:p-7 text-center shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-brand/40 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Top Info Block */}
                <div className="flex flex-col items-center flex-1">
                  {/* Floating PDF Badge Icon */}
                  <div className="flex h-20 sm:h-22 w-16 sm:w-18 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-red-500/30 bg-red-500/5 text-red-600 shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <FileText className="size-6 mb-1 text-red-500" />
                    <span className="text-[11px] font-mono font-extrabold tracking-wider">PDF</span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-base sm:text-lg font-bold text-brand-ink transition-colors duration-300 group-hover:text-brand line-clamp-2">
                    {brochure.title}
                  </h3>

                  {/* Description: Flex-1 ensures bottom alignment across all cards */}
                  <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3">
                    {brochure.description}
                  </p>
                </div>

                {/* Pinned Bottom Buttons: mt-auto guarantees exact alignment across all cards */}
                <div className="mt-6 pt-2 w-full flex flex-col gap-2.5">
                  <Button
                    variant="outline"
                    size="sm"
                    nativeButton={false}
                    className="w-full rounded-full border border-black/15 dark:border-white/15 bg-white dark:bg-neutral-800 text-xs sm:text-sm font-semibold text-brand-ink py-2.5 transition-all duration-300 hover:border-brand hover:text-brand hover:scale-[1.02] active:scale-95 shadow-xs"
                    render={<a href={brochure.href} target="_blank" rel="noopener noreferrer" />}
                  >
                    <Eye className="size-3.5 mr-1.5" />
                    <span>View Brochure</span>
                  </Button>

                  <Button
                    size="sm"
                    nativeButton={false}
                    className="group/btn relative overflow-hidden w-full rounded-full bg-brand text-xs sm:text-sm font-semibold text-white py-2.5 transition-all duration-300 hover:bg-brand/90 hover:scale-[1.02] hover:shadow-md active:scale-95 shadow-xs"
                    render={<a href={brochure.href} download />}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-1.5">
                      <Download className="size-3.5" />
                      <span>Download</span>
                    </span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full" />
                  </Button>
                </div>
              </InteractiveTiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Need a Custom Catalogue Section */}
        <ScrollReveal animation="zoom-in" delay={200} duration={750} className="mt-12 sm:mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-black/8 dark:border-white/10 bg-brand-bg/80 dark:bg-neutral-900/80 p-8 sm:p-12 2xl:p-16 text-center backdrop-blur-md shadow-lg">
            <InteractiveGlowBackground />

            <h4 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-ink tracking-tight">
              <KineticText text="Need a Custom Catalogue?" as="span" stagger={35} delay={50} />
            </h4>

            <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-sm sm:text-base 2xl:text-lg text-brand-muted leading-relaxed font-normal">
              If you require specific technical data sheets or a wholesale price list tailored to
              your industrial needs, please contact our export team.
            </p>

            <div className="mt-6 sm:mt-8">
              <MagneticButton strength={0.25}>
                <Button
                  size="lg"
                  nativeButton={false}
                  className="group relative overflow-hidden rounded-full bg-brand px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand/90 hover:shadow-xl active:scale-95"
                  render={<Link href="/contact" />}
                >
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                </Button>
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
