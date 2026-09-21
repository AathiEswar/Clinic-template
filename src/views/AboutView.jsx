'use client';

import { WHY_US, ABOUT_PAGE_CONTENT } from '@/data';
import { CLINIC } from '@/config';
import { useScroll } from '@/context/ScrollContext';
import Icon from '@/lib/Icons';
import Button from '@/components/Button';
import { img, SIZES, HERO_IMAGE } from '@/lib/images';

export default function AboutView() {
  const { openBooking } = useScroll();

  const story = ABOUT_PAGE_CONTENT || {};
  const paragraphs = story.paragraphs || [
    CLINIC.slogan,
    CLINIC.motto,
  ];

  return (
    <div className="page-view about-page">
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(135deg, rgba(8, 48, 58, 0.94), rgba(15, 23, 42, 0.95))' }}>
        <div className="container">
          <span className="chip chip--light">{story.chip || `About ${CLINIC.name}`}</span>
          <h1 className="page-header__title">
            {story.title || `${CLINIC.experienceYears} Years of Dedicated Service.`}
          </h1>
          <p className="page-header__sub">
            {story.sub || CLINIC.slogan}
          </p>
        </div>
      </section>

      {/* Core Story Section */}
      <section className="section about-story">
        <div className="container about-story__grid">
          <div className="about-story__text">
            <span className="eyebrow"><span className="eyebrow__dot" /> {story.sectionEyebrow || 'Our Commitment'}</span>
            <h2 className="h2">{story.sectionHeading || 'Quality & Patient Care'}</h2>
            
            {paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'lead' : ''}>
                {p}
              </p>
            ))}

            <div className="about-story__badges">
              <div className="about-badge-item">
                <strong>{CLINIC.establishedYear}</strong>
                <span>Established Year</span>
              </div>
              <div className="about-badge-item">
                <strong>7 Days</strong>
                <span>{CLINIC.timings}</span>
              </div>
              <div className="about-badge-item">
                <strong>100%</strong>
                <span>Sterile Protocol</span>
              </div>
            </div>
          </div>

          <div className="about-story__visual">
            <div className="about-img-frame">
              <img
                {...img(HERO_IMAGE, { sizes: SIZES.half })}
                alt={`${CLINIC.name} facility and reception in ${CLINIC.locality || CLINIC.city}`}
                className="about-founder-img"
                style={{ objectPosition: 'center' }}
              />
              <div className="about-founder-badge">
                <strong>{CLINIC.name}</strong>
                <span>{CLINIC.tagline?.split('·')?.[0]?.trim() || 'Diagnostic Center'} · Est. {CLINIC.establishedYear}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section about-why" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: '40px' }}>
            <span className="eyebrow"><span className="eyebrow__dot" /> Quality Standards</span>
            <h2 className="h2">Why Patients &amp; Doctors Trust {CLINIC.name}</h2>
          </div>

          <div className="about-why__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {WHY_US.map((item, idx) => (
              <div key={idx} style={{ background: 'var(--surface)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--teal)', display: 'flex', marginTop: '2px' }}><Icon name="check" size={20} strokeWidth={2.4} /></span>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--ink)' }}>{item}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Button variant="primary" icon="calendar" onClick={() => openBooking()}>
              Book diagnostic test
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
