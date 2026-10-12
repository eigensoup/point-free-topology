import { Card } from "@/components/ui";
import { contactEmail, tracks } from "@/data/contribute";

const tones = ["mint", "paper", "iris"] as const;
const tilts = ["left", "right", "left"] as const;

/** The three ways to help, each with its own pre-addressed email. */
export function TrackCards() {
  return (
    <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
      {tracks.map((track, i) => (
        <Card key={track.id} tone={tones[i]} tilt={tilts[i]} className="flex flex-col">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-pine">
            {track.kicker}
          </span>
          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-ink-deep">
            {track.title}
          </h3>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">{track.body}</p>

          <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-mute">
            Worth including
          </p>
          <ul className="mt-2.5 space-y-1.5">
            {track.asks.map((ask) => (
              <li
                key={ask}
                className="flex gap-2.5 text-sm leading-relaxed text-ink-soft"
              >
                <span aria-hidden="true" className="text-pine">
                  ·
                </span>
                {ask}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-7">
            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                `[${track.subject}] Pointfree Topology`,
              )}`}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-mint-wash transition duration-300 ease-soft hover:-translate-y-0.5 hover:bg-ink-deep"
            >
              Email about this
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-soft group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
}
