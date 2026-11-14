import type { Metadata } from "next";
import { Leaf, Droplets, Zap } from "lucide-react";
import { HeroBanner, CoreValuesCounters } from "@/components/sections";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { coreValuesLarge } from "@/data/constants";

export const metadata: Metadata = {
  title: "Smoothies",
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

      <section className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 py-10 sm:py-16 2xl:py-24">
        <div className="mx-auto mb-8 sm:mb-12 max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-brand-ink tracking-tight">
            The Ultimate Smoothie Experience
          </h2>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg 2xl:text-xl text-brand-muted">
            100% Real Fruit. Zero Refined Sugar. Instant Nutrition.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-8">
          {smoothies.map((smoothie) => (
            <Card
              key={smoothie.title}
              className="overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:shadow-lg shadow-xs"
            >
              <div
                className="flex h-44 sm:h-52 md:h-56 items-center justify-center p-4 sm:p-6"
                style={{ backgroundColor: smoothie.bg }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={smoothie.image}
                  alt={smoothie.title}
                  className="max-h-full max-w-full object-contain transition duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-6 text-center">
                <Badge variant="secondary" className="mb-2 text-xs">
                  {smoothie.tag}
                </Badge>
                <h3 className="text-base sm:text-lg font-bold text-brand-ink">{smoothie.title}</h3>
                <p className="mt-1 text-xs sm:text-sm text-brand-muted leading-relaxed">{smoothie.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-20 text-center">
          <h2 className="mb-6 sm:mb-10 text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ink tracking-tight">Wholesome Benefits</h2>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-4 rounded-xl bg-white/60 shadow-xs">
                <div className="mx-auto mb-3 sm:mb-4 flex size-12 sm:size-14 items-center justify-center rounded-2xl bg-brand text-brand-foreground shadow-xs">
                  <benefit.icon className="size-6" />
                </div>
                <h5 className="text-base sm:text-lg font-bold text-brand-ink">{benefit.title}</h5>
                <p className="mt-1 text-xs sm:text-sm text-brand-muted leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bg py-10 sm:py-16 2xl:py-24">
        <div className="mx-auto grid max-w-7xl 2xl:max-w-[1600px] items-center gap-8 sm:gap-10 px-4 sm:px-6 lg:px-8 md:grid-cols-2 lg:gap-14 2xl:gap-20">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-brand-ink tracking-tight">Perfect Preparation</h2>
            <p className="mt-3 sm:mt-4 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed text-brand-muted">
              Enjoying our smoothies is as easy as 1-2-3. No blender? No problem! Our powders are
              designed for instant solubility.
            </p>
            <div className="space-y-4 sm:space-y-6">
              {prepSteps.map((step) => (
                <div key={step.step} className="relative border-l-2 border-brand pl-6 sm:pl-8">
                  <span className="absolute -left-[15px] sm:-left-[17px] flex size-7 sm:size-8 items-center justify-center rounded-full bg-brand text-xs sm:text-sm font-bold text-brand-foreground shadow-xs">
                    {step.step}
                  </span>
                  <h5 className="text-sm sm:text-base font-bold text-brand-ink">{step.title}</h5>
                  <p className="mt-1 text-xs sm:text-sm text-brand-muted leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/abt.jpg"
              alt="Preparation"
              className="w-full max-h-[350px] sm:max-h-[450px] 2xl:max-h-[600px] rounded-2xl object-cover shadow-sm"
            />
          </div>
        </div>
      </section>

      <CoreValuesCounters values={coreValuesLarge} />
    </>
  );
}
