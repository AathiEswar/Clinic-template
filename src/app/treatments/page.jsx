import TreatmentsView from '@/views/TreatmentsView';
import JsonLdScript from '@/components/JsonLdScript';
import { SERVICES } from '@/data';
import { pageMetadata, ogCard, breadcrumbJsonLd, absoluteUrl, WEBSITE_ID, CLINIC_ID } from '@/lib/seo';

const TITLE = 'Piles, Fistula & Fissure Treatments';
const DESCRIPTION =
  'Ayurvedic treatment for piles, anal fistula (authentic Kshara Sutra) and anal fissure. Gentle 30-minute day-care with Dr. Venkhatesan, no major surgery, in Porur, Chennai.';

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/treatments',
  image: ogCard('treatments', 'Medical illustration of an anal fistula tract treated with Kshara Sutra'),
});

/* The three conditions this page is about, each linked to its Ayurvedic treatment. */
const CONDITIONS = [
  { name: 'Hemorrhoids (Piles)', alternateName: ['Piles', 'Moolam', 'Arsha'], service: SERVICES[0] },
  { name: 'Anal Fistula', alternateName: ['Fistula-in-ano', 'Bhagandara'], service: SERVICES[1] },
  { name: 'Anal Fissure', alternateName: ['Fissure-in-ano', 'Parikartika'], service: SERVICES[2] },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Treatments', path: '/treatments' }]),
    {
      '@type': 'MedicalWebPage',
      '@id': `${absoluteUrl('/treatments')}#webpage`,
      url: absoluteUrl('/treatments'),
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en-IN',
      isPartOf: { '@id': WEBSITE_ID },
      specialty: 'Proctology',
      medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
      provider: { '@id': CLINIC_ID },
      about: CONDITIONS.map((c) => ({
        '@type': 'MedicalCondition',
        name: c.name,
        alternateName: c.alternateName,
        possibleTreatment: {
          '@type': 'MedicalTherapy',
          name: c.service.title,
          alternateName: c.service.tamilTitle,
          description: c.service.desc,
          medicineSystem: 'https://schema.org/Ayurvedic',
        },
      })),
    },
  ],
};

export default function TreatmentsPage() {
  return (
    <>
      <TreatmentsView />
      <JsonLdScript data={jsonLd} />
    </>
  );
}
