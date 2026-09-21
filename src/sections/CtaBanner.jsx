'use client';

import { useScroll } from '@/context/ScrollContext';
import { CLINIC } from '@/config';
import { CTA_BANNER_CONTENT } from '@/data';
import { MaskText } from '@/lib/anim';
import Button from '@/components/Button';

export default function CtaBanner() {
  const { openBooking } = useScroll();

  return (
    <section className="ctab section" data-scroll-section aria-label="Book a diagnostic test">
      <div className="container">
        <div className="ctab__panel">
          <span className="ctab__blob ctab__blob--1" data-scroll data-scroll-speed="0.8" aria-hidden="true" />
          <span className="ctab__blob ctab__blob--2" data-scroll data-scroll-speed="-0.6" aria-hidden="true" />
          <span className="ctab__ring" aria-hidden="true" />

          <p className="eyebrow eyebrow--light" data-reveal>
            <span className="pulse-dot pulse-dot--light" aria-hidden="true" /> {CTA_BANNER_CONTENT.eyebrow || `Open Daily ${CLINIC.timings}`}
          </p>

          <MaskText
            as="h2"
            className="ctab__title"
            segments={[{ t: CTA_BANNER_CONTENT.title || CLINIC.slogan }]}
          />

          <p className="ctab__sub" data-reveal>
            {CTA_BANNER_CONTENT.sub || CLINIC.tagline}
          </p>

          <div className="ctab__actions" data-reveal>
            <Button variant="light" icon="calendar" magnetic onClick={() => openBooking()}>
              {CTA_BANNER_CONTENT.btnPrimary || 'Book Diagnostic Test'}
            </Button>
            <Button variant="light" icon="phone" href={CLINIC.phoneHref}>
              {CLINIC.phoneDisplay}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
