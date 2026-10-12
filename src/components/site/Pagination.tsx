import Link from "next/link";
import { neighbours } from "@/data/nav";
import { Container } from "@/components/ui";
import { cn } from "@/lib/cn";

export type Step = { href: string; label: string; blurb: string };

function StepCard({
  step,
  direction,
}: {
  step: Step;
  direction: "prev" | "next";
}) {
  const isNext = direction === "next";
  return (
    <Link
      href={step.href}
      rel={isNext ? "next" : "prev"}
      className={cn(
        "group flex min-h-32 flex-col justify-center gap-2 rounded-petal border border-ink/10 bg-paper p-6 transition duration-300 ease-soft hover:-translate-y-1 hover:border-iris/50 hover:shadow-lift active:translate-y-0 active:bg-iris-wash sm:p-7",
        isNext ? "sm:items-end sm:text-right" : "items-start text-left",
      )}
    >
      <span className="flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-pine">
        {!isNext && (
          <span aria-hidden="true" className="transition-transform duration-300 ease-soft group-hover:-translate-x-1">
            ←
          </span>
        )}
        {isNext ? "Next" : "Previous"}
        {isNext && (
          <span aria-hidden="true" className="transition-transform duration-300 ease-soft group-hover:translate-x-1">
            →
          </span>
        )}
      </span>
      <span className="font-display text-xl font-semibold leading-snug text-ink-deep sm:text-2xl">
        {step.label}
      </span>
      <span className="text-sm leading-relaxed text-ink-soft">{step.blurb}</span>
    </Link>
  );
}

/** Prev/next footer. Pass explicit steps, or a tour `href` to derive them. */
export function Pagination({
  href,
  prev,
  next,
}: {
  href?: string;
  prev?: Step | null;
  next?: Step | null;
}) {
  const derived = href ? neighbours(href) : { prev: null, next: null };
  const back = prev !== undefined ? prev : derived.prev;
  const forward = next !== undefined ? next : derived.next;
  if (!back && !forward) return null;

  return (
    <nav
      aria-label="Pagination"
      className="border-t border-ink/8 bg-mint-wash py-14 sm:py-16"
    >
      <Container>
        <div className="grid gap-4 sm:grid-cols-2">
          {back ? (
            <StepCard step={back} direction="prev" />
          ) : (
            <div className="hidden sm:block" />
          )}
          {forward ? <StepCard step={forward} direction="next" /> : null}
        </div>
      </Container>
    </nav>
  );
}
