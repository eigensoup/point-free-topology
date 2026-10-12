import type { Metadata } from "next";
import { ReadingShelf } from "@/components/sections";
import { PageHeader } from "@/components/site/PageHeader";
import { Pagination } from "@/components/site/Pagination";

export const metadata: Metadata = {
  title: "Reading",
  description:
    "Books, essays and sources on pointfree topology — Johnstone's Stone Spaces, Picado and Pultr's Frames and Locales, and Banaschewski's pointfree reals.",
};

export default function ReadingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Where to go next"
        title="A short"
        accent="shelf"
        seed={17}
        lede="Everything on this site is a summary of someone else's work. These are the places to read it properly."
      />
      <ReadingShelf />
      <Pagination href="/reading" />
    </>
  );
}
