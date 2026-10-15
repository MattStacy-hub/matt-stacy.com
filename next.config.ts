import type { NextConfig } from "next";
import { DEVICE_SIZES, IMAGE_SIZES } from "./src/lib/image-sizes";

/**
 * Response headers sent with every page and file.
 *
 * There is deliberately no script-src or style-src in the Content Security
 * Policy. Next.js inlines its own bootstrapping scripts, so a script policy
 * only works with a per-request nonce, and a nonce forces every page to render
 * on demand instead of being served as a static file. The site has no logins,
 * no user content and no third-party scripts, so that trade is not worth it
 * yet. Revisit it the day an analytics or embed script is added.
 *
 * What the policy does cover: nobody can frame the site (clickjacking), a
 * stray <base> tag cannot repoint relative URLs, forms can only post back to
 * this site, and plugins (<object>, <embed>) are off.
 */
const SECURITY_HEADERS = [
  {
    key: "Content-Security-Policy",
    value: [
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  // Two years, the length the HSTS preload list asks for.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Older browsers ignore frame-ancestors; this covers them.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  // Don't advertise the framework and version to anyone probing for exploits.
  poweredByHeader: false,

  // The old site's overview lived at /services-overview. Keep its links and
  // search ranking pointing at the new page.
  async redirects() {
    return [{ source: "/services-overview", destination: "/services", permanent: true }];
  },

  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },

  /**
   * Same arrangement as the Andes Adventure Visuals site: Vercel resizes each
   * photo to the width a screen needs, so a phone never downloads a 2560px
   * original. The `sizes` hint on each image picks the width. See
   * src/lib/image-sizes.ts.
   */
  images: {
    // WebP only. AVIF is smaller but roughly twice as slow to make on a first
    // request, doubles the copies Vercel stores, and is slower to decode.
    formats: ["image/webp"],
    deviceSizes: DEVICE_SIZES,
    imageSizes: IMAGE_SIZES,
    // Keep each resized copy for 31 days. Photos in public/ change rarely.
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
