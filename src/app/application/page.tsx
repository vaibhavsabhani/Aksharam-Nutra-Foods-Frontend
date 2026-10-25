import type { Metadata } from "next";
import Link from "next/link";
import { HeroBanner } from "@/components/sections/HeroBanner";

export const metadata: Metadata = {
  title: "Application",
  description:
    "Explore versatile fruit, vegetable, dairy and herbal ingredients for food, beverage and nutrition applications.",
};

interface ApplicationSectionData {
  title: string;
  subtitle: string;
  description: string;
  applications: string[];
  closing: string;
}

const applicationSections: ApplicationSectionData[] = [
  {
    title: "Spray-Dried Fruits & Vegetables",
    subtitle: "Capturing Nature in a Convenient Powder Format",
    description:
      "Spray-dried fruit and vegetable powders offer a versatile ingredient format for manufacturers seeking convenient handling, consistent incorporation and flexibility in product development. Produced by converting suitable liquid feed into powder through spray drying, these ingredients can be incorporated into a wide range of formulations, depending on their individual specifications and processing characteristics.",
    applications: [
      "Food & Bakery: Cakes, biscuits, cookies, fillings, dessert mixes and bakery premixes.",
      "Beverages: Instant drink mixes, fruit-based beverage powders, smoothies and flavoured drink formulations.",
      "Confectionery: Candies, coatings, sweets and fruit-flavoured confectionery.",
      "Dairy & Desserts: Flavoured milk powders, yoghurt preparations, ice cream mixes and dessert formulations.",
      "Seasonings & Savoury Foods: Soup mixes, seasoning blends, sauces, dips and instant meal preparations.",
      "Convenience Foods: Instant food mixes, ready-to-prepare products and dry formulation blends.",
    ],
    closing:
      "Our spray-dried ingredient range helps product developers explore different flavour profiles and formulation possibilities across multiple food categories.",
  },
  {
    title: "Spray-Dried Dairy Products",
    subtitle: "Dairy Ingredients for Modern Food Formulations",
    description:
      "Spray-dried dairy ingredients are widely used in food manufacturing because of their convenient powder format, ease of incorporation and versatility across different formulations. Depending on the specific dairy ingredient and its functional properties, these powders can contribute to flavour, body, texture, solids content and other formulation requirements.",
    applications: [
      "Bakery & Confectionery: Biscuits, cakes, chocolates, cookies, fillings and confectionery products.",
      "Dairy & Frozen Desserts: Ice cream mixes, dessert powders, yoghurt preparations and dairy-based blends.",
      "Beverages: Dairy-based drink powders, milk beverages and instant beverage formulations.",
      "Snacks & Savoury Foods: Seasoning systems, snack coatings, soups, sauces and savoury mixes.",
      "Processed Foods: Ready-to-cook meals, instant mixes and prepared food products.",
      "Nutrition Products: Selected nutritional powders and specialised food formulations, subject to the ingredient's specifications and regulatory requirements.",
    ],
    closing:
      "Our dairy ingredient category supports manufacturers in exploring suitable formulations for a variety of food processing and product development needs.",
  },
  {
    title: "Dehydrated Fruits & Vegetables",
    subtitle: "Natural Ingredients for Everyday Food Innovation",
    description:
      "Dehydrated fruits and vegetables provide convenient ingredient options for food manufacturers looking to incorporate fruit- and vegetable-based components into dry mixes, prepared foods and other food applications. Their suitability depends on the cut or powder format, moisture level, flavour profile and intended processing conditions.",
    applications: [
      "Ready-to-Eat & Ready-to-Cook Foods: Instant meals, packaged food mixes and convenient meal solutions.",
      "Soups & Sauces: Soup mixes, sauce bases, gravies and culinary preparations.",
      "Seasonings & Spice Blends: Flavouring blends, savoury coatings and seasoning systems.",
      "Bakery & Snacks: Selected bakery mixes, savoury snacks and speciality food formulations.",
      "Food Processing: Ingredient blends, stuffing mixes and prepared food products.",
      "Retail Food Products: Dry mixes and convenient ingredients for home cooking.",
    ],
    closing:
      "Dehydrated ingredients help manufacturers develop practical food solutions while offering flexibility in product design and processing.",
  },
  {
    title: "Freeze-Dried Fruits & Vegetables",
    subtitle: "Preserving the Character of Fruits and Vegetables",
    description:
      "Freeze-drying is a low-temperature dehydration process that removes moisture under reduced pressure. Depending on the raw material and process conditions, it can help retain much of the ingredient's original shape, colour, flavour and structure. Freeze-dried fruit and vegetable powders offer an additional option for manufacturers developing products where distinctive flavour profiles and ingredient characteristics are important.",
    applications: [
      "Smoothies & Beverage Blends: Fruit and vegetable powder blends for convenient beverage preparation.",
      "Functional Food Formulations: Specialised food mixes developed around selected fruit and vegetable ingredients.",
      "Bakery & Desserts: Cakes, cookies, chocolates, dessert toppings and speciality bakery products.",
      "Confectionery: Fruit-flavoured sweets, chocolate inclusions and confectionery formulations.",
      "Snacks & Nutrition Bars: Selected snack products, cereal bars, granola and dry blends.",
      "Instant Food Products: Powdered mixes, convenience formulations and speciality food preparations.",
    ],
    closing:
      "Freeze-dried ingredients offer product developers opportunities to create distinctive formulations where ingredient identity and sensory characteristics are key considerations.",
  },
  {
    title: "Herbal Extracts",
    subtitle: "Botanical Ingredients for Diverse Applications",
    description:
      "Herbal extracts are derived from selected botanical materials using appropriate extraction processes. Their composition, concentration and intended applications vary according to the plant species, plant part, extraction method and standardisation parameters. At Aksharam Nutra Foods, our herbal extract category is intended to support businesses exploring botanical ingredients for suitable food, nutrition and other permitted applications.",
    applications: [
      "Nutraceutical Formulations: Ingredient development for dietary supplements and other nutritional products, where permitted.",
      "Functional Food & Beverage Development: Selected botanical ingredients for specialised food and beverage concepts, subject to applicable regulations.",
      "Capsules & Tablets: Formulations developed by supplement manufacturers according to ingredient specifications and dosage requirements.",
      "Powder Blends: Botanical blends and customised ingredient combinations for suitable applications.",
      "Herbal Preparations: Products developed using selected plant extracts for permitted traditional or contemporary applications.",
      "Personal Care & Cosmetics: Selected botanical extracts for cosmetic formulations, where the ingredient grade, safety data and intended use are suitable.",
    ],
    closing:
      "Every herbal extract has its own technical profile. Selection should consider botanical identity, active constituent specifications, solvent system, testing requirements and the regulations applicable to the finished product and target market.",
  },
];

function ApplicationSection({ section, index }: { section: ApplicationSectionData; index: number }) {
  return (
    <section className={`border-t border-border/60 ${index % 2 === 0 ? "bg-white" : "bg-brand-bg"}`}>
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-4xl">
          <div className="flex items-start gap-4">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-brand-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
                {section.title}
              </h2>
              <p className="mt-2 text-xl font-medium text-brand md:text-2xl">{section.subtitle}</p>
            </div>
          </div>
          <p className="mt-6 text-base leading-8 text-brand-muted md:text-lg">
            {section.description}
          </p>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-bold text-brand-ink">Applications</h3>
            <span className="h-px flex-1 bg-border" />
          </div>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {section.applications.map((application) => {
              const [label, detail] = application.split(": ");

              return (
                <li
                  key={application}
                  className="rounded-md border border-border/70 border-t-2 border-t-brand-accent bg-white px-5 py-4 text-sm leading-7 text-brand-muted shadow-sm"
                >
                  <strong className="font-semibold text-brand-ink">{label}:</strong>{" "}
                  {detail}
                </li>
              );
            })}
          </ul>
          <div className="mt-8 border-l-4 border-brand-accent bg-brand/5 px-5 py-5 md:px-6">
            <p className="text-sm leading-7 text-brand-muted md:text-base">{section.closing}</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default function ApplicationPage() {
  return (
    <>
      <HeroBanner
        title="Ingredient Applications"
        subtitle="Practical ingredient solutions for ambitious product development."
      />
      <section className="bg-brand-bg">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Ingredient Applications
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-ink md:text-5xl">
            Versatile Ingredients. Endless Possibilities.
          </h2>
          <div className="mx-auto mt-7 max-w-3xl space-y-5 text-base leading-8 text-brand-muted md:text-lg">
            <p>
              At Aksharam Nutra Foods, we bring together a diverse range of fruit and vegetable
              powders, freeze-dried ingredients, dairy powders and herbal extracts to support
              innovation across the global food, beverage and nutrition industries.
            </p>
            <p>
              From everyday food applications to specialised product formulations, our ingredients
              offer manufacturers the flexibility to explore new textures, flavours, colours and
              product concepts. We believe that the right ingredient can inspire better ideas,
              simplify product development and create new opportunities in an evolving marketplace.
            </p>
          </div>
        </div>
      </section>
      {applicationSections.map((section, index) => (
        <ApplicationSection key={section.title} section={section} index={index} />
      ))}
      <section className="bg-brand px-4 py-16 text-brand-foreground md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Finding the Right Ingredient for Your Application
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Let&apos;s Develop Your Next Product Together.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-brand-foreground/85 md:text-lg">
              <p>
                Every formulation begins with a specific requirement. Whether you are creating a
                fruit-based beverage, a convenient food mix, a dairy formulation or a botanical
                ingredient blend, choosing the right ingredient is an important step towards
                achieving your product goals.
              </p>
              <p>
                Our team welcomes enquiries from food manufacturers, product developers, ingredient
                distributors and nutrition brands seeking ingredient information and sourcing
                opportunities.
              </p>
              <p>
                Share your application, required specifications and target market with us. Let&apos;s
                explore the possibilities together.
              </p>
            </div>
          </div>
          <div className="border-t border-brand-foreground/20 pt-6 md:w-64 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="text-lg font-semibold">Aksharam Nutra Foods</p>
            <p className="mt-2 text-sm text-brand-foreground/75">Ingredients That Inspire Innovation.</p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-brand-accent px-5 py-3 text-sm font-semibold text-brand-ink transition hover:bg-brand-accent/85"
            >
              Start an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
