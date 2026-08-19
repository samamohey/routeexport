# SEO, Performance & Accessibility Overhaul

Goal: take the site from "good basics" to a production-grade, Lighthouse-ready SEO setup across all 7 pages (Home, About, Contact, Categories, Marble Alternatives, Raw Quartz, Quartz Slabs).

## What already exists (verified)

- SSR is on by default (TanStack Start) — content is server-rendered.
- Per-route `head()` with title, description, og tags, canonical.
- Dynamic `sitemap.xml` route + `robots.txt` with Sitemap directive.
- Some JSON-LD (WebSite, Organization, Product, Breadcrumb).

## What will change

### 1. Metadata cleanup

- Move `og:image` / `twitter:image` off `__root.tsx` (root-level images override every child preview) into each leaf route, so each page can have its own preview image.
- Add `twitter:card`, `twitter:title`, `twitter:description` per page.
- Verify every route has a unique title (<60 chars), description (<160), self-referencing canonical and `og:url`.
- Add `hreflang` alternates (en/ar) and `og:locale`.

### 2. Structured data

- Root: `Organization` + `WebSite` (with SearchAction omitted since there's no search).
- Category pages: `BreadcrumbList` + `ItemList`/`Product` for the products shown.
- Contact page: `ContactPage` schema. No LocalBusiness (no public address/storefront).
- Product schema on marble catalog items pulled from the live feed.

### 3. Visible breadcrumbs

- New `Breadcrumbs` component (nav + ol + aria-label), rendered on all category and inner pages, matching the BreadcrumbList JSON-LD.

### 4. Semantic HTML & headings

- Audit each page: exactly one `h1`, no skipped levels, `header`/`nav`/`main`/`section`/`article`/`footer` used properly, `main` landmark present once.
- Reduce redundant wrapper divs where it doesn't affect design.

### 5. Images

- Replace the remaining external hotlinked image on the Home page (kayan CDN) with a local asset — also finishes removing the external brand link.
- Every `img`: descriptive `alt` (empty `alt=""` only for decorative), `loading="lazy"` (except the hero LCP image, which gets `fetchpriority="high"` + a `preload` link), explicit `width`/`height` to kill CLS.
- Serve local assets as WebP/AVIF variants via `vite-imagetools` at build time.

### 6. Performance

- Preload the LCP hero image and critical font; use `font-display: swap`.
- Lazy-load the factory video (`preload="none"` + poster) so it doesn't block LCP.
- Code-split heavy client-only pieces (framer-motion usage kept, but avoid animating above-the-fold LCP element).
- Confirm caching headers on the sitemap and API proxy route.

### 7. Accessibility

- ARIA labels on icon-only buttons (language toggle, mobile menu), visible focus rings, `aria-current` on active nav links.
- Contact form: every input gets a real `<label>`, `aria-describedby` for errors, `aria-live` for the submit result.
- Check gold-on-cream / cream-on-ink contrast ratios and adjust tokens if any pair falls below 4.5:1.
- Use `h-dvh` instead of `h-screen` where full-height is used.

### 8. Technical SEO

- Custom 404 page (`notFoundComponent`) with `noindex` and links back into the site.
- Sitemap: confirm it lists every indexable route and drops any 404/utility routes; no fabricated `lastmod`.
- robots.txt: keep `Allow: /`, add `Disallow: /api/`.
- Internal linking pass: descriptive anchor text, cross-links between the three category pages, footer link block covering all pages.

### 9. Icons & PWA

- Add `apple-touch-icon`, `site.webmanifest`, and `theme-color` meta. Keep the existing favicon.

### 10. Cleanup

- Remove `console.log`s, dead code, and unused imports/components.

### 11. Verification

- Run a production build and a Lighthouse pass against the built app; report the four scores and fix regressions before finishing. Note: hosting-level items (HTTPS, security headers, 301s) are handled by the Lovable platform, not app code — I'll flag anything I can't control.

## Technical notes

- Head tags stay in per-route `head()` (TanStack pattern); no react-helmet.
- `og:image` uses the absolute published URL `https://nile-exports.lovable.app/...`.
- Social platforms cache previews, so changed og images appear only after their re-scrape.
