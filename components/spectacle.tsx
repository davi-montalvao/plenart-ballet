'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const images = [
  {
    src: '/images/espetaculo-flower-1.png',
    alt: 'Bailarina com arco floral',
    caption: 'Flower',
  },
  {
    src: '/images/espetaculo-flower-2.png',
    alt: 'Bailarina em salto com guirlanda de flores',
    caption: 'Flower',
  },
  {
    src: '/images/espetaculo-gatos-1.png',
    alt: 'Performers Família de Gatos',
    caption: 'Família de Gatos',
  },
  {
    src: '/images/espetaculo-gatos-2.png',
    alt: 'Apresentação Família de Gatos',
    caption: 'Família de Gatos',
  },
  {
    src: '/images/espetaculo-dor-embutida-1.png',
    alt: 'A Dor Embutida',
    caption: 'A Dor Embutida',
  },
  {
    src: '/images/espetaculo-dor-embutida-2.png',
    alt: 'A Dor Embutida no palco',
    caption: 'A Dor Embutida',
  },
  {
    src: '/images/espetaculo-fachada-1.png',
    alt: 'A Fachada',
    caption: 'A Fachada',
  },
  {
    src: '/images/espetaculo-fachada-2.png',
    alt: 'Apresentação A Fachada',
    caption: 'A Fachada',
  },
  {
    src: '/images/espetaculo-fachada-3.png',
    alt: 'A Fachada - cena',
    caption: 'A Fachada',
  },
  {
    src: '/images/espetaculo-dancing.png',
    alt: 'Coreografia em grupo',
    caption: 'Dancing',
  },
];

export function Spectacle() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !sectionRef.current) return;
    const items = sectionRef.current.querySelectorAll('[data-spectacle-index]');
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const i = parseInt(
              entry.target.getAttribute('data-spectacle-index') || '0',
            );
            setVisibleItems(p => new Set([...p, i]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' },
    );
    items.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="espetaculo"
      className="py-24 lg:py-40 transition-opacity duration-500"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--nude-warm)] mb-6">
              Espetáculo 2025
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] text-balance text-foreground">
              Registros especiais do nosso
              <span className="italic font-medium block text-[var(--petroleo)]">
                {' '}
                espetáculo anual
              </span>
            </h2>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              data-spectacle-index={index}
              className={`group relative image-hover-scale rounded-lg overflow-hidden aspect-[3/4] transition-all duration-700 ease-out ${
                index === 0 ? 'col-span-2 md:col-span-2 lg:col-span-1' : ''
              } ${visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{
                transitionDelay: visibleItems.has(index)
                  ? `${index * 50}ms`
                  : '0ms',
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-background text-sm uppercase tracking-wider">
                  {image.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Info Cards */}
        <div
          className={`grid md:grid-cols-3 gap-6 mt-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
        >
          <div className="p-8 bg-[var(--petroleo)] rounded-lg transition-transform duration-300 hover:scale-[1.02]">
            <span className="font-serif text-5xl lg:text-6xl font-light text-[var(--off-white)]">
              10+
            </span>
            <p className="text-sm text-[var(--off-white)]/70 mt-4 uppercase tracking-wider">
              Anos de tradição
            </p>
          </div>
          <div className="p-8 bg-[var(--nude-warm)] rounded-lg transition-transform duration-300 hover:scale-[1.02]">
            <span className="font-serif text-5xl lg:text-6xl font-light text-foreground">
              100+
            </span>
            <p className="text-sm text-foreground/70 mt-4 uppercase tracking-wider">
              Alunos formados
            </p>
          </div>
          <div className="p-8 bg-[var(--petroleo)] rounded-lg transition-transform duration-300 hover:scale-[1.02]">
            <span className="font-serif text-5xl lg:text-6xl font-light text-[var(--off-white)]">
              10+
            </span>
            <p className="text-sm text-[var(--off-white)]/70 mt-4 uppercase tracking-wider">
              Espetáculos realizados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
