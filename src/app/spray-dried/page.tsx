import type { Metadata } from "next";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { CategoryCard } from "@/components/common/CategoryCard";
import { FeatureBulletList } from "@/components/common/FeatureBulletList";
import { sprayDriedCategoryLinks } from "@/data/products";

export const metadata: Metadata = {
  title: "Spray Dried Products",
};

const excellencePoints = [
  "100% Authentic Raw Materials",
  "Preserves Natural Taste & Aroma",
  "High Solubility and Stability",
  "No Artificial Additives",
];

export default function SprayDriedPage() {
  return (
    <>
      <HeroBanner title="Spray Dried Products" />

      {/* Categories Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-brand-ink md:text-3xl">
            Explore Our Spray Dried Categories
          </h2>
          <p className="mt-2 text-brand-muted">
            We provide high-quality spray-dried ingredients that preserve the natural essence and
            nutritional value of the raw materials.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {sprayDriedCategoryLinks.map((cat) => (
            <CategoryCard key={cat.href} category={cat} />
          ))}
        </div>
      </section>

      {/* Excellence of Spray Drying Section */}
      <section className="bg-brand-bg py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-brand-ink md:text-3xl">
                The Excellence of Spray Drying
              </h2>
              <p className="mt-4 text-brand-muted">
                Our spray drying process is designed to deliver consistent quality and purity. By
                transforming liquid extracts into fine, stable powders, we ensure that our
                products are easy to store, transport, and use in various applications.
              </p>
              <FeatureBulletList items={excellencePoints} className="mt-6" />
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/abt-2.jpg"
                alt="Spray Drying Process"
                className="w-full rounded-2xl object-cover shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
