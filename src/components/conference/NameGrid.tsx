import { cn } from "@/lib/cn";
import type { Named } from "@/data/conferences";

/** A list of people with affiliations — used for speakers and participants. */
export function NameGrid({
  people,
  highlight,
  columns = 2,
  className,
}: {
  people: Named[];
  /** Names to mark — e.g. speakers within the participant list. */
  highlight?: string[];
  columns?: 2 | 3;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid gap-x-8 gap-y-5 sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        className,
      )}
    >
      {people.map((p) => {
        const marked = highlight?.includes(p.name);
        return (
          <li key={p.name} className="border-l-2 border-pine/25 pl-4">
            <p
              className={cn(
                "font-display text-lg font-semibold leading-snug",
                marked ? "text-pine" : "text-ink-deep",
              )}
            >
              {p.name}
              {marked ? (
                <span className="ml-2 align-middle text-[0.65rem] uppercase tracking-[0.14em] text-pine/70">
                  speaking
                </span>
              ) : null}
            </p>
            <p className="mt-0.5 text-sm leading-snug text-ink-soft">{p.affiliation}</p>
          </li>
        );
      })}
    </ul>
  );
}
