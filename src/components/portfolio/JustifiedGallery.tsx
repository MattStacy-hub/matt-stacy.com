"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { PortfolioPhoto } from "@/data/portfolio";
import { DEVICE_SIZES, optimizedImageUrl } from "@/lib/image-sizes";

/**
 * Photos in justified rows: every frame shown whole, at its own shape, with
 * each row stretched to the full width. Done in CSS alone: a frame's share of
 * a row follows its aspect ratio (flex-grow), and a filler at the end stops
 * the last row's few frames from blowing up to fill it.
 *
 * Row height comes from --row-h, set per breakpoint below.
 */
export function JustifiedGallery({ photos, label }: { photos: PortfolioPhoto[]; label: string }) {
  const [index, setIndex] = useState(-1);

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

  return (
    <>
      <ul
        aria-label={label}
        className="flex flex-wrap gap-2 [--row-h:150px] sm:[--row-h:210px] lg:[--row-h:280px] 2xl:[--row-h:340px]"
      >
        {photos.map((photo, i) => {
          const ratio = photo.width / photo.height;
          return (
            <li
              key={photo.src}
              style={{ flexGrow: ratio, flexBasis: `calc(var(--row-h) * ${ratio})` }}
            >
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
                  sizes={ratio > 1 ? "(min-width: 1024px) 45vw, 90vw" : "(min-width: 1024px) 25vw, 50vw"}
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.03]"
                />
              </button>
            </li>
          );
        })}
        <li aria-hidden="true" className="grow-[10]" />
      </ul>

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
