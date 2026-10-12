"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navStops } from "@/data/nav";
import { LatticeMark } from "@/components/decor";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the menu whenever the route changes. Adjusting during render is the
  // documented pattern for deriving state from a prop — an effect here would
  // paint the open menu for a frame on the new page first.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Never leave the page unscrollable.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/8 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 sm:py-4">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5 py-2 text-ink-deep transition hover:text-pine"
        >
          <LatticeMark className="h-7 w-7 transition-transform duration-500 ease-soft group-hover:rotate-180" />
          <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
            Pointfree<span className="italic text-pine">Topology</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navStops.map((stop) => {
            const active = isActive(pathname, stop.href);
            return (
              <Link
                key={stop.href}
                href={stop.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-1 text-sm font-medium transition after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:rounded-full after:bg-iris after:transition-all after:duration-300",
                  active
                    ? "text-ink-deep after:w-full"
                    : "text-ink-soft after:w-0 hover:text-ink-deep hover:after:w-full",
                )}
              >
                {stop.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink-deep transition active:bg-mint md:hidden"
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={cn(
                "absolute left-0 block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-soft",
                open ? "top-[7px] rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[7px] block h-[2px] w-5 rounded-full bg-current transition-opacity duration-200",
                open ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-soft",
                open ? "top-[7px] -rotate-45" : "top-[14px]",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-ink/8 bg-paper md:hidden"
      >
        <nav aria-label="Primary mobile" className="px-5 py-3">
          {navStops.map((stop) => {
            const active = isActive(pathname, stop.href);
            return (
              <Link
                key={stop.href}
                href={stop.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-14 flex-col justify-center gap-0.5 rounded-pebble border-b border-ink/8 px-3 transition last:border-b-0 active:bg-mint-wash",
                  active && "bg-mint-wash",
                )}
              >
                <span
                  className={cn(
                    "font-display text-lg font-semibold",
                    active ? "text-pine" : "text-ink-deep",
                  )}
                >
                  {stop.label}
                </span>
                <span className="text-xs leading-snug text-ink-mute">{stop.blurb}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
