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
  Section,
  TextLink,
} from "@/components/ui";
import { Blob, Scatter, Squiggle } from "@/components/decor";
import { PhotoFrame } from "@/components/figures/PhotoFrame";
import { Countdown } from "@/components/conference/Countdown";
import { NameGrid } from "@/components/conference/NameGrid";
import { Pagination } from "@/components/site/Pagination";
import { PageSkeleton } from "@/components/site/PageSkeleton";
import { conferences, getConference } from "@/data/conferences";


export function generateStaticParams() {
  return conferences.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/conferences/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const conf = getConference(slug);
  if (!conf) return {};
  return {
    title: conf.name,
    description: `${conf.subtitle} for ${conf.honouree}, ${conf.dateLabel} at ${conf.venue.place}, ${conf.venue.city}.`,
  };
}

/**
 * `cacheComponents` treats `params` as dynamic data, so reading it has to sit
 * under a Suspense boundary. The shell prerenders; the detail streams in.
 */
export default function ConferencePage({ params }: PageProps<"/conferences/[slug]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <ConferenceDetail params={params} />
    </Suspense>
  );
}

async function ConferenceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const conf = getConference(slug);
  if (!conf) notFound();

  const speakerNames = conf.speakers.map((s) => s.name);

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-mint-wash">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Blob tone="iris" shape={1} drift className="-left-24 top-0 h-96 w-96" />
          <Blob tone="pine" shape={0} className="-right-24 bottom-0 h-96 w-96" />
          <div className="absolute inset-0 opacity-45">
            <Scatter count={26} seed={29} tone="bg-iris-soft" />
          </div>
        </div>

        <Container className="relative py-14 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-16">
            <div>
              <Eyebrow tone="mint">{conf.subtitle}</Eyebrow>
              <Heading as="h1" size="hero" className="mt-5 text-mint-wash">
                Banaschewski
                <br />
                <span className="italic text-iris">100</span>
              </Heading>
              <Squiggle tone="mint" variant={1} className="mt-5 h-3.5 w-48 max-w-full" />

              <div className="mt-7 flex flex-wrap gap-2.5">
                <Pill tone="ink">{conf.dateLabel}</Pill>
                <Pill tone="ink">{conf.venue.city}</Pill>
                <Pill tone="ink">{conf.speakers.length} invited speakers</Pill>
              </div>

              <div className="mt-8 max-w-xl space-y-4 text-base leading-[1.75] text-mint-wash/80 sm:text-lg">
                {conf.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-9">
                <Countdown target={conf.startsAt} endsAt={conf.endsAt} dark />
              </div>

              <div className="mt-9 flex flex-wrap gap-3.5">
                <ActionLink href={conf.registration.formUrl} tone="iris" external>
                  Registration form
                </ActionLink>
                <ActionLink href={conf.sourceUrl} tone="ghostLight" external>
                  Official conference site
                </ActionLink>
              </div>
            </div>

            <div className="mx-auto w-full max-w-xs lg:max-w-none">
              <PhotoFrame
                label="Portrait of Bernhard Banaschewski"
                file="banaschewski-portrait.png"
                ratio="portrait"
                tone="ink"
              />
              <p className="mt-4 text-center text-sm italic text-mint-wash/55">
                In memoriam · {conf.honoureeDates}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="paper" padding="normal" width="wide">
        <Eyebrow tone="pine">Opening night</Eyebrow>
        <Heading as="h2" size="lg" className="mt-6 text-ink-deep">
          <em className="font-display italic">{conf.documentary.title}</em>
        </Heading>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
          <Prose className="text-ink-soft">
            <p>
              The independent filmmaker <em>{conf.documentary.maker}</em> has made
              a film about Banaschewski&rsquo;s life and influence. It premieres
              on {conf.documentary.when}.
            </p>
            <p className="text-ink-mute">{conf.documentary.note}</p>
          </Prose>
          <PhotoFrame
            label="Still from the documentary, or a photograph from the reception"
            file="documentary-still.png"
            ratio="wide"
            tone="iris"
          />
        </div>
      </Section>

      <Section
        tone="mint"
        padding="normal"
        width="wide"
        bleed={<Blob tone="iris" shape={2} className="-left-24 top-16 h-80 w-80" />}
      >
        <Eyebrow tone="pine">Invited speakers</Eyebrow>
        <Heading as="h2" size="lg" underline underlineTone="iris" className="mt-6 text-ink-deep">
          Who is talking
        </Heading>
        <NameGrid people={conf.speakers} columns={2} className="mt-11" />
      </Section>

      <Section tone="paper" padding="normal" width="wide">
        <Eyebrow tone="iris">Practical</Eyebrow>
        <Heading as="h2" size="lg" className="mt-6 text-ink-deep">
          Getting there, staying, registering
        </Heading>

        <div className="mt-11 grid gap-5 sm:gap-6 lg:grid-cols-3">
          <Card tone="mint" tilt="left" className="flex flex-col">
            <h3 className="font-display text-xl font-semibold text-ink-deep">
              Registration
            </h3>
            <p className="mt-3 font-display text-3xl font-semibold italic text-pine">
              {conf.registration.fee}
            </p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
              Includes {conf.registration.includes}. {conf.registration.excludes}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-mute">
              {conf.registration.deadline} {conf.registration.paymentNote}
            </p>
            <div className="mt-5">
              <TextLink href={conf.registration.formUrl} external>
                Open the registration form
              </TextLink>
            </div>
          </Card>

          <Card tone="paper" tilt="right" className="flex flex-col">
            <h3 className="font-display text-xl font-semibold text-ink-deep">
              Travel
            </h3>
            <ul className="mt-4 space-y-3">
              {conf.travel.airports.map((a) => (
                <li key={a.code} className="text-[0.95rem] leading-snug">
                  <span className="font-display font-semibold text-pine">{a.code}</span>{" "}
                  <span className="text-ink-deep">{a.name}</span>
                  <span className="block text-sm text-ink-mute">{a.note}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              {conf.travel.ground}
            </p>
          </Card>

          <Card tone="iris" tilt="left" className="flex flex-col">
            <h3 className="font-display text-xl font-semibold text-ink-deep">
              Staying
            </h3>
            <p className="mt-3 font-display text-lg font-semibold italic text-pine">
              {conf.accommodation.hotel}
            </p>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
              {conf.accommodation.rate}, including {conf.accommodation.includes}.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Book under the group name{" "}
              <span className="font-display italic text-ink-deep">
                {conf.accommodation.groupName}
              </span>
              .
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-mute">
              {conf.accommodation.alternatives}
            </p>
            <div className="mt-5">
              <TextLink href={conf.accommodation.bookingUrl} external>
                Reserve a room
              </TextLink>
            </div>
          </Card>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            <PhotoFrame label="Beckman Hall" file="beckman-hall.png" ratio="landscape" />
            <PhotoFrame label="The Keck Center" file="keck-center.png" ratio="landscape" />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-ink-deep">
              The venue
            </h3>
            <p className="mt-3 leading-[1.75] text-ink-soft">
              {conf.venue.place}, {conf.venue.address}. {conf.venue.rooms}
            </p>
          </div>
        </div>
      </Section>

      <Section
        tone="mint"
        padding="normal"
        width="wide"
        bleed={<Blob tone="pine" shape={1} className="-right-24 top-20 h-80 w-80" />}
      >
        <Eyebrow tone="pine">Who is coming</Eyebrow>
        <Heading as="h2" size="lg" className="mt-6 text-ink-deep">
          {conf.participants.length} participants, so far
        </Heading>
        <NameGrid
          people={conf.participants}
          highlight={speakerNames}
          columns={3}
          className="mt-11"
        />
      </Section>

      <Section tone="paper" padding="normal" width="prose" className="text-center">
        <Eyebrow tone="iris" className="justify-center">
          Organisers
        </Eyebrow>
        <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-6">
          {conf.organisers.map((o) => (
            <div key={o.name}>
              <p className="font-display text-lg font-semibold text-ink-deep">{o.name}</p>
              <p className="mt-0.5 text-sm text-ink-soft">{o.affiliation}</p>
              {o.email ? (
                <TextLink href={`mailto:${o.email}`} className="mt-1 inline-block text-sm">
                  {o.email}
                </TextLink>
              ) : null}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-xl text-sm leading-relaxed text-ink-mute">
          This page summarises the official conference site, which remains the
          authority on dates, fees and programme. Details may change — please
          confirm there before booking.
        </p>
        <div className="mt-7 flex justify-center">
          <ActionLink href={conf.sourceUrl} tone="pine" external>
            Official conference site
          </ActionLink>
        </div>
      </Section>

      <Pagination
        prev={{
          href: "/legends/banaschewski",
          label: "Banaschewski",
          blurb: "The life and the mathematics the conference is celebrating.",
        }}
        next={{
          href: "/reading",
          label: "Reading",
          blurb: "The books, essays and sources to go to next.",
        }}
      />
    </>
  );
}
