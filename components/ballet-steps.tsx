"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const stepIds = ["plie", "tendu", "arabesque", "pirouette", "grandJete"] as const
const stepImages: Record<string, string> = {
  plie: "/images/ballet/plie.png",
  tendu: "/images/ballet/tendu.png",
  arabesque: "/images/ballet/arabesque.png",
  pirouette: "/images/ballet/pirouette.png",
  grandJete: "/images/ballet/grand-jete.png",
}

export function BalletSteps() {
  const { t } = useLanguage()
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
            {t.balletSteps.label}
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] text-balance text-foreground">
            {t.balletSteps.title}
            <span className="italic font-medium text-[var(--petroleo)]"> {t.balletSteps.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mt-6 text-lg leading-relaxed">
            {t.balletSteps.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="space-y-16 lg:space-y-24">
          {stepIds.map((id, index) => {
            const step = t.balletSteps.steps[id]
            return (
            <article
              key={id}
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
                    src={stepImages[id]}
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
          );
          })}
        </div>
      </div>
    </section>
  )
}
