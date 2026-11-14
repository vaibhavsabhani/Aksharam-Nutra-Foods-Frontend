import type { Metadata } from "next";
import { SimpleProductPageTemplate } from "@/components/templates/SimpleProductPageTemplate";
import { sprayDriedVegetablePowderProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Spray Dried Vegetable Powder",
};

export default function SprayDriedVegetablePowderPage() {
  return (
    <SimpleProductPageTemplate
      title="Spray Dried Vegetable Powder"
      products={sprayDriedVegetablePowderProducts}
    />
  );
}
