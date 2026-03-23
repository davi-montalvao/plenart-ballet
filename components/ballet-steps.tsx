"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const steps = [
  {
    id: "plie",
    name: "Plié",
    description: "Flexão dos joelhos mantendo o alinhamento. Base para saltos e aterrissagens, trabalhando força e elasticidade.",
    image: "/images/ballet/plie.png",
  },
  {
    id: "tendu",
    name: "Tendu",
    description: "Pé desliza no chão até estender completamente, alongando a perna. Fundamental para a precisão e a linha do pé.",
    image: "/images/ballet/tendu.png",
  },
  {
    id: "arabesque",
    name: "Arabesque",
    description: "Pose em que uma perna fica de apoio e a outra estendida atrás, com os braços em harmonia. Um dos ícones do ballet.",
    image: "/images/ballet/arabesque.png",
  },
  {
    id: "pirouette",
    name: "Pirouette",
    description: "Giro completo sobre uma perna. Exige eixo, equilíbrio e coordenação entre olhar, braços e pernas.",
    image: "/images/ballet/pirouette.png",
  },
  {
    id: "grand-jete",
    name: "Grand Jeté",
    description: "Salto em que as pernas se abrem no ar em split. Combina impulsão, flexibilidade e expressão.",
    image: "/images/ballet/grand-jete.png",
  },
]

export function BalletSteps() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-step-index") || "0")
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    )

    const items = sectionRef.current?.querySelectorAll("[data-step-index]")
    items?.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="passos" className="py-24 lg:py-40 bg-[var(--section)]">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="mb-20 lg:mb-28">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--nude-warm)] mb-6">
            O Balé
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] text-balance text-foreground">
            Passos do
            <span className="italic font-medium text-[var(--petroleo)]"> Ballet</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mt-6 text-lg leading-relaxed">
            Alguns dos movimentos clássicos que você encontra nas aulas
          </p>
        </div>

        {/* Steps Grid */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <article
              key={step.id}
              data-step-index={index}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ease-out ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-x-0"
                  : index % 2 === 0
                    ? "opacity-0 -translate-x-8"
                    : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: visibleItems.includes(index) ? `${index * 100}ms` : "0ms" }}
            >
              {/* Image - alterna lado */}
              <div
                className={`relative w-full aspect-square max-w-md mx-auto lg:mx-0 min-h-[240px] ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="absolute inset-0 rounded-xl overflow-hidden bg-white/80 shadow-sm border border-white/50">
                  <Image
                    src={step.image}
                    alt={step.name}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--nude-warm)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light text-foreground mt-2 mb-4">
                  {step.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
