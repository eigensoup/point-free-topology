import { cn } from "@/lib/cn";

/** Ω ⊣ pt, drawn with curved arrows so it reads as a sketch on a napkin
 *  rather than a commutative diagram compiled from a package. */
export function AdjunctionDrawing({ className }: { className?: string }) {
  return (
    <figure className={cn("w-full", className)}>
      <svg
        viewBox="0 0 380 190"
        className="w-full"
        role="img"
        aria-label="An adjunction between Top, the category of topological spaces, and Loc, the category of locales. The functor Omega sends a space to its frame of open sets. The functor pt sends a locale to its space of points. Omega is left adjoint to pt, and the adjunction restricts to an equivalence between sober spaces and spatial locales."
      >
        <defs>
          <marker id="pf-arrow-pine" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto">
            <path d="M0.5,0.5 L7.5,4 L0.5,7.5 Z" className="fill-pine" />
          </marker>
          <marker id="pf-arrow-iris" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto">
            <path d="M0.5,0.5 L7.5,4 L0.5,7.5 Z" className="fill-iris-deep" />
          </marker>
        </defs>

        <circle cx="54" cy="82" r="40" className="fill-mint" />
        <circle cx="326" cy="82" r="40" className="fill-iris-wash" />

        <text x="54" y="90" textAnchor="middle" fontSize="27" fontStyle="italic"
          className="fill-ink font-display font-semibold">
          Top
        </text>
        <text x="326" y="90" textAnchor="middle" fontSize="27" fontStyle="italic"
          className="fill-ink font-display font-semibold">
          Loc
        </text>

        <path d="M99 58 C 150 26, 232 26, 283 56" fill="none" strokeWidth="2"
          strokeLinecap="round" className="stroke-pine" markerEnd="url(#pf-arrow-pine)" />
        <text x="191" y="27" textAnchor="middle" fontSize="19" fontStyle="italic"
          className="fill-pine font-display font-semibold">
          Ω
        </text>

        <path d="M283 108 C 232 140, 150 140, 101 110" fill="none" strokeWidth="2"
          strokeLinecap="round" className="stroke-iris-deep" markerEnd="url(#pf-arrow-iris)" />
        <text x="191" y="157" textAnchor="middle" fontSize="19" fontStyle="italic"
          className="fill-iris-deep font-display font-semibold">
          pt
        </text>

        <text x="191" y="90" textAnchor="middle" fontSize="20" fontStyle="italic"
          className="fill-ink-soft font-display">
          Ω ⊣ pt
        </text>
      </svg>
    </figure>
  );
}
