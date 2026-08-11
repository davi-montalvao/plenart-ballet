'use client';

import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function Footer() {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 lg:py-16 border-t border-border">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-serif text-2xl font-medium tracking-wide transition-colors duration-300 hover:text-[var(--petroleo)]"
            >
              Plenarte Ballet
            </Link>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <Link
              href="#sobre"
              className="hover-underline hover:text-foreground transition-colors"
            >
              {t.nav.sobre}
            </Link>
            <Link
              href="#sobre-fernanda"
              className="hover-underline hover:text-foreground transition-colors"
            >
              {t.nav.fernanda}
            </Link>
            <Link
              href="#instrutores"
              className="hover-underline hover:text-foreground transition-colors"
            >
              {t.nav.instrutores}
            </Link>
            <Link
              href="#reino-dos-doces"
              className="hover-underline hover:text-foreground transition-colors"
            >
              {t.nav.espetaculo}
            </Link>
            <Link
              href="#classes"
              className="hover-underline hover:text-foreground transition-colors"
            >
              {t.nav.classes}
            </Link>
            <Link
              href="#passos"
              className="hover-underline hover:text-foreground transition-colors"
            >
              {t.nav.balé}
            </Link>
            <Link
              href="#horarios"
              className="hover-underline hover:text-foreground transition-colors"
            >
              {t.nav.horarios}
            </Link>
            <Link
              href="#contato"
              className="hover-underline hover:text-foreground transition-colors"
            >
              {t.nav.contato}
            </Link>
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-sm uppercase tracking-wider self-start lg:self-auto transition-all duration-300"
          >
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              {t.footer.backToTop}
            </span>
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-[var(--petroleo)] group-hover:border-[var(--petroleo)] transition-all duration-300">
              <ArrowUp className="w-4 h-4 group-hover:text-[var(--off-white)] transition-colors" />
            </div>
          </button>
        </div>

        {/* Large Logo */}
        <div className="mt-16 lg:mt-24 overflow-hidden">
          <h2 className="font-serif text-6xl sm:text-8xl lg:text-[12rem] xl:text-[16rem] font-light text-[var(--petroleo)]/10 leading-none tracking-tight select-none whitespace-nowrap">
            Plenarte
          </h2>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
