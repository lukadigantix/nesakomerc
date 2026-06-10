import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';
import PageHero from '@/components/PageHero';
import AboutContent from '@/components/AboutContent';
import MissionVision from '@/components/MissionVision';
import Features from '@/components/Features';
import TeamSection from '@/components/TeamSection';
import Testimonials from '@/components/Testimonials';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = (await params) as { lang: Locale };
  const t = (translations[lang] ?? translations['sr']).aboutHero;

  return (
    <>
      <PageHero badge={t.badge} title={t.title} subtitle={t.subtitle} />
      <AboutContent lang={lang} />
      <MissionVision lang={lang} />
      <Features lang={lang} />
      <TeamSection lang={lang} />
      <Testimonials lang={lang} />
    </>
  );
}

