export type TourStop = {
  href: string;
  /** Short label for nav menus. */
  label: string;
  /** Fuller title for pagination cards and the home index. */
  title: string;
  blurb: string;
  /** A few words, for tight layouts like the home index. */
  short: string;
  /** Omit from the header nav, but keep in the footer, home index and
   *  pagination. Used to stop the header growing without limit. */
  header?: boolean;
};

/**
 * The site as an ordered walk. Single source of truth for the header, the
 * footer, the home index and the prev/next pagination — add a stop here and
 * every one of them picks it up.
 */
export const tour: TourStop[] = [
  {
    href: "/",
    label: "Home",
    title: "Topology without points",
    short: "Throw away the points.",
    blurb: "Where the whole idea starts: throw away the points, keep the opens.",
  },
  {
    href: "/ideas",
    label: "Ideas",
    title: "Six words, and you can read the literature",
    blurb:
      "Frames, locales, sublocales, the Ω ⊣ pt adjunction, compactification, and proof without choice.",
    short: "The six words you need.",
  },
  {
    href: "/legends",
    label: "Legends",
    title: "Nobody does this alone",
    blurb:
      "From Stone and Ehresmann to Isbell, Banaschewski, Johnstone, Pultr and Picado.",
    short: "Who built it, and how.",
  },
  {
    href: "/other-legends",
    label: "Other Legends",
    title: "Other legends and related ideas",
    blurb:
      "Henriksen and rings of continuous functions, Martínez and algebraic frames — the subjects next door.",
    short: "The subjects next door.",
  },
  {
    href: "/conferences",
    label: "Conferences",
    title: "Where everyone turns up",
    blurb:
      "Banaschewski 100 — a centennial conference in Orange, California, January 2027.",
    short: "Banaschewski 100, January 2027.",
  },
  {
    href: "/papers",
    label: "Papers",
    title: "The papers, typeset and published",
    blurb:
      "Work by the legends, retypeset from the originals and released here and on arXiv.",
    short: "Retypeset from the originals.",
  },
  {
    href: "/get-involved",
    label: "Get Involved",
    title: "Get involved",
    blurb:
      "Send originals, typeset a paper, edit a draft, or buy the project a coffee.",
    short: "Send, typeset, edit, donate.",
  },
  {
    href: "/reading",
    label: "Reading",
    title: "A short shelf",
    short: "Where to read it properly.",
    blurb: "The books, essays and sources to go to next.",
    header: false,
  },
];

/** What the header nav lists. */
export const navStops = tour.filter(
  (stop) => stop.href !== "/" && stop.header !== false,
);

/** Every destination, for the footer and the home index. */
export const allStops = tour.filter((stop) => stop.href !== "/");

/** The stop before and after a route, for prev/next pagination. */
export function neighbours(href: string): {
  prev: TourStop | null;
  next: TourStop | null;
} {
  const i = tour.findIndex((stop) => stop.href === href);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? tour[i - 1] : null,
    next: i < tour.length - 1 ? tour[i + 1] : null,
  };
}
