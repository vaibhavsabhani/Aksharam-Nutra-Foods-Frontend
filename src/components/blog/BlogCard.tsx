import Link from "next/link";
import type { PublicBlogPost } from "@/types";

interface BlogCardProps {
  post: PublicBlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <article className="group flex flex-col">
      <Link
        href={`/blog/${post.id}`}
        className="block overflow-hidden rounded-xl border bg-white shadow-xs transition duration-300 group-hover:shadow-md"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.coverImageUrl ?? "/images/blog-5.webp"}
          alt={post.title}
          className="h-44 sm:h-48 md:h-52 2xl:h-60 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </Link>
      <h3 className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg 2xl:text-xl font-semibold text-brand-ink transition group-hover:text-brand line-clamp-2">
        <Link href={`/blog/${post.id}`}>
          {post.title}
        </Link>
      </h3>
      <div className="mt-2 text-xs sm:text-sm text-brand-muted">
        by {post.author?.name ?? "Admin"} on {formattedDate}
      </div>
    </article>
  );
}
