# Dr. Dhananjayas Hospitals, Porur — Next.js site

Ayurvedic Piles, Fistula (Kshara Sutra) & Fissure hospital website for the
**Porur branch only** (6, Pillayar Koil St, Astalakshmi Nagar, Porur, Chennai),
led by Dr. Venkhatesan. Other branches and the group's other websites are
deliberately not mentioned or linked.

This is the **Next.js (App Router) port** of the original Vite + React single-page
app in `../Dhananjayas-Clinic`. Same design, same content, same GSAP animations —
but every page is **pre-rendered to real HTML at build time** and carries a full
SEO layer (per-page metadata, social cards, structured data, responsive images,
sitemap, robots, real 404).

## Why this is more SEO-friendly than the Vite SPA

| | Vite SPA (old) | Next.js (this folder) |
|---|---|---|
| HTML crawlers receive | an empty `<div id="root">` — content only after JS runs | the full page text, headings, links and images, including every tab panel |
| `<title>` / meta description | one shared set for all six pages | unique, keyword-first title and ≤160-char description per page, plus canonical URL |
| Link previews (WhatsApp, Facebook, X) | one shared portrait image for every URL | per-page 1200×630 card (`public/og/`) with its own title/description |
| Images | full-size JPG/PNG (up to 1.2 MB each), no dimensions → layout shift | `width`/`height` + WebP `srcset` (≈5–10× smaller), lazy-loaded, hero preloaded |
| Unknown URLs | home page with HTTP 200 (a "soft 404") | a real `404.html` with `noindex` |
| `sitemap.xml` / `robots.txt` | none | generated at build, with image entries and `max-image-preview:large` |
| Structured data | one MedicalClinic block | WebSite + both clinic locations + treatments, FAQPage, BreadcrumbList, Physician, MedicalWebPage, ImageGallery, ContactPage |
| Fonts | Google Fonts CDN request | self-hosted via `next/font` (no third-party request, no layout shift) |
| Icons / manifest | SVG favicon only | SVG + PNG favicons, Apple touch icon, `manifest.webmanifest` |

## Run it locally

```bash
npm install
npm run dev        # → http://localhost:3000
```

Production build (static export → `./out`, deploy to any static host):

```bash
cp .env.example .env         # set NEXT_PUBLIC_SITE_URL to your real domain first
npm run build                # runs the image pipeline, then `next build`
npm run preview              # serves ./out on http://localhost:3000
```

> **Set `NEXT_PUBLIC_SITE_URL` before building.** It is baked into the canonical
> links, Open Graph URLs, `sitemap.xml`, `robots.txt` and JSON-LD. Without it the
> build falls back to `http://localhost:3000` and prints a warning.
> Optional: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_BING_SITE_VERIFICATION`
> add the Search Console / Bing ownership `<meta>` tags.

## Images

`npm run images` (also runs automatically before every build) uses `sharp` to:

- generate WebP variants at 480 / 768 / 1080 / 1440 px (capped at the original
  width) for every image referenced from `src/` → `public/optimized/…`
- render the six 1200×630 social cards → `public/og/<page>.jpg`
- rasterise `favicon.svg` into PNG favicons and the Apple touch icon → `public/icons/`
- write `src/lib/image-manifest.json` (intrinsic size + variant list)

`src/lib/images.js` turns a manifest entry into `<img>` attributes:

```jsx
<img {...img('/images/treatments/piles.jpg', { sizes: SIZES.third })} alt="…" className="svc-card__image" />
```

The element stays a plain `<img>` (existing CSS applies unchanged); it just gains
`width`, `height`, `srcSet`, `sizes`, `loading` and `decoding`. Pass
`priority: true` for the above-the-fold image and `dimensions: false` for
lightbox images that use `object-fit: contain`.

The generated files are committed so `next dev` and hosts without `sharp` work;
re-run the script after adding or replacing a photo. It only re-encodes what changed.

## Deploying

`out/` contains `index.html`, `about-us/index.html`, `treatments/index.html`, …,
`404.html`, `sitemap.xml`, `robots.txt`, `manifest.webmanifest` and all assets.
Upload the folder to any static host (S3/CloudFront, Netlify, Cloudflare Pages,
GitHub Pages, nginx, Apache, Hostinger…). No rewrite rules are needed because
`trailingSlash: true` produces a folder per route.

On **Vercel**, just import the repo — it detects Next.js and the static export.

If you ever need server features (a real booking API route, on-demand image
optimisation, ISR), delete `output: 'export'` from `next.config.mjs` and deploy
to a Node host or Vercel; nothing else has to change.

After going live: submit `https://<your-domain>/sitemap.xml` in Google Search
Console, and check a page in the Rich Results Test (FAQ + breadcrumbs should show).

## Project layout

```
scripts/optimize-images.mjs   build-time image pipeline (see above)
src/
  app/                    Next.js App Router — one folder per URL
    layout.jsx            root <html>, fonts, site-wide metadata, JSON-LD graph, AppShell
    page.jsx              /            (+ FAQPage JSON-LD, hero image preload)
    about-us/page.jsx     /about-us/   (+ Breadcrumb, Physician ×2)
    treatments/page.jsx   /treatments/ (+ Breadcrumb, MedicalWebPage with conditions)
    gallery/page.jsx      /gallery/    (+ Breadcrumb, ImageGallery)
    testimonials/page.jsx /testimonials/ (+ Breadcrumb)
    contact/page.jsx      /contact/    (+ Breadcrumb, ContactPage)
    not-found.jsx         404 page (noindex)
    sitemap.js            → /sitemap.xml (with image entries)
    robots.js             → /robots.txt
    manifest.js           → /manifest.webmanifest
  views/                  page bodies (what used to be src/pages/*.jsx)
  sections/               home-page sections (Hero, Services, FAQ, …)
  components/             Navbar, BookingModal, BookingForm, FloatingDock, AppShell, JsonLd, JsonLdScript, …
  context/ScrollContext   scroll subscriptions, scroll lock, booking-modal state
  lib/anim.jsx            MaskText / Counter / Magnetic (GSAP)
  lib/Icons.jsx           inline SVG icon set
  lib/seo.js              pageMetadata(), ogCard(), breadcrumbJsonLd(), robots, verification, @id anchors
  lib/images.js           img() helper + image-manifest.json
  config.js               clinic name, phones, WhatsApp, branches (+ schema.org address/hours), SITE_URL
  data.js                 services, doctors, testimonials, gallery, FAQs, nav links
  styles/                 base.css + sections.css (unchanged except font tokens and a `[hidden]` rule)
public/                   images, favicon, generated optimized/ og/ icons/
```

`page.jsx` files are Server Components: they export the page's `metadata` and
render a view plus that page's JSON-LD. Anything that uses hooks, GSAP or `window`
is marked `'use client'` — it is still pre-rendered to HTML, it just also hydrates.

## Make it yours

1. **`src/config.js`** — clinic name, phones, WhatsApp, addresses, hours, `SITE_URL`.
   Every CTA and every JSON-LD block read from here.
2. **`src/data.js`** — services, doctors, testimonials, gallery, FAQs, nav links.
3. **Per-page SEO** — edit the `pageMetadata({...})` call at the top of each
   `src/app/**/page.jsx` (title, description). Social-card source photos are
   listed in `OG_CARDS` inside `scripts/optimize-images.mjs`.
4. **Booking API** — the form still simulates a request. Wire the real call in
   `src/components/BookingForm.jsx` → `submit()` (marked with a 🔌 comment).
   With static export, point it at an external endpoint; with a server deploy you
   can add `src/app/api/appointments/route.js` instead.

## What changed from the Vite version (besides the framework)

- `react-router-dom` → Next.js file-based routing (`next/link`, `usePathname`).
- `locomotive-scroll` removed — it was in `package.json` but never used.
- `src/pages/*` → `src/views/*` (a `pages/` folder has special meaning in Next.js).
- Treatments and Procedure-Guide tabs render **all** panels (inactive ones carry
  the `hidden` attribute) so every treatment's text is indexable; proper
  `tablist` / `tab` / `tabpanel` ARIA wiring was added at the same time.
- Preloader heading is a `<p>` instead of a second `<h1>` per page.
- Tamil text carries `lang="ta"`; doctor photos have descriptive alt text.
- Content is scoped to the Porur branch: one address, one doctor (Dr. Venkhatesan, with a
  `DoctorSpotlight` component replacing the multi-doctor rail), one phone/WhatsApp number
  (+91 97907 47350) and no links to other branches or websites.
- Closing CTA panels on the gallery and reviews pages now sit inside the dark `.ctab__panel`
  (their white text was invisible on the page background).
- Desktop navbar (≥1141px) uses short labels from `NAV_LINKS[].short` (About, Gallery, Reviews, Contact),
  40px icon buttons for phone and WhatsApp, and a non-shrinking link row — the old build let the last
  link overflow under the phone number on 1280–1536px laptops. Footer and mobile menu keep the full labels.
- Booking form resolves "today" on the client (a build-time date would go stale).
- Fixed three headlines that displayed a literal `&amp;`, and added the missing
  `search`, `play` and `map-pin` icons that previously rendered as empty SVGs.
- `Insurance.jsx` and `VideoGallery.jsx` were **not** ported: they were unused and
  referenced data (`INSURERS`, `YOUTUBE_VIDEOS`, `CLINIC.youtube`) that doesn't exist.
- No Review / AggregateRating markup on purpose — Google treats a business marking
  up reviews of itself as self-serving and ignores it.

## Performance notes

- Native scrolling on every device; GSAP ScrollTrigger for reveals.
- All animations are transform/opacity only; marquees are pure CSS.
- `prefers-reduced-motion` disables reveals, cursor and smooth scroll.
- Hero image is preloaded with `fetchpriority="high"`; everything else is lazy.
