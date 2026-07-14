import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { ExtraContentBlock } from "@/components/sections/ExtraContentBlock";
import { CoreValuesCounters } from "@/components/sections/CoreValuesCounters";
import {
  dehydratedDealerProducts,
  seasoningMasalaProducts,
  redChilliProducts,
  type ProductItem,
} from "@/data/products";
import { companyIntro } from "@/data/constants";
import {
  allDealerSlugs,
  getDealerSeo,
  resolveDealerSlug,
  type DealerCategoryKey,
} from "@/lib/dealerRoutes";

export async function generateStaticParams() {
  return allDealerSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolveDealerSlug(slug);
  if (!resolved) return {};

  const { category, city } = resolved;
  const seo = getDealerSeo(slug, category, city);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: seo.canonicalPath ? { canonical: seo.canonicalPath } : undefined,
    openGraph: seo.og
      ? {
          type: "article",
          title: seo.og.title,
          description: seo.og.description,
          images: [seo.og.image],
          url: seo.canonicalPath,
          siteName: "Aksharam Nutra Foods",
        }
      : undefined,
    twitter: seo.twitterTitle
      ? {
          card: "summary",
          title: seo.twitterTitle,
          description: seo.og?.description,
        }
      : undefined,
  };
}

const productsByCategory: Record<DealerCategoryKey, ProductItem[]> = {
  dehydrated: dehydratedDealerProducts,
  "seasoning-masala": seasoningMasalaProducts,
  "red-chilli": redChilliProducts,
};

const imageByCategory: Record<DealerCategoryKey, string> = {
  dehydrated: "/products/dehydrated/dehydrate.jpg",
  "seasoning-masala": "/products/seasoning-masala/masala.jpg",
  "red-chilli": "/products/red chilli/red-chilli-powder.png",
};

function introParagraphs(category: DealerCategoryKey, cityName: string): string[] {
  if (category === "seasoning-masala") {
    return [
      `Seasoning masala dealer in ${cityName}. Elevate your dishes with our premium spices and seasonings. Unlock a world of flavor with our carefully sourced and expertly blended ingredients. Enhance every meal and delight your taste buds with our authentic Indian flavors.`,
      companyIntro,
    ];
  }
  if (category === "red-chilli") {
    return [
      "Get Best Quotation of Masala's of Your industry shops and reselling. we have Dealing of these ingredient since from last 5 years. Choose us to grow your business.",
      companyIntro,
    ];
  }
  return [
    "Dehydrate products from the leading dealer in India. From dehydrated fruits and vegetables to herbs and spices, we have it all. Experience the convenience and long shelf life of our premium products. Shop now and elevate your culinary creations with the finest ingredients.",
    companyIntro,
  ];
}

export default async function DealerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resolved = resolveDealerSlug(slug);

  if (!resolved) {
    notFound();
  }

  const { category, city } = resolved;
  const title = `${category.displayName} Dealer in ${city.name}`;

  return (
    <>
      <HeroBanner title={title} />
      <ProductIntro
        title={title}
        paragraphs={introParagraphs(category.key, city.name)}
        image={imageByCategory[category.key]}
      />
      <WhyChooseUs
        image="/abt-2.jpg"
        description="Aksharam Nutra Foods Pvt Ltd is a leading manufacturer and supplier of spray dried fruit, vegetables, and fat powder products."
      />
      <ProductGrid products={productsByCategory[category.key]} />
      <ExtraContentBlock />
      <CoreValuesCounters />
    </>
  );
}
