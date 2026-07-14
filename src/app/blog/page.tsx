import type { Metadata } from "next";
import Link from "next/link";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read our latest insights on spray-dried ingredients, sustainable sourcing, and herbal extracts.",
  keywords: "blog, spray dried, herbal extracts, nutrition, Aksharam Nutra Foods",
};

export default function BlogPage() {
  return (
    <>
      <HeroBanner title="Our Blog" />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/${post.slug}`}
                className="block overflow-hidden rounded-xl border bg-white"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              </Link>
              <h3 className="mt-4 font-semibold text-brand-ink">
                <Link href={`/${post.slug}`} className="hover:text-brand">
                  {post.title}
                </Link>
              </h3>
              <div className="mt-2 text-sm text-brand-muted">
                by {post.author} on {post.date}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
