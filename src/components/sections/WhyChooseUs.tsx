import { whyChooseUsFeatures } from "@/data/constants";

interface WhyChooseUsProps {
  image: string;
  description?: string;
  reverse?: boolean;
}

export function WhyChooseUs({ image, description, reverse }: WhyChooseUsProps) {
  return (
    <section className="bg-brand-bg py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`grid items-center gap-10 md:grid-cols-2 ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="Why Choose Us" className="w-full rounded-2xl object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-ink md:text-4xl">Why Choose Us</h2>
            {description ? <p className="mt-4 text-brand-muted">{description}</p> : null}
            <div className="mt-8 grid grid-cols-2 gap-6">
              {whyChooseUsFeatures.map((feature) => (
                <div key={feature.title}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={feature.icon} alt="" className="mb-3 h-9 w-9" />
                  <h3 className="font-semibold text-brand-ink">{feature.title}</h3>
                  <p className="mt-1 text-sm text-brand-muted">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
