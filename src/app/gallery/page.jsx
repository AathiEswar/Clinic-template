import GalleryView from '@/views/GalleryView';
import JsonLdScript from '@/components/JsonLdScript';
import { GALLERY_IMAGES } from '@/data';
import { CLINIC } from '@/config';
import { getPageMetadata, breadcrumbJsonLd, absoluteUrl, assetUrl, WEBSITE_ID } from '@/lib/seo';
import clinicConfig from '@/clinic.config.json';

export const metadata = getPageMetadata('gallery', '/gallery');

const p = clinicConfig.seo?.pages?.gallery || {};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Laboratory Gallery', path: '/gallery' }]),
    {
      '@type': 'ImageGallery',
      '@id': `${absoluteUrl('/gallery')}#gallery`,
      url: absoluteUrl('/gallery'),
      name: `${p.title || 'Gallery'} — ${CLINIC.name}`,
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
