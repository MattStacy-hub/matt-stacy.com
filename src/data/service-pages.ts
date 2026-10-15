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

const CAMPA_AERIAL: Photo = {
  src: `${P}/cusco-region/nevado-campa/nevado-campa-2.webp`,
  width: 2560,
  height: 1707,
  alt: "Aerial view of a figure on a snow ridge of Nevado Campa high above turquoise glacial lakes, Cordillera Vilcanota, Peru",
  title: "Nevado Campa",
  place: "Cordillera Vilcanota, Cusco",
};

const VERONICA_ICE: Photo = {
  src: `${P}/cusco-region/nevado-veronica/nevado-veronica-7.webp`,
  width: 2048,
  height: 1619,
  alt: "A climber leading a steep pitch of ice on the east ridge of Nevado Verónica in warm evening light, two ropes running down the face, Peru",
  title: "East ridge, Verónica",
  place: "Cordillera Urubamba, Cusco",
};

const SHAQSHA_DAWN: Photo = {
  src: `${P}/ancash-region/cordillera-blanca/cordillera-blanca-26.webp`,
  width: 1365,
  height: 2048,
  alt: "A lone climber crossing a snowfield under the fluted snow ridges of the south peak of Nevado Shaqsha, the sky pink before sunrise, Peru",
  title: "Dawn below Shaqsha",
  place: "Cordillera Blanca, Áncash",
};

/* ── Overview ─────────────────────────────────────────────────────── */

export const OVERVIEW = {
  heading: "Photography and film for the people who go up there",
  intro:
    "Four ways to work with me, from a single day on the trail to a full campaign shoot. Each one is shot by the same person, with the same eye, in the same mountains.",
  /** One row per service, keyed by slug: who it suits, in their words, and a photo. */
  routes: {
    "expedition-athlete-documentation": {
      audience: "You're climbing something, or sponsoring someone who is",
      photo: VERONICA_ICE,
    },
    "drone-cinematography": {
      audience: "You need the view nobody on the ground can get",
      photo: HUAYHUASH_AERIAL,
    },
    "adventure-photography": {
      audience: "You're traveling to Peru for a trek, a climb or a day in the hills",
      photo: SAN_ANTONIO_PASS,
    },
    "brand-commercial": {
      audience: "You're a brand with a campaign to shoot in the Andes",
      photo: AUSANGATE_FINS,
    },
  } as Record<string, { audience: string; photo: Photo }>,
  compareHeading: "What each service covers",
  /** Rows of the comparison table, one value per service. */
  compare: [
    {
      item: "Photography",
      values: { "drone-cinematography": "yes", "adventure-photography": "yes", "expedition-athlete-documentation": "yes", "brand-commercial": "yes" },
    },
    {
      item: "Film",
      values: { "drone-cinematography": "yes", "adventure-photography": "no", "expedition-athlete-documentation": "yes", "brand-commercial": "yes" },
    },
    {
      item: "Aerials",
      values: { "drone-cinematography": "yes", "adventure-photography": "add-on", "expedition-athlete-documentation": "yes", "brand-commercial": "yes" },
    },
    {
      item: "Planning before the trip",
      values: { "drone-cinematography": "yes", "adventure-photography": "yes", "expedition-athlete-documentation": "yes", "brand-commercial": "yes" },
    },
    {
      item: "Scouting, permits and local crew",
      values: { "drone-cinematography": "no", "adventure-photography": "no", "expedition-athlete-documentation": "no", "brand-commercial": "yes" },
    },
    {
      item: "Commercial licensing",
      values: { "drone-cinematography": "yes", "adventure-photography": "no", "expedition-athlete-documentation": "yes", "brand-commercial": "yes" },
    },
  ] as { item: string; values: Record<string, "yes" | "no" | "add-on"> }[],
} as const;

/* ── Expedition & athlete documentation ───────────────────────────── */

export const EXPEDITION = {
  hero: PALCARAJU_WALLS,
  lead: "Climbers, alpinists and trail runners photographed and filmed on route, from the trailhead to the summit and back down.",
  statement: "A photographer on the rope, not a passenger on it.",
  body: [
    "I'm an alpinist first. I carry my own kit, manage my own rope work, and keep the team's pace, so nobody has to slow down to look after the person with the camera.",
    "That access is the whole point. The frames that matter happen on the ridge at 4 a.m., not at the trailhead, and I'm there for them: shooting from above, below and alongside, with aerials when the terrain allows.",
  ],
  ascentHeading: "Trailhead to summit",
  ascentIntro: "Every stage of a climb tells part of the story. I cover all of them.",
  ascent: [
    {
      stage: "The approach",
      text: "Loads, river crossings and moraine. The long days that make the summit mean something.",
      photo: {
        src: `${P}/cusco-region/nevado-ausangate/nevado-ausangate-3.webp`,
        width: 2560,
        height: 1707,
        alt: "A line of climbers with packs working up a rocky slope patched with snow under a clear blue sky, on the way to moraine camp, Nevado Ausangate, Peru",
        title: "Trail to moraine camp",
        place: "Ausangate, Cusco",
      },
    },
    {
      stage: "High camp",
      text: "Melting snow, checking forecasts, waiting out wind. The quiet hours most coverage misses.",
      photo: {
        src: `${P}/cusco-region/urubamba/urubamba-3.webp`,
        width: 2560,
        height: 1707,
        alt: "A climber in a beanie looking out of an orange tent doorway at a sea of cloud and distant snow peaks, Cordillera Urubamba, Peru",
        title: "High camp, Verónica",
        place: "Cordillera Urubamba, Cusco",
      },
    },
    {
      stage: "The summit push",
      text: "Headlamps on the ridge before dawn. I shoot it handheld, on the move, at the team's pace.",
      photo: {
        src: `${P}/cusco-region/nevado-veronica/nevado-veronica-3.webp`,
        width: 2560,
        height: 1707,
        alt: "Black-and-white night photo of a climber's headlamp on the east ridge of Nevado Verónica, the lights of Sacred Valley towns glowing far below, Peru",
        title: "Night on the east ridge",
        place: "Nevado Verónica, Cusco",
      },
    },
    {
      stage: "The summit",
      text: "The frame everyone wants, composed properly, with the scale of the range around it.",
      photo: {
        src: `${P}/ancash-region/cordillera-blanca/cordillera-blanca-19.webp`,
        width: 2048,
        height: 1282,
        alt: "Nate Heald, a tiny figure on the broad corniced snow summit of Nevado Palcaraju, above dark peaks partly hidden in cloud, Cordillera Blanca, Peru",
        title: "Summit of Palcaraju",
        place: "Cordillera Blanca · 6,274 m",
      },
    },
    {
      stage: "The descent",
      text: "Tired legs and first light. Half the day is still ahead, and so is half the story.",
      photo: {
        src: `${P}/ancash-region/cordillera-blanca/cordillera-blanca-25.webp`,
        width: 1365,
        height: 2048,
        alt: "A climber descending a narrow snow chute below Nevado Palcaraju West at dawn, the distant pyramid of Nevado Huantsán catching first light, Peru",
        title: "Descending Palcaraju West",
        place: "Cordillera Blanca, Áncash",
      },
    },
  ] as { stage: string; text: string; photo: Photo }[],
  ropePhoto: {
    src: `${P}/cusco-region/nevado-mariposa/nevado-mariposa-4.webp`,
    width: 2560,
    height: 1422,
    alt: "Looking up a broad snow slope along a climbing rope to a climber leading out near the crest, boot tracks running up the snow, Nevado Mariposa, Peru",
    title: "Final lead, Nevado Mariposa",
    place: "Cordillera Vilcanota, Cusco",
  } as Photo,
  audiences: [
    {
      heading: "For sponsored athletes and brands",
      text: "Campaign-ready stills and film of the athlete in real terrain, delivered for brand decks, social, editorial and film licensing.",
    },
    {
      heading: "For expedition teams",
      text: "A full record of the expedition as it happens: the approach, the camps, the summit and the way back down. No babysitting required.",
    },
  ],
  logHeading: "Climbs I've documented",
  /** Heights only where they're confirmed. Blank cells show a dash. */
  log: [
    {
      peak: "Nevado Palcaraju",
      range: "Cordillera Blanca, Peru",
      height: "6,274 m",
      style: "New line on the south face",
      coverage: "Stills, aerials",
    },
    {
      peak: "Nevado Verónica",
      range: "Cordillera Urubamba, Peru",
      height: "5,911 m",
      style: "East ridge, leading",
      coverage: "Stills, action film",
    },
    {
      peak: "Nevado Campa",
      range: "Cordillera Vilcanota, Peru",
      height: "5,475 m",
      style: "South ridge, solo",
      coverage: "Stills, aerials, action film",
    },
    {
      peak: "Nevado Shaqsha",
      range: "Cordillera Blanca, Peru",
      height: "",
      style: "Southeast face",
      coverage: "Stills",
    },
    {
      peak: "Huayhuash Alpine Circuit",
      range: "Cordillera Huayhuash, Peru",
      height: "",
      style: "9 days, 70+ km with full kit",
      coverage: "Stills, handheld film, aerials",
    },
    {
      peak: "Lone Peak",
      range: "Wasatch Range, Utah",
      height: "",
      style: "Splitboard, at dawn",
      coverage: "Stills, in Backcountry Magazine",
    },
  ],
  logPhoto: SHAQSHA_DAWN,
  ctaHeading: "Tell me about the objective",
  ctaText:
    "Sponsored athlete, expedition team or a brand backing a climb: tell me the peak, the line and the dates.",
} as const;

/* ── Drone cinematography ─────────────────────────────────────────── */

export const DRONE = {
  hero: HUAYHUASH_AERIAL,
  lead: "Aerial film and stills of ridgelines, glaciers and approach routes, graded to sit alongside everything shot on the ground.",
  pairHeading: "Same mountain, two vantage points",
  pairText:
    "From the ridge you get the climber's view. From the air you get the whole story: the route, the lakes below and how small a person is up there.",
  pair: [
    {
      label: "From the ridge",
      photo: {
        src: `${P}/cusco-region/nevado-campa/nevado-campa-3.webp`,
        width: 2560,
        height: 1707,
        alt: "An orange dawn sky over a high plateau dotted with lakes, the snow of the south ridge of Nevado Campa in the foreground, Peru",
        title: "Dawn from the south ridge",
        place: "Nevado Campa, Cusco",
      },
    },
    { label: "From the air", photo: CAMPA_AERIAL },
  ] as { label: string; photo: Photo }[],
  usesHeading: "What I fly for",
  uses: [
    {
      heading: "Film productions",
      text: "Planned camera moves for brand films and campaigns: reveals, orbits and tracking shots.",
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
      text: "Lodges, itineraries and landscapes from the angle that makes people book.",
      photo: {
        src: `${P}/amazonas-region/laguna-de-los-condores/laguna-de-los-condores-27.webp`,
        width: 2560,
        height: 1919,
        alt: "Aerial view of a small tin-roofed cabin in a green clearing, blue woodsmoke drifting across the meadow, cloud forest covering the slopes all around, Amazonas, Peru",
        title: "Cabin in the cloud forest",
        place: "Amazonas",
      },
    },
    {
      heading: "Aerial stills",
      text: "High-resolution frames composed for print, editorial and social, not pulled from video.",
      photo: {
        src: `${P}/cusco-region/nevado-sirijuani/nevado-sirijuani-1.webp`,
        width: 2560,
        height: 1705,
        alt: "Aerial view of the glacier spilling down the northwest slopes of Nevado Sirijuani between dark rock ridges, Cordillera Urubamba, Peru",
        title: "Nevado Sirijuani",
        place: "Cordillera Urubamba, Cusco",
      },
    },
    {
      heading: "Expedition coverage",
      text: "The scale of a route and a glacier, from where no ground camera can reach.",
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
  notesHeading: "Flying in the high Andes",
  notes: [
    {
      heading: "One grade",
      text: "Aerials are color graded with the ground footage, so the cut never jumps between two looks.",
    },
    {
      heading: "Planned for altitude",
      text: "Thin air, cold batteries and afternoon wind shape every flight plan. Launch windows go into the schedule early.",
    },
    {
      heading: "Carried in",
      text: "The drone travels in my pack, so it flies from the camp or the col, not just the roadside.",
    },
  ],
  ctaHeading: "Let's get your project off the ground",
  ctaText: "Tell me about the campaign, the expedition or the place, and where you want the camera to fly.",
} as const;

/* ── Adventure photography ────────────────────────────────────────── */

export const ADVENTURE = {
  hero: SAN_ANTONIO_PASS,
  lead: "For travelers, groups of friends and tour operators heading into the Peruvian Andes. Based in Cusco, available across Peru.",
  statement: "Your trip, as a gallery you'll actually print.",
  body: "You'll be busy walking, breathing and taking it in. I'll be making sure the day is captured properly: the planned hero shots, and the moments in between that nobody thought to plan.",
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
  phasesHeading: "Before, during and after",
  phases: [
    {
      name: "Before",
      text: "We talk through your itinerary: where, how many days, and the shots that matter most to you. I plan around the light.",
    },
    {
      name: "On the trail",
      text: "I document the trip as it unfolds, carrying my own kit at altitude and keeping your pace, whatever the weather.",
    },
    {
      name: "After",
      text: "I cull to the strongest frames and edit them to one consistent finish, then deliver a private gallery to download and share.",
    },
  ],
  includedHeading: "What's in your gallery",
  included: [
    "Planning together before the trip",
    "Full-day or multi-day coverage",
    "A curated set of edited, high-resolution photos",
    "A private online gallery to download from",
    "Files ready to share and to print",
    "Aerial photos, as an optional add-on",
  ],
  includedPhoto: {
    src: `${P}/ancash-region/cordillera-huayhuash/cordillera-huayhuash-22.webp`,
    width: 1365,
    height: 2048,
    alt: "A red tent pitched on the grass beside the turquoise water of Laguna Caramarca, a trekker at the shore and the glaciers of Nevado Rasac behind, Peru",
    title: "Laguna Caramarca",
    place: "Cordillera Huayhuash, Áncash",
  } as Photo,
  ctaHeading: "Let's plan your shoot",
  ctaText: "Send me your itinerary, or just the idea of one, and I'll be in touch.",
} as const;

/* ── Brand & commercial ───────────────────────────────────────────── */

export const BRAND = {
  hero: AUSANGATE_FINS,
  lead: "Campaign stills and film for outdoor, travel and hospitality brands, shot on location in Peru and worldwide.",
  statement: "Imagery that sells the experience, because it was shot inside it.",
  body: "Gear looks right when it's used where it was made to be used. I shoot product, people and place in real terrain and real weather, so the campaign holds up to the people who know the difference.",
  capabilitiesHeading: "What brands hire me for",
  capabilities: [
    {
      heading: "Product and gear",
      text: "Apparel, hardgoods and equipment, shot in the field where they're meant to be used.",
    },
    {
      heading: "Campaigns",
      text: "From concept to delivery: stills and motion for launches, seasonal collections and brand stories.",
    },
    {
      heading: "Athletes and lifestyle",
      text: "Sponsored athletes and talent in real adventure settings, for every channel you publish on.",
    },
    {
      heading: "Destination and travel",
      text: "For travel companies, lodges and tourism boards. Images that make people want to book.",
    },
    {
      heading: "Motion and film",
      text: "Social cutdowns to full brand films, with aerial coverage from the same shoot.",
    },
    {
      heading: "Editorial",
      text: "Assignments and branded content for outdoor and adventure-travel publications.",
    },
  ],
  photos: [
    {
      src: `${P}/cusco-region/urubamba/urubamba-11.webp`,
      width: 1707,
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
  productionIntro:
    "A visiting team should arrive and start working. The groundwork is handled before you land.",
  production: [
    { item: "Location scouting", detail: "Routes, light and access checked in person before the shoot." },
    { item: "Filming permits", detail: "Arranged for protected areas and heritage sites." },
    { item: "Local crew", detail: "Guides, porters, drivers and assistants I work with regularly." },
    { item: "Transport", detail: "From Cusco or Huaraz to the trailhead and back." },
    { item: "Acclimatization", detail: "Built into the schedule, not left to the week of the shoot." },
  ],
  processHeading: "How a campaign runs",
  process: [
    { name: "Brief", text: "We agree on outcomes, deliverables and the creative direction." },
    { name: "Plan", text: "Locations, logistics, talent and shot list, scoped to the campaign." },
    { name: "Produce", text: "Stills and motion on location, on the schedule we agreed." },
    { name: "Deliver", text: "Edited, ready-to-publish files with clear licensing." },
  ],
  ctaHeading: "Let's talk about your campaign",
  ctaText: "Tell me about your brand, your goals and your timeline, and I'll come back with how we can work together.",
} as const;
