import { cn } from "@/lib/cn";
import { Squiggle } from "@/components/decor/Squiggle";

const sizes = {
  hero: "text-[clamp(2.75rem,8vw,5.25rem)] leading-[0.95]",
  xl: "text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.04]",
  lg: "text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.1]",
  md: "text-2xl sm:text-3xl leading-snug",
  sm: "text-xl leading-snug",
} as const;

export function Heading({
  as: Tag = "h2",
  size = "xl",
  underline,
  underlineTone = "iris",
  className,
  children,
}: {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: keyof typeof sizes;
  /** Draws a hand-sketched line beneath the heading. */
  underline?: boolean;
  underlineTone?: "iris" | "pine" | "mint";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "font-display font-semibold tracking-[-0.02em] text-balance",
        sizes[size],
        className,
      )}
    >
      {children}
      {underline ? (
        <Squiggle tone={underlineTone} className="mt-3 h-3 w-40 max-w-full" />
      ) : null}
    </Tag>
  );
}

/** A soft, readable measure for body copy. */
export function Prose({
  size = "base",
  className,
  children,
}: {
  size?: "base" | "lead";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "[&_p+p]:mt-5 [&_em]:not-italic [&_em]:font-display [&_em]:italic",
        size === "lead"
          ? "text-lg leading-[1.75] sm:text-xl"
          : "text-[1.0625rem] leading-[1.75]",
        className,
      )}
    >
      {children}
    </div>
  );
}
