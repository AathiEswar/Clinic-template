'use client';

import { useScroll } from '@/context/ScrollContext';
import { WHY_US, ABOUT_CONTENT } from '@/data';
import { CLINIC } from '@/config';
import SectionHeader from '@/components/SectionHeader';
import Icon from '@/lib/Icons';

export default function About() {
  const { openBooking } = useScroll();

  const badgeText = ABOUT_CONTENT.badgeText || `${CLINIC.name.toUpperCase()} · EST. ${CLINIC.establishedYear} · `;
  const localityShort = CLINIC.locality?.split(',')[0]?.trim() || CLINIC.city?.split(',')[0]?.trim() || '';

  return (
    <section className="about section" data-scroll-section id="about">
      <div className="container about__grid">
        <div className="about__visual" data-reveal>
          <div className="about__arch" data-scroll data-scroll-speed="-0.4">
            <span className="about__arch-sun" />
            <span className="about__arch-arc about__arch-arc--1" />
            <span className="about__arch-arc about__arch-arc--2" />
            <span className="about__arch-arc about__arch-arc--3" />
          </div>

          {/* rotating badge — pure CSS spin */}
          <div className="about__badge" aria-hidden="true">
            <svg viewBox="0 0 120 120" className="about__badge-ring">
              <defs>
                <path id="circlePath" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
              </defs>
              <text>
                <textPath href="#circlePath">{badgeText}</textPath>
              </text>
            </svg>
            <span className="about__badge-core"><Icon name="sparkle" size={20} /></span>
          </div>

          <div className="about__exp" data-scroll data-scroll-speed="0.5">
            <strong>{CLINIC.establishedYear}</strong>
            <span>Est. Year<br />{localityShort}</span>
          </div>
        </div>

        <div className="about__content">
          <SectionHeader
            eyebrow={ABOUT_CONTENT.eyebrow || `About ${CLINIC.name}`}
            segments={[{ t: ABOUT_CONTENT.headline || CLINIC.slogan }]}
          />
          <p className="about__lead" data-reveal>
            {ABOUT_CONTENT.lead || CLINIC.motto}
          </p>

          <ul className="about__list">
            {WHY_US.map((w) => (
              <li key={w} data-reveal>
                <span className="about__check"><Icon name="check" size={14} strokeWidth={2.6} /></span>
                {w}
              </li>
            ))}
          </ul>

          {ABOUT_CONTENT.quote && (
            <blockquote className="about__sign" data-reveal>
              {ABOUT_CONTENT.quote}
              <cite>{ABOUT_CONTENT.cite || `— ${CLINIC.name}`}</cite>
            </blockquote>
          )}

          <button className="link-arrow" onClick={() => openBooking()} data-cursor="hover" data-reveal>
            {ABOUT_CONTENT.ctaText || 'Book a test or visit'} <Icon name="arrowR" size={15} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </section>
  );
}
