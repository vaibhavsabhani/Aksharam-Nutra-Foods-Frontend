import { HeroBanner } from "@/components/sections/HeroBanner";
import type { BlogPost } from "@/data/blog";

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <>
      <HeroBanner title={post.title} />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-brand-ink">{post.title}</h2>
        <p className="mt-2 text-sm text-brand-muted">
          by {post.author} on {post.date}
        </p>

        {post.body.map((block, index) => {
          if (block.type === "p") {
            return (
              <p key={index} className="mt-4 text-brand-muted">
                {block.text}
              </p>
            );
          }

          if (block.type === "h3") {
            return (
              <h3 key={index} className="mt-8 text-xl font-bold text-brand-ink">
                {block.text}
              </h3>
            );
          }

          return (
            <ul key={index} className="mt-4 list-disc space-y-2 pl-5 text-brand-muted">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  {item.title && (
                    <strong className="text-brand-ink">{item.title}: </strong>
                  )}
                  {item.text}
                </li>
              ))}
            </ul>
          );
        })}
      </div>
    </>
  );
}
