import { collection, config, fields } from "@keystatic/core";
import { block, wrapper } from "@keystatic/core/content-components";
import { BLOG_CATEGORIES } from "./src/data/blog";

/**
 * The blog editor at /keystatic. Posts are saved as files in content/blog/
 * and their photos in public/images/blog/<post>/, so they deploy with the
 * site like any other change.
 *
 * Storage: on this computer the editor writes straight to disk. Once the
 * repo is on GitHub, set NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO (e.g. "owner/repo")
 * and it saves posts as commits instead, so it works on the live site.
 */
const githubRepo = process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO;

export default config({
  storage: githubRepo
    ? { kind: "github", repo: githubRepo as `${string}/${string}` }
    : { kind: "local" },
  ui: {
    brand: { name: "Matt Stacy · Blog" },
  },
  collections: {
    posts: collection({
      label: "Blog posts",
      slugField: "title",
      path: "content/blog/*",
      format: { contentField: "content" },
      entryLayout: "content",
      columns: ["title", "publishedAt"],
      schema: {
        title: fields.slug({
          name: { label: "Title", validation: { isRequired: true } },
          slug: {
            label: "Web address",
            description: "The end of the post's URL. Don't change it once the post is live.",
          },
        }),
        publishedAt: fields.date({
          label: "Published",
          validation: { isRequired: true },
        }),
        excerpt: fields.text({
          label: "Excerpt",
          description: "One or two sentences. Shown on the blog page and in search results.",
          multiline: true,
          validation: { isRequired: true, length: { max: 300 } },
        }),
        cover: fields.image({
          label: "Cover photo",
          directory: "public/images/blog",
          publicPath: "/images/blog/",
          validation: { isRequired: true },
        }),
        coverAlt: fields.text({
          label: "Cover photo description",
          description: "What's in the photo, for screen readers and image search.",
          validation: { isRequired: true },
        }),
        featured: fields.checkbox({
          label: "Feature on the blog page",
          description:
            "Leads the blog page as a full-width photo. If several are ticked, the newest wins; if none, the newest post leads.",
        }),
        categories: fields.multiselect({
          label: "Categories",
          options: [...BLOG_CATEGORIES],
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value,
        }),
        content: fields.markdoc({
          label: "Post",
          options: {
            image: {
              directory: "public/images/blog",
              publicPath: "/images/blog/",
            },
          },
          components: {
            gallery: wrapper({
              label: "Photo gallery",
              description: "Several photos side by side. Add the photos inside it.",
              schema: {},
            }),
            youtube: block({
              label: "YouTube video",
              schema: {
                url: fields.url({
                  label: "YouTube link",
                  validation: { isRequired: true },
                }),
                title: fields.text({
                  label: "Video title",
                  description: "Read out by screen readers.",
                }),
              },
            }),
          },
        }),
      },
    }),
  },
});
