'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Locale, locales, translations } from '@/lib/i18n/translations';
import Container from '@/components/Container';

interface NavbarV2Props {
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

export default function NavbarV2({ lang }: NavbarV2Props) {
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

  const scrolledText = scrolled ? 'text-black' : 'text-white';
  const scrolledTextMuted = scrolled ? 'text-zinc-400' : 'text-white/50';
  const scrolledDivider = scrolled ? 'bg-zinc-200' : 'bg-white/25';
  const scrolledBorder = scrolled ? 'border-zinc-100' : 'border-white/15';

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white' : 'bg-transparent'
      }`}
    >
      {/* Top row: logo centered, left/right actions */}
      <Container className="relative flex items-center justify-center py-5">

        {/* Left side — absolute left */}
        <div className="absolute left-0 flex items-center gap-5">
          <a
            href="tel:+38135881407"
            className={`text-[13px] font-medium transition-colors duration-300 hover:opacity-70 ${scrolledText}`}
          >
            +381 35 8814 077
          </a>
          <span className={`h-4 w-px transition-colors duration-300 ${scrolledDivider}`} />
          <a
            href="mailto:office@nesa-komerc.com"
            className={`text-[13px] font-medium transition-colors duration-300 hover:opacity-70 ${scrolledText}`}
          >
            office@nesa-komerc.com
          </a>
        </div>

        {/* Logo — centered */}
        <Link href={`/${lang}`} className="shrink-0">
          <Image
            src="/nesa-komerc-logo.svg"
            alt="Neša Komerc"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Right side actions — absolute right */}
        <div className="absolute right-0 flex items-center gap-5">

          {/* Katalozi */}
          <Link
            href={`/${lang}/katalozi`}
            className={`flex items-center gap-1.5 transition-colors duration-300 hover:opacity-70 ${scrolledText}`}
          >
            <PdfIcon className="h-5 w-5" />
            <span className="text-[13px] font-semibold tracking-wider uppercase">
              {t.catalogues}
            </span>
          </Link>

          {/* Divider */}
          <span className={`h-4 w-px transition-colors duration-300 ${scrolledDivider}`} />

          {/* Language switcher */}
          <div className="flex items-center gap-1.5">
            {locales.map((locale, index) => (
              <span key={locale} className="flex items-center">
                <Link
                  href={getLocalizedPath(locale)}
                  className={`text-[13px] font-bold tracking-widest transition-colors duration-300 ${
                    lang === locale ? scrolledText : `${scrolledTextMuted} hover:opacity-100`
                  }`}
                >
                  {locale.toUpperCase()}
                </Link>
                {index < locales.length - 1 && (
                  <span className={`mx-1.5 text-xs transition-colors duration-300 ${scrolledTextMuted}`}>
                    /
                  </span>
                )}
              </span>
            ))}
          </div>

        </div>
      </Container>

      {/* Divider between rows */}
      <div className={`border-t transition-colors duration-300 ${scrolledBorder}`} />

      {/* Bottom row: nav links */}
      <Container className="flex items-center justify-center py-3">
        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[13px] font-semibold tracking-wider uppercase transition-colors duration-300 ${
                  scrolled
                    ? 'text-black hover:text-zinc-500'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>

      {/* Bottom border */}
      <div className={`border-t transition-colors duration-300 ${scrolledBorder}`} />
    </header>
  );
}
