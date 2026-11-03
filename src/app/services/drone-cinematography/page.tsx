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
    >
      {/* What the drone is hired for, each over one of its own frames. */}
      <section className="bg-varnish pt-[clamp(64px,9vw,128px)] text-canvas">
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
                style={{ objectPosition: use.photo.focus }}
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
    </ServicePageShell>
  );
}
