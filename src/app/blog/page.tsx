import { PostList } from "@/components/blog/PostList";
import { getPosts, pickFeatured } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog: Climbing, Trekking and Photography in Peru",
  description:
    "Trip reports from the Peruvian Andes, alpine climbs and treks, and notes on adventure photography and filmmaking, by Matt Stacy.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <PostList
      heading="Blog"
      posts={posts}
      featured={pickFeatured(posts)}
      isIndex
    />
  );
}
