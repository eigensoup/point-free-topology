export type Named = { name: string; affiliation: string };

export type Conference = {
  slug: string;
  /** Short name, used in nav, cards and the landing banner. */
  name: string;
  subtitle: string;
  honouree: string;
  honoureeDates: string;
  /** ISO 8601 with offset. Orange, California is UTC-8 in January. */
  startsAt: string;
  endsAt: string;
  dateLabel: string;
  venue: {
    place: string;
    address: string;
    rooms: string;
    city: string;
  };
  intro: string[];
  registration: {
    fee: string;
    includes: string;
    excludes: string;
    deadline: string;
    formUrl: string;
    paymentNote: string;
  };
  documentary: {
    title: string;
    maker: string;
    when: string;
    note: string;
  };
  speakers: Named[];
  participants: Named[];
  travel: {
    airports: { code: string; name: string; note: string }[];
    ground: string;
  };
  accommodation: {
    hotel: string;
    rate: string;
    includes: string;
    groupName: string;
    bookingUrl: string;
    alternatives: string;
  };
  organisers: { name: string; affiliation: string; email?: string }[];
  sourceUrl: string;
};

/**
 * Conferences in the pointfree world.
 *
 * To add one: append an entry here and /conferences/<slug> builds itself.
 * Photographs are deliberately absent — every image on a conference page is a
 * <PhotoFrame> stand-in until a real file is dropped into /public/conferences/
 * and the component is swapped for next/image.
 */
export const conferences: Conference[] = [
  {
    slug: "banaschewski100",
    name: "Banaschewski 100",
    subtitle: "A centennial conference",
    honouree: "Bernhard Banaschewski",
    honoureeDates: "22 March 1926 — 31 October 2022",
    startsAt: "2027-01-11T09:00:00-08:00",
    endsAt: "2027-01-14T17:00:00-08:00",
    dateLabel: "11–14 January 2027",
    venue: {
      place: "Chapman University",
      address: "One University Drive, Orange, CA 92866",
      rooms: "Talks are held in Beckman Hall or the Keck Center, both on the main campus.",
      city: "Orange, California",
    },
    intro: [
      "A workshop-style conference celebrating the life and mathematics of Bernhard Banaschewski, held in the centenary year of his birth.",
      "Four days of talks among the people who work on frames and locales — many of them his collaborators, his students, or the students of his students.",
    ],
    registration: {
      fee: "$150",
      includes:
        "the evening reception, the conference dinner, and refreshments during the day",
      excludes: "No other meals are covered by the fee.",
      deadline: "No fixed deadline — the organisers ask that you register as soon as you can, and the form can be updated later if your details change.",
      formUrl: "https://forms.gle/cXGzbTcx2sjKBvhb9",
      paymentNote: "A payment option is to be added to the official site.",
    },
    documentary: {
      // Title per the project organisers; the public conference site announces
      // the film without naming it, so this is the one place to correct it.
      title: "What Is the Point?",
      maker: "George Csicsery",
      when: "Monday 11 January, during the evening reception",
      note: "Venue still to be confirmed.",
    },
    speakers: [
      { name: "Igor Arrieta", affiliation: "University of the Basque Country UPV/EHU, Spain" },
      { name: "Raquel Bernardes", affiliation: "University of Coimbra, Portugal" },
      { name: "Papiya Bhattacharjee", affiliation: "Florida Atlantic University, USA" },
      { name: "Imanol Mozo Carollo", affiliation: "University of the Basque Country EHU, Spain" },
      { name: "Warren McGovern", affiliation: "Florida Atlantic University, USA" },
      { name: "Jorge Picado", affiliation: "University of Coimbra, Portugal" },
      { name: "Aleš Pultr", affiliation: "Charles University, Czechia" },
      { name: "Anneliese Schauerte", affiliation: "University of Cape Town, South Africa" },
    ],
    participants: [
      { name: "Igor Arrieta", affiliation: "University of the Basque Country UPV/EHU, Spain" },
      { name: "Ana Belén Avilez García", affiliation: "ITAM, Mexico" },
      { name: "Raquel Bernardes", affiliation: "University of Coimbra, Portugal" },
      { name: "Papiya Bhattacharjee", affiliation: "Florida Atlantic University, USA" },
      { name: "Karim Boulabiar", affiliation: "University of Tunis El Manar, Tunisia" },
      { name: "Fred Dashiell", affiliation: "CECAT, Chapman University, USA" },
      { name: "Ann Fwaru", affiliation: "University of South Africa, South Africa" },
      { name: "Javier Gutiérrez García", affiliation: "University of the Basque Country UPV/EHU, Spain" },
      { name: "Oghenetega Ighedo", affiliation: "Chapman University, USA" },
      { name: "James Madden", affiliation: "Louisiana State University, USA" },
      { name: "Albert Madinya", affiliation: "US Army" },
      { name: "Imanol Mozo Carollo", affiliation: "University of the Basque Country EHU, Spain" },
      { name: "Simo Mthethwa", affiliation: "University of KwaZulu-Natal, South Africa" },
      { name: "Jorge Picado", affiliation: "Centre for Mathematics of the University of Coimbra, Portugal" },
      { name: "Aleš Pultr", affiliation: "Charles University, Prague, Czechia" },
      { name: "Anneliese Schauerte", affiliation: "University of Cape Town, South Africa" },
      { name: "Dorca Stephen", affiliation: "Technical University of Mombasa, Kenya" },
      { name: "Anna Laura Suarez", affiliation: "Hunan University, China" },
      { name: "Batsile Tlharesakgosi", affiliation: "University of South Africa, South Africa" },
      { name: "Joanne Walters-Wayland", affiliation: "CECAT, Chapman University, USA" },
    ],
    travel: {
      airports: [
        { code: "SNA", name: "John Wayne / Orange County", note: "Closest to campus." },
        { code: "LAX", name: "Los Angeles International", note: "Larger, further out." },
        { code: "SAN", name: "San Diego International", note: "A longer drive south." },
      ],
      ground:
        "Some public transport is available, but a rideshare is usually the easiest way to and from the airport.",
    },
    accommodation: {
      hotel: "The Ayres Hotel Orange",
      rate: "$149 per night",
      includes: "a full American breakfast buffet, parking and Wi-Fi",
      groupName: "Bernhard Banaschewski 100-BB100",
      bookingUrl:
        "https://bookings.ihotelier.com/bookings.jsp?groupID=5490903&hotelID=131335",
      alternatives:
        "Rooms closer to campus can usually be found on the usual short-let sites.",
    },
    organisers: [
      { name: "Ana Belén Avilez García", affiliation: "ITAM, Mexico", email: "anabelenavilez@gmail.com" },
      {
        name: "Oghenetega Ighedo",
        affiliation: "Chapman University, USA",
        // The official site prints chapman.com; corrected to chapman.edu.
        email: "ighedo@chapman.edu",
      },
      { name: "Joanne Walters-Wayland", affiliation: "CECAT, Chapman University, USA", email: "jwalterswayland@gmail.com" },
    ],
    sourceUrl: "https://sites.google.com/chapman.edu/banaschewski100",
  },
];

export function getConference(slug: string) {
  return conferences.find((c) => c.slug === slug);
}

/**
 * The conference the landing banner features: the one starting latest.
 *
 * Deliberately clock-free. Pages are prerendered with `cacheComponents`, which
 * forbids reading the current time during render, so every before/during/after
 * decision belongs to <Countdown>, which runs on the client.
 */
export function featuredConference() {
  return (
    [...conferences].sort((a, b) => +new Date(b.startsAt) - +new Date(a.startsAt))[0] ??
    null
  );
}
