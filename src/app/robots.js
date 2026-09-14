import { SITE_URL } from '@/config';

export const dynamic = 'force-static';

/** Emitted as /robots.txt at build time. */
export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
