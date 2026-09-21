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
          {...img('/clinic-assets/dharshini-lab-reception.jpg', { sizes: SIZES.half })}
          alt="Dharshini Laboratory diagnostic team and reception in Guduvancheri"
        />
        <figcaption className="doctor-spotlight__badge">
          <strong>Dharshini Laboratory</strong>
          <span>Diagnostic Center · Est. 2010</span>
        </figcaption>
      </figure>

      <div className="doctor-spotlight__body">
        <p className="eyebrow">
          <span className="eyebrow__dot" aria-hidden="true" /> Certified Laboratory Care
        </p>
        <h3 className="doctor-spotlight__name">Diagnostic &amp; Phlebotomy Team</h3>
        <p className="doctor-spotlight__role">Clinical Pathology &amp; Home Blood Collection</p>
        <p className="doctor-spotlight__creds">Established 2010 · Over 15 Years of Diagnostic Care</p>
        <p className="doctor-spotlight__bio">
          Our laboratory team in Kayarambedu, Guduvancheri is committed to precision diagnostic testing, sterile single-use specimen collection, and fast report turnarounds for families, working professionals, and senior citizens.
        </p>

        <dl className="doctor-spotlight__facts">
          <div className="doctor-spotlight__fact">
            <dt>Service History</dt>
            <dd>15+ <small>Years</small></dd>
          </div>
          <div className="doctor-spotlight__fact">
            <dt>Daily Timings</dt>
            <dd>6:30 AM <small>– 9 PM</small></dd>
          </div>
          <div className="doctor-spotlight__fact">
            <dt>Sterile Protocol</dt>
            <dd>100% <small>Vacutainers</small></dd>
          </div>
        </dl>

        <p className="doctor-spotlight__slot">
          <span className="pulse-dot" aria-hidden="true" /> Open 7 Days: 6:30 AM – 9:00 PM · {CLINIC.locality}
        </p>

        <div className="doctor-spotlight__actions">
          <Button variant="primary" icon="calendar" onClick={() => openBooking('Home Blood Sample Collection')}>
            Book Test / Home Collection
          </Button>
          <Button variant="call" icon="phone" href={CLINIC.phoneHref}>
            Call {CLINIC.phoneDisplay}
          </Button>
        </div>
      </div>
    </div>
  );
}
