import { NAV_LINKS, SERVICES, GALLERY_IMAGES } from '@/data';
import { absoluteUrl, assetUrl } from '@/lib/seo';
import { HERO_IMAGE } from '@/lib/images';

export const dynamic = 'force-static';

/** Images worth indexing per route (Google Image sitemap extension). */
const IMAGES = {
  '/': ['/og/home.jpg', HERO_IMAGE, ...SERVICES.map((s) => s.image)],
  '/about-us': ['/og/about-us.jpg', '/clinic-assets/dharshini-lab-reception.jpg'],
  '/treatments': ['/og/treatments.jpg', ...SERVICES.map((s) => s.image)],
  '/gallery': ['/og/gallery.jpg', ...GALLERY_IMAGES.map((g) => g.src)],
  '/testimonials': ['/og/testimonials.jpg', '/clinic-assets/dharshini-lab-reception.jpg'],
  '/contact': ['/og/contact.jpg', '/clinic-assets/dharshini-lab-exterior.jpg'],
};

/** Emitted as /sitemap.xml at build time — one entry per navigable route. */
export default function sitemap() {
  const lastModified = new Date();
  return NAV_LINKS.map((l) => ({
    url: absoluteUrl(l.path),
    lastModified,
    changeFrequency: l.path === '/' ? 'weekly' : 'monthly',
    priority: l.path === '/' ? 1 : 0.8,
    images: [...new Set(IMAGES[l.path] || [])].filter(Boolean).map(assetUrl),
  }));
}
