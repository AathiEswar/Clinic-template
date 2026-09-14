import { Fraunces, Manrope } from 'next/font/google';
import { CLINIC, SITE_URL } from '@/config';
import { HOME_TITLE, HOME_DESCRIPTION, ROBOTS_INDEX, siteVerification } from '@/lib/seo';
import AppShell from '@/components/AppShell';
import JsonLd from '@/components/JsonLd';

import '@/styles/base.css';
import '@/styles/sections.css';

/* Self-hosted Google Fonts: downloaded at build time, served from /_next/static,
   preloaded, zero third-party request and no layout shift (Core Web Vitals). */
const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  display: 'swap',
  variable: '--font-fraunces',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

const verification = siteVerification();

/** Site-wide defaults. Every page overrides title/description/OG via src/lib/seo.js. */
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${CLINIC.shortName}`,
  },
  description: HOME_DESCRIPTION,
  applicationName: CLINIC.shortName,
  publisher: CLINIC.name,
  category: 'health',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  robots: ROBOTS_INDEX,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: CLINIC.shortName,
  },
  ...(verification ? { verification } : {}),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#086375',
};

export default function RootLayout({ children }) {
  // suppressHydrationWarning: browser extensions (Ember Inspector, Grammarly, dark-mode tools…)
  // add attributes to <html> before React hydrates; only this one element is exempted.
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        {/* Page content is fully pre-rendered; without JS just hide the JS-driven overlays. */}
        <noscript>
          <style>{`.preloader,.cursor-dot,.cursor-ring{display:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <AppShell>{children}</AppShell>
        <JsonLd />
      </body>
    </html>
  );
}
