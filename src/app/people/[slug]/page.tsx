import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import {
  ActionLink,
  Card,
  Container,
  Eyebrow,
  Heading,
  Pill,
  Prose,
  Quote,
  RichText,
  Section,
  TextLink,
} from "@/components/ui";
import { Blob, Scatter, Squiggle } from "@/components/decor";
import { Monogram } from "@/components/figures/Monogram";
import { Pagination } from "@/components/site/Pagination";
import { PageSkeleton } from "@/components/site/PageSkeleton";
import { getPerson, personNeighbours, profiledPeople } from "@/data/people";

/** Every profiled person becomes a static page at build time. */

export function generateStaticParams() {
  return profiledPeople.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/people/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person?.profile) return {};
  return {
    title: person.name,
    description: `${person.name} (${person.years}) — ${person.note}`,
  };
}

/**
 * `cacheComponents` treats `params` as dynamic data, so reading it has to sit
 * under a Suspense boundary. The shell prerenders; the profile streams in.
 */
export default function PersonPage({ params }: PageProps<"/people/[slug]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <PersonProfile params={params} />
    </Suspense>
  );
}

async function PersonProfile({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person?.profile) notFound();

  const p = person.profile;
  const { prev, next } = personNeighbours(slug);

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-mint-wash">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Blob tone="iris" shape={1} drift className="-left-20 top-0 h-80 w-80" />
          <Blob tone="pine" shape={0} className="-right-24 bottom-0 h-80 w-80" />
          <div className="absolute inset-0 opacity-45">
            <Scatter count={26} seed={23} tone="bg-iris-soft" />
          </div>
        </div>

        <Container className="relative py-14 sm:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div className="mx-auto w-full max-w-[13rem] sm:max-w-[15rem] lg:mx-0 lg:max-w-none">
              <Monogram initials={p.initials} />
            </div>

            <div>
              <Eyebrow tone="mint">A life in one department</Eyebrow>
              <Heading as="h1" size="hero" className="mt-5 text-mint-wash">
                {person.name.split(" ").slice(0, -1).join(" ")}
                <br />
                <span className="italic text-iris">
                  {person.name.split(" ").slice(-1)}
                </span>
              </Heading>
              <Squiggle tone="mint" variant={0} className="mt-5 h-3.5 w-52 max-w-full" />

              <div className="mt-7 flex flex-wrap gap-2.5">
                <Pill tone="ink">{p.dates}</Pill>
                {p.credentials.map((c) => (
                  <Pill key={c} tone="ink">
                    {c}
                  </Pill>
                ))}
              </div>

              <p className="mt-7 max-w-2xl text-base leading-[1.75] text-mint-wash/80 sm:text-lg">
                {p.lede}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="paper" padding="normal" width="wide">
        <Eyebrow tone="pine">The work</Eyebrow>
        <Heading as="h2" size="lg" className="mt-6 text-ink-deep">
          {p.workHeading}
        </Heading>

        <Prose size="lead" className="mt-8 text-ink-soft">
          {p.work.map((para, i) => (
            <p key={i}>
              <RichText>{para}</RichText>
            </p>
          ))}
        </Prose>

        <Quote className="mt-14 text-ink">{p.pullQuote}</Quote>
      </Section>

      <Section
        tone="mint"
        padding="normal"
        width="wide"
        bleed={<Blob tone="iris" shape={2} className="-left-24 top-24 h-72 w-72" />}
      >
        <Eyebrow tone="pine">A life</Eyebrow>
        <Heading as="h2" size="lg" underline underlineTone="iris" className="mt-6 text-ink-deep">
          {p.timelineHeading}
        </Heading>

        <ol className="mt-12">
          {p.timeline.map((m) => (
            <li
              key={m.year + m.what}
              className="grid gap-x-8 gap-y-1 border-t border-pine/15 py-5 sm:grid-cols-[9rem_1fr] sm:py-6"
            >
              <span className="font-display text-lg font-semibold italic text-pine">
                {m.year}
              </span>
              <p className="leading-[1.75] text-ink">{m.what}</p>
            </li>
          ))}
        </ol>
        <div className="border-t border-pine/15" />
      </Section>

      <Section
        tone="paper"
        padding="normal"
        width="wide"
        bleed={<Blob tone="mint" shape={1} className="-right-24 top-20 h-96 w-96" />}
      >
        <Eyebrow tone="iris">Selected works</Eyebrow>
        <Heading as="h2" size="lg" className="mt-6 text-ink-deep">
          {p.worksHeading}
        </Heading>
        <p className="mt-6 max-w-2xl leading-[1.75] text-ink-soft">{p.worksIntro}</p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {p.works.map((w, i) => (
            <Card
              key={w.title}
              tone={i % 3 === 1 ? "mint" : i % 3 === 2 ? "iris" : "paper"}
              tilt={i % 2 === 0 ? "left" : "right"}
            >
              <span className="font-display text-sm font-semibold italic text-pine">
                {w.year}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-ink-deep">
                {w.href ? (
                  <TextLink
                    href={w.href}
                    external
                    className="inline-block py-1.5 text-ink-deep decoration-iris/50 hover:decoration-iris"
                  >
                    {w.title}
                  </TextLink>
                ) : (
                  w.title
                )}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{w.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="iris" padding="normal" width="prose" className="text-center">
        <Heading as="h2" size="lg" className="text-ink-deep">
          {p.closing.heading}
        </Heading>
        <p className="mx-auto mt-6 max-w-xl leading-[1.75] text-ink-soft">
          {p.closing.body}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          <ActionLink href="/people" tone="pine">
            All of the lineage
          </ActionLink>
          <ActionLink href={p.closing.linkHref} tone="ghost" external>
            {p.closing.linkLabel}
          </ActionLink>
        </div>
      </Section>

      <Pagination
        prev={
          prev
            ? { href: `/people/${prev.slug}`, label: prev.short, blurb: prev.note }
            : { href: "/people", label: "The people", blurb: "Back to the full lineage." }
        }
        next={
          next
            ? { href: `/people/${next.slug}`, label: next.short, blurb: next.note }
            : { href: "/reading", label: "Reading", blurb: "The books, essays and sources to go to next." }
        }
      />
    </>
  );
}
