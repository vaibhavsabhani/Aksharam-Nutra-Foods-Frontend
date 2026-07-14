import type { Metadata } from "next";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { otherSprayDriedProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Other Spray Dried Products",
  description: "",
};

export default function OtherSprayDriedPowderPage() {
  return (
    <>
      <HeroBanner title="Other Spray Dried Products" />
      <ProductGrid products={otherSprayDriedProducts} />
    </>
  );
}
