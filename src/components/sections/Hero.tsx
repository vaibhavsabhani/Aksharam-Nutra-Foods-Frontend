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
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-[40px] font-bold leading-tight text-black">
            {title}
            {highlight ? <span className="mt-1 block">{highlight}</span> : null}
          </h1>
          <p className="mt-5 text-black/50">{description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              className="h-auto rounded-full bg-brand-accent px-8 py-3 text-base font-semibold text-brand-ink hover:bg-brand-accent/90"
              render={<Link href="/contact" />}
            >
              Contact Us
            </Button>
            <Button
              nativeButton={false}
              className="h-auto rounded-full border-2 border-white/30 bg-[#2f2f2f] px-8 py-3 text-base font-semibold text-white hover:border-white hover:bg-[#222]"
              render={<a href={`mailto:${companyEmail}`} />}
            >
              Mail Us
            </Button>
          </div>
        </div>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="Aksharam Nutra Foods" className="w-full rounded-2xl object-cover" />
        </div>
      </div>
    </div>
  );
}
