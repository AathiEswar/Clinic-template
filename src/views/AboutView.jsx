'use client';

import { WHY_US } from '@/data';
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
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(135deg, rgba(8, 48, 58, 0.94), rgba(15, 23, 42, 0.95))' }}>
        <div className="container">
          <span className="chip chip--light">About Dharshini Laboratory</span>
          <h1 className="page-header__title">
            Over 15 Years of Dedicated <em>Diagnostic Care in Guduvancheri.</em>
          </h1>
          <p className="page-header__sub">
            Established in 2010, Dharshini Laboratory is a certified diagnostic center and clinical pathology laboratory located on Nellikuppam Road, opposite Guduvancheri, serving patients with prompt, accurate testing and doorstep sample collection.
          </p>
        </div>
      </section>

      {/* Core Story Section */}
      <section className="section about-story">
        <div className="container about-story__grid">
          <div className="about-story__text">
            <span className="eyebrow"><span className="eyebrow__dot" /> Our Diagnostic Commitment</span>
            <h2 className="h2">Precision Testing, Patient Comfort &amp; Fast Reports</h2>
            <p className="lead">
              Since 2010, Dharshini Laboratory in Kayarambedu / Guduvancheri has served as a dependable one-stop destination for clinical pathology and routine medical diagnostics.
            </p>
            <p>
              Diagnostic tests form the baseline of clinical treatment decisions. We prioritize high test accuracy, sterile single-use collection materials, and timely report delivery so treating physicians and patients have trustworthy health information when they need it most.
            </p>
            <p>
              To serve working individuals and fasting patients comfortably, our center opens every day from <strong>6:30 AM to 9:00 PM</strong>, including Sundays. For elderly patients or those unable to travel, our trained phlebotomists provide dedicated <strong>doorstep home sample collection</strong> across Guduvancheri, Kayarambedu, Moolakazhani, and Urapakkam.
            </p>

            <div className="about-story__badges">
              <div className="about-badge-item">
                <strong>2010</strong>
                <span>Established Year</span>
              </div>
              <div className="about-badge-item">
                <strong>7 Days</strong>
                <span>6:30 AM – 9:00 PM</span>
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
                {...img('/clinic-assets/dharshini-lab-reception.jpg', { sizes: SIZES.half })}
                alt="Dharshini Laboratory reception and testing counter in Kayarambedu, Guduvancheri"
                className="about-founder-img"
                style={{ objectPosition: 'center' }}
              />
              <div className="about-founder-badge">
                <strong>Dharshini Laboratory</strong>
                <span>Diagnostic Center · Est. 2010</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section about-why" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: '40px' }}>
            <span className="eyebrow"><span className="eyebrow__dot" /> Laboratory Standards</span>
            <h2 className="h2">Why Patients &amp; Doctors Trust Dharshini Laboratory</h2>
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
