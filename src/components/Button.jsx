'use client';

import Icon from '@/lib/Icons';
import { Magnetic } from '@/lib/anim';

/**
 * Rolling-label CTA button. Renders <a> when href is given, <button> otherwise.
 * variants: primary | ghost | light | dark
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon = 'arrowR',
  magnetic = false,
  className = '',
  ...rest
}) {
  const cls = `btn btn--${variant} ${className}`;
  const inner = (
    <>
      <span className="btn__txt" aria-hidden="true">
        <span className="btn__line">{children}</span>
        <span className="btn__line">{children}</span>
      </span>
      <span className="sr-only">{children}</span>
      {icon && (
        <span className="btn__ic">
          <Icon name={icon} size={16} strokeWidth={2} />
        </span>
      )}
    </>
  );

  const el = href ? (
    <a className={cls} href={href} onClick={onClick} data-cursor="hover" {...rest}>
      {inner}
    </a>
  ) : (
    <button type="button" className={cls} onClick={onClick} data-cursor="hover" {...rest}>
      {inner}
    </button>
  );

  return magnetic ? <Magnetic>{el}</Magnetic> : el;
}
