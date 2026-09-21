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
 * schema.org @graph: the WebSite and Dharshini Laboratory (DiagnosticLab /
 * MedicalBusiness with address, hours, location coordinates, and diagnostic services).
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
      '@type': ['DiagnosticLab', 'MedicalBusiness', 'LocalBusiness'],
      '@id': CLINIC_ID,
      name: SITE_NAME,
      legalName: CLINIC.name,
      alternateName: [CLINIC.altName, 'Dharshini Lab Guduvanchery', 'Dharshini Pathology Lab Kayarambedu'],
      description:
        'Certified clinical pathology laboratory and diagnostic center in Kayarambedu, Guduvancheri offering blood tests, diabetic profiles, and doorstep home sample collection.',
      slogan: CLINIC.slogan,
      url: absoluteUrl('/'),
      image: [
        assetUrl('/clinic-assets/dharshini-lab-reception.jpg'),
        assetUrl('/clinic-assets/dharshini-lab-exterior.jpg'),
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
      medicalSpecialty: SPECIALTIES,
      areaServed: CLINIC.areaServed.map((name) => ({ '@type': 'Place', name })),
      knowsAbout: CLINIC.knowsAbout,
      availableService: SERVICES.map((s) => ({
        '@type': 'MedicalTest',
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
