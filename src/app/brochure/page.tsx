import type { Metadata } from "next";
import Link from "next/link";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Download Brochures",
  description: "Download product brochures for Aksharam Nutra Foods Pvt. Ltd.",
  keywords: "brochure, download, spray dried, dehydrated, freeze dried, smoothies",
};

interface Brochure {
  title: string;
  description: string;
  href: string;
}

const brochures: Brochure[] = [
  {
    title: "Spray Dried Products",
    description: "Complete range of Fruit, Vegetable & Fat powders.",
    href: "/ANFPL-Product-List.pdf",
  },
  {
    title: "Dehydrated Products",
    description: "Premium dehydrated vegetables and spices.",
    href: "/images/02.AFPL Dehydrated Product List.pdf",
  },
  {
    title: "Freeze Dried Products",
    description: "Nutrient-rich freeze-dried ingredients.",
    href: "/images/03.ANFPL Freeze Dried Product List.pdf",
  },
  {
    title: "Indian Herbal Extracts",
    description: "Premium Indian herbal extracts for nutraceutical and wellness applications.",
    href: "/images/04 INDIAN HERBAL EXTRACTS.pdf",
  },
];

export default function BrochurePage() {
  return (
    <>
      <HeroBanner title="Download Brochures" />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brochures.map((brochure) => (
            <Card
              key={brochure.title}
              className="items-center px-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-24 w-16 items-center justify-center rounded border-2 border-dashed border-brand/30 bg-brand-bg text-xs font-bold text-red-600">
                PDF
              </div>
              <CardTitle className="text-base font-bold">{brochure.title}</CardTitle>
              <p className="text-sm text-brand-muted">{brochure.description}</p>
              <div className="mt-2 flex w-full flex-col gap-2">
                <Button
                  variant="outline"
                  size="lg"
                  nativeButton={false}
                  className="w-full rounded-full"
                  render={<a href={brochure.href} target="_blank" rel="noopener noreferrer" />}
                >
                  View Brochure
                </Button>
                <Button
                  size="lg"
                  nativeButton={false}
                  className="w-full rounded-full bg-brand hover:bg-brand/90"
                  render={<a href={brochure.href} download />}
                >
                  Download
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-brand-bg p-10 text-center">
          <h4 className="text-xl font-bold text-brand-ink">Need a Custom Catalogue?</h4>
          <p className="mx-auto mt-3 max-w-xl text-brand-muted">
            If you require specific technical data sheets or a wholesale price list tailored to
            your industrial needs, please contact our export team.
          </p>
          <Button
            size="lg"
            nativeButton={false}
            className="mt-5 rounded-full bg-brand px-6 hover:bg-brand/90"
            render={<Link href="/contact" />}
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
