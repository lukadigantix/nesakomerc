import type { PageProps } from 'next/types';
import type { Locale } from '@/lib/i18n/translations';
import HeroVideo from '@/components/HeroVideo';
import Features from '@/components/Features';
import AboutSection from '@/components/AboutSection';
import HeroCarousel from '@/components/HeroCarousel';
import Advantages from '@/components/Advantages';
import RetailSection from '@/components/RetailSection';
import PartnersSection from '@/components/PartnersSection';

export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const { lang } = (await params) as { lang: Locale };

  return (
    <>
      <HeroVideo lang={lang} />
      <AboutSection lang={lang} />
      <Features lang={lang} />
      <HeroCarousel lang={lang} />
      <Advantages lang={lang} />
      <RetailSection lang={lang} />
      <PartnersSection lang={lang} />
    </>
  );
}
