import Image from "next/image";
import { ServicePageShell } from "@/components/services/ServicePageShell";
import { DRONE } from "@/data/service-pages";
import { SERVICES } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

const SLUG = "drone-cinematography";
const service = SERVICES.find((s) => s.slug === SLUG)!;

export const metadata = pageMetadata({
  title: service.seoTitle,
  description: service.seoDescription,
  path: `/services/${SLUG}`,
  ogImage: DRONE.hero.src,
});

export default function DronePage() {
  return (
    <ServicePageShell
      slug={SLUG}
      hero={DRONE.hero}
      ctaHeading={DRONE.ctaHeading}
      ctaText={DRONE.ctaText}
    >
      {/* One mountain from the ground and from the air, side by side. */}
      <section className="px-gutter py-[clamp(64px,9vw,128px)]">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-[clamp(28px,4vw,48px)] grid gap-[clamp(16px,4vw,64px)] md:grid-cols-[5fr_7fr] md:items-end">
            <h2 className="text-[clamp(30px,3.6vw,48px)] leading-[1.05] font-bold tracking-[-0.02em] text-balance">
              {DRONE.pairHeading}
            </h2>
            <p className="font-display max-w-[46ch] text-[clamp(19px,1.7vw,23px)] leading-[1.45] tracking-normal [font-variation-settings:'opsz'_36]">
              {DRONE.pairText}
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {DRONE.pair.map((view) => (
              <figure key={view.label} className="relative aspect-[3/2] overflow-hidden bg-bone">
                <Image
                  src={view.photo.src}
                  alt={view.photo.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <figcaption className="absolute top-4 left-4 bg-varnish/85 px-3 py-1.5 text-[13px] font-semibold text-canvas">
                  {view.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* What the drone is hired for, each over one of its own frames. */}
      <section className="bg-varnish py-[clamp(64px,9vw,128px)] text-canvas">
        <h2 className="mb-[clamp(28px,4vw,48px)] px-gutter text-[clamp(30px,3.6vw,48px)] leading-none font-bold tracking-[-0.02em]">
          {DRONE.usesHeading}
        </h2>
        <ul className="grid gap-2 px-gutter md:grid-cols-2">
          {DRONE.uses.map((use) => (
            <li
              key={use.heading}
              className="relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden p-[clamp(20px,3vw,40px)] sm:aspect-[3/2]"
            >
              <Image
                src={use.photo.src}
                alt={use.photo.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="-z-20 object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-t from-[rgba(20,15,12,.85)] via-[rgba(20,15,12,.25)] via-45% to-transparent"
              />
              <h3 className="mb-2 text-[clamp(22px,2.2vw,28px)] leading-tight font-semibold tracking-[-0.01em] text-white">
                {use.heading}
              </h3>
              <p className="max-w-[40ch] text-[15px] text-bone">{use.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Practical notes, set like the locations list on the homepage. */}
      <section className="px-gutter py-[clamp(64px,9vw,128px)]">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="mb-[clamp(28px,4vw,44px)] text-[clamp(26px,2.8vw,36px)] leading-[1.1] font-bold tracking-[-0.015em]">
            {DRONE.notesHeading}
          </h2>
          <div className="grid gap-[clamp(24px,3vw,40px)] md:grid-cols-3">
            {DRONE.notes.map((note) => (
              <div key={note.heading} className="border-t border-varnish pt-4.5">
                <h3 className="mb-2 text-[19px] leading-tight font-semibold">{note.heading}</h3>
                <p className="max-w-[40ch] text-[15px] leading-[1.7]">{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServicePageShell>
  );
}
