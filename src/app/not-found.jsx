import Link from 'next/link';
import { CLINIC } from '@/config';

/* Real 404 (exported as out/404.html). The old SPA rendered the home page for
   unknown URLs with a 200 status — a "soft 404" that search engines penalise. */
export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="page-view notfound-page">
      <section
        className="page-header"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(8, 48, 58, 0.94), rgba(15, 23, 42, 0.95)), url(/clinic-assets/hero-bg-52.png)',
        }}
      >
        <div className="container">
          <span className="chip chip--light">Error 404</span>
          <h1 className="page-header__title">
            This page <em>doesn’t exist.</em>
          </h1>
          <p className="page-header__sub">
            The link may be outdated or mistyped. Head back to the home page, or call{' '}
            {CLINIC.phoneDisplay} and we’ll point you in the right direction.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px' }}>
            <Link href="/" className="btn btn--light" data-cursor="hover">
              <span className="btn__solo">Back to home</span>
            </Link>
            <Link href="/treatments" className="btn btn--outline-light" data-cursor="hover">
              <span className="btn__solo">View diagnostic services</span>
            </Link>
            <a href={CLINIC.phoneHref} className="btn btn--outline-light" data-cursor="hover">
              <span className="btn__solo">Call {CLINIC.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
