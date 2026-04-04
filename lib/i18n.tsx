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

function getInitialLang(): Lang {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('blact-lang') as Lang
    if (saved === 'tr' || saved === 'en') return saved
  }
  return 'tr'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)
  const [translations, setTranslations] = useState<Translations>({})

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
  const fb: Record<string, Record<string, string>> = {
    tr: {
      'nav.about': 'Hakkımızda', 'nav.solutions': 'Çözümlerimiz', 'nav.blog': 'Blog',
      'nav.news': 'Haberler', 'nav.contact': 'İletişim',
      'footer.headline': 'Geleceğin Mühendisliği', 'footer.headlineAccent': 'Bugün Başlıyor.',
      'footer.cta': 'Projenizi Konuşalım', 'footer.brand': 'İleri teknoloji mühendislik çözümleriyle endüstrinin sınırlarını yeniden çiziyoruz.',
      'footer.colSolutions': 'Çözümlerimiz', 'footer.colCompany': 'Şirket', 'footer.colTech': 'Teknolojiler',
      'footer.sol1': 'Eklemeli İmalat', 'footer.sol2': 'Kompozit Teknolojisi', 'footer.sol3': 'İnsansız Araçlar', 'footer.sol4': 'Sürdürülebilirlik',
      'footer.comp1': 'Hakkımızda', 'footer.comp2': 'Blog', 'footer.comp3': 'Haberler', 'footer.comp4': 'İletişim',
      'footer.tech1': 'SLM / WAAM', 'footer.tech2': 'LSAM / DED', 'footer.tech3': 'Karbon Fiber', 'footer.tech4': 'Otonom Sistemler',
      'footer.copyright': '2026 Blact Systems. Tüm hakları saklıdır.', 'footer.privacy': 'Gizlilik Politikası', 'footer.terms': 'Kullanım Şartları',
    },
    en: {
      'nav.about': 'About Us', 'nav.solutions': 'Our Solutions', 'nav.blog': 'Blog',
      'nav.news': 'News', 'nav.contact': 'Contact',
      'footer.headline': 'The Engineering of the Future', 'footer.headlineAccent': 'Starts Today.',
      'footer.cta': "Let's Discuss Your Project", 'footer.brand': 'We are redefining the boundaries of industry with advanced technology engineering solutions.',
      'footer.colSolutions': 'Our Solutions', 'footer.colCompany': 'Company', 'footer.colTech': 'Technologies',
      'footer.sol1': 'Additive Manufacturing', 'footer.sol2': 'Composite Technology', 'footer.sol3': 'Unmanned Vehicles', 'footer.sol4': 'Sustainability',
      'footer.comp1': 'About Us', 'footer.comp2': 'Blog', 'footer.comp3': 'News', 'footer.comp4': 'Contact',
      'footer.tech1': 'SLM / WAAM', 'footer.tech2': 'LSAM / DED', 'footer.tech3': 'Carbon Fiber', 'footer.tech4': 'Autonomous Systems',
      'footer.copyright': '2026 Blact Systems. All rights reserved.', 'footer.privacy': 'Privacy Policy', 'footer.terms': 'Terms of Use',
    }
  }
  const fallbacks = fb[lang] || fb.tr

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
