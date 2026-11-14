import type { Metadata } from "next";
import { SimpleProductPageTemplate } from "@/components/templates/SimpleProductPageTemplate";
import { sprayDriedFatPowderProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Spray Dried Fat Powder",
};

export default function SprayDriedFatPowderPage() {
  return (
    <SimpleProductPageTemplate
      title="Spray Dried Fat Powder"
      products={sprayDriedFatPowderProducts}
    />
  );
}
