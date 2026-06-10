import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-orange-500" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.76a16 16 0 0 0 6.29 6.29l.91-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-orange-500" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-orange-500" aria-hidden="true">
      <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function ContactInfo({ lang }: { lang: Locale }) {
  const t = (translations[lang] ?? translations['sr']).contactPage.info;

  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-white p-8 lg:p-10">
      <span className="inline-block w-fit rounded-full bg-linear-to-r from-orange-500 to-red-600 px-4 py-1.5 text-[12px] font-semibold text-white">
        {t.badge}
      </span>

      {/* Address */}
      <div className="flex flex-col gap-1.5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">{t.addressLabel}</p>
        <div className="flex items-start gap-2.5">
          <PinIcon />
          <a
            href="https://maps.google.com/?q=Stevana+Sindjeli%C4%87a+30,+Svilajnac,+Serbia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] leading-relaxed text-neutral-700 transition-colors hover:text-orange-500"
          >
            {t.address.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-neutral-100" />

      {/* Phones */}
      <div className="flex flex-col gap-1.5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">{t.phoneLabel}</p>
        <div className="flex flex-col gap-2">
          {t.phones.map((phone) => (
            <div key={phone} className="flex items-center gap-2.5">
              <PhoneIcon />
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="text-[14px] font-medium text-neutral-700 transition-colors hover:text-orange-500"
              >
                {phone}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-neutral-100" />

      {/* Emails */}
      <div className="flex flex-col gap-1.5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">{t.emailLabel}</p>
        <div className="flex flex-col gap-2">
          {t.emails.map((email) => (
            <div key={email} className="flex items-center gap-2.5">
              <EmailIcon />
              <a
                href={`mailto:${email}`}
                className="text-[14px] font-medium text-neutral-700 break-all transition-colors hover:text-orange-500"
              >
                {email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
