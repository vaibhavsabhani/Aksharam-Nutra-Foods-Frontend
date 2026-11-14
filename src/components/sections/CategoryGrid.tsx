import { CategoryCard } from "@/components/common/CategoryCard";
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
    <section className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 2xl:py-24">
      <h2 className="mb-6 sm:mb-10 text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-brand-ink tracking-tight">
        Our Categories
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-3 md:grid-cols-5 xl:gap-8">
        {categories.map((cat) => (
          <CategoryCard key={cat.href} category={cat} />
        ))}
      </div>
    </section>
  );
}
