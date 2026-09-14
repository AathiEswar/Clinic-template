'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import SectionHeader from '@/components/SectionHeader';
import { BROCHURE_IMAGES, ADDITIONAL_PROGRAMS } from '@/data';
import { useScroll } from '@/context/ScrollContext';
import Icon from '@/lib/Icons';
import { img, SIZES } from '@/lib/images';

export default function Brochures() {
  const [activeModal, setActiveModal] = useState(null);
  const { lockScroll, unlockScroll } = useScroll();

  const closeModal = useCallback(() => {
    if (activeModal) {
      unlockScroll();
      setActiveModal(null);
    }
  }, [activeModal, unlockScroll]);

  const openModal = (b) => {
    lockScroll();
    setActiveModal(b);
  };

  // Close on Escape key
  useEffect(() => {
    if (!activeModal) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeModal, closeModal]);

  // Cleanup on unmount in case modal was open
  useEffect(() => {
    return () => {
      if (activeModal) unlockScroll();
    };
  }, [activeModal, unlockScroll]);

  return (
    <section className="brochures section" data-scroll-section id="facilities">
      <div className="container">
        <SectionHeader
          eyebrow="Clinical Facilities & Diagnostic Suite"
          segments={[
            { t: 'Modern proctology setup, ' },
            { t: 'sterile minor OT & consultation chambers.', em: true },
          ]}
        />

        <p className="brochures__intro" data-reveal>
          Explore our private consultation and Ayurvedic treatment spaces for Piles, Fistula and Fissure, including hygienic Kshara Sutra care without major operations, at NGO Nagar, New Perungalathur (Near Tambaram).
        </p>

        <div className="brochures__grid">
          {BROCHURE_IMAGES.map((b) => (
            <div className="brochure-card" key={b.id} data-reveal>
              <div className="brochure-card__badge">{b.tag}</div>
              <div
                className="brochure-card__img-wrap"
                onClick={() => openModal(b)}
                data-cursor="hover"
                title="Click to view full size"
              >
                <img
                  {...img(b.src, { sizes: SIZES.third })}
                  alt={b.title}
                  className="brochure-card__img"
                />
                <div className="brochure-card__overlay">
                  <span className="brochure-card__zoom-btn">
                    <Icon name="search" size={20} /> Click to View Photo
                  </span>
                </div>
              </div>
              <div className="brochure-card__info">
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
                <div className="brochure-card__actions">
                  <button
                    className="btn btn--secondary btn--sm"
                    onClick={() => openModal(b)}
                    data-cursor="hover"
                  >
                    View Photo
                  </button>
                  <a
                    className="btn btn--ghost btn--sm"
                    href={b.src}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                  >
                    Open Image
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Programs Highlight */}
        <div className="brochures__extras" data-reveal>
          <div className="extras__head">
            <span className="chip chip--purple">Clinical Protocol</span>
            <h3>Comprehensive Diagnostic Grading &amp; Permanent Follow-Up</h3>
          </div>
          <div className="extras__grid">
            {ADDITIONAL_PROGRAMS.map((prog, idx) => (
              <div className="extras__card" key={idx}>
                <div className="extras__card-icon">
                  <Icon name="sparkle" size={22} />
                </div>
                <div>
                  <h4>{prog.title}</h4>
                  <p className="extras__tamil" lang="ta">{prog.tamilTitle}</p>
                  <p>{prog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal mounted directly to document.body via Portal */}
      {activeModal && typeof document !== 'undefined' && createPortal(
        <div
          className="brochure-modal"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={activeModal.title}
        >
          <div className="brochure-modal__backdrop" aria-hidden="true" />
          <div className="brochure-modal__content" onClick={(e) => e.stopPropagation()}>
            <div className="brochure-modal__head">
              <div className="brochure-modal__title-box">
                <h4>{activeModal.title}</h4>
                <span className="brochure-modal__tag">{activeModal.tag}</span>
              </div>
              <div className="brochure-modal__btns">
                <a
                  href={activeModal.src}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost btn--sm"
                >
                  Open in New Tab
                </a>
                <a
                  href={activeModal.src}
                  download
                  className="btn btn--primary btn--sm"
                >
                  Download
                </a>
                <button
                  className="round-btn brochure-modal__close"
                  onClick={closeModal}
                  aria-label="Close brochure modal"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="brochure-modal__img-holder">
              <img {...img(activeModal.src, { sizes: SIZES.lightbox, dimensions: false })} alt={activeModal.title} />
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
