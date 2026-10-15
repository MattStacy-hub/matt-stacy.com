import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import { tagSlug } from "@/data/blog";

/** Reads posts from content/blog/ at build time. */
const reader = createReader(process.cwd(), keystaticConfig);

export interface PostSummary {
  slug: string;
  title: string;
  publishedAt: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  featured: boolean;
  categories: readonly string[];
  tags: readonly string[];
}

/** Every post, newest first. */
export async function getPosts(): Promise<PostSummary[]> {
  const entries = await reader.collections.posts.all();
  return entries
    .map(({ slug, entry }) => ({
      slug,
      title: entry.title,
      publishedAt: entry.publishedAt ?? "",
      excerpt: entry.excerpt,
      cover: entry.cover ?? "",
      coverAlt: entry.coverAlt,
      featured: entry.featured,
      categories: entry.categories,
      tags: entry.tags,
    }))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

/** The post that leads the blog page: the newest ticked "featured", else the newest. */
export function pickFeatured(posts: PostSummary[]): PostSummary | undefined {
  return posts.find((post) => post.featured) ?? posts[0];
}

export async function getPost(slug: string) {
  const entry = await reader.collections.posts.read(slug, { resolveLinkedFiles: true });
  if (!entry) return null;
  return { slug, ...entry };
}

/** Every tag in use, with its URL slug and post count. */
export async function getTags() {
  const counts = new Map<string, { tag: string; count: number }>();
  for (const post of await getPosts()) {
    for (const tag of post.tags) {
      const key = tagSlug(tag);
      const found = counts.get(key);
      if (found) found.count += 1;
      else counts.set(key, { tag, count: 1 });
    }
  }
  return [...counts.entries()].map(([slug, { tag, count }]) => ({ slug, tag, count }));
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
