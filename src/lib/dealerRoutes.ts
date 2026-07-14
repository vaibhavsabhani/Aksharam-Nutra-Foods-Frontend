import { dehydratedCities, seasoningMasalaCities, redChilliCities, type City } from "@/data/cities";

// Next.js dynamic segments must occupy an entire path segment (e.g. `[city]`),
// not just part of one — so "dehydrated-products-dealer-in-[city]" as a folder
// name does NOT match "/dehydrated-products-dealer-in-mumbai". Instead this
// whole flat slug is handled by a single `app/[slug]/page.tsx` catch-segment
// that parses out the category prefix + city itself.

export type DealerCategoryKey = "dehydrated" | "seasoning-masala" | "red-chilli";

export interface DealerCategory {
  key: DealerCategoryKey;
  prefix: string;
  displayName: string;
  cities: City[];
}

export const dealerCategories: DealerCategory[] = [
  {
    key: "dehydrated",
    prefix: "dehydrated-products-dealer-in-",
    displayName: "Dehydrated Products",
    cities: dehydratedCities,
  },
  {
    key: "seasoning-masala",
    prefix: "seasoning-masala-dealer-in-",
    displayName: "Seasoning Masala",
    cities: seasoningMasalaCities,
  },
  {
    key: "red-chilli",
    prefix: "red-chilli-powder-dealer-in-",
    displayName: "Red Chilli Powder",
    cities: redChilliCities,
  },
];

export function resolveDealerSlug(slug: string) {
  for (const category of dealerCategories) {
    if (slug.startsWith(category.prefix)) {
      const citySlug = slug.slice(category.prefix.length);
      const city = category.cities.find((c) => c.slug === citySlug);
      if (city) return { category, city };
    }
  }
  return null;
}

export function allDealerSlugs(): string[] {
  return dealerCategories.flatMap((category) =>
    category.cities.map((city) => `${category.prefix}${city.slug}`)
  );
}

export interface DealerSeo {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  og?: {
    title: string;
    description: string;
    image: string;
  };
  twitterTitle?: string;
}

// The original site's <title>/meta tags for these dealer pages, extracted
// verbatim per file — the pattern is NOT uniform per category, so each
// city's real SEO title/description/keywords is looked up directly rather
// than generated. Cities with no entry here fall back to defaultDealerSeo.
//
// Two fixes applied vs. the literal source: `og:site_name` read "Makandar
// Argo" (an unrelated company left over from a copy-pasted template) and is
// corrected to "Aksharam Nutra Foods"; `twitter:card` read "Summary" which
// isn't a valid Twitter Card type and is normalized to "summary".
const dealerSeoOverrides: Record<string, DealerSeo> = {
  "seasoning-masala-dealer-in-mumbai": {
    title: "Seasoning Masala Dealer in Mumbai | Best Quality Masala",
    description:
      "Discover the finest seasoning masalas in mumbai! As a trusted dealer, we provide high-quality blends that elevate your dishes. Spice up your cooking today!",
    keywords:
      "seasoning masala dealer in mumbai, seasoning masala dealer, seasoning masala dealer in maharashta, seasoning masala dealer in mumbai, seasoning masala dealers, seasoning masala dealer.",
    canonicalPath: "/seasoning-masala-dealer-in-mumbai",
    og: {
      title: "#1 Aksharam Nutra Foods | Seasoning Masala Dealer in mumbai | Best Quality Masala",
      description:
        "Discover the finest seasoning masalas in mumbai! As a trusted dealer, we provide high-quality blends that elevate your dishes. Spice up your cooking today!",
      image: "/favicon.png",
    },
    twitterTitle: "Aksharam Nutra Foods | Seasoning Masala Dealer in mumbai | Best Quality Masala",
  },
  "seasoning-masala-dealer-in-maharashtra": {
    title: "Seasoning Masala Dealer in Maharashtra | Best Quality Masala",
    description:
      "Discover the finest seasoning masalas in Maharashtra! As a trusted dealer, we provide high-quality blends that elevate your dishes. Spice up your cooking today!",
    keywords:
      "seasoning masala dealer in maharashta, seasoning masala dealer in mumbai, seasoning masala dealers, seasoning masala dealer.",
    canonicalPath: "/seasoning-masala-dealer-in-maharashtra",
    og: {
      title:
        "#1 Aksharam Nutra Foods | Seasoning Masala Dealer in Maharashtra | Best Quality Masala",
      description:
        "Discover the finest seasoning masalas in Maharashtra! As a trusted dealer, we provide high-quality blends that elevate your dishes. Spice up your cooking today!",
      image: "/favicon.png",
    },
    twitterTitle:
      "Aksharam Nutra Foods | Seasoning Masala Dealer in Maharashtra | Best Quality Masala",
  },
  "seasoning-masala-dealer-in-gurgaon": {
    title: "Seasoning Masala Dealer in Gurgaon | Best Quality Masala",
    description:
      "Discover the finest seasoning masalas in gurgaon! As a trusted dealer, we provide high-quality blends that elevate your dishes. Spice up your cooking today!",
    keywords:
      "seasoning masala dealer in gurgaon, seasoning masala dealer, seasoning masala dealer in maharashta, seasoning masala dealer in mumbai, seasoning masala dealers, seasoning masala dealer.",
    canonicalPath: "/seasoning-masala-dealer-in-gurgaon",
    og: {
      title: "#1 Aksharam Nutra Foods | Seasoning Masala Dealer in gurgaon | Best Quality Masala",
      description:
        "Discover the finest seasoning masalas in gurgaon! As a trusted dealer, we provide high-quality blends that elevate your dishes. Spice up your cooking today!",
      image: "/favicon.png",
    },
    twitterTitle: "Aksharam Nutra Foods | Seasoning Masala Dealer in gurgaon | Best Quality Masala",
  },
};

// Default per-category <title> pattern for every other city, matching the
// original's plain (no rich-meta) template exactly — description/keywords
// were empty/placeholder junk on those source pages, so they stay empty here.
function defaultDealerSeo(category: DealerCategory, city: City): DealerSeo {
  const title =
    category.key === "seasoning-masala"
      ? `Seasoning Masala in ${city.name}`
      : `${category.displayName} Dealer in ${city.name}`;
  return { title, description: "" };
}

export function getDealerSeo(slug: string, category: DealerCategory, city: City): DealerSeo {
  return dealerSeoOverrides[slug] ?? defaultDealerSeo(category, city);
}
