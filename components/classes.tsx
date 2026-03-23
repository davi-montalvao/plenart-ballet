"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const classIds = ["baby", "preparatorio", "classico", "fitness", "jazz", "kpop", "debutantes"] as const

export function Classes() {
  const { t } = useLanguage()
  const [hoveredClass, setHoveredClass] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="classes" className="py-24 lg:py-40 bg-card transition-opacity duration-500">
      <div className="container mx-auto px-6 lg:px-20">
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--nude-warm)] mb-6">
              {t.classes.label}
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] text-balance text-foreground">
              {t.classes.title}
              <span className="italic font-medium block lg:inline text-[var(--petroleo)]"> {t.classes.titleHighlight}</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md mt-6 lg:mt-0 leading-relaxed">
            {t.classes.subtitle}
          </p>
        </div>

        {/* Classes List */}
        <div className="border-t border-border">
          {classIds.map((id, index) => {
            const classItem = t.classes.items[id]
            return (
            <div
              key={id}
              className="group border-b border-border"
              onMouseEnter={() => setHoveredClass(id)}
              onMouseLeave={() => setHoveredClass(null)}
            >
              <a
                href="https://wa.me/5511932433250"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-12 items-start lg:items-center transition-all duration-500 ease-out"
                style={{
                  opacity: hoveredClass && hoveredClass !== id ? 0.3 : 1
                }}
              >
                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="font-serif text-2xl lg:text-3xl xl:text-4xl font-light group-hover:translate-x-2 transition-transform duration-300">
                    {classItem.title}
                  </h3>
                </div>

                {/* Subtitle & Year */}
                <div className="lg:col-span-2 flex lg:flex-col gap-4 lg:gap-1 text-sm text-muted-foreground">
                  <span className="uppercase tracking-wider">{classItem.subtitle}</span>
                  <span className="lg:hidden">•</span>
                  <span className="hidden lg:block text-xs">{classItem.year}</span>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    {classItem.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="lg:col-span-1 flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-[var(--petroleo)] group-hover:border-[var(--petroleo)] transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:text-[var(--off-white)] transition-colors" />
                  </div>
                </div>
              </a>
            </div>
            );
          })}
        </div>

        {/* Counter */}
        <div className="flex justify-between items-center mt-8 text-sm text-muted-foreground">
          <span>{t.classes.classesLabel}</span>
          <span className="font-serif text-2xl text-foreground">{classIds.length.toString().padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  )
}
