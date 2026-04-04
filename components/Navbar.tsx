'use client'
import { useI18n } from '@/lib/i18n'
import LangToggle from './LangToggle'

export default function Navbar() {
  const { t, lang } = useI18n()

  return (
    <nav className="navbar scrolled" id="navbar">
      <div className="nav-inner">
        <a href="/" className="logo">BLACT SYSTEMS</a>
        <ul className="nav-links" id="navLinks">
          <li><a href="/#hakkimizda">{t('nav.about')}</a></li>
          <li className="nav-dropdown">
            <a href="/#cozumlerimiz">{t('nav.solutions')}</a><button className="dropdown-arrow" aria-label="Alt menü">&#9662;</button>
            <div className="dropdown-menu">
              <a href="/cozum-eklemeli-imalat">{lang === 'en' ? 'Additive Manufacturing' : 'Eklemeli İmalat'}</a>
              <a href="/cozum-kompozit">{lang === 'en' ? 'Composite Technology' : 'Kompozit Teknolojisi'}</a>
              <a href="/cozum-insansiz-araclar">{lang === 'en' ? 'Unmanned Vehicles' : 'İnsansız Hava & Deniz Araçları'}</a>
              <a href="/cozum-surdurulebilirlik">{lang === 'en' ? 'Sustainability' : 'Sürdürülebilirlik'}</a>
            </div>
          </li>
          <li><a href="/blog">{t('nav.blog')}</a></li>
          <li><a href="/haberler">{t('nav.news')}</a></li>
          <li><a href="/#iletisim">{t('nav.contact')}</a></li>
        </ul>
        <LangToggle />
        <button className="nav-toggle" id="navToggle" aria-label="Menüyü aç">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
