'use client';

import { useState, useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ScrollProvider, useScroll } from '@/context/ScrollContext';

import Preloader from './Preloader';
import Cursor from './Cursor';
import Navbar from './Navbar';
import FloatingDock from './FloatingDock';
import BookingModal from './BookingModal';
import ScrollToTop from './ScrollToTop';
import Footer from '@/sections/Footer';

/**
 * Persistent site chrome (nav, dock, booking modal, footer) around the routed page.
 * Replaces the old <App/> + <Site/> pair from the Vite/react-router version:
 * routing is now handled by the Next.js App Router (src/app/**), and `children`
 * is the current page — already pre-rendered to HTML at build time.
 */
function Site({ children }) {
  const { containerRef } = useScroll();
  const pathname = usePathname();

  /* Ensure all content is immediately and reliably visible with zero blank white spaces */
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    items.forEach((el) => {
      el.style.opacity = '1';
      el.style.visibility = 'visible';
      el.style.transform = 'none';
    });
  }, [pathname]);

  return (
    <>
      <Cursor />
      <Navbar />
      <FloatingDock />
      <BookingModal />
      <ScrollToTop />

      <div className="scroll-container" ref={containerRef}>
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </div>

      <div className="grain" aria-hidden="true" />
    </>
  );
}

export default function AppShell({ children }) {
  const [loaded, setLoaded] = useState(false);
  const onLoaded = useCallback(() => setLoaded(true), []);

  // Ensure browser does not try to restore previous scroll offset on route navigation
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <ScrollProvider loaded={loaded}>
      {!loaded && <Preloader onComplete={onLoaded} />}
      <Site>{children}</Site>
    </ScrollProvider>
  );
}
