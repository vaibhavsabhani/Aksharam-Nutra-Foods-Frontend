import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { getPublicBlog } from "@/lib/blogs";

type BlogDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: BlogDetailsPageProps): Promise<Metadata> {
  try {
    const post = await getPublicBlog((await params).id);
    return { title: post.title };
  } catch {
    return { title: "Blog" };
  }
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  let post;

  try {
    post = await getPublicBlog((await params).id);
  } catch {
    notFound();
  }

  if (!post.isShow) notFound();

  return (
    <>
      <HeroBanner title={post.title} />
      <article className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-sm text-brand-muted">
          by {post.author?.name ?? "Admin"} on {new Date(post.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
        </p>
        <div
          className="prose mt-8 max-w-none text-brand-muted"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </>
  );
}