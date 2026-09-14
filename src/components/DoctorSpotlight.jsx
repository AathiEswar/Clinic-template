'use client';

import { useScroll } from '@/context/ScrollContext';
import { CLINIC } from '@/config';
import { DOCTORS } from '@/data';
import Icon from '@/lib/Icons';
import Button from '@/components/Button';
import { img, SIZES } from '@/lib/images';

/**
 * Single-doctor spotlight for the Porur branch: large photo of Dr. Venkhatesan,
 * credentials, key facts, areas of focus, OPD hours and booking CTAs.
 * Used on the home page (Doctors section) and the About page.
 */
export default function DoctorSpotlight({ compact = false }) {
  const { openBooking } = useScroll();
  const d = DOCTORS[0];

  return (
    <div className={`doctor-spotlight ${compact ? 'doctor-spotlight--compact' : ''}`} data-reveal>
      <figure className="doctor-spotlight__photo">
        <img {...img(d.image, { sizes: SIZES.half })} alt={d.imageAlt || d.name} />
        <figcaption className="doctor-spotlight__badge">
          <strong>{d.name}</strong>
          <span>{d.dept}</span>
        </figcaption>
      </figure>

      <div className="doctor-spotlight__body">
        <p className="eyebrow">
          <span className="eyebrow__dot" aria-hidden="true" /> Your consultant at Porur
        </p>
        <h3 className="doctor-spotlight__name">{d.name}</h3>
        <p className="doctor-spotlight__role">{d.dept}</p>
        <p className="doctor-spotlight__creds">{d.creds}</p>
        <p className="doctor-spotlight__bio">{d.bio}</p>

        {d.facts && (
          <dl className="doctor-spotlight__facts">
            {d.facts.map((f) => (
              <div className="doctor-spotlight__fact" key={f.label}>
                <dt>{f.label}</dt>
                <dd>
                  {f.value}
                  <small>{f.suffix}</small>
                </dd>
              </div>
            ))}
          </dl>
        )}

        {!compact && d.focus && (
          <ul className="doctor-spotlight__list">
            {d.focus.map((item) => (
              <li key={item}>
                <span className="doctor-spotlight__check"><Icon name="check" size={13} strokeWidth={2.8} /></span>
                {item}
              </li>
            ))}
          </ul>
        )}

        {!compact && d.quote && (
          <blockquote className="doctor-spotlight__quote">
            “{d.quote}”<cite>— {d.name}</cite>
          </blockquote>
        )}

        <p className="doctor-spotlight__slot">
          <span className="pulse-dot" aria-hidden="true" /> OPD: {d.slot} · {CLINIC.locality}
        </p>

        <div className="doctor-spotlight__actions">
          <Button variant="primary" icon="calendar" onClick={() => openBooking(d.dept, d.slot)}>
            Book with {d.name}
          </Button>
          <Button variant="call" icon="phone" href={CLINIC.phoneHref}>
            Call {CLINIC.phoneDisplay}
          </Button>
        </div>
      </div>
    </div>
  );
}
