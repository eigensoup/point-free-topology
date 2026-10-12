import Link from "next/link";
import { cn } from "@/lib/cn";

const tones = {
  iris: "bg-iris text-ink-deep hover:bg-iris-soft",
  pine: "bg-pine text-white hover:bg-pine-deep",
  ink: "bg-ink text-mint-wash hover:bg-ink-deep",
  ghost: "bg-transparent text-current border border-current/30 hover:border-current/70",
  ghostLight: "bg-transparent text-mint-wash border border-white/30 hover:border-white/80",
} as const;

export function ActionLink({
  href,
  tone = "iris",
  external,
  className,
  children,
}: {
  href: string;
  tone?: keyof typeof tones;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = cn(
    "group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 ease-soft hover:-translate-y-0.5",
    tones[tone],
    className,
  );

  const inner = (
    <>
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 ease-soft group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

/** An inline text link with a soft underline that fills in on hover. */
export function TextLink({
  href,
  external,
  className,
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = cn(
    "font-medium text-pine decoration-pine/35 underline underline-offset-4 transition hover:decoration-pine",
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
