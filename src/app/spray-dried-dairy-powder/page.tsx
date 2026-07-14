import type { Metadata } from "next";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { sprayDriedDairyPowderProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Spray Dried Dairy Powder",
  description: "",
};

export default function SprayDriedDairyPowderPage() {
  return (
    <>
      <HeroBanner title="Spray Dried Dairy Powder" />
      <ProductGrid products={sprayDriedDairyPowderProducts} />
    </>
  );
}
