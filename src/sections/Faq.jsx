'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { prefersReducedMotion } from '@/context/ScrollContext';
import { FAQS } from '@/data';
import { CLINIC, WA_DEFAULT } from '@/config';
import SectionHeader from '@/components/SectionHeader';
import Icon from '@/lib/Icons';

export default function Faq() {
  const [open, setOpen] = useState(0);
  const panelRefs = useRef([]);

  useEffect(() => {
    const reduce = prefersReducedMotion();
    panelRefs.current.forEach((el, i) => {
      if (!el) return;
      if (reduce) {
        el.style.height = i === open ? 'auto' : '0px';
        return;
      }
      gsap.to(el, {
        height: i === open ? 'auto' : 0,
        duration: 0.5,
        ease: 'power2.inOut',
      });
    });
  }, [open]);

  return (
    <section className="faq section" data-scroll-section id="faq">
      <div className="container faq__grid">
        <div className="faq__left">
          <SectionHeader
            eyebrow="Good to know"
            segments={[{ t: 'Questions, ' }, { t: 'answered plainly.', em: true }]}
          />
          <div className="faq__nudge" data-reveal>
            <p>Still unsure about something? A human answers within minutes.</p>
            <div className="faq__nudge-row">
              <a className="btn btn--call btn--sm" href={CLINIC.phoneHref} data-cursor="hover">
                <span className="btn__solo">Call us</span>
                <span className="btn__ic"><Icon name="phone" size={14} strokeWidth={2} /></span>
              </a>
              <a className="btn btn--wa btn--sm" href={WA_DEFAULT} target="_blank" rel="noreferrer" data-cursor="hover">
                <span className="btn__solo">WhatsApp</span>
                <span className="btn__ic"><Icon name="whatsapp" size={14} strokeWidth={2} /></span>
              </a>
            </div>
          </div>
        </div>

        <div className="faq__list">
          {FAQS.map((f, i) => (
            <div className={`faq__item ${open === i ? 'is-open' : ''}`} key={f.q} data-reveal>
              <button
                className="faq__q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
                data-cursor="hover"
              >
                <span>{f.q}</span>
                <span className="faq__icon" aria-hidden="true"><Icon name="plus" size={18} strokeWidth={2} /></span>
              </button>
              <div
                id={`faq-panel-${i}`}
                className="faq__a"
                ref={(el) => { panelRefs.current[i] = el; }}
                style={{ height: i === 0 ? 'auto' : 0 }}
                role="region"
              >
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
