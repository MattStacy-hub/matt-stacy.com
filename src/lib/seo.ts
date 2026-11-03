import type { Metadata } from "next";
import { SITE_CONFIG, SEO_CONFIG, CONTACT } from "@/data/site";
import { SERVICES, type Service } from "@/data/services";

interface PageMetadataOptions {
  /** Page title. The site template appends " | Matt Stacy". */
  title?: string;
  /** Use `title` exactly as given, without the site suffix. */
  titleAbsolute?: boolean;
  description?: string;
  /** The page's path, e.g. "/portfolio". Builds the canonical URL. */
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function canonicalUrl(path = ""): string {
  const clean = path && !path.startsWith("/") ? `/${path}` : path;
  return `${SITE_CONFIG.url}${clean === "/" ? "" : clean}`;
}

/** Metadata for a page. Every route builds its metadata through this. */
export function pageMetadata({
  title,
  titleAbsolute = false,
  description = SEO_CONFIG.defaultDescription,
  path = "/",
  ogImage = SEO_CONFIG.defaultOgImage,
  noIndex = false,
}: PageMetadataOptions = {}): Metadata {
  const url = canonicalUrl(path);
  const resolvedTitle = title
    ? titleAbsolute
      ? { absolute: title }
      : title
    : { absolute: SEO_CONFIG.defaultTitle };
  const shareTitle = title ?? SEO_CONFIG.defaultTitle;

  return {
    title: resolvedTitle,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true, "max-image-preview": "large" },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_CONFIG.name,
      title: shareTitle,
      description,
      locale: SITE_CONFIG.locale,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [ogImage],
    },
  };
}

/* ── Structured data ─────────────────────────────────────────────── */

const PERSON_ID = `${SITE_CONFIG.url}/#matt`;

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    inLanguage: "en",
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Matt Stacy",
    jobTitle: "Photographer and filmmaker",
    url: SITE_CONFIG.url,
    email: `mailto:${CONTACT.email}`,
    sameAs: [CONTACT.instagramUrl],
    knowsAbout: [
      "Adventure photography",
      "Drone cinematography",
      "Expedition filmmaking",
      "Commercial video production",
      "Mountaineering",
      "Trail running",
    ],
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_CONFIG.url}/#service`,
    name: "Matt Stacy Photography & Film",
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}${SEO_CONFIG.defaultOgImage}`,
    email: CONTACT.email,
    founder: { "@id": PERSON_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cusco",
      addressRegion: "Cusco",
      addressCountry: "PE",
    },
    areaServed: [
      { "@type": "Country", name: "Peru" },
      { "@type": "Place", name: "Cusco" },
      { "@type": "Place", name: "Cordillera Blanca" },
      { "@type": "Place", name: "Cordillera Huayhuash" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.heading,
          description: service.summary,
        },
      })),
    },
  };
}

export function faqSchema(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.heading,
    description: service.seoDescription,
    url: canonicalUrl(`/services/${service.slug}`),
    provider: { "@id": `${SITE_CONFIG.url}/#service` },
    areaServed: { "@type": "Country", name: "Peru" },
  };
}

/** Trail from the homepage to the current page, for search results. */
export function breadcrumbSchema(trail: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: canonicalUrl(crumb.path),
    })),
  };
}
