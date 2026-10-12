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

> **Note:** `next.config.ts` wires Tailwind v4 through the Turbopack loader
> (`@tailwindcss/turbopack`). There is no `postcss.config`. If you edit that file,
> keep the `turbopack.rules` block — without it the site builds successfully but
> ships with no Tailwind CSS at all.

## Routes

The site is an ordered walk, defined once in `src/data/nav.ts`:

| Route | |
|---|---|
| `/` | Hero, the core idea, a Banaschewski feature, and an index of the rest |
| `/ideas` | The six definitions you need to read the literature |
| `/people` | The lineage — everyone, with links to those who have a page |
| `/people/[slug]` | A full profile. Statically generated per person |
| `/conferences` | Gatherings, with a live countdown to the next |
| `/conferences/[slug]` | Full conference detail. Statically generated per conference |
| `/reading` | Books, essays and sources |

`/banaschewski` and `/lineage` permanently redirect to their new homes.

Every page ends with prev/next pagination derived from the same `nav.ts` array,
so adding a stop updates the header, the footer, the home index and the
pagination at once.

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
│   ├── layout.tsx            fonts, metadata, header/footer, grain overlay
│   ├── globals.css           the whole design system: tokens, base, keyframes
│   ├── page.tsx              home — composes sections only
│   ├── ideas/ · reading/     one section + pagination each
│   └── people/
│       ├── page.tsx          the lineage index
│       └── [slug]/page.tsx   generic profile, built from data
├── components/
│   ├── ui/                   Container · Section · Heading · Prose · Card
│   │                         Pill · Eyebrow · ActionLink · TextLink · Quote · RichText
│   ├── decor/                Squiggle · Blob · Grain · Scatter · Mobile · LatticeMark
│   ├── figures/              Monogram · AdjunctionDrawing
│   ├── sections/             Hero · Opening · FeaturedFigure · IdeaGrid
│   │                         PeopleIndex · ReadingShelf · TourIndex
│   └── site/                 Header · Footer · PageHeader · Pagination
├── data/                     people.ts · ideas.ts · nav.ts — all copy lives here
└── lib/cn.ts                 class-name join
```

### Adding a mathematician

Append an entry to `people` in `src/data/people.ts`. That alone puts them on
`/people`. Give the entry a `profile` object and `/people/<slug>` builds itself —
no new page file, no layout work, and the prev/next pagination picks them up.

Prose fields in `profile` accept `*emphasis*` markers, rendered by `<RichText>`,
so editorial copy stays in data rather than in JSX.

### Adding a conference

Append an entry to `conferences` in `src/data/conferences.ts` and
`/conferences/<slug>` builds itself. The landing-page banner shows whichever
conference starts latest, via `featuredConference()`.

### Dropping in the real photographs

Every image on the conference page is a `<PhotoFrame>` stand-in that names the
file it is holding a place for. To replace one:

1. Put the file in `public/conferences/`
2. Swap the `<PhotoFrame …/>` for `next/image`, reusing the frame's `label` as
   the `alt` text

Currently expected: `banaschewski-portrait.png`, `documentary-still.png`,
`beckman-hall.png`, `keck-center.png`.

### Two Next.js rules this project has to follow

`next.config.ts` sets `cacheComponents: true`, which has two consequences worth
knowing before editing a page:

- **Never read the current time while rendering.** `new Date()` or `Date.now()`
  in a server component fails the production build. All clock reading lives in
  `<Countdown>`, which is a client component.
- **Reading `params` needs a Suspense boundary.** Both dynamic routes split into
  a thin default export that renders `<Suspense>` around an inner `async`
  component which awaits `params`. Without it the route throws *"Next.js
  encountered URL data during prerendering"* at runtime, while still building
  successfully.

### Design notes

- **No monospace.** Mathematical glyphs use the `.glyph` class — the display
  serif's italic — so the page reads as a printed essay rather than a terminal.
- **`Card` tilts** by a fraction of a degree and straightens on hover, so grids
  read as pinned paper.
- **`Blob`, `Scatter`, `Squiggle` and `Grain`** are the hand-made layer. All are
  `aria-hidden` and all animation is disabled under `prefers-reduced-motion`.
- **`Monogram`** stands in for a portrait. We set initials with care rather than
  invent a likeness we don't have the rights to.

### Mobile

Verified at 320 / 375 / 390 / 414 / 768px on both orientations of the layout:

- no horizontal scroll at any width
- every nav and pagination target is at least 44px tall
- smallest rendered text is 12px (the uppercase eyebrows); body copy is 17px
- the header collapses to a labelled menu with blurbs, which closes on
  navigation and traps `Escape`

## Content accuracy

Biographical claims are drawn from
[McMaster's memorial page](https://math.mcmaster.ca/bernhard-banaschewski-1926-2022/),
the Mathematics Genealogy Project, and publisher records. Where sources disagree
(his doctorate is given as both 1953 and 1954) the site says "early 1950s" rather
than pick one. There are no invented quotations anywhere on the site.

## Deployment

Vercel, on the `pointfreetopology.com` domain. Vercel detects Next.js
automatically, so no build configuration is required. Set the production branch
to `main`.

### Local pnpm is 12; Vercel's is 10. That is fine — leave it alone.

Vercel does **not** read the `packageManager` field unless Corepack is enabled,
and Corepack is off by default. It picks the pnpm version from
`pnpm-lock.yaml`'s `lockfileVersion` instead. Ours is `9.0`, which Vercel builds
with pnpm 10.

That combination is verified: a clean clone installed with
`pnpm@10 install --frozen-lockfile` and built successfully, emitting the full
40KB stylesheet.

**Do not set `ENABLE_EXPERIMENTAL_COREPACK=1`.** It would make Vercel honour the
`pnpm@12.11.2` pin, and [Vercel's supported pnpm versions](https://vercel.com/docs/package-managers)
are 6 through 10 — 12 is not among them. The pin exists for local development,
where it is the version actually in use.

If you ever need Vercel on the same pnpm as local, the supported route is to
lower the pin and regenerate the lockfile, not to enable Corepack.
