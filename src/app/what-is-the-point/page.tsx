import type { Metadata } from "next";
import Image from "next/image";
import { ActionLink, Container, Eyebrow, Heading, Pill, Prose, Section, TextLink } from "@/components/ui";
import { Blob, Scatter, Squiggle } from "@/components/decor";
import { Photo } from "@/components/figures/Photo";
import { FilmPlayer } from "@/components/film/FilmPlayer";
import { Pagination } from "@/components/site/Pagination";
import { chapters, film, filmRuntime, filmStills, formatRuntime, voices } from "@/data/film";

export const metadata: Metadata = {
  title: film.title,
  description: `${film.title} — a film about the life and influence of ${film.subject}, by ${film.maker}, watched as one continuous movie in ${chapters.length} chapters.`,
};

export default function FilmPage() {
  const minutes = Math.round(filmRuntime / 60);
  const runtime = `${Math.floor(minutes / 60)} h ${minutes % 60} min`;

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-mint-wash">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image
            src={filmStills.portrait.src}
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover opacity-55 grayscale"
            style={{ objectPosition: filmStills.portrait.focus }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/85 to-ink/10" />
          <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-transparent" />
          <Blob tone="iris" shape={1} drift className="-left-24 -top-10 h-80 w-80" />
          <div className="absolute inset-0 opacity-35">
            <Scatter count={18} seed={29} tone="bg-iris-soft" />
          </div>
        </div>

        <Container className="relative py-20 sm:py-28 lg:py-36">
          <Eyebrow tone="mint">A film about {film.subject}</Eyebrow>
          <Heading as="h1" size="hero" className="mt-6 max-w-3xl text-mint-wash">
            What Is
            <br />
            <span className="italic text-iris">the Point?</span>
          </Heading>
          <Squiggle tone="mint" variant={0} className="mt-6 h-3.5 w-48 max-w-full" />
          <p className="mt-7 max-w-xl text-base leading-[1.75] text-mint-wash/80 sm:text-lg">
            Banaschewski in his own words, and in the words of the people he
            worked with — from Hamburg to Hamilton, Prague, Berlin and Cape Town.
            Seventeen chapters, run together as one continuous movie.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            <Pill tone="ink">{chapters.length} chapters</Pill>
            <Pill tone="ink">{runtime}</Pill>
            <Pill tone="ink">{film.series}</Pill>
          </div>
          <div className="mt-10">
            <ActionLink href="#watch" tone="iris">
              Watch from the beginning
            </ActionLink>
          </div>
        </Container>
      </section>

      <section id="watch" className="relative bg-ink-deep py-16 text-mint-wash sm:py-20">
        <Container>
          <FilmPlayer chapters={chapters} poster={filmStills.portrait.src} />
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-mint-wash/55">
            Subtitles are part of the picture. The chapters play one into the next;
            pick any of them to jump in, or link to one directly with{" "}
            <span className="font-mono text-mint-wash/75">#chapter-</span>
            <span className="italic">n</span>. Total running time{" "}
            {formatRuntime(filmRuntime)}.
          </p>
        </Container>
      </section>

      {voices.length ? (
        <Section tone="paper" padding="normal" width="wide">
          <Eyebrow tone="pine">In the film</Eyebrow>
          <Heading as="h2" size="lg" className="mt-6 text-ink-deep">
            The people who tell it
          </Heading>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {voices.map((v) => (
              <li
                key={v.name}
                className="rounded-pebble border border-ink/10 bg-paper p-5 shadow-lift"
              >
                <p className="font-display text-xl font-semibold text-ink-deep">{v.name}</p>
                <p className="mt-1 text-sm text-ink-soft">{v.affiliation}</p>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section tone="iris" padding="normal" width="wide">
        <Eyebrow tone="iris">From the film</Eyebrow>
        <Heading as="h2" size="lg" className="mt-6 text-ink-deep">
          Stills
        </Heading>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Photo
            photo={filmStills.blackboard}
            ratio="wide"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
          <div className="grid gap-6">
            <Photo
              photo={filmStills.doorway}
              ratio="wide"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <Photo
              photo={filmStills.capeTown}
              ratio="wide"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </Section>

      <Section tone="mint" padding="normal" width="prose">
        <Eyebrow tone="pine">Credits</Eyebrow>
        <Heading as="h2" size="lg" className="mt-6 text-ink-deep">
          A film by {film.maker}
        </Heading>
        <Prose className="mt-8 text-ink-soft">
          <p>
            <em>{film.title}</em> was made for {film.series} at {film.institution}{" "}
            — {film.seriesNote.toLowerCase()}. It premieres on the opening night of
            the{" "}
            <TextLink href="/conferences/banaschewski100">Banaschewski 100</TextLink>{" "}
            centennial conference in January 2027.
          </p>
          <p>
            Finishing and screening the film is one of the things support for this
            project pays for. If you would like to help,{" "}
            <TextLink href="/get-involved">here is how</TextLink>.
          </p>
        </Prose>
      </Section>

      <Pagination href="/what-is-the-point" />
    </>
  );
}
