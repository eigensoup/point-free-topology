import { cn } from "@/lib/cn";
import { coffeeUrl, contactEmail } from "@/data/contribute";

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
        className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-iris/25 blur-2xl"
      />

      <div className="relative flex flex-col items-start gap-7 sm:flex-row sm:items-center sm:gap-9">
        <CoffeeCup className="h-16 w-16 shrink-0 text-iris-deep sm:h-20 sm:w-20" />

        <div className="flex-1">
          <h2 className="font-display text-2xl font-semibold leading-tight text-ink-deep sm:text-3xl">
            Buy the project a coffee
          </h2>
          <p className="mt-3 max-w-xl leading-[1.7] text-ink-soft">
            Scanning, typesetting and hosting cost time and a little money. If
            you would rather give a few pounds than a few hours, this is the way
            to do it — and it is just as useful.
          </p>

          <div className="mt-6">
            {coffeeUrl ? (
              <a
                href={coffeeUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-iris px-7 py-3.5 text-sm font-semibold text-ink-deep transition duration-300 ease-soft hover:-translate-y-0.5 hover:bg-iris-soft"
              >
                Buy me a coffee
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
      </div>
    </div>
  );
}
