'use client';

import { DOCTORS, WHY_US } from '@/data';
import { CLINIC } from '@/config';
import { useScroll } from '@/context/ScrollContext';
import Icon from '@/lib/Icons';
import Button from '@/components/Button';
import { img, SIZES } from '@/lib/images';

export default function AboutView() {
  const { openBooking } = useScroll();

  return (
    <div className="page-view about-page">
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(135deg, rgba(8, 48, 58, 0.92), rgba(15, 23, 42, 0.94)), url(/clinic-assets/hero-bg-55.png)' }}>
        <div className="container">
          <span className="chip chip--light">About Dr. Dhananjayas Hospitals &amp; Clinic</span>
          <h1 className="page-header__title">
            25+ Years of Focused <em>Ayurvedic Proctology.</em>
          </h1>
          <p className="page-header__sub">
            Gentle Ayurvedic care exclusively for Piles, Fistula and Fissure across New Perungalathur, Tambaram &amp; Porur, Chennai—without major open operations.
          </p>
        </div>
      </section>

      {/* Core Story Section */}
      <section className="section about-story">
        <div className="container about-story__grid">
          <div className="about-story__text">
            <span className="eyebrow"><span className="eyebrow__dot" /> Our Clinical Mission</span>
            <h2 className="h2">Restoring Comfort, Dignity &amp; Natural Bowel Control</h2>
            <p className="lead">
              For more than 25 years, Dr. Dhananjayas Hospitals &amp; Clinic has stood as a beacon of hope for patients suffering from painful, distressing anorectal conditions like anal fistula, piles (hemorrhoids), and fissures.
            </p>
            <p>
              Conventional surgery for anal fistula (fistulotomy / fistulectomy) frequently involves cutting anal sphincter muscles. This carries an alarming 20% to 40% risk of permanent incontinence (inability to control gas or stool), severely impacting a patient's lifelong dignity. Recognizing this tragic limitation, <strong>Dr. Dhananjaya</strong> championed authentic, scientifically standardized <strong>Kshara Sutra therapy</strong> in Chennai.
            </p>
            <p>
              By utilizing medicated alkaline seton threads, the fistula tract is gently debrided and cut micro-millimeter by micro-millimeter while simultaneously stimulating healthy granulation tissue behind it. This guarantees <strong>100% sphincter preservation</strong>, virtually painless healing, and a recurrence rate under 1.5%.
            </p>

            <div className="about-story__badges">
              <div className="about-badge-item">
                <strong>100%</strong>
                <span>Continence Preserved</span>
              </div>
              <div className="about-badge-item">
                <strong>&lt; 1.5%</strong>
                <span>Near-Zero Recurrence</span>
              </div>
              <div className="about-badge-item">
                <strong>30 Mins</strong>
                <span>Day-Care Procedure</span>
              </div>
            </div>
          </div>

          <div className="about-story__visual">
            <div className="about-img-frame">
              <img
                {...img('/dr-dhananjaya-portrait.jpg', { sizes: SIZES.half })}
                alt="Dr. Dhananjaya, Founder & Chief Ayurvedic Proctologist at Dr. Dhananjayas Clinic"
                className="about-founder-img"
              />
              <div className="about-founder-badge">
                <strong>Dr. Dhananjaya</strong>
                <span>Founder &amp; Chief Ayurvedic Proctologist · 25+ Yrs Exp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="section about-doctors" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: '48px' }}>
            <span className="eyebrow"><span className="eyebrow__dot" /> Our Senior Specialists</span>
            <h2 className="h2">Meet Our Ayurvedic Proctology Specialists</h2>
            <p style={{ maxWidth: '640px', margin: '12px auto 0', color: 'var(--ink-2)' }}>
              Compassionate, highly experienced anorectal clinicians committed to confidential, empathetic care and same-day recovery.
            </p>
          </div>

          <div className="about-docs-grid">
            {DOCTORS.map((doc) => (
              <div className="about-doc-card" key={doc.name}>
                <div className="about-doc-card__img-wrap">
                  <img {...img(doc.image || '/dr-dhananjaya-portrait.jpg', { sizes: SIZES.half })} alt={`${doc.name}, ${doc.dept}`} className="about-doc-card__img" />
                  <span className="about-doc-card__exp">{doc.exp}</span>
                </div>
                <div className="about-doc-card__info">
                  <h3>{doc.name}</h3>
                  <p className="about-doc-card__dept">{doc.dept}</p>
                  <p className="about-doc-card__creds">{doc.creds}</p>
                  <p className="about-doc-card__bio">{doc.bio}</p>
                  <div className="about-doc-card__slot">
                    <Icon name="clock" size={15} /> <strong>OPD Hours:</strong> {doc.slot}
                  </div>
                  <Button variant="primary" className="btn--sm" onClick={() => openBooking(doc.dept, doc.slot)} icon="calendar">
                    Book consultation with {doc.name.split(' ')[1] || doc.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section about-why">
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: '40px' }}>
            <span className="eyebrow"><span className="eyebrow__dot" /> The Dr. Dhananjayas Difference</span>
            <h2 className="h2">Why Patients Choose Our Hospitals &amp; Clinic</h2>
          </div>

          <div className="about-why-grid">
            {WHY_US.map((item, idx) => (
              <div className="about-why-card" key={idx}>
                <span className="about-why-icon"><Icon name="check" size={16} strokeWidth={3} /></span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="section ctab" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="ctab__panel text-center">
            <h2 className="h3" style={{ color: '#fff', marginBottom: '14px' }}>
              Suffering from painful piles, fissure, or chronic fistula discharge?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '580px', margin: '0 auto 24px' }}>
              Speak directly with our clinical proctology team. Walk-ins and same-day day-care evaluations are welcome.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="light" icon="calendar" onClick={() => openBooking()}>
                Book confidential consultation
              </Button>
              <Button variant="outline-light" icon="phone" href={CLINIC.phoneHref}>
                Call {CLINIC.phoneDisplay}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
