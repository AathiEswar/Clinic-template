'use client';

import { CLINIC } from '@/config';
import SectionHeader from '@/components/SectionHeader';

export default function PressFeature() {
  return (
    <section className="section" data-scroll-section id="press-feature">
      <div className="container">
        <SectionHeader
          eyebrow="Clinical Excellence & Standards"
          segments={[{ t: `${CLINIC.experienceYears} years of clinical dental & ` }, { t: 'orthodontic excellence.', em: true }]}
        />
        <div style={{ background: 'var(--surface)', padding: '32px', borderRadius: '16px', border: '1px solid var(--border)', marginTop: '24px' }}>
          <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--ink)' }}>
            {CLINIC.name} provides comprehensive dental care, painless root canals, crowns &amp; bridges, dentures, and laser dentistry led by {CLINIC.doctorName} ({CLINIC.doctorQualifications || 'BDS, MDS'}).
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--ink-2)', marginTop: '12px' }}>
            Location: {CLINIC.address} · Contact: {CLINIC.phoneDisplay} · Timings: {CLINIC.timings}
          </p>
        </div>
      </div>
    </section>
  );
}
