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
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-10 text-center text-3xl font-bold text-brand-ink md:text-4xl">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {values.map((item) => (
          <div key={item.label} className="rounded-xl bg-brand-bg py-8 text-center">
            <div className="text-3xl font-bold text-brand">{item.value}</div>
            <p className="mt-1 text-sm text-brand-muted">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
