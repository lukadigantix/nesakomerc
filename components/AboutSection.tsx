import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';
import Container from '@/components/Container';

export default function AboutSection({ lang }: { lang: Locale }) {
  const t = (translations[lang] ?? translations['sr']).aboutSection;

  return (
    <section className="bg-white py-20">
      <Container>
        {/* Pill */}
        <span className="inline-block rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-4 py-1.5 text-[12px] font-semibold text-white">
          {t.pill}
        </span>

        {/* Headline */}
        <h2 className="mt-6 text-[42px] font-extrabold leading-tight tracking-[-0.03em] text-neutral-900 md:text-[52px]">
          {t.headlinePre}{' '}
          <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            {t.headlineAccent}
          </span>
        </h2>

        {/* Body text */}
        <div className="mt-8 max-w-3xl space-y-5">
          <p className="text-[15px] leading-relaxed text-neutral-600">{t.body1}</p>
          <p className="text-[15px] leading-relaxed text-neutral-600">{t.body2}</p>
        </div>

        {/* Tagline */}
        <p className="mt-6 text-[15px] font-semibold text-neutral-800">{t.tagline}</p>
      </Container>
    </section>
  );
}
