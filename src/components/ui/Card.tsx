import { cn } from "@/lib/cn";

const tones = {
  paper: "bg-paper border-ink/10",
  mint: "bg-mint border-pine/15",
  iris: "bg-iris-wash border-iris/25",
  ink: "bg-ink text-mint-wash border-white/10",
  outline: "bg-transparent border-ink/15",
} as const;

/** A gentle tilt, so a grid of cards reads as pinned paper rather than a table. */
const tilts = {
  none: "",
  left: "-rotate-[0.8deg]",
  right: "rotate-[0.8deg]",
} as const;

export function Card({
  tone = "paper",
  tilt = "none",
  hover = true,
  className,
  children,
}: {
  tone?: keyof typeof tones;
  tilt?: keyof typeof tilts;
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative rounded-petal border p-7 shadow-lift transition duration-500 ease-soft sm:p-8",
        tones[tone],
        tilts[tilt],
        hover && "hover:-translate-y-1.5 hover:rotate-0 hover:shadow-float",
        className,
      )}
    >
      {children}
    </div>
  );
}
