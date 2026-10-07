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
 * Selected work, in rows. A "one" row is a single full-width frame; a "two"
 * row is a pair. Portrait pairs and landscape pairs are kept apart so each
 * pair shares one shape and nothing is cropped hard.
 */
export type WorkRow =
  | { layout: "one"; photos: [Photo] }
  | { layout: "two-portrait" | "two-landscape"; photos: [Photo, Photo] };

const P = "/images/locations";

export const SELECTED_WORK: WorkRow[] = [
  {
    layout: "one",
    photos: [
      {
        src: `${P}/ancash-region/cordillera-huayhuash/h2.webp`,
        width: 2048,
        height: 1365,
        alt: "Hiker above Laguna Jahuacocha in the Cordillera Huayhuash, Peru",
        title: "Laguna Jahuacocha",
        place: "Huayhuash, Áncash",
      },
    ],
  },
  {
    layout: "two-portrait",
    photos: [
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
        src: `${P}/ancash-region/nevado-huascaran/huascaran-2.webp`,
        width: 1920,
        height: 2560,
        alt: "Climbers on the summit of Huascarán, the highest mountain in Peru",
        title: "Huascarán",
        place: "Áncash · 6,768 m",
        focus: "50% 30%",
      },
    ],
  },
  {
    layout: "one",
    photos: [
      {
        src: `${P}/cusco-region/nevado-veronica/h4.webp`,
        width: 2560,
        height: 1707,
        alt: "Climber on the summit ridge of Nevado Verónica above the Sacred Valley",
        title: "Nevado Verónica",
        place: "Urubamba, Cusco",
      },
    ],
  },
  {
    layout: "two-landscape",
    photos: [
      {
        src: `${P}/cusco-region/inti-punku/h2.webp`,
        width: 2048,
        height: 1365,
        alt: "Inti Punku Inca gateway at dusk near the Sacred Valley, Cusco",
        title: "Inti Punku",
        place: "Sacred Valley, Cusco",
      },
      {
        src: `${P}/cusco-region/nevado-ausangate/h7.webp`,
        width: 2560,
        height: 1707,
        alt: "Trekkers crossing a stream on the Ausangate circuit, Cusco",
        title: "Ausangate",
        place: "Cusco · 6,384 m",
      },
    ],
  },
  {
    layout: "one",
    photos: [
      {
        src: `${P}/cusco-region/nevado-chumpe/h3.webp`,
        width: 2560,
        height: 1707,
        alt: "Last light on Nevado Chumpe in the Cordillera Vilcanota, Cusco, with a lone figure on the puna",
        title: "Last light on Chumpe",
        place: "Cordillera Vilcanota, Cusco",
        focus: "50% 55%",
      },
    ],
  },
  {
    layout: "two-portrait",
    photos: [
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
    ],
  },
  {
    layout: "one",
    photos: [
      {
        src: `${P}/cusco-region/nevado-sirijuani/h1.webp`,
        width: 2560,
        height: 1705,
        alt: "Aerial view of a glacier tongue in the Cordillera Vilcanota, Cusco",
        title: "Glacier tongue",
        place: "Cordillera Vilcanota, Cusco",
      },
    ],
  },
  {
    layout: "two-landscape",
    photos: [
      {
        src: `${P}/cusco-region/nevado-ausangate/h1.webp`,
        width: 2560,
        height: 1707,
        alt: "Expedition base camp below Ausangate, Cusco",
        title: "Base camp",
        place: "Ausangate, Cusco",
      },
      {
        src: `${P}/cusco-region/ahobamba-trek/h6.webp`,
        width: 2560,
        height: 1707,
        alt: "Machu Picchu under storm light, Cusco",
        title: "Machu Picchu",
        place: "Cusco",
      },
    ],
  },
];

export const LOCATIONS = [
  {
    region: "Home base",
    name: "Cusco and the Sacred Valley",
    detail:
      "Machu Picchu, Inti Punku, the Maras salt pans and the trails around Urubamba.",
  },
  {
    region: "Áncash",
    name: "Cordillera Blanca",
    detail: "Huascarán, Yanapaccha and the high valleys above Huaraz.",
  },
  {
    region: "Áncash",
    name: "Cordillera Huayhuash",
    detail: "Laguna Jahuacocha and the Huayhuash circuit, nine days on foot.",
  },
  {
    region: "Cusco",
    name: "Ausangate and Vilcanota",
    detail:
      "The Ausangate circuit, glacial lakes and the high puna above 4,500 m.",
  },
] as const;

export const FIELD_NOTE = {
  quote:
    "You do not choose the light. You get there early, and you wait for it.",
  credit: "Field note no. 14 · Huayhuash, Peru",
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
 * Client logos. Empty until the files arrive; the section shows labelled
 * placeholders meanwhile. Add one SVG per client to public/clients/ and list
 * it here. Logos are shown in a single color, so the file's own colors don't
 * matter.
 */
export const CLIENTS: { name: string; logo: string }[] = [];
export const CLIENT_PLACEHOLDER_COUNT = 8;
