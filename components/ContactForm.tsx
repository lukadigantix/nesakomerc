'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';
import ReusableButton from '@/components/ui/ReusableButton';

export default function ContactForm({ lang }: { lang: Locale }) {
  const t = (translations[lang] ?? translations['sr']).contactPage.form;

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    department: '',
    message: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    'w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[14px] text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-400/20';
  const labelClass = 'mb-1.5 block text-[12px] font-semibold uppercase tracking-wide text-neutral-500';

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-neutral-200 bg-white p-16 text-center">
        {/* Checkmark */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-r from-orange-500 to-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="text-[22px] font-extrabold tracking-tight text-neutral-900">{t.successTitle}</p>
        <p className="max-w-xs text-[14px] leading-relaxed text-neutral-500">{t.successBody}</p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 lg:p-10">
      {/* Header */}
      <span className="inline-block rounded-full bg-linear-to-r from-orange-500 to-red-600 px-4 py-1.5 text-[12px] font-semibold text-white">
        {t.badge}
      </span>
      <h2 className="mt-4 text-[28px] font-extrabold tracking-tight text-neutral-900">
        {t.title}
      </h2>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
        {/* Row: name + company */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className={labelClass}>{t.labelName}</label>
            <input
              id="cf-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder={t.placeholderName}
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="cf-company" className={labelClass}>{t.labelCompany}</label>
            <input
              id="cf-company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder={t.placeholderCompany}
              value={form.company}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        {/* Row: phone + email */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-phone" className={labelClass}>{t.labelPhone}</label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder={t.placeholderPhone}
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="cf-email" className={labelClass}>{t.labelEmail}</label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={t.placeholderEmail}
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        {/* Department select */}
        <div>
          <label htmlFor="cf-department" className={labelClass}>{t.labelDepartment}</label>
          <select
            id="cf-department"
            name="department"
            required
            value={form.department}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>—</option>
            {t.departments.map((d) => (
              <option key={d.value} value={d.value}>{d.label}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="cf-message" className={labelClass}>{t.labelMessage}</label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={5}
            placeholder={t.placeholderMessage}
            value={form.message}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
          />
        </div>

        <ReusableButton variant="primary" type="submit" className="w-full justify-center">
          {t.submit}
        </ReusableButton>
      </form>
    </div>
  );
}
