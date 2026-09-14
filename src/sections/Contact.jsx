import { CLINIC, WA_DEFAULT } from '@/config';
import SectionHeader from '@/components/SectionHeader';
import BookingForm from '@/components/BookingForm';
import Icon from '@/lib/Icons';

export default function Contact() {
  return (
    <section className="contact section" data-scroll-section id="visit">
      <div className="container">
        <SectionHeader
          eyebrow="Visit Dr. Dhananjayas Hospitals, Porur"
          segments={[{ t: 'Conveniently located at Pillayar Koil St, ' }, { t: 'Astalakshmi Nagar, Porur.', em: true }]}
        />

        <div className="contact__grid">
          <div className="contact__info">
            <a
              className="contact__map"
              href={CLINIC.mapsUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Dr. Dhananjayas Hospitals Porur in Google Maps"
              data-cursor="hover"
              data-reveal
            >
              <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <rect width="400" height="240" fill="#EBF2EE" />
                <path d="M-10 190 C80 150 140 230 230 196 S380 150 420 176" fill="none" stroke="#D1E2D8" strokeWidth="26" strokeLinecap="round" />
                <g stroke="#DDD6C8" strokeWidth="7" strokeLinecap="round">
                  <path d="M40 -10 V250" /><path d="M110 -10 V250" /><path d="M180 -10 V250" />
                  <path d="M250 -10 V250" /><path d="M320 -10 V250" />
                  <path d="M-10 60 H410" /><path d="M-10 130 H410" />
                </g>
                <g stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.9">
                  <path d="M40 -10 V250" /><path d="M180 -10 V250" /><path d="M320 -10 V250" /><path d="M-10 60 H410" />
                </g>
                <circle cx="200" cy="118" r="34" fill="#0F4C3A" opacity="0.14" />
              </svg>
              <span className="contact__pin" aria-hidden="true">
                <Icon name="pin" size={22} strokeWidth={2} />
                <i className="contact__pin-pulse" />
              </span>
              <span className="contact__map-cta">
                Get directions on Google Maps <Icon name="arrow" size={14} strokeWidth={2.2} />
              </span>
            </a>

            <address className="contact__addr" data-reveal>
              <h3>{CLINIC.name}</h3>
              <p>{CLINIC.address}</p>
              <p className="contact__landmark" style={{ color: 'var(--teal)', fontWeight: '600', marginTop: '6px' }}>Landmark: {CLINIC.landmark}</p>
            </address>

            <div className="contact__hours" data-reveal>
              <h4><Icon name="clock" size={15} /> Hours</h4>
              <dl>
                {CLINIC.hours.map((h) => (
                  <div key={h.days}><dt>{h.days}</dt><dd>{h.time}</dd></div>
                ))}
              </dl>
            </div>

            <div className="contact__channels" data-reveal>
              <a className="btn btn--call" href={CLINIC.phoneHref} data-cursor="hover">
                <span className="btn__solo">{CLINIC.phoneDisplay}</span>
                <span className="btn__ic"><Icon name="phone" size={15} strokeWidth={2} /></span>
              </a>
              <a className="btn btn--wa" href={WA_DEFAULT} target="_blank" rel="noreferrer" data-cursor="hover">
                <span className="btn__solo">Chat on WhatsApp</span>
                <span className="btn__ic"><Icon name="whatsapp" size={15} strokeWidth={2} /></span>
              </a>
              <a className="contact__mail" href={`mailto:${CLINIC.email}`} data-cursor="hover">
                <Icon name="mail" size={15} /> {CLINIC.email}
              </a>
            </div>
          </div>

          <div className="contact__form" data-reveal>
            <div className="contact__form-head">
              <h3>Book your consultation</h3>
              <p><span className="pulse-dot" aria-hidden="true" /> Confirmed quickly · Walk-ins &amp; Appointments welcome</p>
            </div>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
