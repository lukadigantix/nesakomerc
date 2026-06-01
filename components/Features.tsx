import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';
import Container from '@/components/Container';

export default function Features({ lang }: { lang: Locale }) {
  const t = (translations[lang] ?? translations['sr']).highlights;

  return (
    <section className="bg-white mb-20">
      <Container>
        <div className="grid grid-cols-1 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 overflow-hidden sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {t.items.map((item, i) => (
            <div key={i} className="flex flex-col gap-5 p-10">
              {/* Pill category label */}
              <span className="inline-block w-fit rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[12px] font-medium text-neutral-500">
                {item.category}
              </span>

              {/* Large stat */}
              <div>
                <p className="text-[56px] font-extrabold leading-none tracking-[-0.03em] text-neutral-900">
                  {item.stat}
                </p>
                <p className="mt-1 text-[15px] font-semibold text-neutral-800">
                  {item.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-[13px] leading-relaxed text-neutral-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

