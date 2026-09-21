import GalleryView from '@/views/GalleryView';
import JsonLdScript from '@/components/JsonLdScript';
import { GALLERY_IMAGES } from '@/data';
import { CLINIC } from '@/config';
import { pageMetadata, ogCard, breadcrumbJsonLd, absoluteUrl, assetUrl, WEBSITE_ID } from '@/lib/seo';

const TITLE = 'Laboratory Photo Gallery | Dharshini Laboratory';

export const metadata = pageMetadata({
  title: TITLE,
  description:
    'Photo tour of Dharshini Laboratory in Guduvancheri: clean reception, patient waiting area, specimen registration counter, and facility location on Nellikuppam Road.',
  path: '/gallery',
  image: ogCard('gallery', 'Dharshini Laboratory reception and testing center in Guduvancheri'),
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Laboratory Gallery', path: '/gallery' }]),
    {
      '@type': 'ImageGallery',
      '@id': `${absoluteUrl('/gallery')}#gallery`,
      url: absoluteUrl('/gallery'),
      name: `${TITLE} — ${CLINIC.name}`,
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
