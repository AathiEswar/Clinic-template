import TestimonialsView from '@/views/TestimonialsView';
import JsonLdScript from '@/components/JsonLdScript';
import { pageMetadata, ogCard, breadcrumbJsonLd } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Patient Trust & Quality Standards',
  description:
    'Dharshini Laboratory in Guduvancheri: dependable clinical pathology, 100% sterile vacutainer protocols, and fast reports since 2010.',
  path: '/testimonials',
  image: ogCard('home', 'Dharshini Laboratory patient trust and quality standards'),
});

const jsonLd = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Patient Trust', path: '/testimonials' }]);

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsView />
      <JsonLdScript data={jsonLd} />
    </>
  );
}
