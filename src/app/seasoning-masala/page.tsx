import type { Metadata } from "next";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { ExtraContentBlock } from "@/components/sections/ExtraContentBlock";
import { CoreValuesCounters } from "@/components/sections/CoreValuesCounters";
import { seasoningMasalaProducts } from "@/data/products";
import { companyIntro } from "@/data/constants";

export const metadata: Metadata = {
  title: "Seasoning Masala",
  description: "",
};

export default function SeasoningMasalaPage() {
  return (
    <>
      <HeroBanner title="Seasoning Masala" />

      <ProductIntro
        title="Welcome to Aksharam Nutra Foods"
        lead="Leading Fruit & vegetable Powder Manufacturer & Supplier in Gujarat"
        paragraphs={[companyIntro]}
        image="/abt.jpg"
      />

      <WhyChooseUs image="/abt-2.jpg" />

      <ProductGrid products={seasoningMasalaProducts} />

      <ExtraContentBlock />

      <CoreValuesCounters />
    </>
  );
}
