/**
 * Responsive-image attributes for the site's plain <img> tags.
 *
 * `scripts/optimize-images.mjs` generates WebP variants + `image-manifest.json`;
 * this helper turns a manifest entry into the attributes a browser needs to
 * (a) reserve the right box before the image arrives — no layout shift — and
 * (b) download a right-sized WebP instead of the multi-megabyte original.
 *
 *   <img {...img('/images/<name>.jpg', { sizes: '(max-width: 720px) 100vw, 50vw' })} alt="…" className="…" />
 *
 * The element stays a normal <img>, so every existing CSS rule applies unchanged.
 * Anything not in the manifest simply gets `{ src }` back.
 */
import manifest from './image-manifest.json';
import clinicConfig from '@/clinic.config.json';

export const HERO_IMAGE = clinicConfig.hero?.heroImage || '/clinic-assets/dream-smile-operatory-main.jpg';
export const HERO_SIZES = '(max-width: 900px) 100vw, 45vw';

/** Common `sizes` presets matching the site's grids. */
export const SIZES = {
  full: '100vw',
  half: '(max-width: 900px) 100vw, 50vw',
  third: '(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw',
  detail: '(max-width: 900px) 100vw, 60vw',
  lightbox: '92vw',
};

/**
 * @param {string} src            Original public path, e.g. "/images/<name>.jpg"
 * @param {object} [o]
 * @param {string}  [o.sizes]      CSS `sizes` for the srcset (default: half-width layout)
 * @param {boolean} [o.priority]   Above-the-fold / LCP image → eager + high fetch priority
 * @param {boolean} [o.dimensions] Emit width/height (default true; turn off for object-fit: contain lightboxes)
 */
export function img(src, { sizes = SIZES.half, priority = false, dimensions = true } = {}) {
  const entry = manifest[src];
  if (!entry) return { src };

  const out = { src };
  if (dimensions) {
    out.width = entry.width;
    out.height = entry.height;
  }
  if (entry.variants?.length) {
    out.srcSet = entry.variants.map((v) => `${v.src} ${v.w}w`).join(', ');
    out.sizes = sizes;
  }
  if (priority) {
    out.loading = 'eager';
    out.fetchPriority = 'high';
  } else {
    out.loading = 'lazy';
    out.decoding = 'async';
  }
  return out;
}

/** Intrinsic size + variants for a source path, or null. */
export function imageMeta(src) {
  return manifest[src] || null;
}
