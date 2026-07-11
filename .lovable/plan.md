## SEO Optimization Plan — Nile Stone Exports

Goal: make the site fully discoverable on Google (English + Arabic) for Egyptian stone export queries, with proper metadata, structured data, sitemap, and social previews.

### 1. Per-route head metadata (title, description, OG, canonical)
Currently only `__root.tsx`, `index.tsx` (missing head), and `marble-alternatives` have partial metadata. Add a proper `head()` to every route:

- `/` — title: "Egyptian Marble, Quartz & Stone Exporter | Nile Stone Exports" · description targeting "Egyptian stone exporter, marble alternatives, quartz slabs, raw quartz"
- `/about` — "About Nile Stone Exports — Registered Egyptian Export House"
- `/categories` — "Product Categories — Marble, Quartz Slabs & Raw Quartz"
- `/categories/marble-alternatives` — keep, tighten keywords
- `/categories/raw-quartz` — "Raw Quartz Aggregate from Egypt — 45µm to 1200µm Grades"
- `/categories/quartz-slabs` — "Engineered Quartz Slabs — EGY QUARTZ Collection"
- `/contact` — "Contact Nile Stone Exports — Request Export Quote"

Each route gets: `title`, `description`, `og:title`, `og:description`, `og:type`, `og:url` (relative), `twitter:card`, and `<link rel="canonical">` (relative — leaf only).

### 2. Structured data (JSON-LD)
- Root: `Organization` schema (name, logo, country: Egypt, contact, sameAs)
- Home: `WebSite` schema
- Category pages: `Product` or `ItemList` schema with grade specs
- Contact: `ContactPage` schema
- All pages: `BreadcrumbList`

### 3. Sitemap + robots.txt
- Create `src/routes/sitemap[.]xml.ts` server route listing all 7 routes
- Create `public/robots.txt` (Allow all, no Sitemap directive until domain is set — leave TODO)

### 4. Semantic HTML & accessibility fixes
- Ensure single `<h1>` per page (audit current pages)
- Add descriptive `alt` text on every `<img>` (hero, category thumbs, factory photos) — currently many use `alt=""`
- Add `loading="lazy"` where missing
- Ensure heading hierarchy (h1 → h2 → h3)

### 5. Language / i18n SEO
- Set `<html lang>` dynamically based on `useI18n` language (currently hardcoded `"en"`)
- Add `dir="rtl"` when Arabic
- Add `hreflang` alternate link tags (`en`, `ar`, `x-default`) once URL structure decided — for now, self-referential

### 6. Performance signals (SEO ranking factor)
- Preload hero image
- Ensure images have width/height to prevent CLS
- Font: already using `display=swap` ✓

### 7. Content-level keyword targeting
Bake keywords naturally into H1/H2 and first paragraph of each page:
- "Egyptian marble exporter", "quartz slabs Egypt", "raw quartz aggregate supplier", "marble alternative panels FOB Egypt"

### Not included (needs your input)
- **og:image** — needs a real hero image at an absolute URL. I'll omit for now (hosting injects a screenshot) unless you want me to generate branded social cards.
- **Sitemap domain** — will use empty BASE_URL placeholder until you set a custom domain.
- **Organization contact info** — currently placeholder (Nile Stone Exports, Ain Sokhna). Will use those in JSON-LD; swap later when you provide real data.

### Files to change
- edit: `src/routes/__root.tsx` (dynamic lang/dir, Organization JSON-LD)
- edit: `src/routes/index.tsx` (add head, WebSite JSON-LD, alt text, h1 audit)
- edit: `src/routes/about.tsx`, `categories.index.tsx`, `categories.raw-quartz.tsx`, `categories.quartz-slabs.tsx`, `categories.marble-alternatives.tsx`, `contact.tsx` (head + JSON-LD + alt/h1 fixes)
- create: `src/routes/sitemap[.]xml.ts`
- create: `public/robots.txt`

After implementation I'll suggest running the SEO scan to verify.
