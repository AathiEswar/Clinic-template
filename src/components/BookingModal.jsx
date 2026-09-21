'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useScroll, prefersReducedMotion } from '@/context/ScrollContext';
import { CLINIC, WA_DEFAULT } from '@/config';
import { BOOKING_CONFIG } from '@/data';
import Icon from '@/lib/Icons';
import BookingForm from './BookingForm';

/** Slide-in booking sheet. Focus-trapped, Esc to close, scroll locked behind. */
export default function BookingModal() {
  const { booking, closeBooking } = useScroll();
  const rootRef = useRef(null);
  const panelRef = useRef(null);
  const wasOpen = useRef(false);

  /* open / close animation */
  useEffect(() => {
    const root = rootRef.current;
    const panel = panelRef.current;
    if (!root) return;
    const reduce = prefersReducedMotion();
    const mobile = window.matchMedia('(max-width: 720px)').matches;

    if (booking.open) {
      wasOpen.current = true;
      gsap.set(root, { display: 'flex' });
      if (reduce) {
        gsap.set(root, { opacity: 1 });
        gsap.set(panel, { x: 0, y: 0 });
      } else {
        gsap.fromTo(root, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power1.out' });
        gsap.fromTo(
          panel,
          mobile ? { y: '104%', x: 0 } : { x: '104%', y: 0 },
          { x: 0, y: 0, duration: 0.55, ease: 'expo.out', delay: 0.05 }
        );
      }
      panel.querySelector('input, select, button')?.focus({ preventScroll: true });
    } else if (wasOpen.current) {
      if (reduce) {
        gsap.set(root, { display: 'none', opacity: 0 });
      } else {
        const tl = gsap.timeline({ onComplete: () => gsap.set(root, { display: 'none' }) });
        tl.to(panel, mobile ? { y: '104%', duration: 0.4 } : { x: '104%', duration: 0.4 }, 0)
          .to(root, { opacity: 0, duration: 0.3 }, 0.1);
      }
    }
  }, [booking.open]);

  /* esc + focus trap */
  useEffect(() => {
    if (!booking.open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeBooking();
      if (e.key === 'Tab') {
        const focusables = panelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input, select, textarea'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
        else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [booking.open, closeBooking]);

  return (
    <div className="bmodal" ref={rootRef} role="dialog" aria-modal="true" aria-labelledby="bmodal-title">
      <button className="bmodal__scrim" onClick={closeBooking} aria-label="Close booking" tabIndex={-1} />
      <div className="bmodal__panel" ref={panelRef}>
        <div className="bmodal__head">
          <div>
            <p className="bmodal__eyebrow">
              <span className="pulse-dot" aria-hidden="true" /> {BOOKING_CONFIG.modalEyebrow || 'Usually confirmed in 15 min'}
            </p>
            <h2 id="bmodal-title" className="bmodal__title">{BOOKING_CONFIG.modalTitle || 'Book Diagnostic Test'}</h2>
            {booking.slot ? (
              <p className="bmodal__hint">Selected slot: <strong>{booking.slot}</strong> · Early morning collection available.</p>
            ) : (
              <p className="bmodal__hint">{BOOKING_CONFIG.modalHint || 'Early morning slots starting from 6:30 AM for fasting tests.'}</p>
            )}
          </div>
          <button className="bmodal__close" onClick={closeBooking} aria-label="Close" data-cursor="hover">
            <Icon name="plus" size={20} strokeWidth={2} />
          </button>
        </div>

        <BookingForm key={`${booking.dept}-${booking.slot}-${booking.open}`} defaultDept={booking.dept} onDone={closeBooking} />

        <div className="bmodal__alt">
          <span>Prefer to talk?</span>
          <a href={CLINIC.phoneHref} data-cursor="hover"><Icon name="phone" size={14} /> {CLINIC.phoneDisplay}</a>
          <a href={WA_DEFAULT} target="_blank" rel="noreferrer" data-cursor="hover"><Icon name="whatsapp" size={14} /> WhatsApp us</a>
        </div>
      </div>
    </div>
  );
}
