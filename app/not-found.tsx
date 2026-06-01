"use client";

import { usePathname } from "next/navigation";
import NavbarV2 from "@/components/NavbarV2";
import Footer from "@/components/Footer";
import type { Locale } from "@/lib/i18n/translations";
import Container from "@/components/Container";
import ReusableButton from "@/components/ui/ReusableButton";
import { translations } from "@/lib/i18n/translations";

export default function NotFound() {
  const pathname = usePathname();
  const segment = pathname?.split("/")[1] as Locale;
  const lang: Locale = segment === "en" ? "en" : "sr";
  const t = (translations[lang] ?? translations["sr"]).notfound;

  return (
    <div className="flex min-h-screen flex-col">
      <NavbarV2 lang={lang} forceScrolled />

      <main className="flex flex-1 flex-col items-center justify-center bg-white">
        <Container className="flex flex-col items-center py-32 text-center mt-40">
          {/* Large decorative number */}
          <p className="select-none text-[160px] font-black leading-none tracking-tighter text-neutral-100 sm:text-[220px]">
            404
          </p>

          {/* Content stacked over the number */}
          <div className="-mt-12 flex flex-col items-center gap-6">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mt-20">
              {t.title}
            </h1>
            <p className="max-w-md text-base text-neutral-500">
              {t.body}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <ReusableButton variant="primary">{t.prim}</ReusableButton>
              <ReusableButton variant="dark">{t.sec}</ReusableButton>
            </div>
          </div>
        </Container>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
