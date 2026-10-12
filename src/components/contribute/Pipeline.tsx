import { pipeline } from "@/data/contribute";

/** What happens to a document between arriving and being published. */
export function Pipeline() {
  return (
    <ol className="grid gap-5 sm:gap-4 md:grid-cols-5">
      {pipeline.map((stage, i) => (
        <li
          key={stage.step}
          className="relative rounded-pebble border border-pine/20 bg-mint-wash px-5 py-5"
        >
          <span className="font-display text-sm font-semibold italic text-pine">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-ink-deep">
            {stage.step}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{stage.body}</p>
        </li>
      ))}
    </ol>
  );
}
