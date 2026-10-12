import { cn } from "@/lib/cn";

export function Quote({
  attribution,
  className,
  children,
}: {
  attribution?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className={cn("relative", className)}>
      <span
        aria-hidden="true"
        className="absolute -left-2 -top-10 font-display text-8xl leading-none text-iris/40 select-none"
      >
        &ldquo;
      </span>
      <blockquote className="relative font-display text-xl italic leading-[1.6] text-balance sm:text-2xl">
        {children}
      </blockquote>
      {attribution ? (
        <figcaption className="mt-5 text-sm tracking-wide text-ink-mute">
          — {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
