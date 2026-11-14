interface HeroBannerProps {
  title: string;
  subtitle?: string;
}

export function HeroBanner({ title, subtitle }: HeroBannerProps) {
  return (
    <div className="bg-brand py-12 sm:py-16 md:py-20 2xl:py-28 text-center text-brand-foreground">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold tracking-tight break-words">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base md:text-lg 2xl:text-xl text-brand-foreground/90">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
