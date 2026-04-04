'use client'
import { useI18n } from '@/lib/i18n'

const texts = {
  tr: { label: 'Blog', title: 'Güncel Yazılar', desc: 'Mühendislik dünyasından en son gelişmeler, teknik analizler ve derinlemesine incelemeler.' },
  en: { label: 'Blog', title: 'Latest Articles', desc: 'The latest developments, technical analyses and in-depth reviews from the world of engineering.' },
}

export default function BlogHero() {
  const { lang } = useI18n()
  const t = texts[lang] || texts.tr
  return (
    <section className="bp-hero">
      <div className="container">
        <div className="section-label">{t.label}</div>
        <h1>{t.title}</h1>
        <p>{t.desc}</p>
      </div>
    </section>
  )
}
