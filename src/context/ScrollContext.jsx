'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollContext
 * ─────────────
 * Bulletproof, high-performance scroll management using native 60/120fps
 * browser scrolling and GSAP ScrollTrigger. Eliminates brittle virtual scroll
 * libraries that break multi-page navigation, keyboard scrolling, and mobile touch.
 *
 * Client-only: every browser API access lives inside effects/callbacks, so the
 * provider is safe to pre-render on the server (Next.js static export).
 */
const ScrollContext = createContext(null);
export const useScroll = () => useContext(ScrollContext);

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Skip heavy scroll animations on mobile / reduced motion */
export const skipReveal = () =>
  typeof window !== 'undefined' &&
  (prefersReducedMotion() || window.matchMedia('(max-width: 1024px)').matches);

export function ScrollProvider({ loaded, children }) {
  const containerRef = useRef(null);
  const subsRef = useRef(new Set());
  const [ready, setReady] = useState(false);
  const [booking, setBooking] = useState({ open: false, dept: '', slot: '' });
  const lockCount = useRef(0);

  // Native scroll handler that broadcasts (y, limit) to subscribers (Navbar, Dock, etc.)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY || document.documentElement.scrollTop || 0;
          const docHeight = Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight,
            1
          );
          const limit = Math.max(1, docHeight - window.innerHeight);
          subsRef.current.forEach((cb) => cb(y, limit));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial broadcast once mounted & fonts are loaded
    const raf = requestAnimationFrame(() => {
      setReady(true);
      ScrollTrigger.refresh();
      handleScroll();
    });

    if (document.fonts?.ready) {
      document.fonts.ready
        .then(() => {
          ScrollTrigger.refresh();
          handleScroll();
        })
        .catch(() => {});
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* ── scroll lock for booking modal / mobile menu ───────────── */
  const lockScroll = useCallback(() => {
    if (lockCount.current++ > 0) return;
    document.documentElement.classList.add('is-scroll-locked');
    document.body.style.overflow = 'hidden';
  }, []);

  const unlockScroll = useCallback(() => {
    if (lockCount.current === 0 || --lockCount.current > 0) return;
    document.documentElement.classList.remove('is-scroll-locked');
    document.body.style.overflow = '';
  }, []);

  /* ── scrollTo API ──────────────────────────────────────────── */
  const scrollTo = useCallback((target, opts = {}) => {
    if (!target && target !== 0) return;

    if (target === '#top' || target === 0) {
      window.scrollTo({ top: 0, left: 0, behavior: opts.behavior || 'smooth' });
      return;
    }

    if (typeof target === 'string') {
      const el = document.querySelector(target);
      if (el) {
        const nav = document.querySelector('.nav');
        const navHeight = nav ? nav.offsetHeight : 84;
        const offset = opts.offset !== undefined ? opts.offset : -(navHeight + 20);
        const rect = el.getBoundingClientRect();
        const currentY = window.scrollY || document.documentElement.scrollTop || 0;
        const destinationY = Math.max(0, currentY + rect.top + offset);
        window.scrollTo({ top: destinationY, behavior: opts.behavior || 'smooth' });
        return;
      }
    }

    if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: opts.behavior || 'smooth' });
    }
  }, []);

  const onScroll = useCallback((cb) => {
    subsRef.current.add(cb);
    return () => subsRef.current.delete(cb);
  }, []);

  /* Booking modal control */
  const bookingOpenRef = useRef(false);

  const openBooking = useCallback((dept = '', slot = '') => {
    if (!bookingOpenRef.current) {
      bookingOpenRef.current = true;
      lockScroll();
    }
    setBooking({ open: true, dept, slot });
  }, [lockScroll]);

  const closeBooking = useCallback(() => {
    if (bookingOpenRef.current) {
      bookingOpenRef.current = false;
      unlockScroll();
    }
    setBooking((b) => ({ ...b, open: false }));
  }, [unlockScroll]);

  return (
    <ScrollContext.Provider
      value={{
        containerRef,
        ready,
        loaded,
        scrollTo,
        onScroll,
        booking,
        openBooking,
        closeBooking,
        lockScroll,
        unlockScroll,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export function useAnim(scopeRef, fn, deps = []) {
  const { ready } = useScroll();
  useEffect(() => {
    if (!ready || !scopeRef.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => fn(gsap, ScrollTrigger), scopeRef);
    return () => ctx.revert();
  }, [ready, ...deps]); // eslint-disable-line react-hooks/exhaustive-deps
}

export { gsap, ScrollTrigger };
