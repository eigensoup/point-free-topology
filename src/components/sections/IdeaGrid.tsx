import { Card, Section } from "@/components/ui";
import { Blob } from "@/components/decor";
import { ideas } from "@/data/ideas";

const tilts = ["left", "right", "none", "right", "none", "left"] as const;
const tones = ["paper", "mint", "iris", "mint", "iris", "paper"] as const;

export function IdeaGrid() {
  return (
    <Section
      tone="paper"
      padding="normal"
      bleed={<Blob tone="mint" shape={1} className="-left-28 top-1/3 h-96 w-96" />}
    >
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {ideas.map((idea, i) => (
          <Card key={idea.slug} tone={tones[i]} tilt={tilts[i]} className="flex flex-col">
            <span className="glyph text-3xl text-pine" aria-hidden="true">
              {idea.glyph}
            </span>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight text-ink-deep">
              {idea.term}
            </h2>
            <p className="mt-3 text-[0.95rem] font-medium italic leading-relaxed text-pine-deep">
              {idea.short}
            </p>
            <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-ink-soft">
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
