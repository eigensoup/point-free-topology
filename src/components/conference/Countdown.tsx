"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type Parts = { days: number; hours: number; minutes: number; seconds: number };
type Phase = "before" | "during" | "after";

function split(ms: number): Parts {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor(s / 3600) % 24,
    minutes: Math.floor(s / 60) % 60,
    seconds: s % 60,
  };
}

function Unit({ value, label, dark }: { value: number; label: string; dark: boolean }) {
  return (
    <div
      className={cn(
        "flex min-w-16 flex-col items-center rounded-pebble border px-3 py-2.5 sm:min-w-20 sm:px-4",
        dark ? "border-white/15 bg-white/8" : "border-pine/25 bg-mint-wash",
      )}
    >
      <span
        className={cn(
          "font-display text-2xl font-semibold tabular-nums sm:text-3xl",
          dark ? "text-mint-wash" : "text-ink-deep",
        )}
      >
        {String(value).padStart(2, "0")}
      </span>
      <span
        className={cn(
          "mt-0.5 text-[0.65rem] uppercase tracking-[0.16em]",
          dark ? "text-mint-wash/60" : "text-pine",
        )}
      >
        {label}
      </span>
    </div>
  );
}

/**
 * Counts down to `target`, and owns its own caption so the label can never
 * contradict the clock.
 *
 * Renders an identical placeholder on the server and on the first client paint,
 * so there is no hydration mismatch. This is also the only place in the app
 * that reads the current time — pages are prerendered with `cacheComponents`,
 * which forbids doing that during render.
 */
export function Countdown({
  target,
  endsAt,
  label = "Opens in",
  dark = true,
  className,
}: {
  target: string;
  endsAt?: string;
  label?: string;
  dark?: boolean;
  className?: string;
}) {
  const [parts, setParts] = useState<Parts | null>(null);
  const [phase, setPhase] = useState<Phase>("before");

  useEffect(() => {
    const start = new Date(target).getTime();
    const end = endsAt ? new Date(endsAt).getTime() : start;

    const tick = () => {
      const now = Date.now();
      if (now < start) {
        setPhase("before");
        setParts(split(start - now));
      } else if (now <= end) {
        setPhase("during");
        setParts(null);
      } else {
        setPhase("after");
        setParts(null);
      }
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target, endsAt]);

  const caption = (
    <p
      className={cn(
        "mb-3 text-[0.7rem] uppercase tracking-[0.2em]",
        dark ? "text-mint-wash/55" : "text-pine",
      )}
    >
      {label}
    </p>
  );

  if (phase === "during") {
    return (
      <div className={className}>
        <p
          className={cn(
            "font-display text-xl italic",
            dark ? "text-iris-soft" : "text-pine",
          )}
        >
          Happening now.
        </p>
      </div>
    );
  }

  if (phase === "after") {
    return (
      <div className={className}>
        <p
          className={cn(
            "font-display text-xl italic",
            dark ? "text-mint-wash/65" : "text-ink-soft",
          )}
        >
          This one has been and gone.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      {caption}
      {parts ? (
        <span className="sr-only">
          {parts.days} days, {parts.hours} hours and {parts.minutes} minutes until it
          begins.
        </span>
      ) : null}
      <div className="flex gap-2.5 sm:gap-3" aria-hidden="true">
        <Unit value={parts?.days ?? 0} label="Days" dark={dark} />
        <Unit value={parts?.hours ?? 0} label="Hrs" dark={dark} />
        <Unit value={parts?.minutes ?? 0} label="Min" dark={dark} />
        <Unit value={parts?.seconds ?? 0} label="Sec" dark={dark} />
      </div>
    </div>
  );
}
