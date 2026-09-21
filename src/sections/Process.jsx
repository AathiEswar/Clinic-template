'use client';

import { useScroll } from '@/context/ScrollContext';
import { PROCESS } from '@/data';
import SectionHeader from '@/components/SectionHeader';
import Icon from '@/lib/Icons';

export default function Process() {
  const { openBooking } = useScroll();

  return (
    <section className="process section" data-scroll-section id="process">
      <div className="container">
        <SectionHeader
          eyebrow="Diagnostic Workflow"
          segments={[{ t: 'From sample collection to report, ' }, { t: 'in three simple steps.', em: true }]}
        />

        <ol className="process__grid">
          {PROCESS.map((p) => (
            <li className="process__item" key={p.step} data-reveal>
              <span className="process__num">{p.step}</span>
              <h3 className="process__title">{p.title}</h3>
              <p className="process__desc">{p.desc}</p>
            </li>
          ))}
        </ol>

        <p className="process__cta" data-reveal>
          Need a specific pathology test or doorstep morning sample collection?{' '}
          <button className="link-arrow" onClick={() => openBooking('Home Blood Sample Collection')} data-cursor="hover">
            Schedule your test or home visit now <Icon name="arrowR" size={15} strokeWidth={2.2} />
          </button>
        </p>
      </div>
    </section>
  );
}
