import AboutView from '@/views/AboutView';
import JsonLdScript from '@/components/JsonLdScript';
import { DOCTORS } from '@/data';
import { CLINIC } from '@/config';
import { pageMetadata, ogCard, breadcrumbJsonLd, absoluteUrl, assetUrl, CLINIC_ID } from '@/lib/seo';

const TITLE = 'About Dr. Venkhatesan & Our Porur Hospital';

export const metadata = pageMetadata({
  title: TITLE,
  description:
    'Meet Dr. Venkhatesan, the Ayurvedic proctologist behind 25 years of Kshara Sutra care for piles, fistula and fissure at Dr. Dhananjayas Hospitals, Porur, Chennai.',
  path: '/about-us',
  image: ogCard('about-us', 'Dr. Venkhatesan, Consultant Ayurvedic Proctologist, Porur'),
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
      jobTitle: d.dept,
      name: d.name,
      image: assetUrl(d.image),
      description: d.bio,
      medicalSpecialty: ['Proctology', 'Ayurveda'],
      url: absoluteUrl('/about-us'),
      telephone: CLINIC.telephoneE164,
      address: { '@type': 'PostalAddress', ...CLINIC.postalAddress },
      hospitalAffiliation: { '@id': CLINIC_ID },
      worksFor: { '@id': CLINIC_ID },
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
