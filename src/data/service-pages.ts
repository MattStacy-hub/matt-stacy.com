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
  heading: "How I can help",
  intro:
    "Commercial adventure photography and film from the Peruvian Andes, for the brands, expeditions, and athletes who go where the story is. Hire me for a shoot, or take home the work itself.",
  /** One row per service, keyed by slug: who it suits, in their words, what it is, and a photo. */
  routes: {
    "expedition-athlete-documentation": {
      audience: "You're climbing something, or sponsoring someone who is",
      text: "Full-trip coverage for expedition teams and sponsored athletes.",
      photo: VERONICA_ICE,
    },
    "drone-cinematography": {
      audience: "You need the view nobody on the ground can get",
      text: "Cinematic aerials that reveal the scale of the landscape.",
      photo: HUAYHUASH_AERIAL,
    },
    "adventure-photography": {
      audience: "You're traveling to Peru for a trek, a climb or a day in the hills",
      text: "For individuals and groups visiting Peru who value high-quality photography.",
      photo: SAN_ANTONIO_PASS,
    },
    "brand-commercial": {
      audience: "You're a brand with a campaign to shoot in the Andes",
      text: "Photo and video campaigns that help outdoor brands stand out.",
      photo: AUSANGATE_FINS,
    },
  } as Record<string, { audience: string; text: string; photo: Photo }>,
  compareHeading: "What each service covers",
  ctaHeading: "Bring your vision to life",
  ctaText: "Tell me about your project, expedition, or campaign.",
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
  lead: "I capture the raw emotion of athletes pushing their limits. Expedition teams on the cutting edge of mountain adventures. The joys, the pain, and every step taken from the start of the journey to the final summit push.",
  statement: "Legacies, documented.",
  body: [
    "My skills as an alpinist and all-around outdoor athlete mean I can rope up without being a liability. I carry my own kit, shoot handheld angles from top-down, and produce captivating, dynamic aerial footage.",
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
      text: "Campaign-ready stills and film that show the athlete in real terrain. Built for brand decks, social, editorial, and film licensing.",
    },
    {
      heading: "For expedition teams",
      text: "I climb with you. My own kit, rope skills, no babysitting. Full documentation of the expedition as it happens, from the approach to the summit and back down.",
    },
  ],
  logHeading: "Real objectives, documented",
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
    "Whether you're a sponsored athlete, an expedition team, or a brand backing a climb, let's talk about documenting it properly.",
} as const;

/* ── Drone cinematography ─────────────────────────────────────────── */

export const DRONE = {
  hero: HUAYHUASH_AERIAL,
  lead: "Dynamic aerials that reveal new perspectives. For professional productions, launching from anywhere you can imagine.",
  pairHeading: "Heightened perspective",
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
        src: `${P}/amazonas-region/laguna-de-los-condores/laguna-de-los-condores-27.webp`,
        width: 2560,
        height: 1919,
        alt: "Aerial view of a small tin-roofed cabin in a green clearing, blue woodsmoke drifting across the meadow, cloud forest covering the slopes all around, Amazonas, Peru",
        title: "Cabin in the cloud forest",
        place: "Amazonas",
      },
    },
    {
      heading: "Stills",
      text: "High-resolution aerial photography, composed and delivered ready for print, editorial, and social.",
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
  ctaText: "Tell me about your campaign, expedition, or destination, and where you want the camera to fly.",
} as const;

/* ── Adventure photography ────────────────────────────────────────── */

export const ADVENTURE = {
  hero: SAN_ANTONIO_PASS,
  lead: "Traveling to Peru for a trek, a climb, or a once-in-a-lifetime adventure? I document journeys throughout all of Peru, turning your time from the Andes to the Amazon into a gallery of story-driven images you'll be excited to share, print, and relive.",
  statement: "Photos that tell a story.",
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
  ctaHeading: "Let's plan your shoot",
  ctaText: "Tell me about your expedition or project.",
} as const;

/* ── Brand & commercial ───────────────────────────────────────────── */

export const BRAND = {
  hero: AUSANGATE_FINS,
  lead: "Commercial photography and film for outdoor brands, travel companies, and hospitality. On-location shooting throughout Peru and worldwide.",
  statement: "Imagery that sells the experience.",
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
  processHeading: "How we collaborate",
  process: [
    { name: "Brief", text: "We define your outcomes, deliverables, and creative vision." },
    { name: "Plan", text: "Location, logistics, talent, and shot list are scoped to your campaign." },
    { name: "Produce", text: "On-location production of stills and motion required to meet our goals." },
    { name: "Deliver", text: "Edited, public-facing assets delivered on schedule with clear licensing." },
  ],
  ctaHeading: "Let's talk about your campaign",
  ctaText: "Tell me about your brand, your goals, and your timeline. I'll get back to you with how we can work together.",
} as const;
