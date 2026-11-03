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
  minor: "aspect-[4/5] md:aspect-auto",
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
    <button
      type="button"
      onClick={() => onOpen(index)}
      aria-label={`View ${photo.title} full screen`}
      className={`group relative w-full min-w-0 cursor-zoom-in overflow-clip bg-varnish-deep ${BOX[photo.layout]}`}
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
  );
}

/** One gap between every frame, across rows and within pairs. */
const GAP = "gap-[clamp(4px,0.6vw,8px)]";

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

      <div className={`grid px-gutter ${GAP}`}>
        {ROWS.map((row) =>
          row.length === 1 ? (
            <WorkFrame key={row[0].photo.src} frame={row[0]} onOpen={setIndex} />
          ) : (
            <div key={row[0].photo.src} className={`grid ${GAP} ${pairColumns(row)}`}>
              {row.map((frame) => (
                <WorkFrame key={frame.photo.src} frame={frame} onOpen={setIndex} />
              ))}
            </div>
          ),
        )}
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
