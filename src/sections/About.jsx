'use client';

import { useScroll } from '@/context/ScrollContext';
import { WHY_US } from '@/data';
import SectionHeader from '@/components/SectionHeader';
import Icon from '@/lib/Icons';

/* Not currently rendered on any page (same as in the Vite version) — kept for reuse. */
export default function About() {
  const { scrollTo } = useScroll();

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
                <textPath href="#circlePath">DR. DHANANJAYAS HOSPITALS · PORUR · 4.9 RATED ·&nbsp;</textPath>
              </text>
            </svg>
            <span className="about__badge-core"><Icon name="sparkle" size={20} /></span>
          </div>

          <div className="about__exp" data-scroll data-scroll-speed="0.5">
            <strong>4.9★</strong>
            <span>Google<br />Verified</span>
          </div>
        </div>

        <div className="about__content">
          <SectionHeader
            eyebrow="Why Choose Dr. Dhananjayas Hospitals"
            segments={[
              { t: 'Gentle Ayurvedic care that restores ' },
              { t: 'complete comfort, dignity & freedom.', em: true },
            ]}
          />
          <p className="about__lead" data-reveal>
            Care for Piles, Fistula and Fissure should be dignified, gentle and personalized.
            Dr. Dhananjayas Hospitals carries a family tradition of Ayurvedic proctology now in its ninth generation,
            with over 25 years of experience at Porur — herbal care, lifestyle guidance and authentic Kshara Sutra
            without major open operations.
          </p>

          <ul className="about__list">
            {WHY_US.map((w) => (
              <li key={w} data-reveal>
                <span className="about__check"><Icon name="check" size={14} strokeWidth={2.6} /></span>
                {w}
              </li>
            ))}
          </ul>

          <blockquote className="about__sign" data-reveal>
            “Our commitment is complete cure with utmost patient dignity, 100% sphincter muscle safety, and immediate return to normal life without hospital stays.”
            <cite>— Dr. Venkhatesan, Dr. Dhananjayas Hospitals, Porur</cite>
          </blockquote>

          <button className="link-arrow" onClick={() => scrollTo('#doctors')} data-cursor="hover" data-reveal>
            Meet our specialists <Icon name="arrowR" size={15} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </section>
  );
}
