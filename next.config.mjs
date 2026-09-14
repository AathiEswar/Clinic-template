if (!process.env.NEXT_PUBLIC_SITE_URL) {
  console.warn(
    '\n[site] NEXT_PUBLIC_SITE_URL is not set — canonical links, Open Graph URLs, sitemap.xml and robots.txt ' +
      'will point at http://localhost:3000. Copy .env.example to .env and set the real domain before deploying.\n'
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pre-render every route to plain HTML in ./out at build time, so the site can
  // be uploaded to any static host exactly like the old Vite `dist` folder — and
  // crawlers / WhatsApp link previews get the full page without running JS.
  // Delete this line to run on a Node server or Vercel with SSR instead.
  output: 'export',

  // `/about-us/` → out/about-us/index.html. Every static host (S3, nginx, Apache,
  // GitHub Pages, Netlify…) serves that with zero rewrite rules.
  trailingSlash: true,

  // The site uses plain <img> tags on purpose — they map 1:1 onto the existing CSS.
  // This flag only matters if someone later switches to next/image under static export.
  images: { unoptimized: true },
};

export default nextConfig;
