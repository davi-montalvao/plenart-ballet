'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const rawProgress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;
      const progress = Math.min(Math.pow(rawProgress, 2) * 100, 100);
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-ballet.jpg"
          alt="Bailarina em pose elegante"
          fill
          className="object-cover opacity-30 dark:opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-20 relative z-10 pt-32">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-in-up opacity-0">
            Bem-vindo à
          </p>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-light leading-[0.9] mb-8 text-balance animate-fade-in-up opacity-0 animation-delay-100">
            <span className="block">Plenarte</span>
            <span className="block font-medium italic">Ballet</span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12 animate-fade-in-up opacity-0 animation-delay-200">
            Uma jornada pela elegância e expressão da dança. Descubra a magia do
            ballet na Plenarte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 animation-delay-300">
            <a
              href="#classes"
              className="group inline-flex items-center gap-3 bg-[var(--petroleo)] text-[var(--off-white)] px-8 py-4 text-sm uppercase tracking-wider hover:gap-5 hover:bg-[var(--soft-black)] transition-all duration-300"
            >
              Conheça Nossas Classes
              <ArrowDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/5511932433250"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-wider border border-[var(--nude-warm)] text-foreground hover:bg-[var(--nude-warm)] hover:text-[var(--off-white)] transition-colors"
            >
              Agendar Aula
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - sempre visível, lado direito */}
      <div className="fixed bottom-12 right-8 lg:right-12 flex flex-col items-center gap-3 z-50">
        <div className="relative w-24 h-24">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-border"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-foreground"
              strokeDasharray={283}
              strokeDashoffset={283 - (283 * scrollProgress) / 100}
              style={{ transition: 'stroke-dashoffset 0.15s ease-out' }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">
            {Math.round(scrollProgress)}%
          </span>
        </div>
        <span className="text-sm uppercase tracking-wider text-muted-foreground">
          Role para descobrir
        </span>
      </div>
    </section>
  );
}
