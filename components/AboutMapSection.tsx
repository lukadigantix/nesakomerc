import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';
import Container from '@/components/Container';

export default function AboutMapSection({ lang }: { lang: Locale }) {
  const t = (translations[lang] ?? translations['sr']).aboutMap;

  return (
    <section className="bg-neutral-50 py-20">
      <Container>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-8"
            >
              {/* Number */}
              <span className="bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-[48px] font-extrabold leading-none tracking-[-0.03em] text-transparent">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Label */}
              <p className="text-[15px] font-bold text-neutral-900">{item.label}</p>

              {/* Text */}
              <p className="text-[13px] leading-relaxed text-neutral-500">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
