import { cn } from "@/lib/cn";

const tones = {
  pine: "text-pine",
  iris: "text-iris-deep",
  mint: "text-mint-deep",
  soft: "text-ink-mute",
} as const;

export function Eyebrow({
  tone = "pine",
  className,
  children,
}: {
  tone?: keyof typeof tones;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em]",
        tones[tone],
        className,
      )}
    >
      <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </p>
  );
}
