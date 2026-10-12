export type Idea = {
  slug: string;
  term: string;
  glyph: string;
  short: string;
  body: string[];
};

export const ideas: Idea[] = [
  {
    slug: "frame",
    term: "Frame",
    glyph: "⋀ ⋁",
    short: "A complete lattice where finite meets distribute over arbitrary joins.",
    body: [
      "Take a topological space and throw away the points, keeping only the lattice of open sets and the relations between them. What remains is a complete lattice in which finite intersections distribute over arbitrary unions — the frame distributivity law, a ∧ ⋁ bᵢ = ⋁ (a ∧ bᵢ).",
      "A frame homomorphism preserves finite meets and arbitrary joins. That is the whole definition, and it is enough to recover a startling amount of topology.",
    ],
  },
  {
    slug: "locale",
    term: "Locale",
    glyph: "L",
    short: "The same object as a frame, read geometrically rather than algebraically.",
    body: [
      "A locale is a frame considered in the opposite category. Nothing changes but the direction of the arrows, and that is exactly the point: frame homomorphisms run like algebra, localic maps run like continuous functions.",
      "John Isbell introduced the word in 1972 so that the geometric reading could have a name of its own. Keeping both names is not redundancy — it is a way of remembering which side of the duality you are standing on.",
    ],
  },
  {
    slug: "adjunction",
    term: "The Ω ⊣ pt adjunction",
    glyph: "Ω ⊣ pt",
    short: "How spaces and locales translate into one another, and where the translation leaks.",
    body: [
      "Every space X has a frame of opens Ω(X); every locale L has a space of points pt(L). These form an adjunction between topological spaces and locales, restricting to an equivalence between sober spaces and spatial locales.",
      "The interesting locales are the ones outside that equivalence: locales with few points, or none at all, that nevertheless behave like well-mannered spaces. They are not pathologies to be excluded. They are the reason the pointfree category is better behaved than the pointed one.",
    ],
  },
  {
    slug: "sublocale",
    term: "Sublocale",
    glyph: "S ↪ L",
    short: "The pointfree replacement for a subspace — and it forms a complete lattice.",
    body: [
      "Subspaces of a space form a lattice that is awkward to work with. Sublocales of a locale form a complete lattice, closed under arbitrary intersections and joins, with open and closed sublocales as complements of one another.",
      "This is the first place where the pointfree theory is plainly better than the classical one rather than merely equivalent to it.",
    ],
  },
  {
    slug: "compactification",
    term: "Compactification",
    glyph: "βL",
    short: "Banaschewski and Mulvey built Stone–Čech inside the lattice.",
    body: [
      "Classically the Stone–Čech compactification of a space is assembled from ultrafilters, and the construction leans on the axiom of choice. Banaschewski and Mulvey built the localic version in two papers, in 1980 and 1984, without points and without choice.",
      "Banaschewski also proved the structural statement that organises the whole subject: the compactifications of a frame correspond, order-isomorphically, to the strong inclusions on it. Compactification stops being a construction you perform and becomes a structure you classify.",
    ],
  },
  {
    slug: "choice",
    term: "Choice-free proof",
    glyph: "¬AC",
    short: "Theorems that need the axiom of choice for spaces often need nothing for locales.",
    body: [
      "Tychonoff's theorem is equivalent to the axiom of choice for spaces. Its localic form is a theorem of ordinary constructive mathematics. The same pattern repeats across the subject, and Banaschewski spent decades mapping it.",
      "The practical consequence is that pointfree theorems hold over any topos, not only over sets. A proof that avoids choice is a proof that travels.",
    ],
  },
];
