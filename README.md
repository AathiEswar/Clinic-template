# Dream Smile Dental and Orthodontic care, Guduvanchery — Next.js Website

Official website for **Dream Smile Dental and Orthodontic care** (Multi-Specialty Dental Clinic & Orthodontic Care Centre), located on Nellikuppam Road, Above SBI - Kayarambedu Branch, Opp. SP Mahal, Guduvanchery, Moolakazhani, Tamil Nadu 603202. Led by **Dr. Rubiya Sayed (BDS, MDS - Orthodontist)** with 15+ years of clinical experience.

Built with **Next.js (App Router)** with static pre-rendering, responsive WebP image optimization, GSAP animations, and comprehensive SEO (Schema.org `Dentist` / `MedicalBusiness`, Open Graph cards, sitemap, robots, responsive meta).

---

## Clinic Information (Source of Truth: Google Maps)

- **Business Name**: Dream Smile Dental and Orthodontic care
- **Category**: Dental Clinic / Orthodontist / Dental Care Centre
- **Doctor**: Dr. Rubiya Sayed (BDS, MDS - Orthodontics and Dentofacial Orthopaedics)
- **Experience**: 15+ Years Clinical Experience
- **Address**: Nellikuppam Road, Above SBI - Kayarambedu Branch, Opp. SP Mahal, Guduvanchery, Moolakazhani, Tamil Nadu 603202
- **Coordinates**: 12.8146924, 80.076715 (Plus Code: `7M42R37G+VM`)
- **Phone**: [+91 80984 80982](tel:+918098480982) / 080984 80982
- **WhatsApp**: [+91 80984 80982](https://wa.me/918098480982)
- **Hours**:
  - Monday – Saturday: 9:30 AM – 2:00 PM & 5:00 PM – 9:00 PM
  - Sunday: 10:00 AM – 2:00 PM
- **Key Services**:
  - Specialized Orthodontic Braces (Metal, Ceramic, Self-Ligating)
  - Clear Invisible Aligners & Smile Alignment
  - Painless Single-Sitting Root Canal Treatments (RCT)
  - Zirconia & Aesthetic Ceramic Dental Crowns
  - Permanent Titanium Dental Implants & Bridges
  - Cosmetic Smile Designing, Teeth Whitening & Veneers
  - Child-Friendly Pediatric Dental Care & Preventive Therapy
  - Ultrasonic Teeth Cleaning (Scaling), Polishing & Gum Care

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
- Generate WebP variants at 480 / 768 / 1080 / 1440 px for clinic photos.
- Render 1200×630 social OG cards → `public/og/<page>.jpg`.
- Produce SVG/PNG icons and touch icons.
- Write `src/lib/image-manifest.json` with dimensions and variant mappings.

Genuine photos sourced directly from Google Maps listing:
- `public/clinic-assets/dream-smile-operatory-main.jpg` (Advanced dental operatory suite & UV chamber)
- `public/clinic-assets/dream-smile-consultation-room.jpg` (Dr. Rubiya Sayed consultation room & degrees)
- `public/clinic-assets/dream-smile-xray-chair.jpg` (Digital intraoral X-ray & operatory unit)
- `public/clinic-assets/dream-smile-reception-lounge.jpg` (Patient reception & waiting corridor)
- `public/clinic-assets/dream-smile-doctor-desk.jpg` (Consultation desk & operatory view)
- `public/clinic-assets/dream-smile-waiting-area.jpg` (Air-conditioned patient waiting lounge)

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
  ---

## Quick Customization via `src/clinic.config.json`

Most of the website's content, metadata, contacts, and configuration are centralized in a single file:
👉 **[`src/clinic.config.json`](src/clinic.config.json)**

To update this clinic or reuse this template for a new clinic or diagnostic laboratory, simply update this JSON file:
- **`clinic`**: Name, phones, WhatsApp, address, coordinates, Google Maps links, timings, hours, city.
- **`hero`**: Main headlines, condition highlight words, sub-headline, and badge texts.
- **`trustStats`**: Numeric counters, suffixes, labels, and footer caption.
- **`services`**: List of tests/services with descriptions, icons, image paths, and tags.
- **`workflow`**: 3-step diagnostic/consultation workflow steps and descriptions.
- **`about`**: About story paragraphs, why-us bullet points, quote, and citation.
- **`patientGuide`**: Test preparation instructions (e.g. fasting, non-fasting, home collection).
- **`qualityStandards`**: Quality commitments and proof highlights.
- **`gallery`**: Photo categories and gallery items list.
- **`faqs`**: Common patient questions and answers.
- **`booking`**: Time slots, modal title, hints, and form field labels.
- **`seo`**: Page titles, descriptions, and Open Graph card data.

After editing `src/clinic.config.json`, run `npm run build` to compile the entire static site.

---

## Deployment

`out/` contains static HTML pages, JSON-LD, sitemap, and assets ready for zero-configuration hosting on Vercel, Netlify, Cloudflare Pages, S3/CloudFront, GitHub Pages, or any web server.
