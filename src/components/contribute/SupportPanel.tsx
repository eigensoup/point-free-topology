import { cn } from "@/lib/cn";
import { RichText } from "@/components/ui";
import { coffeeUrl, contactEmail, support } from "@/data/contribute";

function CoffeeCup({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <path
        d="M9 17h26v13a11 11 0 0 1-11 11h-4A11 11 0 0 1 9 30V17Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M35 21h3.5a5.5 5.5 0 0 1 0 11H35"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity="0.75">
        <path d="M17 5c-1.6 2.2-1.6 4.1 0 6.3" />
        <path d="M24 4c-1.9 2.6-1.9 4.9 0 7.5" />
        <path d="M31 5c-1.6 2.2-1.6 4.1 0 6.3" />
      </g>
    </svg>
  );
}

/**
 * The support ask. Renders a working button when `coffeeUrl` is set in
 * src/data/contribute.ts, and an honest "being set up" state when it is not —
 * we would rather show no link than a guessed one.
 */
export function SupportPanel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-petal border border-iris/30 bg-iris-wash p-8 sm:p-10",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-iris/25 blur-2xl"
      />

      <div className="relative grid gap-9 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
        <div>
          <div className="flex items-start gap-5 sm:gap-6">
            <CoffeeCup className="h-14 w-14 shrink-0 text-iris-deep sm:h-16 sm:w-16" />
            <h2 className="font-display text-2xl font-semibold leading-tight text-ink-deep sm:text-3xl">
              {support.heading}
            </h2>
          </div>

          <div className="mt-6 space-y-4 leading-[1.7] text-ink-soft">
            {support.body.map((para, i) => (
              <p key={i}>
                <RichText>{para}</RichText>
              </p>
            ))}
          </div>

          <div className="mt-8">
            {coffeeUrl ? (
              <a
                href={coffeeUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-iris px-7 py-3.5 text-sm font-semibold text-ink-deep transition duration-300 ease-soft hover:-translate-y-0.5 hover:bg-iris-soft"
              >
                {support.cta}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-soft group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            ) : (
              <div className="flex flex-col gap-3">
                <p className="inline-flex w-fit items-center gap-2.5 rounded-full border border-dashed border-iris-deep/40 px-6 py-3 text-sm font-semibold text-iris-deep">
                  Coffee link being set up
                </p>
                <p className="text-sm leading-relaxed text-ink-mute">
                  Until it is live, email{" "}
                  <a
                    href={`mailto:${contactEmail}?subject=Supporting%20the%20typesetting%20project`}
                    className="font-medium text-pine underline decoration-pine/35 underline-offset-4 hover:decoration-pine"
                  >
                    {contactEmail}
                  </a>{" "}
                  and we will point you at it.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="rounded-pebble border border-iris/25 bg-paper/70 p-6">
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-pine">
            Where it goes
          </h3>
          <ul className="mt-4 space-y-3.5">
            {support.funds.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-iris" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
