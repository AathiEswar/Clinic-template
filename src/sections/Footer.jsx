'use client';

import Link from 'next/link';
import { useScroll } from '@/context/ScrollContext';
import { CLINIC } from '@/config';
import { NAV_LINKS, SERVICES, BOOKING_CONFIG } from '@/data';
import Icon from '@/lib/Icons';

export default function Footer() {
  const { scrollTo, openBooking } = useScroll();

  const line1 = (CLINIC.wordmarkLine1 || CLINIC.name).split('');
  const line2 = (CLINIC.wordmarkLine2 || CLINIC.city || '').split('');

  return (
    <footer className="footer" data-scroll-section>
      <div className="container">
        <div className="footer__top">
          <p className="footer__tag" data-reveal>
            {CLINIC.tagline || `${CLINIC.name} · Open Daily ${CLINIC.timings}`}
          </p>
          <h2 className="footer__wordmark" aria-label={CLINIC.name}>
            <span className="footer__wordmark-line">
              {line1.map((ch, i) => (
                <span key={`l1-${i}`} style={{ '--i': i }}>
                  {ch === ' ' ? ' ' : ch}
                </span>
              ))}
            </span>
            {line2.length > 0 && (
              <span className="footer__wordmark-line">
                {line2.map((ch, i) => (
                  <span key={`l2-${i}`} style={{ '--i': i + 10 }}>
                    {ch === ' ' ? ' ' : ch}
                  </span>
                ))}
              </span>
            )}
          </h2>
        </div>

        <div className="footer__grid">
          <div className="footer__col footer__col--brand">
            <p>
              {CLINIC.slogan || `A dependable healthcare and diagnostic center in ${CLINIC.city}, established in ${CLINIC.establishedYear}.`}
            </p>
            <button className="btn btn--primary btn--sm" onClick={() => openBooking()} data-cursor="hover">
              <span className="btn__solo">{BOOKING_CONFIG.ctaLabel || 'Book Test'}</span>
              <span className="btn__ic"><Icon name="calendar" size={14} strokeWidth={2} /></span>
            </button>
          </div>

          <nav className="footer__col" aria-label="Explore">
            <h4>Explore</h4>
            {NAV_LINKS.map((l) => (
              <Link key={l.path} href={l.path} data-cursor="hover">
                {l.label}
              </Link>
            ))}
          </nav>

          <nav className="footer__col" aria-label="Services">
            <h4>Services</h4>
            {SERVICES.map((s) => (
              <Link key={s.id} href="/treatments" data-cursor="hover">
                {s.title.split('&')[0].trim()}
              </Link>
            ))}
            <Link href="/treatments" data-cursor="hover" style={{ color: 'var(--teal)', fontWeight: '600' }}>
              All Services →
            </Link>
          </nav>

          <div className="footer__col" aria-label="Contact">
            <h4>Visit Us</h4>
            <div style={{ marginBottom: '12px' }}>
              <strong style={{ color: '#fff', fontSize: '0.9rem' }}>{CLINIC.name}</strong>
              <p style={{ fontSize: '0.85rem', margin: '2px 0 6px' }}>{CLINIC.address}</p>
              <p style={{ fontSize: '0.85rem', margin: '0 0 8px' }}>{CLINIC.timings}</p>
              <a href={CLINIC.phoneHref} data-cursor="hover">Call / WhatsApp: {CLINIC.phoneDisplay}</a>
            </div>
            <a href={CLINIC.mapsUrl} target="_blank" rel="noreferrer" data-cursor="hover" style={{ color: 'var(--teal)', fontSize: '0.85rem' }}>
              Get directions on Google Maps ↗
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 {CLINIC.name}. All rights reserved.</p>
          <p className="footer__legal">
            <Link href="/about-us" data-cursor="hover">About</Link>
            <Link href="/gallery" data-cursor="hover">Facility Gallery</Link>
            <Link href="/contact" data-cursor="hover">Contact &amp; Location</Link>
          </p>
          <button
            className="footer__up round-btn"
            onClick={() => scrollTo(0, { duration: 0 })}
            aria-label="Back to top"
            data-cursor="hover"
          >
            <Icon name="arrowR" size={16} strokeWidth={2} className="rot--90" />
          </button>
        </div>
      </div>
    </footer>
  );
}
