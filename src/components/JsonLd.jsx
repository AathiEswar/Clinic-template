import { CLINIC } from '@/config';
import { SERVICES, DOCTORS } from '@/data';
import { CLINIC_ID, WEBSITE_ID, SITE_NAME, absoluteUrl, assetUrl } from '@/lib/seo';
import JsonLdScript from './JsonLdScript';

const hoursSpec = (spec) =>
  spec.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  }));

const SPECIALTIES = ['Proctology', 'Ayurveda'];

/**
 * Site-wide structured data, rendered once in the root layout as a single
 * schema.org @graph: the WebSite and the Porur hospital (MedicalClinic with
 * address, hours, consultant and the three treatments as availableService).
 * Every value comes from config/data so the markup can never drift.
 */
export default function JsonLd() {
  const doctor = DOCTORS[0];
  const graph = [
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: absoluteUrl('/'),
      name: SITE_NAME,
      inLanguage: 'en-IN',
      publisher: { '@id': CLINIC_ID },
    },
    {
      '@type': 'MedicalClinic',
      '@id': CLINIC_ID,
      name: SITE_NAME,
      legalName: CLINIC.name,
      alternateName: [CLINIC.altName, 'Dr. Dhananjayas Hospitals Porur', 'Dr. Venkhatesan Piles & Fistula Clinic, Porur'],
      description:
        'Focused Ayurvedic Piles, Kshara Sutra Anal Fistula, and Fissure hospital in Astalakshmi Nagar, Porur, Chennai, led by Dr. Venkhatesan.',
      slogan: CLINIC.slogan,
      url: absoluteUrl('/'),
      logo: assetUrl('/dhananjaya-logo.png'),
      image: [assetUrl('/og/home.jpg'), assetUrl('/images/piles-discomfort-hero.jpg'), assetUrl(doctor.image)],
      telephone: CLINIC.telephoneE164,
      email: CLINIC.email,
      address: { '@type': 'PostalAddress', ...CLINIC.postalAddress },
      hasMap: CLINIC.mapsUrl,
      openingHoursSpecification: hoursSpec(CLINIC.openingHoursSpec),
      medicalSpecialty: SPECIALTIES,
      isAcceptingNewPatients: true,
      areaServed: CLINIC.areaServed.map((name) => ({ '@type': 'Place', name })),
      knowsAbout: CLINIC.knowsAbout,
      employee: { '@id': `${absoluteUrl('/about-us')}#dr-venkhatesan` },
      availableService: SERVICES.map((s) => ({
        '@type': 'MedicalTherapy',
        name: s.title,
        alternateName: s.tamilTitle,
        description: s.desc,
        medicineSystem: 'https://schema.org/Ayurvedic',
        url: absoluteUrl('/treatments'),
      })),
      sameAs: CLINIC.sameAs,
    },
  ];

  return <JsonLdScript data={{ '@context': 'https://schema.org', '@graph': graph }} />;
}
