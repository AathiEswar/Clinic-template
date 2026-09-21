import AboutView from '@/views/AboutView';
import JsonLdScript from '@/components/JsonLdScript';
import { CLINIC } from '@/config';
import { getPageMetadata, breadcrumbJsonLd, absoluteUrl, assetUrl, CLINIC_ID } from '@/lib/seo';
import { HERO_IMAGE } from '@/lib/images';

export const metadata = getPageMetadata('about', '/about-us');

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'About Laboratory', path: '/about-us' }]),
    {
      '@type': CLINIC.schemaTypes?.[0] || 'DiagnosticLab',
      '@id': `${absoluteUrl('/about-us')}#lab`,
      name: CLINIC.name,
      description: CLINIC.slogan,
      image: assetUrl(HERO_IMAGE),
      url: absoluteUrl('/about-us'),
      telephone: CLINIC.telephoneE164,
      address: { '@type': 'PostalAddress', ...CLINIC.postalAddress },
      parentOrganization: { '@id': CLINIC_ID },
    },
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
