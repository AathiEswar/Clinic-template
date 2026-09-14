import { CLINIC } from '@/config';
import { SERVICES } from '@/data';
import { CLINIC_ID, PORUR_ID, WEBSITE_ID, SITE_NAME, absoluteUrl, assetUrl } from '@/lib/seo';
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
 * schema.org @graph: the WebSite, the main clinic and the Porur branch (each a
 * MedicalClinic with its own address and hours, linked to each other), and the
 * three treatments as `availableService`. Every value comes from config/data so
 * the markup can never drift from what visitors see.
 */
export default function JsonLd() {
  const main = CLINIC.branches[0];
  const porur = CLINIC.branches[1];

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
      alternateName: ['Dr. Dhananjayas Fistula and Piles Clinic', CLINIC.altName, CLINIC.name],
      description:
        'Focused Ayurvedic Piles, Kshara Sutra Anal Fistula, and Fissure Clinic in New Perungalathur, Tambaram, Chennai.',
      slogan: CLINIC.slogan,
      url: absoluteUrl('/'),
      logo: assetUrl('/dhananjaya-logo.png'),
      image: [
        assetUrl('/og/home.jpg'),
        assetUrl('/images/piles-discomfort-hero.jpg'),
        assetUrl('/dr-dhananjaya-portrait.jpg'),
      ],
      telephone: main.telephoneE164,
      email: CLINIC.email,
      address: { '@type': 'PostalAddress', ...main.postalAddress },
      hasMap: main.mapsUrl,
      openingHoursSpecification: hoursSpec(main.openingHoursSpec),
      medicalSpecialty: SPECIALTIES,
      isAcceptingNewPatients: true,
      areaServed: CLINIC.areaServed.map((name) => ({ '@type': 'Place', name })),
      knowsAbout: CLINIC.knowsAbout,
      availableService: SERVICES.map((s) => ({
        '@type': 'MedicalTherapy',
        name: s.title,
        alternateName: s.tamilTitle,
        description: s.desc,
        medicineSystem: 'https://schema.org/Ayurvedic',
        url: absoluteUrl('/treatments'),
      })),
      subOrganization: [{ '@id': PORUR_ID }],
      sameAs: CLINIC.sameAs,
    },
    {
      '@type': 'MedicalClinic',
      '@id': PORUR_ID,
      name: porur.name,
      parentOrganization: { '@id': CLINIC_ID },
      url: absoluteUrl('/contact'),
      telephone: porur.telephoneE164,
      address: { '@type': 'PostalAddress', ...porur.postalAddress },
      hasMap: porur.mapsUrl,
      openingHoursSpecification: hoursSpec(porur.openingHoursSpec),
      medicalSpecialty: SPECIALTIES,
      isAcceptingNewPatients: true,
    },
  ];

  return <JsonLdScript data={{ '@context': 'https://schema.org', '@graph': graph }} />;
}
