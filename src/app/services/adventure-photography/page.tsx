import Image from "next/image";
import { ServicePageShell } from "@/components/services/ServicePageShell";
import { ADVENTURE } from "@/data/service-pages";
import { SERVICES } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

const SLUG = "adventure-photography";
const service = SERVICES.find((s) => s.slug === SLUG)!;

export const metadata = pageMetadata({
  title: service.seoTitle,
  description: service.seoDescription,
  path: `/services/${SLUG}`,
  ogImage: ADVENTURE.hero.src,
});

export default function AdventurePhotographyPage() {
  return (
    <ServicePageShell
      slug={SLUG}
      hero={ADVENTURE.hero}
    >
      <section className="px-gutter py-[clamp(64px,9vw,128px)]">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="font-display mb-6 text-[clamp(32px,4.4vw,60px)] leading-[1.08] text-balance">
            {ADVENTURE.statement}
          </p>
          <p className="mx-auto max-w-[58ch] text-[17px]">{ADVENTURE.body}</p>
        </div>
      </section>

      {/* Three trip shapes, so a visitor can find theirs before reading further. */}
      <section className="px-gutter pb-[clamp(64px,9vw,128px)]">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="mb-[clamp(28px,4vw,44px)] text-[clamp(30px,3.6vw,48px)] leading-[1.05] font-bold tracking-[-0.02em]">
            {ADVENTURE.formatsHeading}
          </h2>
          <ul className="grid gap-[clamp(32px,3vw,40px)] md:grid-cols-3">
            {ADVENTURE.formats.map((format) => (
              <li key={format.name} className="min-w-0">
                <div className="relative mb-5 aspect-[4/5] overflow-hidden bg-bone">
                  <Image
                    src={format.photo.src}
                    alt={format.photo.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: format.photo.focus }}
                  />
                </div>
                <h3 className="font-display mb-2 text-[clamp(26px,2.6vw,34px)] leading-[1.1]">
                  {format.name}
                </h3>
                <p className="mb-3 text-[14px] leading-snug font-semibold opacity-70">{format.examples}</p>
                <p className="max-w-[38ch] text-[15px] leading-[1.7]">{format.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Three phases on one line: a short trip, not a project plan. */}
      <section className="bg-bone/45 px-gutter py-[clamp(64px,9vw,128px)]">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="mb-[clamp(32px,5vw,56px)] text-[clamp(26px,2.8vw,36px)] leading-[1.1] font-bold tracking-[-0.015em]">
            {ADVENTURE.phasesHeading}
          </h2>
          <ol className="grid gap-10 md:grid-cols-2 md:gap-[clamp(24px,3vw,48px)] lg:grid-cols-4">
            {ADVENTURE.phases.map((phase) => (
              <li key={phase.name} className="relative border-t-2 border-varnish pt-6">
                <span
                  aria-hidden="true"
                  className="absolute -top-[7px] left-0 size-3 rounded-full bg-petroglyph"
                />
                <h3 className="font-display mb-2.5 text-[clamp(26px,2.6vw,34px)] leading-[1.1]">
                  {phase.name}
                </h3>
                <p className="max-w-[40ch] text-[15.5px] leading-[1.7]">{phase.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-gutter py-[clamp(64px,9vw,128px)]">
        <div className="mx-auto grid max-w-[1100px] items-center gap-[clamp(32px,6vw,96px)] md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
          <figure>
            <Image
              src={ADVENTURE.includedPhoto.src}
              alt={ADVENTURE.includedPhoto.alt}
              width={ADVENTURE.includedPhoto.width}
              height={ADVENTURE.includedPhoto.height}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="h-auto w-full"
            />
          </figure>
          <div>
            <h2 className="mb-4 text-[clamp(26px,2.8vw,36px)] leading-[1.1] font-bold tracking-[-0.015em]">
              {ADVENTURE.includedHeading}
            </h2>
            <p className="mb-[clamp(20px,3vw,32px)] max-w-[52ch] text-[17px]">{ADVENTURE.includedIntro}</p>
            <ul className="border-t border-varnish">
              {ADVENTURE.included.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-b border-bone py-3.5 text-[17px]"
                >
                  <span aria-hidden="true" className="h-0.5 w-3.5 flex-none translate-y-[-4px] bg-petroglyph" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </ServicePageShell>
  );
}
