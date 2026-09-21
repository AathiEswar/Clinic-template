'use client';

import { useScroll } from '@/context/ScrollContext';
import { SERVICES } from '@/data';
import SectionHeader from '@/components/SectionHeader';
import Icon from '@/lib/Icons';
import { img, SIZES } from '@/lib/images';

export default function Services() {
  const { openBooking, scrollTo } = useScroll();

  return (
    <section className="services section" data-scroll-section id="services">
      <div className="container">
        <SectionHeader
          eyebrow="Diagnostic &amp; Pathology Services"
          segments={[{ t: 'Certified clinical testing & ' }, { t: 'home sample collection.', em: true }]}
          side={
            <>
              <p>
                Dharshini Laboratory provides accurate hematology, diabetes screening, thyroid profiles, routine urine/stool tests, and doorstep phlebotomy across Guduvancheri and Kayarambedu.
              </p>
              <button className="link-arrow" onClick={() => scrollTo('#process')} data-cursor="hover">
                How sample collection works <Icon name="arrowR" size={15} strokeWidth={2.2} />
              </button>
            </>
          }
        />

        <div className="services__grid">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className={`svc-card ${s.featured ? 'svc-card--featured' : ''}`}
              onClick={() => openBooking(s.title)}
              data-cursor="hover"
              data-reveal
              tabIndex={0}
              role="button"
              aria-label={`Book test for ${s.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openBooking(s.title);
                }
              }}
            >
              <div className="svc-card__image-wrap">
                <img
                  {...img(s.image, { sizes: SIZES.third })}
                  className="svc-card__image"
                  alt={s.imageAlt}
                />
              </div>

              <div className="svc-card__top">
                <span className="svc-card__icon"><Icon name={s.icon} size={26} strokeWidth={2} /></span>
                <span className="svc-card__badge">Diagnostic Test</span>
              </div>

              <h3 className="svc-card__title">{s.title}</h3>
              {s.tamilTitle && <p className="svc-card__tamil" lang="ta">{s.tamilTitle}</p>}
              <p className="svc-card__desc">{s.desc}</p>

              <div className="svc-card__chips">
                {s.chips.map((c) => (
                  <span className="chip" key={c}>{c}</span>
                ))}
              </div>

              {s.meta && <p className="svc-card__meta">{s.meta}</p>}

              <div className="svc-card__cta">
                <span>Book test / sample collection</span>
                <span className="svc-card__arrow"><Icon name="arrowR" size={15} strokeWidth={2.2} /></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
