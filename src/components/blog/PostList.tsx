import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PostCard } from "@/components/blog/PostCard";
import { FeaturedPost, FEATURED_POST_ID } from "@/components/blog/FeaturedPost";
import { BLOG_CATEGORIES } from "@/data/blog";
import type { PostSummary } from "@/lib/blog";

interface PostListProps {
  heading: string;
  intro?: string;
  posts: PostSummary[];
  /** The category being shown, so its link is marked current. */
  currentCategory?: string;
  /**
   * The main blog page only: this post leads as a full-width photo hero and
   * is left out of the grid below.
   */
  featured?: PostSummary;
  /** The main blog page, so "All posts" is marked current. */
  isIndex?: boolean;
}

/** The blog index, and every category and tag page, share this layout. */
export function PostList({ heading, intro, posts, currentCategory, featured, isIndex = false }: PostListProps) {
  const grid = featured ? posts.filter((post) => post.slug !== featured.slug) : posts;

  return (
    <>
      <SiteHeader overHeroId={featured ? FEATURED_POST_ID : undefined} />
      {featured && <FeaturedPost post={featured} />}
      <main
        className={`px-gutter pb-[clamp(64px,9vw,128px)] ${
          featured ? "pt-[clamp(48px,6vw,88px)]" : "pt-[clamp(120px,13vw,176px)]"
        }`}
      >
        <div className="mx-auto max-w-[1320px]">
          <header className="mb-[clamp(36px,5vw,64px)] grid gap-6">
            <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
              <h1 className="heading-page">{heading}</h1>
              {intro && <p className="max-w-[44ch] text-[17px]">{intro}</p>}
            </div>
            <nav aria-label="Blog categories">
              <ul className="flex flex-wrap gap-x-[clamp(16px,2.4vw,32px)] gap-y-2 text-[15px]">
                <li>
                  <Link
                    href="/blog"
                    aria-current={isIndex ? "page" : undefined}
                    className={`border-b-2 pb-0.5 ${isIndex ? "border-petroglyph font-semibold" : "border-transparent opacity-60 hover:opacity-100"}`}
                  >
                    All posts
                  </Link>
                </li>
                {BLOG_CATEGORIES.map((category) => (
                  <li key={category.value}>
                    <Link
                      href={`/blog/category/${category.value}`}
                      aria-current={currentCategory === category.value ? "page" : undefined}
                      className={`border-b-2 pb-0.5 ${
                        currentCategory === category.value
                          ? "border-petroglyph font-semibold"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      {category.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>

          {posts.length === 0 && <p className="text-[17px]">No posts here yet.</p>}

          {grid.length > 0 && (
            <div className="grid gap-x-[clamp(20px,3vw,40px)] gap-y-[clamp(40px,5vw,64px)] border-t border-varnish pt-[clamp(24px,3vw,40px)] sm:grid-cols-2 lg:grid-cols-3">
              {grid.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
