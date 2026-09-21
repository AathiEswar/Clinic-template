'use client';

import SectionHeader from '@/components/SectionHeader';
import DoctorSpotlight from '@/components/DoctorSpotlight';

export default function Doctors() {
  return (
    <section className="doctors section" data-scroll-section id="team">
      <div className="container">
        <SectionHeader
          eyebrow="Our Diagnostic Team"
          segments={[{ t: 'Dharshini Laboratory — 15+ years of dependable ' }, { t: 'Pathology & Diagnostic Testing.', em: true }]}
          side={
            <p>
              Serving Guduvancheri, Kayarambedu, and Urapakkam with certified clinical testing, sterile single-use vacutainers, and doorstep morning sample collection.
            </p>
          }
        />
        <DoctorSpotlight />
      </div>
    </section>
  );
}
