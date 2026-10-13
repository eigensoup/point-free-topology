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
  /** Masthead eyebrow; defaults to "A life in one department". */
  eyebrow?: string;
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
  /** The idea they are known for, shown on /other-legends. */
  idea?: string;
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

/**
 * People whose own subject runs alongside pointfree topology rather than
 * inside it — listed on /other-legends, each with the idea they are known
 * for. Profiles here build at /legends/<slug> exactly as the main ones do.
 */
export const otherLegends: Legend[] = [
  {
    slug: "henriksen",
    name: "Melvin Henriksen",
    short: "Henriksen",
    years: "1927–2009",
    place: "Purdue · Harvey Mudd",
    idea: "Rings of continuous functions",
    note: "Helped turn C(X), the ring of continuous real functions on a space, into a subject of its own — the algebra that the pointfree theory of C(L) later rebuilt without points.",
    profile: {
      initials: "MH",
      eyebrow: "Algebra and topology, together",
      dates: "1927 — 2009",
      credentials: ["Professor of Mathematics, Harvey Mudd", "Rings of continuous functions"],
      lede: "Henriksen spent his career on a single, very fertile question: how much of a space X can you read off from the ring C(X) of continuous real-valued functions on it? The answers, worked out with Leonard Gillman, John Isbell, Meyer Jerison and many others, became a field.",
      workHeading: "Reading a space from its functions",
      work: [
        "Henriksen took his doctorate at the University of Wisconsin in 1951, supervised by Richard Bruck and William Eberlein, with a thesis on the ideal structure of the ring of entire functions and other function rings. The question of what the ideals of a function ring know about the underlying object stayed with him for the rest of his life.",
        "With Leonard Gillman in the 1950s he introduced two classes of spaces that are still named in every text on the subject: the *P-spaces*, in which every prime ideal of C(X) is maximal, and the *F-spaces*, in which every finitely generated ideal is principal. The point was not the definitions but the method — a topological property and an algebraic one turning out to be the same thing seen from two sides. That work fed directly into Gillman and Jerison's *Rings of Continuous Functions* (1960), the book that fixed the subject's language.",
        "With Isbell he studied compactifications; with Jerison, the space of minimal prime ideals of a commutative ring, a construction that reaches well beyond function rings. Later work with Jan Vermeer and Grant Woods on quasi-F covers, and with Jorge Martínez and Woods on prime z-ideals, kept the same two-sided habit going into the 2000s.",
        "For pointfree topology this is the classical half of a conversation. Banaschewski's long project on *C(L)* for a frame L asks Henriksen's questions with the points removed — and much of what is known about the pointfree function ring is measured against what Henriksen and his collaborators proved about C(X).",
      ],
      pullQuote:
        "A space is known by the functions it carries. Ask the right question of the ring, and the topology answers.",
      timelineHeading: "From Madison to Claremont",
      timeline: [
        { year: "1927", what: "Born." },
        { year: "1951", what: "Ph.D., University of Wisconsin, under R. H. Bruck and W. F. Eberlein." },
        { year: "1950s", what: "At Purdue, where the work with Leonard Gillman on rings of continuous functions begins." },
        { year: "1969", what: "Joins Harvey Mudd College, Claremont, as Professor of Mathematics." },
        { year: "1997", what: "Retires from Harvey Mudd — and, like Banaschewski, keeps working in the field." },
        { year: "2009", what: "Dies in the autumn, aged 82." },
        { year: "2010", what: "A memorial conference on his life and work is held at Harvey Mudd on 27 March." },
      ],
      worksHeading: "A few places to start",
      worksIntro:
        "Henriksen's bibliography is long and heavily collaborative. These are the papers most often cited as the foundations of the area.",
      works: [
        {
          title: "Concerning rings of continuous functions",
          year: "1954",
          detail:
            "With L. Gillman. Transactions of the AMS. Introduces P-spaces and sets out the ideal theory of C(X) that later work builds on.",
        },
        {
          title: "Rings of continuous functions in which every finitely generated ideal is principal",
          year: "1956",
          detail:
            "With L. Gillman. Transactions of the AMS. The paper that defines F-spaces by an algebraic property of their function rings.",
        },
        {
          title: "Some properties of compactifications",
          year: "1958",
          detail:
            "With J. R. Isbell. Duke Mathematical Journal. Compactifications studied through the functions they extend.",
        },
        {
          title: "The space of minimal prime ideals of a commutative ring",
          year: "1965",
          detail:
            "With M. Jerison. Transactions of the AMS. A topology on minimal primes that has since become standard well outside function rings.",
        },
      ],
      closing: {
        heading: "The classical half of the conversation",
        body: "Pointfree topology keeps asking what survives when the points are gone. For rings of functions, the thing it is checking against is very often a theorem of Henriksen's.",
        linkLabel: "Mathematics Genealogy Project",
        linkHref: "https://mathgenealogy.org/id.php?id=8227",
      },
    },
  },
  {
    slug: "martinez",
    name: "Jorge Martínez",
    short: "Martínez",
    years: "1945–2020",
    place: "University of Florida",
    idea: "Algebraic frames",
    note: "Came to frames from lattice-ordered groups, and made the algebraic frames — those generated by their compact elements — a working tool for both subjects.",
    profile: {
      initials: "JM",
      eyebrow: "From ordered groups to frames",
      dates: "1945 — 2020",
      credentials: ["University of Florida, Gainesville", "100+ papers"],
      lede: "Martínez began in the theory of lattice-ordered groups and found, over a long career at the University of Florida, that many of its questions were really questions about frames. His work on algebraic frames is where the two subjects meet.",
      workHeading: "Frames inside ordered algebra",
      work: [
        "Martínez took his doctorate at Tulane University in 1969 under Paul Conrad, one of the founders of the modern theory of lattice-ordered groups. His early papers — on varieties, torsion classes and Archimedean-like classes of ℓ-groups — are in that tradition.",
        "The lattice of convex ℓ-subgroups of an ℓ-group is an *algebraic frame*: a frame in which every element is a join of compact elements. Martínez saw that this was not a coincidence to be noted and set aside but a structure to be studied. Much of the behaviour of an ℓ-group — its polars, its Archimedean properties, its projectable and Yosida hulls — can be read off from the frame, and the frame-theoretic statement is often cleaner and more general.",
        "Through the 2000s, with Eric Zenk, Warren McGovern, Anthony Hager and others, he developed the theory of algebraic frames in its own right: when such a frame is regular, what dimension means for it, *Yosida frames*, unit and kernel systems, and a long series on epicompletion in frames with skeletal maps. Frames in which every element is a d-element are now called *Martínez frames* in his honour.",
        "He was also a builder of community — editor of several volumes from the Ordered Algebraic Structures conferences, and co-editor of the Applied Categorical Structures issue marking Banaschewski's eightieth birthday.",
      ],
      pullQuote:
        "Look at the lattice of convex subgroups long enough and you stop seeing a group. You see a frame.",
      timelineHeading: "Tulane to Gainesville",
      timeline: [
        { year: "1945", what: "Born." },
        { year: "1969", what: "Ph.D., Tulane University, supervised by Paul F. Conrad." },
        { year: "1970s", what: "Papers on varieties and torsion classes of lattice-ordered groups, from the University of Florida, Gainesville." },
        { year: "1989–2002", what: "Edits proceedings of the Ordered Algebraic Structures conferences in Curaçao and Gainesville." },
        { year: "2003–2013", what: "The algebraic-frames programme: regularity, dimension, Yosida frames, epicompletion." },
        { year: "2007", what: "Co-edits the Applied Categorical Structures issue honouring Banaschewski's 80th birthday." },
        { year: "2020", what: "Dies." },
      ],
      worksHeading: "A few places to start",
      worksIntro:
        "Over a hundred papers, roughly split between ℓ-groups and frames. These show the bridge being built.",
      works: [
        {
          title: "When an algebraic frame is regular",
          year: "2003",
          detail:
            "With E. R. Zenk. Algebra Universalis 50. The basic regularity theory for frames generated by their compact elements.",
        },
        {
          title: "Yosida frames",
          year: "2006",
          detail:
            "With E. R. Zenk. Journal of Pure and Applied Algebra 204. Algebraic frames modelled on the Yosida representation of ℓ-groups.",
        },
        {
          title: "Dimension in algebraic frames",
          year: "2006",
          detail:
            "Czechoslovak Mathematical Journal 56. What Krull-style dimension means for an algebraic frame.",
          href: "https://eudml.org/doc/31040",
        },
        {
          title: "The role of frames in the development of lattice-ordered groups: a personal account",
          year: "2007",
          detail:
            "Trends in Mathematics. His own history of how frame theory entered the study of ℓ-groups — the best short introduction to why the two subjects belong together.",
        },
      ],
      closing: {
        heading: "Where ordered algebra meets pointfree topology",
        body: "Algebraic frames sit exactly between the two subjects: frames, but ones whose structure is controlled by algebra. Martínez spent two decades showing how much traffic that bridge can carry.",
        linkLabel: "Mathematics Genealogy Project",
        linkHref: "https://mathgenealogy.org/id.php?id=11993",
      },
    },
  },
];

const everyone = [...legends, ...otherLegends];

/** Only the people who have a page of their own, main lineage first. */
export const profiledLegends = everyone.filter((p) => p.profile);

export function getLegend(slug: string): Legend | undefined {
  return everyone.find((p) => p.slug === slug);
}

/** True for the people listed on /other-legends rather than /legends. */
export function isOtherLegend(slug: string) {
  return otherLegends.some((p) => p.slug === slug);
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
