import type { Metadata } from "next";
import { HeroBanner } from "@/components/sections";
import { PublicBlogList } from "@/components/blog";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <>
      <HeroBanner title="Our Blog" subtitle="Insights, trends, and innovation in the world of natural food ingredients." />

      <section className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 py-10 sm:py-16 2xl:py-24">
        <PublicBlogList />
      </section>
    </>
  );
}
