'use client';

import { useScroll } from '@/context/ScrollContext';
import { CLINIC } from '@/config';
import Icon from '@/lib/Icons';
import Button from '@/components/Button';
import { img, SIZES } from '@/lib/images';

export default function DoctorSpotlight({ compact = false }) {
  const { openBooking } = useScroll();

  return (
    <div className={`doctor-spotlight ${compact ? 'doctor-spotlight--compact' : ''}`} data-reveal>
      <figure className="doctor-spotlight__photo">
        <img
          {...img('/clinic-assets/dream-smile-consultation-room.jpg', { sizes: SIZES.half })}
          alt={`${CLINIC.doctorName} consultation room and clinic at ${CLINIC.name} Guduvanchery`}
        />
        <figcaption className="doctor-spotlight__badge">
          <strong>{CLINIC.doctorName}</strong>
          <span>{CLINIC.doctorQualifications || 'BDS, MDS (Orthodontics)'}</span>
        </figcaption>
      </figure>

      <div className="doctor-spotlight__body">
        <p className="eyebrow">
          <span className="eyebrow__dot" aria-hidden="true" /> Lead Orthodontist &amp; Dental Surgeon
        </p>
        <h3 className="doctor-spotlight__name">{CLINIC.doctorName}</h3>
        <p className="doctor-spotlight__role">Orthodontics &amp; Dentofacial Orthopaedics (BDS, MDS)</p>
        <p className="doctor-spotlight__creds">Over 15 Years of Clinical Experience · Google Rating 4.9★</p>
        <p className="doctor-spotlight__bio">
          Specializing in advanced orthodontic corrections, invisible clear aligners, aesthetic ceramic braces, painless root canals, and cosmetic smile transformations for patients across Guduvanchery and Chengalpattu.
        </p>

        <dl className="doctor-spotlight__facts">
          <div className="doctor-spotlight__fact">
            <dt>Clinical Experience</dt>
            <dd>15+ <small>Years</small></dd>
          </div>
          <div className="doctor-spotlight__fact">
            <dt>Google Rating</dt>
            <dd>4.9 <small>★ (50+)</small></dd>
          </div>
          <div className="doctor-spotlight__fact">
            <dt>Infection Control</dt>
            <dd>100% <small>UV Chamber</small></dd>
          </div>
        </dl>

        <p className="doctor-spotlight__slot">
          <span className="pulse-dot" aria-hidden="true" /> Open 7 Days · Above SBI · {CLINIC.locality}
        </p>

        <div className="doctor-spotlight__actions">
          <Button variant="primary" icon="calendar" onClick={() => openBooking('General Dental Consultation')}>
            Book Dental Appointment
          </Button>
          <Button variant="call" icon="phone" href={CLINIC.phoneHref}>
            Call {CLINIC.phoneDisplay}
          </Button>
        </div>
      </div>
    </div>
  );
}
