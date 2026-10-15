"use client";

import { useEffect } from "react";

/**
 * A link to the page you're already on (the logo on the homepage, "Blog" on
 * the blog) goes back to the top. Next.js leaves the scroll where it is for
 * these, since the URL doesn't change. Links to a #section are left alone.
 */
export function SamePageLinkTop() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      // Not defaultPrevented: next/link always cancels the browser's own navigation.
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element).closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement) || link.target === "_blank") return;
      const url = new URL(link.href);
      if (url.origin !== location.origin || url.hash) return;
      if (url.pathname === location.pathname && url.search === location.search) {
        // Instant: next/link re-renders the same page, which would cut a smooth scroll short.
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
