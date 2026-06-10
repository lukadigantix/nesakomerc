import Container from '@/components/Container';

interface PageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
}

export default function PageHero({ badge, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pb-24 pt-44">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-150 w-150 -translate-x-1/2 rounded-full bg-orange-600/20 blur-[120px]" />

      <Container className="relative">
        {/* Badge */}
        <span className="inline-block rounded-full bg-linear-to-r from-orange-500 to-red-600 px-4 py-1.5 text-[12px] font-semibold text-white">
          {badge}
        </span>

        {/* Title */}
        <h1 className="mt-6 max-w-2xl text-[48px] font-extrabold leading-tight tracking-[-0.03em] text-white md:text-[64px]">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-neutral-400">
          {subtitle}
        </p>
      </Container>
    </section>
  );
}
