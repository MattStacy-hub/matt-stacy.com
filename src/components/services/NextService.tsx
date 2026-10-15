import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { OVERVIEW } from "@/data/service-pages";

/** Closes each service page with the next one in menu order, wrapping round. */
export function NextService({ slug }: { slug: string }) {
  const index = SERVICES.findIndex((service) => service.slug === slug);
  const next = SERVICES[(index + 1) % SERVICES.length];
  const photo = OVERVIEW.routes[next.slug].photo;

  return (
    <nav aria-label="More services" className="px-gutter pb-[clamp(64px,9vw,128px)]">
      <div className="mx-auto max-w-[1320px] border-t border-varnish pt-6">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
          <p className="text-[15px] opacity-70">Next service</p>
          <Link href="/services" className="text-xs font-semibold tracking-[0.06em] text-petroglyph">
            All services →
          </Link>
        </div>
        <Link
          href={`/services/${next.slug}`}
          className="group grid items-center gap-[clamp(20px,4vw,56px)] md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
        >
          <span className="relative block aspect-[3/2] overflow-hidden bg-bone">
            <Image
              src={photo.src}
              alt=""
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover transition-transform duration-1000 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.035]"
              style={{ objectPosition: photo.focus }}
            />
          </span>
          <span>
            <span className="font-display block text-[clamp(34px,4.6vw,64px)] leading-[1.02] text-balance">
              {next.heading}
            </span>
            <span className="mt-4 block max-w-[44ch] text-[16px]">{next.summary}</span>
            <span
              aria-hidden="true"
              className="mt-5 inline-block text-2xl text-petroglyph transition-transform group-hover:translate-x-1.5"
            >
              →
            </span>
          </span>
        </Link>
      </div>
    </nav>
  );
}
