import { CLINIC } from '@/config';
import { SERVICES } from '@/data';
import { CLINIC_ID, WEBSITE_ID, SITE_NAME, absoluteUrl, assetUrl } from '@/lib/seo';
import JsonLdScript from './JsonLdScript';

const hoursSpec = (spec) =>
  spec.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  }));

const SPECIALTIES = ['Clinical Pathology', 'Diagnostic Laboratory', 'Phlebotomy'];

/**
 * Site-wide structured data, rendered once in the root layout as a single
 * schema.org @graph: the WebSite and Clinic (Dentist / MedicalBusiness with address, hours, location coordinates, and dental services).
 */
export default function JsonLd() {
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
      '@type': CLINIC.schemaTypes || ['Dentist', 'MedicalBusiness', 'LocalBusiness'],
      '@id': CLINIC_ID,
      name: SITE_NAME,
      legalName: CLINIC.name,
      alternateName: [CLINIC.altName, CLINIC.shortName, `${CLINIC.shortName} ${CLINIC.city}`],
      description: CLINIC.slogan || CLINIC.tagline,
      slogan: CLINIC.slogan,
      url: absoluteUrl('/'),
      image: [
        assetUrl('/clinic-assets/shree-raaghav-operatory-main.jpg'),
        assetUrl('/clinic-assets/shree-raaghav-dental-rehabilitation.jpg'),
      ],
      telephone: CLINIC.telephoneE164,
      email: CLINIC.email,
      address: {
        '@type': 'PostalAddress',
        ...CLINIC.postalAddress,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: CLINIC.coordinates.lat,
        longitude: CLINIC.coordinates.lng,
      },
      hasMap: CLINIC.mapsUrl,
      openingHoursSpecification: hoursSpec(CLINIC.openingHoursSpec),
      medicalSpecialty: CLINIC.medicalSpecialties || ['Orthodontics', 'Dentistry'],
      areaServed: CLINIC.areaServed.map((name) => ({ '@type': 'Place', name })),
      knowsAbout: CLINIC.knowsAbout,
      availableService: SERVICES.map((s) => ({
        '@type': 'MedicalProcedure',
        name: s.title,
        alternateName: s.tamilTitle,
        description: s.desc,
        url: absoluteUrl('/treatments'),
      })),
      sameAs: CLINIC.sameAs,
    },
  ];

  return <JsonLdScript data={{ '@context': 'https://schema.org', '@graph': graph }} />;
}
