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
  "I make photographs and films for brands, expedition teams and athletes who work in far-out places, and I want them to move the people who see them.";

export const INTRO_BODY = [
  "I came to climbing through the camera. Following stronger partners up walls, I came home with frame after frame shot from below, and none of the exposure or context that makes a climbing image land. To get the shots I wanted, I had to become a climber first.",
  "So I left the camera at home. For two seasons of splitboarding in Utah, and again for two years of learning to lead and climb ice, I worked on the craft before the photography. The partners I shoot with know I'll never trade the team's safety for a frame, and that trust is what puts me on the rope beside them.",
];

/** The facts a producer checks first. Shown as a field sheet beside the story. */
export const FIELD_SHEET = [
  { term: "Based", value: "Sacred Valley, Cusco, Peru" },
  { term: "Working", value: "Across Peru, available worldwide" },
  { term: "Focus", value: "Alpine climbing, expeditions, travel and lifestyle" },
  { term: "Languages", value: "English, Spanish (fluent)" },
  { term: "Highest shoot", value: "6,274 m, Nevado Palcaraju" },
  { term: "In the field since", value: "2019" },
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
    year: "2020",
    title: "Splitboarding in the Wasatch",
    text: "A 101 course and close to 70 days in the backcountry before the camera came out seriously. Snow safety first, photos second.",
  },
  {
    year: "2022",
    title: "First glaciated summit",
    text: "A dormmate in a Huaraz hostel invited me on a guided climb of Nevado Vallunaraju. I came home to Salt Lake City and started climbing in a gym the next month.",
    href: "/blog/vertical-my-story-and-approach-to-becoming-a-photographer-in-alpine-environments",
  },
  {
    year: "2024",
    title: "Sunrise on Lone Peak",
    text: "A 6,000-foot night approach to ride the Question Mark Wall at first light. The frame ran in the Backcountry Magazine Photo Annual.",
  },
  {
    year: "2025",
    title: "A new route on Palcaraju",
    text: "Opened a line on the 6,274 m peak in the Cordillera Blanca with Nate Heald, then made my second alpine circuit of the Huayhuash: 70 km and seven passes in six days.",
    href: "/blog/climbing-a-new-route-on-nevado-palcaraju-6274m",
  },
  {
    year: "Now",
    title: "Living in the Andes",
    text: "Based in the Sacred Valley year-round, from Peru's mountaineering seasons to backcountry ski trips in Argentina and Chile.",
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
      "I live in the Peruvian Andes year-round and speak Spanish fluently, so scouting, permits, transport and local crews are handled from here, not flown in.",
    detail: "Cordillera Blanca · Huayhuash · Vilcanota · Urubamba",
  },
  {
    question: "Who handles the rest?",
    answer:
      "Photography, video and aerial work as one package. I plan, shoot, edit and deliver, so there's one person to brief and one schedule to keep.",
    detail: "Stills · Video · Drone",
  },
];
