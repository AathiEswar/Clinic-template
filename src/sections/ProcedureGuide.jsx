'use client';

import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { CLINIC, WA_DEFAULT } from '@/config';
import { useScroll } from '@/context/ScrollContext';
import Icon from '@/lib/Icons';

const CONDITIONS = [
  {
    id: 'piles',
    name: 'Piles (Hemorrhoids)',
    tamil: 'மூல நோய்',
    desc: 'Swollen veins in the lower rectum and anus causing painful defecation, bright red bleeding, itching, and tissue prolapse.',
    causes: 'Chronic constipation, prolonged sitting, straining, low-fiber diet.',
    solution: 'Individualized Ayurvedic medicines, local care, diet correction, and gentle Kshara Karma when clinically appropriate.',
    badge: '70% Population Affected',
  },
  {
    id: 'fistula',
    name: 'Anal Fistula (Bhagandara)',
    tamil: 'பௌத்திரம்',
    desc: 'An infected abnormal tunnel connecting the anal canal to the perianal skin, causing continuous foul discharge, pain, and recurring boils.',
    causes: 'Untreated perianal abscess, clogged anal crypt glands, infection.',
    solution: 'Authentic Ayurvedic Kshara Sutra care using a medicated herbal thread to support gradual tract healing.',
    badge: 'Gold Standard Cure',
  },
  {
    id: 'fissure',
    name: 'Anal Fissure (Parikartika)',
    tamil: 'ஆசனவாய் வெடிப்பு',
    desc: 'A sharp tear or crack in the sensitive lining of the anal canal causing excruciating razor-sharp burning pain and drops of blood during stool passing.',
    causes: 'Passing hard stools, severe straining, internal sphincter muscle spasm.',
    solution: 'Ayurvedic medicines, soothing local care, and bowel-habit correction to ease spasm and support healing.',
    badge: 'Instant Pain Relief',
  },
];

const COMPARISONS = [
  {
    feature: 'Pain & Discomfort',
    conventional: 'Severe post-op pain requiring heavy analgesics and daily painful dressing changes',
    dhananjaya: 'Virtually painless; performed under gentle local anesthesia with minimal discomfort',
    advantage: true,
  },
  {
    feature: 'Hospital Stay',
    conventional: '3 to 5 days hospitalization; general anesthesia required',
    dhananjaya: '30-minute day-care procedure; walk home comfortably the same day',
    advantage: true,
  },
  {
    feature: 'Anal Sphincter & Continence',
    conventional: 'Cutting sphincter muscles carries risk of permanent bowel incontinence',
    dhananjaya: '100% sphincter muscle preservation; zero risk of incontinence or leakage',
    advantage: true,
  },
  {
    feature: 'Recurrence Rate',
    conventional: 'High recurrence (up to 20%–40% in complex or high fistulas)',
    dhananjaya: 'Near-zero recurrence (< 1.5%) validated by clinical trials and 25+ years experience',
    advantage: true,
  },
  {
    feature: 'Return to Work / Activity',
    conventional: '4 to 6 weeks of bed rest and restricted physical mobility',
    dhananjaya: 'Walk immediately after procedure; resume normal desk work in 24 to 48 hours',
    advantage: true,
  },
];

export default function ProcedureGuide() {
  const [activeId, setActiveId] = useState(CONDITIONS[0].id);
  const { openBooking } = useScroll();

  return (
    <section className="proc-guide section" data-scroll-section id="procedure-guide">
      <div className="container">
        <SectionHeader
          eyebrow="Ayurvedic Piles, Fistula & Fissure Guide"
          segments={[
            { t: 'Three focused treatments, ' },
            { t: 'without major operations.', em: true },
          ]}
          side={
            <>
              <p>
                Dr. Dhananjayas Clinic provides focused Ayurvedic care only for Piles, Fistula and Fissure, including
                authentic Kshara Sutra and gentle treatment plans selected after clinical assessment.
              </p>
              <button className="link-arrow" onClick={() => openBooking()} data-cursor="hover">
                Book confidential consultation <Icon name="arrowR" size={15} strokeWidth={2.2} />
              </button>
            </>
          }
        />

        {/* Condition Selector Tabs */}
        <div className="proc-tabs" data-reveal>
          <div className="proc-tabs__nav" role="tablist" aria-label="Anorectal conditions">
            {CONDITIONS.map((c) => (
              <button
                key={c.id}
                id={`proc-tab-${c.id}`}
                className={`proc-tab-btn ${activeId === c.id ? 'is-active' : ''}`}
                onClick={() => setActiveId(c.id)}
                role="tab"
                aria-selected={activeId === c.id}
                aria-controls={`proc-panel-${c.id}`}
                data-cursor="hover"
              >
                <span className="proc-tab-btn__name">{c.name}</span>
                <span className="proc-tab-btn__tamil" lang="ta">{c.tamil}</span>
              </button>
            ))}
          </div>

          {/* One panel per condition — all three stay in the pre-rendered HTML for
              search engines; only the active one is displayed. */}
          {CONDITIONS.map((c) => (
            <div
              key={c.id}
              id={`proc-panel-${c.id}`}
              className="proc-tab-card"
              role="tabpanel"
              aria-labelledby={`proc-tab-${c.id}`}
              hidden={activeId !== c.id}
            >
              <div className="proc-tab-card__header">
                <span className="chip chip--tint">{c.badge}</span>
                <span className="proc-tab-card__sub" lang="ta">{c.tamil}</span>
              </div>
              <h3 className="proc-tab-card__title">{c.name}</h3>
              <p className="proc-tab-card__desc">{c.desc}</p>

              <div className="proc-tab-card__grid">
                <div className="proc-tab-card__col">
                  <h4><Icon name="pulse" size={16} /> Common Causes</h4>
                  <p>{c.causes}</p>
                </div>
                <div className="proc-tab-card__col proc-tab-card__col--solution">
                  <h4><Icon name="sparkle" size={16} /> Dr. Dhananjaya Solution</h4>
                  <p>{c.solution}</p>
                </div>
              </div>

              <div className="proc-tab-card__actions">
                <button className="btn btn--primary btn--sm" onClick={() => openBooking(c.name)} data-cursor="hover">
                  Consult for {c.name}
                </button>
                <a className="btn btn--wa btn--sm" href={WA_DEFAULT} target="_blank" rel="noreferrer" data-cursor="hover">
                  WhatsApp Quick Enquiry
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Gentle Ayurvedic care vs conventional major surgery */}
        <div className="proc-compare" data-reveal>
          <div className="proc-compare__head">
            <span className="chip chip--tint">Treatment Comparison</span>
            <h3>Why Patients Prefer Gentle Ayurvedic Care Over Major Open Surgery</h3>
            <p>
              A clear comparison between conventional major surgery and our focused Ayurvedic approach:
            </p>
          </div>

          <div className="proc-table-wrap">
            <table className="proc-table">
              <thead>
                <tr>
                  <th scope="col">Clinical Parameter</th>
                  <th scope="col" className="col--conventional">Conventional Open Surgery</th>
                  <th scope="col" className="col--dhananjaya">Ayurvedic Care / Kshara Sutra</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISONS.map((row) => (
                  <tr key={row.feature}>
                    <td className="cell--feature">
                      <strong>{row.feature}</strong>
                    </td>
                    <td className="cell--conventional">
                      <span className="cell__badge cell__badge--neg">
                        <Icon name="plus" size={13} className="rot--45" /> Conventional
                      </span>
                      <p>{row.conventional}</p>
                    </td>
                    <td className="cell--dhananjaya">
                      <span className="cell__badge cell__badge--pos">
                        <Icon name="check" size={13} strokeWidth={2.4} /> Recommended
                      </span>
                      <p>{row.dhananjaya}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Free Consultation Callout Banner */}
        <div className="proc-banner" data-reveal>
          <div className="proc-banner__content">
            <div className="proc-banner__badge">
              <Icon name="phone" size={28} strokeWidth={2} />
            </div>
            <div>
              <h3>Confidential Anorectal Health Helpline</h3>
              <p>
                Suffering from piles, severe fissure pain, or fistula discharge? Speak directly with our medical team.
                Your consultation is 100% dignified and strictly confidential.
              </p>
            </div>
          </div>
          <div className="proc-banner__actions">
            <a className="btn btn--light" href={CLINIC.phoneHref} data-cursor="hover">
              Call {CLINIC.phoneDisplay}
            </a>
            <button className="btn btn--outline-light" onClick={() => openBooking()} data-cursor="hover">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
