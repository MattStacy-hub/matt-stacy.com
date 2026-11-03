import type { Photo } from "./home";

/** The About page's copy and photos, in page order. */

export const ABOUT_HERO: Photo = {
  src: "/images/about/matt-stacy-huayhuash.webp",
  width: 2560,
  height: 1703,
  alt: "Matt Stacy standing on a grassy ridge above a turquoise glacial lake in the Cordillera Huayhuash, Peru",
  title: "Huayhuash circuit, 2025",
  place: "Cordillera Huayhuash, Áncash",
  focus: "50% 82%",
};

export const PORTRAIT: Photo = {
  src: "/images/about/matt-stacy-portrait.webp",
  width: 1707,
  height: 2560,
  alt: "Portrait of Matt Stacy, adventure photographer, seated against a dark background",
  title: "Matt Stacy",
  place: "Cusco",
};

/** Essay opener, set in Fraunces. */
export const INTRO_OPENER =
  "I create visual stories for commercial brands, expedition teams, and athletes in far-out places that impact audiences.";

/** The facts a producer checks first. Shown as a field sheet beside the portrait. */
export const FIELD_SHEET = [
  { term: "Home base", value: "Cusco, Peru" },
  { term: "Where I work", value: "Across Peru, available globally" },
  {
    term: "Specialty",
    value: "Alpine climbing, trekking, expeditions, travel and lifestyle – anywhere rugged and beautiful",
  },
  { term: "Languages I speak", value: "English & Spanish" },
  { term: "Highest shoot", value: "Nevado Palcaraju – 6,274 meters" },
  { term: "Years of experience", value: "6+" },
];
