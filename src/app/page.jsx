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
  image: ogCard('home', 'Patient consulting a doctor about piles treatment at Dr. Dhananjayas Hospitals, Porur'),
  ogTitle: 'Dr. Dhananjayas Hospitals, Porur — Ayurvedic Piles, Fistula & Fissure Specialist',
  ogDescription:
    '25 years of focused Ayurvedic care for Piles, Fistula and Fissure with Dr. Venkhatesan in Porur, Chennai—without major operations.',
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
