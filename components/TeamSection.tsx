import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';
import Container from '@/components/Container';

function PersonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10 text-neutral-300"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

export default function TeamSection({ lang }: { lang: Locale }) {
  const t = (translations[lang] ?? translations['sr']).aboutPage.team;

  return (
    <section className="bg-neutral-50 py-24">
      <Container>
        {/* Header */}
        <div className="mb-14">
          <span className="inline-block rounded-full bg-linear-to-r from-orange-500 to-red-600 px-4 py-1.5 text-[12px] font-semibold text-white">
            {t.badge}
          </span>
          <h2 className="mt-6 text-[38px] font-extrabold leading-tight tracking-[-0.03em] text-neutral-900 md:text-[46px]">
            {t.title}
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-neutral-500">{t.subtitle}</p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {t.members.map((member, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 rounded-2xl border border-neutral-200 border-dashed bg-white px-6 py-10 text-center"
            >
              {/* Avatar placeholder */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100">
                <PersonIcon />
              </div>
              <div>
                <p className="text-[14px] font-bold text-neutral-900">{member.name}</p>
                <p className="mt-0.5 text-[12px] text-neutral-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
