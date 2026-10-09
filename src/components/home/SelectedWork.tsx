"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { SELECTED_WORK, type WorkPhoto } from "@/data/home";
import { DEVICE_SIZES, optimizedImageUrl } from "@/lib/image-sizes";

/** Every photo in page order, which is also the lightbox's order. */
const PHOTOS = SELECTED_WORK;

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

/** Where a frame sits in the grid, from its shape. See SELECTED_WORK. */
function tileLayout(photo: WorkPhoto): { span: string; sizes: string } {
  if (photo.feature) {
    return {
      span: "lg:col-span-full lg:row-span-2",
      sizes: "(min-width: 1024px) 100vw, (min-width: 768px) 50vw, 100vw",
    };
  }
  return {
    span: photo.height > photo.width ? "row-span-2" : "",
    sizes: "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
  };
}

export function SelectedWork() {
  const [index, setIndex] = useState(-1);

  return (
    <section id="work" className="bg-varnish py-[clamp(64px,9vw,128px)] text-canvas">
      <h2 className="mb-[clamp(28px,4vw,48px)] px-gutter text-[clamp(30px,3.6vw,48px)] leading-none font-bold tracking-[-0.02em]">
        Selected work
      </h2>

      <div className="@container px-gutter">
        <div className="work-grid">
          {PHOTOS.map((photo, i) => {
            const layout = tileLayout(photo);
            return (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`View ${photo.title} full screen`}
                  className={`group relative w-full cursor-zoom-in overflow-hidden h-full bg-varnish-deep ${layout.span}`}
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
            );
          })}
        </div>
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
