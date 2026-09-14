'use client';

import { DOCTORS, WHY_US } from '@/data';
import { CLINIC } from '@/config';
import { useScroll } from '@/context/ScrollContext';
import Icon from '@/lib/Icons';
import Button from '@/components/Button';
import DoctorSpotlight from '@/components/DoctorSpotlight';
import { img, SIZES } from '@/lib/images';

export default function AboutView() {
  const { openBooking } = useScroll();
  const doctor = DOCTORS[0];

  return (
    <div className="page-view about-page">
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(135deg, rgba(8, 48, 58, 0.92), rgba(15, 23, 42, 0.94)), url(/clinic-assets/hero-bg-55.png)' }}>
        <div className="container">
          <span className="chip chip--light">About Dr. Dhananjayas Hospitals, Porur</span>
          <h1 className="page-header__title">
            25 Years of Focused <em>Ayurvedic Proctology in Porur.</em>
          </h1>
          <p className="page-header__sub">
            Gentle Ayurvedic care exclusively for Piles, Fistula and Fissure, led by {doctor.name} at Astalakshmi Nagar, Porur, Chennai—without major open operations.
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
              Dr. Dhananjayas Hospitals, Porur is a focused Ayurvedic centre for patients suffering from painful, distressing anorectal conditions: anal fistula, piles (hemorrhoids), and fissures.
            </p>
            <p>
              Conventional surgery for anal fistula (fistulotomy / fistulectomy) frequently involves cutting anal sphincter muscles. This carries an alarming 20% to 40% risk of permanent incontinence (inability to control gas or stool), severely impacting a patient's lifelong dignity. At Porur, <strong>{doctor.name}</strong> practises authentic, scientifically standardised <strong>Kshara Sutra therapy</strong> instead.
            </p>
            <p>
              By utilising medicated alkaline seton threads, the fistula tract is gently debrided and cut micro-millimeter by micro-millimeter while simultaneously stimulating healthy granulation tissue behind it. This guarantees <strong>100% sphincter preservation</strong>, virtually painless healing, and a recurrence rate under 1.5%.
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
                {...img(doctor.image, { sizes: SIZES.half })}
                alt={doctor.imageAlt}
                className="about-founder-img"
                style={{ objectPosition: 'center top' }}
              />
              <div className="about-founder-badge">
                <strong>{doctor.name}</strong>
                <span>{doctor.dept} · 25 Yrs Exp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Doctor */}
      <section className="section about-doctors" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: '48px' }}>
            <span className="eyebrow"><span className="eyebrow__dot" /> Your Doctor at Porur</span>
            <h2 className="h2">Meet {doctor.name}</h2>
            <p style={{ maxWidth: '640px', margin: '12px auto 0', color: 'var(--ink-2)' }}>
              Every patient at our Porur hospital is seen personally by {doctor.name} — a compassionate, highly experienced anorectal clinician committed to confidential, empathetic care and same-day recovery.
            </p>
          </div>

          <DoctorSpotlight />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section about-why">
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: '40px' }}>
            <span className="eyebrow"><span className="eyebrow__dot" /> The Dr. Dhananjayas Difference</span>
            <h2 className="h2">Why Patients Choose Our Porur Hospital</h2>
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
              Speak directly with {doctor.name}. Walk-ins and same-day day-care evaluations are welcome at Porur.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="light" icon="calendar" onClick={() => openBooking(doctor.dept, doctor.slot)}>
                Book confidential consultation
              </Button>
              <Button variant="light" icon="phone" href={CLINIC.phoneHref}>
                Call {CLINIC.phoneDisplay}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
