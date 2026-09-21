'use client';

import { useState } from 'react';
import { SERVICES } from '@/data';
import { CLINIC, WA_DEFAULT } from '@/config';
import { useScroll } from '@/context/ScrollContext';
import Icon from '@/lib/Icons';
import Button from '@/components/Button';
import { img, SIZES } from '@/lib/images';

export default function TreatmentsView() {
  const { openBooking } = useScroll();
  const [selectedId, setSelectedId] = useState(SERVICES[0].id);

  return (
    <div className="page-view treatments-page">
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(135deg, rgba(8, 48, 58, 0.94), rgba(15, 23, 42, 0.95))' }}>
        <div className="container">
          <span className="chip chip--light">Diagnostic Pathology &amp; Health Testing</span>
          <h1 className="page-header__title">
            Certified Clinical <em>Testing &amp; Diagnostics.</em>
          </h1>
          <p className="page-header__sub">
            Comprehensive blood profiles, metabolic screenings, thyroid panels, and convenient doorstep home sample collection across Guduvancheri and Kayarambedu.
          </p>
        </div>
      </section>

      {/* Treatments Detail Navigator */}
      <section className="section treatments-detail">
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: '40px' }}>
            <span className="eyebrow"><span className="eyebrow__dot" /> Diagnostic Services</span>
            <h2 className="h2">Select a Test Category</h2>
          </div>

          <div className="treatments-layout">
            {/* Left Nav Pill List */}
            <div className="treatments-nav-list" role="tablist" aria-label="Diagnostic Services" aria-orientation="vertical">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  id={`treatment-tab-${s.id}`}
                  className={`treatments-nav-btn ${selectedId === s.id ? 'is-active' : ''}`}
                  onClick={() => setSelectedId(s.id)}
                  role="tab"
                  aria-selected={selectedId === s.id}
                  aria-controls={`treatment-panel-${s.id}`}
                  data-cursor="hover"
                >
                  <span className="treatments-nav-btn__ic"><Icon name={s.icon} size={20} /></span>
                  <div className="treatments-nav-btn__text">
                    <strong>{s.title.split('&')[0]}</strong>
                    <span lang="ta">{s.tamilTitle}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Detailed Article Box */}
            {SERVICES.map((s) => (
              <div
                key={s.id}
                id={`treatment-panel-${s.id}`}
                className="treatments-detail-card"
                role="tabpanel"
                aria-labelledby={`treatment-tab-${s.id}`}
                hidden={selectedId !== s.id}
              >
                <div className="treatments-detail-card__image-wrap">
                  <img
                    {...img(s.image, { sizes: SIZES.detail })}
                    alt={s.imageAlt}
                    className="treatments-detail-card__image"
                  />
                </div>
                <div className="treatments-detail-card__head">
                  <span className="chip chip--purple">{s.meta}</span>
                  <h2>{s.title}</h2>
                  <p className="treatments-detail-card__tamil" lang="ta">{s.tamilTitle}</p>
                </div>

                <div className="treatments-detail-card__body">
                  <p className="lead">{s.desc}</p>
                  <p>{s.longDesc}</p>

                  <div className="treatments-chips-row">
                    {s.chips.map((c) => (
                      <span className="chip" key={c}>✓ {c}</span>
                    ))}
                  </div>

                  <div className="treatments-detail-card__actions">
                    <Button variant="primary" icon="calendar" onClick={() => openBooking(s.title)}>
                      Book this test
                    </Button>
                    <a
                      className="btn btn--wa"
                      href={`https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(`Hi ${CLINIC.name}! I would like to enquire about: ${s.title}`)}`}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="hover"
                    >
                      <span className="btn__solo">Inquire on WhatsApp</span>
                      <span className="btn__ic"><Icon name="whatsapp" size={15} strokeWidth={2} /></span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Preparation Guide */}
      <section className="section" style={{ background: 'var(--bg-soft)', padding: '64px 0' }}>
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: '40px' }}>
            <span className="eyebrow"><span className="eyebrow__dot" /> Test Preparation</span>
            <h2 className="h2">Important Guidelines Before Your Test</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'var(--surface)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--teal)', marginBottom: '8px' }}>Fasting Blood Tests</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink-2)', lineHeight: 1.6 }}>
                For Fasting Blood Sugar (FBS) and Lipid Profiles, fast for 8 to 12 hours overnight. Drinking plain water is permitted. Take regular morning medications only as advised by your physician.
              </p>
            </div>
            <div style={{ background: 'var(--surface)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--teal)', marginBottom: '8px' }}>Non-Fasting Tests</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink-2)', lineHeight: 1.6 }}>
                Tests such as Complete Blood Count (CBC), Hemoglobin, and HbA1c (3-month blood sugar average) do not require fasting and can be drawn any time during our operating hours.
              </p>
            </div>
            <div style={{ background: 'var(--surface)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--teal)', marginBottom: '8px' }}>Doorstep Home Collection</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink-2)', lineHeight: 1.6 }}>
                Call or WhatsApp +91 99628 99950 the evening prior or early morning to arrange a doorstep visit. Our technician arrives with sterile single-use vacutainers and coolers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
