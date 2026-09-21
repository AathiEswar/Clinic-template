import ContactView from '@/views/ContactView';
import JsonLdScript from '@/components/JsonLdScript';
import { CLINIC } from '@/config';
import { pageMetadata, ogCard, breadcrumbJsonLd, absoluteUrl, WEBSITE_ID, CLINIC_ID } from '@/lib/seo';

const TITLE = 'Location, Timings & Contact | Dharshini Laboratory';

export const metadata = pageMetadata({
  title: TITLE,
  description:
    `Visit ${CLINIC.name} at ${CLINIC.address}. Open daily 6:30 AM–9:00 PM. Call or WhatsApp ${CLINIC.phoneDisplay} or book home sample collection online.`,
  path: '/contact',
  image: ogCard('contact', 'Dharshini Laboratory location on Nellikuppam Road opposite Guduvancheri'),
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Contact & Location', path: '/contact' }]),
    {
      '@type': 'ContactPage',
      '@id': `${absoluteUrl('/contact')}#webpage`,
      url: absoluteUrl('/contact'),
      name: `${TITLE} — ${CLINIC.name}`,
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
