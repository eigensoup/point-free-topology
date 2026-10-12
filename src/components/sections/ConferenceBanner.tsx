import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui";
import { Blob, Scatter, Squiggle } from "@/components/decor";
import { Countdown } from "@/components/conference/Countdown";
import { featuredConference } from "@/data/conferences";

/** Landing-page banner for the next conference. Renders nothing once the last
 *  conference in the data has finished, so it never goes stale. */
export function ConferenceBanner() {
  const conf = featuredConference();
  if (!conf) return null;

  return (
    <section className="relative overflow-hidden bg-ink-deep text-mint-wash">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Blob tone="iris" shape={0} drift className="-left-24 -top-16 h-80 w-80" />
        <Blob tone="pine" shape={2} className="-right-20 -bottom-20 h-80 w-80" />
        <div className="absolute inset-0 opacity-40">
          <Scatter count={22} seed={31} tone="bg-iris-soft" />
        </div>
      </div>

      <Container className="relative py-14 sm:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
          <div className="max-w-xl">
            <Eyebrow tone="mint">Upcoming · {conf.venue.city}</Eyebrow>

            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
              {conf.name}
              <span className="mt-1 block text-lg font-normal italic text-iris sm:text-xl">
                {conf.subtitle} for {conf.honouree}
              </span>
            </h2>
            <Squiggle tone="mint" variant={2} className="mt-4 h-3 w-40 max-w-full" />

            <p className="mt-6 text-base leading-[1.7] text-mint-wash/75">
              {conf.dateLabel} at {conf.venue.place}. Four days of talks among the
              people who work on frames and locales — with {conf.speakers.length}{" "}
              invited speakers and a documentary premiere on the opening night.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={`/conferences/${conf.slug}`}
                className="group inline-flex items-center gap-2.5 rounded-full bg-iris px-6 py-3 text-sm font-semibold text-ink-deep transition duration-300 ease-soft hover:-translate-y-0.5 hover:bg-iris-soft"
              >
                Conference details
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-soft group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <a
                href={conf.registration.formUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-mint-wash transition duration-300 ease-soft hover:-translate-y-0.5 hover:border-white/80"
              >
                Register
              </a>
            </div>
          </div>

          <div className="shrink-0">
            <Countdown target={conf.startsAt} endsAt={conf.endsAt} dark />
          </div>
        </div>
      </Container>
    </section>
  );
}
