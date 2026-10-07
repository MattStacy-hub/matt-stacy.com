/**
 * The widths Vercel resizes photos to, shared by next.config.ts and the
 * lightbox. The image optimizer refuses any width not listed here, so the
 * lightbox builds its srcSet from the same list next/image uses.
 *
 * Kept short on purpose: every width is a separate copy Vercel makes and
 * bills for. 2560 covers a full-width hero on a 2x screen.
 */
export const DEVICE_SIZES = [640, 1080, 1920, 2560];

/** Small fixed-size images. */
export const IMAGE_SIZES = [128, 256, 384];

/** next/image's default quality. The optimizer accepts it without config. */
const QUALITY = 75;

/** The optimizer's address for a site photo resized to `width`. */
export function optimizedImageUrl(src: string, width: number): string {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${QUALITY}`;
}
