# Dharshini Laboratory, Guduvancheri / Kayarambedu — Next.js Website

Official website for **Dharshini Laboratory** (Diagnostic Center / Pathology & Blood Testing Centre), located at SP MAHAL, Anna street, Nellikuppam Rd, opposite Guduvancheri, Kameshwary Nagar, Moolakazhani, Kayarambedu, Tamil Nadu 603202. Established in 2010 (15+ years serving Guduvancheri, Kayarambedu, and Urapakkam).

Built with **Next.js (App Router)** with real static pre-rendering at build time, high performance WebP image optimization, responsive design, GSAP animations, and comprehensive SEO (Schema.org `DiagnosticLab` / `MedicalBusiness`, Open Graph cards, sitemap, robots, responsive meta).

---

## Clinic Information (Source of Truth: Google Maps)

- **Business Name**: Dharshini Laboratory
- **Category**: Diagnostic Center / Pathology Labs / Blood Testing Centre
- **Address**: SP MAHAL, Anna street, Nellikuppam Rd, opposite Guduvancheri, Kameshwary Nagar, Moolakazhani, Kayarambedu, Tamil Nadu 603202
- **Coordinates**: 12.8164521, 80.0768841 (Plus Code: `7M42R38G+HQ`)
- **Phone**: [+91 99628 99950](tel:+919962899950) / 099628 99950
- **WhatsApp**: [+91 99628 99950](https://wa.me/919962899950)
- **Hours**: Monday – Sunday (All 7 Days): 6:30 AM – 9:00 PM
- **Established**: 2010 (15+ Years)
- **Key Services**:
  - Complete Blood Count (CBC) & Hemogram
  - Fasting Blood Sugar (FBS), PPBS & HbA1c Glycated Hemoglobin
  - Thyroid Profile (TSH, Total T3, Total T4)
  - Lipid Panel & Cardiac Risk Assessment
  - Liver Function Tests (LFT) & Kidney Function Tests (KFT)
  - Routine & Microscopic Urine / Stool Analysis
  - Doorstep Home Blood & Specimen Sample Collection

---

## Run it locally

```bash
npm install
npm run dev        # → http://localhost:3000
```

Production build (static export → `./out`, deploy to any static host):

```bash
cp .env.example .env         # set NEXT_PUBLIC_SITE_URL to your real domain first
npm run build                # runs image pipeline, then `next build`
npm run preview              # serves ./out on http://localhost:3000
```

> **Set `NEXT_PUBLIC_SITE_URL` before building.** It is baked into canonical links, Open Graph URLs, `sitemap.xml`, `robots.txt` and JSON-LD. Without it, the build falls back to `http://localhost:3000`.

---

## Images

`npm run images` (also runs automatically before every build) uses `sharp` to:
- Generate WebP variants at 480 / 768 / 1080 / 1440 px for laboratory photos.
- Render 1200×630 social OG cards → `public/og/<page>.jpg`.
- Produce SVG/PNG icons and touch icons.
- Write `src/lib/image-manifest.json` with dimensions and variant mappings.

Genuine photos sourced directly from Google Maps listing:
- `public/clinic-assets/dharshini-lab-reception.jpg` (Reception, phlebotomy workstation, waiting area)
- `public/clinic-assets/dharshini-lab-exterior.jpg` (Nellikuppam Road clinic building opposite SP MAHAL)

---

## Project layout

```
scripts/optimize-images.mjs   build-time image pipeline
src/
  app/                    Next.js App Router — routes
    layout.jsx            root <html>, fonts, site-wide metadata, DiagnosticLab JSON-LD
    page.jsx              /            (Home page + DiagnosticLab & FAQ schema)
    about-us/page.jsx     /about-us/   (History, laboratory standards, sterile protocol)
    treatments/page.jsx   /treatments/ (Test directory, sample requirements, fasting guidelines)
    gallery/page.jsx      /gallery/    (Laboratory exterior & interior gallery)
    testimonials/page.jsx /testimonials/ (Quality commitments, sterile standards & FAQs)
    contact/page.jsx      /contact/    (Google Maps embed, directions, contact details)
    not-found.jsx         404 page (noindex)
    sitemap.js            → /sitemap.xml
    robots.js             → /robots.txt
    manifest.js           → /manifest.webmanifest
  views/                  page bodies
  sections/               home-page sections (Hero, Services, Process, Quality Standards, FAQ, Contact)
  components/             Navbar, BookingModal, BookingForm, FloatingDock, AppShell, JsonLd
  context/ScrollContext   scroll state, booking-modal open/close state
  lib/anim.jsx            MaskText / Counter / Magnetic (GSAP)
  lib/Icons.jsx           inline SVG icon set
  lib/seo.js              pageMetadata(), ogCard(), breadcrumbJsonLd()
  lib/images.js           img() helper + image-manifest.json
  config.js               clinic details, coordinates, hours, phone, WhatsApp
  data.js                 diagnostic tests, lab protocols, FAQs, gallery items, nav links
  styles/                 base.css + sections.css
public/                   clinic-assets, favicon, generated optimized/ and og/
```

---

## Deployment

`out/` contains static HTML pages, JSON-LD, sitemap, and assets ready for zero-configuration hosting on Vercel, Netlify, Cloudflare Pages, S3/CloudFront, GitHub Pages, or any web server.
