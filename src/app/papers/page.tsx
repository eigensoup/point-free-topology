import type { Metadata } from "next";
import { ActionLink, Card, Eyebrow, Heading, Prose, Section, TextLink } from "@/components/ui";
import { Blob } from "@/components/decor";
import { PageHeader } from "@/components/site/PageHeader";
import { Pagination } from "@/components/site/Pagination";
import { Pipeline } from "@/components/contribute/Pipeline";
import { papers, published, inProgress } from "@/data/papers";
import { contactEmail } from "@/data/contribute";

export const metadata: Metadata = {
  title: "Papers",
  description:
    "Papers by Bernhard Banaschewski and the other legends of pointfree topology, retypeset from the originals and published here and on arXiv.",
};

export default function PapersPage() {
  return (
    <>
      <PageHeader
        eyebrow="The typesetting project"
        title="The papers,"
        accent="back in print"
        seed={41}
        lede="Much of the foundational work in pointfree topology sits in journals that are hard to reach, or never made it past an offprint. This is the effort to retypeset it from the originals and publish it where anyone can read it."
      />

      <Section tone="paper" padding="normal" width="wide">
        <Eyebrow tone="pine">How it works</Eyebrow>
        <Heading as="h2" size="lg" className="mt-6 text-ink-deep">
          From a filing cabinet to arXiv
        </Heading>
        <p className="mt-6 max-w-2xl leading-[1.75] text-ink-soft">
          Every paper goes through the same five steps. Each one needs a
          different kind of help, which is why there is more than one way to
          contribute.
        </p>
        <div className="mt-12">
          <Pipeline />
        </div>
      </Section>

      <Section
        tone="mint"
        padding="normal"
        width="wide"
        bleed={<Blob tone="iris" shape={1} className="-right-24 top-16 h-80 w-80" />}
      >
        <Eyebrow tone="pine">The library</Eyebrow>
        <Heading as="h2" size="lg" underline underlineTone="iris" className="mt-6 text-ink-deep">
          {published.length > 0
            ? `${published.length} published so far`
            : "Nothing published yet"}
        </Heading>

        {papers.length === 0 ? (
          <Card tone="paper" className="mt-11 flex flex-col items-center py-14 text-center">
            <span className="glyph text-4xl text-pine" aria-hidden="true">
              ∅
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-ink-deep">
              The shelf is empty
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
              This page will fill up as papers are typeset and checked. Rather
              than pad it out, it says plainly that the work has not started
              arriving yet — and that the fastest way to change this is to send
              something in or take a paper on.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3.5">
              <ActionLink href="/get-involved" tone="pine">
                Help get it started
              </ActionLink>
              <ActionLink
                href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                  "[Originals] Pointfree Topology",
                )}`}
                tone="ghost"
                external
              >
                Send in an original
              </ActionLink>
            </div>
          </Card>
        ) : (
          <div className="mt-11 grid gap-5 sm:gap-6 lg:grid-cols-2">
            {papers.map((paper) => (
              <Card key={paper.title} tone="paper" className="flex flex-col">
                <span className="font-display text-sm font-semibold italic text-pine">
                  {paper.year} · {paper.author}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-ink-deep">
                  {paper.href ? (
                    <TextLink href={paper.href} external className="text-ink-deep">
                      {paper.title}
                    </TextLink>
                  ) : (
                    paper.title
                  )}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                  {paper.note}
                </p>
                {paper.arxiv ? (
                  <div className="mt-4">
                    <TextLink href={paper.arxiv} external>
                      arXiv
                    </TextLink>
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        )}

        {inProgress.length > 0 ? (
          <p className="mt-8 text-sm text-ink-mute">
            {inProgress.length} more in progress.
          </p>
        ) : null}
      </Section>

      <Section tone="paper" padding="normal" width="prose">
        <Eyebrow tone="iris">A note on rights</Eyebrow>
        <Prose className="mt-7 text-ink-soft">
          <p>
            Retypesetting does not create a right to republish. Where a paper is
            still under a publisher&rsquo;s copyright, the typeset version is
            prepared and then held until permission is granted or the rights
            revert — and nothing goes onto arXiv that its licence does not allow.
          </p>
          <p>
            If you hold rights to something here, or believe something has been
            posted that should not be, write to{" "}
            <TextLink href={`mailto:${contactEmail}`} external>
              {contactEmail}
            </TextLink>{" "}
            and it will come down while it is sorted out.
          </p>
        </Prose>
      </Section>

      <Pagination href="/papers" />
    </>
  );
}
