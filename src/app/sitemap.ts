import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/site";
import { HERO_PHOTO, SELECTED_WORK } from "@/data/home";

/**
 * Only pages that exist. Add each new route here as it's built.
 *
 * No lastmod: the pages are built from TypeScript data with no change date,
 * and Google ignores a sitemap's lastmod once it learns the dates are noise
 * (same reasoning as the AAV sitemap).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const photos = [HERO_PHOTO, ...SELECTED_WORK];
  return [
    {
      url: SITE_CONFIG.url,
      images: photos.map((photo) => `${SITE_CONFIG.url}${photo.src}`),
    },
  ];
}
