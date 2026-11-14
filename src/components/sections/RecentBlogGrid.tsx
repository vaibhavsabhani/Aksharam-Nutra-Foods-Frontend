"use client";

import { useEffect, useState } from "react";
import type { PublicBlogPost } from "@/types";
import { API_URL } from "@/lib/api";
import { BlogCard } from "@/components/blog/BlogCard";
import { KineticText } from "@/components/common/KineticText";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export function RecentBlogGrid() {
  const [recent, setRecent] = useState<PublicBlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetch(`${API_URL}/blogs?onlyVisible=true`, { cache: "no-store" })
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
    <section className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 2xl:py-28">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-brand-ink tracking-tight">
          <KineticText text="Recent Blog" as="span" stagger={40} delay={50} />
        </h2>
      </div>

      {isLoading ? (
        <p className="py-8 text-center text-sm sm:text-base text-brand-muted">Loading recent blogs...</p>
      ) : recent.length === 0 ? (
        <p className="py-8 text-center text-sm sm:text-base text-brand-muted">No blog posts are available yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:gap-8">
          {recent.map((post, idx) => (
            <ScrollReveal
              key={post.id}
              animation="fade-up"
              delay={100 + idx * 100}
              duration={700}
            >
              <BlogCard post={post} />
            </ScrollReveal>
          ))}
        </div>
      )}
    </section>
  );
}
