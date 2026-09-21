'use client';

import SectionHeader from '@/components/SectionHeader';
import { CLINIC } from '@/config';
import { useScroll } from '@/context/ScrollContext';
import Icon from '@/lib/Icons';

const TEST_GUIDES = [
  {
    id: 'fasting-tests',
    name: 'Fasting Blood Tests (FBS & Lipid Profile)',
    tamil: 'வெறும் வயிற்று இரத்தப் பரிசோதனைகள்',
    desc: 'Requires 8 to 12 hours of overnight fasting. Only plain water is permitted before sample collection.',
    badge: 'Morning Collection',
  },
  {
    id: 'routine-tests',
    name: 'Routine Blood Counts (CBC & Hemoglobin)',
    tamil: 'வழக்கமான இரத்தப் பரிசோதனைகள்',
    desc: 'Can be drawn at any time during our working hours without prior fasting. Quick same-day reporting.',
    badge: 'Anytime Testing',
  },
  {
    id: 'home-collection',
    name: 'Doorstep Home Sample Collection',
    tamil: 'வீட்டுக்கே வந்து மாதிரி சேகரித்தல்',
    desc: 'Convenient home phlebotomy visits across Guduvancheri and Kayarambedu using sterile single-use vacutainers.',
    badge: 'Home Visit',
  },
];

export default function ProcedureGuide() {
  const { openBooking } = useScroll();

  return (
    <section className="section" data-scroll-section id="diagnostic-guide">
      <div className="container">
        <SectionHeader
          eyebrow="Diagnostic Testing Guide"
          segments={[{ t: 'Preparing for your tests, ' }, { t: 'simple & clear.', em: true }]}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '32px' }}>
          {TEST_GUIDES.map((g) => (
            <div key={g.id} style={{ background: 'var(--surface)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <span className="chip chip--purple" style={{ marginBottom: '12px' }}>{g.badge}</span>
              <h3 style={{ fontSize: '1.2rem', margin: '8px 0 4px' }}>{g.name}</h3>
              <p style={{ color: 'var(--teal)', fontSize: '0.9rem', marginBottom: '12px' }}>{g.tamil}</p>
              <p style={{ color: 'var(--ink-2)', fontSize: '0.92rem', lineHeight: '1.6' }}>{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
