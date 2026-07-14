import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { RecentBlogGrid } from "@/components/sections/RecentBlogGrid";
import { companyIntro } from "@/data/constants";

export const metadata: Metadata = {
  // title.template in the root layout doesn't apply to a page at the same
  // route segment (the root "/"), so the full title is set explicitly here.
  title: "Home - Aksharam Nutra Foods Pvt. Ltd.",
  description: "",
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

      {/* Start We Help Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/img-grid-1.jpg"
              alt="Aksharam Nutra Foods"
              className="row-span-2 h-full w-full rounded-2xl object-cover"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/img-grid-2.jpg"
              alt="Aksharam Nutra Foods"
              className="h-full w-full rounded-2xl object-cover"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/img-grid-3.jpg"
              alt="Aksharam Nutra Foods"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div>
            <h2 className="section-title mb-4 text-2xl font-bold text-brand-ink md:text-3xl">
              Experience the Best in Spray-Dried Ingredients
            </h2>
            <p className="mt-4 text-brand-muted">
              At Aksharam Nutra Foods Pvt Ltd, we pride ourselves on delivering exceptional
              spray-dried ingredients that set new benchmarks for quality and innovation. Our
              extensive range includes premium fruit, vegetable, and fat powder products,
              specifically designed to enhance the flavor, texture, and nutritional content of
              your creations. Whether you&apos;re in the food, beverage, or nutraceutical industry,
              our products offer unmatched reliability and versatility.
            </p>
            <p className="mt-4 text-brand-muted">
              We are committed to maintaining stringent quality controls throughout our
              manufacturing process, ensuring that every product you receive meets the highest
              standards of purity and safety. Based in Surendranagar, Gujarat, we leverage
              cutting-edge spray-drying technology to preserve the natural goodness of each
              ingredient, without compromising on taste or nutrition.
            </p>
            <p className="mt-4 text-brand-muted">
              When you choose Aksharam Nutra Foods Pvt Ltd, you&apos;re choosing a partner
              dedicated to providing innovative solutions that cater to your industry&apos;s
              needs. Elevate your products with our natural, high-quality ingredients today!
            </p>
          </div>
        </div>
      </section>
      {/* End We Help Section */}

      <CategoryGrid />
      <TestimonialCarousel />
      <RecentBlogGrid />
    </>
  );
}
