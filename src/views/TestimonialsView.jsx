'use client';

import { Fragment } from 'react';
import { CLINIC, WA_DEFAULT } from '@/config';
import { QUALITY_STANDARDS } from '@/data';
import { useScroll } from '@/context/ScrollContext';
import Icon from '@/lib/Icons';
import Button from '@/components/Button';
import Faq from '@/sections/Faq';

export default function TestimonialsView() {
  const { openBooking } = useScroll();

  return (
    <div className="page-view testimonials-page">
      {/* Page Header */}
      <section
        className="page-header"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(8, 48, 58, 0.94), rgba(15, 23, 42, 0.95))',
        }}
      >
        <div className="container">
          <span className="chip chip--light">{QUALITY_STANDARDS.eyebrow || 'Patient Trust & Quality Standards'}</span>
          <h1 className="page-header__title">
            {QUALITY_STANDARDS.headerTitle || `Committed to Accurate Testing & Patient Care.`}
          </h1>
          <p className="page-header__sub">
            {QUALITY_STANDARDS.headerSub || CLINIC.slogan}
          </p>
        </div>
      </section>

      {/* Trust & Proof Bar */}
      <section className="section testimonials-proof" style={{ padding: '40px 0 20px' }}>
        <div className="container">
          <div className="proof-banner">
            {QUALITY_STANDARDS.proofItems?.map((item, idx) => (
              <Fragment key={idx}>
                {idx > 0 && <div className="proof-banner__divider" />}
                <div className="proof-banner__col">
                  <div className="proof-val">{item.val}</div>
                  <div className="proof-lbl">{item.lbl}</div>
                </div>
              </Fragment>
            ))}
            <div className="proof-banner__divider" />
            <div className="proof-banner__col">
              <a
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--outline btn--sm"
                data-cursor="hover"
              >
                <Icon name="map-pin" size={15} /> Official Google Maps Profile ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitments Grid */}
      <section className="section" style={{ background: 'var(--bg-soft)', padding: '64px 0' }}>
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: '40px' }}>
            <span className="eyebrow"><span className="eyebrow__dot" /> {QUALITY_STANDARDS.eyebrow || 'Laboratory Standards'}</span>
            <h2 className="h2">{QUALITY_STANDARDS.title || 'Our Commitments to Every Patient'}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {QUALITY_STANDARDS.cards?.map((card, idx) => (
              <div key={idx} style={{ background: 'var(--surface)', padding: '28px', borderRadius: '16px', border: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--teal)', display: 'inline-block', marginBottom: '12px' }}>
                  <Icon name={card.icon || 'shield'} size={28} />
                </span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{card.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--ink-2)', lineHeight: 1.6 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Faq />

      {/* Closing CTA */}
      <section className="section" style={{ padding: '40px 0 80px' }}>
        <div className="container text-center">
          <h2 className="h2" style={{ marginBottom: '16px' }}>Need to Schedule a Test or Home Visit?</h2>
          <p style={{ color: 'var(--ink-2)', maxWidth: '580px', margin: '0 auto 28px', lineHeight: 1.6 }}>
            Our center is open daily from {CLINIC.timings}. Call or message us directly on WhatsApp to confirm your preferred slot.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" icon="calendar" onClick={() => openBooking()}>
              Book Diagnostic Test
            </Button>
            <a className="btn btn--wa" href={WA_DEFAULT} target="_blank" rel="noreferrer" data-cursor="hover">
              <span className="btn__solo">Chat on WhatsApp</span>
              <span className="btn__ic"><Icon name="whatsapp" size={15} strokeWidth={2} /></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
