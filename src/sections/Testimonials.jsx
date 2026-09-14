'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { prefersReducedMotion } from '@/context/ScrollContext';
import { TESTIMONIALS } from '@/data';
import { CLINIC } from '@/config';
import SectionHeader from '@/components/SectionHeader';
import Icon from '@/lib/Icons';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const quoteRef = useRef(null);
  const paused = useRef(false);
  const t = TESTIMONIALS[idx];

  /* auto-rotate, pausing on hover */
  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setIdx((i) => (i + 1) % TESTIMONIALS.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  /* animate quote swap */
  useEffect(() => {
    if (prefersReducedMotion() || !quoteRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        quoteRef.current.children,
        { y: 22, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.07, ease: 'power3.out' }
      );
    }, quoteRef);
    return () => ctx.revert();
  }, [idx]);

  const step = (d) => setIdx((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="stories section" data-scroll-section id="stories">
      <div className="container stories__grid">
        <div className="stories__left">
          <SectionHeader
            eyebrow="Patient stories"
            segments={[{ t: 'Cared for, ' }, { t: 'and heard.', em: true }]}
          />

          <div className="gcard" data-reveal>
            <div className="gcard__head">
              <span className="gcard__g" aria-hidden="true">G</span>
              <div>
                <span className="stars">
                  {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" size={13} />)}
                </span>
                <p><strong>{CLINIC.rating}</strong> from {CLINIC.reviewCount} Google reviews</p>
              </div>
            </div>
            <a className="link-arrow" href={CLINIC.mapsUrl} target="_blank" rel="noreferrer" data-cursor="hover">
              Read reviews on Google <Icon name="arrow" size={14} strokeWidth={2.2} />
            </a>
          </div>

          <div className="stories__stat" data-reveal>
            <strong>93%</strong>
            <span>of patients say they’d recommend us to family</span>
          </div>
        </div>

        <div
          className="stories__quote-wrap"
          data-reveal
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <span className="stories__mark" aria-hidden="true">“</span>
          <div className="stories__quote" ref={quoteRef} aria-live="polite">
            <p className="stories__text">{t.quote}</p>
            <p className="stories__who">
              <strong>{t.name}</strong>
              <span>{t.context}</span>
            </p>
          </div>

          <div className="stories__controls">
            <button className="round-btn" onClick={() => step(-1)} aria-label="Previous story" data-cursor="hover">
              <Icon name="arrowR" size={16} strokeWidth={2} className="flip-x" />
            </button>
            <div className="stories__dots" aria-hidden="true">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} className={`dot ${i === idx ? 'is-active' : ''}`} onClick={() => setIdx(i)} tabIndex={-1} />
              ))}
            </div>
            <button className="round-btn" onClick={() => step(1)} aria-label="Next story" data-cursor="hover">
              <Icon name="arrowR" size={16} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
