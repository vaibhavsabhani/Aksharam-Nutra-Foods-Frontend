import type { Metadata } from "next";
import { getBlogPost } from "@/data/blog";
import { BlogArticle } from "@/components/blog/BlogArticle";

const post = getBlogPost("the-power-of-spray-dried-ingredients")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
};

export default function Page() {
  return <BlogArticle post={post} />;
}
