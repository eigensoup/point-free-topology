import { ActionLink, Card, Heading, Pill, Prose, Section } from "@/components/ui";
import { Blob, Squiggle } from "@/components/decor";
import { Monogram } from "@/components/figures/Monogram";

const contributions = [
  {
    title: "Compactification, classified",
    body: "With Christopher Mulvey he built the Stone–Čech compactification of a locale — no points, no choice. And he proved the structural fact underneath it: compactifications of a frame correspond order-isomorphically to the strong inclusions on it.",
  },
  {
    title: "The pointfree real line",
    body: "A whole book on what the real numbers look like when you refuse to build them out of points, and on the rings of continuous real functions that live over them.",
  },
  {
    title: "Proofs that travel",
    body: "Decades spent tracing exactly which theorems need the axiom of choice and which only appeared to. A proof without choice is a proof that holds in any topos, not just in sets.",
  },
];

export function FeaturedFigure() {
  return (
    <Section
      tone="mint"
      padding="roomy"
      bleed={
        <>
          <Blob tone="iris" shape={0} drift className="-right-28 top-10 h-[24rem] w-[24rem]" />
          <Blob tone="pine" shape={2} className="-left-24 bottom-10 h-80 w-80" />
        </>
      }
    >
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none">
          <Monogram
            initials="BB"
            caption="Bernhard Banaschewski, McKay Professor Emeritus, McMaster University"
          />
        </div>

        <div>
          <Heading as="h2" size="hero" className="text-ink-deep">
            Bernhard
            <br />
            <span className="italic text-pine">Banaschewski</span>
          </Heading>

          <div className="mt-5 flex flex-wrap items-center gap-5">
            <Squiggle tone="iris" variant={2} className="h-4 w-40 shrink-0" />
            <Pill tone="pine">1926 — 2022</Pill>
          </div>

          <Prose size="lead" className="mt-9 text-ink">
            <p>
              Born in Munich in 1926. Doctorate at Hamburg under Ernst Witt. In
              1955 he joined the mathematics department at McMaster University in
              Hamilton, Ontario — and never left, chairing it twice, holding the
              McKay Professorship from 1964, and continuing to publish for three
              decades after his retirement in 1991.
            </p>
            <p>
              Over two hundred papers, across topology, order theory, category
              theory, algebra and logic. More than anyone else, he is the reason
              pointfree topology is a <em>complete</em> theory rather than a
              promising reformulation: he went through classical topology result by
              result and found what each one becomes when the points are gone.
            </p>
          </Prose>

          <div className="mt-10">
            <ActionLink href="/legends/banaschewski" tone="pine">
              The full profile
            </ActionLink>
          </div>
        </div>
      </div>

      {/* Three contributions, given the full width of the section rather than
          the right-hand column — wide and short instead of narrow and tall. */}
      <div className="mt-16 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
        {contributions.map((c, i) => (
          <Card
            key={c.title}
            tone="paper"
            tilt={i === 1 ? "left" : "right"}
            className="flex flex-col items-center justify-center px-7 py-7 text-center sm:px-8"
          >
            <h3 className="font-display text-xl font-semibold leading-snug text-ink-deep">
              {c.title}
            </h3>
            <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-ink-soft">
              {c.body}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
