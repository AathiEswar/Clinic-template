import TestimonialsView from '@/views/TestimonialsView';
import JsonLdScript from '@/components/JsonLdScript';
import { pageMetadata, ogCard, breadcrumbJsonLd } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Patient Reviews & Success Stories',
  description:
    'Verified patient reviews of Dr. Dhananjayas Hospitals, Porur: 4.9★ on Google, 10,000+ patients relieved of piles, fistula and fissure by Dr. Venkhatesan.',
  path: '/testimonials',
  image: ogCard('testimonials', 'Piles, fistula and fissure treatment at Dr. Dhananjayas Hospitals, Porur'),
});

/* No Review/AggregateRating markup on purpose: Google treats a business marking
   up reviews of itself as "self-serving" and ignores or penalises it. */
const jsonLd = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Patient Reviews', path: '/testimonials' }]);

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsView />
      <JsonLdScript data={jsonLd} />
    </>
  );
}
