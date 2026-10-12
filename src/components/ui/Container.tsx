import { cn } from "@/lib/cn";

const widths = {
  narrow: "max-w-2xl",
  prose: "max-w-3xl",
  wide: "max-w-5xl",
  full: "max-w-6xl",
} as const;

export type ContainerWidth = keyof typeof widths;

export function Container({
  width = "full",
  className,
  children,
}: {
  width?: ContainerWidth;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full px-6 sm:px-8", widths[width], className)}>
      {children}
    </div>
  );
}
