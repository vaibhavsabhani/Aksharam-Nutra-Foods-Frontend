import type { Metadata } from "next";
import { SimpleProductPageTemplate } from "@/components/templates/SimpleProductPageTemplate";
import { sprayDriedFruitPowderProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Spray Dried Fruit Powder",
};

export default function SprayDriedFruitPowderPage() {
  return (
    <SimpleProductPageTemplate
      title="Spray Dried Fruit Powder"
      products={sprayDriedFruitPowderProducts}
    />
  );
}
