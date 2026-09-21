import { CLINIC, WA_DEFAULT } from '@/config';
import BookingForm from '@/components/BookingForm';
import Icon from '@/lib/Icons';

export default function ContactView() {
  return (
    <div className="page-view contact-page">
      {/* Page Header */}
      <section
        className="page-header"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(8, 48, 58, 0.94), rgba(15, 23, 42, 0.95))',
        }}
      >
        <div className="container">
          <span className="chip chip--light">SP MAHAL, Nellikuppam Rd, Guduvancheri</span>
          <h1 className="page-header__title">
            Visit Dharshini Laboratory <em>in Guduvancheri.</em>
          </h1>
          <p className="page-header__sub">
            Serving Kayarambedu, Moolakazhani, Guduvancheri, and Urapakkam with certified clinical pathology, routine blood testing, and doorstep home sample collection — open daily 6:30 AM to 9:00 PM.
          </p>
        </div>
      </section>

      {/* Location Card & Map */}
      <section className="section branch-locations-section">
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: '40px' }}>
            <span className="eyebrow"><span className="eyebrow__dot" /> Laboratory Location</span>
            <h2 className="h2">How to Reach Us</h2>
          </div>

          <div className="branches-grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="branch-card">
              <div className="branch-card__header">
                <span className="chip chip--tint">Diagnostic Center &amp; Pathology Lab</span>
                <h3>{CLINIC.name}</h3>
              </div>

              {/* Embedded Google Map */}
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)', margin: '16px 0' }}>
                <iframe
                  title="Dharshini Laboratory Google Maps Location"
                  src={CLINIC.mapsEmbedUrl}
                  width="100%"
                  height="260"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="branch-card__body">
                <div className="branch-info-row">
                  <span className="branch-info-icon"><Icon name="map-pin" size={18} /></span>
                  <div>
                    <strong>Address:</strong>
                    <p>{CLINIC.address}</p>
                  </div>
                </div>

                <div className="branch-info-row">
                  <span className="branch-info-icon"><Icon name="pin" size={18} /></span>
                  <div>
                    <strong>Landmark &amp; Plus Code:</strong>
                    <p>{CLINIC.landmark} (Plus Code: {CLINIC.plusCode})</p>
                  </div>
                </div>

                <div className="branch-info-row">
                  <span className="branch-info-icon"><Icon name="phone" size={18} /></span>
                  <div>
                    <strong>Call / WhatsApp:</strong>
                    <p><a href={CLINIC.phoneHref}>{CLINIC.phoneDisplay}</a></p>
                  </div>
                </div>

                <div className="branch-info-row">
                  <span className="branch-info-icon"><Icon name="clock" size={18} /></span>
                  <div>
                    <strong>Timings:</strong>
                    <p>{CLINIC.timings} (Open 7 Days a Week)</p>
                  </div>
                </div>
              </div>

              <div className="branch-card__actions">
                <a
                  href={CLINIC.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--outline btn--sm"
                  data-cursor="hover"
                >
                  <Icon name="map-pin" size={14} /> Get Directions on Google Maps ↗
                </a>
                <a href={CLINIC.phoneHref} className="btn btn--call btn--sm" data-cursor="hover">
                  <Icon name="phone" size={14} /> Call {CLINIC.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking & Direct Helpline Section */}
      <section className="section contact-form-section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="contact-page__split">
            {/* Form Column */}
            <div className="contact-page__form-box">
              <div className="section-head" style={{ marginBottom: '24px' }}>
                <span className="eyebrow"><span className="eyebrow__dot" /> Diagnostic Request</span>
                <h3 className="h3">Book a Test or Home Collection</h3>
                <p style={{ color: 'var(--ink-2)', fontSize: '0.92rem', marginTop: '6px' }}>
                  Schedule your diagnostic test or request a doorstep morning blood sample draw.
                </p>
              </div>
              <BookingForm />
            </div>

            {/* Direct Helpline Column */}
            <div className="contact-page__info-box">
              <div className="helpline-card">
                <span className="helpline-badge">Direct Laboratory Contact</span>
                <h3>Immediate Assistance</h3>
                <p>
                  Have a question about test fasting rules, report timings, or sample collection? Call or message our team directly.
                </p>

                <div className="helpline-phone-box">
                  <span className="helpline-sub">Primary Contact Number</span>
                  <a href={CLINIC.phoneHref} className="helpline-number">
                    {CLINIC.phoneDisplay}
                  </a>
                  <span className="helpline-avail">Available Daily: 6:30 AM – 9:00 PM</span>
                </div>

                <div className="helpline-actions">
                  <a href={CLINIC.phoneHref} className="btn btn--call btn--block" data-cursor="hover">
                    <span className="btn__solo">Call Now</span>
                    <span className="btn__ic"><Icon name="phone" size={16} strokeWidth={2} /></span>
                  </a>
                  <a href={WA_DEFAULT} target="_blank" rel="noreferrer" className="btn btn--wa btn--block" data-cursor="hover">
                    <span className="btn__solo">Message on WhatsApp</span>
                    <span className="btn__ic"><Icon name="whatsapp" size={16} strokeWidth={2} /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
