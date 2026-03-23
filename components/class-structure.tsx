"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

const stepNumbers = [1, 2, 3, 4, 5] as const

export function ClassStructure() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-structure-index") || "0")
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )

    const items = sectionRef.current?.querySelectorAll("[data-structure-index]")
    items?.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="estrutura" className="py-24 lg:py-40 bg-card">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--nude-warm)] mb-6">
            {t.classStructure.label}
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] text-balance text-foreground">
            {t.classStructure.title}
            <span className="italic font-medium text-[var(--petroleo)]"> {t.classStructure.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            {t.classStructure.subtitle}
          </p>
        </div>

        {/* Steps - layout em cards com número */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stepNumbers.map((num, index) => {
            const step = t.classStructure.steps[num]
            return (
            <article
              key={num}
              data-structure-index={index}
              className={`group relative bg-[var(--section)] rounded-xl p-8 lg:p-10 border border-[var(--border)] overflow-hidden transition-all duration-700 ease-out ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } hover:shadow-lg hover:border-[var(--nude-warm)]/30`}
              style={{
                transitionDelay: visibleItems.includes(index) ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Número decorativo */}
              <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-[var(--petroleo)]/10 flex items-center justify-center font-serif text-2xl font-light text-[var(--petroleo)] group-hover:bg-[var(--petroleo)] group-hover:text-[var(--off-white)] transition-colors duration-300">
                {num}
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4 pr-16">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                {step.description}
              </p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  )
}
