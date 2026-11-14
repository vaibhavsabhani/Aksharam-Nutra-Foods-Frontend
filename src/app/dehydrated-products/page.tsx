import type { Metadata } from "next";
import { HeroBanner, ProductIntro, ExtraContentBlock } from "@/components/sections";
import { FeatureBulletList } from "@/components/common/FeatureBulletList";

export const metadata: Metadata = {
  title: "Dehydrated Products",
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
    <section className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 2xl:py-20">
      <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-2 lg:gap-14 2xl:gap-20">
        <div className={`flex justify-center ${reverseImage ? "md:order-2" : "md:order-1"}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            className="w-full max-h-[350px] sm:max-h-[450px] 2xl:max-h-[600px] rounded-2xl object-cover shadow-sm"
          />
        </div>
        <div className={reverseImage ? "md:order-1" : "md:order-2"}>
          {eyebrow ? (
            <span className="mb-2 block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-brand-ink tracking-tight">{title}</h2>
          {paragraph ? <p className="mt-3 sm:mt-4 text-sm sm:text-base 2xl:text-lg leading-relaxed text-brand-muted">{paragraph}</p> : null}
          <FeatureBulletList items={items} columns={2} className="mt-5 sm:mt-6" />
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
      <section className="bg-white py-10 sm:py-16 2xl:py-20 shadow-xs border-y border-border/60">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-brand-ink tracking-tight">
              Premium Spices & Herbs
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-brand-muted">
              Available in Whole and Powder forms, harvested at the peak of freshness.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-4">
            {spicesThumbnails.map((item) => (
              <div key={item.title} className="text-center group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="mx-auto size-24 sm:size-32 md:size-36 lg:size-40 rounded-full border-2 sm:border-4 border-white object-cover shadow-sm transition duration-300 group-hover:scale-105"
                />
                <h3 className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base font-bold text-brand-ink">{item.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 rounded-2xl border bg-brand-bg p-4 sm:p-8 md:p-10 shadow-xs">
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-3">
              {spicesPanels.map((panel) => (
                <div key={panel.heading}>
                  <h4 className="mb-2.5 sm:mb-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand">
                    {panel.heading}
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm leading-relaxed">
                    {panel.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-brand-ink">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-accent" />
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
