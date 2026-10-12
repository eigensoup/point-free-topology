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

/**
 * One nav at every width: a burger that opens a labelled dropdown. The site has
 * more destinations than fit comfortably in a row, and a single control means
 * there is only one nav to maintain rather than a desktop and a mobile one.
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close on navigation. Adjusting during render rather than in an effect
  // avoids painting the open menu for a frame on the new page.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/8 bg-paper/90 backdrop-blur-md">
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex items-center justify-between gap-4 py-3.5 sm:py-4">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2.5 py-2 text-ink-deep transition hover:text-pine"
          >
            <LatticeMark className="h-7 w-7 transition-transform duration-500 ease-soft group-hover:rotate-180" />
            <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
              Pointfree<span className="italic text-pine">Topology</span>
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-nav"
            className={cn(
              "-mr-1 flex h-11 items-center gap-2.5 rounded-full px-3 text-ink-deep transition sm:px-4",
              open ? "bg-mint" : "hover:bg-mint-wash active:bg-mint",
            )}
          >
            <span className="hidden text-sm font-semibold tracking-wide sm:inline">
              {open ? "Close" : "Menu"}
            </span>
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
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>

        {open ? (
          <div
            id="site-nav"
            className="absolute left-5 right-5 top-full z-50 origin-top overflow-hidden rounded-petal border border-ink/10 bg-paper shadow-float sm:left-auto sm:right-8 sm:w-[26rem]"
          >
            <nav aria-label="Primary" className="max-h-[70vh] overflow-y-auto p-2.5">
              {navStops.map((stop) => {
                const active = isActive(pathname, stop.href);
                return (
                  <Link
                    key={stop.href}
                    href={stop.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-14 flex-col justify-center gap-0.5 rounded-pebble px-4 py-3 transition",
                      active ? "bg-mint" : "hover:bg-mint-wash active:bg-mint",
                    )}
                  >
                    <span
                      className={cn(
                        "font-display text-lg font-semibold leading-snug",
                        active ? "text-pine" : "text-ink-deep",
                      )}
                    >
                      {stop.label}
                    </span>
                    <span className="text-xs leading-snug text-ink-mute">
                      {stop.blurb}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        ) : null}
      </div>

      {open ? (
        <button
          type="button"
          aria-hidden="true"
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className="fixed inset-0 top-[var(--header-h,4rem)] -z-10 cursor-default"
        >
          <span className="sr-only">Close menu</span>
        </button>
      ) : null}
    </header>
  );
}
