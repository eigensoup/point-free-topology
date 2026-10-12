import { Fragment } from "react";

/**
 * Renders *emphasis* markers from data strings as display-italic <em>.
 * Keeps editorial copy in src/data rather than scattered through JSX, without
 * giving up typographic emphasis.
 */
export function RichText({ children }: { children: string }) {
  const parts = children.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") && part.length > 2 ? (
          <em key={i} className="font-display italic">
            {part.slice(1, -1)}
          </em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
