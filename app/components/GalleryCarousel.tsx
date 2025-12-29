"use client";

import { useEffect, useState } from "react";
import {
  CarouselContainer,
  CarouselTrack,
  Slide,
  SlideImage,
  CarouselPrev,
  CarouselNext,
  DotContainer,
  Dot,
} from "../styles";

export default function GalleryCarousel() {
  const images = [
    "/images/galery/espetaculo1.jpg",
    "/images/galery/espetaculo2.jpg",
    "/images/galery/espetaculo3.jpg",
    "/images/galery/espetaculo4.jpg",
    "/images/galery/espetaculo5.jpg",
    "/images/galery/espetaculo6.jpg",
    "/images/galery/espetaculo7.jpg",
    "/images/galery/espetaculo8.jpg",
    "/images/galery/espetaculo9.jpg",
    "/images/galery/espetaculo10.jpg",
    "/images/galery/espetaculo11.jpg",
    "/images/galery/espetaculo12.jpg",
    "/images/galery/espetaculo13.jpg",
    "/images/galery/espetaculo14.jpg",
    "/images/galery/espetaculo15.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [vw, setVw] = useState(1200);
  const [paused, setPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onResize = () => setVw(window.innerWidth);
    setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(t);
  }, [paused, images.length]);

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  function next() {
    setIndex((i) => (i + 1) % images.length);
  }

  function getParams(width: number) {
    if (width >= 1600) {
      return { spacing: 120, rotateMul: -6, yFactor: 10, scaleStep: 0.05, zStep: 6 };
    }
    if (width >= 1280) {
      return { spacing: 110, rotateMul: -6, yFactor: 10, scaleStep: 0.05, zStep: 6 };
    }
    if (width >= 1024) {
      return { spacing: 90, rotateMul: -5, yFactor: 8, scaleStep: 0.05, zStep: 5 };
    }
    if (width >= 768) {
      return { spacing: 70, rotateMul: -4, yFactor: 7, scaleStep: 0.045, zStep: 4 };
    }
    return { spacing: 50, rotateMul: -3.5, yFactor: 6, scaleStep: 0.04, zStep: 3 };
  }

  return (
    <CarouselContainer
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => setTouchStartX(e.touches ? e.touches[0].clientX : null)}
      onTouchEnd={(e) => {
        if (touchStartX === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50) {
          if (dx < 0) next();
          else prev();
        }
        setTouchStartX(null);
      }}
      onPointerDown={(e: any) => setTouchStartX(e.clientX)}
      onPointerUp={(e: any) => {
        if (touchStartX === null) return;
        const dx = e.clientX - touchStartX;
        if (Math.abs(dx) > 50) {
          if (dx < 0) next();
          else prev();
        }
        setTouchStartX(null);
      }}
    >
      <CarouselTrack>
        {
          (() => {
            const total = images.length;
            let visibleCount = 1;
            if (vw >= 1600) visibleCount = 1;
            else if (vw >= 1280) visibleCount = 1;
            else if (vw >= 1024) visibleCount = 1;
            else if (vw >= 768) visibleCount = 1;
            else visibleCount = 0;

            const indices: { idx: number; diff: number }[] = [];
            for (let d = -visibleCount; d <= visibleCount; d++) {
              const raw = (index + d + total) % total;
              indices.push({ idx: raw, diff: d });
            }

            const { spacing, rotateMul, yFactor, scaleStep, zStep } = getParams(vw);

            return indices.map(({ idx, diff }) => {
              const abs = Math.abs(diff);
              const translateX = diff * spacing;
              const rotate = diff * rotateMul;
              const translateY = abs * yFactor;
              const scale = Math.max(0.68, 1 - abs * scaleStep);
              const zIndex = 200 - abs * zStep;

              const style = {
                transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
                zIndex,
                transition: 'transform 600ms cubic-bezier(.2,.8,.2,1), z-index 0ms',
              } as React.CSSProperties;

              return (
                <Slide key={idx} style={style}>
                  <SlideImage src={images[idx]} alt={`Galeria ${idx + 1}`} loading="lazy" />
                </Slide>
              );
            });
          })()
        }
      </CarouselTrack>

      {/* Swap handlers so left arrow brings left photo to center */}
      <CarouselPrev aria-label="Anterior" onClick={next}>&lt;</CarouselPrev>
      <CarouselNext aria-label="Próximo" onClick={prev}>&gt;</CarouselNext>

      <DotContainer>
        {images.map((_, i) => (
          <Dot key={i} className={i === index ? "active" : ""} onClick={() => setIndex(i)} />
        ))}
      </DotContainer>
    </CarouselContainer>
  );
}
