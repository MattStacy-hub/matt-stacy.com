import type { Photo } from "./home";

/**
 * Copy and photos for the services overview and the four service pages.
 * Each page has its own layout, so each gets its own block rather than one
 * shared shape forced onto all four.
 */

const P = "/images/locations";

/* ── Shared photos ────────────────────────────────────────────────── */

const PALCARAJU_WALLS: Photo = {
  src: `${P}/ancash-region/cordillera-blanca/cordillera-blanca-18.webp`,
  width: 2560,
  height: 1706,
  alt: "Two climbers reduced to specks on a wide snow slope beneath the walls of Nevado Palcaraju West, Pucaranra and Chinchey beyond, Cordillera Blanca, Peru",
  title: "Below Palcaraju West",
  place: "Cordillera Blanca, Áncash",
};

const HUAYHUASH_AERIAL: Photo = {
  src: `${P}/ancash-region/cordillera-huayhuash/cordillera-huayhuash-14.webp`,
  width: 2560,
  height: 1706,
  alt: "Aerial view along the jagged snow summits of Nevados Carnicero, Yerupajá, Yerupajá Chico, Jirishanca, Rondoy and Ninashanca, Cordillera Huayhuash, Peru",
  title: "The Huayhuash crest",
  place: "Cordillera Huayhuash, Áncash",
  focus: "50% 40%",
};

const SAN_ANTONIO_PASS: Photo = {
  src: `${P}/ancash-region/cordillera-huayhuash/cordillera-huayhuash-2.webp`,
  width: 2048,
  height: 1365,
  alt: "A hiker in a red jacket on a rocky high pass, a turquoise lake and a wall of glaciated peaks spread out behind, Cordillera Huayhuash, Peru",
  title: "San Antonio Pass",
  place: "Cordillera Huayhuash, Áncash",
  focus: "50% 60%",
};

const AUSANGATE_FINS: Photo = {
  src: `${P}/cusco-region/nevado-ausangate/nevado-ausangate-2.webp`,
  width: 2560,
  height: 1707,
  alt: "A climber with poles moving across snow below a row of ice fins, an orange pack at the edge of the frame, Nevado Ausangate, Peru",
  title: "Moraine camp, Ausangate",
  place: "Cordillera Vilcanota, Cusco",
  focus: "50% 55%",
};

const SHAQSHA_DAWN: Photo = {
  src: `${P}/ancash-region/cordillera-blanca/cordillera-blanca-26.webp`,
  width: 1365,
  height: 2048,
  alt: "A lone climber crossing a snowfield under the fluted snow ridges of the south peak of Nevado Shaqsha, the sky pink before sunrise, Peru",
  title: "Dawn below Shaqsha",
  place: "Cordillera Blanca, Áncash",
};

/* ── Expedition & athlete documentation ───────────────────────────── */

export const EXPEDITION = {
  hero: PALCARAJU_WALLS,
  statement: "Legacies, documented.",
  body: [
    "My skills as an alpinist and all-around outdoor athlete mean I can rope up without being a liability. I carry my own kit, shoot handheld angles from top-down, and produce captivating, dynamic aerial footage.",
  ],
  ropePhoto: {
    src: `${P}/cusco-region/nevado-veronica/nevado-veronica-7.webp`,
    width: 2048,
    height: 1619,
    alt: "A climber with a heavy pack leading up a steep wall of glacier ice on two ropes, warm low sun on the ice against a clear blue sky, Nevado Verónica, Peru",
    title: "Ice pitch, Nevado Verónica",
    place: "Cordillera Urubamba, Cusco",
  } as Photo,
  audiences: [
    {
      heading: "For sponsored athletes and brands",
      text: "Campaign-ready stills and film that show the athlete in real terrain. Built for brand decks, social, editorial, and film licensing.",
    },
    {
      heading: "For independent expedition teams",
      text: "I climb with you. My own kit, rope skills, no babysitting. Full documentation of the expedition as it happens, from the approach to the summit and back down.",
    },
  ],
  logHeading: "Real objectives I've documented",
  log: [
    {
      objective: "Nevado Palcaraju",
      style: "New line on the south face",
      coverage: "Stills, aerials",
    },
    {
      objective: "Nevado Verónica",
      style: "East ridge, leading",
      coverage: "Stills, action film",
    },
    {
      objective: "Lone Peak",
      style: "South Face of the Question Mark Wall",
      coverage: "Stills, in Backcountry Magazine",
    },
    {
      objective: "Nevado Campa",
      style: "South ridge, solo",
      coverage: "Stills, aerials, action film",
    },
    {
      objective: "Huayhuash Alpine Circuit",
      style: "Alpine Circuit",
      coverage: "Stills, handheld film, aerials",
    },
    {
      objective: "Nevado Shaqsha",
      style: "Southeast face",
      coverage: "Stills",
    },
  ],
  logPhoto: SHAQSHA_DAWN,
} as const;

/* ── Drone cinematography ─────────────────────────────────────────── */

export const DRONE = {
  hero: HUAYHUASH_AERIAL,
  usesHeading: "What I fly for",
  uses: [
    {
      heading: "Film productions",
      text: "Cinematic aerial sequences, smooth and planned camera moves like reveals, orbits, and tracking shots, cut for brand films and campaigns.",
      photo: {
        src: `${P}/amazonas-region/laguna-de-los-condores/laguna-de-los-condores-36.webp`,
        width: 2560,
        height: 1707,
        alt: "Aerial view of a lake glowing lilac in its gorge, warm sunrise light on the limestone cliffs and a high ridge above, Laguna de los Cóndores, Amazonas, Peru",
        title: "Laguna de los Cóndores",
        place: "Amazonas",
      },
    },
    {
      heading: "Destination and hospitality",
      text: "Aerials that sell a location: lodges, itineraries, and landscapes from the perspective that makes people book.",
      photo: {
        src: `${P}/amazonas-region/gocta/gocta-house-1.webp`,
        width: 2560,
        height: 1706,
        alt: "Aerial view at dusk of a lit house with round shingled roofs on a forested hillside, a person standing in the open doorway and village lights in the valley below, Amazonas, Peru",
        title: "House above the valley at dusk",
        place: "Amazonas",
      },
    },
    {
      heading: "Stills",
      text: "High-resolution aerial photography, composed and delivered ready for print, editorial, and social.",
      photo: {
        src: `${P}/cusco-region/pallay-punchu/pallay-punchu-1.webp`,
        width: 1706,
        height: 2560,
        alt: "Aerial view of a person standing on a striped red and green rock ridge, with red mountains and grassy slopes beyond under a cloudy sky, Pallay Punchu, Cusco, Peru",
        title: "Pallay Punchu",
        place: "Cusco",
        focus: "50% 42%",
      },
    },
    {
      heading: "Expedition coverage",
      text: "Aerial documentation of climbs and treks, capturing scale and route that ground cameras simply can't reach.",
      photo: {
        src: `${P}/cusco-region/nevado-chumpe/nevado-chumpe-4.webp`,
        width: 2560,
        height: 1435,
        alt: "Aerial view of the broad glaciated summit of Nevado Chumpe, its crevassed ice falling away beneath heavy cloud, Cordillera Vilcanota, Peru",
        title: "Nevado Chumpe",
        place: "Cordillera Vilcanota, Cusco",
      },
    },
  ] as { heading: string; text: string; photo: Photo }[],
} as const;

/* ── Adventure photography ────────────────────────────────────────── */

export const ADVENTURE = {
  hero: SAN_ANTONIO_PASS,
  statement: "Photos that tell your story.",
  body: "For independent travelers venturing into Peru's mountain ranges for a trek around Ausangate or Salkantay, groups of friends day-tripping to places like Pallay Punchu, or tour operators looking to elevate their guests' experience with professional photography services. Based in Cusco, available across Peru.",
  formatsHeading: "Choose your trip",
  formats: [
    {
      name: "A day trip",
      examples: "Pallay Punchu, Inti Punku, Maras, Palcoyo",
      text: "One day, one place, the best of the light. Ideal for a group of friends or a couple.",
      photo: {
        src: `${P}/cusco-region/inti-punku/inti-punku-1.webp`,
        width: 2048,
        height: 1365,
        alt: "A person walking up the path to the Inca stone gateway of Inti Punku on a ridge, the snow peak of Nevado Verónica rising behind in evening light, Peru",
        title: "Inti Punku",
        place: "Sacred Valley, Cusco",
      },
    },
    {
      name: "A multi-day trek",
      examples: "Ausangate, Salkantay, Huayhuash, Ancascocha",
      text: "I walk the whole route with you: the camps, the passes and the mornings before anyone's awake.",
      photo: {
        src: `${P}/cusco-region/nevado-ausangate/nevado-ausangate-7.webp`,
        width: 2560,
        height: 1707,
        alt: "Four trekkers with large packs crossing a stream on a narrow plank bridge, golden grassland and snow-dusted peaks beyond, on the way to Ausangate base camp, Peru",
        title: "On the way to Ausangate",
        place: "Cordillera Vilcanota, Cusco",
      },
    },
    {
      name: "A climb",
      examples: "Guided ascents across the Cusco ranges and the Cordillera Blanca",
      text: "On the rope with your team, shooting the summit day from the inside.",
      photo: {
        src: `${P}/ancash-region/cordillera-blanca/cordillera-blanca-16.webp`,
        width: 2048,
        height: 1365,
        alt: "A climber crossing a broad snowfield at sunrise towards the sunlit summit of Nevado Ranrapalca, Cordillera Blanca, Peru",
        title: "Toward Ranrapalca",
        place: "Cordillera Blanca, Áncash",
      },
    },
  ] as { name: string; examples: string; text: string; photo: Photo }[],
  phasesHeading: "How we work together",
  phases: [
    {
      name: "Initial consultation",
      text: "Every adventure photography shoot starts with a conversation about your itinerary. Where does your adventure take place? Is it a single day trip or multiday adventure? Maybe there are specific shots that matter most to you. We will work together and plan for the best compositions.",
    },
    {
      name: "Shoot on location",
      text: "On location I document the journey as it actually unfolds, balancing planned hero shots with the unscripted moments that make the images real. I'm comfortable working at altitude and in difficult conditions, carrying my own kit, and keeping pace no matter where we are.",
    },
    {
      name: "Editing",
      text: "Back from the field, I cull the RAW photos down to the strongest selects and edit each one to a consistent, cinematic finish. Color, tone, and mood are refined so the gallery is one cohesive body of work.",
    },
    {
      name: "Deliver",
      text: "You receive a polished, high-resolution gallery, carefully organized and ready for online sharing and print, delivered through a private online gallery you can download from.",
    },
  ],
  includedHeading: "What you get",
  includedIntro:
    "Every adventure photography session is custom fit to your itinerary and planned to take advantage of the best natural light.",
  included: [
    "Collaborative pre-trip planning",
    "Full-day or multi-day trip coverage",
    "Professionally edited high-resolution images",
    "Curated selection of images",
    "Private online gallery for easy download",
    "Optional drone and aerial add-on",
  ],
  includedPhoto: {
    src: `${P}/ancash-region/cordillera-huayhuash/cordillera-huayhuash-22.webp`,
    width: 1365,
    height: 2048,
    alt: "A red tent pitched on the grass beside the turquoise water of Laguna Caramarca, a trekker at the shore and the glaciers of Nevado Rasac behind, Peru",
    title: "Laguna Caramarca",
    place: "Cordillera Huayhuash, Áncash",
  } as Photo,
} as const;

/* ── Brand & commercial ───────────────────────────────────────────── */

export const BRAND = {
  hero: AUSANGATE_FINS,
  statement: "Imagery that sells",
  body: "Gear looks right when it's used where it was made to be used. I shoot product, people and place in real terrain and real weather, so the campaign holds up to the people who know the difference.",
  capabilitiesHeading: "What I shoot for brands",
  capabilities: [
    {
      heading: "Product and gear",
      text: "Apparel, hardgoods, and equipment shot in the field where it's meant to be used.",
    },
    {
      heading: "Brand campaigns",
      text: "Full campaign production from concept to delivery. Still and motion for launches, seasonal collections, and brand storytelling.",
    },
    {
      heading: "Athlete and lifestyle",
      text: "Sponsored athletes and lifestyle talent in authentic adventure settings, producing the human-led imagery brands need across media channels.",
    },
    {
      heading: "Destination and travel",
      text: "Destination marketing for travel companies, lodges, and tourism boards. Imagery that makes prospective guests want to book.",
    },
    {
      heading: "Motion and film",
      text: "Short-form and long-form video, from social cutdowns to brand films, with aerial coverage.",
    },
    {
      heading: "Editorial",
      text: "Editorial assignments and branded content for magazines, publications, and digital media in the outdoor and adventure-travel space.",
    },
  ],
  photos: [
    {
      src: `${P}/cusco-region/urubamba/urubamba-11.webp`,
      width: 1706,
      height: 2560,
      alt: "A red dome tent pitched in a hollow dug into snow, a backpack at its entrance and cloud filling the valleys below, Cordillera Urubamba, Peru",
      title: "High camp, Verónica",
      place: "Cordillera Urubamba · 5,300 m",
    },
    {
      src: `${P}/ancash-region/cordillera-blanca/cordillera-blanca-22.webp`,
      width: 1365,
      height: 2048,
      alt: "A climber with a helmet, large backpack and ice axe on a rock ledge, looking down the Llanganuco valley and its two turquoise lakes, Cordillera Blanca, Peru",
      title: "Llanganuco",
      place: "Cordillera Blanca, Áncash",
    },
    {
      src: `${P}/ancash-region/cordillera-huayhuash/cordillera-huayhuash-5.webp`,
      width: 2048,
      height: 1365,
      alt: "An orange tent on the shore of a still lake below a snow-covered peak and glacier, flanked by dark rock walls, Cordillera Huayhuash, Peru",
      title: "Sarapacocha",
      place: "Cordillera Huayhuash, Áncash",
    },
  ] as Photo[],
  productionHeading: "Producing in Peru",
  productionPhoto: {
    src: `${P}/cusco-region/nevado-ausangate/nevado-ausangate-3.webp`,
    width: 2560,
    height: 1707,
    alt: "A line of climbers with packs working up a rocky slope patched with snow under a clear blue sky, on the way to moraine camp, Nevado Ausangate, Peru",
    title: "Trail to moraine camp",
    place: "Ausangate, Cusco",
  } as Photo,
  production: [
    { item: "Location scouting", detail: "Routes, light and access checked in person before the shoot." },
    { item: "Filming permits", detail: "Arranged for protected areas and heritage sites." },
    { item: "Local crew", detail: "Guides, porters, drivers and assistants I work with regularly." },
    { item: "Logistics support" },
  ] as { item: string; detail?: string }[],
  processHeading: "How we collaborate",
  process: [
    { name: "Brief", text: "We define your outcomes, deliverables, and creative vision." },
    { name: "Plan", text: "Location, logistics, talent, and shot list are scoped to your campaign." },
    { name: "Produce", text: "On-location production of stills and motion required to meet our goals." },
    { name: "Deliver", text: "Edited, public-facing assets delivered on schedule with clear licensing." },
  ],
} as const;
