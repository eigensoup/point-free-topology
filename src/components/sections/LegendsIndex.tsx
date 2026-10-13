import Link from "next/link";
import { Pill, Section } from "@/components/ui";
import { Blob } from "@/components/decor";
import { legends, type Legend } from "@/data/legends";
import { cn } from "@/lib/cn";

/** The lineage. Entries with a profile become links to /legends/<slug>;
 *  the rest render as plain cards until someone writes them a page. */
export function LegendsIndex({ people = legends }: { people?: Legend[] }) {
  return (
    <Section
      tone="paper"
      padding="normal"
      bleed={<Blob tone="iris" shape={2} className="-right-28 top-1/4 h-96 w-96" />}
    >
      <ol className="grid gap-5 sm:gap-6 lg:grid-cols-2">
        {people.map((person) => {
          const linked = Boolean(person.profile);
          const body = (
            <>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <h2
                  className={cn(
                    "font-display text-xl font-semibold leading-tight sm:text-2xl",
                    linked ? "text-pine" : "text-ink-deep",
                  )}
                >
                  {person.name}
                </h2>
                {linked ? <Pill tone="pine">Full profile →</Pill> : null}
              </div>
              <p className="mt-2 text-sm text-ink-mute">
                {person.years} · {person.place}
              </p>
              {person.idea ? (
                <p className="mt-3 font-display text-lg font-semibold italic text-pine-deep">
                  {person.idea}
                </p>
              ) : null}
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">
                {person.note}
              </p>
            </>
          );

          return (
            <li key={person.slug}>
              {linked ? (
                <Link
                  href={`/legends/${person.slug}`}
                  className="group flex h-full flex-col rounded-petal border border-pine/25 bg-mint p-6 shadow-lift transition duration-300 ease-soft hover:-translate-y-1 hover:shadow-float active:translate-y-0 sm:p-7"
                >
                  {body}
                </Link>
              ) : (
                <div className="flex h-full flex-col rounded-petal border border-ink/10 bg-paper p-6 shadow-lift sm:p-7">
                  {body}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
