import Link from "next/link";
import { Button } from "@/components/ui/button";
import { companyEmail } from "@/data/constants";

interface HeroProps {
  title: string;
  highlight?: string;
  description: string;
  image: string;
}

export function Hero({ title, highlight, description, image }: HeroProps) {
  return (
    <div className="bg-brand-bg">
      <div className="mx-auto grid max-w-7xl 2xl:max-w-[1600px] items-center gap-8 sm:gap-10 md:grid-cols-2 px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 lg:py-24 2xl:py-32">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-tight text-black tracking-tight">
            {title}
            {highlight ? <span className="mt-1 block text-brand">{highlight}</span> : null}
          </h1>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg 2xl:text-xl leading-relaxed text-black/65">
            {description}
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Button
              nativeButton={false}
              className="h-auto rounded-full bg-brand-accent px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-brand-ink transition hover:bg-brand-accent/90 shadow-xs"
              render={<Link href="/contact" />}
            >
              Contact Us
            </Button>
            <Button
              nativeButton={false}
              className="h-auto rounded-full border-2 border-white/30 bg-[#2f2f2f] px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white transition hover:border-white hover:bg-[#222] shadow-xs"
              render={<a href={`mailto:${companyEmail}`} />}
            >
              Mail Us
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt="Aksharam Nutra Foods"
            className="w-full max-h-[300px] sm:max-h-[420px] md:max-h-[500px] 2xl:max-h-[650px] rounded-2xl object-cover shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
