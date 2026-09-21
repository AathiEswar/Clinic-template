'use client';

import { CLINIC, WA_DEFAULT } from '@/config';
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
          <span className="chip chip--light">Patient Trust &amp; Quality Standards</span>
          <h1 className="page-header__title">
            Committed to Accurate <em>Testing &amp; Patient Care.</em>
          </h1>
          <p className="page-header__sub">
            Serving patients across Guduvancheri, Kayarambedu, Moolakazhani, and Urapakkam since 2010 with certified pathology testing, sterile sample collection, and prompt report turnaround.
          </p>
        </div>
      </section>

      {/* Trust & Proof Bar */}
      <section className="section testimonials-proof" style={{ padding: '40px 0 20px' }}>
        <div className="container">
          <div className="proof-banner">
            <div className="proof-banner__col">
              <div className="proof-val">2010</div>
              <div className="proof-lbl">Established Year (15+ Yrs Service)</div>
            </div>
            <div className="proof-banner__divider" />
            <div className="proof-banner__col">
              <div className="proof-val">6:30 AM</div>
              <div className="proof-lbl">Early Morning Opening Every Day</div>
            </div>
            <div className="proof-banner__divider" />
            <div className="proof-banner__col">
              <div className="proof-val">100%</div>
              <div className="proof-lbl">Sterile Single-Use Vacutainer Protocol</div>
            </div>
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
            <span className="eyebrow"><span className="eyebrow__dot" /> Laboratory Standards</span>
            <h2 className="h2">Our Commitments to Every Patient</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'var(--surface)', padding: '28px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <span style={{ color: 'var(--teal)', display: 'inline-block', marginBottom: '12px' }}>
                <Icon name="shield" size={28} />
              </span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>100% Sterile &amp; Hygienic</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink-2)', lineHeight: 1.6 }}>
                Every blood sample is drawn using brand-new, sterile single-use vacuum collection tubes and needles, strictly adhering to universal biosafety precautions.
              </p>
            </div>

            <div style={{ background: 'var(--surface)', padding: '28px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <span style={{ color: 'var(--teal)', display: 'inline-block', marginBottom: '12px' }}>
                <Icon name="clock" size={28} />
              </span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Early 6:30 AM Opening</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink-2)', lineHeight: 1.6 }}>
                Patients undergoing fasting blood glucose or lipid evaluations can complete their tests early morning without unnecessary delays or prolonged hunger.
              </p>
            </div>

            <div style={{ background: 'var(--surface)', padding: '28px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <span style={{ color: 'var(--teal)', display: 'inline-block', marginBottom: '12px' }}>
                <Icon name="check" size={28} />
              </span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Prompt Digital Delivery</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink-2)', lineHeight: 1.6 }}>
                Reports for routine blood and urine analyses are processed with high precision and shared promptly via WhatsApp PDF and printed hard copies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <Faq />

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center', padding: '64px 0' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '16px' }}>Need to Schedule a Test?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 28px', color: 'var(--ink-2)' }}>
            Reach out to our laboratory directly or book a morning home blood collection visit.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" icon="calendar" onClick={() => openBooking()}>
              Book diagnostic test
            </Button>
            <Button variant="call" icon="phone" href={CLINIC.phoneHref}>
              Call {CLINIC.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
