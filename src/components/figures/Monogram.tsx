import { cn } from "@/lib/cn";

/** A typographic plate standing in for a portrait. We would rather set someone's
 *  initials with care than invent a likeness we do not have the rights to. */
export function Monogram({
  initials,
  caption,
  className,
}: {
  initials: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={cn("relative", className)}>
      <div className="relative overflow-hidden rounded-petal bg-ink p-10 shadow-float">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-iris/30 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-pine/35 blur-2xl"
        />
        <div className="relative flex aspect-4/5 items-center justify-center">
          <span className="font-display text-[8rem] font-light italic leading-none tracking-tight text-mint-wash sm:text-[9.5rem]">
            {initials}
          </span>
        </div>
        <div
          aria-hidden="true"
          className="relative mx-auto h-px w-20 bg-mint-wash/30"
        />
      </div>
      {caption ? (
        <figcaption className="mt-4 text-center text-sm italic text-ink-mute">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
