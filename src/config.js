/**
 * ─────────────────────────────────────────────────────────────
 *  CLINIC CONFIG — DR. Dhananjayas Hospitals & Fistula Clinic
 *  Piles, Fistula (Kshara Sutra), and Fissure Specialist Hospital
 *  Branches: New Perungalathur (Tambaram) · Porur · Koyambedu, Chennai
 * ─────────────────────────────────────────────────────────────
 */

/**
 * Canonical origin of THIS website (no trailing slash).
 * Used for <link rel="canonical">, Open Graph URLs, sitemap.xml, robots.txt and JSON-LD.
 * Override with NEXT_PUBLIC_SITE_URL (see .env.example) — it is inlined at build time.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.fistulapileshospitalchennai.com'
).replace(/\/+$/, '');

const WEEKDAYS_MON_SAT = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const ALL_DAYS = [...WEEKDAYS_MON_SAT, 'Sunday'];

export const CLINIC = {
  name: 'Dr. Dhananjayas Hospitals & Clinic',
  shortName: 'Dr. Dhananjayas Clinic',
  altName: 'Dr. Dhananjayan Piles & Fistula Hospital',
  tagline: 'Ayurvedic Piles, Fistula (Kshara Sutra) & Fissure Care · 25+ Years of Excellence',
  slogan: 'Gentle Ayurvedic Care for Piles, Fistula & Fissure Without Major Operations.',
  motto: '25+ Years of Focused Ayurvedic Proctology & Authentic Kshara Sutra Care.',
  tamilTagline: 'மூலம், பௌத்திரம் மற்றும் ஆசனவாய் வெடிப்புக்கான நவீன மற்றும் க்ஷாரசூத்ரா அறுவை சிகிச்சையற்ற தீர்வு',
  city: 'Chennai (Tambaram, New Perungalathur, Porur & Koyambedu)',

  // Primary contacts
  phoneDisplay: '+91 73583 61723',
  phoneHref: 'tel:7358361723',
  phoneAltDisplay: '+91 97907 47350',
  phoneAltHref: 'tel:9790747350',
  phoneLandline: '08048067521',
  phoneLandlineHref: 'tel:08048067521',

  // WhatsApp
  whatsapp: '917358361723',
  whatsappAlt: '919790747350',

  email: 'v.prashanthi1995@gmail.com',
  website: 'https://www.fistulapileshospitalchennai.com',
  secondaryWebsite: 'https://www.thefistula.com',

  // Multi-branch locations
  branches: [
    {
      id: 'tambaram-perungalathur',
      name: 'New Perungalathur / Tambaram Clinic (Main Center)',
      tag: 'Primary Ayurvedic Treatment Center',
      address: 'First Floor, No. 3, G.R. Complex, NGO Nagar Main Road, SSM Nagar, Alappakkam, New Perungalathur, Chennai, Tamil Nadu – 600063',
      landmark: 'Near SSM Nagar, Off Tambaram / GST Road',
      phone: '+91 73583 61723 / 08048067521',
      phoneHref: 'tel:7358361723',
      mapsUrl: 'https://maps.app.goo.gl/TRP5wVEovJrYQQx97',
      timings: 'Monday – Saturday: 9:00 AM – 8:30 PM · Sunday by Appointment',
      // schema.org
      telephoneE164: '+91-73583-61723',
      postalAddress: {
        streetAddress: 'First Floor, No. 3, G.R. Complex, NGO Nagar Main Road, SSM Nagar, Alappakkam',
        addressLocality: 'New Perungalathur, Tambaram, Chennai',
        postalCode: '600063',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
      openingHoursSpec: [
        { days: WEEKDAYS_MON_SAT, opens: '09:00', closes: '20:30' },
        { days: ['Sunday'], opens: '09:30', closes: '14:00' },
      ],
    },
    {
      id: 'porur-hospital',
      name: 'Porur Branch (Dr. Dhananjayas Hospitals)',
      tag: 'Hospital & Consultation Facility',
      address: '6, Pillayar Koil St, Astalakshmi Nagar, Lakshmi Nagar, Porur, Chennai, Tamil Nadu – 600116',
      landmark: 'Near Pillayar Koil, Astalakshmi Nagar, Porur',
      phone: '+91 97907 47350 / 08042757322',
      phoneHref: 'tel:9790747350',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=6+Pillayar+Koil+St+Astalakshmi+Nagar+Porur+Chennai+600116',
      timings: 'Daily: 10:00 AM – 7:30 PM',
      // schema.org
      telephoneE164: '+91-97907-47350',
      postalAddress: {
        streetAddress: '6, Pillayar Koil St, Astalakshmi Nagar, Lakshmi Nagar',
        addressLocality: 'Porur, Chennai',
        postalCode: '600116',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
      openingHoursSpec: [{ days: ALL_DAYS, opens: '10:00', closes: '19:30' }],
    },
    {
      id: 'koyambedu-desk',
      name: 'Koyambedu OPD Consultation Desk',
      tag: 'Specialist Consultation Desk',
      address: 'Near Central Bus Terminus, Koyambedu, Chennai, Tamil Nadu – 600107',
      landmark: 'Accessible via Metro and Koyambedu Bus Hub',
      phone: '+91 73583 61723',
      phoneHref: 'tel:7358361723',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Koyambedu+Chennai',
      timings: 'Weekly Special OPD (By Prior Booking)',
      // no fixed street address / hours → deliberately not emitted as a schema.org location
    }
  ],

  // Default address (Tambaram / New Perungalathur)
  address: 'First Floor, No. 3, G.R. Complex, NGO Nagar Main Road, SSM Nagar, Alappakkam, New Perungalathur, Chennai, Tamil Nadu - 600063',
  landmark: 'First Floor, G.R. Complex, NGO Nagar Main Road, Near SSM Nagar, New Perungalathur (off Tambaram)',
  mapsUrl: 'https://maps.app.goo.gl/TRP5wVEovJrYQQx97',

  rating: '4.9',
  reviewCount: '34+',

  hours: [
    { days: 'Monday – Saturday', time: '9:00 AM – 8:30 PM' },
    { days: 'Sunday Consultation', time: '9:30 AM – 2:00 PM (By Appointment)' },
    { days: 'Emergency Anorectal Helpline', time: '24/7 Telephone Assistance' },
  ],

  /* ── Structured-data (schema.org) extras, used by src/components/JsonLd.jsx ── */
  telephoneE164: '+91-73583-61723',
  postalAddress: {
    streetAddress: 'First Floor, No. 3, G.R. Complex, NGO Nagar Main Road, SSM Nagar, Alappakkam',
    addressLocality: 'New Perungalathur, Tambaram, Chennai',
    postalCode: '600063',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  openingHoursSpec: [
    { days: WEEKDAYS_MON_SAT, opens: '09:00', closes: '20:30' },
    { days: ['Sunday'], opens: '09:30', closes: '14:00' },
  ],
  // Localities named on the site (schema.org areaServed)
  areaServed: ['New Perungalathur', 'Tambaram', 'Chromepet', 'Guduvanchery', 'Porur', 'Koyambedu', 'Chennai'],
  knowsAbout: ['Piles (Hemorrhoids)', 'Anal Fistula', 'Anal Fissure', 'Kshara Sutra therapy', 'Ayurvedic proctology'],
  // Other official profiles / listings for the same business
  sameAs: [
    'https://fistulaandpiles.com/tambaram/',
    'https://maps.app.goo.gl/TRP5wVEovJrYQQx97',
    'https://www.thefistula.com',
  ],
};

/** Builds a prefilled WhatsApp deep link. */
export function waLink(message) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  `Hi ${CLINIC.name}! I would like to book a confidential consultation for piles / fistula / fissure treatment.`
);
