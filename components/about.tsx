'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="sobre" className="py-24 lg:py-40 overflow-visible">
      <div className="container mx-auto px-6 lg:px-20 overflow-visible">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center overflow-visible">
          {/* Text Content - entra da esquerda para direita */}
          <div
            className={`lg:col-span-5 ${isVisible ? 'animate-slide-in-left' : 'animation-initial-hidden'}`}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--nude-warm)] mb-6">
              Sobre Nós
            </p>

            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] mb-8 text-balance text-foreground">
              A arte em
              <span className="italic font-medium text-[var(--petroleo)]">
                {' '}
                plenitude
              </span>
            </h2>

            <p className="text-muted-foreground leading-relaxed text-lg">
              O Plenarte Ballet é um espaço dedicado à formação em dança com
              profundidade artística, técnica e humana. Sob direção de Fernanda
              Abreu, a escola propõe um ensino que respeita o desenvolvimento
              individual, une rigor técnico à sensibilidade e compreende a dança
              como linguagem, expressão e construção de identidade. Aqui o
              Ballet é vivido com consciência, tempo e verdade.
            </p>

            <a
              href="https://wa.me/5511932433250"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 mt-10 text-sm uppercase tracking-wider hover-underline"
            >
              Conheça Nossa História
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Image - entra da direita para esquerda */}
          <div
            className={`lg:col-span-7 lg:col-start-7 ${isVisible ? 'animate-slide-in-right' : 'animation-initial-hidden'}`}
          >
            <div className="relative image-hover-scale rounded-lg overflow-hidden aspect-[4/3]">
              <Image
                src="/images/ballet-class.jpg"
                alt="Aula de ballet na Plenarte"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-foreground/5 dark:bg-foreground/10" />
            </div>
            <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
              <span>Aulas com turmas reduzidas</span>
              <span>Desde 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
