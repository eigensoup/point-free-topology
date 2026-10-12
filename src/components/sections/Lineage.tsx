import { Eyebrow, Heading, Section } from "@/components/ui";
import { Scatter } from "@/components/decor";
import { lineage } from "@/data/people";

export function Lineage() {
  return (
    <Section
      id="lineage"
      tone="ink"
      padding="roomy"
      bleed={
        <div className="absolute inset-0 opacity-45">
          <Scatter count={30} seed={11} tone="bg-iris-soft" />
        </div>
      }
    >
      <div className="max-w-2xl">
        <Eyebrow tone="mint">The lineage</Eyebrow>
        <Heading as="h2" size="xl" className="mt-6 text-mint-wash">
          Nobody does this alone
        </Heading>
        <p className="mt-7 text-lg leading-[1.75] text-mint-wash/70">
          Pointfree topology was assembled slowly, by a small and unusually
          generous community, across seventy years and several continents.
        </p>
      </div>

      <ol className="mt-16 space-y-0">
        {lineage.map((figure) => {
          const featured = figure.name === "Bernhard Banaschewski";
          return (
            <li
              key={figure.name}
              className="group grid gap-x-8 gap-y-3 border-t border-white/12 py-8 transition-colors duration-300 hover:bg-white/[0.04] sm:grid-cols-[13rem_1fr] sm:px-4"
            >
              <div>
                <h3
                  className={
                    featured
                      ? "font-display text-xl font-semibold italic text-iris"
                      : "font-display text-xl font-semibold text-mint-wash"
                  }
                >
                  {figure.name}
                </h3>
                <p className="mt-1 text-sm text-mint-wash/45">{figure.years}</p>
                <p className="text-sm text-mint-wash/45">{figure.place}</p>
              </div>
              <p className="max-w-2xl leading-[1.75] text-mint-wash/75">{figure.note}</p>
            </li>
          );
        })}
      </ol>
      <div className="border-t border-white/12" />
    </Section>
  );
}
