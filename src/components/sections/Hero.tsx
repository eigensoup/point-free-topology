import { ActionLink, Container, Eyebrow } from "@/components/ui";
import { Blob, Mobile, Scatter, Squiggle } from "@/components/decor";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-mint-wash">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Blob tone="iris" shape={0} drift className="-left-24 top-10 h-96 w-96" />
        <Blob tone="pine" shape={1} drift className="-right-20 bottom-0 h-[26rem] w-[26rem]" />
        <Blob tone="light" shape={2} className="left-1/3 top-1/2 h-72 w-72" />
        <div className="absolute inset-0 opacity-50">
          <Scatter count={34} seed={3} tone="bg-iris-soft" />
        </div>
      </div>

      <Container className="relative py-24 sm:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Eyebrow tone="mint">Frames · Locales · Sublocales</Eyebrow>

            <h1 className="mt-7 font-display text-[clamp(3rem,8.5vw,5.75rem)] font-semibold leading-[0.93] tracking-[-0.03em] text-balance">
              Topology
              <br />
              without{" "}
              <span className="relative inline-block italic text-iris">
                points
                <Squiggle
                  tone="mint"
                  variant={1}
                  className="absolute -bottom-2 left-0 h-3 w-full sm:-bottom-3 sm:h-4"
                />
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-lg leading-[1.75] text-mint-wash/80 sm:text-xl">
              Take a space. Throw away every point. Keep only the lattice of open
              sets and the way those opens meet and join. Almost nothing is lost —
              and a great deal becomes clearer.
            </p>

            <p className="mt-5 max-w-xl leading-[1.75] text-mint-wash/65">
              This is a small gallery for that idea and for the people who built
              it. We begin with{" "}
              <span className="font-display italic text-iris-soft">
                Bernhard Banaschewski
              </span>
              , who spent sixty-seven years at one desk making it true.
            </p>

            <div className="mt-11 flex flex-wrap items-center gap-4">
              <ActionLink href="/people/banaschewski" tone="iris">
                Meet Banaschewski
              </ActionLink>
              <ActionLink href="/ideas" tone="ghostLight">
                Start with the ideas
              </ActionLink>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm text-mint-wash lg:max-w-none">
            <Mobile className="w-full drop-shadow-[0_20px_45px_rgba(0,0,0,0.3)]" />
            <p className="mt-6 text-center text-sm italic leading-relaxed text-mint-wash/55">
              A frame, hung like a mobile. Every node an open; every edge a
              containment; no point anywhere in sight.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
