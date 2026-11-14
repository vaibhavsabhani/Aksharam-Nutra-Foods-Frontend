import { coreValuesDefault } from "@/data/constants";

interface CoreValuesCountersProps {
  values?: { value: string; label: string }[];
  title?: string;
}

export function CoreValuesCounters({
  values = coreValuesDefault,
  title = "Our Core Values",
}: CoreValuesCountersProps) {
  return (
    <section className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 2xl:py-24">
      <h2 className="mb-6 sm:mb-10 text-center text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-brand-ink tracking-tight">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 2xl:gap-8">
        {values.map((item) => (
          <div key={item.label} className="rounded-xl bg-brand-bg px-3 py-6 sm:py-8 2xl:py-10 text-center shadow-xs">
            <div className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-brand">{item.value}</div>
            <p className="mt-1 text-xs sm:text-sm 2xl:text-base text-brand-muted">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
