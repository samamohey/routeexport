# Rename site to "Route Export" + remove Ain Sokhna address

## Goal

1. Rebrand the site from **Nile Stone Exports** → **Route Export** (visible brand + all SEO/meta/JSON-LD).
2. Change the published URL slug from `nile-exports` → `routeexport` (so the live site becomes `routeexport.lovable.app`).
3. Remove every "Ain Sokhna" company address/facility reference — the address becomes **Cairo, Egypt** only.

## Naming conventions

- Visible brand in header/footer (uppercase CSS): `ROUTE EXPORT`
- Brand in prose, titles, meta, JSON-LD: `Route Export`
- SEO title suffix pattern: `| Nile Stone` / `| Nile Stone Exports` → `| Route Export`
- New domain: `https://routeexport.lovable.app` (replaces `https://nile-exports.lovable.app`)
- Email: `export@nilestone.example` → `export@routeexport.example`

## Edits per file

**Brand + URL + address (core)**

- `src/components/site-header.tsx` — `NILE STONE EXPORTS` → `ROUTE EXPORT`.
- `src/components/site-footer.tsx` — brand text → `ROUTE EXPORT`; `© … Nile Stone Exports.` → `Route Export.`; address `Cairo · Ain Sokhna, Egypt` → `Cairo, Egypt`; email → `export@routeexport.example`.
- `src/routes/__root.tsx` — meta (author, og:site_name, title, og:title, twitter:title, description, og:description, twitter:description) brand → `Route Export`; hreflang links + JSON-LD Organization `url`/`logo` → `routeexport.lovable.app`; Organization `name` → `Route Export`; address `addressLocality` `Ain Sokhna`→`Cairo`, `addressRegion` `Suez`→`Cairo`.

**Home**

- `src/routes/index.tsx` — title/og:title brand → `Route Export`; og:url + canonical → `routeexport.lovable.app`; JSON-LD WebSite `name`→`Route Export`, `url`→`routeexport.lovable.app`; "Why Nile Stone" label → "Why Route Export"; alt `…Nile Stone Exports partner factory floor in Ain Sokhna, Egypt` → `…Route Export factory floor in Cairo, Egypt`; facility card `Ain Sokhna · Suez Governorate` → `Cairo · Egypt`.

**About**

- `src/routes/about.tsx` — title/og:title `About Nile Stone Exports…` → `About Route Export…`; og:url + canonical → `routeexport.lovable.app`; alt `…operated by Nile Stone Exports partners` → `…operated by Route Export partners`.

**Contact**

- `src/routes/contact.tsx` — title/og:title/og:description/JSON-LD `Nile Stone Exports` → `Route Export`; og:url + canonical → `routeexport.lovable.app`; address EN `Cairo · Ain Sokhna, Egypt` → `Cairo, Egypt`, AR `القاهرة · العين السخنة، مصر` → `القاهرة، مصر`; email → `export@routeexport.example`.

**Category pages** (marble-alternatives, raw-quartz, quartz-slabs, fertilizers, techno-valley, + categories.index)

- Each: title/og:title `| Nile Stone` → `| Route Export`; og:url + canonical → `routeexport.lovable.app`; JSON-LD `brand.name` `Nile Stone Exports` → `Route Export`; breadcrumb JSON-LD URLs → `routeexport.lovable.app`.
- `categories.index.tsx` description `Nile Stone Exports'` → `Route Export's`.

**Infrastructure**

- `src/routes/sitemap[.]xml.ts` — `BASE_URL` → `https://routeexport.lovable.app`.
- `public/robots.txt` — `Sitemap:` → `https://routeexport.lovable.app/sitemap.xml`.
- `src/components/breadcrumbs.tsx` — `breadcrumbJsonLd` base → `https://routeexport.lovable.app`.

## Judgment call — raw quartz geological source (kept)

`src/routes/categories.raw-quartz.tsx` references "Mount Kamiliya, Ain Sokhna" as the **mine where the quartz is extracted** (lines 33, 171, 242). This is product sourcing data, not the company address. Removing it would make the spec sheet inaccurate, so it stays unchanged. Only brand/url edits apply to this file. If you want the mine location hidden too, say so and I'll genericize it to "Egypt".

## Verification

1. `rg -i "nile stone|nilestone|nile-exports" src/ public/` returns nothing.
2. `rg -i "ain sokhna|سخنه|السخنة" src/components src/routes/__root.tsx src/routes/contact.tsx src/routes/index.tsx` returns nothing (raw-quartz mine source intentionally remains).
3. Production build passes.
4. Publish with the new slug `routeexport` (only when you're ready to go live) — this is the action that actually renames the Lovable URL.

## Note on URL change timing

The code edits point canonical/og:url/sitemap at `routeexport.lovable.app`, but that URL only exists after publishing with the new slug. Until then the preview keeps the old preview URL — the new domain goes live when you publish. I'll do the publish-with-slug step last, once you confirm.
