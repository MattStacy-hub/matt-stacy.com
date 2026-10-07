# matt-stacy.com

Portfolio site for Matt Stacy, adventure photographer and filmmaker based in
Cusco, Peru. Built with Next.js (App Router), React, TypeScript and Tailwind
CSS, deployed on Vercel. Design follows the Matt Stacy brand guidelines v2.0.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build; also type-checks
npm run lint
```

Node 20.9 or newer (see `.nvmrc`).

## Where things live

```
src/
  app/                  routes, root layout, robots.txt, sitemap.xml, icons
  components/
    brand/              the petroglyph mark and the lockup
    layout/             site header (with the Services dropdown) and footer
    home/               one file per homepage section
    seo/                JSON-LD structured data
  data/
    site.ts             name, canonical URL, contact details, default search snippet
    navigation.ts       the main menu
    services.ts         the four services (homepage, dropdown and structured data read this)
    home.ts             homepage photos, locations, FAQ, field note, client logos
  lib/
    seo.ts              page metadata and structured-data builders
    image-sizes.ts      widths the image optimizer produces
public/
  brand/                mark, share image
  images/locations/     photographs, by region then place (same layout as the AAV site)
```

Copy and photo choices live in `src/data/`, not in the components, so a wording
change never means touching layout code.

## Principles carried over from the Andes Adventure Visuals site

- **One source of truth.** Contact details, the canonical host and services are
  defined once in `src/data/` and read everywhere else.
- **Canonical host.** `SITE_CONFIG.url` is the `www` address that answers
  without a redirect. Canonicals, the sitemap and robots.txt build from it.
- **Images through the optimizer.** `next/image` everywhere with an honest
  `sizes` hint; WebP only; four widths; 31-day cache. The lightbox requests the
  same optimizer widths, so nobody downloads an original.
- **Metadata through one helper.** Every route calls `pageMetadata()` in
  `src/lib/seo.ts`.
- **No scroll listeners that re-render.** The header uses an
  IntersectionObserver.
- **Comments say why**, not what.

## Security

- **Response headers** (`next.config.ts`): HSTS, `X-Content-Type-Options`,
  `X-Frame-Options`/`frame-ancestors`, `Referrer-Policy`, `Permissions-Policy`,
  and a CSP that blocks framing, `<base>` hijacking, off-site form posts and
  plugins. There is no `script-src` yet; the comment in `next.config.ts` says why
  and when to add one.
- **No framework fingerprint.** `poweredByHeader: false`.
- **Patched dependencies.** Versions are pinned. `npm audit --omit=dev` reports
  nothing. Run it before each deploy.
- **Fonts served from this site.** `next/font` bundles Archivo and Fraunces at
  build time, so visitors' browsers never contact Google.
- **Structured data is escaped.** `JsonLd` escapes `<`, so no string can close
  its `<script>` tag.
- **Secrets stay out of git.** `.env*` is ignored. When the contact form
  arrives, follow the AAV `api/contact` route: cap the body size, cap every
  field, validate on the server, escape everything that reaches an email, take
  the subject line from server data rather than the request, and check that the
  SMTP variables exist before sending.

## Adding things

- **A photo:** put the WebP under `public/images/locations/<region>/<place>/`
  (no wider than 2560px), then add it to `src/data/home.ts` with its width,
  height, alt text, title and place.
- **Client logos:** add SVGs to `public/clients/` and list them in `CLIENTS` in
  `src/data/home.ts`. They're shown in one color, so source colors don't matter.
- **A page:** add the route under `src/app/`, use `pageMetadata({ path })`, and
  add it to `src/app/sitemap.ts`. A service page also needs `comingSoon: false`
  in `src/data/services.ts`, which turns on its dropdown link and its
  "Learn more" link.

## Not built yet

Portfolio, the five service pages, About, Blog and Contact. The menu links to
them; until they exist those links show the 404 page, and the Services dropdown
marks each service "Soon" instead of linking.
