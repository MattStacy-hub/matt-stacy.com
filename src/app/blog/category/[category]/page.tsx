import { PostList } from "@/components/blog/PostList";
import { BLOG_CATEGORIES } from "@/data/blog";
import { getPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((c) => ({ category: c.value }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const label = BLOG_CATEGORIES.find((c) => c.value === category)?.label ?? category;
  return pageMetadata({
    title: `${label}: Blog`,
    description: `Posts about ${label.toLowerCase()} from Matt Stacy, adventure photographer in Cusco, Peru.`,
    path: `/blog/category/${category}`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const label = BLOG_CATEGORIES.find((c) => c.value === category)?.label ?? category;
  const posts = (await getPosts()).filter((p) => p.categories.includes(category));
  return <PostList heading={label} posts={posts} currentCategory={category} />;
}
