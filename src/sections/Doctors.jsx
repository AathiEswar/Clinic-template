'use client';

import SectionHeader from '@/components/SectionHeader';
import DoctorSpotlight from '@/components/DoctorSpotlight';

import { CLINIC } from '@/config';

export default function Doctors() {
  return (
    <section className="doctors section" data-scroll-section id="team">
      <div className="container">
        <SectionHeader
          eyebrow="Specialist Doctor Profile"
          segments={[{ t: `${CLINIC.name} — Led by ` }, { t: `${CLINIC.doctorName} (MDS - Orthodontist).`, em: true }]}
          side={
            <p>
              Delivering specialized orthodontic corrections, invisible aligners, painless root canals, and family dentistry in Guduvanchery.
            </p>
          }
        />
        <DoctorSpotlight />
      </div>
    </section>
  );
}
