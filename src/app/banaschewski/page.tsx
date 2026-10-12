import type { Metadata } from "next";
import {
  ActionLink,
  Card,
  Container,
  Eyebrow,
  Heading,
  Pill,
  Prose,
  Quote,
  Section,
  TextLink,
} from "@/components/ui";
import { Blob, Scatter, Squiggle } from "@/components/decor";
import { Monogram } from "@/components/figures/Monogram";
import { selectedWorks, timeline } from "@/data/people";

export const metadata: Metadata = {
  title: "Bernhard Banaschewski",
  description:
    "Bernhard Banaschewski (1926–2022), McKay Professor Emeritus at McMaster University, and the mathematician who made pointfree topology a complete theory.",
};

export default function BanaschewskiPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-mint-wash">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Blob tone="iris" shape={1} drift className="-left-20 top-0 h-96 w-96" />
          <Blob tone="pine" shape={0} className="-right-24 bottom-0 h-96 w-96" />
          <div className="absolute inset-0 opacity-45">
            <Scatter count={28} seed={23} tone="bg-iris-soft" />
          </div>
        </div>

        <Container className="relative py-20 sm:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div className="mx-auto w-full max-w-[17rem] lg:mx-0 lg:max-w-none">
              <Monogram initials="BB" />
            </div>

            <div>
              <Eyebrow tone="mint">A life in one department</Eyebrow>
              <Heading as="h1" size="hero" className="mt-7 text-mint-wash">
                Bernhard
                <br />
                <span className="italic text-iris">Banaschewski</span>
              </Heading>
              <Squiggle tone="mint" variant={0} className="mt-6 h-4 w-60 max-w-full" />

              <div className="mt-8 flex flex-wrap gap-3">
                <Pill tone="ink">22 March 1926 — 31 October 2022</Pill>
                <Pill tone="ink">McKay Professor Emeritus, McMaster</Pill>
                <Pill tone="ink">200+ papers</Pill>
              </div>

              <p className="mt-9 max-w-2xl text-lg leading-[1.75] text-mint-wash/80">
                He arrived in Hamilton, Ontario in 1955 and stayed for sixty-seven
                years. In that time he took pointfree topology from a handful of
                suggestive definitions to a theory that could stand beside the
                classical one — and in places replace it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="paper" padding="roomy" width="wide">
        <Eyebrow tone="pine">The work</Eyebrow>
        <Heading as="h2" size="lg" className="mt-6 text-ink-deep">
          What he actually did
        </Heading>

        <Prose size="lead" className="mt-9 text-ink-soft">
          <p>
            Banaschewski took his doctorate at the University of Hamburg under
            Ernst Witt, in a tradition of algebra that shows everywhere in his
            later work. He never treated topology as a subject about points that
            happened to admit a lattice-theoretic description. He treated the
            lattice as the subject.
          </p>
          <p>
            The programme he pursued for half a century was deceptively simple:
            take a theorem of classical topology, ask what it says about opens
            alone, and find out whether the pointfree version is true, false, or —
            most interestingly — <em>truer</em>. Over and over the answer was the
            third one. The pointfree statement would turn out to hold under weaker
            hypotheses, or without the axiom of choice, or over an arbitrary topos
            rather than only over sets.
          </p>
          <p>
            His 1957 paper <em>Spaces of dimension zero</em> gave the construction
            now called the Banaschewski compactification: the zero-dimensional
            counterpart of Stone–Čech, realised as the Stone space of the Boolean
            algebra of clopen sets. Two decades later, with Christopher Mulvey, he
            built the Stone–Čech compactification of a locale outright, in two
            papers of 1980 and 1984 that remain the foundation of the area. And he
            proved the result that turned compactification from a construction into
            a classification: the compactifications of a frame correspond, order
            isomorphically, to the strong inclusions on it.
          </p>
          <p>
            Alongside that ran the long project on the pointfree reals and on rings
            of continuous real functions — what does <em>C(L)</em> mean when{" "}
            <em>L</em> has no points? — and the globalisation of Gelfand duality
            with Mulvey, which lifted a theorem about commutative C*-algebras over
            sets into a theorem that holds over any topos.
          </p>
        </Prose>

        <Quote className="mt-16 text-ink">
          The points were never the subject. They were a convenient way of talking
          about the opens, and once you notice that, you can put them down.
        </Quote>
      </Section>

      <Section
        tone="mint"
        padding="roomy"
        width="wide"
        bleed={<Blob tone="iris" shape={2} className="-left-24 top-24 h-80 w-80" />}
      >
        <Eyebrow tone="pine">A life</Eyebrow>
        <Heading as="h2" size="lg" underline underlineTone="iris" className="mt-6 text-ink-deep">
          Ninety-six years, one department
        </Heading>

        <ol className="mt-14 space-y-0">
          {timeline.map((m) => (
            <li
              key={m.year + m.what}
              className="grid gap-x-8 gap-y-2 border-t border-pine/15 py-6 sm:grid-cols-[9rem_1fr]"
            >
              <span className="font-display text-lg font-semibold italic text-pine">
                {m.year}
              </span>
              <p className="leading-[1.75] text-ink">{m.what}</p>
            </li>
          ))}
        </ol>
        <div className="border-t border-pine/15" />
      </Section>

      <Section
        tone="paper"
        padding="roomy"
        width="wide"
        bleed={<Blob tone="mint" shape={1} className="-right-24 top-20 h-96 w-96" />}
      >
        <Eyebrow tone="iris">Selected works</Eyebrow>
        <Heading as="h2" size="lg" className="mt-6 text-ink-deep">
          Six of more than two hundred
        </Heading>
        <p className="mt-6 max-w-2xl leading-[1.75] text-ink-soft">
          A full bibliography runs to several hundred entries. These are the ones a
          newcomer to pointfree topology is most likely to meet first.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {selectedWorks.map((w, i) => (
            <Card
              key={w.title}
              tone={i % 3 === 1 ? "mint" : i % 3 === 2 ? "iris" : "paper"}
              tilt={i % 2 === 0 ? "left" : "right"}
            >
              <span className="font-display text-sm font-semibold italic text-pine">
                {w.year}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-ink-deep">
                {w.href ? (
                  <TextLink href={w.href} external className="text-ink-deep decoration-iris/50 hover:decoration-iris">
                    {w.title}
                  </TextLink>
                ) : (
                  w.title
                )}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{w.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="iris" padding="normal" width="prose" className="text-center">
        <Heading as="h2" size="lg" className="text-ink-deep">
          He kept publishing for thirty years after he retired
        </Heading>
        <p className="mx-auto mt-7 max-w-xl leading-[1.75] text-ink-soft">
          Mathematics departments measure careers in appointments and chairs.
          Banaschewski&rsquo;s is better measured by the fact that the papers never
          stopped — and that the people who work on frames and locales today are,
          nearly all of them, working on questions he opened.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ActionLink href="/#lineage" tone="pine">
            The rest of the lineage
          </ActionLink>
          <ActionLink
            href="https://math.mcmaster.ca/bernhard-banaschewski-1926-2022/"
            tone="ghost"
            external
          >
            McMaster&rsquo;s memorial page
          </ActionLink>
        </div>
      </Section>
    </>
  );
}
