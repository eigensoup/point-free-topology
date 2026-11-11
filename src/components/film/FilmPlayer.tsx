"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { type Chapter, filmSrc, formatRuntime } from "@/data/film";
import { cn } from "@/lib/cn";

const hashFor = (n: number) => `#chapter-${n}`;

/** The chapter playing at time `t`. */
function chapterAt(chapters: Chapter[], t: number) {
  let i = 0;
  while (i < chapters.length - 1 && t >= chapters[i + 1].start) i++;
  return i;
}

/**
 * The whole film as one continuous movie: a single <video> over the joined
 * file, with the chapters laid over its timeline. Picking a chapter seeks to
 * it, the current one follows playback, and `#chapter-7` links straight in.
 */
export function FilmPlayer({
  chapters,
  poster,
}: {
  chapters: Chapter[];
  poster: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [time, setTime] = useState(0);
  const total = chapters.at(-1)!.start + chapters.at(-1)!.duration;
  const index = chapterAt(chapters, time);
  const chapter = chapters[index];

  function seek(i: number, play = true) {
    const video = videoRef.current;
    if (!video || i < 0 || i >= chapters.length) return;
    video.currentTime = chapters[i].start;
    setTime(chapters[i].start);
    history.replaceState(null, "", hashFor(chapters[i].n));
    if (play) void video.play().catch(() => {});
  }

  // Arriving from a deep link: cue the chapter up, but leave play to the viewer.
  useEffect(() => {
    const match = /^#chapter-(\d+)$/.exec(window.location.hash);
    if (!match) return;
    const i = chapters.findIndex((c) => c.n === Number(match[1]));
    const video = videoRef.current;
    if (i < 0 || !video) return;
    const cue = () => {
      video.currentTime = chapters[i].start;
      setTime(chapters[i].start);
    };
    if (video.readyState >= 1) cue();
    else video.addEventListener("loadedmetadata", cue, { once: true });
  }, [chapters]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:gap-10">
      <div className="min-w-0">
        <div className="overflow-hidden rounded-petal bg-black shadow-float ring-1 ring-white/10">
          <video
            ref={videoRef}
            src={filmSrc}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
            onSeeked={(e) => setTime(e.currentTarget.currentTime)}
            className="aspect-video w-full bg-black"
          >
            Your browser cannot play this video. <a href={filmSrc}>Download the film</a>{" "}
            instead.
          </video>
        </div>

        {/* The film's timeline, one segment per chapter, sized by its length. */}
        <div className="mt-4 flex h-2.5 gap-[3px]" aria-hidden="true">
          {chapters.map((c, i) => {
            const fill =
              i < index ? 1 : i > index ? 0 : (time - c.start) / c.duration;
            return (
              <button
                key={c.n}
                type="button"
                tabIndex={-1}
                title={`${c.n}. ${c.title}`}
                onClick={() => seek(i)}
                style={{ flexGrow: c.duration }}
                className="relative basis-0 overflow-hidden rounded-full bg-white/12 transition-colors hover:bg-white/25"
              >
                <span
                  className="absolute inset-y-0 left-0 bg-iris"
                  style={{ width: `${Math.min(1, Math.max(0, fill)) * 100}%` }}
                />
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
          <div aria-live="polite">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint-deep">
              Chapter {chapter.n} of {chapters.length} · {formatRuntime(time)} of{" "}
              {formatRuntime(total)}
            </p>
            <p className="mt-1 font-display text-2xl font-semibold text-mint-wash sm:text-3xl">
              {chapter.title}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <StepButton disabled={index === 0} onClick={() => seek(index - 1)}>
              <span aria-hidden="true">←</span> Previous chapter
            </StepButton>
            <StepButton
              disabled={index === chapters.length - 1}
              onClick={() => seek(index + 1)}
            >
              Next chapter <span aria-hidden="true">→</span>
            </StepButton>
          </div>
        </div>
      </div>

      <nav aria-label="Chapters">
        <ol className="grid max-h-[38rem] gap-2 overflow-y-auto pr-1 [scrollbar-width:thin]">
          {chapters.map((c, i) => {
            const current = i === index;
            return (
              <li key={c.n}>
                <button
                  type="button"
                  onClick={() => seek(i)}
                  aria-current={current ? "true" : undefined}
                  className={cn(
                    "group flex w-full items-center gap-4 rounded-pebble p-2 pr-4 text-left transition duration-300 ease-soft",
                    current ? "bg-white/12 ring-1 ring-iris/60" : "hover:bg-white/6",
                  )}
                >
                  <span className="relative aspect-video w-28 shrink-0 overflow-hidden rounded-xl bg-ink-deep">
                    <Image
                      src={c.poster}
                      alt=""
                      fill
                      sizes="112px"
                      className={cn(
                        "object-cover transition duration-500 ease-soft",
                        current
                          ? ""
                          : "opacity-75 grayscale-[35%] group-hover:opacity-100 group-hover:grayscale-0",
                      )}
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-mint-deep/80">
                      {String(c.n).padStart(2, "0")} · {formatRuntime(c.start)}
                    </span>
                    <span
                      className={cn(
                        "block font-display leading-snug",
                        current ? "text-iris-soft" : "text-mint-wash",
                      )}
                    >
                      {c.title}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}

function StepButton({
  disabled,
  onClick,
  children,
}: {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-mint-wash transition duration-300 ease-soft hover:border-white/70 disabled:pointer-events-none disabled:opacity-35"
    >
      {children}
    </button>
  );
}
