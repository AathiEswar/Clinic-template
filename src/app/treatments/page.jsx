import TreatmentsView from '@/views/TreatmentsView';
import JsonLdScript from '@/components/JsonLdScript';
import { SERVICES } from '@/data';
import { pageMetadata, ogCard, breadcrumbJsonLd, absoluteUrl, WEBSITE_ID, CLINIC_ID } from '@/lib/seo';

const TITLE = 'Diagnostic Services & Pathology Tests | Dharshini Laboratory';
const DESCRIPTION =
  'Clinical pathology, blood tests, diabetic profiles, thyroid panels, and doorstep home sample collection at Dharshini Laboratory, Guduvancheri & Kayarambedu.';

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/treatments',
  image: ogCard('treatments', 'Dharshini Laboratory diagnostic testing and pathology services'),
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Diagnostic Services', path: '/treatments' }]),
    {
      '@type': 'MedicalWebPage',
      '@id': `${absoluteUrl('/treatments')}#webpage`,
      url: absoluteUrl('/treatments'),
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en-IN',
      isPartOf: { '@id': WEBSITE_ID },
      specialty: 'Clinical Pathology',
      medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
      provider: { '@id': CLINIC_ID },
      about: SERVICES.map((s) => ({
        '@type': 'MedicalTest',
        name: s.title,
        alternateName: s.tamilTitle,
        description: s.desc,
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
