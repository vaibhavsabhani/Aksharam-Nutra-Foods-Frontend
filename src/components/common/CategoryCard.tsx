"use client";

import Link from "next/link";
import type { CategoryItem } from "@/types";
import { InteractiveTiltCard } from "@/components/common/InteractiveTiltCard";
import { ArrowUpRight } from "lucide-react";

interface CategoryCardProps {
  category: CategoryItem;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={category.href} className="group block text-center">
      <InteractiveTiltCard
        maxTilt={8}
        className="rounded-2xl border border-black/5 bg-white dark:bg-neutral-900 shadow-sm transition-all duration-300 group-hover:shadow-2xl group-hover:border-brand/30"
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={category.image}
            alt={category.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-115"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Corner Icon indicator */}
          <div className="absolute top-2.5 right-2.5 flex size-7 items-center justify-center rounded-full bg-white/90 text-brand-ink opacity-0 shadow-md backdrop-blur-xs transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-75">
            <ArrowUpRight className="size-4 text-brand" />
          </div>
        </div>
      </InteractiveTiltCard>

      <h3 className="mt-3 text-xs sm:text-sm md:text-base font-bold text-brand-ink transition-colors duration-300 group-hover:text-brand line-clamp-2">
        {category.title}
      </h3>
    </Link>
  );
}
