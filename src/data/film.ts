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
 * end to end into one file, served from Google Cloud Storage: project
 * `pointfreetopology-film`, bucket of the same name.
 *
 * This is the edited cut. Only the first chapter keeps the opening animation;
 * the rest open on their own title card, except the chapters named for a
 * place, which open instead on a globe turning to it, its label left on
 * screen after the globe fades. Each chapter's closing card is trimmed so
 * they run straight on. The unedited chapters are kept in the bucket under
 * `original/`, and the first, stream-copied join at `what-is-the-point.mp4`.
 */
export const filmSrc =
  "https://storage.googleapis.com/pointfreetopology-film/what-is-the-point-v4.mp4";

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
  { n: 2, title: "Coping with the Nazis", start: 259.97, duration: 530.2, poster: "/film/posters/02.jpg" },
  { n: 3, title: "Bombing of Hamburg", start: 790.16, duration: 544.21, poster: "/film/posters/03.jpg" },
  { n: 4, title: "Surviving WWII", start: 1334.37, duration: 913.54, poster: "/film/posters/04.jpg" },
  { n: 5, title: "Understanding Mathematics", start: 2247.91, duration: 280.49, poster: "/film/posters/05.jpg" },
  { n: 6, title: "Introduction to Topology", start: 2528.4, duration: 146.73, poster: "/film/posters/06.jpg" },
  { n: 7, title: "Advanced Studies at Hamburg", start: 2675.13, duration: 172.76, poster: "/film/posters/07.jpg" },
  { n: 8, title: "Thesis", start: 2847.89, duration: 248.67, poster: "/film/posters/08.jpg" },
  { n: 9, title: "Frames: Point Free Spaces", start: 3096.55, duration: 521.15, poster: "/film/posters/09.jpg" },
  { n: 10, title: "Visiting Humboldt University", start: 3617.7, duration: 180.47, poster: "/film/posters/10.jpg" },
  { n: 11, title: "Getting Hired at McMaster University", start: 3798.17, duration: 163.58, poster: "/film/posters/11.jpg" },
  { n: 12, title: "South Africa", start: 3961.75, duration: 439.48, poster: "/film/posters/12.jpg" },
  { n: 13, title: "Prague", start: 4401.23, duration: 307.14, poster: "/film/posters/13.jpg" },
  { n: 14, title: "Collaborators", start: 4708.37, duration: 259.55, poster: "/film/posters/14.jpg" },
  { n: 15, title: "Iran", start: 4967.92, duration: 66.07, poster: "/film/posters/15.jpg" },
  { n: 16, title: "Lifestyle", start: 5033.99, duration: 193.28, poster: "/film/posters/16.jpg" },
  { n: 17, title: "Axiom of Choice", start: 5227.26, duration: 342.36, poster: "/film/posters/17.jpg" },
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
