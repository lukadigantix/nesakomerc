import Image from 'next/image';
import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';
import Container from '@/components/Container';

export default function AboutContent({ lang }: { lang: Locale }) {
  const t = (translations[lang] ?? translations['sr']).aboutPage.company;

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <span className="inline-block rounded-full bg-linear-to-r from-orange-500 to-red-600 px-4 py-1.5 text-[12px] font-semibold text-white">
              {t.badge}
            </span>
            <h2 className="mt-6 text-[38px] font-extrabold leading-tight tracking-[-0.03em] text-neutral-900 md:text-[46px]">
              {t.title}
            </h2>
            <div className="mt-8 space-y-5">
              <p className="text-[15px] leading-relaxed text-neutral-600">{t.body1}</p>
              <p className="text-[15px] leading-relaxed text-neutral-600">{t.body2}</p>
            </div>

            {/* Key fact strip */}
            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { value: '1992', label: lang === 'sr' ? 'Godina osnivanja' : 'Year founded' },
                { value: '2001', label: lang === 'sr' ? 'Početak proizvodnje' : 'Production start' },
                { value: '6 000 m²', label: lang === 'sr' ? 'Površina pogona' : 'Facility area' },
              ].map((item) => (
                <div key={item.value} className="flex flex-col">
                  <span className="bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-[32px] font-extrabold leading-none tracking-[-0.03em] text-transparent">
                    {item.value}
                  </span>
                  <span className="mt-1 text-[12px] font-medium text-neutral-500">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl">
            <Image
              src="https://www.nesa-komerc.com/wp-content/uploads/elementor/thumbs/KOC1710_result-pojtzye5su11mcbl0f5g4o7t0gzlurlzfgeofk1ixs.jpg"
              alt={lang === 'sr' ? 'Neša Komerc pogon' : 'Neša Komerc facility'}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-neutral-900/10" />
          </div>
        </div>
      </Container>
    </section>
  );
}
