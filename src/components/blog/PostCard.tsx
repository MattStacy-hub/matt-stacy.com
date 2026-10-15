import Image from "next/image";
import Link from "next/link";
import { categoryLabel } from "@/data/blog";
import { formatDate, type PostSummary } from "@/lib/blog";

export function PostCard({ post }: { post: PostSummary }) {
  return (
    <article className="min-w-0">
      <Link
        href={`/blog/${post.slug}`}
        className="group grid gap-5"
      >
        <span className="relative block aspect-[4/3] overflow-hidden bg-bone">
          {post.cover && (
            <Image
              src={post.cover}
              alt={post.coverAlt}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-1000 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.035]"
            />
          )}
        </span>
        <span className="grid content-start gap-2.5">
          <span className="text-[14px] opacity-65">
            {formatDate(post.publishedAt)}
            {post.categories.length > 0 && ` · ${post.categories.map(categoryLabel).join(", ")}`}
          </span>
          <span className="font-display text-[clamp(24px,2.2vw,30px)] leading-[1.1] font-medium text-balance [font-variation-settings:'opsz'_36]">
            {post.title}
          </span>
          <span className="max-w-[52ch] text-[15px] leading-[1.7]">
            {post.excerpt}
          </span>
        </span>
      </Link>
    </article>
  );
}
