'use client';

import { useState } from 'react';
import { SERVICES, MEDICAL_ARTICLES } from '@/data';
import { WA_DEFAULT } from '@/config';
import { useScroll } from '@/context/ScrollContext';
import Icon from '@/lib/Icons';
import Button from '@/components/Button';
import ProcedureGuide from '@/sections/ProcedureGuide';
import { img, SIZES } from '@/lib/images';

export default function TreatmentsView() {
  const { openBooking } = useScroll();
  const [selectedId, setSelectedId] = useState(SERVICES[0].id);

  return (
    <div className="page-view treatments-page">
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(135deg, rgba(8, 48, 58, 0.94), rgba(15, 23, 42, 0.95)), url(/clinic-assets/hero-bg-54.png)' }}>
        <div className="container">
          <span className="chip chip--light">Focused Ayurvedic Proctology</span>
          <h1 className="page-header__title">
            Ayurvedic Treatment For <em>Piles, Fistula &amp; Fissure.</em>
          </h1>
          <p className="page-header__sub">
            Three focused services only, with personalized Ayurvedic care and authentic Kshara Sutra when appropriate—without major open operations.
          </p>
        </div>
      </section>

      {/* Treatments Detail Navigator */}
      <section className="section treatments-detail">
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: '40px' }}>
            <span className="eyebrow"><span className="eyebrow__dot" /> Our Three Treatments</span>
            <h2 className="h2">Choose Piles, Fistula or Fissure</h2>
          </div>

          <div className="treatments-layout">
            {/* Left Nav Pill List */}
            <div className="treatments-nav-list" role="tablist" aria-label="Treatments" aria-orientation="vertical">
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
                    <strong>{s.title.split('(')[0]}</strong>
                    <span lang="ta">{s.tamilTitle}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Detailed Article Box — one panel per treatment. All three are in the
                pre-rendered HTML for search engines; only the selected one is displayed. */}
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
                      Book treatment consultation
                    </Button>
                    <a
                      className="btn btn--wa"
                      href={WA_DEFAULT}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="hover"
                    >
                      <Icon name="whatsapp" size={17} /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Articles / Diagnostic Differences */}
      <section className="section medical-articles" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: '48px' }}>
            <span className="eyebrow"><span className="eyebrow__dot" /> Clinical Guidance</span>
            <h2 className="h2">Understanding Your Symptoms: Clinical Guides</h2>
            <p style={{ maxWidth: '640px', margin: '12px auto 0', color: 'var(--ink-2)' }}>
              Detailed explanations from Dr. Venkhatesan on how to distinguish between common anorectal diseases.
            </p>
          </div>

          <div className="articles-grid">
            {MEDICAL_ARTICLES.map((art) => (
              <article className="med-art-card" key={art.id}>
                <span className="chip chip--tint">Specialist Guide</span>
                <h3>{art.title}</h3>
                <p className="med-art-card__sub">{art.subtitle}</p>
                <p className="med-art-card__sum">{art.summary}</p>

                {art.points && (
                  <ul className="med-art-card__list">
                    {art.points.map((pt, i) => (
                      <li key={i}>
                        <span className="med-art-card__check"><Icon name="check" size={13} strokeWidth={3} /></span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {art.comparison && (
                  <div className="med-art-card__table-wrap">
                    <table className="med-art-table">
                      <thead>
                        <tr>
                          <th>Condition</th>
                          <th>Key Distinguishing Symptoms</th>
                        </tr>
                      </thead>
                      <tbody>
                        {art.comparison.map((row, i) => (
                          <tr key={i}>
                            <td><strong>{row.condition}</strong></td>
                            <td>{row.symptoms}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure Guide & Comparative Surgery Table */}
      <ProcedureGuide />
    </div>
  );
}
