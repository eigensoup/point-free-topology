/**
 * Where to send things, and how to help.
 *
 * `coffeeUrl` is the one value that still needs filling in. Set it to the real
 * Buy Me a Coffee page and the support panel turns into a working button; while
 * it is null the panel stays, says the link is being set up, and points at the
 * same email. Nothing here is ever a guessed URL.
 */
export const coffeeUrl: string | null = null;

/** Everything is coordinated through one inbox. */
export const contactEmail = "jwalterswayland@gmail.com";

export type Track = {
  id: string;
  title: string;
  /** The short imperative that heads the card. */
  kicker: string;
  body: string;
  /** What to put in the subject line, so the inbox stays sortable. */
  subject: string;
  /** What a useful first email actually contains. */
  asks: string[];
};

export const tracks: Track[] = [
  {
    id: "originals",
    title: "Send in originals",
    kicker: "If you have the paper",
    body: "Offprints, preprints, seminar notes, correspondence, photocopies, a phone photograph of something in a filing cabinet. Scans do not need to be good. A legible photograph of a page is worth more than a perfect scan that never gets made.",
    subject: "Originals",
    asks: [
      "What the document is, as far as you know",
      "Where it came from, so provenance can be recorded",
      "Anything you know about its publication status",
    ],
  },
  {
    id: "typesetting",
    title: "Typeset a paper",
    kicker: "If you know LaTeX",
    body: "The slowest part of the work is turning a scan into a source file. If you can read mathematics and write LaTeX, you can take a paper from image to document. You do not need to be a specialist in frames and locales — the mathematics is checked separately.",
    subject: "Typesetting",
    asks: [
      "Roughly how much time you can give",
      "Whether you would rather be assigned something or pick",
      "Your LaTeX setup, if you have a preference",
    ],
  },
  {
    id: "editing",
    title: "Edit and vet",
    kicker: "If you know the mathematics",
    body: "Typeset drafts need someone who can compare them against the original and catch what the transcription lost: a misread symbol, a dropped hypothesis, a diagram that has to be rebuilt. New sources need someone who can judge whether they are what they claim to be.",
    subject: "Editing",
    asks: [
      "Which areas you are comfortable checking",
      "Whether you would rather proofread drafts or vet new sources",
    ],
  },
];

/** What happens to a document between arriving and being published. */
export const pipeline = [
  {
    step: "Arrives",
    body: "Someone sends a scan, a photograph or a physical copy. It is logged with whatever is known about where it came from.",
  },
  {
    step: "Vetted",
    body: "Someone who knows the mathematics confirms what it is, and whether it is already in print somewhere.",
  },
  {
    step: "Typeset",
    body: "A volunteer turns the scan into LaTeX source — mathematics, diagrams and all.",
  },
  {
    step: "Checked",
    body: "A second pair of eyes reads the draft against the original, and the corrections go back.",
  },
  {
    step: "Published",
    body: "The finished paper goes up here, and onto arXiv where its licence allows.",
  },
];
