import AboutView from '@/views/AboutView';
import JsonLdScript from '@/components/JsonLdScript';
import { DOCTORS } from '@/data';
import { CLINIC } from '@/config';
import { pageMetadata, ogCard, breadcrumbJsonLd, absoluteUrl, assetUrl, CLINIC_ID } from '@/lib/seo';

const TITLE = 'About Dr. Dhananjaya & Our Specialists';

export const metadata = pageMetadata({
  title: TITLE,
  description:
    'Meet Dr. Dhananjaya and Dr. Venkhatesan, Ayurvedic proctologists with 25+ years of Kshara Sutra care for piles, fistula and fissure in Tambaram and Porur.',
  path: '/about-us',
  image: ogCard('about-us', 'Dr. Dhananjaya, Founder & Chief Ayurvedic Proctologist'),
});

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

/* Each doctor as a schema.org Physician attached to the clinic entity. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'About & Doctors', path: '/about-us' }]),
    ...DOCTORS.map((d) => ({
      '@type': 'Physician',
      '@id': `${absoluteUrl('/about-us')}#${slug(d.name)}`,
      name: d.name,
      image: assetUrl(d.image),
      description: d.bio,
      medicalSpecialty: ['Proctology', 'Ayurveda'],
      url: absoluteUrl('/about-us'),
      telephone: CLINIC.telephoneE164,
      address: { '@type': 'PostalAddress', ...CLINIC.postalAddress },
      parentOrganization: { '@id': CLINIC_ID },
    })),
  ],
};

export default function AboutPage() {
  return (
    <>
      <AboutView />
      <JsonLdScript data={jsonLd} />
    </>
  );
}
