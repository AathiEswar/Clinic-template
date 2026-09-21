'use client';

import { CLINIC } from '@/config';
import SectionHeader from '@/components/SectionHeader';

export default function PressFeature() {
  return (
    <section className="section" data-scroll-section id="press-feature">
      <div className="container">
        <SectionHeader
          eyebrow="Certified Pathology Standards"
          segments={[{ t: 'Over 15 years of dependable ' }, { t: 'diagnostics in Guduvancheri.', em: true }]}
        />
        <div style={{ background: 'var(--surface)', padding: '32px', borderRadius: '16px', border: '1px solid var(--border)', marginTop: '24px' }}>
          <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--ink)' }}>
            Dharshini Laboratory was established in 2010 to provide accessible, accurate clinical pathology and diagnostic testing services to families across Guduvancheri, Kayarambedu, Moolakazhani, and Urapakkam.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--ink-2)', marginTop: '12px' }}>
            Location: {CLINIC.address} · Contact: {CLINIC.phoneDisplay} · Open Daily 6:30 AM to 9:00 PM.
          </p>
        </div>
      </div>
    </section>
  );
}
