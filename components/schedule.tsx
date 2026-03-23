"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

type ScheduleItem = { time: string; class: string }

const scheduleData: Record<string, ScheduleItem[]> = {
  segunda: [
    { time: "10h às 11h", class: "Ballet Infantil" },
    { time: "14h30 às 16h", class: "Advanced Foundation (Royal)" },
    { time: "18h às 19h", class: "Jazz Juvenil" },
    { time: "19h às 20h", class: "Ballet Infantil II" },
    { time: "19h30 às 20h30", class: "Jazz Adulto" },
    { time: "20h às 21h30", class: "Ballet Intermediário" },
  ],
  terca: [
    { time: "08h às 09h", class: "Ballet Intermediário/Avançado" },
    { time: "09h às 10h", class: "Baby Class" },
    { time: "14h45 às 16h", class: "Ballet Infantil II" },
    { time: "16h30 às 17h30", class: "Jazz Infantil" },
    { time: "16h30 às 18h", class: "Ballet Juvenil" },
    { time: "19h às 20h30", class: "Ballet Intermediário" },
    { time: "20h às 21h", class: "Ballet Adulto" },
    { time: "20h30 às 21h45", class: "Ballet Adulto II" },
  ],
  quarta: [
    { time: "10h às 11h", class: "Jazz Infantil" },
    { time: "14h30 às 16h", class: "Advanced Foundation (Royal)" },
    { time: "19h às 20h", class: "Ballet Infantil II" },
    { time: "19h30 às 20h30", class: "Jazz Adulto" },
    { time: "20h às 21h30", class: "Ballet Intermediário" },
  ],
  quinta: [
    { time: "08h às 09h", class: "Ballet Intermediário/Avançado" },
    { time: "09h às 10h", class: "Baby Class" },
    { time: "14h45 às 16h", class: "Ballet Infantil II" },
    { time: "16h30 às 17h30", class: "Jazz Infantil" },
    { time: "16h30 às 18h", class: "Ballet Juvenil" },
    { time: "18h às 19h", class: "Jazz Juvenil" },
    { time: "18h às 19h", class: "PBT" },
    { time: "19h às 20h30", class: "Ballet Intermediário" },
    { time: "20h às 21h", class: "Ballet Adulto" },
    { time: "20h30 às 21h45", class: "Ballet Adulto II" },
  ],
  sexta: [
    { time: "14h30 às 15h30", class: "PBT" },
    { time: "16h30 às 18h", class: "Ballet Clássico Infantil" },
    { time: "19h30 às 21h", class: "Grupo Master" },
  ],
  sabado: [
    { time: "08h30 às 10h", class: "Jazz Juvenil" },
    { time: "09h às 10h", class: "Ballet Infantil II" },
    { time: "10h às 11h", class: "Baby Class" },
    { time: "10h às 11h", class: "Ballet Juvenil" },
    { time: "11h às 12h", class: "Ballet Infantil" },
    { time: "11h às 12h30", class: "Ballet Adulto" },
  ],
}

const dayLabels: Record<string, string> = {
  segunda: "Segunda-feira",
  terca: "Terça-feira",
  quarta: "Quarta-feira",
  quinta: "Quinta-feira",
  sexta: "Sexta-feira",
  sabado: "Sábado",
}

const dayOrder = ["segunda", "terca", "quarta", "quinta", "sexta", "sabado"]

export function Schedule() {
  const [activeDay, setActiveDay] = useState("segunda")
  const [isVisible, setIsVisible] = useState(false)
  const [itemsVisible, setItemsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    setItemsVisible(false)
    const timer = setTimeout(() => setItemsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [activeDay])

  return (
    <section id="horarios" className="py-24 lg:py-40 bg-[var(--section)] overflow-x-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--nude-warm)] mb-6">
            Grade de Aulas
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] text-balance text-foreground">
            Nossos
            <span className="italic font-medium text-[var(--petroleo)]"> horários</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Day selector - mobile: dropdown, desktop: vertical tabs */}
          <div className="lg:col-span-4">
            {/* Mobile: select dropdown */}
            <div className="lg:hidden w-full mb-4">
              <select
                value={activeDay}
                onChange={(e) => setActiveDay(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border font-serif text-base text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--petroleo)] focus:border-transparent"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%231a4d5c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px', paddingRight: '44px' }}
              >
                {dayOrder.map((day) => (
                  <option key={day} value={day}>
                    {dayLabels[day]}
                  </option>
                ))}
              </select>
            </div>
            {/* Desktop: vertical tabs */}
            <div className="hidden lg:flex flex-col gap-2">
              {dayOrder.map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`
                    flex items-center justify-start gap-3 px-6 py-4 rounded-lg
                    text-left transition-all duration-300
                    ${
                      activeDay === day
                        ? "bg-[var(--petroleo)] text-[var(--off-white)] shadow-lg"
                        : "bg-card border border-border hover:border-[var(--nude-warm)] hover:bg-[var(--nude-warm)]/10"
                    }
                  `}
                >
                  <span className="font-serif text-lg">{dayLabels[day]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Schedule content */}
          <div className="lg:col-span-8 min-w-0">
            <div
              key={activeDay}
              className="min-h-[280px] lg:min-h-[320px] animate-schedule-fade-in"
            >
              <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
                <div className="px-4 py-4 lg:px-6 lg:py-5 border-b border-border bg-[var(--section)]/50">
                  <h3 className="font-serif text-xl lg:text-2xl text-foreground">
                    {dayLabels[activeDay]}
                  </h3>
                </div>
                <div className="divide-y divide-border">
                  {(scheduleData[activeDay] || []).map((item, index) => (
                    <div
                      key={`${item.time}-${item.class}-${index}`}
                      className={`
                        flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-6 px-4 py-3 lg:px-6 lg:py-4 transition-all duration-500 ease-out
                        hover:bg-[var(--section)]/50
                        ${itemsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
                      `}
                      style={{ transitionDelay: itemsVisible ? `${index * 50}ms` : "0ms" }}
                    >
                      <div className="flex items-center gap-2 lg:min-w-[100px] text-[var(--nude-warm)]">
                        <Clock className="w-4 h-4 shrink-0" />
                        <span className="text-sm font-medium">{item.time}</span>
                      </div>
                      <span className="hidden lg:inline text-foreground">—</span>
                      <span className="font-serif text-base lg:text-lg text-foreground">
                        {item.class}
                      </span>
                    </div>
                  ))}
                </div>
                {(scheduleData[activeDay] || []).length === 0 && (
                  <div className="px-6 py-12 text-center text-muted-foreground">
                    Nenhuma aula neste dia
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
