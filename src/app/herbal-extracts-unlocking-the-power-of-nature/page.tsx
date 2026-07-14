import type { Metadata } from "next";
import { getBlogPost } from "@/data/blog";
import { BlogArticle } from "@/components/blog/BlogArticle";

const post = getBlogPost("herbal-extracts-unlocking-the-power-of-nature")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
};

export default function Page() {
  return <BlogArticle post={post} />;
}
