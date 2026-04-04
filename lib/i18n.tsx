'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Lang = 'tr' | 'en'
type Translations = Record<string, any>

interface I18nContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
  translations: Translations
}

const I18nContext = createContext<I18nContextType>({
  lang: 'tr',
  setLang: () => {},
  t: (key: string) => key,
  translations: {},
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('tr')
  const [translations, setTranslations] = useState<Translations>({})

  useEffect(() => {
    const saved = localStorage.getItem('blact-lang') as Lang
    if (saved && (saved === 'tr' || saved === 'en')) {
      setLangState(saved)
    }
  }, [])

  useEffect(() => {
    fetch(`/api/translations/${lang}`)
      .then(r => r.json())
      .then(data => setTranslations(data))
      .catch(() => {})
    localStorage.setItem('blact-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
  }

  // Nested key access: t('hero.title') => translations.hero.title
  const fallbacks: Record<string, string> = {
    'nav.about': 'Hakkımızda', 'nav.solutions': 'Çözümlerimiz', 'nav.blog': 'Blog',
    'nav.news': 'Haberler', 'nav.contact': 'İletişim',
    'footer.headline': 'Geleceğin Mühendisliği', 'footer.headlineAccent': 'Bugün Başlıyor.',
    'footer.cta': 'Projenizi Konuşalım', 'footer.brand': 'İleri teknoloji mühendislik çözümleriyle endüstrinin sınırlarını yeniden çiziyoruz.',
    'footer.colSolutions': 'Çözümlerimiz', 'footer.colCompany': 'Şirket', 'footer.colTech': 'Teknolojiler',
    'footer.sol1': 'Eklemeli İmalat', 'footer.sol2': 'Kompozit Teknolojisi', 'footer.sol3': 'İnsansız Araçlar', 'footer.sol4': 'Sürdürülebilirlik',
    'footer.comp1': 'Hakkımızda', 'footer.comp2': 'Blog', 'footer.comp3': 'Haberler', 'footer.comp4': 'İletişim',
    'footer.tech1': 'SLM / WAAM', 'footer.tech2': 'LSAM / DED', 'footer.tech3': 'Karbon Fiber', 'footer.tech4': 'Otonom Sistemler',
    'footer.copyright': '2026 Blact Systems. Tüm hakları saklıdır.', 'footer.privacy': 'Gizlilik Politikası', 'footer.terms': 'Kullanım Şartları',
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let val: any = translations
    for (const k of keys) {
      if (val && typeof val === 'object' && k in val) {
        val = val[k]
      } else {
        return fallbacks[key] || key
      }
    }
    return typeof val === 'string' ? val : key
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t, translations }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}

export function useLang() {
  const { lang, setLang } = useContext(I18nContext)
  return { lang, setLang }
}
