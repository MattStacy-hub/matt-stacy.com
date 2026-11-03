import Image from "next/image";
import { ServicePageShell } from "@/components/services/ServicePageShell";
import { BRAND } from "@/data/service-pages";
import { SERVICES } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

const SLUG = "brand-commercial";
const service = SERVICES.find((s) => s.slug === SLUG)!;

export const metadata = pageMetadata({
  title: service.seoTitle,
  description: service.seoDescription,
  path: `/services/${SLUG}`,
  ogImage: BRAND.hero.src,
});

/** The process bar darkens step by step and lands on red at delivery. */
const STEP_COLORS = ["bg-bone", "bg-clay", "bg-varnish", "bg-petroglyph"];

export default function BrandCommercialPage() {
  return (
    <ServicePageShell
      slug={SLUG}
      hero={BRAND.hero}
    >
      <section className="px-gutter py-[clamp(64px,9vw,128px)]">
        <div className="mx-auto grid max-w-[60ch] justify-items-center gap-[clamp(16px,2vw,24px)] text-center">
          <p className="heading-statement">
            {BRAND.statement}
          </p>
          <p className="max-w-[56ch] text-[17px]">{BRAND.body}</p>
        </div>
      </section>

      {/* An index of the work, one line each, rather than a grid of cards. */}
      <section className="px-gutter pb-[clamp(64px,9vw,128px)]">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="mb-[clamp(24px,3vw,36px)] heading-section">
            {BRAND.capabilitiesHeading}
          </h2>
          <ul className="border-t border-varnish">
            {BRAND.capabilities.map((capability) => (
              <li
                key={capability.heading}
                className="grid gap-1.5 border-b border-bone py-5 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-center md:gap-[clamp(24px,6vw,96px)]"
              >
                <h3 className="heading-item font-normal">
                  {capability.heading}
                </h3>
                <p className="max-w-[56ch] text-[16px]">{capability.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Film" className="px-gutter pb-[clamp(64px,9vw,128px)]">
        <div className="relative aspect-video bg-varnish">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${BRAND.video.id}?rel=0`}
            title={BRAND.video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 size-full"
          />
        </div>
      </section>

      {/* Logistics laid out like a call sheet beside a photo of the team on the approach. */}
      <section className="bg-varnish px-gutter py-[clamp(64px,9vw,128px)] text-canvas">
        <div className="mx-auto grid max-w-[1320px] gap-[clamp(32px,5vw,72px)] md:grid-cols-2">
          <div>
            <h2 className="mb-[clamp(24px,3vw,36px)] heading-section">
              {BRAND.productionHeading}
            </h2>
            <dl className="border border-bone/20">
              {BRAND.production.map((line, i) => (
                <div
                  key={line.item}
                  className={`grid gap-1 px-[clamp(16px,2.5vw,28px)] py-4.5 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)_auto] sm:items-center sm:gap-6 ${
                    i > 0 ? "border-t border-bone/15" : ""
                  }`}
                >
                  <dt className="text-[17px] font-semibold">{line.item}</dt>
                  <dd className="text-[15px] text-bone/85">{line.detail}</dd>
                  <dd className="text-[13px] font-semibold text-petroglyph sm:text-right">Handled</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="relative min-h-[320px] overflow-hidden bg-bone/10">
            <Image
              src={BRAND.productionPhoto.src}
              alt={BRAND.productionPhoto.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="px-gutter py-[clamp(64px,9vw,128px)]">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="mb-[clamp(32px,5vw,56px)] heading-section">
            {BRAND.processHeading}
          </h2>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-1.5">
            {BRAND.process.map((step, i) => (
              <li key={step.name} className="text-center">
                <span aria-hidden="true" className={`mb-5 block h-1.5 ${STEP_COLORS[i]}`} />
                <h3 className="heading-item mb-2">{step.name}</h3>
                <p className="mx-auto max-w-[34ch] px-3 text-[15px] leading-[1.7]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </ServicePageShell>
  );
}
