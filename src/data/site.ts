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

export const CONTACT = {
  email: "mattstacym@gmail.com",
  instagram: "_mattstacy",
  instagramUrl: "https://www.instagram.com/_mattstacy",
  base: "Sacred Valley, Cusco, Peru",
  timezone: "UTC−5",
  replyTime: "I reply within two business days.",
} as const;

export const SEO_CONFIG = {
  titleTemplate: "%s | Matt Stacy",
  defaultTitle: "Matt Stacy | Adventure Photographer in Cusco, Peru",
  defaultDescription:
    "Adventure photographer and filmmaker in Cusco, Peru, available internationally. Expedition and athlete documentation, drone cinematography and brand work.",
  defaultOgImage: "/brand/og-image.jpg",
} as const;
