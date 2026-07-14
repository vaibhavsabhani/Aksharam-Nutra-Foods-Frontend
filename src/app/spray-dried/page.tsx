import type { Metadata } from "next";
import Link from "next/link";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { sprayDriedCategoryLinks } from "@/data/products";

export const metadata: Metadata = {
  title: "Spray Dried Products",
  description:
    "Premium Spray Dried Products including Fruit, Vegetable, Fat, and Dairy Powders.",
  keywords: "spray dried, fruit powder, vegetable powder, fat powder, dairy powder",
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
            <Link key={cat.href} href={cat.href} className="group text-center">
              <div className="overflow-hidden rounded-xl border bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="aspect-square w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-brand-ink group-hover:text-brand">
                {cat.title}
              </h3>
            </Link>
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
              <ul className="mt-6 space-y-3">
                {excellencePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-brand-ink">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
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
