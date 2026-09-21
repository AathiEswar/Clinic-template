'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { GALLERY_IMAGES } from '@/data';
import { CLINIC } from '@/config';
import { useScroll } from '@/context/ScrollContext';
import Icon from '@/lib/Icons';
import Button from '@/components/Button';
import { img as imgProps, SIZES } from '@/lib/images';

const CATEGORIES = ['All', 'Reception', 'Location', 'Facilities'];

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
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(135deg, rgba(8, 48, 58, 0.94), rgba(15, 23, 42, 0.95))' }}>
        <div className="container">
          <span className="chip chip--light">Laboratory Tour &amp; Facilities</span>
          <h1 className="page-header__title">
            Dharshini Laboratory <em>Photo Gallery.</em>
          </h1>
          <p className="page-header__sub">
            Take a visual tour of our clean reception desk, air-conditioned patient waiting area, specimen registration counter, and facility location at SP MAHAL, Nellikuppam Road, opposite Guduvancheri.
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
                  <img {...imgProps(img.src, { sizes: SIZES.third })} alt={img.title} className="gallery-card__img" style={img.pos ? { objectPosition: img.pos } : undefined} />
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

      {/* Bottom CTA */}
      <section className="section" style={{ background: 'var(--bg-soft)', textAlign: 'center', padding: '64px 0' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '16px' }}>Need a Diagnostic Test?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 28px', color: 'var(--ink-2)' }}>
            Visit our center directly on Nellikuppam Road from 6:30 AM onwards or schedule a doorstep morning blood draw.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" icon="calendar" onClick={() => openBooking()}>
              Book diagnostic test
            </Button>
            <Button variant="call" icon="phone" href={CLINIC.phoneHref}>
              Call {CLINIC.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModal && typeof document !== 'undefined' && createPortal(
        <div className="gallery-modal" onClick={closeModal} role="dialog" aria-modal="true" aria-label={activeModal.title}>
          <div className="gallery-modal__scrim" />
          <div className="gallery-modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal__close" onClick={closeModal} aria-label="Close photo">
              <Icon name="plus" size={24} strokeWidth={2} className="rot--45" />
            </button>
            <div className="gallery-modal__img-box">
              <img src={activeModal.src} alt={activeModal.title} className="gallery-modal__img" />
            </div>
            <div className="gallery-modal__caption">
              <span className="chip chip--purple">{activeModal.category}</span>
              <h3>{activeModal.title}</h3>
              <p>{activeModal.desc}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
