"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { PublicBlogPost } from "@/lib/blogs";

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api";

export function PublicBlogList() {
  const [posts, setPosts] = useState<PublicBlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadBlogs() {
      try {
        const response = await fetch(`${apiUrl}/blogs?onlyVisible=true`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Blog request failed with status ${response.status}`);
        }

        const data: PublicBlogPost[] = await response.json();
        if (isMounted) setPosts(data);
      } catch (requestError) {
        if (isMounted) {
          setError(requestError instanceof Error ? requestError.message : "Unable to load blogs");
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return <p className="py-8 text-center text-brand-muted">Loading blog posts...</p>;
  }

  if (error) {
    return (
      <p className="py-8 text-center text-brand-muted">
        Blog posts are currently unavailable. {error}
      </p>
    );
  }

  if (posts.length === 0) {
    return <p className="py-8 text-center text-brand-muted">No blog posts are available yet.</p>;
  }

  return (
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
  );
}