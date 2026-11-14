import type { Metadata } from "next";
import {
  Hero,
  ProductIntro,
  WhyChooseUs,
  CategoryGrid,
  TestimonialCarousel,
  RecentBlogGrid,
} from "@/components/sections";
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
      <section className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 py-10 sm:py-16 2xl:py-24">
        <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-2 lg:gap-14 2xl:gap-20">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 min-h-[260px] sm:min-h-[360px] md:min-h-[440px] 2xl:min-h-[560px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/img-grid-1.jpg"
              alt="Aksharam Nutra Foods"
              className="row-span-2 h-full w-full rounded-2xl object-cover shadow-sm"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/img-grid-2.jpg"
              alt="Aksharam Nutra Foods"
              className="h-full w-full rounded-2xl object-cover shadow-sm"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/img-grid-3.jpg"
              alt="Aksharam Nutra Foods"
              className="h-full w-full rounded-2xl object-cover shadow-sm"
            />
          </div>
          <div>
            <h2 className="section-title mb-4 text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-brand-ink tracking-tight">
              Experience the Best in Spray-Dried Ingredients
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base 2xl:text-lg leading-relaxed text-brand-muted">
              <p>
                At Aksharam Nutra Foods Pvt Ltd, we pride ourselves on delivering exceptional
                spray-dried ingredients that set new benchmarks for quality and innovation. Our
                extensive range includes premium fruit, vegetable, and fat powder products,
                specifically designed to enhance the flavor, texture, and nutritional content of
                your creations.
              </p>
              <p>
                We are committed to maintaining stringent quality controls throughout our
                manufacturing process, ensuring that every product you receive meets the highest
                standards of purity and safety. Based in Surendranagar, Gujarat, we leverage
                cutting-edge spray-drying technology to preserve the natural goodness of each
                ingredient, without compromising on taste or nutrition.
              </p>
              <p>
                When you choose Aksharam Nutra Foods Pvt Ltd, you&apos;re choosing a partner
                dedicated to providing innovative solutions that cater to your industry&apos;s
                needs. Elevate your products with our natural, high-quality ingredients today!
              </p>
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
