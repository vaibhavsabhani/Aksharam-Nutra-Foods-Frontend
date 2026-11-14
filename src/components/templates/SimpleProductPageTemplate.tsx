import { HeroBanner } from "@/components/sections/HeroBanner";
import { ProductGrid } from "@/components/sections/ProductGrid";
import type { ProductItem } from "@/types";

interface SimpleProductPageTemplateProps {
  title: string;
  products: ProductItem[];
}

export function SimpleProductPageTemplate({
  title,
  products,
}: SimpleProductPageTemplateProps) {
  return (
    <>
      <HeroBanner title={title} />
      <ProductGrid products={products} />
    </>
  );
}
