'use client';

import { useScroll } from '@/context/ScrollContext';
import { WHY_US } from '@/data';
import { CLINIC } from '@/config';
import SectionHeader from '@/components/SectionHeader';
import Icon from '@/lib/Icons';

export default function About() {
  const { scrollTo, openBooking } = useScroll();

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
                <textPath href="#circlePath">DHARSHINI LABORATORY · GUDUVANCHERI · EST. 2010 ·&nbsp;</textPath>
              </text>
            </svg>
            <span className="about__badge-core"><Icon name="sparkle" size={20} /></span>
          </div>

          <div className="about__exp" data-scroll data-scroll-speed="0.5">
            <strong>2010</strong>
            <span>Est. Year<br />Guduvancheri</span>
          </div>
        </div>

        <div className="about__content">
          <SectionHeader
            eyebrow="About Dharshini Laboratory"
            segments={[
              { t: 'Accurate clinical diagnostics & ' },
              { t: 'doorstep home sample collection.', em: true },
            ]}
          />
          <p className="about__lead" data-reveal>
            Established in 2010, Dharshini Laboratory is a trusted diagnostic pathology center in Kayarambedu, Guduvancheri. We provide comprehensive hematology, diabetic screenings, thyroid profiles, and doorstep blood collection across Guduvancheri, Kayarambedu, and Urapakkam.
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
            “Our goal is to provide every patient with accurate diagnostic reports, sterile sample collection, and early morning convenience.”
            <cite>— Dharshini Laboratory, Guduvancheri</cite>
          </blockquote>

          <button className="link-arrow" onClick={() => openBooking()} data-cursor="hover" data-reveal>
            Book a test or home visit <Icon name="arrowR" size={15} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </section>
  );
}
