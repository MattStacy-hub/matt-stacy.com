import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ContactCta } from "@/components/home/ContactCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { OVERVIEW } from "@/data/service-pages";
import { SERVICES } from "@/data/services";
import { breadcrumbSchema, pageMetadata, professionalServiceSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services: Adventure Photography, Film and Drone in Peru",
  description:
    "Expedition and athlete documentation, drone cinematography, adventure photography for travelers, and brand campaigns, from a photographer based in Cusco, Peru.",
  path: "/services",
});

/** A cell in the comparison table. */
function Mark({ value }: { value: "yes" | "no" | "add-on" }) {
  if (value === "yes") {
    return (
      <>
        <span aria-hidden="true" className="inline-block size-2.5 rounded-full bg-petroglyph" />
        <span className="sr-only">Included</span>
      </>
    );
  }
  if (value === "add-on") {
    return <span className="text-[13px] font-semibold">Add-on</span>;
  }
  return (
    <>
      <span aria-hidden="true" className="opacity-35">—</span>
      <span className="sr-only">Not included</span>
    </>
  );
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={professionalServiceSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <SiteHeader />
      <main>
        {/* No photo up top: the four rows below are the pictures. */}
        <section className="px-gutter pt-[clamp(136px,15vw,200px)] pb-[clamp(48px,6vw,80px)]">
          <div className="mx-auto max-w-[1320px]">
            <h1 className="font-display mb-6 max-w-[18ch] text-[clamp(40px,6.4vw,88px)] leading-none text-balance">
              {OVERVIEW.heading}
            </h1>
            <p className="max-w-[54ch] text-[clamp(17px,1.4vw,19px)]">{OVERVIEW.intro}</p>
          </div>
        </section>

        {/* Each service introduced by who it's for, so visitors find themselves first. */}
        <section aria-label="Services" className="px-gutter pb-[clamp(64px,9vw,128px)]">
          <ol className="mx-auto max-w-[1320px] border-b border-varnish">
            {SERVICES.map((service) => {
              const route = OVERVIEW.routes[service.slug];
              return (
                <li key={service.slug} className="border-t border-varnish">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group grid items-center gap-[clamp(20px,4vw,64px)] py-[clamp(24px,3.5vw,44px)] md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
                  >
                    <span>
                      <span className="font-display mb-3 block text-[clamp(18px,1.7vw,22px)] leading-snug italic opacity-80 [font-variation-settings:'opsz'_36]">
                        {route.audience}
                      </span>
                      <span className="block text-[clamp(30px,3.8vw,52px)] leading-[1.02] font-bold tracking-[-0.02em] text-balance">
                        {service.heading}
                      </span>
                      <span className="mt-4 block max-w-[48ch] text-[16px]">{service.summary}</span>
                      <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.06em] text-petroglyph">
                        See the service
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </span>
                    <span className="relative block aspect-[3/2] overflow-hidden bg-bone">
                      <Image
                        src={route.photo.src}
                        alt={route.photo.alt}
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover transition-transform duration-1000 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.035]"
                        style={{ objectPosition: route.photo.focus }}
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="px-gutter pb-[clamp(64px,9vw,128px)]">
          <div className="mx-auto max-w-[1320px]">
            <h2 className="mb-[clamp(24px,3vw,36px)] text-[clamp(26px,2.8vw,36px)] leading-[1.1] font-bold tracking-[-0.015em]">
              {OVERVIEW.compareHeading}
            </h2>
            {/* Phones get one block per service; a five-column table doesn't fit. */}
            <div className="grid gap-8 sm:grid-cols-2 md:hidden">
              {SERVICES.map((service) => (
                <div key={service.slug}>
                  <h3 className="mb-2 border-b border-varnish pb-2 text-[18px] leading-tight font-semibold">
                    <Link href={`/services/${service.slug}`}>{service.navLabel}</Link>
                  </h3>
                  <ul>
                    {OVERVIEW.compare.map((row) => (
                      <li
                        key={row.item}
                        className="flex items-center justify-between gap-4 border-b border-bone py-2.5 text-[15px]"
                      >
                        {row.item}
                        <Mark value={row.values[service.slug]} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="hidden md:block">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-varnish">
                    <td className="pb-3" />
                    {SERVICES.map((service) => (
                      <th
                        key={service.slug}
                        scope="col"
                        className="w-[17%] px-2 pb-3 text-center align-bottom text-[13px] leading-snug font-semibold"
                      >
                        <Link href={`/services/${service.slug}`} className="hover:text-petroglyph">
                          {service.navLabel}
                        </Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {OVERVIEW.compare.map((row) => (
                    <tr key={row.item} className="border-b border-bone">
                      <th scope="row" className="py-4 pr-4 text-[16px] font-normal">
                        {row.item}
                      </th>
                      {SERVICES.map((service) => (
                        <td key={service.slug} className="px-2 py-4 text-center">
                          <Mark value={row.values[service.slug]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
