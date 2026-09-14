import GalleryView from '@/views/GalleryView';
import JsonLdScript from '@/components/JsonLdScript';
import { GALLERY_IMAGES } from '@/data';
import { pageMetadata, ogCard, breadcrumbJsonLd, absoluteUrl, assetUrl, WEBSITE_ID } from '@/lib/seo';

const TITLE = 'Clinic Photo Gallery';

export const metadata = pageMetadata({
  title: TITLE,
  description:
    'Photo tour of Dr. Dhananjayas Clinic: private consultation chambers, sterile day-care treatment rooms and diagnostics in New Perungalathur (Tambaram) and Porur.',
  path: '/gallery',
  image: ogCard('gallery', 'Reception and welcome desk at Dr. Dhananjayas Clinic'),
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Photo Gallery', path: '/gallery' }]),
    {
      '@type': 'ImageGallery',
      '@id': `${absoluteUrl('/gallery')}#gallery`,
      url: absoluteUrl('/gallery'),
      name: `${TITLE} — Dr. Dhananjayas Clinic`,
      isPartOf: { '@id': WEBSITE_ID },
      image: GALLERY_IMAGES.map((g) => ({
        '@type': 'ImageObject',
        contentUrl: assetUrl(g.src),
        name: g.title,
        caption: g.title,
        description: g.desc,
      })),
    },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <GalleryView />
      <JsonLdScript data={jsonLd} />
    </>
  );
}
