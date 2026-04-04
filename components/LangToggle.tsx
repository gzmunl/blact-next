'use client'
import { useLang } from '@/lib/i18n'

export default function LangToggle() {
  const { lang, setLang } = useLang()

  return (
    <div className="lang-toggle" style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
      <button
        onClick={() => setLang('tr')}
        className={`lang-flag-btn ${lang === 'tr' ? 'active' : ''}`}
        aria-label="Türkçe"
        title="Türkçe"
      >
        🇹🇷
      </button>
      <button
        onClick={() => setLang('en')}
        className={`lang-flag-btn ${lang === 'en' ? 'active' : ''}`}
        aria-label="English"
        title="English"
      >
        🇬🇧
      </button>
    </div>
  )
}
