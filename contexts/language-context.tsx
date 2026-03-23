'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react'
import type { Language } from '@/lib/translations'
import { translations } from '@/lib/translations'

type Translations = (typeof translations)['pt']

const LanguageContext = createContext<{
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
} | null>(null)

const STORAGE_KEY = 'plenarte-language'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null
    if (stored && (stored === 'pt' || stored === 'fr')) {
      setLanguageState(stored)
    }
    setMounted(true)
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang)
      document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'fr'
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'fr'
    }
  }, [language, mounted])

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}
