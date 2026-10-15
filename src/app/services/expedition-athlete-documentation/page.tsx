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
      lead={EXPEDITION.lead}
      ctaHeading={EXPEDITION.ctaHeading}
      ctaText={EXPEDITION.ctaText}
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

      {/*
        The climb in five stages, drawn as a route line with a node per
        stage, the way a topo marks belays.
      */}
      <section className="px-gutter pb-[clamp(64px,9vw,128px)]">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-[clamp(36px,5vw,64px)] grid gap-3">
            <h2 className="text-[clamp(30px,3.6vw,48px)] leading-[1.05] font-bold tracking-[-0.02em]">
              {EXPEDITION.ascentHeading}
            </h2>
            <p className="max-w-[52ch] text-[17px]">{EXPEDITION.ascentIntro}</p>
          </div>

          <ol className="relative grid gap-[clamp(40px,6vw,88px)] before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-varnish/30">
            {EXPEDITION.ascent.map((step, i) => {
              const portrait = step.photo.height > step.photo.width;
              const flip = i % 2 === 1;
              return (
                <li key={step.stage} className="relative pl-[clamp(36px,5vw,64px)]">
                  <span
                    aria-hidden="true"
                    className={`absolute top-1.5 left-0 size-[15px] rounded-full border-2 ${
                      i === 3 ? "border-petroglyph bg-petroglyph" : "border-varnish bg-canvas"
                    }`}
                  />
                  <div className="grid items-start gap-[clamp(20px,4vw,64px)] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
                    <div className={flip ? "md:order-2" : ""}>
                      <p className="mb-2 text-[15px] tabular-nums opacity-60">
                        {String(i + 1).padStart(2, "0")} / {String(EXPEDITION.ascent.length).padStart(2, "0")}
                      </p>
                      <h3 className="font-display mb-3 text-[clamp(28px,3vw,40px)] leading-[1.05]">
                        {step.stage}
                      </h3>
                      <p className="max-w-[40ch] text-[16px]">{step.text}</p>
                    </div>
                    <figure className={flip ? "md:order-1" : ""}>
                      <Image
                        src={step.photo.src}
                        alt={step.photo.alt}
                        width={step.photo.width}
                        height={step.photo.height}
                        sizes="(min-width: 768px) 55vw, 100vw"
                        className={`h-auto w-full ${portrait ? "max-w-[420px]" : ""} ${flip && portrait ? "md:ml-auto" : ""}`}
                      />
                      <figcaption className="mt-2.5 text-[13px] opacity-70">
                        {step.photo.title} · {step.photo.place}
                      </figcaption>
                    </figure>
                  </div>
                </li>
              );
            })}
          </ol>
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
            <div key={audience.heading} className="border-t border-bone/25 pt-6">
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
                  <th scope="col" className="pb-3 font-normal">Peak</th>
                  <th scope="col" className="pb-3 font-normal">Height</th>
                  <th scope="col" className="pb-3 font-normal">Route</th>
                  <th scope="col" className="pb-3 font-normal">Coverage</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {EXPEDITION.log.map((climb) => (
                  <tr
                    key={climb.peak}
                    className="grid grid-cols-[1fr_auto] gap-x-4 border-b border-bone py-4 md:table-row md:py-0"
                  >
                    <th scope="row" className="font-normal md:py-4 md:pr-6">
                      <span className="block text-[18px] leading-tight font-semibold">{climb.peak}</span>
                      <span className="text-[14px] opacity-70">{climb.range}</span>
                    </th>
                    <td className="text-right text-[15px] tabular-nums md:py-4 md:pr-6 md:text-left">
                      {climb.height || "—"}
                    </td>
                    <td className="col-span-2 mt-1.5 text-[15px] md:py-4 md:pr-6">{climb.style}</td>
                    <td className="col-span-2 text-[14px] opacity-70 md:py-4">{climb.coverage}</td>
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
            <figcaption className="mt-2.5 text-[13px] opacity-70">
              {EXPEDITION.logPhoto.title} · {EXPEDITION.logPhoto.place}
            </figcaption>
          </figure>
        </div>
      </section>
    </ServicePageShell>
  );
}
