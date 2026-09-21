import { CLINIC, WA_DEFAULT } from '@/config';
import SectionHeader from '@/components/SectionHeader';
import BookingForm from '@/components/BookingForm';
import Icon from '@/lib/Icons';

export default function Contact() {
  return (
    <section className="contact section" data-scroll-section id="visit">
      <div className="container">
        <SectionHeader
          eyebrow="Visit Dharshini Laboratory"
          segments={[{ t: 'Conveniently located at SP MAHAL, ' }, { t: 'Nellikuppam Rd, Guduvancheri.', em: true }]}
        />

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__map-wrap" data-reveal style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', marginBottom: '24px', background: 'var(--surface)' }}>
              <iframe
                title="Dharshini Laboratory Google Maps Location"
                src={CLINIC.mapsEmbedUrl}
                width="100%"
                height="240"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{ padding: '12px 16px', background: 'var(--surface)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)' }}>
                  <Icon name="pin" size={14} style={{ marginRight: '6px', verticalAlign: '-2px', color: 'var(--teal)' }} />
                  Plus Code: {CLINIC.plusCode}
                </span>
                <a
                  href={CLINIC.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--teal)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  Directions on Google Maps ↗
                </a>
              </div>
            </div>

            <address className="contact__addr" data-reveal>
              <h3>{CLINIC.name}</h3>
              <p>{CLINIC.address}</p>
              <p className="contact__landmark" style={{ color: 'var(--teal)', fontWeight: '600', marginTop: '6px' }}>Landmark: {CLINIC.landmark}</p>
            </address>

            <div className="contact__hours" data-reveal>
              <h4><Icon name="clock" size={15} /> Laboratory Operating Hours</h4>
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
              <h3>Book a test or home collection</h3>
              <p><span className="pulse-dot" aria-hidden="true" /> Open Daily 6:30 AM – 9:00 PM · Walk-ins &amp; Home Visits</p>
            </div>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
