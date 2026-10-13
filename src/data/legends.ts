import { banaschewskiPhotos, type Photo } from "./photos";

export type Milestone = { year: string; what: string };

export type Work = {
  title: string;
  detail: string;
  year: string;
  href?: string;
};

/** Everything a full profile page needs. Prose fields accept *emphasis*
 *  markers, rendered by <RichText>, so copy stays in data rather than JSX. */
export type Profile = {
  initials: string;
  /** Replaces the initials monogram in the masthead when present. */
  portrait?: Photo;
  /** Shown as an "In pictures" section after the work. */
  gallery?: Photo[];
  dates: string;
  /** Short credential chips under the name. */
  credentials: string[];
  lede: string;
  workHeading: string;
  work: string[];
  pullQuote: string;
  timelineHeading: string;
  timeline: Milestone[];
  worksHeading: string;
  worksIntro: string;
  works: Work[];
  closing: { heading: string; body: string; linkLabel: string; linkHref: string };
};

export type Legend = {
  slug: string;
  name: string;
  /** Surname alone — used in nav, pagination and tight mobile layouts. */
  short: string;
  years: string;
  place: string;
  /** The one-paragraph note shown on the lineage index. */
  note: string;
  /** Present only for people who have a full page of their own. */
  profile?: Profile;
};

/**
 * The people of pointfree topology, in rough chronological order.
 *
 * To add someone: append an entry here. The lineage index, the header nav and
 * the prev/next pagination all read from this array. Give them a `profile` and
 * /legends/<slug> builds itself — no new page file required.
 */
export const legends: Legend[] = [
  {
    slug: "stone",
    name: "Marshall H. Stone",
    short: "Stone",
    years: "1903–1989",
    place: "Harvard · Chicago",
    note: "His 1936 representation theorem turned Boolean algebras into spaces, and spaces into algebra. Every later duality in the subject is a variation on that exchange.",
  },
  {
    slug: "ehresmann",
    name: "Charles Ehresmann",
    short: "Ehresmann",
    years: "1905–1979",
    place: "Paris",
    note: "Proposed in the 1950s that a lattice of opens is worth studying as a structure in its own right — the 'local lattices' that became frames.",
  },
  {
    slug: "dowker-papert",
    name: "Hugh Dowker & Dona Papert Strauss",
    short: "Dowker & Papert",
    years: "1912–1982 · b. 1934",
    place: "London",
    note: "Carried frame theory from a definition into a working toolkit through the 1960s and 70s, including the treatment of sublocales and separation.",
  },
  {
    slug: "isbell",
    name: "John Isbell",
    short: "Isbell",
    years: "1930–2005",
    place: "Buffalo",
    note: "“Atomless parts of spaces” (1972) named the locale and insisted that the pointfree side was the better-behaved category, not a curiosity.",
  },
  {
    slug: "banaschewski",
    name: "Bernhard Banaschewski",
    short: "Banaschewski",
    years: "1926–2022",
    place: "McMaster",
    note: "Over two hundred papers that made the pointfree theory complete: compactification, real-valued functions, rings, and proofs that need no choice.",
    profile: {
      initials: "BB",
      portrait: banaschewskiPhotos.portrait,
      gallery: [
        banaschewskiPhotos.seminar,
        banaschewskiPhotos.toast,
        banaschewskiPhotos.colleagues,
        banaschewskiPhotos.group,
        banaschewskiPhotos.closeup,
        banaschewskiPhotos.painting,
      ],
      dates: "22 March 1926 — 31 October 2022",
      credentials: ["McKay Professor Emeritus, McMaster", "200+ papers"],
      lede: "He arrived in Hamilton, Ontario in 1955 and stayed for sixty-seven years. In that time he took pointfree topology from a handful of suggestive definitions to a theory that could stand beside the classical one — and in places replace it.",
      workHeading: "What he actually did",
      work: [
        "Banaschewski took his doctorate at the University of Hamburg under Ernst Witt, in a tradition of algebra that shows everywhere in his later work. He never treated topology as a subject about points that happened to admit a lattice-theoretic description. He treated the lattice as the subject.",
        "The programme he pursued for half a century was deceptively simple: take a theorem of classical topology, ask what it says about opens alone, and find out whether the pointfree version is true, false, or — most interestingly — *truer*. Over and over the answer was the third one. The pointfree statement would turn out to hold under weaker hypotheses, or without the axiom of choice, or over an arbitrary topos rather than only over sets.",
        "His 1957 paper *Spaces of dimension zero* gave the construction now called the Banaschewski compactification: the zero-dimensional counterpart of Stone–Čech, realised as the Stone space of the Boolean algebra of clopen sets. Two decades later, with Christopher Mulvey, he built the Stone–Čech compactification of a locale outright, in two papers of 1980 and 1984 that remain the foundation of the area. And he proved the result that turned compactification from a construction into a classification: the compactifications of a frame correspond, order isomorphically, to the strong inclusions on it.",
        "Alongside that ran the long project on the pointfree reals and on rings of continuous real functions — what does *C(L)* mean when *L* has no points? — and the globalisation of Gelfand duality with Mulvey, which lifted a theorem about commutative C*-algebras over sets into a theorem that holds over any topos.",
      ],
      pullQuote:
        "The points were never the subject. They were a convenient way of talking about the opens, and once you notice that, you can put them down.",
      timelineHeading: "Ninety-six years, one department",
      timeline: [
        { year: "1926", what: "Born 22 March in Munich." },
        { year: "early 1950s", what: "Doctorate at the University of Hamburg, supervised by Ernst Witt." },
        { year: "1955", what: "Joins the Department of Mathematics at McMaster University in Hamilton, Ontario — the department he would stay with for the rest of his life." },
        { year: "1961–67", what: "First term as Department Chair." },
        { year: "1962", what: "Elected a Fellow of the Royal Society of Canada." },
        { year: "1964", what: "Appointed McKay Professor of Mathematics." },
        { year: "1982–87", what: "Second term as Department Chair." },
        { year: "1991", what: "Retires as McKay Professor Emeritus — and keeps publishing." },
        { year: "2000", what: "Honorary doctorate, University of Cape Town." },
        { year: "2017", what: "Honorary degree from McMaster University." },
        { year: "2022", what: "Dies on 31 October, aged 96." },
      ],
      worksHeading: "Six of more than two hundred",
      worksIntro:
        "A full bibliography runs to several hundred entries. These are the ones a newcomer to pointfree topology is most likely to meet first.",
      works: [
        {
          title: "Spaces of dimension zero",
          year: "1957",
          detail:
            "Canadian Journal of Mathematics. The construction behind what is now called the Banaschewski compactification β₀X — the zero-dimensional analogue of Stone–Čech, realised as the Stone space of the Boolean algebra of clopen sets.",
          href: "https://encyclopediaofmath.org/wiki/Banaschewski_compactification",
        },
        {
          title: "Stone–Čech compactification of locales I",
          year: "1980",
          detail:
            "With C. J. Mulvey. Houston Journal of Mathematics. Builds the compactification entirely inside the lattice, with no appeal to points or to the axiom of choice.",
        },
        {
          title: "Stone–Čech compactification of locales II",
          year: "1984",
          detail:
            "With C. J. Mulvey. Journal of Pure and Applied Algebra. The sequel, and the paper most often cited as the start of serious pointfree compactification theory.",
        },
        {
          title: "The real numbers in pointfree topology",
          year: "1997",
          detail:
            "Textos de Matemática, Série B 12, Universidade de Coimbra. A book-length account of the pointfree reals and of rings of continuous real functions. Reissued in revised form by Springer in the Coimbra Mathematical Texts series.",
          href: "https://link.springer.com/book/9783032358882",
        },
        {
          title: "On the function ring functor in pointfree topology",
          year: "2005",
          detail:
            "Applied Categorical Structures 13. Treats C(L) as a functor and asks which of its classical properties survive the move away from points.",
          href: "https://doi.org/10.1007/s10485-005-5795-7",
        },
        {
          title: "A globalisation of the Gelfand duality theorem",
          year: "2006",
          detail:
            "With C. J. Mulvey. Annals of Pure and Applied Logic. Gelfand duality rebuilt so that it holds over an arbitrary base topos rather than only over sets.",
        },
      ],
      closing: {
        heading: "He kept publishing for thirty years after he retired",
        body: "Mathematics departments measure careers in appointments and chairs. Banaschewski's is better measured by the fact that the papers never stopped — and that the people who work on frames and locales today are, nearly all of them, working on questions he opened.",
        linkLabel: "McMaster's memorial page",
        linkHref: "https://math.mcmaster.ca/bernhard-banaschewski-1926-2022/",
      },
    },
  },
  {
    slug: "mulvey",
    name: "Christopher Mulvey",
    short: "Mulvey",
    years: "b. 1944",
    place: "Sussex",
    note: "With Banaschewski, built the Stone–Čech compactification of locales and the localic form of Gelfand duality.",
  },
  {
    slug: "johnstone",
    name: "Peter Johnstone",
    short: "Johnstone",
    years: "b. 1948",
    place: "Cambridge",
    note: "Stone Spaces (1982) gave the field its canonical text; “The point of pointless topology” (1983) gave it its manifesto.",
  },
  {
    slug: "pultr",
    name: "Aleš Pultr",
    short: "Pultr",
    years: "b. 1938",
    place: "Charles University, Prague",
    note: "Banaschewski's long-running collaborator and, with Picado, author of the modern reference on frames and locales.",
  },
  {
    slug: "picado",
    name: "Jorge Picado",
    short: "Picado",
    years: "b. 1963",
    place: "Coimbra",
    note: "Co-author of Frames and Locales (2012) and a steady custodian of the subject's literature and history.",
  },
];

/** Only the people who have a page of their own. */
export const profiledLegends = legends.filter((p) => p.profile);

export function getLegend(slug: string): Legend | undefined {
  return legends.find((p) => p.slug === slug);
}

/** Prev/next within the profiled people, so person pages paginate between
 *  each other as more are added. */
export function legendNeighbours(slug: string) {
  const i = profiledLegends.findIndex((p) => p.slug === slug);
  return {
    prev: i > 0 ? profiledLegends[i - 1] : null,
    next: i > -1 && i < profiledLegends.length - 1 ? profiledLegends[i + 1] : null,
  };
}
