/**
 * Portfolio collections and their photos. The six collections keep the
 * slugs of the old site's galleries, so existing links and search results
 * still land on the right page.
 *
 * Photos are defined once, by file name, and listed into collections in
 * page order: some frames appear in more than one collection.
 */

export interface PortfolioPhoto {
  src: string;
  width: number;
  height: number;
  /** Describes the frame for screen readers and image search. */
  alt: string;
}

export interface Collection {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  /** In page order. The first is the collection's cover. */
  photos: PortfolioPhoto[];
}

const PHOTOS: Record<string, PortfolioPhoto> = {
  "nevado-shaqsha-alpenglow": { src: "/images/portfolio/nevado-shaqsha-alpenglow.webp", width: 2560, height: 1707, alt: "A climber small on the glacier below Nevado Shaqsha, the summit lit pink at dawn, Cordillera Blanca, Peru" },
  "sacred-valley-aerial": { src: "/images/portfolio/sacred-valley-aerial.webp", width: 2048, height: 1364, alt: "Aerial view over green ridges of the Sacred Valley toward a snow peak under broken cloud, Cusco, Peru" },
  "salt-flat-lone-figure": { src: "/images/portfolio/salt-flat-lone-figure.webp", width: 2560, height: 1707, alt: "A lone figure on a flat, pale lake bed below low desert mountains at dusk, Utah" },
  "cloud-forest-cliff-edge": { src: "/images/portfolio/cloud-forest-cliff-edge.webp", width: 1707, height: 2560, alt: "Two hikers on the edge of a grassy cliff above a valley filling with cloud, Peru" },
  "inti-punku-nevado-veronica": { src: "/images/portfolio/inti-punku-nevado-veronica.webp", width: 2560, height: 1707, alt: "The Inca gateway of Inti Punku on a ridge in evening light, Nevado Verónica behind, Sacred Valley, Peru" },
  "ausangate-basecamp-flute": { src: "/images/portfolio/ausangate-basecamp-flute.webp", width: 1707, height: 2560, alt: "A man playing the flute on golden grassland below glaciated peaks, Ausangate, Peru" },
  "hiker-below-snow-peak": { src: "/images/portfolio/hiker-below-snow-peak.webp", width: 1707, height: 2560, alt: "A hiker on a steep green slope below a rocky ridge and a snow peak, Peru" },
  "huayhuash-valley-stream": { src: "/images/portfolio/huayhuash-valley-stream.webp", width: 1365, height: 2048, alt: "A stream winding through a golden valley below cloud-wrapped snow peaks, Cordillera Huayhuash, Peru" },
  "huayhuash-camp-turquoise-lake": { src: "/images/portfolio/huayhuash-camp-turquoise-lake.webp", width: 1365, height: 2048, alt: "A red tent beside a turquoise glacial lake below jagged snow peaks, Cordillera Huayhuash, Peru" },
  "trekker-in-mist": { src: "/images/portfolio/trekker-in-mist.webp", width: 1707, height: 2560, alt: "A trekker standing in tall grass as mist hides the ridges above, Peru" },
  "nevado-campa-summit-ridge-aerial": { src: "/images/portfolio/nevado-campa-summit-ridge-aerial.webp", width: 2560, height: 1707, alt: "Aerial view of a snow summit ridge above turquoise lakes and glaciated peaks, Cordillera Vilcanota, Peru" },
  "climber-above-cloud-sea": { src: "/images/portfolio/climber-above-cloud-sea.webp", width: 1707, height: 2560, alt: "A climber in a helmet standing on summit rocks above a sea of cloud, Peru" },
  "descending-snow-chute": { src: "/images/portfolio/descending-snow-chute.webp", width: 1707, height: 2560, alt: "A climber descending a snow chute between rock bands, a range of snow peaks beyond, Cordillera Blanca, Peru" },
  "splitboarders-snowstorm": { src: "/images/portfolio/splitboarders-snowstorm.webp", width: 1707, height: 2560, alt: "Two splitboarders walking through falling snow between frosted pines, Utah" },
  "lake-reflection-green-valley": { src: "/images/portfolio/lake-reflection-green-valley.webp", width: 2560, height: 1707, alt: "A green valley and low cloud mirrored in a still lake, a lone figure on the far shore, Peru" },
  "hiker-below-green-peak": { src: "/images/portfolio/hiker-below-green-peak.webp", width: 2560, height: 1707, alt: "A hiker crossing open grassland below a pointed green peak, Peru" },
  "trekkers-forest-trail": { src: "/images/portfolio/trekkers-forest-trail.webp", width: 2560, height: 1707, alt: "Trekkers in bright jackets on a forest trail below jagged snow peaks, Peru" },
  "ridge-figure-black-and-white": { src: "/images/portfolio/ridge-figure-black-and-white.webp", width: 2560, height: 1707, alt: "Black-and-white view of a lone figure on a rocky ridge above a cloud-filled valley, Canada" },
  "ski-tourers-snow-ridge": { src: "/images/portfolio/ski-tourers-snow-ridge.webp", width: 2560, height: 1707, alt: "Three ski tourers crossing a broad snow slope below a pair of pine trees" },
  "climbers-snowy-face-black-and-white": { src: "/images/portfolio/climbers-snowy-face-black-and-white.webp", width: 1705, height: 2560, alt: "Black-and-white view of a line of climbers below a snowy mountain face, Utah" },
  "couple-campsite-mountain-view": { src: "/images/portfolio/couple-campsite-mountain-view.webp", width: 2560, height: 1707, alt: "Two people in down jackets leaning together, looking toward a rocky peak through pines, Canada" },
  "hikers-ridge-pointed-peak": { src: "/images/portfolio/hikers-ridge-pointed-peak.webp", width: 2560, height: 1706, alt: "Hikers on a green ridge facing a pointed rock peak in soft light, Ancascocha, Peru" },
  "splitboarder-skinning-steep-slope": { src: "/images/portfolio/splitboarder-skinning-steep-slope.webp", width: 2560, height: 1707, alt: "A splitboarder skinning up a steep, windblown snow slope framed by pine branches, Utah" },
  "ice-climber-yellow-jacket": { src: "/images/portfolio/ice-climber-yellow-jacket.webp", width: 1707, height: 2560, alt: "An ice climber in a yellow jacket swinging an axe into a frozen waterfall, WYO Ice Fest, Wyoming" },
  "ice-climber-frozen-pillar": { src: "/images/portfolio/ice-climber-frozen-pillar.webp", width: 1707, height: 2560, alt: "An ice climber high on a frozen pillar against a dark rock wall, WYO Ice Fest, Wyoming" },
  "frozen-waterfall-canyon": { src: "/images/portfolio/frozen-waterfall-canyon.webp", width: 1707, height: 2560, alt: "A climber on a tall frozen waterfall in a rock canyon, pines below, WYO Ice Fest, Wyoming" },
  "climbers-ice-ridge-black-and-white": { src: "/images/portfolio/climbers-ice-ridge-black-and-white.webp", width: 2560, height: 1707, alt: "Black-and-white view of climbers on a broken ice ridge above layered ranges, Peru" },
  "snowboarder-powder-turn": { src: "/images/portfolio/snowboarder-powder-turn.webp", width: 2560, height: 1707, alt: "A snowboarder throwing spray in deep powder below a line of pines" },
  "snowboarder-air-snow-slope": { src: "/images/portfolio/snowboarder-air-snow-slope.webp", width: 2560, height: 1707, alt: "A snowboarder in the air off a snowy ridge below heavy cloud" },
  "climbers-sunlit-snow-arete": { src: "/images/portfolio/climbers-sunlit-snow-arete.webp", width: 2560, height: 1707, alt: "Climbers on a sunlit snow arête at dawn above a valley in shadow" },
  "splitboarders-alpine-basin": { src: "/images/portfolio/splitboarders-alpine-basin.webp", width: 1707, height: 2560, alt: "Three splitboarders crossing a wide snow basin below rocky peaks, Utah" },
  "snowstorm-walker-pines": { src: "/images/portfolio/snowstorm-walker-pines.webp", width: 1707, height: 2560, alt: "A figure walking down a snowy road between frosted pines in a storm, Utah" },
  "skin-track-rocky-peaks": { src: "/images/portfolio/skin-track-rocky-peaks.webp", width: 1707, height: 2560, alt: "A lone splitboarder on a skin track below snowy rock peaks, Utah" },
  "climber-granite-wall": { src: "/images/portfolio/climber-granite-wall.webp", width: 2560, height: 1707, alt: "A climber in red on a huge granite wall above a forested valley" },
  "dark-ridges-aerial-black-and-white": { src: "/images/portfolio/dark-ridges-aerial-black-and-white.webp", width: 2560, height: 1919, alt: "Black-and-white aerial view down layered, forested ridges falling into shadow, Peru" },
  "palcaraju-summit-ridge": { src: "/images/portfolio/palcaraju-summit-ridge.webp", width: 2540, height: 1590, alt: "A broad corniced snow ridge on Nevado Palcaraju above cloud and dark peaks, Cordillera Blanca, Peru" },
  "ausangate-seven-lakes-aerial": { src: "/images/portfolio/ausangate-seven-lakes-aerial.webp", width: 2048, height: 1365, alt: "Aerial view of a red-roofed hut on the puna below the glaciers of Ausangate, Cusco, Peru" },
  "huayhuash-colored-ridges-aerial": { src: "/images/portfolio/huayhuash-colored-ridges-aerial.webp", width: 2560, height: 1919, alt: "Aerial view of folded ridges in rust, violet and ochre, Cordillera Huayhuash, Peru" },
  "huayhuash-glacier-aerial": { src: "/images/portfolio/huayhuash-glacier-aerial.webp", width: 2560, height: 1919, alt: "Aerial view of a crevassed glacier and blue ice above dark rock, Cordillera Huayhuash, Peru" },
  "huayhuash-cloud-peak-black-and-white": { src: "/images/portfolio/huayhuash-cloud-peak-black-and-white.webp", width: 2560, height: 1919, alt: "Black-and-white aerial view of a rock peak rising out of a sea of cloud, Cordillera Huayhuash, Peru" },
  "pine-forest-from-above": { src: "/images/portfolio/pine-forest-from-above.webp", width: 2560, height: 1438, alt: "Top-down drone view of a dense pine forest canopy" },
  "amazon-river-aerial": { src: "/images/portfolio/amazon-river-aerial.webp", width: 2560, height: 1920, alt: "Aerial view of a wide river winding through flat rainforest to the horizon, Peru" },
  "island-lagoon-aerial": { src: "/images/portfolio/island-lagoon-aerial.webp", width: 2560, height: 1438, alt: "Aerial view of a ring-shaped wooded island enclosing a dark lagoon in turquoise water, Canada" },
  "huayhuash-climber-black-and-white": { src: "/images/portfolio/huayhuash-climber-black-and-white.webp", width: 2560, height: 1707, alt: "Black-and-white view of a climber on a rock outcrop below steep snow faces, Cordillera Huayhuash, Peru" },
  "huayhuash-figure-below-peaks": { src: "/images/portfolio/huayhuash-figure-below-peaks.webp", width: 2560, height: 1707, alt: "A small figure on a rock below a wall of snow peaks under heavy cloud, Cordillera Huayhuash, Peru" },
  "huayhuash-hiker-turquoise-lake": { src: "/images/portfolio/huayhuash-hiker-turquoise-lake.webp", width: 2560, height: 1707, alt: "A hiker in red on a rocky pass above a turquoise lake and a wall of glaciated peaks, Cordillera Huayhuash, Peru" },
  "huayhuash-hiker-valley-view": { src: "/images/portfolio/huayhuash-hiker-valley-view.webp", width: 2048, height: 1365, alt: "A hiker with a large pack looking out over a wide valley of jagged peaks, Cordillera Huayhuash, Peru" },
  "huayhuash-peak-black-and-white": { src: "/images/portfolio/huayhuash-peak-black-and-white.webp", width: 2560, height: 1707, alt: "Black-and-white view of a steep, fluted snow peak breaking through cloud, Cordillera Huayhuash, Peru" },
  "huayhuash-colored-mountains": { src: "/images/portfolio/huayhuash-colored-mountains.webp", width: 1919, height: 2560, alt: "Dark peaks wrapped in cloud above slopes streaked red, purple and tan, Cordillera Huayhuash, Peru" },
  "huayhuash-camp-lake-portrait": { src: "/images/portfolio/huayhuash-camp-lake-portrait.webp", width: 1707, height: 2560, alt: "A red tent beside a turquoise lake under glaciated peaks, Cordillera Huayhuash, Peru" },
  "huayhuash-tent-at-dusk": { src: "/images/portfolio/huayhuash-tent-at-dusk.webp", width: 1365, height: 2048, alt: "A tent glowing orange at dusk below a wall of snow peaks, Cordillera Huayhuash, Peru" },
  "huayhuash-peak-aerial-black-and-white": { src: "/images/portfolio/huayhuash-peak-aerial-black-and-white.webp", width: 2560, height: 1919, alt: "Black-and-white aerial view of a rocky snow peak under a grey sky, Cordillera Huayhuash, Peru" },
  "huayhuash-trekker-below-glacier": { src: "/images/portfolio/huayhuash-trekker-below-glacier.webp", width: 1365, height: 2048, alt: "A trekker on a grassy slope below a glacier and a cloud-capped peak, Cordillera Huayhuash, Peru" },
  "huayhuash-snow-peaks-overlook": { src: "/images/portfolio/huayhuash-snow-peaks-overlook.webp", width: 2560, height: 1707, alt: "Glaciated peaks rising above a deep valley, seen from a rocky overlook, Cordillera Huayhuash, Peru" },
  "huayhuash-lakeshore-camp": { src: "/images/portfolio/huayhuash-lakeshore-camp.webp", width: 2048, height: 1365, alt: "A small red tent on a lakeshore below a broad snow peak and dark rock walls, Cordillera Huayhuash, Peru" },
  "huayhuash-snow-face-black-and-white": { src: "/images/portfolio/huayhuash-snow-face-black-and-white.webp", width: 1365, height: 2048, alt: "Black-and-white view of a sharp snow peak above steep rock, a tiny figure below, Cordillera Huayhuash, Peru" },
  "huayhuash-clouds-over-peaks": { src: "/images/portfolio/huayhuash-clouds-over-peaks.webp", width: 2048, height: 1365, alt: "Cloud pouring over dark ridges and snow peaks, Cordillera Huayhuash, Peru" },
  "huayhuash-peaks-golden-grass": { src: "/images/portfolio/huayhuash-peaks-golden-grass.webp", width: 1365, height: 2048, alt: "Snow and rock peaks in cloud above golden grass slopes, Cordillera Huayhuash, Peru" },
  "huayhuash-blue-ridges": { src: "/images/portfolio/huayhuash-blue-ridges.webp", width: 1365, height: 2048, alt: "Layered blue ridges fading into haze below a pale sky, Cordillera Huayhuash, Peru" },
  "machu-picchu-storm-light": { src: "/images/portfolio/machu-picchu-storm-light.webp", width: 2560, height: 1707, alt: "Machu Picchu below Huayna Picchu, sunbeams breaking through storm cloud, Cusco, Peru" },
  "snow-ridge-blue-sky-aerial": { src: "/images/portfolio/snow-ridge-blue-sky-aerial.webp", width: 2560, height: 1919, alt: "Aerial view of a steep snow and rock face against a pale blue sky, Peru" },
  "refuge-doorway-view": { src: "/images/portfolio/refuge-doorway-view.webp", width: 1707, height: 2560, alt: "Looking out of a stone refuge doorway to green grassland and snow peaks, Peru" },
  "moon-over-dark-ridge": { src: "/images/portfolio/moon-over-dark-ridge.webp", width: 1707, height: 2560, alt: "A full moon rising behind a dark, misty silhouette at night, Peru" },
  "puya-raimondii-cactus": { src: "/images/portfolio/puya-raimondii-cactus.webp", width: 1707, height: 2560, alt: "Puya raimondii and spiky plants on a rocky slope below a mountain, Peru" },
  "dunes-under-stars": { src: "/images/portfolio/dunes-under-stars.webp", width: 2560, height: 1707, alt: "A lone figure with a light on a sand dune under a starry sky, Utah" },
  "light-painted-ring-night": { src: "/images/portfolio/light-painted-ring-night.webp", width: 2560, height: 1707, alt: "A glowing ring of light painted in front of dark rock spires under the stars, Peru" },
  "rocky-islet-black-and-white": { src: "/images/portfolio/rocky-islet-black-and-white.webp", width: 2560, height: 1707, alt: "Black-and-white view of a rocky, tree-topped islet off a lake shore, Canada" },
  "rock-spires-under-stars": { src: "/images/portfolio/rock-spires-under-stars.webp", width: 2560, height: 1707, alt: "Dark rock spires against a starry night sky, Peru" },
  "alpine-camp-reflection": { src: "/images/portfolio/alpine-camp-reflection.webp", width: 2560, height: 1706, alt: "Two people and a tent on a rocky shore mirrored in a still alpine lake, Washington" },
  "island-lagoon-vertical-aerial": { src: "/images/portfolio/island-lagoon-vertical-aerial.webp", width: 1080, height: 1920, alt: "Vertical aerial view of a wooded island curling around a dark lagoon in turquoise water" },
  "moonrise-over-snow-range": { src: "/images/portfolio/moonrise-over-snow-range.webp", width: 2560, height: 1707, alt: "A golden moon rising beside a long snow range at dusk, Peru" },
  "paraglider-over-desert-lake": { src: "/images/portfolio/paraglider-over-desert-lake.webp", width: 1707, height: 2560, alt: "A paraglider over a desert lake and a flat-topped mountain at dusk, Utah" },
  "snow-peak-through-firs": { src: "/images/portfolio/snow-peak-through-firs.webp", width: 1080, height: 1920, alt: "A snow-capped volcano seen through fir trees on a forested ridge" },
  "glaciated-peak-aerial": { src: "/images/portfolio/glaciated-peak-aerial.webp", width: 2560, height: 1919, alt: "Aerial view of a sharp glaciated peak with cloud streaming off it, Peru" },
  "ridge-above-amazon-basin": { src: "/images/portfolio/ridge-above-amazon-basin.webp", width: 1707, height: 2560, alt: "A dark rocky ridge and snow at sunrise above hazy lowlands, Peru" },
  "layered-ridges-at-dusk": { src: "/images/portfolio/layered-ridges-at-dusk.webp", width: 2560, height: 1707, alt: "Layered dark ridges below an orange and violet dusk sky, Peru" },
  "alpenglow-snow-pyramid": { src: "/images/portfolio/alpenglow-snow-pyramid.webp", width: 2560, height: 1707, alt: "A sharp snow pyramid catching the last pink light above dark ridges" },
  "alpine-lake-larches": { src: "/images/portfolio/alpine-lake-larches.webp", width: 2560, height: 1707, alt: "An alpine lake ringed by golden larches below a snow-capped volcano at sunset" },
  "snow-mountain-in-cloud": { src: "/images/portfolio/snow-mountain-in-cloud.webp", width: 2560, height: 1707, alt: "A broad glaciated mountain rising out of soft cloud" },
  "granite-cliff-evening": { src: "/images/portfolio/granite-cliff-evening.webp", width: 2560, height: 1707, alt: "A huge granite cliff in evening light above a hazy valley, Canada" },
  "huaguruncho-at-night": { src: "/images/portfolio/huaguruncho-at-night.webp", width: 2048, height: 1365, alt: "The snow pyramid of Huaguruncho lit under a dark night sky, Peru" },
  "hot-springs-steam-mountains": { src: "/images/portfolio/hot-springs-steam-mountains.webp", width: 2560, height: 1707, alt: "Steam rising from hot springs below snow-dusted mountains in morning light, California" },
  "milky-way-sea-stack": { src: "/images/portfolio/milky-way-sea-stack.webp", width: 2560, height: 1707, alt: "The Milky Way above a tree-topped sea stack and rocky beach, Washington" },
  "fog-over-forest": { src: "/images/portfolio/fog-over-forest.webp", width: 2560, height: 1707, alt: "Morning fog drifting through a forest of firs below a far ridge, Oregon" },
  "snow-peak-lenticular-black-and-white": { src: "/images/portfolio/snow-peak-lenticular-black-and-white.webp", width: 2560, height: 1707, alt: "Black-and-white view of a jagged snow peak under a lens-shaped cloud, Peru" },
};

export const COLLECTIONS: Collection[] = [
  {
    slug: "adventure",
    title: "Adventure",
    seoTitle: "Adventure Photography Portfolio: Mountaineering and Trekking",
    seoDescription:
      "Adventure photography from the Peruvian Andes and beyond: mountaineering, trekking and the camps between, by Matt Stacy.",
    photos: [
      "nevado-shaqsha-alpenglow",
      "sacred-valley-aerial",
      "salt-flat-lone-figure",
      "cloud-forest-cliff-edge",
      "inti-punku-nevado-veronica",
      "ausangate-basecamp-flute",
      "hiker-below-snow-peak",
      "huayhuash-valley-stream",
      "huayhuash-camp-turquoise-lake",
      "trekker-in-mist",
      "nevado-campa-summit-ridge-aerial",
      "climber-above-cloud-sea",
      "descending-snow-chute",
      "splitboarders-snowstorm",
      "lake-reflection-green-valley",
      "hiker-below-green-peak",
      "trekkers-forest-trail",
      "ridge-figure-black-and-white",
      "ski-tourers-snow-ridge",
      "climbers-snowy-face-black-and-white",
      "couple-campsite-mountain-view",
      "hikers-ridge-pointed-peak",
    ].map((name) => PHOTOS[name]),
  },
  {
    slug: "extreme-sports",
    title: "Extreme Sports",
    seoTitle: "Extreme Sports Photography: Ice Climbing, Splitboarding, Alpinism",
    seoDescription:
      "Extreme sports photography: ice climbing at WYO Ice Fest, splitboarding in Utah and alpine climbing in Peru, by Matt Stacy.",
    photos: [
      "splitboarder-skinning-steep-slope",
      "ice-climber-yellow-jacket",
      "ice-climber-frozen-pillar",
      "frozen-waterfall-canyon",
      "climbers-ice-ridge-black-and-white",
      "ski-tourers-snow-ridge",
      "snowboarder-powder-turn",
      "snowboarder-air-snow-slope",
      "climbers-sunlit-snow-arete",
      "splitboarders-alpine-basin",
      "snowstorm-walker-pines",
      "skin-track-rocky-peaks",
      "climber-granite-wall",
    ].map((name) => PHOTOS[name]),
  },
  {
    slug: "aerial-stills",
    title: "Aerial Stills",
    seoTitle: "Aerial Drone Photography: Peru and Beyond",
    seoDescription:
      "Aerial drone photography of glaciers, ridges, rainforest rivers and forests in Peru and North America, by Matt Stacy.",
    photos: [
      "dark-ridges-aerial-black-and-white",
      "palcaraju-summit-ridge",
      "ausangate-seven-lakes-aerial",
      "huayhuash-colored-ridges-aerial",
      "sacred-valley-aerial",
      "huayhuash-glacier-aerial",
      "huayhuash-cloud-peak-black-and-white",
      "pine-forest-from-above",
      "amazon-river-aerial",
      "island-lagoon-aerial",
    ].map((name) => PHOTOS[name]),
  },
  {
    slug: "huayhuash-trek",
    title: "Huayhuash Trek",
    seoTitle: "Cordillera Huayhuash Trek Photography, Peru",
    seoDescription:
      "Photographs from nine days on the Huayhuash Alpine Circuit in Peru: glacial lakes, high camps and the peaks of the Cordillera Huayhuash.",
    photos: [
      "huayhuash-climber-black-and-white",
      "huayhuash-figure-below-peaks",
      "huayhuash-hiker-turquoise-lake",
      "huayhuash-hiker-valley-view",
      "huayhuash-peak-black-and-white",
      "huayhuash-valley-stream",
      "huayhuash-colored-mountains",
      "huayhuash-camp-lake-portrait",
      "huayhuash-cloud-peak-black-and-white",
      "huayhuash-tent-at-dusk",
      "huayhuash-peak-aerial-black-and-white",
      "huayhuash-trekker-below-glacier",
      "huayhuash-snow-peaks-overlook",
      "huayhuash-lakeshore-camp",
      "huayhuash-snow-face-black-and-white",
      "huayhuash-clouds-over-peaks",
      "huayhuash-peaks-golden-grass",
      "huayhuash-colored-ridges-aerial",
      "huayhuash-glacier-aerial",
      "huayhuash-blue-ridges",
    ].map((name) => PHOTOS[name]),
  },
  {
    slug: "fine-art",
    title: "Fine Art",
    seoTitle: "Fine Art Mountain Photography",
    seoDescription:
      "Fine art mountain and night photography from Peru and North America, by Matt Stacy.",
    photos: [
      "machu-picchu-storm-light",
      "snow-ridge-blue-sky-aerial",
      "refuge-doorway-view",
      "moon-over-dark-ridge",
      "puya-raimondii-cactus",
      "dunes-under-stars",
      "light-painted-ring-night",
      "rocky-islet-black-and-white",
      "rock-spires-under-stars",
      "alpine-camp-reflection",
      "dark-ridges-aerial-black-and-white",
      "island-lagoon-vertical-aerial",
      "moonrise-over-snow-range",
      "paraglider-over-desert-lake",
      "snow-peak-through-firs",
    ].map((name) => PHOTOS[name]),
  },
  {
    slug: "landscape",
    title: "Landscape",
    seoTitle: "Landscape Photography: Peruvian Andes and Beyond",
    seoDescription:
      "Landscape photography from the Peruvian Andes, Canada and the Pacific Northwest, by Matt Stacy.",
    photos: [
      "glaciated-peak-aerial",
      "amazon-river-aerial",
      "ridge-above-amazon-basin",
      "layered-ridges-at-dusk",
      "alpenglow-snow-pyramid",
      "alpine-lake-larches",
      "snow-mountain-in-cloud",
      "granite-cliff-evening",
      "huaguruncho-at-night",
      "hot-springs-steam-mountains",
      "milky-way-sea-stack",
      "fog-over-forest",
      "snow-peak-lenticular-black-and-white",
    ].map((name) => PHOTOS[name]),
  },
];

export function getCollection(slug: string): Collection | undefined {
  return COLLECTIONS.find((collection) => collection.slug === slug);
}
