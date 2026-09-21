import AboutView from '@/views/AboutView';
import JsonLdScript from '@/components/JsonLdScript';
import { CLINIC } from '@/config';
import { pageMetadata, ogCard, breadcrumbJsonLd, absoluteUrl, assetUrl, CLINIC_ID } from '@/lib/seo';

const TITLE = 'About Dharshini Laboratory | Diagnostic Center Guduvancheri';

export const metadata = pageMetadata({
  title: TITLE,
  description:
    'Learn about Dharshini Laboratory, established in 2010. Accurate clinical pathology, blood tests, and doorstep home sample collection in Guduvancheri, Kayarambedu.',
  path: '/about-us',
  image: ogCard('about-us', 'Dharshini Laboratory diagnostic center and clinical pathology'),
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'About Laboratory', path: '/about-us' }]),
    {
      '@type': 'DiagnosticLab',
      '@id': `${absoluteUrl('/about-us')}#lab`,
      name: CLINIC.name,
      description:
        'Established in 2010. Providing certified pathology testing, blood profiles, and doorstep sample collection across Guduvancheri, Kayarambedu, and Urapakkam.',
      image: assetUrl('/clinic-assets/dharshini-lab-reception.jpg'),
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
