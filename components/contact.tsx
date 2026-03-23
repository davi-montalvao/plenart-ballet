"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/5511932433250"

export function Contact() {
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
    <section ref={sectionRef} id="contato" className="py-24 lg:py-40 bg-card transition-opacity duration-500">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="max-w-3xl">
          {/* Header */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--nude-warm)] mb-6">
              Contato
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] mb-8 text-balance text-foreground">
              Pronto para
              <span className="italic font-medium text-[var(--petroleo)]"> dançar?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-12">
              Agende uma aula experimental e descubra a magia da dança. 
              Estamos ansiosos para conhecer você e iniciar essa jornada juntos.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[var(--petroleo)] text-[var(--off-white)] px-8 py-4 text-sm uppercase tracking-wider hover:gap-5 hover:bg-[var(--soft-black)] transition-all duration-300"
            >
              Agendar Aula pelo WhatsApp
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Contact Info */}
          <div
            className={`space-y-6 mt-16 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
          >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground block">Endereço</span>
                  <span>Rua Carlos Weber, 276 - Vila Leopoldina<br />São Paulo, SP</span>
                </div>
              </div>

              <a 
                href="https://wa.me/5511932433250" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-[var(--petroleo)] group-hover:border-[var(--petroleo)] transition-colors duration-300">
                  <Phone className="w-5 h-5 group-hover:text-[var(--off-white)] transition-colors" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground block">Telefone</span>
                  <span className="hover-underline">(11) 93243-3250</span>
                </div>
              </a>

              <a 
                href="mailto:plenarteballet@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-[var(--petroleo)] group-hover:border-[var(--petroleo)] transition-colors duration-300">
                  <Mail className="w-5 h-5 group-hover:text-[var(--off-white)] transition-colors" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground block">Email</span>
                  <span className="hover-underline">plenarteballet@gmail.com</span>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-colors duration-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground block">Horário</span>
                  <span>Seg-Sex: 08h - 22h<br />Sábado: 08h - 12h</span>
                </div>
              </div>

              <a 
                href="https://instagram.com/plenarteballet" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-[var(--petroleo)] group-hover:border-[var(--petroleo)] transition-colors duration-300">
                  <Instagram className="w-5 h-5 group-hover:text-[var(--off-white)] transition-colors" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground block">Instagram</span>
                  <span className="hover-underline">@plenarteballet</span>
                </div>
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}
