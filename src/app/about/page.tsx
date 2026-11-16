import type { Metadata } from "next";
import {
  AboutCompanyOverview,
  HeroBanner,
  WhyChooseUs,
  ExtraContentBlock,
  CoreValuesCounters,
} from "@/components/sections";
import { coreValuesLarge } from "@/data/constants";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <HeroBanner title="About Us" subtitle="Pioneers in high-quality spray dried and natural food ingredients." />

      <AboutCompanyOverview />

      <WhyChooseUs
        image="/abt-2.jpg"
        description="Aksharam Nutra Foods Pvt Ltd is a leading manufacturer and supplier of spray dried fruit, vegetables, and fat powder products."
      />

      <ExtraContentBlock />

      <CoreValuesCounters values={coreValuesLarge} />
    </>
  );
}
