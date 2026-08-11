"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  const { t } = useLanguage()
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const navItems = [
    { href: "#sobre", label: t.nav.sobre },
    { href: "#sobre-fernanda", label: t.nav.fernanda },
    { href: "#instrutores", label: t.nav.instrutores },
    { href: "#reino-dos-doces", label: t.nav.espetaculo },
    { href: "#classes", label: t.nav.classes },
    { href: "#passos", label: t.nav.balé },
    { href: "#horarios", label: t.nav.horarios },
    { href: "#contato", label: t.nav.contato },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md py-4" 
          : isMobileMenuOpen
            ? "bg-white dark:bg-card py-6 lg:py-8 lg:bg-transparent"
            : "py-6 lg:py-8"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-2"
          >
            <span className="font-serif text-xl lg:text-2xl font-medium tracking-wide text-foreground">
              Plenarte
            </span>
            <span className="w-4 h-[1px] bg-border rotate-[-45deg] hidden lg:block" />
            <span className="font-serif text-xl lg:text-2xl font-light text-muted-foreground hidden lg:block">
              Ballet
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover-underline text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language, Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-8 h-8 rounded-full bg-[var(--petroleo)] dark:bg-[var(--nude-warm)] flex items-center justify-center transition-transform hover:scale-110"
              aria-label="Alternar tema"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-foreground" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--off-white)]" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-8 h-8 flex items-center justify-center"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 bg-white dark:bg-card ${
            isMobileMenuOpen ? "max-h-80 mt-6 -mx-6 px-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
