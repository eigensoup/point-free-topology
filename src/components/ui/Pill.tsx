import { cn } from "@/lib/cn";

const tones = {
  iris: "bg-iris-wash text-iris-deep border-iris/30",
  pine: "bg-mint text-pine-deep border-pine/25",
  ink: "bg-white/10 text-mint-wash border-white/20",
  bare: "bg-transparent text-ink-soft border-ink/15",
} as const;

export function Pill({
  tone = "iris",
  className,
  children,
}: {
  tone?: keyof typeof tones;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-sm font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
