import type { Metadata } from "next";
import { getBlogPost } from "@/data/blog";
import { BlogArticle } from "@/components/blog/BlogArticle";

const post = getBlogPost("the-growing-demand-for-spray-dried-ingredients-in-the-modern-food-industry")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
};

export default function Page() {
  return <BlogArticle post={post} />;
}
