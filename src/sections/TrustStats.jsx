import { STATS } from '@/data';
import { Counter } from '@/lib/anim';

export default function TrustStats() {
  return (
    <section className="stats" data-scroll-section aria-label="Clinic statistics">
      <div className="container">
        <div className="stats__grid">
          {STATS.map((s) => (
            <div className="stats__item" key={s.label} data-reveal>
              <Counter to={s.value} suffix={s.suffix} decimals={s.decimals || 0} className="stats__value" />
              <span className="stats__label">{s.label}</span>
            </div>
          ))}
        </div>
        <p className="stats__caption" data-reveal>
          Serving patients and families across Guduvancheri, Kayarambedu, Moolakazhani, Urapakkam, Potheri, and Chengalpattu with dependable pathology testing, early morning sample collection, and prompt digital reports since 2010.
        </p>
      </div>
    </section>
  );
}
