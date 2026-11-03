import Link from "next/link";
import { SERVICES } from "@/data/services";

export function Services() {
  return (
    <section id="about" className="px-gutter py-[clamp(32px,4.5vw,64px)]">
      <div
        id="services"
        className="mx-auto grid max-w-[1320px] gap-[clamp(20px,3vw,40px)] sm:grid-cols-2 lg:grid-cols-4"
      >
        {SERVICES.map((service) => (
          <article key={service.slug} className="reveal-up min-w-0 pt-5.5 text-center">
            <h3 className="mb-2 text-center text-[22px] leading-tight font-semibold tracking-[-0.01em]">
              {service.heading}
            </h3>
            <p className="mx-auto max-w-[36ch] text-[15px] leading-[1.7]">{service.summary}</p>
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
