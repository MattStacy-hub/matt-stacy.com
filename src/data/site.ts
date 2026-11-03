/**
 * Site-wide constants. Contact details, the canonical address and the default
 * search snippet live here once, so the header, footer, metadata and
 * structured data can't disagree.
 */

export const SITE_CONFIG = {
  name: "Matt Stacy",
  /**
   * The address the site serves on. Canonicals, the sitemap and robots.txt all
   * build from this, so it must be the host that answers without a redirect.
   */
  url: "https://www.matt-stacy.com",
  locale: "en_US",
} as const;

/** The print shop, hosted on Squarespace on its own subdomain. */
export const SHOP_URL = "https://shop.matt-stacy.com";

export const CONTACT = {
  email: "mattstacym@gmail.com",
  instagram: "_mattstacy",
  instagramUrl: "https://www.instagram.com/_mattstacy",
  phones: [
    { region: "Peru", display: "+51 973 137 403", tel: "+51973137403" },
    { region: "US", display: "+1 (847) 732-5383", tel: "+18477325383" },
  ],
  /** Shown beside the contact details. Update it when the calendar moves on. */
  booking: "Currently booking 2026 & 2027 projects",
  base: "Cusco, Peru",
  timezone: "UTC−5",
  replyTime:
    "I reply within two business days. If I'm out on an expedition, I'll reply as soon as I'm back to civilization.",
} as const;

export const SEO_CONFIG = {
  titleTemplate: "%s | Matt Stacy",
  defaultTitle: "Matt Stacy | Adventure Photographer in Cusco, Peru",
  defaultDescription:
    "Adventure photographer and filmmaker in Cusco, Peru, available internationally. Expedition and athlete documentation, drone cinematography and brand work.",
  defaultOgImage: "/brand/og-image.jpg",
} as const;
