'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';
import Container from '@/components/Container';

export default function HeroVideo({ lang }: { lang: Locale }) {
  const [ready, setReady] = useState(false);
  const t = (translations[lang] ?? translations['sr']).hero;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video2.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        onCanPlay={() => setReady(true)}
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Text overlay — animates only once video starts */}
      <div className="absolute bottom-20 left-0 right-0">
        <Container>
        <p
          className={`text-5xl font-light leading-tight tracking-[-0.03em] text-white transition-none md:text-6xl lg:text-7xl ${
            ready ? 'animate-hero-text' : 'opacity-0'
          }`}
        >
          {t.headline1}
          <br />
          <span className="inline-flex items-center gap-2">
            <span className="font-bold">{t.headline2}</span>
            <Image
              src="/logo-clean.png"
              alt="Neša Komerc"
              width={160}
              height={46}
              className="translate-y-1 ml-[-30px]"
            />
          </span>
        </p>
        <div
          className={`mt-5 flex items-center gap-4 transition-none ${ready ? 'animate-hero-text' : 'opacity-0'}`}
          style={{ animationDelay: '1s' }}
        >
          <button
            type="button"
            className="cursor-pointer rounded-lg bg-linear-to-r from-orange-500 to-red-600 px-8 py-3.5 text-[14px] font-semibold text-white shadow-[0_6px_24px_rgba(234,88,12,0.4)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(234,88,12,0.6)] hover:brightness-110"
          >
            {t.cta}
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-lg border border-white/70 bg-white/10 px-8 py-3.5 text-[14px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
          >
            {t.about}
          </button>
        </div>
        </Container>
      </div>
    </section>
  );
}
