import Image from "next/image";
import type { Photo as PhotoData } from "@/data/photos";
import { cn } from "@/lib/cn";

const ratios = {
  portrait: "aspect-4/5",
  landscape: "aspect-3/2",
  wide: "aspect-16/9",
  square: "aspect-square",
} as const;

/** A real photograph, cropped to the same ratios <PhotoFrame> holds space for.
 *  Caption and credit sit underneath; `dark` sets them for an ink background. */
export function Photo({
  photo,
  ratio = "landscape",
  sizes,
  preload,
  dark,
  showCaption = true,
  className,
}: {
  photo: PhotoData;
  ratio?: keyof typeof ratios;
  sizes: string;
  preload?: boolean;
  dark?: boolean;
  showCaption?: boolean;
  className?: string;
}) {
  const hasCaption = showCaption && (photo.caption || photo.credit);
  return (
    <figure className={cn("w-full", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-petal shadow-float",
          dark ? "bg-ink-deep" : "bg-mint",
          ratios[ratio],
        )}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
          style={photo.focus ? { objectPosition: photo.focus } : undefined}
        />
      </div>
      {hasCaption ? (
        <figcaption
          className={cn(
            "mt-3 text-sm leading-snug",
            dark ? "text-mint-wash/65" : "text-ink-soft",
          )}
        >
          {photo.caption ? <span className="italic">{photo.caption}</span> : null}
          {photo.caption && photo.credit ? " " : null}
          {photo.credit ? (
            <span className={dark ? "text-mint-wash/45" : "text-ink-mute"}>
              {photo.credit}.
            </span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** A loose grid of photographs with captions. */
export function PhotoGallery({
  photos,
  className,
}: {
  photos: PhotoData[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {photos.map((photo) => (
        <Photo
          key={photo.src}
          photo={photo}
          ratio="landscape"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      ))}
    </div>
  );
}
