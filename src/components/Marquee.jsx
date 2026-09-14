/**
 * Infinite marquee — pure CSS animation (GPU compositor only, no JS per frame).
 * Content is duplicated once; animation pauses on hover & for reduced motion.
 */
export default function Marquee({ children, duration = 28, reverse = false, className = '' }) {
  return (
    <div className={`marquee ${className}`} style={{ '--marquee-dur': `${duration}s` }}>
      <div className={`marquee__track${reverse ? ' is-reverse' : ''}`}>
        <div className="marquee__group">{children}</div>
        <div className="marquee__group" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
