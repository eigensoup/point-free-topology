import { cn } from "@/lib/cn";
import { Container, type ContainerWidth } from "./Container";

/** Background moods. Keeping them named means a page reads as a sequence of
 *  colours rather than a pile of hex values. */
const tones = {
  paper: "bg-paper text-ink-deep",
  mint: "bg-mint-wash text-ink-deep",
  mintSolid: "bg-mint text-ink-deep",
  iris: "bg-iris-wash text-ink-deep",
  ink: "bg-ink text-mint-wash",
} as const;

const paddings = {
  snug: "py-16 sm:py-20",
  normal: "py-20 sm:py-28",
  roomy: "py-24 sm:py-36",
} as const;

export function Section({
  tone = "paper",
  padding = "normal",
  width = "full",
  id,
  className,
  bleed,
  children,
}: {
  tone?: keyof typeof tones;
  padding?: keyof typeof paddings;
  width?: ContainerWidth;
  id?: string;
  className?: string;
  /** Decorative layers that should sit behind the content, edge to edge. */
  bleed?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden", tones[tone], paddings[padding], className)}
    >
      {bleed ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {bleed}
        </div>
      ) : null}
      <Container width={width} className="relative">
        {children}
      </Container>
    </section>
  );
}
