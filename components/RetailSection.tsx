import { translations, type Locale } from '@/lib/i18n/translations';
import Container from '@/components/Container';

export default function RetailSection({ lang }: { lang: Locale }) {
  const t = (translations[lang] ?? translations['sr']).retail;

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-40">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        src="/maloprodaja.mp4"
      />

      {/* Dark overlay on top of video */}
      <div className="pointer-events-none absolute inset-0 bg-neutral-950/55" />

      <Container className="relative">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-red-600">
            {t.label}
          </p>
          <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
            {t.title}
          </h2>
          <p className="text-base leading-relaxed text-neutral-400">
            {t.body}
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-3">
          {t.categories.map((cat) => (
            <li
              key={cat}
              className="group flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <span className="text-lg font-semibold text-white">{cat}</span>
              <span className="mt-auto flex items-center gap-1.5 text-xs font-medium text-white/30 transition-colors duration-300 group-hover:text-white/70">
                {lang === 'sr' ? 'Pogledaj asortiman' : 'View range'}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
