'use client';

import { useEffect, useRef } from 'react';
import { useScroll, useAnim, gsap, prefersReducedMotion, skipReveal } from '@/context/ScrollContext';

/**
 * <MaskText/> — clean headline presentation with smooth entrance.
 * Ensures text is NEVER stuck or hidden into blank spaces across page navigations.
 * The full headline text is present in the pre-rendered HTML (SEO-safe); GSAP only
 * animates the already-rendered words in.
 */
export function MaskText({
  as: Tag = 'h2',
  segments,
  text,
  className = '',
  play,
  delay = 0,
  stagger = 0.035,
  ...rest
}) {
  const ref = useRef(null);
  const { ready } = useScroll();
  const segs = segments || [{ t: text || '' }];

  useEffect(() => {
    const el = ref.current;
    if (!ready || !el || skipReveal()) return;

    const words = el.querySelectorAll('.w-in');
    if (!words.length) return;

    const ctx = gsap.context(() => {
      const vars = {
        yPercent: 80,
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out',
        stagger,
        delay,
        clearProps: 'all', // Clears all inline styles once done so text can never get stuck!
      };

      if (play === undefined) {
        gsap.from(words, {
          ...vars,
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        });
      } else if (play) {
        gsap.from(words, vars);
      }
    }, el);

    return () => ctx.revert();
  }, [ready, play]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Tag ref={ref} className={`mask-text ${className}`} {...rest}>
      {segs.map((seg, si) => {
        const words = seg.t.split(' ').filter(Boolean);
        return words.map((w, wi) => (
          <span key={`${si}-${wi}`}>
            <span className="w">
              <span className={`w-in${seg.em ? ' em' : ''}`}>{w}</span>
            </span>{' '}
          </span>
        ));
      })}
    </Tag>
  );
}

/** <Counter/> — animated number that counts up when scrolled into view. */
export function Counter({ to, suffix = '', decimals = 0, duration = 1.4, className = '' }) {
  const ref = useRef(null);
  const scope = useRef(null);

  useAnim(scope, (gsap) => {
    if (skipReveal()) return;
    const obj = { v: 0 };
    gsap.to(obj, {
      v: to,
      duration,
      ease: 'power2.out',
      scrollTrigger: { trigger: scope.current, start: 'top 92%', once: true },
      onUpdate: () => {
        if (ref.current) ref.current.textContent = obj.v.toFixed(decimals);
      },
    });
  });

  return (
    <span ref={scope} className={`counter ${className}`}>
      <span ref={ref}>{to}</span>
      <span className="counter__suffix">{suffix}</span>
    </span>
  );
}

/**
 * <Magnetic/> — element gently follows the pointer (desktop only).
 * Uses gsap.quickTo → transform-only, zero layout thrash.
 */
export function Magnetic({ children, strength = 0.32, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.9, ease: 'elastic.out(1, 0.4)' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.9, ease: 'elastic.out(1, 0.4)' });

    const move = (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * strength);
      yTo((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const leave = () => { xTo(0); yTo(0); };

    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    return () => {
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`magnetic ${className}`}>
      {children}
    </div>
  );
}
