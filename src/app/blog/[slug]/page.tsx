import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ContactCta } from "@/components/home/ContactCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { PostBody } from "@/components/blog/PostBody";
import { categoryLabel, tagSlug } from "@/data/blog";
import { SITE_CONFIG } from "@/data/site";
import { formatDate, getPost, getPosts } from "@/lib/blog";
import { breadcrumbSchema, canonicalUrl, pageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return (await getPosts()).map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const post = await getPost((await params).slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogImage: post.cover ?? undefined,
  });
}

export default async function PostPage({ params }: Props) {
  const post = await getPost((await params).slug);
  if (!post) notFound();

  // Older and newer neighbors, for the links at the foot of the post.
  const posts = await getPosts();
  const index = posts.findIndex((p) => p.slug === post.slug);
  const newer = posts[index - 1];
  const older = posts[index + 1];
  const url = canonicalUrl(`/blog/${post.slug}`);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedAt,
          image: post.cover ? `${SITE_CONFIG.url}${post.cover}` : undefined,
          url,
          author: { "@id": `${SITE_CONFIG.url}/#matt` },
          keywords: post.tags.join(", ") || undefined,
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <SiteHeader />
      <main>
        {/*
          One column for the post: text, photos and the links below share its
          edges. The cover runs a little wider to lead the page, and the title
          block is centered over it, as on the old site.
        */}
        <article className="px-gutter pt-[clamp(120px,13vw,176px)]">
          <div className="mx-auto max-w-[1120px]">
            <header className="mx-auto max-w-[960px] text-center">
              <p className="mb-5 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[15px]">
                <time dateTime={post.publishedAt ?? undefined} className="opacity-65">
                  {post.publishedAt && formatDate(post.publishedAt)}
                </time>
                {post.categories.map((category) => (
                  <Link
                    key={category}
                    href={`/blog/category/${category}`}
                    className="font-semibold text-petroglyph hover:underline"
                  >
                    {categoryLabel(category)}
                  </Link>
                ))}
              </p>
              <h1 className="heading-page">
                {post.title}
              </h1>
            </header>

            {post.cover && (
              <figure className="mt-[clamp(32px,4vw,56px)]">
                <Image
                  src={post.cover}
                  alt={post.coverAlt}
                  width={0}
                  height={0}
                  priority
                  sizes="(min-width: 1220px) 1120px, 100vw"
                  className="h-auto max-h-[80vh] w-full object-cover"
                />
              </figure>
            )}

            <div className="mx-auto max-w-[960px] py-[clamp(40px,6vw,80px)]">
              <PostBody node={post.content.node} />

              {post.tags.length > 0 && (
                <ul aria-label="Tags" className="mt-14 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <li key={tag}>
                      <Link
                        href={`/blog/tag/${tagSlug(tag)}`}
                        className="inline-block border border-bone px-3 py-1.5 text-[14px] hover:border-varnish"
                      >
                        #{tag}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </article>

        {(newer || older) && (
          <nav aria-label="More posts" className="px-gutter pb-[clamp(64px,9vw,128px)]">
            <div className="mx-auto grid max-w-[960px] gap-6 border-t border-varnish pt-6 sm:grid-cols-2">
              {older && (
                <Link href={`/blog/${older.slug}`} className="group grid gap-1.5">
                  <span className="text-[14px] opacity-65">← Older</span>
                  <span className="font-display text-[clamp(22px,2.2vw,28px)] leading-[1.15] group-hover:text-petroglyph">
                    {older.title}
                  </span>
                </Link>
              )}
              {newer && (
                <Link href={`/blog/${newer.slug}`} className="group grid gap-1.5 sm:col-start-2 sm:text-right">
                  <span className="text-[14px] opacity-65">Newer →</span>
                  <span className="font-display text-[clamp(22px,2.2vw,28px)] leading-[1.15] group-hover:text-petroglyph">
                    {newer.title}
                  </span>
                </Link>
              )}
            </div>
          </nav>
        )}

        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
