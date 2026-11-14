import Link from "next/link";
import type { CategoryItem } from "@/types";

interface CategoryCardProps {
  category: CategoryItem;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={category.href} className="group text-center block">
      <div className="overflow-hidden rounded-xl border bg-white shadow-xs transition duration-300 hover:shadow-md hover:-translate-y-0.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={category.image}
          alt={category.title}
          className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base font-semibold text-brand-ink transition group-hover:text-brand line-clamp-2">
        {category.title}
      </h3>
    </Link>
  );
}
