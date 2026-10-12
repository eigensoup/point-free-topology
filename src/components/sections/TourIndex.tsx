import Link from "next/link";
import { Eyebrow, Heading, Section } from "@/components/ui";
import { Blob } from "@/components/decor";
import { navStops } from "@/data/nav";

/** Keeps the heading honest as stops are added to the tour. */
const counts = ["No", "One", "Two", "Three", "Four", "Five", "Six", "Seven"];

/** The home page's index of where to go next — one card per tour stop. */
export function TourIndex() {
  const n = navStops.length;
  const heading =
    n === 1 ? "One room left" : `${counts[n] ?? n} rooms left`;

  return (
    <Section
      tone="paper"
      padding="normal"
      bleed={<Blob tone="iris" shape={1} className="-left-24 top-1/4 h-80 w-80" />}
    >
      <div className="max-w-2xl">
        <Eyebrow tone="iris">Keep going</Eyebrow>
        <Heading as="h2" size="lg" underline underlineTone="pine" className="mt-6 text-ink-deep">
          {heading}
        </Heading>
      </div>

      <div className="mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {navStops.map((stop, i) => (
          <Link
            key={stop.href}
            href={stop.href}
            className="group flex min-h-44 flex-col rounded-petal border border-ink/10 bg-paper p-7 shadow-lift transition duration-300 ease-soft hover:-translate-y-1.5 hover:border-iris/50 hover:shadow-float active:translate-y-0 active:bg-iris-wash"
          >
            <span className="font-display text-sm font-semibold italic text-pine">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-ink-deep">
              {stop.label}
            </h3>
            <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
              {stop.blurb}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-pine">
              Open
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-soft group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
