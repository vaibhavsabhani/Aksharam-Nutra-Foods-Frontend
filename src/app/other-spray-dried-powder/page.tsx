import type { Metadata } from "next";
import { SimpleProductPageTemplate } from "@/components/templates/SimpleProductPageTemplate";
import { otherSprayDriedProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Other Spray Dried Products",
};

export default function OtherSprayDriedPowderPage() {
  return (
    <SimpleProductPageTemplate
      title="Other Spray Dried Products"
      products={otherSprayDriedProducts}
    />
  );
}
