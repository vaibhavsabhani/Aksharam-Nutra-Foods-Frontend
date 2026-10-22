import type { Metadata } from "next";
import Link from "next/link";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { getPublicBlogs, type PublicBlogPost } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read our latest insights on spray-dried ingredients, sustainable sourcing, and herbal extracts.",
  keywords: "blog, spray dried, herbal extracts, nutrition, Aksharam Nutra Foods",
};

export default async function BlogPage() {
  let posts: PublicBlogPost[] = [];
  let hasError = false;

  try {
    posts = await getPublicBlogs();
  } catch {
    hasError = true;
  }

  return (
    <>
      <HeroBanner title="Our Blog" />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id}>
              <Link
                href={`/blog/${post.id}`}
                className="block overflow-hidden rounded-xl border bg-white"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.coverImageUrl ?? "/images/blog-5.webp"}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
              </Link>
              <h3 className="mt-4 font-semibold text-brand-ink">
                <Link href={`/blog/${post.id}`} className="hover:text-brand">
                  {post.title}
                </Link>
              </h3>
              <div className="mt-2 text-sm text-brand-muted">
                by {post.author?.name ?? "Admin"} on {new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                })}
              </div>
            </article>
          ))}
        </div>
        {hasError && (
          <p className="py-8 text-center text-brand-muted">
            Blog posts are currently unavailable. Please try again later.
          </p>
        )}
        {!hasError && posts.length === 0 && (
          <p className="py-8 text-center text-brand-muted">No blog posts are available yet.</p>
        )}
      </section>
    </>
  );
}
