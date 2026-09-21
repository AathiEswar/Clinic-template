'use client';

import SectionHeader from '@/components/SectionHeader';
import DoctorSpotlight from '@/components/DoctorSpotlight';

import { CLINIC } from '@/config';

export default function Doctors() {
  return (
    <section className="doctors section" data-scroll-section id="team">
      <div className="container">
        <SectionHeader
          eyebrow="Specialist Dental Profile"
          segments={[{ t: `${CLINIC.name} — Led by ` }, { t: `${CLINIC.doctorName}.`, em: true }]}
          side={
            <p>
              Delivering pain-free root canals, crowns &amp; bridges, laser dentistry, and cosmetic smile restorations in Guduvancheri.
            </p>
          }
        />
        <DoctorSpotlight />
      </div>
    </section>
  );
}
