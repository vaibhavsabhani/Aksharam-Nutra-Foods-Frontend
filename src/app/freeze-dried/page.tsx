import type { Metadata } from "next";
import { Carrot, Sprout, Citrus, Flower2, FlaskConical } from "lucide-react";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { FeatureBulletList } from "@/components/common/FeatureBulletList";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Freeze Dried Products",
};

interface FdCard {
  image?: string;
  icon?: React.ComponentType<{ className?: string }>;
  iconClassName?: string;
  title: string;
  spec: string;
  specVariant?: "default" | "powder" | "herb";
  description?: string;
}

const fruits: FdCard[] = [
  { image: "/products/Spray Dried Fruit Powder/Mango.jpg", title: "Freeze Dried Mango", spec: "10mm Cube / Tea Cut" },
  { image: "/products/Spray Dried Fruit Powder/strawberry.jpg", title: "Freeze Dried Strawberry", spec: "10mm Cube / Tea Cut" },
  { image: "/products/Spray Dried Fruit Powder/Banana.jpg", title: "Freeze Dried Banana", spec: "Whole / Slice" },
  { image: "/products/Spray Dried Fruit Powder/Apple-1.jpg", title: "Freeze Dried Apple", spec: "10mm Cube / Tea Cut" },
  { image: "/products/Spray Dried Fruit Powder/guava.jpeg.jpg", title: "Freeze Dried Guava", spec: "10mm Cube (Pink/White)" },
  { image: "/products/Spray Dried Fruit Powder/pomegranate.jpg", title: "Freeze Dried Pomegranate", spec: "Premium Kernels" },
  { image: "/products/Spray Dried Fruit Powder/Orange.jpg", title: "Freeze Dried Pineapple", spec: "Tropical Slice" },
  { image: "/products/Spray Dried Fruit Powder/papaya.jpeg.jpg", title: "Freeze Dried Papaya", spec: "10mm Cube" },
];

const vegetables: FdCard[] = [
  { image: "/products/dehydrated/Spinach-Leaves-1000x1000-1.png", title: "Freeze Dried Green Peas", spec: "Whole Boiled" },
  { image: "/products/dehydrated/potato.jpg", title: "Freeze Dried Sweet Corn", spec: "Whole Boiled" },
  { image: "/products/dehydrated/dehydrate.jpg", title: "Freeze Dried Carrot", spec: "3-5 mm Cube" },
  { image: "/products/dehydrated/dehydrated-green-chilli-flakes-500x500.webp", title: "Red & Green Bell Pepper", spec: "3-5 mm Flakes" },
  { icon: Carrot, title: "Freeze Dried Zucchini", spec: "5mm Triangle Slice" },
  { icon: Sprout, title: "Freeze Dried French Bean", spec: "3-5 mm Cube" },
];

const specialty: FdCard[] = [
  {
    icon: Citrus,
    iconClassName: "text-amber-500",
    title: "Freeze Dried Amla",
    spec: "Pure Botanical Powder",
    specVariant: "powder",
  },
  {
    icon: Flower2,
    iconClassName: "text-red-500",
    title: "Freeze Dried Rose Petal",
    spec: "Fine Flakes / Powder",
    specVariant: "powder",
  },
  {
    icon: FlaskConical,
    iconClassName: "text-sky-500",
    title: "Herb & Botanical Range",
    description: "Parsley, Basil, Tulsi, Oregano, Mint, Coriander",
    spec: "2-4 mm Flakes / Powder",
    specVariant: "herb",
  },
];

function specBadgeClasses(variant?: "default" | "powder" | "herb") {
  if (variant === "powder") return "border-amber-200 bg-amber-50 text-amber-700";
  if (variant === "herb") return "border-sky-200 bg-sky-50 text-sky-700";
  return "border-brand/20 bg-brand-bg text-brand";
}

function FreezeDriedGrid({ items }: { items: FdCard[] }) {
  return (
    <div className="grid gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 xl:gap-8">
      {items.map((item) => (
        <Card
          key={item.title}
          className="items-center gap-2.5 sm:gap-3 p-4 sm:p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg shadow-xs"
        >
          {item.image ? (
            <div className="flex h-36 sm:h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-brand-bg p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain transition duration-300 hover:scale-105" />
            </div>
          ) : item.icon ? (
            <div className="flex h-36 sm:h-40 w-full items-center justify-center">
              <item.icon className={`size-10 sm:size-12 ${item.iconClassName ?? "text-brand"}`} />
            </div>
          ) : null}
          <h3 className="text-sm sm:text-base font-bold text-brand-ink">{item.title}</h3>
          {item.description ? (
            <p className="text-xs sm:text-sm text-brand-muted">{item.description}</p>
          ) : null}
          <Badge variant="outline" className={specBadgeClasses(item.specVariant)}>
            {item.spec}
          </Badge>
        </Card>
      ))}
    </div>
  );
}

export default function FreezeDriedPage() {
  return (
    <>
      <HeroBanner
        title="Freeze Dried Products"
        subtitle="Industrial Grade. Nature Preserved. Perfectly Captured."
      />

      <section className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 py-10 sm:py-16 2xl:py-24">
        <div className="mx-auto mb-8 sm:mb-12 max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-brand-ink tracking-tight">
            Premium Freeze Dried Collection
          </h2>
        </div>

        <h4 className="mb-4 sm:mb-6 inline-block border-b-2 border-brand pb-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-brand">
          Freeze Dried Fruits
        </h4>
        <FreezeDriedGrid items={fruits} />

        <h4 className="mt-10 sm:mt-14 mb-4 sm:mb-6 inline-block border-b-2 border-brand pb-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-brand">
          Freeze Dried Vegetables
        </h4>
        <FreezeDriedGrid items={vegetables} />

        <h4 className="mt-10 sm:mt-14 mb-4 sm:mb-6 inline-block border-b-2 border-brand pb-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-brand">
          Specialty Powders
        </h4>
        <FreezeDriedGrid items={specialty} />
      </section>

      <section className="bg-brand-bg py-10 sm:py-16 2xl:py-20">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 sm:mb-10 text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ink tracking-tight">Industrial Grade Standards</h2>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-3 xl:gap-8">
            {[
              { title: "98% Nutrient Retention", description: "Capturing nature's essence flawlessly." },
              { title: "Zero Additives", description: "100% Pure fruit and vegetable matter." },
              { title: "Global Export Certified", description: "Meeting international food safety norms." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-5 sm:p-6 shadow-xs">
                <h5 className="text-base sm:text-lg font-bold text-brand-ink">{item.title}</h5>
                <p className="mt-1.5 text-xs sm:text-sm text-brand-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 py-10 sm:py-16 2xl:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-brand-ink tracking-tight">
            Quality & Preservation
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-brand-muted leading-relaxed">
            Our freeze-drying process ensures that the nutritional value, flavor, and texture of
            the original ingredients are perfectly maintained.
          </p>
          <FeatureBulletList
            className="mx-auto mt-6 max-w-2xl text-left"
            items={[
              { label: "Nutrition", text: "Retains 98% of the original nutrients." },
              { label: "Flavor", text: "concentrates the natural sugars and aromas." },
              { label: "Shelf Life", text: "Long-term stability without preservatives." },
              { label: "100% Natural", text: "No added colors, flavors, or carriers." },
            ]}
          />
        </div>
      </section>
    </>
  );
}
