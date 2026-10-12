export type Figure = {
  name: string;
  years: string;
  place: string;
  note: string;
};

/** Figures whose work built the pointfree tradition, in rough chronological order. */
export const lineage: Figure[] = [
  {
    name: "Marshall H. Stone",
    years: "1903–1989",
    place: "Harvard · Chicago",
    note: "His 1936 representation theorem turned Boolean algebras into spaces, and spaces into algebra. Every later duality in the subject is a variation on that exchange.",
  },
  {
    name: "Charles Ehresmann",
    years: "1905–1979",
    place: "Paris",
    note: "Proposed in the 1950s that a lattice of opens is worth studying as a structure in its own right — the 'local lattices' that became frames.",
  },
  {
    name: "Hugh Dowker & Dona Papert Strauss",
    years: "1912–1982 · b. 1934",
    place: "London",
    note: "Carried frame theory from a definition into a working toolkit through the 1960s and 70s, including the treatment of sublocales and separation.",
  },
  {
    name: "John Isbell",
    years: "1930–2005",
    place: "Buffalo",
    note: "“Atomless parts of spaces” (1972) named the locale and insisted that the pointfree side was the better-behaved category, not a curiosity.",
  },
  {
    name: "Bernhard Banaschewski",
    years: "1926–2022",
    place: "McMaster",
    note: "Over two hundred papers that made the pointfree theory complete: compactification, real-valued functions, rings, and proofs that need no choice.",
  },
  {
    name: "Christopher Mulvey",
    years: "b. 1944",
    place: "Sussex",
    note: "With Banaschewski, built the Stone–Čech compactification of locales and the localic form of Gelfand duality.",
  },
  {
    name: "Peter Johnstone",
    years: "b. 1948",
    place: "Cambridge",
    note: "Stone Spaces (1982) gave the field its canonical text; “The point of pointless topology” (1983) gave it its manifesto.",
  },
  {
    name: "Aleš Pultr",
    years: "b. 1938",
    place: "Charles University, Prague",
    note: "Banaschewski's long-running collaborator and, with Picado, author of the modern reference on frames and locales.",
  },
  {
    name: "Jorge Picado",
    years: "b. 1963",
    place: "Coimbra",
    note: "Co-author of Frames and Locales (2012) and a steady custodian of the subject's literature and history.",
  },
];

export type Work = {
  title: string;
  detail: string;
  year: string;
  href?: string;
};

/** Selected Banaschewski publications, verified against library and publisher records. */
export const selectedWorks: Work[] = [
  {
    title: "Spaces of dimension zero",
    detail:
      "Canadian Journal of Mathematics. The construction behind what is now called the Banaschewski compactification β₀X — the zero-dimensional analogue of Stone–Čech, realised as the Stone space of the Boolean algebra of clopen sets.",
    year: "1957",
    href: "https://encyclopediaofmath.org/wiki/Banaschewski_compactification",
  },
  {
    title: "Stone–Čech compactification of locales I",
    detail:
      "With C. J. Mulvey. Houston Journal of Mathematics. Builds the compactification entirely inside the lattice, with no appeal to points or to the axiom of choice.",
    year: "1980",
  },
  {
    title: "Stone–Čech compactification of locales II",
    detail:
      "With C. J. Mulvey. Journal of Pure and Applied Algebra. The sequel, and the paper most often cited as the start of serious pointfree compactification theory.",
    year: "1984",
  },
  {
    title: "The real numbers in pointfree topology",
    detail:
      "Textos de Matemática, Série B 12, Universidade de Coimbra. A book-length account of the pointfree reals and of rings of continuous real functions. Reissued in revised form by Springer in the Coimbra Mathematical Texts series.",
    year: "1997",
    href: "https://link.springer.com/book/9783032358882",
  },
  {
    title: "A globalisation of the Gelfand duality theorem",
    detail:
      "With C. J. Mulvey. Annals of Pure and Applied Logic. Gelfand duality rebuilt so that it holds over an arbitrary base topos rather than only over sets.",
    year: "2006",
  },
  {
    title: "On the function ring functor in pointfree topology",
    detail:
      "Applied Categorical Structures 13. Treats C(L) as a functor and asks which of its classical properties survive the move away from points.",
    year: "2005",
    href: "https://doi.org/10.1007/s10485-005-5795-7",
  },
];

export type Milestone = { year: string; what: string };

/** Career timeline. Sourced from the McMaster memorial page and the Mathematics Genealogy Project. */
export const timeline: Milestone[] = [
  { year: "1926", what: "Born 22 March in Munich." },
  {
    year: "early 1950s",
    what: "Doctorate at the University of Hamburg, supervised by Ernst Witt.",
  },
  {
    year: "1955",
    what: "Joins the Department of Mathematics at McMaster University in Hamilton, Ontario — the department he would stay with for the rest of his life.",
  },
  { year: "1961–67", what: "First term as Department Chair." },
  { year: "1962", what: "Elected a Fellow of the Royal Society of Canada." },
  { year: "1964", what: "Appointed McKay Professor of Mathematics." },
  { year: "1982–87", what: "Second term as Department Chair." },
  { year: "1991", what: "Retires as McKay Professor Emeritus — and keeps publishing." },
  { year: "2000", what: "Honorary doctorate, University of Cape Town." },
  { year: "2017", what: "Honorary degree from McMaster University." },
  { year: "2022", what: "Dies on 31 October, aged 96." },
];
