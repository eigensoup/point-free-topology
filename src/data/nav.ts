export type TourStop = {
  href: string;
  /** Short label for nav menus. */
  label: string;
  /** Fuller title for pagination cards and the home index. */
  title: string;
  blurb: string;
};

/**
 * The site as an ordered walk. Single source of truth for the header nav, the
 * footer nav, the home index and the prev/next pagination — add a stop here and
 * every one of them picks it up.
 */
export const tour: TourStop[] = [
  {
    href: "/",
    label: "Home",
    title: "Topology without points",
    blurb: "Where the whole idea starts: throw away the points, keep the opens.",
  },
  {
    href: "/ideas",
    label: "The ideas",
    title: "Six words, and you can read the literature",
    blurb:
      "Frames, locales, sublocales, the Ω ⊣ pt adjunction, compactification, and proof without choice.",
  },
  {
    href: "/people",
    label: "The people",
    title: "Nobody does this alone",
    blurb:
      "From Stone and Ehresmann to Isbell, Banaschewski, Johnstone, Pultr and Picado.",
  },
  {
    href: "/reading",
    label: "Reading",
    title: "A short shelf",
    blurb: "The books, essays and sources to go to next.",
  },
];

/** Every stop except home — what the nav menus list. */
export const navStops = tour.filter((stop) => stop.href !== "/");

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
