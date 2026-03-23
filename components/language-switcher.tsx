'use client'

import { useLanguage } from '@/contexts/language-context'
import type { Language } from '@/lib/translations'

const languages: { code: Language; flag: string; label: string }[] = [
  { code: 'pt', flag: '🇧🇷', label: 'Português' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-full border border-border p-0.5">
      {languages.map(({ code, flag, label }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-lg transition-all duration-300 ${
            language === code
              ? 'bg-[var(--petroleo)] text-[var(--off-white)]'
              : 'hover:bg-[var(--section)]'
          }`}
          aria-label={label}
          title={label}
        >
          <span role="img" aria-hidden>
            {flag}
          </span>
        </button>
      ))}
    </div>
  )
}
