import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroBanner } from "@/components/sections";
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
      <article className="mx-auto max-w-4xl 2xl:max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 2xl:py-24">
        <div
          className="prose max-w-none text-sm sm:text-base 2xl:text-lg leading-relaxed text-brand-muted break-words"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <p className="mt-8 sm:mt-12 border-t border-border pt-4 sm:pt-6 text-xs sm:text-sm text-brand-muted">
          by {post.author?.name ?? "Admin"} on {new Date(post.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
        </p>
      </article>
    </>
  );
}
