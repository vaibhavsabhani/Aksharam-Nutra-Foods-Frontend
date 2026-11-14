import type { ProductItem } from "@/types";

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
    <section className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 2xl:py-24">
      {title ? (
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-brand-ink tracking-tight">
            {title}
          </h2>
          {lead ? <p className="mt-2 text-sm sm:text-base md:text-lg text-brand-muted">{lead}</p> : null}
        </div>
      ) : null}
      <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 xl:gap-8">
        {products.map((product, i) => (
          <div key={`${product.title}-${i}`} className="text-center group">
            <div
              className={
                isApplicationVariant
                  ? "rounded-2xl border border-border/70 bg-white p-3 text-center shadow-xs transition duration-300 hover:-translate-y-1 hover:bg-brand-bg/80 hover:shadow-md"
                  : "overflow-hidden rounded-xl border bg-white shadow-xs transition duration-300 hover:shadow-md hover:-translate-y-0.5"
              }
            >
              <div className="overflow-hidden rounded-lg bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.title}
                  className={
                    isApplicationVariant
                      ? "h-32 sm:h-36 md:h-40 w-full object-contain p-2 transition duration-300 group-hover:scale-105"
                      : "aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
                  }
                />
              </div>
              {isApplicationVariant ? (
                <h3 className="mt-3 text-xs sm:text-sm font-semibold text-brand-ink transition group-hover:text-brand line-clamp-2">
                  {product.title}
                </h3>
              ) : null}
            </div>
            {!isApplicationVariant ? (
              <h3 className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base font-semibold text-brand-ink transition group-hover:text-brand">
                {product.title}
              </h3>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
