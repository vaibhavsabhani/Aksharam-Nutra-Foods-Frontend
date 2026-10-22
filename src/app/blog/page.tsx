import type { Metadata } from "next";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { PublicBlogList } from "@/components/blog/PublicBlogList";

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
        <PublicBlogList />
      </section>
    </>
  );
}
