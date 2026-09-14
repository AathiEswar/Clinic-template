import GalleryView from '@/views/GalleryView';
import JsonLdScript from '@/components/JsonLdScript';
import { GALLERY_IMAGES } from '@/data';
import { pageMetadata, ogCard, breadcrumbJsonLd, absoluteUrl, assetUrl, WEBSITE_ID } from '@/lib/seo';

const TITLE = 'Clinic Photo Gallery';

export const metadata = pageMetadata({
  title: TITLE,
  description:
    'Photo tour of Dr. Dhananjayas Hospitals, Porur: Dr. Venkhatesan’s consultation chamber, sterile day-care treatment rooms, diagnostics and recovery lounge.',
  path: '/gallery',
  image: ogCard('gallery', 'Reception and welcome desk at Dr. Dhananjayas Hospitals, Porur'),
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Photo Gallery', path: '/gallery' }]),
    {
      '@type': 'ImageGallery',
      '@id': `${absoluteUrl('/gallery')}#gallery`,
      url: absoluteUrl('/gallery'),
      name: `${TITLE} — Dr. Dhananjayas Hospitals`,
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
