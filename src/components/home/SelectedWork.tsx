"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { SELECTED_WORK, type WorkLayout, type WorkPhoto } from "@/data/home";
import { DEVICE_SIZES, optimizedImageUrl } from "@/lib/image-sizes";

/**
 * The lightbox asks the optimizer for the same widths next/image uses, so
 * opening a frame never pulls the original from public/.
 */
const SLIDES = SELECTED_WORK.map((photo) => ({
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

/** A photo and its position in the lightbox. */
type Frame = { photo: WorkPhoto; index: number };

/** Groups the list into rows: bleed and wide frames alone, the rest in pairs. */
function toRows(photos: WorkPhoto[]): Frame[][] {
  const rows: Frame[][] = [];
  for (let i = 0; i < photos.length; i++) {
    const single = photos[i].layout === "bleed" || photos[i].layout === "wide";
    if (single || i + 1 === photos.length) {
      rows.push([{ photo: photos[i], index: i }]);
    } else {
      rows.push([
        { photo: photos[i], index: i },
        { photo: photos[i + 1], index: i + 1 },
      ]);
      i++;
    }
  }
  return rows;
}

const ROWS = toRows(SELECTED_WORK);

/**
 * The image box for each slot. A minor frame has its own shape on phones and
 * stretches to its partner's height once the pair sits side by side.
 */
const BOX: Record<WorkLayout, string> = {
  bleed: "aspect-[4/3] md:aspect-[21/9]",
  wide: "aspect-[3/2] md:aspect-[21/9]",
  major: "aspect-[3/2]",
  minor: "aspect-[4/5] md:aspect-auto md:flex-1",
  half: "aspect-[3/2]",
};

const SIZES: Record<WorkLayout, string> = {
  bleed: "100vw",
  wide: "100vw",
  major: "(min-width: 768px) 66vw, 100vw",
  minor: "(min-width: 768px) 33vw, 100vw",
  half: "(min-width: 768px) 50vw, 100vw",
};

/** Column template for a pair, so the major frame takes two thirds either way round. */
function pairColumns(row: Frame[]): string {
  const lead = row[0].photo.layout;
  if (lead === "major") return "md:grid-cols-[2fr_1fr]";
  if (lead === "minor") return "md:grid-cols-[1fr_2fr]";
  return "md:grid-cols-2";
}

function WorkFrame({ frame, onOpen }: { frame: Frame; onOpen: (index: number) => void }) {
  const { photo, index } = frame;
  return (
    <figure className="flex min-w-0 flex-col">
      <button
        type="button"
        onClick={() => onOpen(index)}
        aria-label={`View ${photo.title} full screen`}
        className={`group relative w-full cursor-zoom-in overflow-clip bg-varnish-deep ${BOX[photo.layout]}`}
      >
        <div className="work-reveal absolute inset-0">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={SIZES[photo.layout]}
            className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.03]"
            style={{ objectPosition: photo.focus }}
          />
        </div>
      </button>
      <figcaption
        className={`mt-3 flex items-baseline justify-between gap-4 text-[14px] leading-tight ${
          photo.layout === "bleed" ? "px-gutter" : ""
        }`}
      >
        <span className="truncate font-semibold text-canvas">{photo.title}</span>
        <span className="shrink-0 text-[13px] text-bone/60">{photo.place}</span>
      </figcaption>
    </figure>
  );
}

export function SelectedWork() {
  const [index, setIndex] = useState(-1);

  return (
    <section id="work" className="bg-varnish py-[clamp(64px,9vw,128px)] text-canvas">
      <div className="mb-[clamp(28px,4vw,48px)] flex items-baseline justify-between gap-6 px-gutter">
        <h2 className="text-[clamp(30px,3.6vw,48px)] leading-none font-bold tracking-[-0.02em]">
          Selected work
        </h2>
        <Link
          href="/portfolio"
          className="shrink-0 text-[14px] font-semibold text-bone transition-colors hover:text-canvas"
        >
          Full portfolio →
        </Link>
      </div>

      {/* Rows breathe apart; the frames in a pair sit close together. */}
      <div className="grid gap-[clamp(48px,7vw,104px)]">
        {ROWS.map((row) => {
          if (row.length === 1) {
            return (
              <div key={row[0].photo.src} className={row[0].photo.layout === "bleed" ? "" : "px-gutter"}>
                <WorkFrame frame={row[0]} onOpen={setIndex} />
              </div>
            );
          }
          return (
            <div
              key={row[0].photo.src}
              className={`grid gap-[clamp(48px,7vw,104px)] px-gutter md:gap-[clamp(12px,1.6vw,24px)] ${pairColumns(row)}`}
            >
              {row.map((frame) => (
                <WorkFrame key={frame.photo.src} frame={frame} onOpen={setIndex} />
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
