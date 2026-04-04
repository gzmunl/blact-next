'use client'
import { useI18n } from '@/lib/i18n'

const texts = {
  tr: { label: 'Haberler', title: 'Sektörden Haberler', desc: 'Mühendislik ve ileri teknoloji dünyasından son gelişmeler.' },
  en: { label: 'News', title: 'Industry News', desc: 'Latest developments from the world of engineering and advanced technology.' },
}

export default function NewsHero() {
  const { lang } = useI18n()
  const t = texts[lang] || texts.tr
  return (
    <section className="np-hero">
      <div className="container">
        <div className="section-label">{t.label}</div>
        <h1>{t.title}</h1>
        <p>{t.desc}</p>
      </div>
    </section>
  )
}
