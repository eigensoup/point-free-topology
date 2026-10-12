import Link from "next/link";
import { LatticeMark, Scatter } from "@/components/decor";
import { Container } from "@/components/ui";
import { allStops } from "@/data/nav";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-mint-wash">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <Scatter count={26} seed={19} tone="bg-iris-soft" />
      </div>

      <Container className="relative py-14 sm:py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3 py-2">
              <LatticeMark className="h-7 w-7" />
              <span className="font-display text-lg font-semibold">
                Pointfree<span className="italic text-iris-soft">Topology</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-mint-wash/70">
              A small gallery for the people who found that you can take the points
              out of a space and keep almost everything that mattered.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col sm:items-end">
            {allStops.map((stop) => (
              <Link
                key={stop.href}
                href={stop.href}
                className="flex min-h-11 items-center text-[0.95rem] text-mint-wash/75 transition hover:text-iris-soft active:text-iris-soft"
              >
                {stop.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-mint-wash/55 sm:flex-row sm:items-center sm:justify-between">
          <p>pointfreetopology.com — an independent, non-commercial site.</p>
          <p className="glyph text-sm text-iris-soft">a ∧ ⋁ bᵢ = ⋁ (a ∧ bᵢ)</p>
        </div>
      </Container>
    </footer>
  );
}
