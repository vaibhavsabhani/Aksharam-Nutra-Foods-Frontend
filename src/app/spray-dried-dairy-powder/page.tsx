import type { Metadata } from "next";
import { SimpleProductPageTemplate } from "@/components/templates/SimpleProductPageTemplate";
import { sprayDriedDairyPowderProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Spray Dried Dairy Powder",
};

export default function SprayDriedDairyPowderPage() {
  return (
    <SimpleProductPageTemplate
      title="Spray Dried Dairy Powder"
      products={sprayDriedDairyPowderProducts}
    />
  );
}
