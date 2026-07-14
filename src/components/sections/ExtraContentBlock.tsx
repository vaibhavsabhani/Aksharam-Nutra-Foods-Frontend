import { extraContentBlocks } from "@/data/constants";

export function ExtraContentBlock() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="space-y-6">
        {extraContentBlocks.map((block) => (
          <div key={block.title}>
            <h3 className="text-lg font-semibold text-brand-ink">{block.title}</h3>
            <p className="mt-2 text-brand-muted">{block.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
