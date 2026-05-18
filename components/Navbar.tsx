'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Locale, locales, translations } from '@/lib/i18n/translations';
import Container from '@/components/Container';

interface NavbarProps {
  lang: Locale;
}

function PdfIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <text
        x="7"
        y="18"
        fontSize="5.5"
        fontWeight="700"
        stroke="none"
        fill="currentColor"
        fontFamily="sans-serif"
        letterSpacing="0.3"
      >
        PDF
      </text>
    </svg>
  );
}

export default function Navbar({ lang }: NavbarProps) {
  const pathname = usePathname();
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: `/${lang}`, label: t.home },
    { href: `/${lang}/proizvodnja`, label: t.production },
    { href: `/${lang}/proizvodi`, label: t.products },
    { href: `/${lang}/maloprodaja`, label: t.retail },
    { href: `/${lang}/prodajna-mreza`, label: t.salesNetwork },
    { href: `/${lang}/o-nama`, label: t.about },
    { href: `/${lang}/kontakt`, label: t.contact },
  ];

  function getLocalizedPath(targetLang: Locale): string {
    const segments = pathname.split('/');
    segments[1] = targetLang;
    return segments.join('/');
  }

  const linkClass = `text-[16px] font-extrabold transition-colors duration-300 ${
    scrolled ? 'text-black hover:text-zinc-500' : 'text-white/90 hover:text-white'
  }`;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <Container className="flex items-center gap-12 py-8">

        {/* Logo */}
        <Link href={`/${lang}`} className="shrink-0">
          <Image
            src="/nesa-komerc-logo.svg"
            alt="Neša Komerc"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Navigation links — left, next to logo */}
        <ul className="hidden flex-1 items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: Katalozi + Language */}
        <div className="hidden shrink-0 items-center gap-5 lg:flex">

          {/* Katalozi */}
          <Link
            href={`/${lang}/katalozi`}
            className={`flex items-center gap-1.5 transition-colors duration-300 ${
              scrolled ? 'text-black hover:text-zinc-600' : 'text-white/90 hover:text-white'
            }`}
          >
            <PdfIcon className="h-5 w-5" />
            <span className="text-[16px] font-extrabold">
              {t.catalogues}
            </span>
          </Link>

          {/* Divider */}
          <span
            className={`h-5 w-px transition-colors duration-300 ${
              scrolled ? 'bg-zinc-200' : 'bg-white/25'
            }`}
          />

          {/* Language switcher */}
          <div className="flex items-center gap-1.5">
            {locales.map((locale, index) => (
              <span key={locale} className="flex items-center">
                <Link
                  href={getLocalizedPath(locale)}
                  className={`text-[13px] font-bold tracking-widest transition-colors duration-300 ${
                    lang === locale
                      ? scrolled
                        ? 'text-zinc-950'
                        : 'text-white'
                      : scrolled
                        ? 'text-zinc-400 hover:text-zinc-700'
                        : 'text-white/45 hover:text-white/75'
                  }`}
                >
                  {locale.toUpperCase()}
                </Link>
                {index < locales.length - 1 && (
                  <span
                    className={`mx-1.5 text-xs transition-colors duration-300 ${
                      scrolled ? 'text-zinc-300' : 'text-white/25'
                    }`}
                  >
                    /
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

      </Container>
    </header>
  );
}
