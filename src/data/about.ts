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

/** What a team gets when I join, written as answers to a producer's questions. */
export const STRENGTHS = [
  {
    question: "Can they keep up?",
    answer:
      "I carry my own kit and keep pace at altitude over long days. I rope up and shoot from positions a photographer who doesn't climb can't safely reach.",
    detail: "Wilderness First Responder · Avalanche Level 1",
  },
  {
    question: "Do they know the ground?",
    answer:
      "I live in the Peruvian Andes year-round and work in Spanish, so scouting, permits, transport and local crews are handled from here, not flown in.",
    detail: "Cordillera Blanca · Huayhuash · Vilcanota · Urubamba",
  },
  {
    question: "Who handles the rest?",
    answer:
      "Photography, video and aerial work as one package. I plan, shoot, edit and deliver, so there's one person to brief and one schedule to keep.",
    detail: "Stills · Video · Drone",
  },
];
