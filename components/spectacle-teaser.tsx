'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/language-context';

/** Início de outubro de 2026 — mês do espetáculo */
const TARGET_DATE = new Date('2026-10-01T00:00:00');

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const now = Date.now();
  const diff = Math.max(0, TARGET_DATE.getTime() - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export function SpectacleTeaser() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: timeLeft?.days ?? 0, label: t.spectacleTeaser.days },
    { value: timeLeft?.hours ?? 0, label: t.spectacleTeaser.hours },
    { value: timeLeft?.minutes ?? 0, label: t.spectacleTeaser.minutes },
    { value: timeLeft?.seconds ?? 0, label: t.spectacleTeaser.seconds },
  ];

  return (
    <section
      ref={sectionRef}
      id="reino-dos-doces"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 -z-10 bg-[var(--section)] dark:bg-[var(--card)]" />
      <div
        className="absolute inset-0 -z-10 opacity-50 dark:opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(212, 165, 116, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(26, 77, 92, 0.12) 0%, transparent 45%)',
        }}
      />

      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Poster */}
          <div
            className={`lg:col-span-5 transition-all duration-700 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl shadow-[var(--petroleo)]/15 ring-1 ring-border">
              <Image
                src="/images/reino-dos-doces.png"
                alt="Espetáculo 2026 — Reino dos Doces"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority={false}
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`lg:col-span-7 transition-all duration-700 ease-out delay-150 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--nude-warm)] mb-4">
              {t.spectacleTeaser.label}
            </p>

            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] mb-2 text-foreground">
              {t.spectacleTeaser.title}
            </h2>
            <p className="font-serif text-3xl lg:text-4xl italic font-medium text-[var(--petroleo)] mb-8">
              {t.spectacleTeaser.titleHighlight}
            </p>

            <p className="text-foreground/80 leading-relaxed text-lg max-w-xl mb-10">
              {t.spectacleTeaser.phrase}
            </p>

            {/* Countdown — só após mount no cliente para evitar mismatch de hidratação */}
            <div
              className={`flex flex-wrap gap-4 sm:gap-6 mb-10 transition-opacity duration-300 ${
                timeLeft ? 'opacity-100' : 'opacity-0'
              }`}
              aria-live="polite"
            >
              {units.map((unit) => (
                <div key={unit.label} className="flex flex-col items-center min-w-[4.5rem]">
                  <span className="font-serif text-4xl sm:text-5xl font-light text-[var(--petroleo)] tabular-nums">
                    {pad(unit.value)}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mb-8">
              {t.spectacleTeaser.when}
            </p>

            <a
              href="https://wa.me/5511932433250"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[var(--petroleo)] text-[var(--off-white)] px-8 py-4 text-sm uppercase tracking-wider hover:bg-[var(--soft-black)] transition-colors duration-300"
            >
              {t.spectacleTeaser.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
