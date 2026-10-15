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

/**
 * Frames loaded into each collection's strip. More than fit on most screens,
 * so the strip always reaches the right edge; the rest are cut off by it.
 */
const STRIP_LENGTH = 8;

export default function PortfolioPage() {
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
          <div className="mx-auto max-w-[1320px]">
            <h1 className="font-display text-[clamp(48px,8vw,112px)] leading-none">Portfolio</h1>
          </div>
        </section>

        {/*
          Each collection as a strip of its first frames, every strip the same
          height and every frame whole at its own shape, like a length of film.
          The strip runs off the right edge of the page rather than squeezing
          its last frame to fit.
        */}
        <section aria-label="Collections" className="overflow-x-clip px-gutter pb-[clamp(64px,9vw,128px)]">
          <ol className="mx-auto max-w-[1320px]">
            {COLLECTIONS.map((collection) => (
              <li key={collection.slug} className="border-t border-varnish">
                <Link
                  href={`/portfolio/${collection.slug}`}
                  className="group block py-[clamp(24px,3.5vw,44px)]"
                >
                  <span className="mb-[clamp(18px,2.4vw,28px)] grid gap-x-[clamp(16px,3vw,48px)] gap-y-3 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end">
                    <span className="font-display text-[clamp(32px,3.6vw,52px)] leading-[1.02]">
                      {collection.title}
                    </span>
                    <span className="max-w-[52ch] text-[15.5px] leading-[1.7] text-balance lg:justify-self-end lg:text-right">
                      {collection.intro}
                    </span>
                  </span>
                  <span className="mr-[calc(50%-50vw)] flex gap-1.5 overflow-hidden [--strip-h:clamp(200px,22vw,320px)]">
                    {collection.photos.slice(0, STRIP_LENGTH).map((photo, j) => {
                      const ratio = photo.width / photo.height;
                      return (
                        <span
                          key={photo.src}
                          className="relative block h-(--strip-h) flex-none overflow-hidden bg-bone"
                          style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
                        >
                          <Image
                            src={photo.src}
                            alt={j === 0 ? photo.alt : ""}
                            fill
                            sizes={`${Math.round(320 * ratio)}px`}
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
