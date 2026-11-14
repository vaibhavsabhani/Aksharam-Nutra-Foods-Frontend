import { extraContentBlocks } from "@/data/constants";

export function ExtraContentBlock() {
  return (
    <section className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16 2xl:pb-24">
      <div className="space-y-6 sm:space-y-8">
        {extraContentBlocks.map((block) => (
          <div key={block.title}>
            <h3 className="text-base sm:text-lg 2xl:text-xl font-semibold text-brand-ink">{block.title}</h3>
            <p className="mt-2 text-sm sm:text-base 2xl:text-lg text-brand-muted leading-relaxed">{block.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
