'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';
import { PARTNERS, ALL_CITIES } from '@/lib/salesNetworkData';
import Container from '@/components/Container';

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0 text-orange-500" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.76a16 16 0 0 0 6.29 6.29l.91-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0 text-orange-500" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0 text-orange-500" aria-hidden="true">
      <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function PartnersGrid({ lang }: { lang: Locale }) {
  const t = (translations[lang] ?? translations['sr']).salesNetworkPage;

  const [activeCity, setActiveCity] = useState<string | null>(null);

  const filtered = activeCity
    ? PARTNERS.filter(p => p.cities.includes(activeCity))
    : PARTNERS;

  return (
    <section className="bg-neutral-50 py-20">
      <Container>
        {/* Section title */}
        <div className="mb-10">
          <span className="inline-block rounded-full bg-linear-to-r from-orange-500 to-red-600 px-4 py-1.5 text-[12px] font-semibold text-white">
            {t.partnersLabel}
          </span>
          <h2 className="mt-4 text-[32px] font-extrabold tracking-tight text-neutral-900">
            {t.filterAll}
          </h2>
        </div>

        {/* City filter */}
        <div className="mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCity(null)}
            className={`rounded-full border px-4 py-1.5 text-[12px] font-semibold transition-all ${
              activeCity === null
                ? 'border-transparent bg-linear-to-r from-orange-500 to-red-600 text-white'
                : 'border-neutral-200 bg-white text-neutral-600 hover:border-orange-300'
            }`}
          >
            {t.filterAll}
          </button>
          {ALL_CITIES.map(city => (
            <button
              key={city}
              onClick={() => setActiveCity(city === activeCity ? null : city)}
              className={`rounded-full border px-4 py-1.5 text-[12px] font-semibold transition-all ${
                activeCity === city
                  ? 'border-transparent bg-linear-to-r from-orange-500 to-red-600 text-white'
                  : 'border-neutral-200 bg-white text-neutral-600 hover:border-orange-300'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Partners grid */}
        {filtered.length === 0 ? (
          <p className="text-[14px] text-neutral-400">{t.noResults}</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(partner => (
              <div
                key={partner.id}
                className="flex flex-col gap-5 rounded-2xl border border-neutral-200 bg-white p-7"
              >
                {/* Header: logo or name */}
                <div className="flex items-center gap-3">
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={40}
                      className="h-9 w-auto object-contain"
                    />
                  ) : (
                    <span className="bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-[18px] font-extrabold tracking-tight text-transparent">
                      {partner.name}
                    </span>
                  )}
                  {partner.logo && (
                    <span className="text-[12px] font-bold text-neutral-500">{partner.name}</span>
                  )}
                </div>

                <div className="h-px bg-neutral-100" />

                {/* Address */}
                <div className="flex items-start gap-2">
                  <PinIcon />
                  <span className="text-[13px] leading-relaxed text-neutral-600">{partner.address}</span>
                </div>

                {/* Phones */}
                <div className="flex flex-col gap-1.5">
                  {partner.phones.map(phone => (
                    <div key={phone} className="flex items-center gap-2">
                      <PhoneIcon />
                      <a href={`tel:${phone.replace(/[\s\-/()]/g, '')}`} className="text-[13px] text-neutral-700 hover:text-orange-500 transition-colors">
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div className="flex items-center gap-2">
                  <EmailIcon />
                  <a href={`mailto:${partner.email}`} className="text-[13px] text-neutral-700 break-all hover:text-orange-500 transition-colors">
                    {partner.email}
                  </a>
                </div>

                {/* Cities */}
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {partner.cities.map(city => (
                    <span
                      key={city}
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
                        city === activeCity
                          ? 'border-orange-400 bg-orange-50 text-orange-600'
                          : 'border-neutral-200 bg-neutral-50 text-neutral-500'
                      }`}
                    >
                      {city}
                    </span>
                  ))}
                </div>

                {/* Branches */}
                {partner.branches && partner.branches.length > 0 && (
                  <div className="mt-1 border-t border-neutral-100 pt-4">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                      {t.branchesLabel}
                    </p>
                    <div className="flex flex-col gap-2">
                      {partner.branches.map((b, i) => (
                        <div key={i} className="flex flex-col gap-0.5">
                          <span className="text-[12px] font-semibold text-neutral-700">{b.city}</span>
                          {b.address && <span className="text-[12px] text-neutral-500">{b.address}</span>}
                          {b.phone && (
                            <a href={`tel:${b.phone.replace(/[\s\-/()]/g, '')}`} className="text-[12px] text-neutral-500 hover:text-orange-500 transition-colors">
                              {b.phone}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
