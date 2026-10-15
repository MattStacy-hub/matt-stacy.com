import { notFound } from "next/navigation";
import { PostList } from "@/components/blog/PostList";
import { tagSlug } from "@/data/blog";
import { getPosts, getTags } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  return (await getTags()).map((t) => ({ tag: t.slug }));
}

export const dynamicParams = false;

async function findTag(slug: string) {
  return (await getTags()).find((t) => t.slug === slug);
}

export async function generateMetadata({ params }: Props) {
  const tag = await findTag((await params).tag);
  if (!tag) return {};
  return pageMetadata({
    title: `Posts tagged “${tag.tag}”`,
    description: `Blog posts about ${tag.tag} from Matt Stacy, adventure photographer in Cusco, Peru.`,
    path: `/blog/tag/${tag.slug}`,
    // Thin pages: keep them out of search results, but let links be followed.
    noIndex: true,
  });
}

export default async function TagPage({ params }: Props) {
  const tag = await findTag((await params).tag);
  if (!tag) notFound();
  const posts = (await getPosts()).filter((p) => p.tags.some((t) => tagSlug(t) === tag.slug));
  return <PostList heading={`#${tag.tag}`} posts={posts} />;
}
