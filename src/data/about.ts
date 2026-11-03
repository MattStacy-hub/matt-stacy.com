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
  { term: "Highest shoot", value: "6,274 m, Nevado Palcaraju" },
  { term: "Years of experience", value: "6+" },
];

export interface Milestone {
  year: string;
  title: string;
  text: string;
  /** A blog post with the full story. */
  href?: string;
}

/** How I got here, oldest first. */
export const MILESTONES: Milestone[] = [
  {
    year: "2019",
    title: "The drive west",
    text: "I graduated from university in Indiana and moved from the Chicago suburbs to Los Angeles for an engineering job. On the drive I saw the Tetons, my first real mountains. Until then they only existed in textbooks.",
  },
  {
    year: "2020",
    title: "The first camera",
    text: "The trails closed for COVID. On the couch in Santa Monica I hesitated over a $600 Canon T7i on eBay, and my roommate said you'll never know if you don't take the risk. I bought it, and learning it never felt like work. That November I moved to Salt Lake City to be near the mountains.",
  },
  {
    year: "2021",
    title: "Going solo",
    text: "I'd never traveled alone, so I tried five days in Jackson Hole. A week after getting back, I built a sleeping platform in my car and drove 4,000 miles, working remotely the whole way. I took an avalanche course and started shooting friends snowboarding and climbing.",
  },
  {
    year: "2022",
    title: "Peru",
    text: "My friend Joey and I walked the Salkantay trek, five days and about 50 miles self-supported, and I saw glaciated mountains for the first time. I was supposed to fly home. Instead I went to Huaraz for seven weeks, made my first Peruvian friends and learned Spanish from almost nothing.",
    href: "/blog/vertical-my-story-and-approach-to-becoming-a-photographer-in-alpine-environments",
  },
  {
    year: "2025",
    title: "Andes Adventure Visuals",
    text: "After coming back every year, I started a business to give other people the same access: photography tours, workshops, mountaineering expeditions and treks across Peru.",
    href: "https://www.andesadventurevisuals.com",
  },
  {
    year: "Now",
    title: "Here for good",
    text: "I live full-time in the Sacred Valley and make photographs and films in the high Andes. I've been told no countless times and pivoted again and again. The work is only starting to take off, and it feels like it's just beginning.",
  },
];

export const PULL_QUOTE = {
  quote:
    "I didn't want my work as a photographer to endanger the lives of my partners.",
  credit: "From “Vertical,” on learning to climb before shooting climbing",
  href: "/blog/vertical-my-story-and-approach-to-becoming-a-photographer-in-alpine-environments",
};

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
