import { MaskText } from '@/lib/anim';

/** Consistent section heading: eyebrow + masked headline + optional side slot. */
export default function SectionHeader({ eyebrow, segments, side, className = '', light = false }) {
  return (
    <div className={`shead ${light ? 'shead--light' : ''} ${className}`}>
      {eyebrow && (
        <p className="eyebrow" data-reveal>
          <span className="eyebrow__dot" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <div className="shead__row">
        <MaskText as="h2" className="h2" segments={segments} />
        {side && <div className="shead__side" data-reveal>{side}</div>}
      </div>
    </div>
  );
}
