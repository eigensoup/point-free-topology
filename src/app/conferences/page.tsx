import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui";
import { Blob } from "@/components/decor";
import { PageHeader } from "@/components/site/PageHeader";
import { Pagination } from "@/components/site/Pagination";
import { Countdown } from "@/components/conference/Countdown";
import { conferences } from "@/data/conferences";

export const metadata: Metadata = {
  title: "Conferences",
  description:
    "Gatherings in the pointfree world — including Banaschewski 100, a centennial conference for Bernhard Banaschewski in January 2027.",
};

export default function ConferencesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gatherings"
        title="Where everyone"
        accent="turns up"
        seed={29}
        lede="Pointfree topology is a small enough field that most of it fits into one room a few times a decade. Here is the next time."
      />

      <Section
        tone="paper"
        padding="normal"
        bleed={<Blob tone="iris" shape={1} className="-right-28 top-1/4 h-96 w-96" />}
      >
        <ul className="grid gap-6">
          {conferences.map((conf) => {
            return (
              <li key={conf.slug}>
                <Link
                  href={`/conferences/${conf.slug}`}
                  className="group flex flex-col gap-6 rounded-petal border border-pine/25 bg-mint p-7 shadow-lift transition duration-300 ease-soft hover:-translate-y-1 hover:shadow-float active:translate-y-0 sm:p-9 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="max-w-xl">
                    <h2 className="font-display text-2xl font-semibold text-pine sm:text-3xl">
                      {conf.name}
                    </h2>
                    <p className="mt-2 font-display text-lg italic text-ink-deep">
                      {conf.subtitle} for {conf.honouree}
                    </p>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">
                      {conf.dateLabel} · {conf.venue.place}, {conf.venue.city}
                    </p>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                      {conf.intro[0]}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-pine">
                      Details and registration
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 ease-soft group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>

                  <div className="shrink-0">
                    <Countdown target={conf.startsAt} endsAt={conf.endsAt} dark={false} />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      <Pagination href="/conferences" />
    </>
  );
}
