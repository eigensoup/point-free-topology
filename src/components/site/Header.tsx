import Link from "next/link";
import { LatticeMark } from "@/components/decor";

const nav = [
  { href: "/#ideas", label: "The ideas" },
  { href: "/banaschewski", label: "Banaschewski" },
  { href: "/#lineage", label: "The lineage" },
  { href: "/#reading", label: "Reading" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/8 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 text-ink-deep transition hover:text-pine"
        >
          <LatticeMark className="h-7 w-7 transition-transform duration-500 ease-soft group-hover:rotate-180" />
          <span className="font-display text-lg font-semibold tracking-tight">
            Pointfree<span className="italic text-pine">Topology</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-ink-soft transition hover:text-ink-deep after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-iris after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/banaschewski"
          className="rounded-full bg-mint px-4 py-2 text-sm font-semibold text-pine-deep transition hover:bg-mint-deep md:hidden"
        >
          Banaschewski
        </Link>
      </div>
    </header>
  );
}
