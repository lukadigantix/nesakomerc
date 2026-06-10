import Image from 'next/image';
import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';
import Container from '@/components/Container';

export default function Testimonials({ lang }: { lang: Locale }) {
  const t = (translations[lang] ?? translations['sr']).testimonials;

  return (
    <section className="bg-neutral-50 pb-20 ">
      <Container>
        <div className="grid grid-cols-3 gap-5">
          {t.items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-neutral-200/60 bg-white p-8"
            >
              <p className="text-[20px] font-bold leading-snug tracking-[-0.02em] text-neutral-900">
                {item.quote}
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-neutral-400">
                {item.body}
              </p>

              <div className="mt-auto pt-10 flex items-center gap-3">
                {/* Brand mark instead of avatar */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-red-600">
                  <Image
                    src="/logo-clean.png"
                    alt=""
                    width={18}
                    height={18}
                    className="brightness-[100] invert"
                  />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-neutral-800">{item.name}</p>
                  <p className="text-[12px] text-neutral-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
