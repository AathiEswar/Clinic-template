import { CLINIC } from '@/config';

export const dynamic = 'force-static';

/** Emitted as /manifest.webmanifest; Next.js adds the <link rel="manifest"> automatically. */
export default function manifest() {
  return {
    name: CLINIC.name,
    short_name: 'Dr. Dhananjayas',
    description:
      'Ayurvedic Piles, Fistula (Kshara Sutra) & Fissure care in New Perungalathur (Tambaram) and Porur, Chennai.',
    start_url: '/',
    display: 'minimal-ui',
    background_color: '#F8FAFC',
    theme_color: '#086375',
    lang: 'en-IN',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  };
}
