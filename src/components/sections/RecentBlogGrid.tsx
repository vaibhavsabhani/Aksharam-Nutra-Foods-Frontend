import Link from "next/link";
import { blogPosts } from "@/data/blog";

export function RecentBlogGrid() {
  const recent = blogPosts.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-10 text-3xl font-bold text-brand-ink md:text-4xl">Recent Blog</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {recent.map((post) => (
          <article key={post.slug}>
            <Link href={`/${post.slug}`} className="block overflow-hidden rounded-xl border bg-white">
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
  );
}
