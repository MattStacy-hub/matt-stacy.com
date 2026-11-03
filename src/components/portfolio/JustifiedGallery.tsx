"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { PortfolioPhoto } from "@/data/portfolio";
import { DEVICE_SIZES, optimizedImageUrl } from "@/lib/image-sizes";

/** The gap between frames, in pixels (gap-2). */
const GAP = 8;

/** The row height to aim for at each page width, matching --row-h below. */
function targetHeight(viewport: number): number {
  if (viewport >= 1536) return 340;
  if (viewport >= 1024) return 280;
  if (viewport >= 640) return 210;
  return 150;
}

/**
 * Splits the photos into rows that each fill the width, the last one too.
 * Picks the break points that keep every row closest to the target height
 * (least squares over all rows), so no row ends up stretched or squashed.
 */
function partition(
  ratios: number[],
  width: number,
  target: number,
): number[][] {
  const n = ratios.length;
  const cost = new Array<number>(n + 1).fill(Infinity);
  const from = new Array<number>(n + 1).fill(0);
  cost[0] = 0;
  for (let j = 1; j <= n; j++) {
    let sum = 0;
    for (let i = j - 1; i >= 0 && j - i <= 8; i--) {
      sum += ratios[i];
      const height = (width - GAP * (j - i - 1)) / sum;
      const c = cost[i] + (height - target) ** 2;
      if (c < cost[j]) {
        cost[j] = c;
        from[j] = i;
      }
    }
  }
  const rows: number[][] = [];
  for (let j = n; j > 0; j = from[j]) {
    rows.unshift(Array.from({ length: j - from[j] }, (_, k) => from[j] + k));
  }
  return rows;
}

/**
 * Photos in justified rows: every frame shown whole, at its own shape, with
 * every row, the last included, stretched to the full width. A frame's share
 * of its row follows its aspect ratio (flex-grow), so a row's frames come out
 * the same height. Before the width is known (the server render), the rows
 * wrap in CSS alone, with a filler holding the last row at its natural size.
 */
export function JustifiedGallery({
  photos,
  label,
}: {
  photos: PortfolioPhoto[];
  label: string;
}) {
  const [index, setIndex] = useState(-1);
  const boxRef = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState<number[][] | null>(null);

  useLayoutEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const ratios = photos.map((photo) => photo.width / photo.height);
    const update = () =>
      setRows(
        partition(ratios, box.clientWidth, targetHeight(window.innerWidth)),
      );
    update();
    const observer = new ResizeObserver(update);
    observer.observe(box);
    return () => observer.disconnect();
  }, [photos]);

  const slides = photos.map((photo) => ({
    src: optimizedImageUrl(photo.src, 1920),
    alt: photo.alt,
    width: photo.width,
    height: photo.height,
    srcSet: DEVICE_SIZES.filter((w) => w <= photo.width).map((w) => ({
      src: optimizedImageUrl(photo.src, w),
      width: w,
      height: Math.round((photo.height * w) / photo.width),
    })),
  }));

  const frame = (i: number, style: React.CSSProperties) => {
    const photo = photos[i];
    const ratio = photo.width / photo.height;
    return (
      <li key={photo.src} style={style}>
        <button
          type="button"
          onClick={() => setIndex(i)}
          aria-label={`View full screen: ${photo.alt}`}
          className="group relative block w-full cursor-zoom-in overflow-hidden bg-bone"
          style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={
              ratio > 1
                ? "(min-width: 1024px) 45vw, 90vw"
                : "(min-width: 1024px) 25vw, 50vw"
            }
            className="object-cover transition-transform duration-1000 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.03]"
          />
        </button>
      </li>
    );
  };

  return (
    <>
      <div ref={boxRef}>
        {rows ? (
          <ul aria-label={label} className="grid gap-2">
            {rows.map((row) => (
              <li key={row[0]}>
                <ul className="flex gap-2">
                  {row.map((i) =>
                    frame(i, {
                      flexGrow: photos[i].width / photos[i].height,
                      flexBasis: 0,
                      minWidth: 0,
                    }),
                  )}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <ul
            aria-label={label}
            className="flex flex-wrap gap-2 [--row-h:150px] sm:[--row-h:210px] lg:[--row-h:280px] 2xl:[--row-h:340px]"
          >
            {photos.map((photo, i) => {
              const ratio = photo.width / photo.height;
              return frame(i, {
                flexGrow: ratio,
                flexBasis: `calc(var(--row-h) * ${ratio})`,
              });
            })}
            <li aria-hidden="true" className="grow-[10]" />
          </ul>
        )}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        styles={{ container: { backgroundColor: "rgba(20, 15, 12, 0.97)" } }}
      />
    </>
  );
}
