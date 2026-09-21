import ContactView from '@/views/ContactView';
import JsonLdScript from '@/components/JsonLdScript';
import { CLINIC } from '@/config';
import { getPageMetadata, breadcrumbJsonLd, absoluteUrl, WEBSITE_ID, CLINIC_ID } from '@/lib/seo';
import clinicConfig from '@/clinic.config.json';

export const metadata = getPageMetadata('contact', '/contact');

const p = clinicConfig.seo?.pages?.contact || {};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Contact & Location', path: '/contact' }]),
    {
      '@type': 'ContactPage',
      '@id': `${absoluteUrl('/contact')}#webpage`,
      url: absoluteUrl('/contact'),
      name: `${p.title || 'Contact'} — ${CLINIC.name}`,
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': CLINIC_ID },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <ContactView />
      <JsonLdScript data={jsonLd} />
    </>
  );
}
