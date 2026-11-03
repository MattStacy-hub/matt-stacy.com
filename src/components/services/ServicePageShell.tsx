import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ContactCta } from "@/components/home/ContactCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero, SERVICE_HERO_ID } from "@/components/services/ServiceHero";
import type { Photo } from "@/data/home";
import { SERVICES } from "@/data/services";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

interface ServicePageShellProps {
  slug: string;
  hero: Photo;
  children: React.ReactNode;
}

/**
 * What every service page shares: header over the hero, structured data and the
 * contact block. The page supplies the middle.
 */
export function ServicePageShell({
  slug,
  hero,
  children,
}: ServicePageShellProps) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: service.navLabel, path: `/services/${slug}` },
        ])}
      />

      <SiteHeader overHeroId={SERVICE_HERO_ID} />
      <main>
        <ServiceHero photo={hero} heading={service.heading} />
        {children}
        <ContactCta service={slug} />
      </main>
      <SiteFooter />
    </>
  );
}
