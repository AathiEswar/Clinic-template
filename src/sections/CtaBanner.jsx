'use client';

import { useScroll } from '@/context/ScrollContext';
import { CLINIC } from '@/config';
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
            <span className="pulse-dot pulse-dot--light" aria-hidden="true" /> Open Daily from 6:30 AM · Doorstep Home Sample Collection
          </p>

          <MaskText
            as="h2"
            className="ctab__title"
            segments={[{ t: 'Accurate, timely diagnostic results ' }, { t: 'when your health needs clarity.', em: true }]}
          />

          <p className="ctab__sub" data-reveal>
            Book your blood test, diabetes panel, thyroid profile, or request a doorstep phlebotomy visit across Guduvancheri and Kayarambedu.
          </p>

          <div className="ctab__actions" data-reveal>
            <Button variant="light" icon="calendar" magnetic onClick={() => openBooking()}>
              Book Diagnostic Test
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
