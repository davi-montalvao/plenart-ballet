"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const WHATSAPP_URL = "https://wa.me/5511932433250"

export function Contact() {
  const { t } = useLanguage()
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
              {t.contact.title}
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] mb-8 text-balance text-foreground">
              {t.contact.heading}
              <span className="italic font-medium text-[var(--petroleo)]"> {t.contact.headingHighlight}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-12">
              {t.contact.description}
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[var(--petroleo)] text-[var(--off-white)] px-8 py-4 text-sm uppercase tracking-wider hover:gap-5 hover:bg-[var(--soft-black)] transition-all duration-300"
            >
              {t.contact.cta}
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
                  <span className="text-xs uppercase tracking-wider text-muted-foreground block">{t.contact.address}</span>
                  <span>{t.contact.addressLine1}<br />{t.contact.addressLine2}</span>
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
                  <span className="text-xs uppercase tracking-wider text-muted-foreground block">{t.contact.phone}</span>
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
                  <span className="text-xs uppercase tracking-wider text-muted-foreground block">{t.contact.email}</span>
                  <span className="hover-underline">plenarteballet@gmail.com</span>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-colors duration-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground block">{t.contact.hours}</span>
                  <span>{t.contact.hoursLine1}<br />{t.contact.hoursLine2}</span>
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
                  <span className="text-xs uppercase tracking-wider text-muted-foreground block">{t.contact.instagram}</span>
                  <span className="hover-underline">@plenarteballet</span>
                </div>
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}
