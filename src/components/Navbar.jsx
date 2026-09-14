'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useScroll } from '@/context/ScrollContext';
import { CLINIC, WA_DEFAULT } from '@/config';
import { NAV_LINKS } from '@/data';
import Icon from '@/lib/Icons';
import Button from './Button';

/** "/about-us/" and "/about-us" are the same route (trailingSlash: true). */
const normalize = (p) => (p && p.length > 1 ? p.replace(/\/+$/, '') : p || '/');

export default function Navbar() {
  const { onScroll, scrollTo, openBooking, lockScroll, unlockScroll } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = normalize(usePathname());
  const router = useRouter();

  useEffect(() => {
    return onScroll((y, limit) => {
      setScrolled(y > 20);
      setProgress(Math.min(1, y / Math.max(1, limit)));
    });
  }, [onScroll]);

  // hold the page still under the mobile menu (and put it back on close)
  useEffect(() => {
    if (!menuOpen) return;
    lockScroll();
    return unlockScroll;
  }, [menuOpen, lockScroll, unlockScroll]);

  useEffect(() => {
    document.documentElement.classList.toggle('is-menu-open', menuOpen);
    return () => {
      document.documentElement.classList.remove('is-menu-open');
    };
  }, [menuOpen]);

  // Esc closes
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    const mq = window.matchMedia('(min-width: 1141px)');
    const onWide = (e) => { if (e.matches) setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onWide);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onWide);
    };
  }, [menuOpen]);

  const handleNavClick = (path) => (e) => {
    if (menuOpen) setMenuOpen(false);
    if (path.startsWith('#')) {
      e.preventDefault();
      if (pathname !== '/') {
        router.push('/' + path);
      } else {
        scrollTo(path);
      }
    } else {
      // route navigation
      if (pathname === normalize(path)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
      }
    }
  };

  const isActive = (path) => pathname === normalize(path);

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav__inner">
          <Link
            className="nav__brand"
            href="/"
            onClick={handleNavClick('/')}
            aria-label={`${CLINIC.name} — home`}
            data-cursor="hover"
          >
            <span className="nav__mark" aria-hidden="true">
              <svg viewBox="0 0 80 80" width="40" height="40">
                <rect width="80" height="80" rx="18" fill="var(--bg-soft, #F1F5F9)" />
                <path d="M40 18 V62" stroke="var(--teal, #086375)" strokeWidth="6" strokeLinecap="round" />
                <path d="M18 40 H62" stroke="var(--teal, #086375)" strokeWidth="6" strokeLinecap="round" />
                <circle cx="40" cy="40" r="10" fill="var(--surface, #FFFFFF)" stroke="var(--gold, #E07A5F)" strokeWidth="3.5" />
              </svg>
            </span>
            <span className="nav__brand-txt">
              <strong><span style={{ color: 'var(--ink)' }}>DR.</span> <span style={{ color: 'var(--teal)' }}>DHANANJAYA</span></strong>
            </span>
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.path || l.label}
                href={l.path}
                onClick={handleNavClick(l.path)}
                className={`nav__link ${isActive(l.path) ? 'is-active' : ''}`}
                aria-current={isActive(l.path) ? 'page' : undefined}
                title={l.short && l.short !== l.label ? l.label : undefined}
                data-cursor="hover"
              >
                {l.short || l.label}
              </Link>
            ))}
          </nav>

          <div className="nav__actions">
            <a className="nav__phone" href={CLINIC.phoneHref} data-cursor="hover" aria-label={`Call ${CLINIC.phoneDisplay}`} title={`Call ${CLINIC.phoneDisplay}`}>
              <Icon name="phone" size={18} strokeWidth={2} />
            </a>
            <a className="nav__wa" href={WA_DEFAULT} target="_blank" rel="noreferrer" data-cursor="hover" aria-label={`WhatsApp ${CLINIC.name}`} title="Chat on WhatsApp">
              <Icon name="whatsapp" size={18} />
            </a>
            <Button variant="primary" className="btn--sm nav__cta" onClick={() => openBooking()} icon="calendar" title="Book appointment">
              Book appointment
            </Button>
            <button
              className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label="Menu"
            >
              <span /><span />
            </button>
          </div>
        </div>
        <span className="nav__progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      </header>

      {/* Mobile full-screen menu */}
      <div className={`menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="menu__links" aria-label="Mobile">
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.path || l.label}
              href={l.path}
              onClick={handleNavClick(l.path)}
              style={{ '--i': i }}
              className={`menu__link ${isActive(l.path) ? 'is-active' : ''}`}
            >
              <span>{l.label}</span>
              <Icon name="arrow" size={22} />
            </Link>
          ))}
        </nav>
        <div className="menu__foot">
          <button className="btn btn--primary btn--block" onClick={() => { setMenuOpen(false); openBooking(); }}>
            <span className="btn__solo">Book appointment</span>
            <span className="btn__ic"><Icon name="calendar" size={16} strokeWidth={2} /></span>
          </button>
          <div className="menu__row">
            <a className="btn btn--call btn--half" href={CLINIC.phoneHref}>
              <span className="btn__solo">Call</span>
              <span className="btn__ic"><Icon name="phone" size={15} strokeWidth={2} /></span>
            </a>
            <a className="btn btn--wa btn--half" href={WA_DEFAULT} target="_blank" rel="noreferrer">
              <span className="btn__solo">WhatsApp</span>
              <span className="btn__ic"><Icon name="whatsapp" size={15} strokeWidth={2} /></span>
            </a>
          </div>
          <p className="menu__hours">Open daily: 10:00 AM – 7:30 PM · Porur, Chennai</p>
        </div>
      </div>
    </>
  );
}
