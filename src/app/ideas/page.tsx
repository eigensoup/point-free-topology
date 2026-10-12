import type { Metadata } from "next";
import { IdeaGrid } from "@/components/sections";
import { PageHeader } from "@/components/site/PageHeader";
import { Pagination } from "@/components/site/Pagination";

export const metadata: Metadata = {
  title: "The ideas",
  description:
    "Frames, locales, sublocales, the Ω ⊣ pt adjunction, compactification and choice-free proof — the six definitions you need to read the pointfree literature.",
};

export default function IdeasPage() {
  return (
    <>
      <PageHeader
        eyebrow="A small vocabulary"
        title="Six words, and you"
        accent="can read the literature"
        seed={5}
        lede="Pointfree topology has a reputation for being forbidding. It is mostly a matter of six definitions, each of which is shorter than the classical thing it replaces."
      />
      <IdeaGrid />
      <Pagination href="/ideas" />
    </>
  );
}
