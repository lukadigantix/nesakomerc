import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';
import PageHero from '@/components/PageHero';
import SalesNetworkMap from '@/components/SalesNetworkMap';
import PartnersGrid from '@/components/PartnersGrid';
import Container from '@/components/Container';

export default async function SalesNetworkPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = (await params) as { lang: Locale };
  const t = (translations[lang] ?? translations['sr']).salesNetworkPage;

  return (
    <>
      <PageHero
        badge={t.hero.badge}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
      />

      {/* Map — full viewport width */}
      <section className="bg-white pb-0 pt-16">
        <Container>
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
            {t.mapLabel}
          </p>
        </Container>
        <div className="h-110 w-full">
          <SalesNetworkMap />
        </div>
      </section>

      <PartnersGrid lang={lang} />
    </>
  );
}
