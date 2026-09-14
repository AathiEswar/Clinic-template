/**
 * ─────────────────────────────────────────────────────────────
 *  CLINIC CONFIG — Dr. Dhananjayas Hospitals, Porur Branch
 *  Ayurvedic Piles, Fistula (Kshara Sutra) & Fissure care
 *  Consultant: Dr. Venkhatesan · Astalakshmi Nagar, Porur, Chennai
 *  This website is for the Porur branch only.
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
  name: 'Dr. Dhananjayas Hospitals – Porur',
  shortName: 'Dr. Dhananjayas Hospitals, Porur',
  altName: 'Dr. Dhananjayas Piles & Fistula Hospital, Porur',
  tagline: 'Ayurvedic Piles, Fistula (Kshara Sutra) & Fissure Care · Porur, Chennai',
  slogan: 'Gentle Ayurvedic Care for Piles, Fistula & Fissure Without Major Operations.',
  motto: '25 Years of Focused Ayurvedic Proctology & Authentic Kshara Sutra Care.',
  tamilTagline: 'மூலம், பௌத்திரம் மற்றும் ஆசனவாய் வெடிப்புக்கான நவீன மற்றும் க்ஷாரசூத்ரா அறுவை சிகிச்சையற்ற தீர்வு',
  city: 'Porur, Chennai',
  locality: 'Astalakshmi Nagar, Porur',

  // The one and only contact number for this branch
  phoneDisplay: '+91 97907 47350',
  phoneHref: 'tel:+919790747350',
  whatsapp: '919790747350',

  email: 'v.prashanthi1995@gmail.com',

  // Consultant
  doctorName: 'Dr. Venkhatesan',

  address: '6, Pillayar Koil St, Astalakshmi Nagar, Lakshmi Nagar, Porur, Chennai, Tamil Nadu – 600116',
  landmark: 'Near Pillayar Koil, Astalakshmi Nagar, Porur',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=6+Pillayar+Koil+St+Astalakshmi+Nagar+Porur+Chennai+600116',
  timings: 'Daily: 10:00 AM – 7:30 PM',

  rating: '4.9',
  reviewCount: '34+',

  hours: [
    { days: 'Monday – Sunday', time: '10:00 AM – 7:30 PM' },
    { days: 'Anorectal Helpline', time: '+91 97907 47350 · Call or WhatsApp' },
  ],

  /* ── Structured-data (schema.org) extras, used by src/components/JsonLd.jsx ── */
  telephoneE164: '+91-97907-47350',
  postalAddress: {
    streetAddress: '6, Pillayar Koil St, Astalakshmi Nagar, Lakshmi Nagar',
    addressLocality: 'Porur, Chennai',
    postalCode: '600116',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  openingHoursSpec: [{ days: ALL_DAYS, opens: '10:00', closes: '19:30' }],
  // Localities around Porur named on the site (schema.org areaServed)
  areaServed: ['Porur', 'Ramapuram', 'Maduravoyal', 'Valasaravakkam', 'Vadapalani', 'Mugalivakkam', 'Chennai'],
  knowsAbout: ['Piles (Hemorrhoids)', 'Anal Fistula', 'Anal Fissure', 'Kshara Sutra therapy', 'Ayurvedic proctology'],
  // Only this branch's own listing — no links to other websites
  sameAs: ['https://www.google.com/maps/search/?api=1&query=6+Pillayar+Koil+St+Astalakshmi+Nagar+Porur+Chennai+600116'],
};

/** Builds a prefilled WhatsApp deep link. */
export function waLink(message) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  `Hi ${CLINIC.name}! I would like to book a confidential consultation with ${CLINIC.doctorName} for piles / fistula / fissure treatment.`
);
