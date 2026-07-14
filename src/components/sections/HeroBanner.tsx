interface HeroBannerProps {
  title: string;
  subtitle?: string;
}

export function HeroBanner({ title, subtitle }: HeroBannerProps) {
  return (
    <div className="bg-brand py-16 text-center text-brand-foreground md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
        {subtitle ? <p className="mt-3 text-brand-foreground/90">{subtitle}</p> : null}
      </div>
    </div>
  );
}
