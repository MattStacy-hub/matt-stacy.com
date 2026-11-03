import { CONTACT } from "./site";

export interface Photo {
  src: string;
  width: number;
  height: number;
  /** Describes the frame for screen readers and image search. Names the place. */
  alt: string;
  title: string;
  place: string;
  /** CSS object-position, when the default centre crop loses the subject. */
  focus?: string;
}

export const HERO_PHOTO: Photo = {
  src: "/images/locations/ancash-region/cordillera-huayhuash/jirishanca_h1.webp",
  width: 2560,
  height: 1920,
  alt: "Jirishanca in the Cordillera Huayhuash, Peru, black and white photograph by Matt Stacy",
  title: "Jirishanca",
  place: "Cordillera Huayhuash, Áncash",
  focus: "50% 28%",
};

/**
 * Selected work, in page order, which is also the lightbox's order. Each frame
 * names its place in the sequence:
 *
 * - `bleed`: a full-width frame in a cinematic crop. Use it for the opener.
 * - `wide`: a full-width frame in a cinematic crop, between the pairs.
 * - `major` and `minor`: a pair on one row, the major two-thirds wide in 3:2
 *   and the minor a third wide, cropped to the same height. A portrait suits
 *   the minor slot. Either can come first.
 * - `half`: a pair of equal frames on one row.
 *
 * Pairs must sit next to each other in the list.
 */
export type WorkLayout = "bleed" | "wide" | "major" | "minor" | "half";

export type WorkPhoto = Photo & { layout: WorkLayout };

const P = "/images/locations";

export const SELECTED_WORK: WorkPhoto[] = [
  {
    src: `${P}/ancash-region/cordillera-huayhuash/h2.webp`,
    width: 2048,
    height: 1365,
    alt: "Hiker above Laguna Jahuacocha in the Cordillera Huayhuash, Peru",
    title: "Laguna Jahuacocha",
    place: "Huayhuash, Áncash",
    focus: "50% 85%",
    layout: "bleed",
  },
  {
    src: `${P}/cusco-region/ahobamba-trek/h6.webp`,
    width: 2560,
    height: 1707,
    alt: "Machu Picchu under storm light, Cusco",
    title: "Machu Picchu",
    place: "Cusco",
    layout: "major",
  },
  {
    src: `${P}/ancash-region/nevado-huascaran/huascaran-2.webp`,
    width: 1920,
    height: 2560,
    alt: "Climbers on the summit of Huascarán, the highest mountain in Peru",
    title: "Huascarán",
    place: "Áncash · 6,768 m",
    focus: "50% 30%",
    layout: "minor",
  },
  {
    src: `${P}/ancash-region/cordillera-huayhuash/v3.webp`,
    width: 1365,
    height: 2048,
    alt: "Lit tent at high camp below a glacier in the Cordillera Huayhuash at night",
    title: "High camp, before sunrise",
    place: "Huayhuash, Áncash",
    focus: "50% 60%",
    layout: "minor",
  },
  {
    src: `${P}/cusco-region/nevado-veronica/h4.webp`,
    width: 2560,
    height: 1707,
    alt: "Climber on the summit ridge of Nevado Verónica above the Sacred Valley",
    title: "Nevado Verónica",
    place: "Urubamba, Cusco",
    layout: "major",
  },
  {
    src: `${P}/cusco-region/nevado-chumpe/h3.webp`,
    width: 2560,
    height: 1707,
    alt: "Last light on Nevado Chumpe in the Cordillera Vilcanota, Cusco, with a lone figure on the puna",
    title: "Last light on Chumpe",
    place: "Cordillera Vilcanota, Cusco",
    focus: "50% 55%",
    layout: "wide",
  },
  {
    src: `${P}/cusco-region/inti-punku/h2.webp`,
    width: 2048,
    height: 1365,
    alt: "Inti Punku Inca gateway at dusk near the Sacred Valley, Cusco",
    title: "Inti Punku",
    place: "Sacred Valley, Cusco",
    layout: "major",
  },
  {
    src: `${P}/ancash-region/cordillera-blanca/v6.webp`,
    width: 1365,
    height: 2048,
    alt: "Snow peak at first light in the Cordillera Blanca, Peru",
    title: "First light",
    place: "Cordillera Blanca",
    layout: "minor",
  },
  {
    src: `${P}/cusco-region/cordillera-vilcabamba/v1.webp`,
    width: 1365,
    height: 2048,
    alt: "Climber standing on a rocky summit above the clouds in the Cordillera Vilcabamba",
    title: "Summit, Vilcabamba",
    place: "Cordillera Vilcabamba, Cusco",
    layout: "minor",
  },
  {
    src: `${P}/cusco-region/nevado-ausangate/h7.webp`,
    width: 2560,
    height: 1707,
    alt: "Trekkers crossing a stream on the Ausangate circuit, Cusco",
    title: "Ausangate",
    place: "Cusco · 6,384 m",
    layout: "major",
  },
  {
    src: `${P}/cusco-region/nevado-sirijuani/h1.webp`,
    width: 2560,
    height: 1705,
    alt: "Aerial view of a glacier tongue in the Cordillera Vilcanota, Cusco",
    title: "Glacier tongue",
    place: "Cordillera Vilcanota, Cusco",
    layout: "half",
  },
  {
    src: `${P}/cusco-region/nevado-ausangate/h1.webp`,
    width: 2560,
    height: 1707,
    alt: "Expedition base camp below Ausangate, Cusco",
    title: "Base camp",
    place: "Ausangate, Cusco",
    layout: "half",
  },
];

/** A client's words, quoted as they wrote them. */
export const TESTIMONIAL = {
  quote:
    "I’m truly and deeply, grateful for you and your incredible work … I’m so happy we were able to bring this project to life. For me, this has been both a personal goal and a dream come true, and I couldn’t be happier that you were the one who helped make it happen.",
  name: "Juan Carlos",
  role: "Mace Movement Peru",
} as const;

export interface FaqItem {
  question: string;
  answer: string;
  /** Words in the answer to turn into a link on the page. */
  link?: { text: string; href: string };
}

/** Shown on the page and repeated, word for word, in the FAQPage structured data. */
export const FAQ: readonly FaqItem[] = [
  {
    question: "Can you arrange filming permits and local crew in Peru?",
    answer:
      "Yes. I arrange permits for protected areas and heritage sites, and work with guides, porters and drivers I know well.",
  },
  {
    question: "Where are you based?",
    answer:
      "Cusco, Peru (UTC−5). I work across Peru and travel for projects anywhere rugged and beautiful.",
  },
  {
    question: "Do you shoot both photography and video?",
    answer:
      "Yes. I shoot photo and video with a Sony system. Aerials are shot on the latest professional DJI drones.",
  },
  {
    question: "Can you film athletes during a climb, a race or an expedition?",
    answer:
      "Yes. I climb with the team and document the whole objective, from the approach to the summit and back down. See expedition and athlete documentation.",
    link: { text: "expedition and athlete documentation", href: "/services/expedition-athlete-documentation" },
  },
  {
    question: "How do I start a project?",
    answer: `Use the Start a project button, or email ${CONTACT.email} with what you're making, where, and roughly when.`,
    link: { text: "Start a project", href: "/contact" },
  },
];

/**
 * Client logos, in page order. Files live in public/images/clients/, trimmed
 * to the mark on a white or transparent ground. They're shown in grayscale and
 * multiplied onto the page, so white drops out and the files' colors don't
 * matter. With no logos listed, the section shows labelled placeholders.
 */
export const CLIENTS: {
  name: string;
  logo: string;
  width: number;
  height: number;
  /** For a logo that's only a mark: the name, set in type beneath it. */
  wordmark?: boolean;
  /**
   * For a logo with a light color that grayscale would wash out: shown as a
   * solid silhouette at rest instead. Needs a file with a transparent ground.
   */
  solid?: boolean;
}[] = [
  { name: "Bozeman Ice Festival", logo: "/images/clients/bozeman-ice-festival-logo.webp", width: 414, height: 340 },
  {
    name: "Refugios Peru",
    logo: "/images/clients/refugios-peru-logo.webp",
    width: 146,
    height: 147,
    wordmark: true,
  },
  { name: "Backcountry Magazine", logo: "/images/clients/backcountry-magazine-logo.webp", width: 508, height: 85 },
  { name: "Wyoming Ice Fest", logo: "/images/clients/wyoming-ice-fest-logo.webp", width: 227, height: 177 },
  { name: "Tushar Mountain Tours", logo: "/images/clients/tushar-mountain-tours-logo.webp", width: 416, height: 115 },
  { name: "ALPS Mountaineering", logo: "/images/clients/alps-mountaineering-logo.webp", width: 388, height: 82 },
  { name: "Stio", logo: "/images/clients/stio-logo.webp", width: 600, height: 214 },
  { name: "Fitbanker", logo: "/images/clients/fitbanker-logo.webp", width: 579, height: 76, solid: true },
];
export const CLIENT_PLACEHOLDER_COUNT = 8;
