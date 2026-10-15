/**
 * Escape a value for interpolation into an HTML string. The inquiry email is
 * built by string concatenation, so anything a visitor types would otherwise
 * land in it as live markup.
 */
export function escapeHtml(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
