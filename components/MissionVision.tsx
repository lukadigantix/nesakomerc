import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';
import Container from '@/components/Container';

export default function MissionVision({ lang }: { lang: Locale }) {
  const t = (translations[lang] ?? translations['sr']).aboutPage.mission;

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-150 w-150 rounded-full bg-orange-600/15 blur-[120px]" />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left: badge + title + guarantee badge */}
          <div>
            <span className="inline-block rounded-full bg-linear-to-r from-orange-500 to-red-600 px-4 py-1.5 text-[12px] font-semibold text-white">
              {t.badge}
            </span>
            <h2 className="mt-6 text-[38px] font-extrabold leading-tight tracking-[-0.03em] text-white md:text-[46px]">
              {t.title}
            </h2>

            {/* Guarantee pill */}
            <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
              {/* Shield icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 shrink-0 text-orange-400"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-[15px] font-semibold text-white">{t.guarantee}</span>
            </div>
          </div>

          {/* Right: body text */}
          <div className="space-y-5 lg:pt-2">
            <p className="text-[15px] leading-relaxed text-neutral-400">{t.body1}</p>
            <p className="text-[15px] leading-relaxed text-neutral-400">{t.body2}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
