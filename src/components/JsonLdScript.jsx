import { safeJsonLd } from '@/lib/seo';

/** Renders one JSON-LD <script>. Server-safe; never lets "</script>" through. */
export default function JsonLdScript({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }} />;
}
