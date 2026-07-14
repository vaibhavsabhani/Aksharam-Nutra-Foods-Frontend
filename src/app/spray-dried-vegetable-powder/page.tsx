import type { Metadata } from "next";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { sprayDriedVegetablePowderProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Spray Dried Vegetable Powder",
  description: "",
};

export default function SprayDriedVegetablePowderPage() {
  return (
    <>
      <HeroBanner title="Spray Dried Vegetable Powder" />
      <ProductGrid products={sprayDriedVegetablePowderProducts} />
    </>
  );
}
