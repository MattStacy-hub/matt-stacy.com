/**
 * Renders structured data for search engines.
 *
 * JSON.stringify does not escape "<", so a string containing "</script>"
 * would close the tag early and anything after it would run as HTML. None of
 * today's data comes from visitors, but blog titles and CMS fields will one
 * day, so every "<" is written as its unicode escape. JSON parsers read it
 * back as the same character.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
