import Image from "next/image";
import Link from "next/link";
import { categoryLabel } from "@/data/blog";
import { formatDate, type PostSummary } from "@/lib/blog";

export const FEATURED_POST_ID = "featured-post";

/**
 * The lead story on the blog page: its cover photo full-bleed, the header
 * floating over it, and the title and excerpt set low on the frame like the
 * service page heroes.
 */
export function FeaturedPost({ post }: { post: PostSummary }) {
  return (
    <section
      id={FEATURED_POST_ID}
      aria-label="Featured post"
      className="relative isolate flex min-h-[min(84svh,860px)] flex-col justify-end overflow-hidden pt-28 text-white"
    >
      {post.cover && (
        <Image
          src={post.cover}
          alt={post.coverAlt}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(42,33,28,.5) 0%, rgba(42,33,28,0) 22%, rgba(42,33,28,0) 40%, rgba(42,33,28,.7) 75%, rgba(42,33,28,.92) 100%), linear-gradient(90deg, rgba(42,33,28,.45) 0%, rgba(42,33,28,0) 65%)",
        }}
      />
      <Link
        href={`/blog/${post.slug}`}
        className="group px-gutter pb-[clamp(28px,5vw,56px)]"
      >
        <span className="mb-4 block text-[15px] text-bone">
          {formatDate(post.publishedAt)}
          {post.categories.length > 0 && ` · ${post.categories.map(categoryLabel).join(", ")}`}
        </span>
        <h2 className="font-display mb-5 max-w-[18ch] text-[clamp(38px,6vw,84px)] leading-[1.02] text-balance">
          {post.title}
        </h2>
        <span className="block max-w-[52ch] text-[17px] text-bone">{post.excerpt}</span>
        <span className="label mt-7 inline-flex gap-3 bg-petroglyph px-6.5 py-4 text-white">
          Read the story
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </Link>
    </section>
  );
}
