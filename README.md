# pointfreetopology.com

A small gallery site for pointfree topology — frames, locales, and the people who
built them. The first figure featured is **Bernhard Banaschewski (1926–2022)**.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19 |
| Styling | Tailwind CSS v4 (CSS-first `@theme` config in `src/app/globals.css`) |
| Language | TypeScript |
| Package manager | pnpm 12 (pinned via `packageManager` in `package.json`) |
| Hosting | Vercel |

## Running locally

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

Other scripts: `pnpm build`, `pnpm start`, `pnpm lint`.

## Colour palette

Defined once as theme tokens in `src/app/globals.css`, then used everywhere as
Tailwind utilities (`bg-ink`, `text-pine`, `border-iris/30`, …).

| Token | Hex | Role |
|---|---|---|
| `ink` | `#544E61` | Deep plum. Dark sections, body text. |
| `iris` | `#9D8DF1` | Primary accent. Headlines, buttons, blobs. |
| `paper` | `#FFFDFB` | Warm white page base. |
| `mint` | `#DAF0EE` | Soft surfaces and cards. |
| `pine` | `#23967F` | Secondary accent. Links, eyebrows, the bottom of lattices. |

Each has `-deep`, `-soft` and `-wash` variants for hover states and tints.

## Architecture

Components are small, prop-driven and composable. Nothing reaches for a colour
or a size directly — it picks a named variant.

```
src/
├── app/
│   ├── layout.tsx          fonts, metadata, header/footer, grain overlay
│   ├── globals.css         the whole design system: tokens, base, keyframes
│   ├── page.tsx            home — composes sections only
│   └── banaschewski/       the featured profile
├── components/
│   ├── ui/                 Container · Section · Heading · Prose · Card
│   │                       Pill · Eyebrow · ActionLink · TextLink · Quote
│   ├── decor/              Squiggle · Blob · Grain · Scatter · Mobile · LatticeMark
│   ├── figures/            Monogram · AdjunctionDrawing
│   ├── sections/           Hero · Opening · FeaturedFigure · IdeaGrid · Lineage · Reading
│   └── site/               Header · Footer
├── data/                   people.ts · ideas.ts — all copy lives here, not in JSX
└── lib/cn.ts               class-name join
```

**Adding another mathematician** means appending to `src/data/people.ts` and, if
they deserve their own page, copying `src/app/banaschewski/page.tsx` as a
template. The section components take their content from `data/`, so no layout
work is needed for a new entry in the lineage.

### Design notes

- **No monospace.** Mathematical glyphs are set in the display serif's italic via
  the `glyph` utility, so the page reads as a printed essay rather than a terminal.
- **`Card` tilts** by a fraction of a degree and straightens on hover, so grids
  read as pinned paper.
- **`Blob`, `Scatter`, `Squiggle` and `Grain`** are the hand-made layer. All are
  `aria-hidden` and all animation is disabled under `prefers-reduced-motion`.
- **`Monogram`** stands in for a portrait. We set initials with care rather than
  invent a likeness we don't have the rights to.

## Content accuracy

Biographical claims are drawn from
[McMaster's memorial page](https://math.mcmaster.ca/bernhard-banaschewski-1926-2022/),
the Mathematics Genealogy Project, and publisher records. Where sources disagree
(his doctorate is given as both 1953 and 1954) the site says "early 1950s" rather
than pick one. There are no invented quotations anywhere on the site.

## Deployment

Vercel, on the `pointfreetopology.com` domain. Vercel detects Next.js
automatically and honours the `packageManager` field, so no build configuration
is required. Set the production branch to `main`.
