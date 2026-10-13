import type { Metadata } from "next";
import { LegendsIndex } from "@/components/sections";
import { Eyebrow, Heading, Prose, Section, TextLink } from "@/components/ui";
import { PageHeader } from "@/components/site/PageHeader";
import { Pagination } from "@/components/site/Pagination";
import { otherLegends } from "@/data/legends";

export const metadata: Metadata = {
  title: "Other legends and related ideas",
  description:
    "The neighbouring subjects pointfree topology talks to — Melvin Henriksen and rings of continuous functions, Jorge Martínez and algebraic frames.",
};

export default function OtherLegendsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Next door"
        title="Other legends"
        accent="and related ideas"
        seed={17}
        lede="Pointfree topology never worked in isolation. Its questions were sharpened by people working next door — on rings of functions, on ordered algebra — whose ideas it borrowed, answered and rebuilt without points."
      />
      <LegendsIndex people={otherLegends} />

      <Section tone="mint" padding="normal" width="prose">
        <Eyebrow tone="pine">More to come</Eyebrow>
        <Heading as="h2" size="lg" className="mt-6 text-ink-deep">
          This list is only a start
        </Heading>
        <Prose className="mt-8 text-ink-soft">
          <p>
            Many more people and ideas sit on the border of the subject — quantales
            and noncommutative topology, uniform and metric frames, formal topology
            and constructive mathematics, domain theory and the logic of
            observable properties, topos theory, lattice-ordered rings. Each has
            its own legends, and each would deserve a page here.
          </p>
          <p>
            If there is someone you think belongs on this page, or an idea you would
            like to see written up, <TextLink href="/get-involved">get in touch</TextLink>.
          </p>
        </Prose>
      </Section>

      <Pagination href="/other-legends" />
    </>
  );
}
