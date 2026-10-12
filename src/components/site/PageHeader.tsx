import { Container, Eyebrow, Heading } from "@/components/ui";
import { Blob, Scatter, Squiggle } from "@/components/decor";

/** The dark masthead every interior page opens with. */
export function PageHeader({
  eyebrow,
  title,
  accent,
  lede,
  seed = 5,
  children,
}: {
  eyebrow: string;
  title: string;
  /** Second line, set in display italic. */
  accent?: string;
  lede?: string;
  seed?: number;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-mint-wash">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Blob tone="iris" shape={1} drift className="-left-20 top-0 h-80 w-80" />
        <Blob tone="pine" shape={0} className="-right-24 bottom-0 h-80 w-80" />
        <div className="absolute inset-0 opacity-45">
          <Scatter count={24} seed={seed} tone="bg-iris-soft" />
        </div>
      </div>

      <Container className="relative py-16 sm:py-24">
        <Eyebrow tone="mint">{eyebrow}</Eyebrow>
        <Heading as="h1" size="xl" className="mt-6 text-mint-wash">
          {title}
          {accent ? (
            <>
              <br />
              <span className="italic text-iris">{accent}</span>
            </>
          ) : null}
        </Heading>
        <Squiggle tone="mint" variant={0} className="mt-5 h-3.5 w-48 max-w-full" />
        {lede ? (
          <p className="mt-7 max-w-2xl text-base leading-[1.75] text-mint-wash/80 sm:text-lg">
            {lede}
          </p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
