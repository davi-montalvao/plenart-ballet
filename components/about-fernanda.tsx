'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

const images = Array.from({ length: 11 }, (_, i) => ({
  src: `/images/galery/fe${i + 1}.png`,
  alt: `Fernanda Abreu - trajetória profissional ${i + 1}`,
}));

export function AboutFernanda() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    duration: 25,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!emblaApi || !isVisible) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4500);
    return () => clearInterval(interval);
  }, [emblaApi, isVisible]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    update();
    emblaApi.on('select', update);
    return () => {
      emblaApi.off('select', update);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section
      ref={sectionRef}
      id="sobre-fernanda"
      className="py-24 lg:py-40 bg-[var(--section)] overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text - left side */}
          <div
            className={`lg:col-span-5 order-2 lg:order-1 ${
              isVisible ? 'animate-slide-in-left' : 'animation-initial-hidden'
            }`}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--nude-warm)] mb-4">
              {t.aboutFernanda.title}
            </p>

            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] mb-4 text-balance text-foreground">
              Fernanda Abreu
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              {t.aboutFernanda.subtitle}
            </p>

            <p className="text-foreground leading-relaxed text-lg">
              {t.aboutFernanda.description}
            </p>
          </div>

          {/* Carousel - right side */}
          <div
            className={`lg:col-span-7 lg:col-start-6 order-1 lg:order-2 flex justify-center lg:justify-end ${
              isVisible ? 'animate-slide-in-right' : 'animation-initial-hidden'
            }`}
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div ref={emblaRef} className="overflow-hidden rounded-2xl">
                <div className="flex touch-pan-y">
                  {images.map((img, i) => (
                    <div
                      key={img.src}
                      className="flex-[0_0_100%] min-w-0 relative aspect-[3/4]"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={i === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrows */}
              <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-[var(--petroleo)] hover:text-[var(--off-white)] hover:border-[var(--petroleo)] transition-all duration-300 z-10"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-[var(--petroleo)] hover:text-[var(--off-white)] hover:border-[var(--petroleo)] transition-all duration-300 z-10"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      selectedIndex === i
                        ? 'bg-[var(--petroleo)] w-6'
                        : 'w-2 bg-muted-foreground/40 hover:bg-muted-foreground/60'
                    }`}
                    aria-label={`Ir para foto ${i + 1} de ${images.length}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
