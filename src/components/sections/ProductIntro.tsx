import Link from "next/link";

interface ProductIntroProps {
  title: string;
  lead?: string;
  paragraphs: string[];
  image: string;
  readMoreHref?: string;
  reverse?: boolean;
}

export function ProductIntro({
  title,
  lead,
  paragraphs,
  image,
  readMoreHref,
  reverse,
}: ProductIntroProps) {
  return (
    <section className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 2xl:py-24">
      <div
        className={`grid items-center gap-8 sm:gap-10 md:grid-cols-2 lg:gap-14 2xl:gap-20 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-brand-ink tracking-tight">
            {title}
          </h2>
          {lead ? (
            <p className="mt-3 sm:mt-4 text-base sm:text-lg 2xl:text-xl font-medium text-brand-ink">
              {lead}
            </p>
          ) : null}
          <div className="mt-4 space-y-3 sm:space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-sm sm:text-base 2xl:text-lg leading-relaxed text-brand-muted">
                {p}
              </p>
            ))}
          </div>
          {readMoreHref ? (
            <Link
              href={readMoreHref}
              className="mt-6 inline-block rounded-full bg-[#2f2f2f] px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-[#222]"
            >
              Read More
            </Link>
          ) : null}
        </div>
        <div className="flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title}
            className="w-full max-h-[350px] sm:max-h-[450px] 2xl:max-h-[600px] rounded-2xl object-cover shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
