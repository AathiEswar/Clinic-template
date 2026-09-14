'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { GALLERY_IMAGES } from '@/data';
import { useScroll } from '@/context/ScrollContext';
import Icon from '@/lib/Icons';
import Button from '@/components/Button';
import { img as imgProps, SIZES } from '@/lib/images';

const CATEGORIES = ['All', 'Chambers', 'Day-Care OT', 'Diagnostics', 'Facilities'];

export default function GalleryView() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [activeModal, setActiveModal] = useState(null);
  const { lockScroll, unlockScroll, openBooking } = useScroll();

  const closeModal = useCallback(() => {
    if (activeModal) {
      unlockScroll();
      setActiveModal(null);
    }
  }, [activeModal, unlockScroll]);

  const openModal = (img) => {
    lockScroll();
    setActiveModal(img);
  };

  useEffect(() => {
    if (!activeModal) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeModal, closeModal]);

  const filteredImages = selectedCat === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === selectedCat);

  return (
    <div className="page-view gallery-page">
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(135deg, rgba(8, 48, 58, 0.94), rgba(15, 23, 42, 0.95)), url(/clinic-assets/hero-bg-52.png)' }}>
        <div className="container">
          <span className="chip chip--light">Hospital Tour &amp; Clinical Facilities</span>
          <h1 className="page-header__title">
            Authentic Ayurvedic Clinic <em>Photo Gallery.</em>
          </h1>
          <p className="page-header__sub">
            Take a visual tour of our sterile day-care minor OT setups, private consultation rooms, diagnostic assessment suites, and comfortable patient recovery lounges.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section gallery-section">
        <div className="container">
          {/* Category Filter Buttons */}
          <div className="gallery-filters" role="tablist" aria-label="Gallery categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`gallery-filter-btn ${selectedCat === cat ? 'is-active' : ''}`}
                onClick={() => setSelectedCat(cat)}
                role="tab"
                aria-selected={selectedCat === cat}
                aria-controls="gallery-grid"
                data-cursor="hover"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid" id="gallery-grid" role="tabpanel" aria-label={`${selectedCat} photos`}>
            {filteredImages.map((img) => (
              <div className="gallery-card" key={img.id} onClick={() => openModal(img)} data-cursor="hover">
                <div className="gallery-card__img-wrap">
                  <img {...imgProps(img.src, { sizes: SIZES.third })} alt={img.title} className="gallery-card__img" />
                  <span className="gallery-card__category">{img.category}</span>
                  <div className="gallery-card__overlay">
                    <span className="gallery-card__zoom">
                      <Icon name="search" size={20} /> View High-Res Photo
                    </span>
                  </div>
                </div>
                <div className="gallery-card__info">
                  <h3>{img.title}</h3>
                  <p>{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModal && typeof document !== 'undefined' && createPortal(
        <div className="brochure-modal" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="brochure-modal__backdrop" aria-hidden="true" />
          <div className="brochure-modal__content" onClick={(e) => e.stopPropagation()}>
            <div className="brochure-modal__head">
              <div className="brochure-modal__title-box">
                <h4>{activeModal.title}</h4>
                <span className="brochure-modal__tag">{activeModal.category}</span>
              </div>
              <div className="brochure-modal__btns">
                <a href={activeModal.src} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
                  Open Original
                </a>
                <button className="round-btn brochure-modal__close" onClick={closeModal} aria-label="Close">
                  ✕
                </button>
              </div>
            </div>
            <div className="brochure-modal__img-holder">
              <img {...imgProps(activeModal.src, { sizes: SIZES.lightbox, dimensions: false })} alt={activeModal.title} />
            </div>
            <p style={{ padding: '12px 20px', color: 'var(--ink-2)', fontSize: '14px', borderTop: '1px solid var(--line)' }}>
              {activeModal.desc}
            </p>
          </div>
        </div>,
        document.body
      )}

      {/* CTA Footer */}
      <section className="section ctab" style={{ padding: '60px 0' }}>
        <div className="container text-center">
          <h2 className="h3" style={{ color: '#fff', marginBottom: '14px' }}>
            Ready to experience world-class, painless anorectal care?
          </h2>
          <Button variant="light" icon="calendar" onClick={() => openBooking()}>
            Schedule your appointment today
          </Button>
        </div>
      </section>
    </div>
  );
}
