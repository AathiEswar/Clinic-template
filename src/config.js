import clinicConfig from '@/clinic.config.json';

/**
 * Canonical origin of THIS website (no trailing slash).
 * Used for <link rel="canonical">, Open Graph URLs, sitemap.xml, robots.txt and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL (see .env.example) before `npm run build` — without it the
 * build falls back to localhost and prints a warning.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

const ALL_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const rawClinic = clinicConfig.clinic;

export const CLINIC = {
  ...rawClinic,

  // Fallbacks for brand styling if not explicitly set
  brandWordmark1: rawClinic.brandWordmark1 || rawClinic.name.split(' ')[0] || 'CLINIC',
  brandWordmark2: rawClinic.brandWordmark2 || rawClinic.name.split(' ').slice(1).join(' ') || '',
  brandSub: rawClinic.brandSub || rawClinic.tagline || '',
  wordmarkLine1: rawClinic.wordmarkLine1 || rawClinic.name.split(' ')[0] || 'CLINIC',
  wordmarkLine2: rawClinic.wordmarkLine2 || (rawClinic.name.split(' ').slice(1).join(' ') + (rawClinic.city ? ` · ${rawClinic.city.split(',')[0].toUpperCase()}` : '')) || '',

  // Derived structured data fields
  telephoneE164: rawClinic.telephoneE164 || rawClinic.phoneHref?.replace(/^tel:/, '') || '+91-99628-99950',
  postalAddress: {
    streetAddress: rawClinic.streetAddress || rawClinic.address,
    addressLocality: rawClinic.addressLocality || rawClinic.locality || rawClinic.city,
    postalCode: rawClinic.postalCode || '603202',
    addressRegion: rawClinic.addressRegion || 'Tamil Nadu',
    addressCountry: rawClinic.addressCountry || 'IN',
  },
  openingHoursSpec: [{ days: ALL_DAYS, opens: '06:30', closes: '21:00' }],
};

/** Builds a prefilled WhatsApp deep link. */
export function waLink(message) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Default quick WhatsApp chat link */
export const WA_DEFAULT = waLink(
  `Hi ${CLINIC.name}! I would like to enquire about diagnostic testing / book a home sample collection.`
);

/** Default service preselected when the booking modal opens without a specific target */
export const DEFAULT_DEPT = clinicConfig.services?.[0]?.title || 'Clinical Pathology & Blood Testing';

export const RAW_CONFIG = clinicConfig;
