import type { Metadata } from "next";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { ExtraContentBlock } from "@/components/sections/ExtraContentBlock";

export const metadata: Metadata = {
  title: "Dehydrated Products",
  description: "",
};

interface DehydratedSectionProps {
  eyebrow?: string;
  title: string;
  paragraph?: string;
  items: string[];
  image: string;
  imageAlt: string;
  reverseImage?: boolean;
}

function DehydratedSection({
  eyebrow,
  title,
  paragraph,
  items,
  image,
  imageAlt,
  reverseImage,
}: DehydratedSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className={reverseImage ? "md:order-2" : "md:order-1"}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            className="w-full rounded-2xl object-cover shadow-sm"
          />
        </div>
        <div className={reverseImage ? "md:order-1" : "md:order-2"}>
          {eyebrow ? (
            <span className="mb-2 block text-sm font-bold uppercase tracking-wide text-brand">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="text-2xl font-bold text-brand-ink md:text-3xl">{title}</h2>
          {paragraph ? <p className="mt-4 text-brand-muted">{paragraph}</p> : null}
          <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-brand-ink">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const spicesThumbnails = [
  { image: "/products/dehydrated/dehydrated-green-chilli-flakes-500x500.webp", title: "Dry Chilly" },
  { image: "/products/dehydrated/amchur.jpg", title: "Amchur Powder" },
  { image: "/products/dehydrated/Spinach-Leaves-1000x1000-1.png", title: "Herbal Leaves" },
  { image: "/products/dehydrated/dehydrate.jpg", title: "Spices Blend" },
];

const spicesPanels = [
  {
    heading: "Core Spices",
    items: ["Dry Red Chilly", "Dry Green Chilly", "Turmeric Powder", "Cumin Powder", "Fennel Seeds"],
  },
  {
    heading: "Dried Leaves",
    items: ["Dried Curry Leaves", "Dried Mint Leaves", "Dried Spinach Leaves", "Dried Fenugreek Leaves"],
  },
  {
    heading: "Specialty Powders",
    items: ["Aamchur Powder", "Lemon Powder", "Spinach Powder", "Peanuts (Bold/Java/TJ)"],
  },
];

export default function DehydratedProductsPage() {
  return (
    <>
      <HeroBanner title="Dehydrated Products" />

      <ProductIntro
        title="Dehydrated Products"
        paragraphs={[
          "Dehydrated products from the leading dealer in India. From dehydrated fruits and vegetables to premium herbs and spices, we provide a complete range of high-quality ingredients. Experience the convenience and long shelf life of our premium products, perfectly crafted to elevate your culinary creations.",
          "Aksharam Nutra Foods Pvt Ltd leverages advanced dehydration technology to preserve the natural goodness of ingredients. Based in Surendranagar, Gujarat, our dedicated facility ensures that every product meets the highest standards of purity, making us a trusted partner for industries worldwide.",
        ]}
        image="/products/dehydrated/dehydrate.jpg"
      />

      <DehydratedSection
        eyebrow="Premium Range"
        title="Dehydrated Onion"
        paragraph="Our onions are sourced from the best farms in Gujarat and processed using low-temperature dehydration to maintain their sharp flavor and nutritional profile."
        items={[
          "Kibbled / Flakes",
          "Fine Powder",
          "Medium Granules",
          "Chopped Onion",
          "Minced Onion",
          "Crispy Fried Onion",
          "Toasted Flakes",
          "Toasted Powder",
        ]}
        image="/products/dehydrated/onion-powder-500x500.webp"
        imageAlt="Onion"
      />

      <DehydratedSection
        eyebrow="Industrial Standard"
        title="Dehydrated Garlic"
        paragraph="Known for its potent aroma and long shelf life, our dehydrated garlic is a staple for food processors and spice blenders worldwide."
        items={[
          "Garlic Flakes (A-Grade)",
          "Garlic Powder",
          "Garlic Granules",
          "Garlic Chopped",
          "Garlic Minced",
        ]}
        image="/products/dehydrated/dehydrated-garlic-flakes-500x500.webp"
        imageAlt="Garlic"
        reverseImage
      />

      {/* Premium Spices & Herbs */}
      <section className="bg-white py-16 shadow-sm">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-brand-ink md:text-3xl">
              Premium Spices & Herbs
            </h2>
            <p className="mt-2 text-brand-muted">
              Available in Whole and Powder forms, harvested at the peak of freshness.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {spicesThumbnails.map((item) => (
              <div key={item.title} className="text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="mx-auto h-[150px] w-[150px] rounded-full border-4 border-white object-cover shadow-sm"
                />
                <h3 className="mt-3 text-sm font-bold text-brand-ink">{item.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border bg-brand-bg p-8 shadow-sm md:p-10">
            <div className="grid gap-8 sm:grid-cols-3">
              {spicesPanels.map((panel) => (
                <div key={panel.heading}>
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-brand">
                    {panel.heading}
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {panel.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-brand-ink">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DehydratedSection
        title="Other Dehydrated Products"
        items={[
          "Dried Hibiscus Flower",
          "Ginger (Flakes/Powder)",
          "Beet Root Powder",
          "Potato (Flakes/Powder)",
          "Tamarind Powder",
        ]}
        image="/products/dehydrated/potato.jpg"
        imageAlt="Others"
      />

      <ExtraContentBlock />
    </>
  );
}
