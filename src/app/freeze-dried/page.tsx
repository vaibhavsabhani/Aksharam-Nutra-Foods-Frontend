import type { Metadata } from "next";
import { Carrot, Sprout, Citrus, Flower2, FlaskConical } from "lucide-react";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Freeze Dried Products",
  description: "",
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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Card
          key={item.title}
          className="items-center gap-3 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
        >
          {item.image ? (
            <div className="flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-brand-bg p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain" />
            </div>
          ) : item.icon ? (
            <div className="flex h-40 w-full items-center justify-center">
              <item.icon className={`size-12 ${item.iconClassName ?? "text-brand"}`} />
            </div>
          ) : null}
          <h3 className="text-base font-bold text-brand-ink">{item.title}</h3>
          {item.description ? (
            <p className="text-sm text-brand-muted">{item.description}</p>
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

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-brand-ink md:text-3xl">
            Premium Freeze Dried Collection
          </h2>
        </div>

        <h4 className="mb-6 inline-block border-b-2 border-brand pb-2 text-sm font-extrabold uppercase tracking-wide text-brand">
          Freeze Dried Fruits
        </h4>
        <FreezeDriedGrid items={fruits} />

        <h4 className="mt-14 mb-6 inline-block border-b-2 border-brand pb-2 text-sm font-extrabold uppercase tracking-wide text-brand">
          Freeze Dried Vegetables
        </h4>
        <FreezeDriedGrid items={vegetables} />

        <h4 className="mt-14 mb-6 inline-block border-b-2 border-brand pb-2 text-sm font-extrabold uppercase tracking-wide text-brand">
          Specialty Powders
        </h4>
        <FreezeDriedGrid items={specialty} />
      </section>

      <section className="bg-brand-bg py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-8 text-2xl font-bold text-brand-ink">Industrial Grade Standards</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: "98% Nutrient Retention", description: "Capturing nature's essence flawlessly." },
              { title: "Zero Additives", description: "100% Pure fruit and vegetable matter." },
              { title: "Global Export Certified", description: "Meeting international food safety norms." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm">
                <h5 className="font-bold text-brand-ink">{item.title}</h5>
                <p className="mt-1 text-sm text-brand-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-brand-ink md:text-3xl">
            Quality & Preservation
          </h2>
          <p className="mt-4 text-brand-muted">
            Our freeze-drying process ensures that the nutritional value, flavor, and texture of
            the original ingredients are perfectly maintained.
          </p>
          <ul className="mx-auto mt-6 max-w-2xl space-y-3 text-left">
            {[
              { label: "Nutrition", text: "Retains 98% of the original nutrients." },
              { label: "Flavor", text: "concentrates the natural sugars and aromas." },
              { label: "Shelf Life", text: "Long-term stability without preservatives." },
              { label: "100% Natural", text: "No added colors, flavors, or carriers." },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3 text-brand-ink">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                <span>
                  <strong>{item.label}:</strong>{" "}
                  <span className="text-brand-muted">{item.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
