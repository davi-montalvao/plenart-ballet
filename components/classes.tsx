"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"

const classes = [
  {
    id: "baby",
    title: "Baby Class",
    subtitle: "De 3 à 6 anos",
    year: "Iniciação",
    description: "A introdução lúdica ao ballet. Trabalhamos a coordenação, a musicalidade e a disciplina de forma encantadora para as pequenas bailarinas.",
  },
  {
    id: "preparatorio",
    title: "Ballet Preparatório",
    subtitle: "De 6 à 7 anos",
    year: "Transição",
    description: "Turma de transição do Baby Class para o ballet clássico, com foco em postura, coordenação e musicalidade, de forma lúdica e respeitosa.",
  },
  {
    id: "classico",
    title: "Ballet Clássico",
    subtitle: "A partir de 8 anos",
    year: "Base técnica",
    description: "A base técnica completa para todas as idades. Oferecemos turmas do iniciante ao avançado, focando em postura, técnica e expressão artística.",
  },
  {
    id: "fitness",
    title: "Ballet Fitness",
    subtitle: "A partir de 16 anos",
    year: "Condicionamento",
    description: "O poder do ballet aliado ao condicionamento físico. Exercícios na barra e no centro focados em tonificação muscular, flexibilidade e postura.",
  },
  {
    id: "jazz",
    title: "Jazz Dance",
    subtitle: "A partir de 8 anos",
    year: "Expressão",
    description: "Liberdade e energia. Uma modalidade vibrante que une a técnica clássica com ritmos modernos, agilidade e muita expressão corporal.",
  },
  {
    id: "kpop",
    title: "K-Pop",
    subtitle: "A partir de 8 anos",
    year: "Coreografias",
    description: "Aprenda as coreografias dos seus ídolos. Uma aula dinâmica e divertida, focada em ritmo, sincronia e na cultura pop coreana.",
  },
  {
    id: "debutantes",
    title: "Debutantes e Noivos",
    subtitle: "Todas as idades",
    year: "Personalizado",
    description: "Consultoria e criação de coreografias personalizadas. Transformamos seu momento especial em uma apresentação única, elegante e inesquecível.",
  },
]

export function Classes() {
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
              Nossas Classes
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] text-balance text-foreground">
              Uma jornada para cada
              <span className="italic font-medium block lg:inline text-[var(--petroleo)]"> idade</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md mt-6 lg:mt-0 leading-relaxed">
            Do primeiro passo às pontas, oferecemos formação completa 
            respeitando o desenvolvimento de cada faixa etária.
          </p>
        </div>

        {/* Classes List */}
        <div className="border-t border-border">
          {classes.map((classItem, index) => (
            <div
              key={classItem.id}
              className="group border-b border-border"
              onMouseEnter={() => setHoveredClass(classItem.id)}
              onMouseLeave={() => setHoveredClass(null)}
            >
              <a
                href="https://wa.me/5511932433250"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-12 items-start lg:items-center transition-all duration-500 ease-out"
                style={{
                  opacity: hoveredClass && hoveredClass !== classItem.id ? 0.3 : 1
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
          ))}
        </div>

        {/* Counter */}
        <div className="flex justify-between items-center mt-8 text-sm text-muted-foreground">
          <span>Classes</span>
          <span className="font-serif text-2xl text-foreground">{classes.length.toString().padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  )
}
