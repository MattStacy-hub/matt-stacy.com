import Link from "next/link";
import { Mark } from "@/components/brand/Lockup";
import { BLOG_QUOTE } from "@/data/home";

export function BlogQuote() {
  return (
    <section className="px-gutter py-[clamp(64px,9vw,128px)]">
      <figure className="mx-auto grid max-w-[1100px] justify-items-center text-center">
        <Mark className="mb-[clamp(20px,3vw,32px)] h-16 text-petroglyph" />
        <blockquote className="font-display text-[clamp(28px,3.6vw,48px)] leading-[1.25] tracking-[-0.01em] text-balance [font-variation-settings:'opsz'_96]">
          “{BLOG_QUOTE.quote}”
        </blockquote>
        <figcaption className="label mt-7">
          <Link href={BLOG_QUOTE.href} className="group inline-flex gap-2 opacity-70 hover:opacity-100">
            From “{BLOG_QUOTE.post}” on the blog
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </figcaption>
      </figure>
    </section>
  );
}
