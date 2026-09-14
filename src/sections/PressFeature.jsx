'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import { useScroll } from '@/context/ScrollContext';
import { WA_DEFAULT } from '@/config';
import { PRESS_ARTICLE as A } from '@/data';
import Icon from '@/lib/Icons';
import { img, SIZES } from '@/lib/images';

/**
 * Home page "From the archives" feature: the 2016 Tamil newspaper column on
 * pauthiram (fistula), shown as the original clipping on the left and its
 * English translation in a self-scrolling reading pane on the right.
 * The pane keeps its own scrollbar so the long article never stretches the page.
 */
export default function PressFeature() {
  const { openBooking, lockScroll, unlockScroll } = useScroll();
  const paneRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const onPaneScroll = useCallback(() => {
    const el = paneRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    const p = max > 0 ? Math.min(1, el.scrollTop / max) : 1;
    setProgress(p);
    if (el.scrollTop > 24) setStarted(true);
  }, []);

  const openZoom = () => { lockScroll(); setZoomed(true); };
  const closeZoom = useCallback(() => { unlockScroll(); setZoomed(false); }, [unlockScroll]);

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e) => { if (e.key === 'Escape') closeZoom(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoomed, closeZoom]);

  const words = A.paragraphs.join(' ').split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));

  return (
    <section className="press section" data-scroll-section id="press" aria-labelledby="press-heading">
      <span className="press__year" aria-hidden="true">2016</span>
      <div className="container">
        <SectionHeader
          eyebrow={`From the archives · ${A.publication}, ${A.date}`}
          segments={[
            { t: 'What is Pauthiram? ' },
            { t: 'Our 2016 column, translated.', em: true },
          ]}
          side={
            <p>
              Long before websites, our doctors explained fistula to Tamil readers in the weekly press. Here is the
              original clipping alongside a full English translation, word for word.
            </p>
          }
        />

        <div className="press__grid">
          {/* ── original clipping ─────────────────────────────── */}
          <figure className="press__clip" data-reveal>
            <button
              type="button"
              className="press__paper"
              onClick={openZoom}
              aria-label="View the original newspaper clipping at full size"
              data-cursor="hover"
            >
              <span className="press__tape press__tape--l" aria-hidden="true" />
              <span className="press__tape press__tape--r" aria-hidden="true" />
              <img {...img(A.image, { sizes: '(max-width: 900px) 100vw, 40vw' })} alt={A.imageAlt} />
              <span className="press__zoom" aria-hidden="true">
                <Icon name="search" size={16} strokeWidth={2.2} />
                <span>View original</span>
              </span>
            </button>
            <figcaption className="press__caption">
              <span className="press__stamp">
                <Icon name="calendar" size={13} strokeWidth={2.2} />
                <time dateTime={A.dateISO}>{A.date}</time>
              </span>
              <span className="press__stamp">{A.page}</span>
              <span className="press__stamp" lang="ta">தமிழ் · Original</span>
            </figcaption>
          </figure>

          {/* ── translated reading pane ───────────────────────── */}
          <article className={`press__reader ${started ? 'is-started' : ''}`} data-reveal>
            <header className="press__reader-head">
              <span className="chip chip--tint">Translated from Tamil</span>
              <span className="press__meta">
                <Icon name="clock" size={13} strokeWidth={2.2} /> {minutes} min read
              </span>
            </header>

            <div className="press__pane-wrap">
              <div className="press__pane" ref={paneRef} onScroll={onPaneScroll} tabIndex={0}>
                <p className="press__tamil" lang="ta">{A.tamilTitle}</p>
                <h3 id="press-heading" className="press__title">
                  {A.title} <em>{A.subtitle}</em>
                </h3>

                <div className="press__body">
                  {A.paragraphs.map((para, i) => (
                    <p key={i} className={i === 0 ? 'press__p press__p--first' : 'press__p'}>
                      {para}
                    </p>
                  ))}
                </div>

                <blockquote className="press__quote">
                  <span className="press__quote-mark" aria-hidden="true">“</span>
                  {A.pullQuote}
                  <cite>— {A.signoff}</cite>
                </blockquote>

                <div className="press__end">
                  <p>
                    Nine years on, the same care continues at our Porur hospital: fistula, piles and fissure treated
                    without major operations.
                  </p>
                  <div className="press__actions">
                    <Button variant="primary" className="btn--sm" icon="calendar" onClick={() => openBooking('Anal Fistula (Bhagandara)')}>
                      Book a fistula consultation
                    </Button>
                    <a className="btn btn--wa btn--sm" href={WA_DEFAULT} target="_blank" rel="noreferrer" data-cursor="hover">
                      <span className="btn__solo">Ask on WhatsApp</span>
                      <span className="btn__ic"><Icon name="whatsapp" size={15} strokeWidth={2} /></span>
                    </a>
                  </div>
                </div>
              </div>

              {/* reading progress rail */}
              <div className="press__rail" aria-hidden="true">
                <span className="press__rail-fill" style={{ transform: `scaleY(${progress})` }} />
              </div>

              {/* nudge, fades once the reader starts scrolling */}
              <div className="press__hint" aria-hidden="true">
                <span>Scroll to read</span>
                <Icon name="arrow" size={14} strokeWidth={2.2} />
              </div>
            </div>
          </article>
        </div>
      </div>

      {zoomed && typeof document !== 'undefined' && createPortal(
        <div className="press-zoom" role="dialog" aria-modal="true" aria-label="Original newspaper clipping" onClick={closeZoom}>
          <button type="button" className="press-zoom__close" onClick={closeZoom} aria-label="Close" data-cursor="hover">
            <Icon name="plus" size={22} strokeWidth={2} className="rot--45" />
          </button>
          <img {...img(A.image, { sizes: SIZES.lightbox, dimensions: false })} alt={A.imageAlt} onClick={(e) => e.stopPropagation()} />
          <p className="press-zoom__cap">{A.publication} · {A.date} · {A.page}</p>
        </div>,
        document.body
      )}
    </section>
  );
}
