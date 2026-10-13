import type { Metadata } from "next";
import { FeaturedLegend, LegendsIndex } from "@/components/sections";
import { PageHeader } from "@/components/site/PageHeader";
import { Pagination } from "@/components/site/Pagination";

export const metadata: Metadata = {
  title: "The people",
  description:
    "The mathematicians who built pointfree topology — Stone, Ehresmann, Dowker and Papert, Isbell, Banaschewski, Mulvey, Johnstone, Pultr and Picado.",
};

export default function PeoplePage() {
  return (
    <>
      <PageHeader
        eyebrow="The lineage"
        title="Nobody does"
        accent="this alone"
        seed={11}
        lede="Pointfree topology was assembled slowly, by a small and unusually generous community, across seventy years and several continents. Names in green have a page of their own."
      />
      <FeaturedLegend slug="banaschewski" />
      <LegendsIndex />
      <Pagination href="/legends" />
    </>
  );
}
