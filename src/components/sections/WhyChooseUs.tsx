import { whyChooseUsFeatures } from "@/data/constants";

interface WhyChooseUsProps {
  image: string;
  description?: string;
  reverse?: boolean;
}

export function WhyChooseUs({ image, description, reverse }: WhyChooseUsProps) {
  return (
    <section className="bg-brand-bg py-10 sm:py-14 md:py-16 2xl:py-24">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div
          className={`grid items-center gap-8 sm:gap-10 md:grid-cols-2 lg:gap-14 2xl:gap-20 ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt="Why Choose Us"
              className="w-full max-h-[350px] sm:max-h-[450px] 2xl:max-h-[600px] rounded-2xl object-cover shadow-sm"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-brand-ink tracking-tight">
              Why Choose Us
            </h2>
            {description ? (
              <p className="mt-3 sm:mt-4 text-sm sm:text-base 2xl:text-lg leading-relaxed text-brand-muted">
                {description}
              </p>
            ) : null}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 2xl:gap-8">
              {whyChooseUsFeatures.map((feature) => (
                <div key={feature.title} className="rounded-xl bg-white/60 p-4 sm:p-5 shadow-xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={feature.icon} alt="" className="mb-2 sm:mb-3 size-8 sm:size-9" />
                  <h3 className="text-sm sm:text-base font-semibold text-brand-ink">{feature.title}</h3>
                  <p className="mt-1 text-xs sm:text-sm text-brand-muted leading-relaxed">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
