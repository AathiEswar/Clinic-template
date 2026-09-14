import ContactView from '@/views/ContactView';
import JsonLdScript from '@/components/JsonLdScript';
import { pageMetadata, ogCard, breadcrumbJsonLd, absoluteUrl, WEBSITE_ID, CLINIC_ID } from '@/lib/seo';

const TITLE = 'Location, Timings & Appointment Booking – Porur';

export const metadata = pageMetadata({
  title: TITLE,
  description:
    'Visit Dr. Dhananjayas Hospitals at 6, Pillayar Koil St, Astalakshmi Nagar, Porur, Chennai. Open daily 10 AM–7:30 PM. Call or WhatsApp +91 97907 47350 or book online.',
  path: '/contact',
  image: ogCard('contact', 'Dr. Dhananjayas Hospitals, Astalakshmi Nagar, Porur'),
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Visit Porur', path: '/contact' }]),
    {
      '@type': 'ContactPage',
      '@id': `${absoluteUrl('/contact')}#webpage`,
      url: absoluteUrl('/contact'),
      name: `${TITLE} — Dr. Dhananjayas Clinic`,
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
