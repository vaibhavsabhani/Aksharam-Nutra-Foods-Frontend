"use client";

import { useEffect, useState } from "react";
import type { PublicBlogPost } from "@/types";
import { API_URL } from "@/lib/api";
import { BlogCard } from "./BlogCard";

export function PublicBlogList() {
  const [posts, setPosts] = useState<PublicBlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadBlogs() {
      try {
        const response = await fetch(`${API_URL}/blogs?onlyVisible=true`, {
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
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
