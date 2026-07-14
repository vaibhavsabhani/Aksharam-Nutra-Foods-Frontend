import Link from "next/link";

interface Category {
  href: string;
  image: string;
  title: string;
}

const categories: Category[] = [
  { href: "/spray-dried", image: "/products/Spray Dried Fruit Powder/Mango.jpg", title: "Spray Dried" },
  { href: "/dehydrated-products", image: "/products/dehydrated/potato.jpg", title: "Dehydrated" },
  { href: "/freeze-dried", image: "/products/Spray Dried Fruit Powder/strawberry.jpg", title: "Freeze Dried" },
  { href: "/smoothies", image: "/images/Mango Smoothies.png", title: "Smoothies" },
  { href: "/indian-herbal-extract", image: "/products/Spray Dried Fruit Powder/amla.png", title: "Indian Herbal Extract" },
];

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-10 text-3xl font-bold text-brand-ink md:text-4xl">Our Categories</h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
        {categories.map((cat) => (
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
  );
}
