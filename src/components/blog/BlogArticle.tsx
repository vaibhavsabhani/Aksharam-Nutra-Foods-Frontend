import { HeroBanner } from "@/components/sections/HeroBanner";
import type { BlogPost } from "@/types";

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <>
      <HeroBanner title={post.title} />
      <div className="max-w-4xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 2xl:py-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-brand-ink tracking-tight">{post.title}</h2>
        <p className="mt-2 text-xs sm:text-sm 2xl:text-base text-brand-muted">
          by {post.author} on {post.date}
        </p>

        {post.body.map((block, index) => {
          if (block.type === "p") {
            return (
              <p key={index} className="mt-4 sm:mt-5 text-sm sm:text-base 2xl:text-lg leading-relaxed text-brand-muted">
                {block.text}
              </p>
            );
          }

          if (block.type === "h3") {
            return (
              <h3 key={index} className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl font-bold text-brand-ink">
                {block.text}
              </h3>
            );
          }

          return (
            <ul key={index} className="mt-4 list-disc space-y-2 pl-5 text-sm sm:text-base 2xl:text-lg text-brand-muted">
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
