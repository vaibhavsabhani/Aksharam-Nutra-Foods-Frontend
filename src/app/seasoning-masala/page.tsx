import type { Metadata } from "next";
import { ProductShowcaseTemplate } from "@/components/templates/ProductShowcaseTemplate";
import { seasoningMasalaProducts } from "@/data/products";
import { companyIntro } from "@/data/constants";

export const metadata: Metadata = {
  title: "Seasoning Masala",
};

export default function SeasoningMasalaPage() {
  return (
    <ProductShowcaseTemplate
      bannerTitle="Seasoning Masala"
      introTitle="Welcome to Aksharam Nutra Foods"
      introLead="Leading Fruit & vegetable Powder Manufacturer & Supplier in Gujarat"
      introParagraphs={[companyIntro]}
      introImage="/abt.jpg"
      products={seasoningMasalaProducts}
    />
  );
}
