'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { prefersReducedMotion } from '@/context/ScrollContext';

/**
 * Custom cursor — a dot + trailing ring. Desktop fine-pointers only.
 * gsap.quickTo keeps it on the compositor (transform only, one listener).
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    document.documentElement.classList.add('has-cursor');

    const dx = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power2.out' });
    const dy = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power2.out' });
    const rx = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' });
    const ry = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' });

    const DARK_SELECTOR = '.ctab__panel, .footer, .svc-card--featured, .brochure-modal, [data-dark-bg]';
    const INTERACTIVE = 'a, button, [data-cursor="hover"], input, select, textarea, [role="button"]';

    let shown = false;
    let wasDark = false;
    let isHoveringInteractive = false;

    const move = (e) => {
      if (!shown) {
        shown = true;
        gsap.to([dot, ring], { autoAlpha: 1, duration: 0.25 });
      }
      dx(e.clientX); dy(e.clientY);
      rx(e.clientX); ry(e.clientY);

      // Check if cursor is over dark card / background
      const isDark = Boolean(e.target?.closest?.(DARK_SELECTOR));
      if (isDark !== wasDark) {
        wasDark = isDark;
        dot.classList.toggle('cursor-dot--white', isDark);
        ring.classList.toggle('cursor-ring--white', isDark);

        if (!isHoveringInteractive) {
          gsap.to(ring, {
            borderColor: isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(109, 40, 217, 0.45)',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            duration: 0.25,
          });
        } else {
          gsap.to(ring, {
            borderColor: isDark ? '#FFFFFF' : 'rgba(109, 40, 217, 0.65)',
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.22)' : 'rgba(109, 40, 217, 0.12)',
            duration: 0.25,
          });
        }
      }
    };

    const over = (e) => {
      if (e.target.closest?.(INTERACTIVE)) {
        isHoveringInteractive = true;
        const isDark = Boolean(e.target?.closest?.(DARK_SELECTOR));
        gsap.to(ring, {
          scale: 1.9,
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.22)' : 'rgba(109, 40, 217, 0.12)',
          borderColor: isDark ? '#FFFFFF' : 'rgba(109, 40, 217, 0.65)',
          duration: 0.3,
        });
        gsap.to(dot, { scale: 0.4, duration: 0.3 });
      }
    };
    const out = (e) => {
      if (e.target.closest?.(INTERACTIVE)) {
        isHoveringInteractive = false;
        const isDark = Boolean(e.target?.closest?.(DARK_SELECTOR));
        gsap.to(ring, {
          scale: 1,
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(109, 40, 217, 0.45)',
          duration: 0.3,
        });
        gsap.to(dot, { scale: 1, duration: 0.3 });
      }
    };
    const down = () => gsap.to(ring, { scale: 0.85, duration: 0.2 });
    const up = () => gsap.to(ring, { scale: 1, duration: 0.3 });
    const leave = () => { shown = false; gsap.to([dot, ring], { autoAlpha: 0, duration: 0.3 }); };

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    document.documentElement.addEventListener('mouseleave', leave);

    return () => {
      document.documentElement.classList.remove('has-cursor');
      window.removeEventListener('pointermove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
