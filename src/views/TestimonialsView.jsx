'use client';

import { TESTIMONIALS } from '@/data';
import { CLINIC, WA_DEFAULT } from '@/config';
import { useScroll } from '@/context/ScrollContext';
import Icon from '@/lib/Icons';
import Button from '@/components/Button';
import { img, SIZES } from '@/lib/images';

export default function TestimonialsView() {
  const { openBooking } = useScroll();

  return (
    <div className="page-view testimonials-page">
      {/* Page Header */}
      <section
        className="page-header"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(8, 48, 58, 0.94), rgba(15, 23, 42, 0.95)), url(/clinic-assets/hero-bg-53.png)',
        }}
      >
        <div className="container">
          <span className="chip chip--light">Verified Patient Experiences</span>
          <h1 className="page-header__title">
            10,000+ Lives Restored With <em>Dignity &amp; Complete Comfort.</em>
          </h1>
          <p className="page-header__sub">
            Real stories from patients across Chennai and Tamil Nadu who overcame chronic piles, complex fistulas, and painful fissures through Dr. Dhananjaya&apos;s pioneering Kshara Sutra and day-care proctology care.
          </p>
        </div>
      </section>

      {/* Ratings & Proof Bar */}
      <section className="section testimonials-proof" style={{ padding: '40px 0 20px' }}>
        <div className="container">
          <div className="proof-banner">
            <div className="proof-banner__col">
              <div className="proof-stars">
                {'★'.repeat(5)}
              </div>
              <div className="proof-val">4.9 / 5.0 Rating</div>
              <div className="proof-lbl">Google Verified Patient Feedback</div>
            </div>
            <div className="proof-banner__divider" />
            <div className="proof-banner__col">
              <div className="proof-val">10,000+</div>
              <div className="proof-lbl">Permanent Recoveries in 25+ Years</div>
            </div>
            <div className="proof-banner__divider" />
            <div className="proof-banner__col">
              <div className="proof-val">100%</div>
              <div className="proof-lbl">Anal Sphincter &amp; Continence Preserved</div>
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
                <Icon name="map-pin" size={15} /> Read All Google Reviews ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section testimonials-list">
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: '40px' }}>
            <span className="eyebrow"><span className="eyebrow__dot" /> Genuine Patient Feedback</span>
            <h2 className="h2">What Our Patients Say About Their Care</h2>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, idx) => (
              <div className="testimonial-card testimonial-card--rich" key={idx}>
                <div className="testimonial-card__top">
                  <div className="testimonial-card__stars">{'★'.repeat(5)}</div>
                  <span className="testimonial-card__verified">
                    <Icon name="check" size={12} strokeWidth={3} /> Verified Patient
                  </span>
                </div>
                <blockquote className="testimonial-card__quote">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="testimonial-card__meta">
                    <strong>{t.name}</strong>
                    <span>{t.context}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Highlight Banner */}
      <section className="section video-highlight-section" style={{ background: 'var(--bg-soft)', padding: '60px 0' }}>
        <div className="container">
          <div className="video-highlight-card">
            <div className="video-highlight-text">
              <span className="chip chip--purple">Video Case Studies</span>
              <h2 className="h2" style={{ marginTop: '12px' }}>
                Hear Directly from Patients &amp; Watch Clinical Explanations
              </h2>
              <p style={{ color: 'var(--ink-2)', lineHeight: 1.6, margin: '14px 0 24px' }}>
                Visit our clinic YouTube channel and official library to view video walkthroughs of the Kshara Sutra technique, patient interviews after 20-year piles relief, and doctor guidance on avoiding painful conventional surgery.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://www.youtube.com/results?search_query=Dr+Dhananjaya+fistula+piles"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary"
                  data-cursor="hover"
                >
                  <Icon name="play" size={16} /> Watch Video Stories ↗
                </a>
                <Button variant="outline" icon="calendar" onClick={() => openBooking()}>
                  Book In-Person Consultation
                </Button>
              </div>
            </div>

            <div className="video-highlight-preview">
              <div className="video-thumb-frame">
                <img
                  {...img('/piles-treatment-banner.png', { sizes: SIZES.half })}
                  alt="Clinical explanation of piles, fistula and fissure treatment by Dr. Dhananjaya"
                  className="video-thumb-img"
                />
                <div className="video-play-btn-circle">
                  <Icon name="play" size={28} />
                </div>
                <div className="video-thumb-tag">
                  25+ Years Experience Documentary
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="section ctab" style={{ padding: '60px 0' }}>
        <div className="container text-center">
          <h2 className="h3" style={{ color: '#fff', marginBottom: '14px' }}>
            Don&apos;t live with silent pain or fear of conventional surgery.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '580px', margin: '0 auto 24px' }}>
            Book your confidential OPD consultation today at New Perungalathur (Tambaram) or Porur.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="light" icon="calendar" onClick={() => openBooking()}>
              Book confidential consultation
            </Button>
            <a className="btn btn--wa" href={WA_DEFAULT} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={17} /> Chat with Proctologist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
