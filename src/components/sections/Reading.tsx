import { Card, Eyebrow, Heading, Section, TextLink } from "@/components/ui";
import { Blob } from "@/components/decor";

type Entry = {
  title: string;
  author: string;
  detail: string;
  href?: string;
};

const books: Entry[] = [
  {
    title: "Stone Spaces",
    author: "Peter T. Johnstone",
    detail:
      "Cambridge University Press, 1982. The book that gave the subject a shared language. Still the place most people start.",
  },
  {
    title: "Frames and Locales: Topology without Points",
    author: "Jorge Picado & Aleš Pultr",
    detail:
      "Birkhäuser, 2012. The modern reference, written as a bridge from Stone Spaces to the present day.",
    href: "https://www.mat.uc.pt/~picado/publicat/bookpage.html",
  },
  {
    title: "The Real Numbers in Pointfree Topology",
    author: "Bernhard Banaschewski",
    detail:
      "Textos de Matemática, Coimbra, 1997; revised edition from Springer in the Coimbra Mathematical Texts series, with a career essay by Karl Heinrich Hofmann.",
    href: "https://link.springer.com/book/9783032358882",
  },
];

const essays: Entry[] = [
  {
    title: "The point of pointless topology",
    author: "Peter T. Johnstone",
    detail:
      "Bulletin of the AMS, 1983. The best short argument for why any of this is worth doing, and still the most quoted.",
  },
  {
    title: "Notes on Point-Free Topology",
    author: "Jorge Picado & Aleš Pultr",
    detail:
      "A compact, friendly overview of the basic ideas and the motivation behind them.",
    href: "https://www.mat.uc.pt/cmt/index.php/cmt/article/view/4",
  },
  {
    title: "Bernhard Banaschewski, 1926–2022",
    author: "McMaster University",
    detail:
      "The department's memorial page, and the source for most of the biographical detail on this site.",
    href: "https://math.mcmaster.ca/bernhard-banaschewski-1926-2022/",
  },
];

function EntryList({ items }: { items: Entry[] }) {
  return (
    <ul className="space-y-7">
      {items.map((item) => (
        <li key={item.title}>
          <h4 className="font-display text-lg font-semibold leading-snug text-ink-deep">
            {item.href ? (
              <TextLink href={item.href} external className="text-ink-deep decoration-iris/50 hover:decoration-iris">
                {item.title}
              </TextLink>
            ) : (
              item.title
            )}
          </h4>
          <p className="mt-1 text-sm italic text-pine">{item.author}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
        </li>
      ))}
    </ul>
  );
}

export function Reading() {
  return (
    <Section
      id="reading"
      tone="iris"
      padding="roomy"
      bleed={<Blob tone="mint" shape={0} className="-right-28 top-10 h-96 w-96" />}
    >
      <div className="max-w-2xl">
        <Eyebrow tone="pine">Where to go next</Eyebrow>
        <Heading as="h2" size="xl" underline underlineTone="iris" className="mt-6 text-ink-deep">
          A short shelf
        </Heading>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Card tone="paper" tilt="left">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-pine">
            Books
          </h3>
          <div className="mt-7">
            <EntryList items={books} />
          </div>
        </Card>
        <Card tone="paper" tilt="right">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-pine">
            Essays & sources
          </h3>
          <div className="mt-7">
            <EntryList items={essays} />
          </div>
        </Card>
      </div>
    </Section>
  );
}
