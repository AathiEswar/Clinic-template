'use client';

import { useEffect, useMemo, useState } from 'react';
import { SERVICES, TIME_SLOTS, BOOKING_CONFIG } from '@/data';
import { CLINIC, waLink } from '@/config';
import Icon from '@/lib/Icons';

const todayISO = () => new Date().toISOString().slice(0, 10);

/**
 * Shared appointment form — used by the booking modal and the contact section.
 * Validates inline; on submit simulates a request then shows a success state
 * with a WhatsApp fast-confirm deep link.
 *
 * 🔌 To go live: replace the fake `submit()` timeout with your API call
 *    (fetch('/api/appointments', {method:'POST', body: JSON.stringify(form)})).
 */
export default function BookingForm({ defaultDept = '', compact = false, onDone }) {
  // Today's date is resolved on the client after mount. Computing it during the
  // static build would bake the *build* date into the HTML and mismatch on hydration.
  const [today, setToday] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    dept: defaultDept,
    date: '',
    time: '',
    note: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | done

  useEffect(() => {
    const t = todayISO();
    setToday(t);
    setForm((f) => (f.date ? f : { ...f, date: t }));
  }, []);

  const depts = useMemo(() => SERVICES.map((s) => s.title), []);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (form.name.trim().length < 3) er.name = 'Please enter your full name';
    const digits = form.phone.replace(/[^\d]/g, '').replace(/^91/, '');
    if (!/^[6-9]\d{9}$/.test(digits)) er.phone = 'Enter a valid 10-digit mobile number';
    if (!form.dept) er.dept = 'Choose a service or test';
    if (!form.date) er.date = 'Pick a date';
    if (!form.time) er.time = 'Pick a time';
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    if (!validate()) return;
    setStatus('sending');
    // — replace with a real API call —
    setTimeout(() => setStatus('done'), 900);
  };

  const waConfirm = waLink(
    `Hi ${CLINIC.name}! I would like to book a diagnostic test / sample collection.\nName: ${form.name}\nService: ${form.dept}\nPreferred: ${form.date} at ${form.time}\nPlease confirm my slot.`
  );

  if (status === 'done') {
    return (
      <div className="bform__success" role="status">
        <span className="bform__check">
          <Icon name="check" size={28} strokeWidth={2.4} />
        </span>
        <h3 className="bform__success-title">Request received, {form.name.split(' ')[0]}.</h3>
        <p className="bform__success-txt">
          We’ll contact you promptly to confirm your{' '}
          <strong>{form.dept}</strong> booking for <strong>{form.date}</strong> at{' '}
          <strong>{form.time}</strong>.
        </p>
        <div className="bform__success-actions">
          <a className="btn btn--wa" href={waConfirm} target="_blank" rel="noreferrer">
            <span className="btn__solo">Confirm faster on WhatsApp</span>
            <span className="btn__ic"><Icon name="whatsapp" size={15} strokeWidth={2} /></span>
          </a>
          {onDone && (
            <button className="btn btn--ghost" onClick={onDone}>
              <span className="btn__solo">Done</span>
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form className={`bform ${compact ? 'bform--compact' : ''}`} onSubmit={submit} noValidate>
      <div className="bform__grid">
        <label className={`field ${errors.name ? 'has-error' : ''}`}>
          <span className="field__label">Full name</span>
          <input type="text" value={form.name} onChange={set('name')} placeholder="e.g. Patient Name" autoComplete="name" />
          {errors.name && <em className="field__err">{errors.name}</em>}
        </label>

        <label className={`field ${errors.phone ? 'has-error' : ''}`}>
          <span className="field__label">Mobile number</span>
          <input type="tel" value={form.phone} onChange={set('phone')} placeholder="98765 43210" autoComplete="tel" inputMode="numeric" />
          {errors.phone && <em className="field__err">{errors.phone}</em>}
        </label>

        <label className={`field ${errors.dept ? 'has-error' : ''}`}>
          <span className="field__label">{BOOKING_CONFIG.serviceLabel || 'Diagnostic Test / Service'}</span>
          <select value={form.dept} onChange={set('dept')}>
            <option value="" disabled>{BOOKING_CONFIG.servicePlaceholder || 'Select test or service'}</option>
            {depts.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          {errors.dept && <em className="field__err">{errors.dept}</em>}
        </label>

        <label className={`field ${errors.date ? 'has-error' : ''}`}>
          <span className="field__label">Preferred date</span>
          <input type="date" value={form.date} min={today} onChange={set('date')} />
          {errors.date && <em className="field__err">{errors.date}</em>}
        </label>
      </div>

      <div className={`field ${errors.time ? 'has-error' : ''}`}>
        <span className="field__label">{BOOKING_CONFIG.timeLabel || 'Preferred time (6:30 AM onwards)'}</span>
        <div className="bform__slots" role="radiogroup" aria-label="Preferred time">
          {TIME_SLOTS.map((t) => (
            <button
              key={t}
              type="button"
              role="radio"
              aria-checked={form.time === t}
              className={`slot ${form.time === t ? 'is-active' : ''}`}
              onClick={() => { setForm((f) => ({ ...f, time: t })); setErrors((er) => ({ ...er, time: undefined })); }}
            >
              {t}
            </button>
          ))}
        </div>
        {errors.time && <em className="field__err">{errors.time}</em>}
      </div>

      {!compact && (
        <label className="field">
          <span className="field__label">{BOOKING_CONFIG.noteLabel || 'Specific test or home collection address'} <i>(optional)</i></span>
          <textarea rows="2" value={form.note} onChange={set('note')} placeholder={BOOKING_CONFIG.notePlaceholder || 'Mention doctor prescription, fasting tests, or doorstep address…'} />
        </label>
      )}

      <button type="submit" className={`btn btn--primary btn--block bform__submit ${status === 'sending' ? 'is-busy' : ''}`}>
        <span className="btn__solo">{status === 'sending' ? 'Booking your test…' : (BOOKING_CONFIG.submitButtonText || 'Confirm Test Request')}</span>
        <span className="btn__ic"><Icon name="arrowR" size={16} strokeWidth={2} /></span>
      </button>

      <p className="bform__note">
        <Icon name="shield" size={14} /> {BOOKING_CONFIG.guaranteeNote || '100% Sterile Collection · Early Morning Slots · WhatsApp Report Delivery'}
      </p>
    </form>
  );
}
