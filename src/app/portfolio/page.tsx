import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ContactCta } from "@/components/home/ContactCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { COLLECTIONS } from "@/data/portfolio";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio: Adventure, Extreme Sports and Aerial Photography",
  description:
    "Six collections of adventure, extreme sports, aerial, landscape and fine art photography from the Peruvian Andes and North America, by Matt Stacy.",
  path: "/portfolio",
  ogImage: COLLECTIONS[0].photos[0].src,
});

/** Frames shown in each collection's strip on this page. */
const STRIP_LENGTH = 4;

export default function PortfolioPage() {
  const total = new Set(COLLECTIONS.flatMap((c) => c.photos.map((p) => p.src))).size;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />
      <SiteHeader />
      <main>
        <section className="px-gutter pt-[clamp(136px,15vw,200px)] pb-[clamp(40px,5vw,72px)]">
          <div className="mx-auto flex max-w-[1320px] flex-wrap items-end justify-between gap-6">
            <h1 className="font-display text-[clamp(48px,8vw,112px)] leading-none">Portfolio</h1>
            <p className="max-w-[40ch] text-[clamp(16px,1.3vw,18px)]">
              {COLLECTIONS.length} collections, {total} frames. Click into any of them to see the
              full set.
            </p>
          </div>
        </section>

        {/*
          Each collection as a strip of its first frames, kept at their real
          shapes, like a row cut from a contact sheet.
        */}
        <section aria-label="Collections" className="px-gutter pb-[clamp(64px,9vw,128px)]">
          <ol className="mx-auto max-w-[1320px]">
            {COLLECTIONS.map((collection, i) => (
              <li key={collection.slug} className="border-t border-varnish">
                <Link
                  href={`/portfolio/${collection.slug}`}
                  className="group grid grid-cols-1 gap-[clamp(16px,3vw,48px)] py-[clamp(24px,3.5vw,44px)] lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"
                >
                  <span className="grid content-start gap-3">
                    <span className="flex items-baseline gap-4">
                      <span className="text-[15px] tabular-nums opacity-60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[clamp(32px,3.6vw,52px)] leading-[1.02]">
                        {collection.title}
                      </span>
                    </span>
                    <span className="max-w-[40ch] text-[15.5px] leading-[1.7]">{collection.intro}</span>
                    <span className="mt-1 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.06em] text-petroglyph">
                      {collection.photos.length} frames
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </span>
                  <span className="flex min-w-0 items-start gap-1.5 [--strip-h:clamp(90px,9vw,130px)]">
                    {collection.photos.slice(0, STRIP_LENGTH).map((photo, j) => {
                      const ratio = photo.width / photo.height;
                      return (
                        <span
                          key={photo.src}
                          className={`relative block min-w-0 overflow-hidden bg-bone ${j === STRIP_LENGTH - 1 ? "max-sm:hidden" : ""}`}
                          style={{
                            flexGrow: ratio,
                            flexBasis: `calc(var(--strip-h) * ${ratio})`,
                            aspectRatio: `${photo.width} / ${photo.height}`,
                          }}
                        >
                          <Image
                            src={photo.src}
                            alt={j === 0 ? photo.alt : ""}
                            fill
                            sizes="(min-width: 1024px) 22vw, 40vw"
                            className="object-cover transition-transform duration-1000 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.04]"
                          />
                        </span>
                      );
                    })}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
