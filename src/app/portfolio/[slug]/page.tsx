import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ContactCta } from "@/components/home/ContactCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { JustifiedGallery } from "@/components/portfolio/JustifiedGallery";
import { COLLECTIONS, getCollection } from "@/data/portfolio";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return COLLECTIONS.map((collection) => ({ slug: collection.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const collection = getCollection((await params).slug);
  if (!collection) return {};
  return pageMetadata({
    title: collection.seoTitle,
    description: collection.seoDescription,
    path: `/portfolio/${collection.slug}`,
    ogImage: collection.photos[0].src,
  });
}

export default async function CollectionPage({ params }: Props) {
  const collection = getCollection((await params).slug);
  if (!collection) notFound();

  const index = COLLECTIONS.indexOf(collection);
  const previous = COLLECTIONS[(index - 1 + COLLECTIONS.length) % COLLECTIONS.length];
  const next = COLLECTIONS[(index + 1) % COLLECTIONS.length];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: collection.title, path: `/portfolio/${collection.slug}` },
        ])}
      />
      <SiteHeader />
      <main>
        <section className="px-gutter pt-[clamp(120px,13vw,176px)] pb-[clamp(28px,4vw,48px)]">
          <div className="mx-auto max-w-[1600px]">
            {/* Every collection one click away, the current one underlined in red. */}
            <nav aria-label="Collections" className="mb-[clamp(28px,4vw,48px)]">
              <ul className="flex flex-wrap gap-x-[clamp(16px,2.4vw,32px)] gap-y-2 text-[15px]">
                <li>
                  <Link href="/portfolio" className="opacity-60 hover:opacity-100">
                    All
                  </Link>
                </li>
                {COLLECTIONS.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/portfolio/${c.slug}`}
                      aria-current={c.slug === collection.slug ? "page" : undefined}
                      className={`border-b-2 pb-0.5 ${
                        c.slug === collection.slug
                          ? "border-petroglyph font-semibold"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <h1 className="heading-page">{collection.title}</h1>
          </div>
        </section>

        <section className="px-gutter pb-[clamp(40px,5vw,64px)]">
          <div className="mx-auto max-w-[1600px]">
            <JustifiedGallery photos={collection.photos} label={`${collection.title} photographs`} />
          </div>
        </section>

        {/* Previous and next collections, each led by its cover frame. */}
        <nav aria-label="More collections" className="px-gutter pb-[clamp(64px,9vw,128px)]">
          <div className="mx-auto grid max-w-[1600px] gap-2 border-t border-bone pt-[clamp(40px,5vw,64px)] sm:grid-cols-2">
            {[
              { label: "Previous", collection: previous },
              { label: "Next", collection: next },
            ].map(({ label, collection: c }) => (
              <Link
                key={label}
                href={`/portfolio/${c.slug}`}
                className="group relative isolate flex aspect-[16/9] flex-col justify-end overflow-hidden p-[clamp(18px,2.5vw,32px)] text-white"
              >
                <Image
                  src={c.photos[0].src}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="-z-20 object-cover transition-transform duration-1000 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.03]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-[rgba(20,15,12,.75)] to-transparent to-60%"
                />
                <span className="text-[14px] opacity-80">{label}</span>
                <span className="heading-photo">{c.title}</span>
              </Link>
            ))}
          </div>
        </nav>

        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
