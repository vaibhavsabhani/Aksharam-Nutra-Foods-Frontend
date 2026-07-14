import type { ProductItem } from "@/data/products";

interface ProductGridProps {
  title?: string;
  lead?: string;
  products: ProductItem[];
  variant?: "default" | "application";
}

export function ProductGrid({
  title,
  lead,
  products,
  variant = "default",
}: ProductGridProps) {
  const isApplicationVariant = variant === "application";

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      {title ? (
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-brand-ink md:text-4xl">
            {title}
          </h2>
          {lead ? <p className="mt-2 text-brand-muted">{lead}</p> : null}
        </div>
      ) : null}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product, i) => (
          <div key={`${product.title}-${i}`} className="text-center">
            <div
              className={
                isApplicationVariant
                  ? "group rounded-2xl border border-border/70 bg-white p-3 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-brand-bg/80 hover:shadow-md"
                  : "overflow-hidden rounded-xl border bg-white"
              }
            >
              <div className="overflow-hidden rounded-xl bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.title}
                  className={
                    isApplicationVariant
                      ? "h-36 w-full object-contain p-2 transition duration-300 group-hover:scale-105 sm:h-40"
                      : "aspect-square w-full object-cover"
                  }
                />
              </div>
              {isApplicationVariant ? (
                <h3 className="mt-3 text-sm font-semibold text-brand-ink transition group-hover:text-brand">
                  {product.title}
                </h3>
              ) : null}
            </div>
            {!isApplicationVariant ? (
              <h3 className="mt-3 text-sm font-semibold text-brand-ink">
                {product.title}
              </h3>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
