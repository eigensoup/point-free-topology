import { cn } from "@/lib/cn";

const tones = {
  iris: "text-iris",
  pine: "text-pine-soft",
  mint: "text-mint-deep",
  ink: "text-ink/30",
} as const;

/** A wobbly underline. Three variants so repeated use never looks stamped. */
const paths = [
  "M2 12C28 4 54 18 80 10s52-8 78 1 52 2 78-5",
  "M2 9C30 17 56 3 82 11s50 9 76 1 54-10 78-3",
  "M2 13C26 6 50 15 76 9s54 5 80-2 52 6 78 2",
];

export function Squiggle({
  tone = "iris",
  variant = 0,
  className,
}: {
  tone?: keyof typeof tones;
  variant?: 0 | 1 | 2;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 240 20"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={cn("block", tones[tone], className)}
    >
      <path
        d={paths[variant]}
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
