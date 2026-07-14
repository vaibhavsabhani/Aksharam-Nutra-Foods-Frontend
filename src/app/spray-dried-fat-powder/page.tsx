import type { Metadata } from "next";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { sprayDriedFatPowderProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Spray Dried Fat Powder",
  description: "",
};

export default function SprayDriedFatPowderPage() {
  return (
    <>
      <HeroBanner title="Spray Dried Fat Powder" />
      <ProductGrid products={sprayDriedFatPowderProducts} />
    </>
  );
}
