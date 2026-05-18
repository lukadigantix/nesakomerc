import Image from 'next/image';
import Link from 'next/link';
import { translations, type Locale } from '@/lib/i18n/translations';
import Container from '@/components/Container';

export default function Footer({ lang }: { lang: Locale }) {
  const t = (translations[lang] ?? translations['sr']).footer;
  const nav = (translations[lang] ?? translations['sr']).nav;

  const navLinks = [
    { href: `/${lang}`, label: nav.home },
    { href: `/${lang}/proizvodnja`, label: nav.production },
    { href: `/${lang}/proizvodi`, label: nav.products },
    { href: `/${lang}/maloprodaja`, label: nav.retail },
    { href: `/${lang}/prodajna-mreza`, label: nav.salesNetwork },
    { href: `/${lang}/o-nama`, label: nav.about },
    { href: `/${lang}/kontakt`, label: nav.contact },
    { href: `/${lang}/katalozi`, label: nav.catalogues },
  ];

  const navCol1 = navLinks.slice(0, 4);
  const navCol2 = navLinks.slice(4);

  return (
    <footer className="bg-neutral-950">
      {/* Top accent line */}
      <div className="h-px bg-linear-to-r from-transparent via-red-600/50 to-transparent" />

      <Container className="py-16">
        {/* ── Header row: logo + tagline left | socials right ── */}
        <div className="flex flex-col gap-6 border-b border-neutral-800 pb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <Link href={`/${lang}`}>
              <Image
                src="/nesa-komerc-logo.svg"
                alt="Neša Komerc"
                width={180}
                height={35}
              />
            </Link>
            <p className="text-sm text-neutral-500">{t.tagline}</p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-600">
              {lang === 'sr' ? 'Pratite nas' : 'Follow us'}
            </p>
            <div className="flex items-center gap-2">
              {/* Facebook */}
              <a href="https://www.facebook.com/nesakomerc" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 text-neutral-500 transition-all duration-200 hover:border-red-600/50 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@nesakomerc" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 text-neutral-500 transition-all duration-200 hover:border-red-600/50 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/nesakomerc" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 text-neutral-500 transition-all duration-200 hover:border-red-600/50 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              {/* Website */}
              <a href="https://www.nesa-komerc.com" target="_blank" rel="noopener noreferrer" aria-label="Website"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 text-neutral-500 transition-all duration-200 hover:border-red-600/50 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ── Columns row ── */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-12 sm:grid-cols-4">

          {/* Nav col 1 */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-neutral-600">
              {t.colNav}
            </p>
            <ul className="flex flex-col gap-3">
              {navCol1.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav col 2 */}
          <div>
            <p className="mb-5 text-xs invisible select-none">&nbsp;</p>
            <ul className="flex flex-col gap-3">
              {navCol2.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact – spans 2 cols */}
          <div className="col-span-2">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-neutral-600">
              {t.colContact}
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <li><a href="tel:+381358814077" className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white">+381 35 8814 077</a></li>
              <li><a href="tel:+381358814099" className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white">+381 35 8814 099</a></li>
              <li><a href="mailto:office@nesa-komerc.com" className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white">office@nesa-komerc.com</a></li>
              <li><a href="mailto:sales@nesa-komerc.com" className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white">sales@nesa-komerc.com</a></li>
              <li className="sm:col-span-2"><a href="mailto:teodora.obradovic@nesa-komerc.com" className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white">teodora.obradovic@nesa-komerc.com</a></li>
              <li className="pt-1 text-sm leading-relaxed text-neutral-500 sm:col-span-2">
                Stevana Sinđelića 309, 35210 Svilajnac, Srbija
              </li>
            </ul>
          </div>

        </div>
      </Container>

      {/* ── Bottom bar ── */}
      <div className="border-t border-neutral-800">
        <Container className="flex items-center justify-between py-5">
          <p className="text-xs text-neutral-600">{t.copyright}</p>
          <p className="text-xs text-neutral-600">Neša Komerc d.o.o.</p>
        </Container>
      </div>
    </footer>
  );
}
