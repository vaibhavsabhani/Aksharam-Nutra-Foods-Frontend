import type { Metadata } from "next";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ExtraContentBlock } from "@/components/sections/ExtraContentBlock";
import { CoreValuesCounters } from "@/components/sections/CoreValuesCounters";
import { companyIntro, coreValuesLarge } from "@/data/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: "",
};

export default function AboutPage() {
  return (
    <>
      <HeroBanner title="About Us" />

      <ProductIntro
        title="Welcome to Aksharam Nutra Foods"
        lead="Leading Fruit & vegetable Powder Manufacturer & Supplier in Gujarat"
        paragraphs={[companyIntro]}
        image="/abt.jpg"
      />

      <WhyChooseUs
        image="/abt-2.jpg"
        description="Aksharam Nutra Foods Pvt Ltd is a leading manufacturer and supplier of spray dried fruit, vegetables, and fat powder products."
      />

      <ExtraContentBlock />

      <CoreValuesCounters values={coreValuesLarge} />
    </>
  );
}
