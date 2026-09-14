'use client';

import SectionHeader from '@/components/SectionHeader';
import DoctorSpotlight from '@/components/DoctorSpotlight';

/** Home page "Doctors" section — the Porur branch has one consultant, so it is a spotlight, not a rail. */
export default function Doctors() {
  return (
    <section className="doctors section" data-scroll-section id="doctors">
      <div className="container">
        <SectionHeader
          eyebrow="Meet your doctor"
          segments={[{ t: 'Dr. Venkhatesan — 25 years of gentle care for ' }, { t: 'Piles, Fistula & Fissure.', em: true }]}
          side={
            <p>
              Every consultation at our Porur hospital is with Dr. Venkhatesan himself: a senior Ayurvedic proctologist
              who treats piles, fistula and fissure without major operations, using authentic Kshara Sutra when it is right for you.
            </p>
          }
        />
        <DoctorSpotlight />
      </div>
    </section>
  );
}
