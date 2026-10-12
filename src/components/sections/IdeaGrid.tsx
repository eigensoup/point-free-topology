import { Card, Eyebrow, Heading, Section } from "@/components/ui";
import { Blob } from "@/components/decor";
import { ideas } from "@/data/ideas";

const tilts = ["left", "right", "none", "right", "none", "left"] as const;
const tones = ["paper", "mint", "iris", "mint", "iris", "paper"] as const;

export function IdeaGrid() {
  return (
    <Section
      id="ideas"
      tone="paper"
      padding="roomy"
      bleed={<Blob tone="mint" shape={1} className="-left-28 top-1/3 h-96 w-96" />}
    >
      <div className="max-w-2xl">
        <Eyebrow tone="iris">A small vocabulary</Eyebrow>
        <Heading as="h2" size="xl" underline underlineTone="pine" className="mt-6 text-ink-deep">
          Six words, and you can read the literature
        </Heading>
        <p className="mt-7 text-lg leading-[1.75] text-ink-soft">
          Pointfree topology has a reputation for being forbidding. It is mostly a
          matter of six definitions, each of which is shorter than the classical
          thing it replaces.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ideas.map((idea, i) => (
          <Card key={idea.slug} tone={tones[i]} tilt={tilts[i]} className="flex flex-col">
            <span className="glyph text-3xl text-pine" aria-hidden="true">
              {idea.glyph}
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-ink-deep">
              {idea.term}
            </h3>
            <p className="mt-3 text-sm font-medium italic leading-relaxed text-pine-deep">
              {idea.short}
            </p>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-soft">
              {idea.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
