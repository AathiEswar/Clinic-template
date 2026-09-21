'use client';

import { useScroll } from '@/context/ScrollContext';
import { PROCESS, PROCESS_HEADER } from '@/data';
import SectionHeader from '@/components/SectionHeader';
import Icon from '@/lib/Icons';

export default function Process() {
  const { openBooking } = useScroll();

  return (
    <section className="process section" data-scroll-section id="process">
      <div className="container">
        <SectionHeader
          eyebrow={PROCESS_HEADER.eyebrow}
          segments={[{ t: PROCESS_HEADER.title }]}
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
          {PROCESS_HEADER.ctaPrompt}{' '}
          <button className="link-arrow" onClick={() => openBooking()} data-cursor="hover">
            {PROCESS_HEADER.ctaButtonText || 'Schedule your visit now'} <Icon name="arrowR" size={15} strokeWidth={2.2} />
          </button>
        </p>
      </div>
    </section>
  );
}
