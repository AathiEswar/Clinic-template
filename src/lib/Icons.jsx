/* Lightweight inline SVG icon set — stroke inherits currentColor.
   Pure/presentational: usable from both Server and Client Components. */

const paths = {
  steth: (
    <>
      <path d="M5 3v6a5 5 0 0 0 10 0V3" />
      <path d="M10 14v2.5a5.5 5.5 0 0 0 11 0V13" />
      <circle cx="21" cy="10.5" r="2.5" />
    </>
  ),
  heart: (
    <path d="M12 20s-7.5-4.6-9.3-9.2C1.4 7.4 3.6 4.5 6.8 4.5c2 0 3.6 1.1 4.4 2.7l.8 1.5.8-1.5c.8-1.6 2.4-2.7 4.4-2.7 3.2 0 5.4 2.9 4.1 6.3C19.5 15.4 12 20 12 20Z" />
  ),
  baby: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M12 3.5c1.2-1.6 3-1.8 3.8-.8M4 20c1.5-2.8 4.5-4.5 8-4.5s6.5 1.7 8 4.5" />
      <path d="M9.5 9.2h.01M14.5 9.2h.01M10 11.5c.6.6 1.4.9 2 .9s1.4-.3 2-.9" />
    </>
  ),
  bone: (
    <path d="M7.2 9.6 14.4 16.8M6 14.5a2.6 2.6 0 1 1-2.5-4.3 2.6 2.6 0 1 1 4.3-2.5c.3-.1 4.9 4.5 4.8 4.8a2.6 2.6 0 1 1 2.5 4.3 2.6 2.6 0 1 1-4.3 2.5C10.5 19.4 5.9 14.8 6 14.5Z" transform="rotate(-4 12 12)" />
  ),
  sparkle: (
    <>
      <path d="M12 3c1.2 4.2 3.8 6.8 8 8-4.2 1.2-6.8 3.8-8 8-1.2-4.2-3.8-6.8-8-8 4.2-1.2 6.8-3.8 8-8Z" />
      <path d="M19 3.5v3M20.5 5h-3" />
    </>
  ),
  flower: (
    <>
      <circle cx="12" cy="10" r="2.6" />
      <path d="M12 7.4c-2-3.9 2-6.3 2-6.3s3.4 3.1-2 6.3ZM14.6 10c3.9-2 6.3 2 6.3 2s-3.1 3.4-6.3-2ZM12 12.6c2 3.9-2 6.3-2 6.3S6.6 15.8 12 12.6ZM9.4 10c-3.9 2-6.3-2-6.3-2s3.1-3.4 6.3 2ZM12 15.5V22" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v5.2L4.8 17a3 3 0 0 0 2.7 4.5h9a3 3 0 0 0 2.7-4.5L14 8.2V3" />
      <path d="M7.5 14.5h9" />
    </>
  ),
  pulse: (
    <path d="M2.5 12h4l2.5-6.5L13 18l2.5-6h6" />
  ),
  arrow: <path d="M6.5 17.5 17.5 6.5M8.5 6.5h9v9" />,
  arrowR: <path d="M4 12h15M13.5 5.5 20 12l-6.5 6.5" />,
  phone: (
    <path d="M5.5 3h3l1.7 4.6-2.1 1.6a12.5 12.5 0 0 0 6.7 6.7l1.6-2.1L21 15.5v3a2.5 2.5 0 0 1-2.7 2.5C9.8 20.3 3.7 14.2 3 5.7A2.5 2.5 0 0 1 5.5 3Z" />
  ),
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
      <path d="M8.8 8.6c-.3 2.6 3.9 6.8 6.6 6.6l1-1.5-2.1-1.3-1 .8c-1-.4-1.9-1.3-2.5-2.4l.9-1-1.3-2.1-1.6 1Z" fill="currentColor" stroke="none" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  star: <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.1-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9 2.9-6z" fill="currentColor" stroke="none" />,
  check: <path d="M4.5 12.5 10 18 19.5 6.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.4 2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="3" />
      <path d="M3.5 10h17M8 2.8V7M16 2.8V7" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.2c0 4.6 3 8.6 7.5 9.8 4.5-1.2 7.5-5.2 7.5-9.8V6L12 3Z" />
      <path d="M9 12l2.2 2.2L15.5 9.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  /* Used by the gallery / brochure lightboxes and the testimonials page.
     These three were referenced but never defined in the Vite version (rendered as empty SVGs). */
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.2-4.2" />
    </>
  ),
  play: <path d="M8 5.5v13l10.5-6.5L8 5.5Z" fill="currentColor" stroke="none" />,
};
paths['map-pin'] = paths.pin;

export default function Icon({ name, size = 24, className = '', strokeWidth = 1.7 }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || null}
    </svg>
  );
}
