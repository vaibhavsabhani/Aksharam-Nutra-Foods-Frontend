import { HeroBanner } from "@/components/sections/HeroBanner";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { ExtraContentBlock } from "@/components/sections/ExtraContentBlock";
import { CoreValuesCounters } from "@/components/sections/CoreValuesCounters";
import type { ProductItem } from "@/types";

interface ProductShowcaseTemplateProps {
  bannerTitle: string;
  introTitle: string;
  introLead?: string;
  introParagraphs: string[];
  introImage: string;
  whyChooseUsDescription?: string;
  products: ProductItem[];
  coreValues?: { value: string; label: string }[];
}

export function ProductShowcaseTemplate({
  bannerTitle,
  introTitle,
  introLead,
  introParagraphs,
  introImage,
  whyChooseUsDescription = "Aksharam Nutra Foods Pvt Ltd is a leading manufacturer and supplier of spray dried fruit, vegetables, and fat powder products.",
  products,
  coreValues,
}: ProductShowcaseTemplateProps) {
  return (
    <>
      <HeroBanner title={bannerTitle} />
      <ProductIntro
        title={introTitle}
        lead={introLead}
        paragraphs={introParagraphs}
        image={introImage}
      />
      <WhyChooseUs image="/abt-2.jpg" description={whyChooseUsDescription} />
      <ProductGrid products={products} />
      <ExtraContentBlock />
      <CoreValuesCounters values={coreValues} />
    </>
  );
}
