import ContactView from '@/views/ContactView';
import JsonLdScript from '@/components/JsonLdScript';
import { pageMetadata, ogCard, breadcrumbJsonLd, absoluteUrl, WEBSITE_ID, CLINIC_ID } from '@/lib/seo';

const TITLE = 'Branches, Timings & Appointment Booking';

export const metadata = pageMetadata({
  title: TITLE,
  description:
    'Visit Dr. Dhananjayas Clinic at G.R. Complex, NGO Nagar Main Road, New Perungalathur (Tambaram) or our Porur branch. Call +91 73583 61723 or book online.',
  path: '/contact',
  image: ogCard('contact', 'Dr. Dhananjayas Clinic, New Perungalathur, Tambaram'),
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Branches & Visit', path: '/contact' }]),
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
