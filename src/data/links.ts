/**
 * The link-in-bio page (/links), linked from the Instagram profile.
 * Order is the order on the page: the print shop first.
 */

export interface BioLink {
  label: string;
  href: string;
  /** A small square crop beside the label. Decorative, so no alt text. */
  photo: string;
}

export const LINKS_PAGE = {
  heading: "Matt Stacy",
  lead: "Adventure photographer and filmmaker in Cusco, Peru",
} as const;

export const BIO_LINKS: BioLink[] = [
  {
    label: "Matt's 2026 Print Shop",
    href: "https://shop.matt-stacy.com/",
    photo: "/images/links/print-shop-nevado-salkantay.webp",
  },
  {
    label: "Book a trip with Andes Adventure Visuals",
    href: "https://www.andesadventurevisuals.com/links?utm_source=matt-stacy.com&utm_medium=referral&utm_campaign=links",
    photo: "/images/links/aav-logo.png",
  },
  {
    label: "For adventurous brands & athletes",
    href: "/#services",
    photo: "/images/portfolio/climber-granite-wall.webp",
  },
  {
    label: "matt-stacy.com | photography, film & drone",
    href: "/",
    photo: "/images/links/matt-stacy-mark.png",
  },
  {
    label: "YouTube channel",
    href: "https://www.youtube.com/@_mattstacy",
    photo: "/images/links/youtube-summit-selfie.webp",
  },
];
