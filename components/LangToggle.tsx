'use client'
import { useLang } from '@/lib/i18n'

function TRFlag() {
  return (
    <svg viewBox="0 0 1200 800" width="24" height="16" style={{ display: 'block', borderRadius: '2px', border: '1px solid rgba(255,255,255,0.2)' }}>
      <rect width="1200" height="800" fill="#E30A17"/>
      <circle cx="525" cy="400" r="200" fill="#fff"/>
      <circle cx="575" cy="400" r="160" fill="#E30A17"/>
      <polygon points="715,400 626,454 660,352 600,304 702,304" fill="#fff"/>
    </svg>
  )
}

function GBFlag() {
  return (
    <svg viewBox="0 0 60 30" width="24" height="16" style={{ display: 'block', borderRadius: '2px', border: '1px solid rgba(255,255,255,0.2)' }}>
      <rect width="60" height="30" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#c)"/>
      <clipPath id="c"><path d="M30,0 V15 H60 V0 ZM30,30 V15 H0 V30 Z"/></clipPath>
      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/>
    </svg>
  )
}

export default function LangToggle() {
  const { lang, setLang } = useLang()

  return (
    <div className="lang-toggle" style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
      <button
        onClick={() => setLang('tr')}
        className={`lang-flag-btn ${lang === 'tr' ? 'active' : ''}`}
        aria-label="Türkçe"
        title="Türkçe"
      >
        <TRFlag />
      </button>
      <button
        onClick={() => setLang('en')}
        className={`lang-flag-btn ${lang === 'en' ? 'active' : ''}`}
        aria-label="English"
        title="English"
      >
        <GBFlag />
      </button>
    </div>
  )
}
