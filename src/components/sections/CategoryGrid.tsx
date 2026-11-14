"use client";

import { CategoryCard } from "@/components/common/CategoryCard";
import { KineticText } from "@/components/common/KineticText";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import type { CategoryItem } from "@/types";

const categories: CategoryItem[] = [
  { href: "/spray-dried", image: "/products/Spray Dried Fruit Powder/Mango.jpg", title: "Spray Dried" },
  { href: "/dehydrated-products", image: "/products/dehydrated/potato.jpg", title: "Dehydrated" },
  { href: "/freeze-dried", image: "/products/Spray Dried Fruit Powder/strawberry.jpg", title: "Freeze Dried" },
  { href: "/smoothies", image: "/images/Mango Smoothies.png", title: "Smoothies" },
  { href: "/indian-herbal-extract", image: "/products/Spray Dried Fruit Powder/amla.png", title: "Indian Herbal Extract" },
];

export function CategoryGrid() {
  return (
    <section className="relative overflow-hidden mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 2xl:py-28">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-brand-ink tracking-tight">
          <KineticText text="Our Categories" as="span" stagger={40} delay={50} />
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 md:grid-cols-5 xl:gap-8">
        {categories.map((cat, idx) => (
          <ScrollReveal
            key={cat.href}
            animation="fade-up"
            delay={100 + idx * 80}
            duration={700}
          >
            <CategoryCard category={cat} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
