"use client";

import Link from "next/link";
import { HeroBanner } from "@/components/sections";
import { KineticText } from "@/components/common/KineticText";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { InteractiveTiltCard } from "@/components/common/InteractiveTiltCard";
import { MagneticButton } from "@/components/common/MagneticButton";
import { InteractiveGlowBackground } from "@/components/common/InteractiveGlowBackground";
import { Sparkles, ArrowRight } from "lucide-react";

interface ApplicationDetailGroup {
  title: string;
  description: string;
  applications: string[];
  note: string;
}

interface ApplicationSectionData {
  id: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  description: string;
  applications: string[];
  closing: string;
  detailGroups?: ApplicationDetailGroup[];
}

const applicationSections: ApplicationSectionData[] = [
  {
    id: "spray-dried-fruits-vegetables",
    shortTitle: "Fruits & Vegetables",
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
    id: "spray-dried-dairy-products",
    shortTitle: "Dairy Products",
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
    id: "spray-dried-fat-powder",
    shortTitle: "Fat Powder",
    title: "Spray-Dried Fat Powder",
    subtitle: "Versatile Fat Ingredients for Innovative Food Applications",
    description:
      "Spray-dried fat powder is a versatile ingredient used in food manufacturing to incorporate fats and oils into powdered formulations. Produced by spray-drying a suitable fat or oil emulsion with appropriate carrier ingredients, it offers a convenient alternative to handling liquid fats in applications where powder-based ingredients are preferred. With its versatility, ease of blending and suitability for a variety of dry formulations, spray-dried fat powder supports product development across bakery, confectionery, dairy, beverages, snacks and convenience foods. Depending on its composition and functional characteristics, it can contribute to flavour, creaminess, mouthfeel, texture and the overall sensory profile of finished products. As food manufacturers continue to develop convenient, consistent and innovative products, spray-dried fat powder offers formulation flexibility for a wide range of industrial applications.",
    applications: [],
    detailGroups: [
      {
        title: "Bakery & Confectionery",
        description:
          "Spray-dried fat powder can be incorporated into selected bakery and confectionery formulations to contribute to richness, flavour and texture. Its powdered format makes it suitable for dry bakery premixes and other formulations where convenient ingredient handling and uniform blending are important.",
        applications: [
          "Cake mixes and bakery premixes",
          "Biscuits, cookies and crackers",
          "Muffin and pancake mixes",
          "Waffle and doughnut premixes",
          "Confectionery fillings and coatings",
          "Chocolate-based preparations, where compatible with the formulation",
          "Dessert powders and sweet bakery blends",
        ],
        note: "Suitability depends on melting behaviour, fat composition, carrier system and interaction with other ingredients.",
      },
      {
        title: "Dairy Products & Frozen Desserts",
        description:
          "Fat plays an important role in the flavour, creaminess, body and mouthfeel of many dairy-based foods and frozen desserts. Suitable spray-dried fat powders can support the development of products with desirable sensory characteristics.",
        applications: [
          "Ice cream and frozen dessert mixes",
          "Milk-based dessert powders",
          "Dairy beverage preparations",
          "Whipped topping mixes",
          "Cream-style soup formulations",
          "Custard and pudding powders",
          "Selected dairy-based premixes",
        ],
        note: "Final performance depends on compatibility with the dairy system, emulsification requirements and finished-product processing conditions.",
      },
      {
        title: "Beverages & Powdered Creamers",
        description:
          "Spray-dried fat powders can be used in selected beverage formulations where fat contributes to creaminess, flavour and mouthfeel. Their powdered format can simplify incorporation into instant beverage mixes and other dry preparations.",
        applications: [
          "Instant coffee and tea creamers",
          "Coffee and cappuccino premixes",
          "Instant chocolate drink powders",
          "Malt-based beverage mixes",
          "Powdered milkshake preparations",
          "Speciality beverage blends",
          "Selected plant-based beverage powders, where compatible",
        ],
        note: "Important considerations include wettability, dispersibility, overall formulation solubility and emulsion stability after reconstitution.",
      },
      {
        title: "Soups, Sauces & Savoury Preparations",
        description:
          "In savoury food manufacturing, suitable spray-dried fat powders can contribute to flavour, richness and mouthfeel while offering the convenience of a dry ingredient format.",
        applications: [
          "Instant soup powders",
          "Cream-style soup mixes",
          "Sauce and gravy premixes",
          "Instant noodle seasoning blends",
          "Pasta sauce preparations",
          "Savoury seasoning systems",
          "Ready-to-cook meal mixes",
          "Dry culinary preparations",
        ],
        note: "The choice of fat powder should reflect the desired flavour profile, heat exposure, dispersion characteristics and intended preparation method.",
      },
      {
        title: "Snacks & Processed Foods",
        description:
          "Spray-dried fat powder offers opportunities for food manufacturers developing snack products and processed foods in which fat contributes to flavour delivery, richness and sensory appeal.",
        applications: [
          "Seasoned snack coatings",
          "Savoury snack premixes",
          "Flavoured popcorn seasonings",
          "Crackers and savoury biscuits",
          "Extruded snack formulations",
          "Instant mashed potato mixes",
          "Prepared food blends",
          "Selected convenience food applications",
        ],
        note: "Powdered fat ingredients can support dry blending and help incorporate fat without directly handling liquid oil at that processing stage.",
      },
      {
        title: "Instant Foods & Convenience Products",
        description:
          "The demand for convenient, easy-to-prepare foods has created opportunities for powdered ingredients that can be blended, packed and distributed in dry formulations.",
        applications: [
          "Instant meal mixes",
          "Ready-to-cook food preparations",
          "Instant pasta and noodle sauces",
          "Dehydrated meal components",
          "Powdered side-dish mixes",
          "Instant rice and savoury preparations",
          "Convenience food premixes",
          "Dry food kits and meal bases",
        ],
        note: "Suitability depends on preparation method, moisture conditions, packaging requirements and desired sensory properties.",
      },
      {
        title: "Nutritional & Specialised Food Formulations",
        description:
          "Certain spray-dried fat powders may be suitable for specialised nutritional food formulations where a powdered lipid ingredient is required.",
        applications: [
          "Selected nutritional powder blends",
          "Powdered food supplements, where permitted",
          "Specialised food formulations",
          "High-energy food preparations",
          "Nutritional beverage mixes",
          "Customised food ingredient blends",
        ],
        note: "Selection must consider consumer group, nutritional composition, ingredient specifications and applicable regulatory requirements, including oxidation stability and microbiological quality.",
      },
      {
        title: "Industrial Food Manufacturing & Custom Blends",
        description:
          "Beyond individual food categories, spray-dried fat powder can be incorporated into customised ingredient systems developed to meet specific processing and formulation requirements.",
        applications: [
          "Industrial bakery ingredient blends",
          "Multi-component dry premixes",
          "Customised seasoning and flavour systems",
          "Food-service ingredient preparations",
          "Powdered bases for sauces and desserts",
          "Specialised food processing blends",
          "Contract formulation and product development",
        ],
        note: "Fat content, carrier selection, particle characteristics, bulk density, storage stability and processing compatibility should be evaluated before selection.",
      },
    ],
    closing:
      "Spray-dried fat powder provides food manufacturers with a flexible ingredient option for developing products across a diverse range of food categories. At Aksharam Nutra Foods, we understand that selecting the right ingredient involves consideration of formulation objectives, technical specifications, processing conditions and end-consumer expectations.",
  },
  {
    id: "dehydrated-fruits-vegetables",
    shortTitle: "Dehydrated",
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
    id: "freeze-dried-fruits-vegetables",
    shortTitle: "Freeze-Dried",
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
    id: "herbal-extracts",
    shortTitle: "Herbal Extracts",
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

const applicationSectionsInOrder = [
  applicationSections[0],
  applicationSections[2],
  applicationSections[1],
  ...applicationSections.slice(3),
];

function ApplicationSectionItem({
  section,
  index,
}: {
  section: ApplicationSectionData;
  index: number;
}) {
  return (
    <section
      id={section.id}
      className={`relative overflow-hidden border-t border-border/60 transition-colors duration-500 ${
        index % 2 === 0 ? "bg-white dark:bg-neutral-950" : "bg-brand-bg/60 dark:bg-neutral-900/60"
      }`}
    >
      {/* Background ambient lighting orb */}
      <div
        className={`pointer-events-none absolute size-96 rounded-full blur-3xl -z-10 ${
          index % 2 === 0
            ? "top-1/3 -right-24 bg-brand/5"
            : "top-1/3 -left-24 bg-brand-accent/10"
        }`}
      />

      <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24 2xl:py-32">
        {/* Header Block */}
        <div className="max-w-4xl 2xl:max-w-5xl">
          <div className="flex items-start gap-3.5 sm:gap-5">
            <span className="inline-flex size-11 sm:size-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-white font-mono text-sm sm:text-base font-extrabold shadow-md">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold tracking-tight text-brand-ink">
                <KineticText text={section.title} as="span" stagger={30} delay={40} />
              </h2>
              <p className="mt-1.5 sm:mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-brand">
                {section.subtitle}
              </p>
            </div>
          </div>

          <ScrollReveal animation="fade-up" delay={200} duration={700}>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg 2xl:text-xl leading-relaxed text-brand-muted font-normal">
              {section.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Applications Block */}
        <div className="mt-10 sm:mt-14">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-ink tracking-tight">
              Applications
            </h3>
            <span className="h-px flex-1 bg-gradient-to-r from-border via-border/50 to-transparent" />
          </div>

          {section.detailGroups ? (
            /* 8-Group Detailed Grid for Fat Powder */
            <div className="grid gap-5 sm:gap-6 md:grid-cols-2 2xl:gap-8">
              {section.detailGroups.map((group, groupIndex) => (
                <ScrollReveal
                  key={group.title}
                  animation="fade-up"
                  delay={100 + (groupIndex % 4) * 80}
                  duration={700}
                >
                  <InteractiveTiltCard
                    maxTilt={5}
                    perspective={1100}
                    className="group relative h-full flex flex-col justify-between rounded-3xl border border-black/8 dark:border-white/10 bg-white/95 dark:bg-neutral-900/90 p-5 sm:p-7 2xl:p-8 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-brand/40 hover:shadow-2xl"
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-start gap-3.5 mb-3">
                        <span className="font-mono text-xs sm:text-sm font-bold text-brand bg-brand/10 border border-brand/20 px-2.5 py-1 rounded-full">
                          {String(groupIndex + 1).padStart(2, "0")}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-brand-ink transition-colors duration-300 group-hover:text-brand">
                          {group.title}
                        </h4>
                      </div>

                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-brand-muted font-normal">
                        {group.description}
                      </p>

                      <div className="mt-5 pt-4 border-t border-border/60">
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                          Applications include
                        </p>
                        <ul className="mt-3 space-y-2 text-xs sm:text-sm leading-relaxed text-brand-muted">
                          {group.applications.map((application) => (
                            <li key={application} className="flex items-start gap-2">
                              <span className="size-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                              <span>{application}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5 border-t border-border/60 pt-3.5 text-xs leading-relaxed text-brand-muted italic">
                      {group.note}
                    </div>
                  </InteractiveTiltCard>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            /* Standard Grid for 6-item Sections */
            <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-6">
              {section.applications.map((application, appIndex) => {
                const [label, detail] = application.split(": ");

                return (
                  <ScrollReveal
                    key={application}
                    animation="fade-up"
                    delay={80 + appIndex * 60}
                    duration={650}
                  >
                    <InteractiveTiltCard
                      maxTilt={5}
                      perspective={1100}
                      className="group relative h-full rounded-2xl border border-black/8 dark:border-white/10 bg-white/95 dark:bg-neutral-900/90 p-5 sm:p-6 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-brand/40 hover:shadow-xl hover:-translate-y-0.5"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="size-2 rounded-full bg-brand-accent transition-transform duration-300 group-hover:scale-125" />
                        <h4 className="text-sm sm:text-base font-bold text-brand-ink transition-colors duration-300 group-hover:text-brand">
                          {label}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
                        {detail}
                      </p>
                    </InteractiveTiltCard>
                  </ScrollReveal>
                );
              })}
            </div>
          )}

          {/* Section Closing Callout Box */}
          <ScrollReveal animation="fade-up" delay={200} duration={700} className="mt-8 sm:mt-10">
            <div className="relative overflow-hidden rounded-2xl border-l-4 border-brand-accent bg-gradient-to-r from-brand/10 via-brand/5 to-transparent p-5 sm:p-6 md:p-7 shadow-xs border border-black/5 dark:border-white/10">
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-brand-muted font-medium">
                {section.closing}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default function ApplicationPage() {
  return (
    <>
      {/* 1. Dynamic Hero Banner */}
      <HeroBanner
        title="Ingredient Applications"
        subtitle="Practical ingredient solutions for ambitious product development."
      />

      {/* 2. Interactive Intro Section */}
      <section className="relative overflow-hidden bg-brand-bg transition-colors duration-500">
        <InteractiveGlowBackground />

        <div className="relative mx-auto max-w-4xl 2xl:max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 text-center">
          <ScrollReveal animation="fade-down" delay={50}>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-3.5 py-1 text-xs sm:text-sm font-semibold text-brand mb-3">
              <Sparkles className="size-3.5 text-brand-accent" />
              <span>Ingredient Applications</span>
            </div>
          </ScrollReveal>

          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-ink">
            <KineticText
              text="Versatile Ingredients. Endless Possibilities."
              as="span"
              stagger={35}
              delay={100}
            />
          </h2>

          <div className="mx-auto mt-6 sm:mt-8 max-w-3xl space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg leading-relaxed text-brand-muted font-normal">
            <ScrollReveal animation="fade-up" delay={250} duration={700}>
              <p>
                At Aksharam Nutra Foods, we bring together a diverse range of fruit and vegetable
                powders, freeze-dried ingredients, dairy powders and herbal extracts to support
                innovation across the global food, beverage and nutrition industries.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={380} duration={700}>
              <p>
                From everyday food applications to specialised product formulations, our ingredients
                offer manufacturers the flexibility to explore new textures, flavours, colours and
                product concepts. We believe that the right ingredient can inspire better ideas,
                simplify product development and create new opportunities in an evolving marketplace.
              </p>
            </ScrollReveal>
          </div>

          {/* Quick-Jump Navigation Bar */}
          <ScrollReveal animation="zoom-in" delay={450} className="mt-10 sm:mt-12">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {applicationSectionsInOrder.map((section, idx) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-ink shadow-xs backdrop-blur-md transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white hover:scale-105 active:scale-95"
                >
                  <span className="font-mono text-[11px] opacity-70">0{idx + 1}</span>
                  <span>{section.shortTitle}</span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Application Category Sections */}
      {applicationSectionsInOrder.map((section, index) => (
        <ApplicationSectionItem key={section.title} section={section} index={index} />
      ))}

      {/* 4. Animated Closing CTA Section */}
      <section className="relative overflow-hidden bg-brand px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28 text-brand-foreground transition-colors duration-500">
        {/* Ambient lighting in background */}
        <div className="pointer-events-none absolute -top-32 -left-32 size-[450px] rounded-full bg-white/10 blur-3xl -z-10" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 size-[450px] rounded-full bg-brand-accent/20 blur-3xl -z-10" />

        <div className="mx-auto grid max-w-7xl 2xl:max-w-[1600px] gap-10 md:gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <ScrollReveal animation="fade-down">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-brand-accent">
                Finding the Right Ingredient for Your Application
              </span>
            </ScrollReveal>

            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              <KineticText
                text="Let's Develop Your Next Product Together."
                as="span"
                stagger={35}
                delay={50}
              />
            </h2>

            <div className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-brand-foreground/85 font-normal">
              <ScrollReveal animation="fade-up" delay={200} duration={700}>
                <p>
                  Every formulation begins with a specific requirement. Whether you are creating a
                  fruit-based beverage, a convenient food mix, a dairy formulation or a botanical
                  ingredient blend, choosing the right ingredient is an important step towards
                  achieving your product goals.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={320} duration={700}>
                <p>
                  Our team welcomes enquiries from food manufacturers, product developers, ingredient
                  distributors and nutrition brands seeking ingredient information and sourcing
                  opportunities.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={440} duration={700}>
                <p>
                  Share your application, required specifications and target market with us. Let&apos;s
                  explore the possibilities together.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Aside Enquiry Card */}
          <ScrollReveal animation="zoom-in" delay={250} duration={800}>
            <InteractiveTiltCard
              maxTilt={6}
              perspective={1000}
              className="rounded-3xl border border-white/20 bg-white/10 p-6 sm:p-8 backdrop-blur-md shadow-2xl sm:w-80 lg:w-96 text-center sm:text-left"
            >
              <p className="text-lg sm:text-xl font-extrabold text-white">Aksharam Nutra Foods</p>
              <p className="mt-2 text-xs sm:text-sm text-brand-foreground/80 font-normal">
                Ingredients That Inspire Innovation.
              </p>

              <div className="mt-6">
                <MagneticButton strength={0.25} className="w-full">
                  <Link
                    href="/contact"
                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-accent px-7 py-3.5 text-sm sm:text-base font-bold text-brand-ink shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:text-brand hover:shadow-2xl active:scale-95"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span>Start an Enquiry</span>
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                  </Link>
                </MagneticButton>
              </div>
            </InteractiveTiltCard>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
