import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/site";
import { HERO_PHOTO, SELECTED_WORK, type Photo } from "@/data/home";
import { SERVICES } from "@/data/services";
import { COLLECTIONS } from "@/data/portfolio";
import { BLOG_CATEGORIES } from "@/data/blog";
import { getPosts } from "@/lib/blog";
import { ABOUT_HERO, PORTRAIT } from "@/data/about";
import { ADVENTURE, BRAND, DRONE, EXPEDITION, OVERVIEW } from "@/data/service-pages";

/**
 * Only pages that exist. Add each new route here as it's built.
 *
 * No lastmod: the pages are built from TypeScript data with no change date,
 * and Google ignores a sitemap's lastmod once it learns the dates are noise
 * (same reasoning as the AAV sitemap).
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const photos = [HERO_PHOTO, ...SELECTED_WORK];
  const imageUrls = (list: readonly Pick<Photo, "src">[]) => [
    ...new Set(list.map((photo) => `${SITE_CONFIG.url}${photo.src}`)),
  ];
  const servicePhotos: Record<string, Photo[]> = {
    "expedition-athlete-documentation": [
      EXPEDITION.hero,
      ...EXPEDITION.ascent.map((step) => step.photo),
      EXPEDITION.ropePhoto,
      EXPEDITION.logPhoto,
    ],
    "drone-cinematography": [
      DRONE.hero,
      ...DRONE.pair.map((view) => view.photo),
      ...DRONE.uses.map((use) => use.photo),
    ],
    "adventure-photography": [
      ADVENTURE.hero,
      ...ADVENTURE.formats.map((format) => format.photo),
      ADVENTURE.includedPhoto,
    ],
    "brand-commercial": [BRAND.hero, ...BRAND.photos],
  };

  return [
    {
      url: SITE_CONFIG.url,
      images: imageUrls(photos),
    },
    {
      url: `${SITE_CONFIG.url}/services`,
      images: imageUrls(Object.values(OVERVIEW.routes).map((route) => route.photo)),
    },
    {
      url: `${SITE_CONFIG.url}/about`,
      images: imageUrls([ABOUT_HERO, PORTRAIT]),
    },
    {
      url: `${SITE_CONFIG.url}/portfolio`,
      images: imageUrls(COLLECTIONS.map((collection) => collection.photos[0])),
    },
    ...COLLECTIONS.map((collection) => ({
      url: `${SITE_CONFIG.url}/portfolio/${collection.slug}`,
      images: imageUrls(collection.photos),
    })),
    { url: `${SITE_CONFIG.url}/blog` },
    ...BLOG_CATEGORIES.map((category) => ({
      url: `${SITE_CONFIG.url}/blog/category/${category.value}`,
    })),
    ...(await getPosts()).map((post) => ({
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      lastModified: post.publishedAt,
      images: post.cover ? [`${SITE_CONFIG.url}${post.cover}`] : [],
    })),
    ...SERVICES.map((service) => ({
      url: `${SITE_CONFIG.url}/services/${service.slug}`,
      images: imageUrls(servicePhotos[service.slug] ?? []),
    })),
  ];
}
