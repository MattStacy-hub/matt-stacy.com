export interface Service {
  slug: string;
  /** Exactly as it appears in the Services dropdown. */
  navLabel: string;
  /** The homepage heading, written the way people search for it. */
  heading: string;
  summary: string;
  /** The page's title in search results. The site suffix is added. */
  seoTitle: string;
  seoDescription: string;
  /** The service's own page has not been built yet. */
  comingSoon: boolean;
}

/**
 * The four services, in menu order. The homepage, the Services dropdown and
 * the structured data all read from this list.
 */
export const SERVICES: Service[] = [
  {
    slug: "drone-cinematography",
    navLabel: "Drone Cinematography",
    heading: "Drone cinematography",
    summary:
      "Aerial stills and film of ridgelines, glaciers and approach routes, graded to match everything shot on the ground.",
    seoTitle: "Drone Cinematography in Peru",
    seoDescription:
      "Aerial film and stills in the Peruvian Andes for productions, destinations and expeditions. Flown at altitude and graded to match the ground footage.",
    comingSoon: false,
  },
  {
    slug: "adventure-photography",
    navLabel: "Adventure Photography",
    heading: "Adventure photography",
    summary:
      "Treks, climbs and day trips in Peru photographed for travelers, groups and tour operators, delivered as a private gallery.",
    seoTitle: "Adventure Photographer for Hire in Peru: Treks & Climbs",
    seoDescription:
      "Hire an adventure photographer in Cusco for your trek, climb or day trip in Peru. Planned around your itinerary, delivered as a private gallery.",
    comingSoon: false,
  },
  {
    slug: "expedition-athlete-documentation",
    navLabel: "Expedition & Athlete Documentation",
    heading: "Expedition and athlete documentation",
    summary:
      "Trail runners, climbers and alpinists photographed and filmed on route, from the approach to the summit and back.",
    seoTitle: "Expedition & Athlete Photography and Film in Peru",
    seoDescription:
      "Expedition and athlete documentation in the Peruvian Andes. An alpinist photographer who climbs with the team and shoots stills, film and aerials from trailhead to summit.",
    comingSoon: false,
  },
  {
    slug: "brand-commercial",
    navLabel: "Brand & Commercial",
    heading: "Brand and commercial production",
    summary:
      "Campaign stills and film for outdoor, travel and tourism brands. Location scouting, filming permits and local crew in Peru.",
    seoTitle: "Brand & Commercial Photography and Film in Peru",
    seoDescription:
      "Campaign photography and film for outdoor, travel and hospitality brands. Location scouting, filming permits and local crew in Peru.",
    comingSoon: false,
  },
];
