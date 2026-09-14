#!/usr/bin/env node
/**
 * Build-time image pipeline.
 *
 * Runs automatically before `next build` (see the `prebuild` script) and by hand
 * with `npm run images`. It is idempotent: an output is only re-encoded when its
 * source image is newer.
 *
 *  1. Responsive WebP variants for every raster image referenced from src/
 *       public/images/x.jpg  →  public/optimized/images/x-480.webp, x-768.webp, …
 *  2. 1200×630 Open Graph cards for link previews (WhatsApp, Facebook, X, LinkedIn)
 *       →  public/og/<page>.jpg
 *  3. PNG icons rasterised from public/favicon.svg (PWA manifest + Apple touch icon)
 *       →  public/icons/
 *  4. src/lib/image-manifest.json — intrinsic width/height + variant list, read by
 *     src/lib/images.js to put width/height/srcset/sizes on the existing <img> tags.
 *
 * The generated files ARE committed, so `next dev` and hosts without `sharp`
 * still work; this script simply refreshes them.
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');
const SRC = path.join(ROOT, 'src');
const MANIFEST = path.join(SRC, 'lib', 'image-manifest.json');

const OUT_DIR = 'optimized';
const WIDTHS = [480, 768, 1080, 1440];
const MAX_WIDTH = 1600;
const WEBP = { quality: 78, effort: 4 };

const OG_SIZE = { width: 1200, height: 630 };
/** page slug → source photo, centre-cropped towards the most "interesting" region */
const OG_CARDS = {
  home: '/images/piles-discomfort-hero.jpg',
  'about-us': '/clinic-assets/doctor-photo-40.jpg',
  treatments: '/images/treatments/fistula.jpg',
  gallery: '/clinic-assets/gallery-6.jpg',
  testimonials: '/piles-treatment-banner.png',
  contact: '/clinic-assets/hero-bg-55.png',
};

const THEME = '#086375';
const ICONS = [
  { file: 'icons/favicon-32.png', size: 32 },
  { file: 'icons/icon-192.png', size: 192 },
  { file: 'icons/icon-512.png', size: 512 },
  // iOS draws its own rounded corners and paints transparency black → flatten onto brand teal
  { file: 'icons/apple-touch-icon.png', size: 180, flatten: true },
];

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.warn(
    '[images] `sharp` is not installed — skipping image generation. ' +
      'The committed files in public/optimized, public/og and public/icons will be used as-is.'
  );
  process.exit(0);
}

const log = (...a) => console.log('[images]', ...a);

/* ───────────────────────── helpers ───────────────────────── */

async function walk(dir, out = []) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p, out);
    else if (/\.(jsx?|mjs|css)$/.test(e.name)) out.push(p);
  }
  return out;
}

/** Every "/…​.jpg|.png" literal used anywhere in src/ (JSX src, data files, inline url()). */
async function referencedImages() {
  const re = /['"`(](\/[A-Za-z0-9._/-]+?\.(?:jpe?g|png))(?=['"`)\s?#])/g;
  const found = new Set();
  for (const file of await walk(SRC)) {
    const text = await fs.readFile(file, 'utf8');
    for (const m of text.matchAll(re)) {
      const p = m[1];
      if (p.startsWith(`/${OUT_DIR}/`) || p.startsWith('/og/') || p.startsWith('/icons/')) continue;
      found.add(p);
    }
  }
  const existing = [];
  for (const p of [...found].sort()) {
    try {
      await fs.access(path.join(PUBLIC, p));
      existing.push(p);
    } catch {
      console.warn(`[images] referenced but missing in public/: ${p}`);
    }
  }
  return existing;
}

async function isFresh(out, srcStat) {
  try {
    return (await fs.stat(out)).mtimeMs >= srcStat.mtimeMs;
  } catch {
    return false;
  }
}

const ensureDir = (file) => fs.mkdir(path.dirname(file), { recursive: true });

/** Width/height after EXIF orientation is applied (what the browser will display). */
async function orientedSize(input) {
  const m = await sharp(input).metadata();
  const swap = (m.orientation || 1) >= 5;
  return { width: swap ? m.height : m.width, height: swap ? m.width : m.height };
}

/* ───────────────────────── 1. responsive variants ───────────────────────── */

async function buildVariants(src) {
  const input = path.join(PUBLIC, src);
  const stat = await fs.stat(input);
  const { width, height } = await orientedSize(input);

  const largest = Math.min(width, MAX_WIDTH);
  const widths = [...new Set([...WIDTHS.filter((w) => w < largest), largest])].sort((a, b) => a - b);

  const ext = path.extname(src);
  const base = src.slice(0, -ext.length);
  const variants = [];
  let generated = 0;

  for (const w of widths) {
    const rel = `/${OUT_DIR}${base}-${w}.webp`;
    const out = path.join(PUBLIC, rel);
    if (!(await isFresh(out, stat))) {
      await ensureDir(out);
      await sharp(input).rotate().resize({ width: w, withoutEnlargement: true }).webp(WEBP).toFile(out);
      generated++;
    }
    variants.push({ w, src: rel });
  }
  return { entry: { width, height, variants }, generated };
}

/* ───────────────────────── 2. Open Graph cards ───────────────────────── */

async function buildOgCards() {
  let n = 0;
  for (const [name, src] of Object.entries(OG_CARDS)) {
    const input = path.join(PUBLIC, src);
    const out = path.join(PUBLIC, 'og', `${name}.jpg`);
    const stat = await fs.stat(input);
    if (await isFresh(out, stat)) continue;
    await ensureDir(out);
    await sharp(input)
      .rotate()
      .resize({ ...OG_SIZE, fit: 'cover', position: sharp.strategy.attention })
      .flatten({ background: '#ffffff' })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(out);
    n++;
  }
  return n;
}

/* ───────────────────────── 3. icons ───────────────────────── */

async function buildIcons() {
  const svgPath = path.join(PUBLIC, 'favicon.svg');
  const stat = await fs.stat(svgPath);
  const svg = await fs.readFile(svgPath);
  let n = 0;
  for (const { file, size, flatten } of ICONS) {
    const out = path.join(PUBLIC, file);
    if (await isFresh(out, stat)) continue;
    await ensureDir(out);
    // favicon.svg has an 80-unit viewBox; raise the density so it rasterises crisply at `size`
    let pipe = sharp(svg, { density: Math.ceil((72 * size) / 80) }).resize(size, size);
    if (flatten) pipe = pipe.flatten({ background: THEME });
    await pipe.png().toFile(out);
    n++;
  }
  return n;
}

/* ───────────────────────── run ───────────────────────── */

const started = Date.now();
const images = await referencedImages();

const manifest = {};
let generated = 0;
for (const src of images) {
  const { entry, generated: g } = await buildVariants(src);
  manifest[src] = entry;
  generated += g;
}
await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');

const og = await buildOgCards();
const icons = await buildIcons();

log(
  `${images.length} source images → ${Object.values(manifest).reduce((n, e) => n + e.variants.length, 0)} WebP variants ` +
    `(${generated} encoded, rest up to date), ${og} OG cards, ${icons} icons written in ${Date.now() - started} ms`
);
