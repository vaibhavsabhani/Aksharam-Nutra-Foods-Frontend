"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { PublicBlogPost } from "@/lib/blogs";

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api";

export function RecentBlogGrid() {
  const [recent, setRecent] = useState<PublicBlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetch(`${apiUrl}/blogs?onlyVisible=true`, { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load recent blogs");
        return response.json() as Promise<PublicBlogPost[]>;
      })
      .then((blogs) => {
        if (isMounted) setRecent(blogs.slice(0, 3));
      })
      .catch(() => {
        if (isMounted) setRecent([]);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-10 text-3xl font-bold text-brand-ink md:text-4xl">Recent Blog</h2>
      {isLoading ? (
        <p className="py-8 text-center text-brand-muted">Loading recent blogs...</p>
      ) : recent.length === 0 ? (
        <p className="py-8 text-center text-brand-muted">No blog posts are available yet.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-3">
          {recent.map((post) => (
            <article key={post.id}>
              <Link href={`/blog/${post.id}`} className="block overflow-hidden rounded-xl border bg-white">
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
      )}
    </section>
  );
}
