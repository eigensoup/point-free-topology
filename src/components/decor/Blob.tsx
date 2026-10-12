import { cn } from "@/lib/cn";

const tones = {
  iris: "bg-iris/25",
  mint: "bg-mint-deep/40",
  pine: "bg-pine/15",
  light: "bg-white/10",
} as const;

/** Organic background shapes. Irregular radii keep them from reading as circles. */
const shapes = [
  "60% 40% 55% 45% / 45% 55% 45% 55%",
  "45% 55% 38% 62% / 58% 42% 58% 42%",
  "52% 48% 62% 38% / 40% 60% 40% 60%",
];

export function Blob({
  tone = "iris",
  shape = 0,
  drift,
  className,
}: {
  tone?: keyof typeof tones;
  shape?: 0 | 1 | 2;
  /** Slow float. Respects prefers-reduced-motion via the global rule. */
  drift?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("absolute blur-2xl", tones[tone], className)}
      style={{
        borderRadius: shapes[shape],
        animation: drift ? "pf-drift 14s ease-in-out infinite" : undefined,
      }}
    />
  );
}
