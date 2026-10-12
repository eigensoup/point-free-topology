export type PaperStatus = "published" | "in-progress" | "sought";

export type Paper = {
  title: string;
  author: string;
  year: string;
  status: PaperStatus;
  note: string;
  /** Only once it is actually published somewhere. */
  href?: string;
  arxiv?: string;
};

/**
 * The typesetting project's output.
 *
 * Deliberately empty: nothing has been published yet, and the Papers page is
 * built to say so plainly rather than to look busy. Add entries as they are
 * finished and the page fills itself in — `status` drives how each one renders.
 */
export const papers: Paper[] = [];

export const published = papers.filter((p) => p.status === "published");
export const inProgress = papers.filter((p) => p.status === "in-progress");
