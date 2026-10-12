import { cn } from "@/lib/cn";

const ratios = {
  portrait: "aspect-4/5",
  landscape: "aspect-3/2",
  wide: "aspect-16/9",
  square: "aspect-square",
} as const;

const tones = {
  ink: "bg-ink text-mint-wash/70 border-white/10",
  mint: "bg-mint text-pine-deep border-pine/20",
  iris: "bg-iris-wash text-iris-deep border-iris/25",
} as const;

/**
 * A stand-in for a photograph we do not have yet.
 *
 * To replace one: drop the file in /public/conferences/, then swap this element
 * for next/image with the same `alt` text —
 *   <Image src="/conferences/beckman-hall.png" alt={...} width={...} height={...} />
 * The `file` prop names the image this frame is holding a place for.
 */
export function PhotoFrame({
  label,
  file,
  ratio = "landscape",
  tone = "mint",
  className,
}: {
  /** Describes the intended photograph. Becomes the alt text when swapped. */
  label: string;
  /** Expected filename, shown quietly so the gap is self-documenting. */
  file?: string;
  ratio?: keyof typeof ratios;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <figure className={cn("w-full", className)}>
      <div
        className={cn(
          "relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-petal border border-dashed p-6 text-center",
          ratios[ratio],
          tones[tone],
        )}
      >
        <svg
          viewBox="0 0 48 40"
          className="h-10 w-10 opacity-45"
          aria-hidden="true"
          focusable="false"
        >
          <rect
            x="1.5"
            y="1.5"
            width="45"
            height="37"
            rx="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="15" cy="14" r="4.5" fill="currentColor" />
          <path
            d="M5 33l11-12 8 8 6-5 13 9z"
            fill="currentColor"
            opacity="0.75"
          />
        </svg>
        <figcaption className="max-w-[22ch] text-sm font-medium leading-snug">
          {label}
        </figcaption>
        {file ? (
          <span className="text-[0.7rem] uppercase tracking-[0.14em] opacity-55">
            {file}
          </span>
        ) : null}
      </div>
    </figure>
  );
}
