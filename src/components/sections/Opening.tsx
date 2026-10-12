import { Card, Eyebrow, Heading, Prose, Section } from "@/components/ui";
import { Blob } from "@/components/decor";
import { AdjunctionDrawing } from "@/components/figures/AdjunctionDrawing";

export function Opening() {
  return (
    <Section
      tone="paper"
      padding="roomy"
      bleed={
        <>
          <Blob tone="mint" shape={2} className="-left-32 top-16 h-80 w-80" />
          <Blob tone="iris" shape={1} className="-right-24 bottom-8 h-72 w-72" />
        </>
      }
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
        <div>
          <Eyebrow tone="pine">The move</Eyebrow>
          <Heading as="h2" size="xl" className="mt-6 text-ink-deep">
            The opens were doing all the work anyway
          </Heading>

          <Prose className="mt-8 text-ink-soft">
            <p>
              A topological space is a set of points together with a chosen family
              of open subsets. Almost every theorem in topology is a statement
              about those opens — how they intersect, how they cover, how they
              separate. The points sit underneath, quietly, mostly unused.
            </p>
            <p>
              So take them away. What is left is a complete lattice in which finite
              meets distribute over arbitrary joins. That object is called a{" "}
              <em>frame</em>, and when you want to think of it geometrically rather
              than algebraically you call it a <em>locale</em>.
            </p>
            <p>
              The surprise is not that this works. The surprise is that the
              pointfree category behaves <em>better</em>. Sublocales form a complete
              lattice where subspaces did not. Products do not misbehave.
              Tychonoff&rsquo;s theorem stops needing the axiom of choice. Results
              that were delicate become structural.
            </p>
          </Prose>
        </div>

        <div className="lg:pt-16">
          <Card tone="mint" tilt="right" className="p-8 sm:p-10">
            <AdjunctionDrawing />
            <p className="mt-6 text-sm leading-relaxed text-pine-deep">
              Every space has a frame of opens. Every locale has a space of points.
              The two constructions are adjoint, and the adjunction becomes an
              equivalence exactly on the <em className="font-display italic">sober</em>{" "}
              spaces and the <em className="font-display italic">spatial</em> locales.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-pine-deep/80">
              The locales left outside are not pathologies. They are the whole
              point — locales with almost no points, which nonetheless behave
              impeccably.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}
