import Image from 'next/image';
import { translations, type Locale } from '@/lib/i18n/translations';
import Container from '@/components/Container';

type Partner =
  | { name: string; logo: string; width: number; height: number }
  | { name: string; logo?: undefined };

const partners: Partner[] = [
  { name: 'Valdom', logo: '/partner-valdom.png', width: 140, height: 33 },
  { name: 'Delta Term', logo: '/partner-deltaterm.svg', width: 150, height: 32 },
  { name: 'Gas Lider', logo: '/partner-gaslider.png', width: 110, height: 44 },
  { name: 'Etaž', logo: '/partner-etaz.png', width: 60, height: 60 },
  { name: 'Valve Trade' },
  { name: 'Karika Promet' },
  { name: 'Mijatov' },
];

const track = [...partners, ...partners];

export default function PartnersSection({ lang }: { lang: Locale }) {
  const t = (translations[lang] ?? translations['sr']).partners;

  return (
    <section className="overflow-hidden bg-white py-54">
      <Container className="mb-14">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
          {t.label}
        </p>
        <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900 lg:text-5xl">
          {t.title}
        </h2>
      </Container>

      {/* Marquee — intentionally full-width, no Container, fades at edges */}
      <div
        className="flex"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div
          className="flex shrink-0 items-center gap-20"
          style={{ animation: 'marquee 30s linear infinite' }}
        >
          {track.map((p, i) =>
            p.logo ? (
              <Image
                key={`${p.name}-${i}`}
                src={p.logo}
                alt={p.name}
                width={p.width}
                height={p.height}
                className="max-h-12 w-auto shrink-0 object-contain grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            ) : (
              <span
                key={`${p.name}-${i}`}
                className="shrink-0 whitespace-nowrap text-xl font-bold uppercase tracking-wider text-neutral-300 transition-colors duration-300 hover:text-neutral-700"
              >
                {p.name}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
