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
            'linear-gradient(135deg, rgba(8, 48, 58, 0.94), rgba(15, 23, 42, 0.95)), url(/clinic-assets/hero-bg-55.png)',
        }}
      >
        <div className="container">
          <span className="chip chip--light">Astalakshmi Nagar, Porur, Chennai</span>
          <h1 className="page-header__title">
            Visit Dr. Dhananjayas Hospitals <em>in Porur.</em>
          </h1>
          <p className="page-header__sub">
            Day-care minor OT, a private consultation chamber with {CLINIC.doctorName}, and a dedicated post-procedure observation room — open every day, 10:00 AM to 7:30 PM.
          </p>
        </div>
      </section>

      {/* Location Card */}
      <section className="section branch-locations-section">
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: '40px' }}>
            <span className="eyebrow"><span className="eyebrow__dot" /> Hospital Location</span>
            <h2 className="h2">How to Reach Us</h2>
          </div>

          <div className="branches-grid" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div className="branch-card">
              <div className="branch-card__header">
                <span className="chip chip--tint">Ayurvedic Piles, Fistula &amp; Fissure Hospital</span>
                <h3>{CLINIC.name}</h3>
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
                    <strong>Landmark:</strong>
                    <p>{CLINIC.landmark}</p>
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
                    <p>{CLINIC.timings}</p>
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
                <span className="chip chip--purple">Online Appointment</span>
                <h2 className="h2" style={{ marginTop: '8px' }}>Request A Confidential Slot</h2>
                <p style={{ color: 'var(--ink-2)' }}>
                  Same-day and priority consultation appointments with {CLINIC.doctorName}. All enquiries are handled with strict medical confidentiality.
                </p>
              </div>
              <BookingForm />
            </div>

            {/* Helpline & Quick Assistance Column */}
            <div className="contact-page__helpline-box">
              <div className="helpline-card">
                <h3>Direct Proctologist Hotline</h3>
                <p>Have urgent symptoms, severe anorectal pain, or bleeding? One number for calls and WhatsApp.</p>
                <div className="helpline-number">
                  <a href={CLINIC.phoneHref} className="helpline-link">
                    <Icon name="phone" size={24} /> {CLINIC.phoneDisplay}
                  </a>
                </div>
                <div className="helpline-wa">
                  <a
                    href={WA_DEFAULT}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--wa btn--full"
                    data-cursor="hover"
                  >
                    <Icon name="whatsapp" size={18} /> Chat Privately on WhatsApp
                  </a>
                </div>
              </div>

              <div className="helpline-info-box">
                <h4>What to Expect on Your First Visit</h4>
                <ul className="visit-tips-list">
                  <li>
                    <Icon name="check" size={14} strokeWidth={3} />
                    <span><strong>Empathetic Consultation:</strong> Thorough discussion of your history and symptoms with {CLINIC.doctorName} in a private chamber.</span>
                  </li>
                  <li>
                    <Icon name="check" size={14} strokeWidth={3} />
                    <span><strong>Gentle Examination:</strong> Respectful, painless digital evaluation to assess the exact grade.</span>
                  </li>
                  <li>
                    <Icon name="check" size={14} strokeWidth={3} />
                    <span><strong>Focused Ayurvedic Advice:</strong> Clear guidance for Piles, Fistula or Fissure using medicines, local care, diet support, or Kshara Sutra when appropriate.</span>
                  </li>
                  <li>
                    <Icon name="check" size={14} strokeWidth={3} />
                    <span><strong>No Major Operations:</strong> Our hospital focuses on gentle Ayurvedic treatment and day-care care.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
