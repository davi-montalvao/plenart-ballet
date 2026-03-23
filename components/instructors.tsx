"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const instructors = [
  {
    name: "Fernanda Abreu",
    role: "Diretora e professora de Baby Class, Preparatório, Clássico e Fitness",
    image: "/images/galery/fernanda.png",
  },
  {
    name: "Helena Del Mercato",
    role: "Ballet Fitness e Jazz",
    image: "/images/galery/helena.png",
  },
  {
    name: "Carol Verutti",
    role: "Baby Class, Ballet Clássico e KPop",
    image: "/images/galery/carol.png",
  },
  {
    name: "Letícia Salviato",
    role: "Baby Class e Ballet Clássico",
    image: "/images/galery/leticia.png",
  },
  {
    name: "Luana Lavareda",
    role: "Baby Class, Ballet Clássico e Jazz",
    image: "/images/galery/luana.png",
  },
  {
    name: "Rafaela Mantuanelli",
    role: "Baby Class e Ballet Clássico",
    image: "/images/galery/rafa.png",
  },
]

export function Instructors() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    )

    const items = sectionRef.current?.querySelectorAll("[data-index]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="instrutores" 
      className="py-24 md:py-32 bg-[var(--section)]"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-[var(--nude-warm)] text-sm tracking-[0.3em] uppercase mb-4 block">
            Nossa Equipe
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-foreground text-balance max-w-3xl">
            Nossas Instrutoras
          </h2>
        </div>

        {/* Instructors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {instructors.map((instructor, index) => (
            <article
              key={instructor.name}
              data-index={index}
              className={`group transition-all duration-700 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] mb-6 image-hover-scale rounded-sm overflow-hidden max-w-[220px]">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[var(--petroleo)]/0 group-hover:bg-[var(--petroleo)]/20 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-[var(--petroleo)] transition-colors duration-300">
                  {instructor.name}
                </h3>
                <p className="text-[var(--nude-warm)] text-sm tracking-wide mt-1">
                  {instructor.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[var(--muted-foreground)] mb-6 text-lg">
            Conheça nossa equipe e agende uma aula experimental
          </p>
          <a
            href="https://wa.me/5511932433250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--petroleo)] text-[var(--off-white)] px-8 py-4 text-sm tracking-wider uppercase hover:bg-[var(--soft-black)] transition-colors duration-300"
          >
            <span>Agendar Aula</span>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
