import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';
import PageHero from '@/components/PageHero';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import ContactMap from '@/components/ContactMap';
import Container from '@/components/Container';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = (await params) as { lang: Locale };
  const t = (translations[lang] ?? translations['sr']).contactPage;

  return (
    <>
      <PageHero
        badge={t.hero.badge}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
      />

      {/* Info + Form */}
      <section className="bg-neutral-50 py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.6fr]">
            <ContactInfo lang={lang} />
            <ContactForm lang={lang} />
          </div>
        </Container>
      </section>

      {/* Map — full viewport width */}
      <section className="bg-white pb-0 pt-16">
        <Container>
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
            {t.mapLabel}
          </p>
        </Container>
        <div className="h-110 w-full">
          <ContactMap />
        </div>
      </section>
    </>
  );
}
