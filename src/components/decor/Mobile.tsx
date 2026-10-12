import { cn } from "@/lib/cn";

/** The free frame on three generators, drawn as a hanging mobile: top element
 *  1 at the crown, bottom element 0 at the base, joins and meets in between.
 *  It is a real Hasse diagram, hung the way a Calder is hung. */
const nodes = [
  { x: 150, y: 24, r: 11, fill: "fill-iris", label: "1" },
  { x: 54, y: 104, r: 8, fill: "fill-pine-soft" },
  { x: 150, y: 96, r: 8, fill: "fill-iris-soft" },
  { x: 246, y: 108, r: 8, fill: "fill-mint-deep" },
  { x: 60, y: 192, r: 7, fill: "fill-mint-deep" },
  { x: 152, y: 200, r: 7, fill: "fill-pine-soft" },
  { x: 244, y: 188, r: 7, fill: "fill-iris-soft" },
  { x: 150, y: 272, r: 11, fill: "fill-pine", label: "0" },
];

const edges: [number, number][] = [
  [0, 1], [0, 2], [0, 3],
  [1, 4], [1, 5], [2, 4], [2, 6], [3, 5], [3, 6],
  [4, 7], [5, 7], [6, 7],
];

export function Mobile({
  className,
  sway = true,
}: {
  className?: string;
  sway?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 300 296"
      aria-hidden="true"
      focusable="false"
      className={cn("overflow-visible", className)}
      style={{
        animation: sway ? "pf-sway 9s ease-in-out infinite" : undefined,
        transformOrigin: "150px 24px",
      }}
    >
      <g className="stroke-current" strokeWidth="1.25" opacity="0.45" fill="none">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            strokeLinecap="round"
          />
        ))}
      </g>
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r} className={n.fill} />
          {n.label ? (
            <text
              x={n.x}
              y={n.y + 4.5}
              textAnchor="middle"
              fontSize="11"
              fontStyle="italic"
              className="fill-ink-deep font-display font-semibold"
            >
              {n.label}
            </text>
          ) : null}
        </g>
      ))}
    </svg>
  );
}

/** The site mark: a four-element lattice, small enough to sit beside a wordmark. */
export function LatticeMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={cn("overflow-visible", className)}
    >
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6">
        <line x1="12" y1="4" x2="5" y2="12" />
        <line x1="12" y1="4" x2="19" y2="12" />
        <line x1="5" y1="12" x2="12" y2="20" />
        <line x1="19" y1="12" x2="12" y2="20" />
      </g>
      <circle cx="12" cy="4" r="2.6" className="fill-iris" />
      <circle cx="5" cy="12" r="2.1" className="fill-mint-deep" />
      <circle cx="19" cy="12" r="2.1" className="fill-pine-soft" />
      <circle cx="12" cy="20" r="2.6" className="fill-pine" />
    </svg>
  );
}
