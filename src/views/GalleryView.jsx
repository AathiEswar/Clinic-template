'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { GALLERY_IMAGES, GALLERY_CATEGORIES, GALLERY_PAGE_CONTENT } from '@/data';
import { CLINIC } from '@/config';
import { useScroll } from '@/context/ScrollContext';
import Icon from '@/lib/Icons';
import Button from '@/components/Button';
import { img as imgProps, SIZES } from '@/lib/images';

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
          <span className="chip chip--light">{GALLERY_PAGE_CONTENT.headerChip || 'Facility Tour'}</span>
          <h1 className="page-header__title">
            {GALLERY_PAGE_CONTENT.headerTitle || `${CLINIC.name} Photo Gallery.`}
          </h1>
          <p className="page-header__sub">
            {GALLERY_PAGE_CONTENT.headerSub || CLINIC.slogan}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section gallery-section">
        <div className="container">
          {/* Category Filter Buttons */}
          <div className="gallery-filters" role="tablist" aria-label="Gallery categories">
            {GALLERY_CATEGORIES.map((cat) => (
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

      {/* Lightbox Modal */}
      {activeModal && typeof document !== 'undefined' && createPortal(
        <div className="gallery-modal" onClick={closeModal} role="dialog" aria-modal="true" aria-label="Expanded photo">
          <div className="gallery-modal__inner" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal__close" onClick={closeModal} aria-label="Close photo preview">
              <Icon name="plus" size={24} style={{ transform: 'rotate(45deg)' }} />
            </button>
            <div className="gallery-modal__img-wrap">
              <img {...imgProps(activeModal.src, { dimensions: false })} alt={activeModal.title} className="gallery-modal__img" />
            </div>
            <div className="gallery-modal__caption">
              <h3>{activeModal.title}</h3>
              <p>{activeModal.desc}</p>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Closing CTA */}
      <section className="section" style={{ padding: '40px 0 80px' }}>
        <div className="container text-center">
          <div className="ctab__panel" style={{ margin: '0 auto', maxWidth: '800px' }}>
            <h2 className="h2" style={{ color: '#fff', marginBottom: '16px' }}>Ready to Schedule Your Test?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '580px', margin: '0 auto 28px', lineHeight: 1.6 }}>
              {CLINIC.name} provides fast diagnostic testing and doorstep blood collection visits across {CLINIC.locality || CLINIC.city}.
            </p>
            <Button variant="light" icon="calendar" onClick={() => openBooking()}>
              Book Diagnostic Test
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
