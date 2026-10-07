"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { SELECTED_WORK, type Photo, type WorkRow } from "@/data/home";
import { DEVICE_SIZES, optimizedImageUrl } from "@/lib/image-sizes";

/** Every photo in page order, which is also the lightbox's order. */
const PHOTOS: Photo[] = SELECTED_WORK.flatMap((row) => row.photos);

/**
 * The lightbox asks the optimizer for the same widths next/image uses, so
 * opening a frame never pulls the original from public/.
 */
const SLIDES = PHOTOS.map((photo) => ({
  src: optimizedImageUrl(photo.src, 1920),
  alt: photo.alt,
  width: photo.width,
  height: photo.height,
  title: photo.title,
  description: photo.place,
  srcSet: DEVICE_SIZES.filter((w) => w <= photo.width).map((w) => ({
    src: optimizedImageUrl(photo.src, w),
    width: w,
    height: Math.round((photo.height * w) / photo.width),
  })),
}));

const ROW_LAYOUT: Record<WorkRow["layout"], { row: string; frame: string; sizes: string }> = {
  one: {
    row: "grid-cols-1",
    frame: "aspect-[4/3] md:aspect-video md:max-h-[88vh]",
    sizes: "100vw",
  },
  "two-portrait": {
    row: "grid-cols-1 md:grid-cols-2",
    frame: "aspect-[4/5]",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
  "two-landscape": {
    row: "grid-cols-1 md:grid-cols-2",
    frame: "aspect-[3/2]",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
};

export function SelectedWork() {
  const [index, setIndex] = useState(-1);

  return (
    <section id="work" className="bg-varnish pt-[clamp(64px,9vw,128px)] pb-1.5 text-canvas">
      <div className="mb-[clamp(28px,4vw,48px)] flex flex-wrap items-end justify-between gap-6 px-gutter">
        <div>
          <p className="label text-bone">Photographs</p>
          <h2 className="mt-3 text-[clamp(30px,3.6vw,48px)] leading-none font-bold tracking-[-0.02em]">
            Selected work
          </h2>
        </div>
        <p className="max-w-[40ch] text-[15px] text-bone">
          Twelve frames from the last few seasons in the Peruvian Andes. Select one
          to see it full screen.
        </p>
      </div>

      <div className="grid gap-2 px-2">
        {SELECTED_WORK.map((row, r) => {
          const layout = ROW_LAYOUT[row.layout];
          return (
            <div key={r} className={`grid gap-2 ${layout.row}`}>
              {row.photos.map((photo) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setIndex(PHOTOS.indexOf(photo))}
                  aria-label={`View ${photo.title} full screen`}
                  className={`group relative w-full cursor-zoom-in overflow-hidden bg-varnish-deep ${layout.frame}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={layout.sizes}
                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.035]"
                    style={{ objectPosition: photo.focus }}
                  />
                  {/* Caption: shown on hover and keyboard focus, always on touch screens. */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[rgba(20,15,12,.6)] to-transparent to-45% opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100"
                  />
                  <span className="absolute right-4 bottom-[clamp(16px,2.5vw,32px)] left-[clamp(16px,2.5vw,32px)] grid translate-y-1.5 gap-1.5 border-l-2 border-petroglyph pl-3 text-left text-white opacity-0 transition duration-300 [text-shadow:0_1px_14px_rgba(0,0,0,.55)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
                    <span className="text-[clamp(15px,1.4vw,19px)] leading-tight font-semibold">
                      {photo.title}
                    </span>
                    <span className="label text-[10px] tracking-[0.28em] opacity-85">
                      {photo.place}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          );
        })}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={SLIDES}
        plugins={[Captions]}
        styles={{ container: { backgroundColor: "rgba(20, 15, 12, 0.97)" } }}
      />
    </section>
  );
}
