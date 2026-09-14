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
          <span className="chip chip--light">Multiple Locations Across Chennai</span>
          <h1 className="page-header__title">
            Visit Our Centers in <em>Tambaram, Porur &amp; Koyambedu.</em>
          </h1>
          <p className="page-header__sub">
            Convenient proctology access with state-of-the-art day-care minor OTs, private consultation suites, and dedicated post-procedure observation rooms.
          </p>
        </div>
      </section>

      {/* Multi-Branch Cards Section */}
      <section className="section branch-locations-section">
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: '40px' }}>
            <span className="eyebrow"><span className="eyebrow__dot" /> Clinical Centers</span>
            <h2 className="h2">Select Your Nearest Hospital / Clinic Branch</h2>
          </div>

          <div className="branches-grid">
            {CLINIC.branches.map((b) => (
              <div className="branch-card" key={b.id}>
                <div className="branch-card__header">
                  <span className="chip chip--tint">{b.tag}</span>
                  <h3>{b.name}</h3>
                </div>

                <div className="branch-card__body">
                  <div className="branch-info-row">
                    <span className="branch-info-icon"><Icon name="map-pin" size={18} /></span>
                    <div>
                      <strong>Address:</strong>
                      <p>{b.address}</p>
                    </div>
                  </div>

                  <div className="branch-info-row">
                    <span className="branch-info-icon"><Icon name="pin" size={18} /></span>
                    <div>
                      <strong>Landmark:</strong>
                      <p>{b.landmark}</p>
                    </div>
                  </div>

                  <div className="branch-info-row">
                    <span className="branch-info-icon"><Icon name="phone" size={18} /></span>
                    <div>
                      <strong>Helpline:</strong>
                      <p><a href={b.phoneHref}>{b.phone}</a></p>
                    </div>
                  </div>

                  <div className="branch-info-row">
                    <span className="branch-info-icon"><Icon name="clock" size={18} /></span>
                    <div>
                      <strong>Timings:</strong>
                      <p>{b.timings}</p>
                    </div>
                  </div>
                </div>

                <div className="branch-card__actions">
                  <a
                    href={b.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--outline btn--sm"
                    data-cursor="hover"
                  >
                    <Icon name="map-pin" size={14} /> Get Directions on Google Maps ↗
                  </a>
                  <a
                    href={b.phoneHref}
                    className="btn btn--primary btn--sm"
                    data-cursor="hover"
                  >
                    <Icon name="phone" size={14} /> Call Branch
                  </a>
                </div>
              </div>
            ))}
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
                  Same-day and priority consultation appointments available. All enquiries are handled with strict medical confidentiality.
                </p>
              </div>
              <BookingForm />
            </div>

            {/* Helpline & Quick Assistance Column */}
            <div className="contact-page__helpline-box">
              <div className="helpline-card">
                <h3>Direct Proctologist Hotline</h3>
                <p>Have urgent symptoms, severe anorectal pain, or bleeding?</p>
                <div className="helpline-number">
                  <a href={CLINIC.phoneHref} className="helpline-link">
                    <Icon name="phone" size={24} /> {CLINIC.phoneDisplay}
                  </a>
                  <a href={CLINIC.phoneAltHref} className="helpline-link">
                    <Icon name="phone" size={24} /> {CLINIC.phoneAltDisplay}
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
                    <span><strong>Empathetic Consultation:</strong> Thorough discussion of your history and symptoms in a private chamber.</span>
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
                    <span><strong>No Major Operations:</strong> Our clinic focuses on gentle Ayurvedic treatment and day-care care.</span>
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
