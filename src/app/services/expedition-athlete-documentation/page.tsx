import Image from "next/image";
import { ServicePageShell } from "@/components/services/ServicePageShell";
import { EXPEDITION } from "@/data/service-pages";
import { SERVICES } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

const SLUG = "expedition-athlete-documentation";
const service = SERVICES.find((s) => s.slug === SLUG)!;

export const metadata = pageMetadata({
  title: service.seoTitle,
  description: service.seoDescription,
  path: `/services/${SLUG}`,
  ogImage: EXPEDITION.hero.src,
});

export default function ExpeditionPage() {
  return (
    <ServicePageShell
      slug={SLUG}
      hero={EXPEDITION.hero}
    >
      {/* Who's holding the camera. */}
      <section className="px-gutter py-[clamp(64px,9vw,128px)]">
        <div className="mx-auto grid max-w-[1320px] gap-[clamp(28px,6vw,96px)] md:grid-cols-[5fr_7fr]">
          <p className="font-display text-[clamp(30px,3.8vw,52px)] leading-[1.1] text-balance">
            {EXPEDITION.statement}
          </p>
          <div className="grid max-w-[62ch] content-start gap-5 text-[17px]">
            {EXPEDITION.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Two kinds of client, under one photo of the rope. */}
      <section className="bg-varnish text-canvas">
        <div className="relative aspect-[16/7] min-h-[260px] w-full">
          <Image
            src={EXPEDITION.ropePhoto.src}
            alt={EXPEDITION.ropePhoto.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="mx-auto grid max-w-[1320px] gap-[clamp(32px,5vw,80px)] px-gutter py-[clamp(48px,7vw,96px)] md:grid-cols-2">
          {EXPEDITION.audiences.map((audience) => (
            <div key={audience.heading}>
              <h2 className="mb-3 text-[clamp(22px,2.2vw,28px)] leading-tight font-semibold tracking-[-0.01em]">
                {audience.heading}
              </h2>
              <p className="max-w-[46ch] text-bone">{audience.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The record, set as a climbing log. */}
      <section className="px-gutter py-[clamp(64px,9vw,128px)]">
        <div className="mx-auto grid max-w-[1320px] items-start gap-[clamp(32px,5vw,72px)] lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <h2 className="mb-[clamp(24px,3vw,36px)] text-[clamp(26px,2.8vw,36px)] leading-[1.1] font-bold tracking-[-0.015em]">
              {EXPEDITION.logHeading}
            </h2>
            <table className="block w-full border-collapse text-left md:table">
              <thead className="sr-only md:not-sr-only">
                <tr className="border-b border-varnish text-[13px] opacity-70">
                  <th scope="col" className="pb-3 font-normal">Objective</th>
                  <th scope="col" className="pb-3 font-normal">Route</th>
                  <th scope="col" className="pb-3 font-normal">Coverage</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {EXPEDITION.log.map((climb) => (
                  <tr
                    key={climb.objective}
                    className="grid border-b border-bone py-4 md:table-row md:py-0"
                  >
                    <th scope="row" className="font-normal md:py-4 md:pr-6">
                      <span className="block text-[18px] leading-tight font-semibold">{climb.objective}</span>
                      <span className="text-[14px] opacity-70">{climb.range}</span>
                    </th>
                    <td className="mt-1.5 text-[15px] md:py-4 md:pr-6">{climb.style}</td>
                    <td className="text-[14px] opacity-70 md:py-4">{climb.coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figure className="hidden lg:block">
            <Image
              src={EXPEDITION.logPhoto.src}
              alt={EXPEDITION.logPhoto.alt}
              width={EXPEDITION.logPhoto.width}
              height={EXPEDITION.logPhoto.height}
              sizes="300px"
              className="h-auto w-full"
            />
          </figure>
        </div>
      </section>
    </ServicePageShell>
  );
}
