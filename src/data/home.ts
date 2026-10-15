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
 * Selected work, in page order. The grid reads each frame's shape from its
 * width and height: a landscape fills one cell, a portrait fills two cells
 * stacked. `feature` marks the lead frame, which spans the full width on wide
 * screens.
 *
 * The order is what packs the grid without gaps. Counting a landscape as 1,
 * a portrait as 2 and the feature as 6 on three columns (1 on two), the total
 * must divide by 3 on wide screens and by 2 on tablets. Portraits need a
 * partner beside them in the same pair of rows, or a cell is left empty.
 */
export type WorkPhoto = Photo & { feature?: boolean };

const P = "/images/locations";

export const SELECTED_WORK: WorkPhoto[] = [
  {
    src: `${P}/ancash-region/cordillera-huayhuash/h2.webp`,
    width: 2048,
    height: 1365,
    alt: "Hiker above Laguna Jahuacocha in the Cordillera Huayhuash, Peru",
    title: "Laguna Jahuacocha",
    place: "Huayhuash, Áncash",
    feature: true,
  },
  {
    src: `${P}/ancash-region/cordillera-huayhuash/v3.webp`,
    width: 1365,
    height: 2048,
    alt: "Lit tent at high camp below a glacier in the Cordillera Huayhuash at night",
    title: "High camp, before sunrise",
    place: "Huayhuash, Áncash",
    focus: "50% 60%",
  },
  {
    src: `${P}/cusco-region/ahobamba-trek/h6.webp`,
    width: 2560,
    height: 1707,
    alt: "Machu Picchu under storm light, Cusco",
    title: "Machu Picchu",
    place: "Cusco",
  },
  {
    src: `${P}/ancash-region/nevado-huascaran/huascaran-2.webp`,
    width: 1920,
    height: 2560,
    alt: "Climbers on the summit of Huascarán, the highest mountain in Peru",
    title: "Huascarán",
    place: "Áncash · 6,768 m",
    focus: "50% 30%",
  },
  {
    src: `${P}/cusco-region/inti-punku/h2.webp`,
    width: 2048,
    height: 1365,
    alt: "Inti Punku Inca gateway at dusk near the Sacred Valley, Cusco",
    title: "Inti Punku",
    place: "Sacred Valley, Cusco",
  },
  {
    src: `${P}/cusco-region/nevado-veronica/h4.webp`,
    width: 2560,
    height: 1707,
    alt: "Climber on the summit ridge of Nevado Verónica above the Sacred Valley",
    title: "Nevado Verónica",
    place: "Urubamba, Cusco",
  },
  {
    src: `${P}/ancash-region/cordillera-blanca/v6.webp`,
    width: 1365,
    height: 2048,
    alt: "Snow peak at first light in the Cordillera Blanca, Peru",
    title: "First light",
    place: "Cordillera Blanca",
  },
  {
    src: `${P}/cusco-region/cordillera-vilcabamba/v1.webp`,
    width: 1365,
    height: 2048,
    alt: "Climber standing on a rocky summit above the clouds in the Cordillera Vilcabamba",
    title: "Summit, Vilcabamba",
    place: "Cordillera Vilcabamba, Cusco",
  },
  {
    src: `${P}/cusco-region/nevado-chumpe/h3.webp`,
    width: 2560,
    height: 1707,
    alt: "Last light on Nevado Chumpe in the Cordillera Vilcanota, Cusco, with a lone figure on the puna",
    title: "Last light on Chumpe",
    place: "Cordillera Vilcanota, Cusco",
    focus: "50% 55%",
  },
  {
    src: `${P}/cusco-region/nevado-ausangate/h7.webp`,
    width: 2560,
    height: 1707,
    alt: "Trekkers crossing a stream on the Ausangate circuit, Cusco",
    title: "Ausangate",
    place: "Cusco · 6,384 m",
  },
  {
    src: `${P}/cusco-region/nevado-sirijuani/h1.webp`,
    width: 2560,
    height: 1705,
    alt: "Aerial view of a glacier tongue in the Cordillera Vilcanota, Cusco",
    title: "Glacier tongue",
    place: "Cordillera Vilcanota, Cusco",
  },
  {
    src: `${P}/cusco-region/nevado-ausangate/h1.webp`,
    width: 2560,
    height: 1707,
    alt: "Expedition base camp below Ausangate, Cusco",
    title: "Base camp",
    place: "Ausangate, Cusco",
  },
];

/** A line from one of the blog posts, quoted word for word, with a link to the post. */
export const BLOG_QUOTE = {
  quote: "I see dreams as goals we haven’t set yet.",
  post: "Vertical",
  href: "/blog/vertical-my-story-and-approach-to-becoming-a-photographer-in-alpine-environments",
} as const;

/** Shown on the page and repeated, word for word, in the FAQPage structured data. */
export const FAQ = [
  {
    question: "Can you arrange filming permits and local crew in Peru?",
    answer:
      "Yes. For commercial shoots I handle location scouting, filming permits and local crew in Peru, so a visiting brand team can arrive and start working.",
  },
  {
    question: "Where are you based?",
    answer:
      "In the Sacred Valley, near Cusco (UTC−5). I shoot across the Peruvian Andes, from Cusco and Ausangate to the Cordillera Blanca and Huayhuash.",
  },
  {
    question: "Do you shoot both photography and video?",
    answer:
      "Yes. Stills and film share one grade, one pace and one point of view, so a campaign's photographs and video can come from the same shoot.",
  },
  {
    question: "Can you film athletes during a climb, a race or an expedition?",
    answer:
      "Yes. I travel with trail runners, climbers and alpinists and film them on route, where they train and compete, at the pace the objective demands.",
  },
  {
    question: "How do I start a project?",
    answer: `Email ${CONTACT.email} with what you're making, where, and roughly when. ${CONTACT.replyTime}`,
  },
] as const;

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
  { name: "Backcountry Magazine", logo: "/images/clients/backcountry-magazine-logo.webp", width: 508, height: 85 },
  {
    name: "Refugios Peru",
    logo: "/images/clients/refugios-peru-logo.webp",
    width: 146,
    height: 147,
    wordmark: true,
  },
  { name: "Bozeman Ice Festival", logo: "/images/clients/bozeman-ice-festival-logo.webp", width: 414, height: 340 },
  { name: "Wyoming Ice Fest", logo: "/images/clients/wyoming-ice-fest-logo.webp", width: 227, height: 177 },
  { name: "Tushar Mountain Tours", logo: "/images/clients/tushar-mountain-tours-logo.webp", width: 416, height: 115 },
  { name: "ALPS Mountaineering", logo: "/images/clients/alps-mountaineering-logo.webp", width: 388, height: 82 },
  { name: "Stio", logo: "/images/clients/stio-logo.webp", width: 600, height: 214 },
  { name: "Fitbanker", logo: "/images/clients/fitbanker-logo.webp", width: 579, height: 76, solid: true },
];
export const CLIENT_PLACEHOLDER_COUNT = 8;
