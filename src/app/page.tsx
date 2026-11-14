import type { Metadata } from "next";
import {
  Hero,
  ProductIntro,
  WhyChooseUs,
  CategoryGrid,
  TestimonialCarousel,
  RecentBlogGrid,
} from "@/components/sections";
import { KineticText } from "@/components/common/KineticText";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { InteractiveTiltCard } from "@/components/common/InteractiveTiltCard";
import { RevealMedia } from "@/components/common/RevealMedia";
import { companyIntro } from "@/data/constants";

export const metadata: Metadata = {
  title: "Home - Aksharam Nutra Foods Pvt. Ltd.",
};

export default function Home() {
  return (
    <>
      <Hero
        title="Spray Dried Fruit & Vegetable Manufacturer & Supplier"
        highlight="Pure as it gets"
        description="Ingredients used as our raw materials are 100% authentic and hence our product preserves ultimate natural taste as original when packed and shipped."
        image="/images/couch.png"
      />

      <ProductIntro
        title="Welcome to Aksharam Nutra Foods"
        lead="Leading Fruit & vegetable Powder Manufacturer & Supplier in Gujarat"
        paragraphs={[companyIntro]}
        image="/abt.jpg"
        readMoreHref="/about"
      />

      <WhyChooseUs
        image="/abt-2.jpg"
        description="Aksharam Nutra Foods Pvt Ltd is a leading manufacturer and supplier of spray dried fruit, vegetables, and fat powder products."
        reverse
      />

      {/* We Help Section */}
      <section className="relative overflow-hidden mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 2xl:py-28">
        <div className="grid items-center gap-10 sm:gap-12 md:grid-cols-2 lg:gap-16 2xl:gap-24">
          {/* Animated 3-Image Collage with Interactive Tilt & Curtain Wipe */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3.5 sm:gap-5 min-h-[300px] sm:min-h-[380px] md:min-h-[460px] 2xl:min-h-[580px]">
            {/* Image 1: Row span 2 */}
            <InteractiveTiltCard
              maxTilt={5}
              className="row-span-2 h-full w-full rounded-2xl sm:rounded-3xl shadow-md"
            >
              <RevealMedia delay={100} duration={850} className="h-full w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/img-grid-1.jpg"
                  alt="Aksharam Nutra Foods"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </RevealMedia>
            </InteractiveTiltCard>

            {/* Image 2 */}
            <InteractiveTiltCard
              maxTilt={6}
              className="h-full w-full rounded-2xl sm:rounded-3xl shadow-md"
            >
              <RevealMedia delay={220} duration={850} className="h-full w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/img-grid-2.jpg"
                  alt="Aksharam Nutra Foods"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </RevealMedia>
            </InteractiveTiltCard>

            {/* Image 3 */}
            <InteractiveTiltCard
              maxTilt={6}
              className="h-full w-full rounded-2xl sm:rounded-3xl shadow-md"
            >
              <RevealMedia delay={340} duration={850} className="h-full w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/img-grid-3.jpg"
                  alt="Aksharam Nutra Foods"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </RevealMedia>
            </InteractiveTiltCard>
          </div>

          {/* Description Column */}
          <div>
            <h2 className="section-title mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-brand-ink tracking-tight leading-tight">
              <KineticText
                text="Experience the Best in Spray-Dried Ingredients"
                as="span"
                stagger={30}
                delay={50}
              />
            </h2>

            <div className="space-y-3.5 sm:space-y-4 text-sm sm:text-base 2xl:text-lg leading-relaxed text-brand-muted font-normal">
              <ScrollReveal animation="fade-up" delay={200} duration={700}>
                <p>
                  At Aksharam Nutra Foods Pvt Ltd, we pride ourselves on delivering exceptional
                  spray-dried ingredients that set new benchmarks for quality and innovation. Our
                  extensive range includes premium fruit, vegetable, and fat powder products,
                  specifically designed to enhance the flavor, texture, and nutritional content of
                  your creations.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={320} duration={700}>
                <p>
                  We are committed to maintaining stringent quality controls throughout our
                  manufacturing process, ensuring that every product you receive meets the highest
                  standards of purity and safety. Based in Surendranagar, Gujarat, we leverage
                  cutting-edge spray-drying technology to preserve the natural goodness of each
                  ingredient, without compromising on taste or nutrition.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={440} duration={700}>
                <p>
                  When you choose Aksharam Nutra Foods Pvt Ltd, you&apos;re choosing a partner
                  dedicated to providing innovative solutions that cater to your industry&apos;s
                  needs. Elevate your products with our natural, high-quality ingredients today!
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <CategoryGrid />
      <TestimonialCarousel />
      <RecentBlogGrid />
    </>
  );
}
