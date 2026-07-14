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
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div
        className={`grid items-center gap-10 md:grid-cols-2 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <h2 className="text-3xl font-bold text-brand-ink md:text-4xl">{title}</h2>
          {lead ? <p className="mt-4 font-medium text-brand-ink">{lead}</p> : null}
          {paragraphs.map((p, i) => (
            <p key={i} className="mt-4 text-brand-muted">
              {p}
            </p>
          ))}
          {readMoreHref ? (
            <Link
              href={readMoreHref}
              className="mt-6 inline-block rounded-full bg-[#2f2f2f] px-8 py-3 font-semibold text-white transition hover:bg-[#222]"
            >
              Read More
            </Link>
          ) : null}
        </div>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={title} className="w-full rounded-2xl object-cover shadow-sm" />
        </div>
      </div>
    </section>
  );
}
