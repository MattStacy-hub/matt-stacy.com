/**
 * Blog categories: a fixed list, picked in the editor, one page each. The
 * labels are the old Squarespace categories, so imported posts keep theirs.
 * Tags are free-form and live on each post.
 */
export const BLOG_CATEGORIES = [
  { value: "peru-mountaineering", label: "Peru Mountaineering" },
  { value: "trip-reports", label: "Trip Reports" },
  { value: "photography-filmmaking", label: "Photography & Filmmaking" },
  { value: "gear-education", label: "Gear & Education" },
] as const;

export type CategorySlug = (typeof BLOG_CATEGORIES)[number]["value"];

export function categoryLabel(value: string): string {
  return BLOG_CATEGORIES.find((c) => c.value === value)?.label ?? value;
}

/** A tag as it appears in a URL: "Ice climbing" → "ice-climbing". */
export function tagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
