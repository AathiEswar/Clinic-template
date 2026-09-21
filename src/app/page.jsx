import { preload } from 'react-dom';
import HomeView from '@/views/HomeView';
import JsonLdScript from '@/components/JsonLdScript';
import { FAQS } from '@/data';
import { pageMetadata, ogCard, HOME_TITLE, HOME_DESCRIPTION } from '@/lib/seo';
import { img, HERO_IMAGE, HERO_SIZES } from '@/lib/images';

export const metadata = pageMetadata({
  absoluteTitle: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: '/',
  image: ogCard('home', 'Dharshini Laboratory diagnostic center and pathology lab in Kayarambedu, Guduvancheri'),
  ogTitle: 'Dharshini Laboratory — Diagnostic Center & Pathology Lab in Guduvancheri',
  ogDescription:
    'Established in 2010. Accurate clinical pathology, blood tests, diabetes & lipid profiles, and doorstep home sample collection in Guduvancheri, Kayarambedu.',
});

/* FAQ rich-result markup, generated from the same FAQS the page renders. */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function HomePage() {
  /* The hero photo is the Largest Contentful Paint element: tell the browser to
     fetch the right-sized WebP before it has even parsed the <img>. */
  const hero = img(HERO_IMAGE, { sizes: HERO_SIZES, priority: true });
  preload(hero.src, {
    as: 'image',
    fetchPriority: 'high',
    ...(hero.srcSet ? { imageSrcSet: hero.srcSet, imageSizes: hero.sizes } : {}),
  });

  return (
    <>
      <HomeView />
      <JsonLdScript data={faqJsonLd} />
    </>
  );
}
