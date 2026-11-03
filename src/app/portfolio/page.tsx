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

        {/* Each collection as one block: its cover photo with the title on it. */}
        <section aria-label="Collections" className="px-gutter pb-[clamp(64px,9vw,128px)]">
          <ul className="mx-auto grid max-w-[1320px] gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {COLLECTIONS.map((collection) => {
              const cover = collection.photos[0];
              return (
                <li key={collection.slug}>
                  <Link
                    href={`/portfolio/${collection.slug}`}
                    className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden p-[clamp(20px,2.4vw,32px)]"
                  >
                    <Image
                      src={cover.src}
                      alt={cover.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="-z-20 object-cover transition-transform duration-1000 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.04]"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 bg-gradient-to-t from-[rgba(20,15,12,.7)] via-[rgba(20,15,12,.15)] via-40% to-transparent"
                    />
                    <span className="font-display text-[clamp(30px,3vw,44px)] leading-[1.02] text-white">
                      {collection.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
