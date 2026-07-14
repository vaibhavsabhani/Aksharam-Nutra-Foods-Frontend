import type { ProductItem } from "@/data/products";

interface ProductGridProps {
  title?: string;
  lead?: string;
  products: ProductItem[];
}

export function ProductGrid({ title, lead, products }: ProductGridProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      {title ? (
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-brand-ink md:text-4xl">{title}</h2>
          {lead ? <p className="mt-2 text-brand-muted">{lead}</p> : null}
        </div>
      ) : null}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product, i) => (
          <div key={`${product.title}-${i}`} className="text-center">
            <div className="overflow-hidden rounded-xl border bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.title}
                className="aspect-square w-full object-cover"
              />
            </div>
            <h3 className="mt-3 text-sm font-semibold text-brand-ink">{product.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
