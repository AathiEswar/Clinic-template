/**
 * ─────────────────────────────────────────────────────────────
 *  CLINIC CONFIG — Dharshini Laboratory
 *  Diagnostic Center & Pathology Lab · Guduvancheri / Kayarambedu
 *  Verified from Official Google Maps Listing: https://maps.app.goo.gl/YudkZh6dJosRJ4jG8
 * ─────────────────────────────────────────────────────────────
 */

/**
 * Canonical origin of THIS website (no trailing slash).
 * Used for <link rel="canonical">, Open Graph URLs, sitemap.xml, robots.txt and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL (see .env.example) before `npm run build` — without it the
 * build falls back to localhost and prints a warning.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

const ALL_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const CLINIC = {
  name: 'Dharshini Laboratory',
  shortName: 'Dharshini Laboratory',
  altName: 'Dharshini Diagnostic Center & Pathology Lab',
  tagline: 'Diagnostic Center & Clinical Pathology Laboratory · Guduvancheri / Kayarambedu',
  slogan: 'Accurate Diagnostic Testing & Reliable Pathology Services With Doorstep Home Sample Collection.',
  motto: 'Established in 2010 · Over 15 Years of Dependable Diagnostic Care in Guduvancheri.',
  tamilTagline: 'துல்லியமான பரிசோதனைகள் மற்றும் நம்பகமான மருத்துவ ஆய்வக சேவைகள்',
  city: 'Guduvancheri, Chengalpattu',
  locality: 'Moolakazhani, Kayarambedu',

  // Official contact number from Google Maps listing
  phoneDisplay: '+91 99628 99950',
  phoneHref: 'tel:+919962899950',
  whatsapp: '919962899950',

  email: 'dharshinilab.chengalpattu@gmail.com',

  // Laboratory Leadership / Team
  doctorName: 'Chief Medical Technologist & Staff',

  address: 'SP MAHAL, Anna street, Nellikuppam Rd, opposite Guduvancheri, Kameshwary Nagar, Moolakazhani, Kayarambedu, Tamil Nadu 603202',
  landmark: 'Near SP MAHAL, Nellikuppam Road, opposite Guduvancheri',
  mapsUrl: 'https://maps.app.goo.gl/YudkZh6dJosRJ4jG8',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=12.8164521,80.0768841&z=16&output=embed',
  coordinates: {
    lat: 12.8164521,
    lng: 80.0768841,
  },
  plusCode: '7M42R38G+HQ',
  timings: 'Daily: 6:30 AM – 9:00 PM',

  rating: '5.0',
  reviewCount: 'Google Verified',

  hours: [
    { days: 'Monday – Sunday', time: '6:30 AM – 9:00 PM' },
    { days: 'Home Blood Collection', time: '+91 99628 99950 · Call or WhatsApp' },
  ],

  /* ── Structured-data (schema.org) extras, used by src/components/JsonLd.jsx ── */
  telephoneE164: '+91-99628-99950',
  postalAddress: {
    streetAddress: 'SP MAHAL, Anna street, Nellikuppam Rd, opposite Guduvancheri, Kameshwary Nagar',
    addressLocality: 'Moolakazhani, Kayarambedu, Guduvancheri',
    postalCode: '603202',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  openingHoursSpec: [{ days: ALL_DAYS, opens: '06:30', closes: '21:00' }],
  // Localities around Guduvancheri & Kayarambedu
  areaServed: [
    'Kayarambedu',
    'Moolakazhani',
    'Guduvancheri',
    'Urapakkam',
    'Potheri',
    'Kattankulathur',
    'Maraimalai Nagar',
    'Chengalpattu',
  ],
  knowsAbout: [
    'Clinical Pathology',
    'Complete Blood Count (CBC)',
    'Blood Glucose & HbA1c',
    'Thyroid Profile (T3, T4, TSH)',
    'Lipid Profile',
    'Liver & Renal Function Tests',
    'Urine & Stool Routine Analysis',
    'Home Blood Sample Collection',
  ],
  sameAs: [
    'https://maps.app.goo.gl/YudkZh6dJosRJ4jG8',
    'https://www.google.com/maps/place/Dharshini+Laboratory/@12.8164521,80.0768841,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f783c4684965:0x2fd4c21341e5c00d!8m2!3d12.8164521!4d80.0768841!16s%2Fg%2F11l8521hlb',
  ],
};

/** Builds a prefilled WhatsApp deep link. */
export function waLink(message) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  `Hi ${CLINIC.name}! I would like to enquire about diagnostic testing / book a home sample collection.`
);
