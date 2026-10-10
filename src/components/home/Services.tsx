import Link from "next/link";
import { SERVICES } from "@/data/services";

export function Services() {
  return (
    <section id="about" className="px-gutter py-[clamp(64px,9vw,128px)]">
      <div className="mx-auto grid max-w-[1320px] items-start gap-[clamp(32px,6vw,96px)] md:grid-cols-[5fr_7fr]">
        <h2 className="text-[clamp(30px,3.6vw,48px)] leading-[1.05] font-bold tracking-[-0.02em] text-balance">
          Outdoor and adventure photography and film in the high Andes.
        </h2>
        <p className="max-w-[62ch] text-[17px]">
          I make photographs and films for brands, for athletes, and for
          audiovisual productions that require a professional who excels in
          extreme environments. Expedition and athlete documentation, drone
          cinematography, adventure photography and brand campaigns.
        </p>
      </div>

      <div
        id="services"
        className="mx-auto mt-[clamp(48px,6vw,80px)] grid max-w-[1320px] gap-[clamp(20px,3vw,40px)] border-t border-varnish sm:grid-cols-2 lg:grid-cols-4"
      >
        {SERVICES.map((service) => (
          <article key={service.slug} className="min-w-0 pt-5.5">
            <h3 className="mb-2 text-[22px] leading-tight font-semibold tracking-[-0.01em]">
              {service.heading}
            </h3>
            <p className="max-w-[36ch] text-[15px] leading-[1.7]">{service.summary}</p>
            {/* Linked once the service's own page exists. */}
            {!service.comingSoon && (
              <Link
                href={`/services/${service.slug}`}
                className="mt-3.5 inline-block text-xs font-semibold tracking-[0.06em] text-petroglyph"
              >
                Learn more →
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
