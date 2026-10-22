import type { Photo } from "./photos";

export type Chapter = {
  n: number;
  title: string;
  /** Seconds into the joined film where this chapter begins. */
  start: number;
  /** Seconds. */
  duration: number;
  /** Path under /public — a frame from the chapter, for the chapter list. */
  poster: string;
};

/**
 * The film is published as seventeen short chapters. Here they are joined
 * end to end into one file (stream copy, no re-encode), served from Google
 * Cloud Storage: project `pointfreetopology-film`, bucket of the same name.
 * Each chapter's own closing card is trimmed so they run straight on.
 */
export const filmSrc =
  "https://storage.googleapis.com/pointfreetopology-film/what-is-the-point.mp4";

export const film = {
  title: "What Is the Point?",
  subject: "Bernhard Banaschewski",
  maker: "George Csicsery",
  series: "Chapman Life Stories",
  seriesNote: "Oral histories with noted scientists and scholars",
  institution: "Chapman University",
};

/** Offsets measured from the chapter files when they were joined. */
export const chapters: Chapter[] = [
  { n: 1, title: "Background", start: 0, duration: 259.97, poster: "/film/posters/01.jpg" },
  { n: 2, title: "Coping with the Nazis", start: 259.97, duration: 545.21, poster: "/film/posters/02.jpg" },
  { n: 3, title: "Bombing of Hamburg", start: 805.18, duration: 552.89, poster: "/film/posters/03.jpg" },
  { n: 4, title: "Surviving WWII", start: 1358.07, duration: 928.55, poster: "/film/posters/04.jpg" },
  { n: 5, title: "Understanding Mathematics", start: 2286.62, duration: 295.5, poster: "/film/posters/05.jpg" },
  { n: 6, title: "Introduction to Topology", start: 2582.12, duration: 161.74, poster: "/film/posters/06.jpg" },
  { n: 7, title: "Advanced Studies at Hamburg", start: 2743.87, duration: 181.64, poster: "/film/posters/07.jpg" },
  { n: 8, title: "Thesis", start: 2925.51, duration: 263.68, poster: "/film/posters/08.jpg" },
  { n: 9, title: "Frames: Point Free Spaces", start: 3189.19, duration: 536.16, poster: "/film/posters/09.jpg" },
  { n: 10, title: "Visiting Humboldt University", start: 3725.35, duration: 189.15, poster: "/film/posters/10.jpg" },
  { n: 11, title: "Getting Hired at McMaster University", start: 3914.49, duration: 172.34, poster: "/film/posters/11.jpg" },
  { n: 12, title: "South Africa", start: 4086.83, duration: 448.36, poster: "/film/posters/12.jpg" },
  { n: 13, title: "Prague", start: 4535.2, duration: 316.02, poster: "/film/posters/13.jpg" },
  { n: 14, title: "Collaborators", start: 4851.22, duration: 274.57, poster: "/film/posters/14.jpg" },
  { n: 15, title: "Iran", start: 5125.79, duration: 74.95, poster: "/film/posters/15.jpg" },
  { n: 16, title: "Lifestyle", start: 5200.74, duration: 208.29, poster: "/film/posters/16.jpg" },
  { n: 17, title: "Axiom of Choice", start: 5409.03, duration: 357.38, poster: "/film/posters/17.jpg" },
];

export const filmRuntime = chapters.at(-1)!.start + chapters.at(-1)!.duration;

/** The people the film interviews, as their lower thirds name them. */
export const voices: { name: string; affiliation: string }[] = [
  { name: "Bernhard Banaschewski", affiliation: "McMaster University, Hamilton" },
  { name: "Aleš Pultr", affiliation: "Charles University, Prague" },
  { name: "Christopher Gilmour", affiliation: "University of Cape Town, South Africa" },
  { name: "Anneliese Schauerte", affiliation: "University of Cape Town, South Africa" },
  { name: "Richard N. Ball", affiliation: "University of Denver" },
  { name: "Joanne Walters-Wayland", affiliation: "Chapman University" },
];

/** Frames from the film, cropped above the burned-in subtitles. */
export const filmStills = {
  portrait: {
    src: "/film/stills/portrait-bw.jpg",
    alt: "Black-and-white photograph of a bearded Bernhard Banaschewski in profile, by a window",
    focus: "65% 35%",
  },
  blackboard: {
    src: "/film/stills/blackboard.jpg",
    alt: "Bernhard Banaschewski at a green chalkboard covered in lattice notation, with 1958 Ehresmann and 1972 Isbell written on it",
    caption: "Lecturing, with Ehresmann and Isbell on the board.",
    focus: "70% 40%",
  },
  doorway: {
    src: "/film/stills/doorway.jpg",
    alt: "Black-and-white photograph of a young Bernhard Banaschewski in shirt and tie beside a carved wooden door, talking with two colleagues",
    caption: "With colleagues, in an old doorway.",
    focus: "70% 30%",
  },
  capeTown: {
    src: "/film/stills/cape-town.jpg",
    alt: "The University of Cape Town's buildings beneath Devil's Peak",
    caption: "The University of Cape Town, which gave him an honorary doctorate in 2000.",
    focus: "50% 40%",
  },
} satisfies Record<string, Photo>;

/** 63 → "1:03"; 3725 → "1:02:05". */
export function formatRuntime(seconds: number) {
  const s = Math.floor(seconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const ss = String(s % 60).padStart(2, "0");
  return h ? `${h}:${String(m).padStart(2, "0")}:${ss}` : `${m}:${ss}`;
}
