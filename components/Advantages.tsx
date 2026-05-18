import { translations, type Locale } from '@/lib/i18n/translations';
import Container from '@/components/Container';

export default function Advantages({ lang }: { lang: Locale }) {
  const t = (translations[lang] ?? translations['sr']).advantages;

  return (
    <section className="bg-white py-20">
      <Container>
        {/* Section header */}
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

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white overflow-hidden"
            >
              {/* Card body */}
              <div className="flex flex-col gap-5 p-7 flex-1">
                {/* Category pill */}
                <span className="self-start rounded-full bg-neutral-900 text-white px-3 py-1 text-xs font-semibold">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-base font-bold leading-snug text-neutral-900">
                  {item.title}
                </h3>

                {/* Before */}
                <div>
                  <p className="mb-1.5 text-xs font-bold  text-neutral-400">
                    {t.beforeLabel}
                  </p>
                <p className="text-xs leading-relaxed text-neutral-500">
                    {item.before}
                  </p>
                </div>

                {/* After */}
                <div>
                  <p className="mb-1.5 text-[12px] font-bold text-red-600">
                    {t.afterLabel}
                  </p>
                  <p className="text-xs leading-relaxed text-neutral-700">
                    {item.after}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-neutral-100 px-7 py-4 flex items-center justify-between">
                <p className="text-xs text-neutral-500">
                  {item.metaKey}:{' '}
                  <span className="font-bold text-neutral-900">{item.metaValue}</span>
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

