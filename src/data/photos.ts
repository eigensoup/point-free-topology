export type Photo = {
  /** Path under /public. */
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  /** CSS object-position, for when a crop would cut off a face. */
  focus?: string;
};

/**
 * Photographs of Bernhard Banaschewski, kept in /public/banaschewski/.
 * Shared by his profile and the centennial conference page.
 */
export const banaschewskiPhotos = {
  portrait: {
    src: "/banaschewski/portrait-chair.jpg",
    alt: "Bernhard Banaschewski in a dark suit, seated in a carved wooden chair against a stone wall",
    focus: "50% 20%",
  },
  toast: {
    src: "/banaschewski/toast.jpg",
    alt: "Bernhard Banaschewski standing with a glass of white wine raised, a candle in the foreground",
    caption: "Raising a glass.",
    focus: "50% 25%",
  },
  seminar: {
    src: "/banaschewski/seminar-coimbra.jpg",
    alt: "Bernhard Banaschewski lecturing in front of a green chalkboard covered in notation",
    caption: "At the blackboard in Coimbra.",
    focus: "55% 30%",
  },
  colleagues: {
    src: "/banaschewski/with-colleagues.jpg",
    alt: "Bernhard Banaschewski, glass in hand, standing between two younger colleagues",
    caption: "With colleagues.",
    focus: "50% 35%",
  },
  group: {
    src: "/banaschewski/conference-group.jpg",
    alt: "Bernhard Banaschewski standing among a group of conference participants outdoors",
    caption: "Among friends at a conference.",
    focus: "50% 30%",
  },
  closeup: {
    src: "/banaschewski/black-shirt.jpg",
    alt: "Close-up of Bernhard Banaschewski in a black shirt, mid-conversation",
    caption: "Mid-conversation.",
    focus: "40% 30%",
  },
  painting: {
    src: "/banaschewski/painting-patricia-murphy.png",
    alt: "A painting of Bernhard Banaschewski writing in an armchair beside a green glass lamp",
    caption: "Writing by lamplight, in paint.",
    credit: "Courtesy of Patricia Murphy",
    focus: "30% 40%",
  },
} satisfies Record<string, Photo>;
