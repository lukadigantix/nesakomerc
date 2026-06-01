'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Locale, locales, translations } from '@/lib/i18n/translations';
import Container from '@/components/Container';

interface NavbarV2Props {
  lang: Locale;
  forceScrolled?: boolean;
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

export default function NavbarV2({ lang, forceScrolled = false }: NavbarV2Props) {
  const pathname = usePathname();
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(forceScrolled);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (forceScrolled) return;
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [forceScrolled]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

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
        scrolled || menuOpen ? 'bg-white' : 'bg-transparent'
      }`}
    >
      {/* ── DESKTOP top row ── */}
      <Container className="relative hidden items-center justify-center py-5 lg:flex">
        {/* Left side */}
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

        {/* Right side */}
        <div className="absolute right-0 flex items-center gap-5">
          <Link
            href={`/${lang}/katalozi`}
            className={`flex items-center gap-1.5 transition-colors duration-300 hover:opacity-70 ${scrolledText}`}
          >
            <PdfIcon className="h-5 w-5" />
            <span className="text-[13px] font-semibold tracking-wider uppercase">
              {t.catalogues}
            </span>
          </Link>
          <span className={`h-4 w-px transition-colors duration-300 ${scrolledDivider}`} />
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

      {/* Divider between rows — desktop only */}
      <div className={`hidden border-t transition-colors duration-300 lg:block ${scrolledBorder}`} />

      {/* ── DESKTOP bottom row: nav links ── */}
      <Container className="hidden items-center justify-center py-3 lg:flex">
        <ul className="flex items-center gap-10">
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

      {/* Bottom border — desktop only */}
      <div className={`hidden border-t transition-colors duration-300 lg:block ${scrolledBorder}`} />

      {/* ── MOBILE top bar ── */}
      <Container className="flex items-center justify-between py-4 lg:hidden">
        {/* Logo left */}
        <Link href={`/${lang}`} className="shrink-0">
          <Image
            src="/nesa-komerc-logo.svg"
            alt="Neša Komerc"
            width={120}
            height={34}
            priority
          />
        </Link>

        {/* Hamburger right */}
        <button
          type="button"
          aria-label={menuOpen ? 'Zatvori meni' : 'Otvori meni'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg transition-colors duration-200 ${
            scrolled || menuOpen ? 'text-black' : 'text-white'
          }`}
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </Container>

      {/* ── MOBILE menu — full screen overlay ── */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-white transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Top bar repeated inside overlay so it renders on top */}
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 border-b border-zinc-100">
          <Link href={`/${lang}`} className="shrink-0" onClick={() => setMenuOpen(false)}>
            <Image
              src="/nesa-komerc-logo.svg"
              alt="Neša Komerc"
              width={120}
              height={34}
              priority
            />
          </Link>
          <button
            type="button"
            aria-label="Zatvori meni"
            onClick={() => setMenuOpen(false)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-black"
          >
            <span className="block h-0.5 w-6 bg-current translate-y-0.75 rotate-45" />
            <span className="block h-0.5 w-6 bg-current -translate-y-0.75 -rotate-45" />
          </button>
        </div>

        {/* Nav links — take up remaining space */}
        <nav className="flex flex-1 flex-col overflow-y-auto px-4 sm:px-6 pt-4 pb-8">
          <ul className="flex flex-col flex-1">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-5 text-[22px] font-bold tracking-tight text-black border-b border-zinc-100 hover:text-zinc-500 transition-colors duration-200"
                >
                  <span>{link.label}</span>
                  <span className="text-zinc-300 text-lg">→</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Bottom strip: contact + language */}
          <div className="mt-auto pt-8 flex flex-col gap-5">
            {/* Katalozi */}
            <Link
              href={`/${lang}/katalozi`}
              className="flex items-center gap-2 text-[14px] font-semibold tracking-wider uppercase text-black hover:opacity-60 transition-opacity duration-200"
            >
              <PdfIcon className="h-5 w-5" />
              {t.catalogues}
            </Link>

            <div className="h-px bg-zinc-100" />

            <div className="flex items-center justify-between">
              {/* Contact info */}
              <div className="flex flex-col gap-1">
                <a href="tel:+38135881407" className="text-[13px] text-zinc-500 hover:text-black transition-colors duration-200">
                  +381 35 8814 077
                </a>
                <a href="mailto:office@nesa-komerc.com" className="text-[13px] text-zinc-500 hover:text-black transition-colors duration-200">
                  office@nesa-komerc.com
                </a>
              </div>

              {/* Language switcher */}
              <div className="flex items-center gap-1.5">
                {locales.map((locale, index) => (
                  <span key={locale} className="flex items-center">
                    <Link
                      href={getLocalizedPath(locale)}
                      className={`text-[14px] font-bold tracking-widest transition-colors duration-200 ${
                        lang === locale ? 'text-black' : 'text-zinc-400 hover:text-black'
                      }`}
                    >
                      {locale.toUpperCase()}
                    </Link>
                    {index < locales.length - 1 && (
                      <span className="mx-1.5 text-sm text-zinc-300">/</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
