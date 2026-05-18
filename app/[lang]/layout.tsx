import NavbarV2 from '@/components/NavbarV2';
import Footer from '@/components/Footer';
import { locales, type Locale } from '@/lib/i18n/translations';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = (await params) as { lang: Locale };

  return (
    <>
      <NavbarV2 lang={lang} />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer lang={lang} />
    </>
  );
}
