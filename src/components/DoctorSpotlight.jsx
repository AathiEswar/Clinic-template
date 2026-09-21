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
          {...img('/clinic-assets/shree-raaghav-dental-unit.jpg', { sizes: SIZES.half })}
          alt={`Dental operatory and treatment room at ${CLINIC.name} Guduvancheri`}
        />
        <figcaption className="doctor-spotlight__badge">
          <strong>{CLINIC.shortName || CLINIC.name}</strong>
          <span>Rated 5.0★ · Google Maps</span>
        </figcaption>
      </figure>

      <div className="doctor-spotlight__body">
        <p className="eyebrow">
          <span className="eyebrow__dot" aria-hidden="true" /> Multi-Specialty Dental Team
        </p>
        <h3 className="doctor-spotlight__name">{CLINIC.doctorName}</h3>
        <p className="doctor-spotlight__role">General Dentistry, Endodontics &amp; Oral Surgery</p>
        <p className="doctor-spotlight__creds">Rated 5.0★ on Google Maps · 39+ Verified Patient Reviews</p>
        <p className="doctor-spotlight__bio">
          Our experienced dental team at Shree Raaghav Dental Clinic is committed to gentle, pain-free treatments, neat treatment explanations, and personalized care for patients across Guduvancheri and Chengalpattu.
        </p>

        <dl className="doctor-spotlight__facts">
          <div className="doctor-spotlight__fact">
            <dt>Google Rating</dt>
            <dd>5.0 <small>★ (100%)</small></dd>
          </div>
          <div className="doctor-spotlight__fact">
            <dt>Verified Reviews</dt>
            <dd>39+ <small>Patients</small></dd>
          </div>
          <div className="doctor-spotlight__fact">
            <dt>Sterile Protocol</dt>
            <dd>100% <small>Autoclaved</small></dd>
          </div>
        </dl>

        <p className="doctor-spotlight__slot">
          <span className="pulse-dot" aria-hidden="true" /> Open 7 Days · Near Velammal School · {CLINIC.locality}
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
