import { cn } from "@/lib/cn";

type Dot = { x: number; y: number; size: number; opacity: number };

/** Deterministic pseudo-random points — a quiet constellation hovering around
 *  a subject that, strictly speaking, has none. Rendered as real circles
 *  rather than a stretched SVG, so they stay round at any aspect ratio. */
function dots(count: number, seed: number): Dot[] {
  let s = seed * 9301 + 49297;
  const next = () => {
    s = (s * 1103515245 + 12345) % 2147483648;
    return s / 2147483648;
  };
  return Array.from({ length: count }, () => ({
    x: next() * 100,
    y: next() * 100,
    size: 3 + next() * 5,
    opacity: 0.18 + next() * 0.3,
  }));
}

export function Scatter({
  count = 22,
  seed = 7,
  tone = "bg-iris-soft",
  className,
}: {
  count?: number;
  seed?: number;
  /** A background-colour utility, e.g. "bg-iris-soft". */
  tone?: string;
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={cn("absolute inset-0 overflow-hidden", className)}>
      {dots(count, seed).map((d, i) => (
        <span
          key={i}
          className={cn("absolute rounded-full", tone)}
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            opacity: d.opacity,
          }}
        />
      ))}
    </div>
  );
}
