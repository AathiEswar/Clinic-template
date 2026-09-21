'use client';

import { useRef } from 'react';
import { useScroll, useAnim, skipReveal } from '@/context/ScrollContext';
import { CLINIC } from '@/config';
import { SPECIALTIES_TICKER } from '@/data';
import Button from '@/components/Button';
import Marquee from '@/components/Marquee';
import Icon from '@/lib/Icons';
import { img, HERO_IMAGE, HERO_SIZES } from '@/lib/images';

const Stars = ({ n = 5 }) => (
  <span className="stars" aria-label={`${CLINIC.rating} star rating`}>
    {Array.from({ length: n }).map((_, i) => <Icon key={i} name="star" size={13} />)}
  </span>
);

export default function Hero() {
  const { openBooking } = useScroll();
  const scope = useRef(null);

  /* gentle perpetual float on the cards */
  useAnim(scope, (gsap) => {
    if (skipReveal()) return;
    gsap.to('.hero__card--slot', { y: -10, duration: 3.2, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    gsap.to('.hero__card--rating', { y: -14, duration: 3.8, yoyo: true, repeat: -1, ease: 'sine.inOut' });
  });

  return (
    <section className="hero" data-scroll-section id="top" ref={scope}>
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__blob hero__blob--1" data-scroll data-scroll-speed="1.2" />
        <span className="hero__blob hero__blob--2" data-scroll data-scroll-speed="-0.8" />
      </div>

      <div className="hero__inner container">
        <div className="hero__copy">
          <h1 className="hero__title">
            Accurate Diagnostic{' '}
            <span className="hero__condition-highlight">
              <span>Pathology</span><i> &amp; </i> <span>Blood Testing</span>
            </span>{' '}
          </h1>

          <p className="hero__sub">
            <strong className="hero__sub-highlight hero__sub-highlight--gold">Established in 2010</strong>, Dharshini Laboratory provides comprehensive pathology testing, blood profiles, and doorstep sample collection across <strong className="hero__sub-highlight">Guduvancheri</strong>, Kayarambedu, Urapakkam, and Chengalpattu. Open 7 days a week from 6:30 AM to 9:00 PM.
          </p>

          <div className="hero__ctas">
            <Button magnetic icon="calendar" onClick={() => openBooking()} aria-label="Book a diagnostic test or home sample collection">
              Book Test / Collection
            </Button>
            <Button variant="call" icon="phone" href={CLINIC.phoneHref}>
              Call {CLINIC.phoneDisplay}
            </Button>
          </div>

          <a
            className="hero__yt-badge"
            href="#visit"
            data-cursor="hover"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              fontWeight: '700',
              color: 'var(--teal)',
              background: 'var(--teal-mist)',
              padding: '7px 14px',
              borderRadius: '999px',
              marginTop: '4px',
              width: 'fit-content',
              maxWidth: '100%',
              boxSizing: 'border-box',
              textDecoration: 'none',
              border: '1px solid var(--border)',
            }}
          >
            <span className="pulse-dot" aria-hidden="true" />
            <span>Open Early: 6:30 AM Daily · Fasting Tests &amp; Home Collection</span>
            <Icon name="arrowR" size={13} strokeWidth={2.2} />
          </a>

          <div className="hero__proof">
            <span className="hero__proof-item">
              <Stars />
              <strong>{CLINIC.rating}</strong> · {CLINIC.reviewCount}
            </span>
            <span className="hero__proof-sep" aria-hidden="true" />
            <span className="hero__proof-item"><strong>Est. 2010</strong> · 15+ Yrs</span>
            <span className="hero__proof-sep" aria-hidden="true" />
            <span className="hero__proof-item"><strong>100%</strong> Sterile Protocol</span>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="false">
          {/* Main Hero Visual: Genuine Google Maps photo of Dharshini Laboratory reception */}
          <div className="hero__main-card" data-scroll data-scroll-speed="-0.3">
            <div className="hero__img-frame">
              <img
                {...img(HERO_IMAGE, { sizes: HERO_SIZES, priority: true })}
                alt="Dharshini Laboratory reception desk, waiting area and consultation counter in Kayarambedu, Guduvancheri"
                className="hero__main-img"
              />
              <div className="hero__img-badge">
                <span className="hero__img-badge-dot" />
                <span>Diagnostic Center &amp; Pathology Lab</span>
              </div>
              <div className="hero__img-caption">
                <p className="hero__img-quote">“Prompt Diagnostics &amp; Doorstep Blood Collection Across Guduvancheri.”</p>
                <span className="hero__img-sub">SP MAHAL, Nellikuppam Rd, Kayarambedu · Est. 2010</span>
              </div>
            </div>
            <span className="hero__floating-heart" title="Accurate diagnostic care and clinical pathology">
              ✦
            </span>
          </div>

          <div className="hero__card hero__card--slot" data-scroll data-scroll-speed="0.6">
            <p className="hero__card-eyebrow"><span className="pulse-dot" aria-hidden="true" /> Fasting &amp; Routine Tests</p>
            <p className="hero__card-doc">Home Sample Collection</p>
            <p className="hero__card-dept">Doorstep phlebotomy service available</p>
            <p className="hero__card-time"><Icon name="clock" size={14} /> Daily: 6:30 AM – 9:00 PM</p>
            <button
              className="hero__card-btn"
              onClick={() => openBooking('Home Blood Sample Collection')}
              data-cursor="hover"
            >
              Book Home Collection <Icon name="arrowR" size={14} strokeWidth={2.2} />
            </button>
          </div>

          <div className="hero__card hero__card--rating" data-scroll data-scroll-speed="1.1">
            <Stars />
            <p><strong>Google Maps Verified</strong></p>
            <span>Diagnostic Center · Guduvancheri</span>
          </div>

          <div className="hero__chip" data-scroll data-scroll-speed="0.9">
            <Icon name="pin" size={15} /> SP MAHAL, Nellikuppam Rd, Guduvancheri
          </div>
        </div>
      </div>

      <div className="hero__ticker" aria-hidden="true">
        <Marquee duration={34}>
          {SPECIALTIES_TICKER.map((s) => (
            <span className="ticker__item" key={s}>
              {s} <i>✦</i>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
