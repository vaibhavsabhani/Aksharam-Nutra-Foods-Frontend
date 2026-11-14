import type { Metadata } from "next";
import Link from "next/link";
import { HeroBanner } from "@/components/sections";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Download Brochures",
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
    href: "/images/01.ANFPL Spray Dried Product Kist.pdf",
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
      <HeroBanner title="Download Brochures" subtitle="Official technical product catalogues and specifications." />

      <section className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 py-10 sm:py-16 2xl:py-24">
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-8">
          {brochures.map((brochure) => (
            <Card
              key={brochure.title}
              className="items-center p-5 sm:p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg shadow-xs"
            >
              <div className="flex h-20 sm:h-24 w-14 sm:w-16 items-center justify-center rounded-lg border-2 border-dashed border-brand/30 bg-brand-bg text-xs sm:text-sm font-bold text-red-600 shadow-xs">
                PDF
              </div>
              <CardTitle className="text-sm sm:text-base font-bold text-brand-ink mt-2 sm:mt-3">{brochure.title}</CardTitle>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3">{brochure.description}</p>
              <div className="mt-3 sm:mt-4 flex w-full flex-col gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  nativeButton={false}
                  className="w-full rounded-full text-xs sm:text-sm py-2"
                  render={<a href={brochure.href} target="_blank" rel="noopener noreferrer" />}
                >
                  View Brochure
                </Button>
                <Button
                  size="sm"
                  nativeButton={false}
                  className="w-full rounded-full bg-brand text-xs sm:text-sm py-2 hover:bg-brand/90"
                  render={<a href={brochure.href} download />}
                >
                  Download
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 rounded-2xl bg-brand-bg p-6 sm:p-10 2xl:p-14 text-center">
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-ink">Need a Custom Catalogue?</h4>
          <p className="mx-auto mt-2 sm:mt-3 max-w-xl text-xs sm:text-sm md:text-base text-brand-muted leading-relaxed">
            If you require specific technical data sheets or a wholesale price list tailored to
            your industrial needs, please contact our export team.
          </p>
          <Button
            size="lg"
            nativeButton={false}
            className="mt-5 rounded-full bg-brand px-6 text-sm font-semibold hover:bg-brand/90 shadow-xs"
            render={<Link href="/contact" />}
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
