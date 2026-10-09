export interface Service {
  slug: string;
  /** Exactly as it appears in the Services dropdown. */
  navLabel: string;
  /** The homepage heading, written the way people search for it. */
  heading: string;
  summary: string;
  /** The service's own page has not been built yet. */
  comingSoon: boolean;
}

/**
 * The four services, in menu order. The homepage, the Services dropdown and
 * the structured data all read from this list.
 */
export const SERVICES: Service[] = [
  {
    slug: "expedition-athlete-documentation",
    navLabel: "Expedition & Athlete Documentation",
    heading: "Expedition and athlete documentation",
    summary:
      "Trail runners, climbers and alpinists photographed and filmed on route, from the approach to the summit and back.",
    comingSoon: true,
  },
  {
    slug: "drone-cinematography",
    navLabel: "Drone Cinematography",
    heading: "Drone cinematography",
    summary:
      "Aerial stills and film of ridgelines, glaciers and approach routes, graded to match everything shot on the ground.",
    comingSoon: true,
  },
  {
    slug: "adventure-photography",
    navLabel: "Adventure Photography",
    heading: "Adventure photography",
    summary:
      "Landscape and adventure stills from the high Andes, for editorial, tourism and print.",
    comingSoon: true,
  },
  {
    slug: "brand-commercial",
    navLabel: "Brand & Commercial",
    heading: "Brand and commercial production",
    summary:
      "Campaign stills and film for outdoor, travel and tourism brands. Location scouting, filming permits and local crew in Peru.",
    comingSoon: true,
  },
];
