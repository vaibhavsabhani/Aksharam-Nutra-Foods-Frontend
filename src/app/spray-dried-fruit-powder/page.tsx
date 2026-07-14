import type { Metadata } from "next";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { sprayDriedFruitPowderProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Spray Dried Fruit Powder",
  description: "",
};

export default function SprayDriedFruitPowderPage() {
  return (
    <>
      <HeroBanner title="Spray Dried Fruit Powder" />
      <ProductGrid products={sprayDriedFruitPowderProducts} />
    </>
  );
}
