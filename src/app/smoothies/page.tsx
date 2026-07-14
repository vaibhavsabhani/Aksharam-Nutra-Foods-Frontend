import type { Metadata } from "next";
import { Leaf, Droplets, Zap } from "lucide-react";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { CoreValuesCounters } from "@/components/sections/CoreValuesCounters";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { coreValuesLarge } from "@/data/constants";

export const metadata: Metadata = {
  title: "Smoothies",
  description: "",
};

const smoothies = [
  {
    image: "/images/Mango Smoothies.png",
    tag: "Tropical King",
    title: "Mango Smoothies",
    description: "Rich in Vitamin C and natural enzymes.",
    bg: "#fff9e6",
  },
  {
    image: "/images/Strawberry Smoothies.png",
    tag: "Berry Blast",
    title: "Strawberry Smoothies",
    description: "Antioxidant-rich and perfectly sweet.",
    bg: "#fff0f0",
  },
  {
    image: "/images/Chikoo Smoothies.png",
    tag: "Energy Spike",
    title: "Chikoo Smoothies",
    description: "A creamy, caramel-like energy booster.",
    bg: "#f5f0e6",
  },
  {
    image: "/images/Banana Smoothies .png",
    tag: "Classic Power",
    title: "Banana Smoothies",
    description: "Potassium-packed for your daily grind.",
    bg: "#feffe6",
  },
];

const benefits = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Made with pure freeze-dried and spray-dried fruit powders.",
  },
  {
    icon: Droplets,
    title: "No Added Sugars",
    description: "Sweetened only by the natural sugars of the fruit.",
  },
  {
    icon: Zap,
    title: "Instant Energy",
    description: "A perfect guilt-free snack for active lifestyles.",
  },
];

const prepSteps = [
  {
    step: "1",
    title: "Add Base",
    description: "Pour 200ml of chilled milk, water, or vegan alternative into a glass or shaker.",
  },
  {
    step: "2",
    title: "Mix Powder",
    description: "Add 2 scoops (30g) of your favorite Aksharam Smoothie blend.",
  },
  {
    step: "3",
    title: "Shake & Sip",
    description: "Shake well or stir for 30 seconds and enjoy your fresh smoothie!",
  },
];

export default function SmoothiesPage() {
  return (
    <>
      <HeroBanner title="Healthy Smoothies" />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-brand-ink md:text-3xl">
            The Ultimate Smoothie Experience
          </h2>
          <p className="mt-3 text-lg text-brand-muted">
            100% Real Fruit. Zero Refined Sugar. Instant Nutrition.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {smoothies.map((smoothie) => (
            <Card
              key={smoothie.title}
              className="overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="flex h-56 items-center justify-center p-6"
                style={{ backgroundColor: smoothie.bg }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={smoothie.image}
                  alt={smoothie.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-6 text-center">
                <Badge variant="secondary" className="mb-2">
                  {smoothie.tag}
                </Badge>
                <h3 className="text-base font-bold text-brand-ink">{smoothie.title}</h3>
                <p className="mt-1 text-sm text-brand-muted">{smoothie.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="mb-10 text-2xl font-bold text-brand-ink">Wholesome Benefits</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title}>
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
                  <benefit.icon className="size-6" />
                </div>
                <h5 className="font-bold text-brand-ink">{benefit.title}</h5>
                <p className="mt-1 text-sm text-brand-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bg py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-brand-ink md:text-3xl">Perfect Preparation</h2>
            <p className="mt-4 mb-8 text-brand-muted">
              Enjoying our smoothies is as easy as 1-2-3. No blender? No problem! Our powders are
              designed for instant solubility.
            </p>
            <div className="space-y-6">
              {prepSteps.map((step) => (
                <div key={step.step} className="relative border-l-2 border-brand pl-6">
                  <span className="absolute -left-[15px] flex size-7 items-center justify-center rounded-full bg-brand text-xs font-bold text-brand-foreground">
                    {step.step}
                  </span>
                  <h5 className="font-bold text-brand-ink">{step.title}</h5>
                  <p className="mt-1 text-sm text-brand-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/abt.jpg"
              alt="Preparation"
              className="w-full rounded-2xl object-cover shadow-sm"
            />
          </div>
        </div>
      </section>

      <CoreValuesCounters values={coreValuesLarge} />
    </>
  );
}
