'use client';

import { useState, useRef } from 'react';
import { translations, type Locale } from '@/lib/i18n/translations';
import Container from '@/components/Container';

export default function Advantages({ lang }: { lang: Locale }) {
  const t = (translations[lang] ?? translations['sr']).advantages;
  const [current, setCurrent] = useState(0);
  const total = t.items.length;

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
  };

  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
            {t.pill}
          </p>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-neutral-900 lg:text-5xl">
            {t.title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-500">
            {t.lead}
          </p>
        </div>
      </Container>

      {/* MOBILE carousel */}
      <div className="lg:hidden">
        <div
          className="overflow-hidden px-4 sm:px-6"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {t.items.map((item) => (
              <div
                key={item.title}
                className="w-full flex-none flex flex-col rounded-2xl border border-neutral-200 bg-white overflow-hidden"
              >
                <div className="flex flex-col gap-5 p-7 flex-1">
                  <span className="self-start rounded-full bg-neutral-900 text-white px-3 py-1 text-xs font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold leading-snug text-neutral-900">{item.title}</h3>
                  <div>
                    <p className="mb-1.5 text-xs font-bold text-neutral-400">{t.beforeLabel}</p>
                    <p className="text-xs leading-relaxed text-neutral-500">{item.before}</p>
                  </div>
                  <div>
                    <p className="mb-1.5 text-[12px] font-bold text-red-600">{t.afterLabel}</p>
                    <p className="text-xs leading-relaxed text-neutral-700">{item.after}</p>
                  </div>
                </div>
                <div className="border-t border-neutral-100 px-7 py-4 flex items-center justify-between">
                  <p className="text-xs text-neutral-500">
                    {item.metaKey}: <span className="font-bold text-neutral-900">{item.metaValue}</span>
                  </p>
                  <p className="text-xs font-bold text-red-600">{item.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Prethodna"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:bg-neutral-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Sledeća"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:bg-neutral-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-1.5">
            {t.items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Kartica ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 bg-neutral-900' : 'w-1.5 bg-neutral-300'
                }`}
              />
            ))}
          </div>

          <p className="text-xs font-medium text-neutral-400">
            {current + 1} / {total}
          </p>
        </div>
      </div>

      {/* DESKTOP grid */}
      <Container className="hidden lg:block">
        <div className="grid grid-cols-4 gap-6">
          {t.items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white overflow-hidden"
            >
              <div className="flex flex-col gap-5 p-7 flex-1">
                <span className="self-start rounded-full bg-neutral-900 text-white px-3 py-1 text-xs font-semibold">
                  {item.category}
                </span>
                <h3 className="text-base font-bold leading-snug text-neutral-900">{item.title}</h3>
                <div>
                  <p className="mb-1.5 text-xs font-bold text-neutral-400">{t.beforeLabel}</p>
                  <p className="text-xs leading-relaxed text-neutral-500">{item.before}</p>
                </div>
                <div>
                  <p className="mb-1.5 text-[12px] font-bold text-red-600">{t.afterLabel}</p>
                  <p className="text-xs leading-relaxed text-neutral-700">{item.after}</p>
                </div>
              </div>
              <div className="border-t border-neutral-100 px-7 py-4 flex items-center justify-between">
                <p className="text-xs text-neutral-500">
                  {item.metaKey}: <span className="font-bold text-neutral-900">{item.metaValue}</span>
                </p>
                <p className="text-xs font-bold text-red-600">{item.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
