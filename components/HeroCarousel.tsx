'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';
import { translations, type Locale } from '@/lib/i18n/translations';

const images: { src: string; alt: string }[] = [
  { src: '/lux.png', alt: 'NK LUX' },
  { src: '/nx-term.png', alt: 'NK TERM 22' },
  { src: '/nx-standard.png', alt: 'NK STANDARD' },
];

const AUTOPLAY_INTERVAL = 5000;

export default function HeroCarousel({ lang }: { lang: Locale }) {
  const [current, setCurrent] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const t = (translations[lang] ?? translations['sr']).carousel;

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => {
        setDisplayedIndex(index);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setIsTransitioning(false));
        });
      }, 700);
    },
    [current, isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % images.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const slide = t.slides[displayedIndex];

  return (
    <section className="relative h-[calc(100vh-125px)] w-full overflow-hidden mt-20">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Right-side text overlay */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="mx-auto w-full max-w-350 px-8 pointer-events-none flex">
          <div className="ml-auto w-1/2 pl-10 pointer-events-auto">
          <div className={`transition-opacity duration-700 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-4">
              Neša Komerc
            </p>
            <h2 className="text-7xl font-extrabold text-white leading-tight mb-6">
              {slide.title}
            </h2>
            <p className="text-base text-white/80 leading-relaxed mb-10">
              {slide.description}
            </p>
            <Link
              href={slide.href}
              className="cursor-pointer rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3.5 text-[14px] font-semibold text-white shadow-[0_6px_24px_rgba(234,88,12,0.4)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(234,88,12,0.6)] hover:brightness-110"
            >
              {slide.cta}
            </Link>
          </div>
          </div>
        </div>
      </div>

      {/* Pill indicators */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ease-in-out ${
              index === current
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
