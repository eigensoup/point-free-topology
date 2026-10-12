import type { Metadata } from "next";
import { ActionLink, Eyebrow, Heading, Prose, Section, TextLink } from "@/components/ui";
import { Blob } from "@/components/decor";
import { PageHeader } from "@/components/site/PageHeader";
import { Pagination } from "@/components/site/Pagination";
import { SupportPanel } from "@/components/contribute/SupportPanel";
import { TrackCards } from "@/components/contribute/TrackCards";
import { contactEmail } from "@/data/contribute";

export const metadata: Metadata = {
  title: "Get involved",
  description:
    "Send in originals, typeset a paper, edit a draft, or support the project — helping put the work of Bernhard Banaschewski and the other legends back into print.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Lend a hand"
        title="Get"
        accent="involved"
        seed={37}
        lede="A great deal of this mathematics exists only as offprints, seminar notes and photocopies in other people's filing cabinets. The aim is to find it, typeset it properly, and put it back where people can read it."
      />

      <Section tone="paper" padding="normal">
        <SupportPanel />
      </Section>

      <Section
        tone="mint"
        padding="normal"
        bleed={<Blob tone="iris" shape={2} className="-left-24 top-16 h-80 w-80" />}
      >
        <div className="max-w-2xl">
          <Eyebrow tone="pine">Three ways in</Eyebrow>
          <Heading as="h2" size="lg" underline underlineTone="iris" className="mt-6 text-ink-deep">
            However much time you have
          </Heading>
          <p className="mt-7 leading-[1.75] text-ink-soft">
            None of these require you to be a specialist in frames and locales.
            One of them does not even require you to read mathematics.
          </p>
        </div>

        <div className="mt-12">
          <TrackCards />
        </div>
      </Section>

      <Section tone="paper" padding="normal" width="prose" className="text-center">
        <Eyebrow tone="iris" className="justify-center">
          Where it all goes
        </Eyebrow>
        <Heading as="h2" size="lg" className="mt-6 text-ink-deep">
          One inbox
        </Heading>
        <p className="mx-auto mt-6 max-w-xl leading-[1.75] text-ink-soft">
          Originals, typeset drafts, corrections and offers of help all go to the
          same place. A subject line saying which of the three you are writing
          about is enough to keep it sorted.
        </p>
        <div className="mt-8 flex justify-center">
          <ActionLink href={`mailto:${contactEmail}`} tone="pine" external>
            {contactEmail}
          </ActionLink>
        </div>
      </Section>

      <Section
        tone="iris"
        padding="normal"
        width="prose"
        bleed={<Blob tone="mint" shape={0} className="-right-24 top-10 h-80 w-80" />}
      >
        <Eyebrow tone="pine">The long game</Eyebrow>
        <Heading as="h2" size="lg" className="mt-6 text-ink-deep">
          Eventually, all of the legends
        </Heading>
        <Prose size="lead" className="mt-8 text-ink-soft">
          <p>
            The work starts with Bernhard Banaschewski, because his centenary is
            the occasion and because so much of his output is scattered across
            journals that are hard to reach. But he is not the only one.
          </p>
          <p>
            Stone, Ehresmann, Dowker and Papert, Isbell — the same problem applies
            to all of them, in varying degrees. The intention is to work through
            the lineage, one person at a time, until the foundational papers of
            pointfree topology are all somewhere a student can simply{" "}
            <em>read them</em>.
          </p>
        </Prose>
        <div className="mt-9">
          <TextLink href="/legends">See who is on the list →</TextLink>
        </div>
      </Section>

      <Pagination href="/get-involved" />
    </>
  );
}
