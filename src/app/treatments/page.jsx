import TreatmentsView from '@/views/TreatmentsView';
import JsonLdScript from '@/components/JsonLdScript';
import { SERVICES } from '@/data';
import { getPageMetadata, breadcrumbJsonLd, absoluteUrl, WEBSITE_ID, CLINIC_ID } from '@/lib/seo';
import clinicConfig from '@/clinic.config.json';

export const metadata = getPageMetadata('treatments', '/treatments');

const p = clinicConfig.seo?.pages?.treatments || {};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Diagnostic Services', path: '/treatments' }]),
    {
      '@type': 'MedicalWebPage',
      '@id': `${absoluteUrl('/treatments')}#webpage`,
      url: absoluteUrl('/treatments'),
      name: p.title || 'Diagnostic Services',
      description: p.description || '',
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
