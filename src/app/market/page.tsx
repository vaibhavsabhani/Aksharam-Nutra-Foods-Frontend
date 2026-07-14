import type { Metadata } from "next";
import Link from "next/link";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { dehydratedCities, seasoningMasalaCities, redChilliCities, type City } from "@/data/cities";

export const metadata: Metadata = {
  title: "Market",
  description: "",
};

interface DealerListProps {
  heading: string;
  cities: City[];
  hrefPrefix: string;
  linkPrefix: string;
}

function DealerList({ heading, cities, hrefPrefix, linkPrefix }: DealerListProps) {
  return (
    <div className="py-8">
      <h2 className="mb-6 text-xl font-bold text-brand-ink md:text-2xl">{heading}</h2>
      <ul className="columns-1 gap-8 sm:columns-2 lg:columns-3">
        {cities.map((city) => (
          <li key={city.slug} className="mb-2 break-inside-avoid">
            <Link href={`/${hrefPrefix}-${city.slug}`} className="text-brand-muted hover:text-brand">
              {linkPrefix} {city.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MarketPage() {
  return (
    <>
      <HeroBanner title="Aksharam Nutra Market Place" />

      <section className="mx-auto max-w-6xl divide-y px-4 py-16">
        <DealerList
          heading="Dehydrated Products Dealers"
          cities={dehydratedCities}
          hrefPrefix="dehydrated-products-dealer-in"
          linkPrefix="Dehydrated Products Dealer in"
        />
        <DealerList
          heading="Seasoning Masala Dealers"
          cities={seasoningMasalaCities}
          hrefPrefix="seasoning-masala-dealer-in"
          linkPrefix="Seasoning Masala Dealer in"
        />
        <DealerList
          heading="Red Chilli Powder Dealers"
          cities={redChilliCities}
          hrefPrefix="red-chilli-powder-dealer-in"
          linkPrefix="Red Chilli Powder Dealer in"
        />
      </section>
    </>
  );
}
