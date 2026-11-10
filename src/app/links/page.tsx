import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BIO_LINKS, LINKS_PAGE } from "@/data/links";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Links",
  description:
    "Prints, guided trips with Andes Adventure Visuals, brand and athlete work, and the YouTube channel of Matt Stacy, photographer in Cusco, Peru.",
  path: "/links",
});

export default function LinksPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-gutter pt-[clamp(112px,12vw,160px)] pb-[clamp(64px,9vw,120px)]">
        <div className="mx-auto max-w-[560px]">
          <header className="mb-[clamp(28px,4vw,44px)] text-center">
            <h1 className="heading-statement mb-3">{LINKS_PAGE.heading}</h1>
            <p className="text-[15px] text-balance opacity-80">{LINKS_PAGE.lead}</p>
          </header>

          <ul className="border-t border-varnish">
            {BIO_LINKS.map((link) => {
              const external = link.href.startsWith("http");
              const row = (
                <>
                  <span className="flex-1 py-4 text-[16px] font-semibold leading-snug">
                    {link.label}
                  </span>
                  {/* Drawn, not a text glyph: phones render the arrow
                      characters as emoji. */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 12"
                    className="h-3 w-5 flex-none opacity-60 transition-[transform,opacity] group-hover:translate-x-1 group-hover:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M0 6h18.5M13.5 1l5 5-5 5" />
                  </svg>
                  <span className="relative size-[68px] flex-none overflow-hidden bg-bone">
                    <Image
                      src={link.photo}
                      alt=""
                      fill
                      sizes="136px"
                      priority
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </span>
                </>
              );
              const className =
                "group flex items-center gap-4 border-b border-bone py-2 pl-1 transition-colors hover:bg-bone/40";
              return (
                <li key={link.label}>
                  {external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {row}
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ) : (
                    <Link href={link.href} className={className}>
                      {row}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
