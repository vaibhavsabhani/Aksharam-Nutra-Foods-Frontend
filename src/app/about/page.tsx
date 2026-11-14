import type { Metadata } from "next";
import {
  HeroBanner,
  ProductIntro,
  WhyChooseUs,
  ExtraContentBlock,
  CoreValuesCounters,
} from "@/components/sections";
import { companyIntro, coreValuesLarge } from "@/data/constants";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <HeroBanner title="About Us" subtitle="Pioneers in high-quality spray dried and natural food ingredients." />

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
