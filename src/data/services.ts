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
      "Drone photos and video of the high Andes, from the glaciers and ridgelines down to the trail into camp, taken on the same trip as the photos on the ground.",
    seoTitle: "Drone Cinematography in Peru",
    seoDescription:
      "Drone photos and video in the Peruvian Andes for brand films, destinations and expeditions. I fly the latest professional DJI drones and I'm Part 107 certified.",
    comingSoon: false,
  },
  {
    slug: "adventure-photography",
    navLabel: "Adventure Photography",
    heading: "Adventure photography",
    summary:
      "I come along on your trek, climb or day trip in Peru and photograph it as it happens. When we get back, your photos arrive in a private gallery.",
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
      "I travel with climbers, alpinists and trail runners and photograph and film them on route, from the approach to the summit and back down.",
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
      "Photos and film for outdoor, travel and tourism brands, shot in real terrain. I handle the location scouting, filming permits and local crew in Peru, so your team can arrive and start working.",
    seoTitle: "Brand & Commercial Photography and Film in Peru",
    seoDescription:
      "Campaign photography and film for outdoor, travel and hospitality brands. Location scouting, filming permits and local crew in Peru.",
    comingSoon: false,
  },
];
