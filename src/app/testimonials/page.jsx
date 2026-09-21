import TestimonialsView from '@/views/TestimonialsView';
import JsonLdScript from '@/components/JsonLdScript';
import { getPageMetadata, breadcrumbJsonLd } from '@/lib/seo';

export const metadata = getPageMetadata('testimonials', '/testimonials');

const jsonLd = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Quality Standards', path: '/testimonials' }]);

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsView />
      <JsonLdScript data={jsonLd} />
    </>
  );
}
