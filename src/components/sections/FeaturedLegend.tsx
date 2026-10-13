import { ActionLink, Eyebrow, Heading, Pill, Section } from "@/components/ui";
import { Blob } from "@/components/decor";
import { Photo } from "@/components/figures/Photo";
import { getLegend } from "@/data/legends";

/** A prominent invitation to one profile, set above the full lineage. */
export function FeaturedLegend({ slug }: { slug: string }) {
  const person = getLegend(slug);
  const p = person?.profile;
  if (!person || !p) return null;

  const first = person.name.split(" ")[0];

  return (
    <Section
      tone="mint"
      padding="snug"
      bleed={<Blob tone="iris" shape={0} className="-left-28 -top-10 h-80 w-80" />}
    >
      <div className="grid items-center gap-10 sm:grid-cols-[minmax(0,14rem)_1fr] lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
        {p.portrait ? (
          <div className="mx-auto w-full max-w-[14rem] sm:max-w-none">
            <Photo
              photo={p.portrait}
              ratio="portrait"
              sizes="(min-width: 1024px) 18rem, 14rem"
              preload
              showCaption={false}
            />
          </div>
        ) : null}

        <div>
          <Eyebrow tone="pine">Start here</Eyebrow>
          <Heading as="h2" size="lg" className="mt-5 text-ink-deep">
            Read about <span className="italic text-pine">{first}</span>
          </Heading>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <Pill tone="pine">{person.years}</Pill>
            <Pill tone="pine">{person.place}</Pill>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-[1.75] text-ink-soft sm:text-lg">
            {p.lede}
          </p>
          <div className="mt-8">
            <ActionLink href={`/legends/${person.slug}`} tone="pine">
              Read {first}&rsquo;s profile
            </ActionLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
