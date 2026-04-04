'use client'
import { useEffect } from 'react'
import Script from 'next/script'

const bodyHTML = `
  <!-- Scroll Progress Bar -->
  <div class="scroll-progress" id="scrollProgress"></div>

  <!-- Cursor Glow -->
  <div class="cursor-glow" id="cursorGlow"></div>


  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="/" class="logo">BLACT SYSTEMS</a>
      <ul class="nav-links" id="navLinks">
        <li><a href="#hakkimizda">Hakkımızda</a></li>
        <li class="nav-dropdown">
          <a href="#cozumlerimiz">Çözümlerimiz</a><button class="dropdown-arrow" aria-label="Alt menü">&#9662;</button>
          <div class="dropdown-menu">
            <a href="/cozum-eklemeli-imalat">Eklemeli İmalat</a>
            <a href="/cozum-kompozit">Kompozit Teknolojisi</a>
            <a href="/cozum-insansiz-araclar">İnsansız Hava &amp; Deniz Araçları</a>
            <a href="/cozum-surdurulebilirlik">Sürdürülebilirlik</a>
          </div>
        </li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/haberler">Haberler</a></li>
        <li><a href="#iletisim">İletişim</a></li>
      </ul>
      <div class="lang-toggle" id="langToggle">
        <button class="lang-btn active" data-lang="tr">TR</button>
        <button class="lang-btn" data-lang="en">EN</button>
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Menüyü aç">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <main>
  <div class="hero-wrapper" id="heroWrapper">
  <section class="hero" id="hero">
    <div class="hero-inner">
      <img src="/images/hero-laser-mobile.png" alt="SLM lazer metal eritme teknolojisi" class="hero-laser-mobile-img">
      <!-- Left side -->
      <div class="hero-left">
        <div class="hero-knockout" id="heroKnockout">
          <h1 id="heroTitle">Geleceği Tasarlıyor,<br>Bugünü İnşa Ediyoruz</h1>
        </div>
        <div class="hero-content">
          <p class="hero-desc">
            Eklemeli imalattan insansız sistemlere, kompozit teknolojisinden sürdürülebilir enerji çözümlerine —
            yenilikçi mühendislik yaklaşımımızla endüstrinin sınırlarını yeniden çiziyoruz.
          </p>
          <div class="hero-buttons">
            <a href="#cozumlerimiz" class="btn btn-primary">Çözümlerimiz &rarr;</a>
            <a href="#iletisim" class="btn btn-outline">İletişime Geç</a>
          </div>
          <div class="hero-stats">
            <div class="hero-stat">
              <div class="hero-stat-number">4</div>
              <div class="hero-stat-label">Uzmanlık Alanı</div>
            </div>
            <div class="hero-stat">
              <div class="hero-stat-number">SLM</div>
              <div class="hero-stat-label">Teknoloji</div>
            </div>
            <div class="hero-stat">
              <div class="hero-stat-number">AR-GE</div>
              <div class="hero-stat-label">Odaklı</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Right side — SLM visual -->
      <div class="hero-visual">
        <img src="/images/hero-laser.png" alt="SLM Laser" class="hero-laser-img">
        <div id="sparkZone" class="spark-zone"></div>
        <div class="engrave-wrap">
          <img src="/images/engrave.png" alt="Metal Plate" class="engrave-plate">
          <svg class="engrave-svg" id="engraveSvg" viewBox="0 0 360 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
                <circle cx="2.5" cy="2.5" r="1.2" fill="rgba(50,50,50,0.8)"/>
              </pattern>
            </defs>
            <text x="180" y="45" text-anchor="middle" class="engrave-line" id="engraveLine1">BLACT</text>
            <text x="180" y="95" text-anchor="middle" class="engrave-line" id="engraveLine2">SYSTEMS</text>
          </svg>
        </div>
      </div>
    </div>
    <!-- Bottom bar -->
    <div class="hero-areas">
      <div class="hero-area"><span class="diamond"></span> Eklemeli İmalat</div>
      <div class="hero-area"><span class="diamond"></span> Kompozit Teknolojisi</div>
      <div class="hero-area"><span class="diamond"></span> İnsansız Hava &amp; Deniz Araçları</div>
      <div class="hero-area"><span class="diamond"></span> Sürdürülebilirlik</div>
    </div>
    <div class="scroll-indicator">
      <span class="scroll-text">KAYDIR</span>
      <div class="scroll-line"></div>
    </div>
  </section>
  </div><!-- /hero-wrapper -->

  <div class="about-wrapper" id="aboutWrapper">
  <section class="about" id="hakkimizda">
    <div class="about-bg-img" id="aboutBg"></div>
    <div class="container">
      <div class="about-grid">
        <div class="about-visual" id="aboutVisual">
          <img src="/images/about-png-2.png" alt="Blact Systems Mühendislik" class="about-img">
        </div>
        <div class="about-text" id="aboutText">
          <div class="section-label">Hakkımızda</div>
          <h2 id="aboutTitle">Güçlü Temeller,<span class="accent" style="display:block">Cesur Adımlar</span></h2>
          <p class="about-p1">
            Blact Systems, farklı mühendislik disiplinlerini bir araya getirerek endüstriye yenilikçi
            çözümler sunan bir ileri teknoloji şirketidir. Markamız, kararlılığı ve güçlü duruşu
            temsil eden <strong>Black</strong> ile hızlı ve etkili aksiyonu simgeleyen <strong>Act</strong>
            kelimelerinin birleşiminden doğmuştur — bir vizyonu hayata geçirme kararlılığını yansıtır.
          </p>
          <p class="about-p2">
            Projelerimizde mühendislik mükemmeliyetini ön planda tutar, her çözümümüzde kalite ve
            hız dengesini koruruz.
          </p>
          <div class="about-values">
            <div class="value-item" data-vi="0"><svg class="vi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg><span>Yenilikçi Çözümler</span></div>
            <div class="value-item" data-vi="1"><svg class="vi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span>Hızlı Aksiyon</span></div>
            <div class="value-item" data-vi="2"><svg class="vi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Yüksek Kalite</span></div>
            <div class="value-item" data-vi="3"><svg class="vi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg><span>İleri Mühendislik</span></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Tech strip: 2 crossing bands -->
    <div class="tech-band-about band-1">
      <div class="tech-strip-inner">
        <span class="tech-item">SLM <span class="sep"></span></span>
        <span class="tech-item">WAAM <span class="sep"></span></span>
        <span class="tech-item">LSAM <span class="sep"></span></span>
        <span class="tech-item">Karbon Fiber <span class="sep"></span></span>
        <span class="tech-item">İHA Sistemleri <span class="sep"></span></span>
        <span class="tech-item">İDA Sistemleri <span class="sep"></span></span>
        <span class="tech-item">Enerji Çözümleri <span class="sep"></span></span>
        <span class="tech-item">Kompozit <span class="sep"></span></span>
        <span class="tech-item">Otonom Sistemler <span class="sep"></span></span>
        <span class="tech-item">SLM <span class="sep"></span></span>
        <span class="tech-item">WAAM <span class="sep"></span></span>
        <span class="tech-item">LSAM <span class="sep"></span></span>
        <span class="tech-item">Karbon Fiber <span class="sep"></span></span>
        <span class="tech-item">İHA Sistemleri <span class="sep"></span></span>
        <span class="tech-item">İDA Sistemleri <span class="sep"></span></span>
        <span class="tech-item">Enerji Çözümleri <span class="sep"></span></span>
        <span class="tech-item">Kompozit <span class="sep"></span></span>
        <span class="tech-item">Otonom Sistemler <span class="sep"></span></span>
      </div>
    </div>
    <div class="tech-band-about band-2">
      <div class="tech-strip-inner reverse">
        <span class="tech-item">Eklemeli İmalat <span class="sep"></span></span>
        <span class="tech-item">Kompozit Teknolojisi <span class="sep"></span></span>
        <span class="tech-item">İnsansız Araçlar <span class="sep"></span></span>
        <span class="tech-item">Sürdürülebilirlik <span class="sep"></span></span>
        <span class="tech-item">Ar-Ge <span class="sep"></span></span>
        <span class="tech-item">Mühendislik <span class="sep"></span></span>
        <span class="tech-item">Eklemeli İmalat <span class="sep"></span></span>
        <span class="tech-item">Kompozit Teknolojisi <span class="sep"></span></span>
        <span class="tech-item">İnsansız Araçlar <span class="sep"></span></span>
        <span class="tech-item">Sürdürülebilirlik <span class="sep"></span></span>
        <span class="tech-item">Ar-Ge <span class="sep"></span></span>
        <span class="tech-item">Mühendislik <span class="sep"></span></span>
      </div>
    </div>
  </section>
  </div><!-- /about-wrapper -->

  <div class="solutions-wrapper" id="solutionsWrapper">
  <div class="sol-tech-band sol-tech-band-top">
    <div class="sol-tech-inner">
      <span>SLM</span><span>WAAM</span><span>LSAM</span><span>Karbon Fiber</span><span>İHA Sistemleri</span><span>İDA Sistemleri</span><span>Enerji Çözümleri</span><span>Kompozit</span><span>Otonom Sistemler</span><span>SLM</span><span>WAAM</span><span>LSAM</span><span>Karbon Fiber</span><span>İHA Sistemleri</span><span>İDA Sistemleri</span><span>Enerji Çözümleri</span><span>Kompozit</span><span>Otonom Sistemler</span>
    </div>
  </div>
  <section class="solutions" id="cozumlerimiz">
    <div class="container" style="position:relative;z-index:2;width:100%;max-width:1400px;padding-top:5rem;padding-bottom:2rem;background:transparent;">
      <div class="solutions-header">
        <div class="section-label">Çözümlerimiz</div>
        <h2 class="section-title">Mühendislik Çözümlerimiz</h2>
        <p class="section-desc">Dört temel uzmanlık alanımızda, endüstrinin ihtiyaçlarına yenilikçi ve sürdürülebilir çözümler sunuyoruz.</p>
      </div>
      <div class="solutions-grid" id="solutionsGrid">
        <a href="/cozum-eklemeli-imalat" class="solution-card" data-panel="tl">
          <div class="solution-card-bg" style="background-image:url('/images/solutions/eklemeli_imalat.png')"></div>
          <div class="solution-card-content">
            <div class="solution-number">01</div>
            <div class="solution-icon">
              <svg viewBox="0 0 32 32"><path d="M16 2L2 10v12l14 8 14-8V10L16 2z"/><path d="M2 10l14 8 14-8"/><path d="M16 18v12"/><path d="M9 6l14 8" stroke-dasharray="2 2"/></svg>
            </div>
            <h3>Eklemeli İmalat</h3>
            <p>Metal ve polimer bazlı eklemeli imalat teknolojileriyle endüstriyel üretimin geleceğini şekillendiriyoruz. SLM, WAAM ve LSAM teknolojilerinde aktif Ar-Ge çalışmalarımız devam etmektedir.</p>
            <div class="solution-tags">
              <span class="solution-tag">SLM</span><span class="solution-tag">WAAM</span><span class="solution-tag">LSAM</span><span class="solution-tag">Metal AM</span>
            </div>
            <span class="solution-link">Detaylı İncele &rarr;</span>
          </div>
        </a>

        <a href="/cozum-kompozit" class="solution-card" data-panel="tr">
          <div class="solution-card-bg" style="background-image:url('/images/solutions/kompozit _tek.png')"></div>
          <div class="solution-card-content">
            <div class="solution-number">02</div>
            <div class="solution-icon">
              <svg viewBox="0 0 32 32"><rect x="4" y="4" width="24" height="24" rx="2"/><path d="M4 12h24M4 20h24M12 4v24M20 4v24"/></svg>
            </div>
            <h3>Kompozit Teknolojisi</h3>
            <p>Karbon fiber üretimi ve ileri kompozit malzeme teknolojileriyle hafif, dayanıklı ve yüksek performanslı yapısal çözümler geliştiriyoruz.</p>
            <div class="solution-tags">
              <span class="solution-tag">Karbon Fiber</span><span class="solution-tag">İleri Kompozitler</span><span class="solution-tag">Yapısal Tasarım</span>
            </div>
            <span class="solution-link">Detaylı İncele &rarr;</span>
          </div>
        </a>

        <a href="/cozum-insansiz-araclar" class="solution-card" data-panel="bl">
          <div class="solution-card-bg" style="background-image:url('/images/solutions/insansiz_arac.png')"></div>
          <div class="solution-card-content">
            <div class="solution-number">03</div>
            <div class="solution-icon">
              <svg viewBox="0 0 32 32"><path d="M16 8L8 14v4l8 6 8-6v-4L16 8z"/><circle cx="6" cy="10" r="3"/><circle cx="26" cy="10" r="3"/><path d="M6 10h4M22 10h4"/><circle cx="6" cy="22" r="3"/><circle cx="26" cy="22" r="3"/><path d="M6 22h4M22 22h4"/></svg>
            </div>
            <h3>İnsansız Hava &amp; Deniz Araçları</h3>
            <p>İnsansız hava araçları (İHA) ve insansız deniz araçları (İDA) alanında konsept tasarım ve mühendislik çözümleri geliştiriyoruz.</p>
            <div class="solution-tags">
              <span class="solution-tag">İHA</span><span class="solution-tag">İDA</span><span class="solution-tag">Otonom Sistemler</span><span class="solution-tag">Konsept Tasarım</span>
            </div>
            <span class="solution-link">Detaylı İncele &rarr;</span>
          </div>
        </a>

        <a href="/cozum-surdurulebilirlik" class="solution-card" data-panel="br">
          <div class="solution-card-bg" style="background-image:url('/images/solutions/surdur.png')"></div>
          <div class="solution-card-content">
            <div class="solution-number">04</div>
            <div class="solution-icon">
              <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M16 4c0 8-6 12-6 12s6 4 6 12"/><path d="M16 4c0 8 6 12 6 12s-6 4-6 12"/><path d="M4 16h24"/></svg>
            </div>
            <h3>Sürdürülebilirlik</h3>
            <p>Enerji çözümleri için konsept tasarımlar ve sürdürülebilir mühendislik yaklaşımlarıyla çevreye duyarlı, verimli projeler geliştiriyoruz.</p>
            <div class="solution-tags">
              <span class="solution-tag">Enerji Çözümleri</span><span class="solution-tag">Konsept Tasarım</span><span class="solution-tag">Yeşil Teknoloji</span>
            </div>
            <span class="solution-link">Detaylı İncele &rarr;</span>
          </div>
        </a>
      </div>
    </div>
  </section>
  <div class="sol-tech-band sol-tech-band-bottom">
    <div class="sol-tech-inner sol-tech-reverse">
      <span>Eklemeli İmalat</span><span>Kompozit Teknolojisi</span><span>İnsansız Araçlar</span><span>Sürdürülebilirlik</span><span>Ar-Ge</span><span>Mühendislik</span><span>Eklemeli İmalat</span><span>Kompozit Teknolojisi</span><span>İnsansız Araçlar</span><span>Sürdürülebilirlik</span><span>Ar-Ge</span><span>Mühendislik</span>
    </div>
  </div>
  </div><!-- /solutions-wrapper -->

  <div class="blog-wrapper" id="blogWrapper">
  <section class="blog-section" id="blog">
    <div class="container">
      <div class="blog-header">
        <div>
          <div class="section-label">Blog</div>
          <h2 class="section-title">Güncel Yazılar</h2>
        </div>
        <a href="/blog" class="btn btn-outline btn-sm">Tüm Yazılar &rarr;</a>
      </div>
      <div class="blog-magazine">
        <a href="/blog/slm-ve-waam-metal-eklemeli-imalat" class="blog-mag-main fade-in">
          <div class="blog-mag-img" style="background-image:url('/images/blog-ei.png')"></div>
          <div class="blog-mag-overlay"></div>
          <div class="blog-mag-content">
            <span class="blog-mag-cat">Eklemeli İmalat</span>
            <h3>SLM ve WAAM: Metal Eklemeli İmalatın İki Farklı Yaklaşımı</h3>
            <p>Selective Laser Melting ve Wire Arc Additive Manufacturing teknolojilerinin karşılaştırmalı analizi...</p>
            <span class="blog-mag-date">18 Mar 2026</span>
          </div>
        </a>
        <div class="blog-mag-side">
          <a href="/blog/karbon-fiber-uretiminde-yeni-nesil" class="blog-mag-card fade-in" style="transition-delay:0.15s">
            <div class="blog-mag-img" style="background-image:url('/images/blog-kt.png')"></div>
            <div class="blog-mag-overlay"></div>
            <div class="blog-mag-content">
              <span class="blog-mag-cat">Kompozit</span>
              <h3>Karbon Fiber Üretiminde Yeni Nesil Yaklaşımlar</h3>
              <span class="blog-mag-date">12 Mar 2026</span>
            </div>
          </a>
          <a href="/blog/otonom-deniz-araclarinin-endustriyel-uygulamalari" class="blog-mag-card fade-in" style="transition-delay:0.3s">
            <div class="blog-mag-img" style="background-image:url('/images/blog-iha.png')"></div>
            <div class="blog-mag-overlay"></div>
            <div class="blog-mag-content">
              <span class="blog-mag-cat">İnsansız Araçlar</span>
              <h3>Otonom Deniz Araçlarının Endüstriyel Uygulamaları</h3>
              <span class="blog-mag-date">5 Mar 2026</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  </div><!-- /blog-wrapper -->

  <div class="news-wrapper" id="newsWrapper">
  <section class="news-section" id="haberler">
    <div class="news-bg-img"></div>
    <div class="container" style="position:relative;z-index:2;">
      <div class="news-header fade-in">
        <div>
          <div class="section-label">Haberler</div>
          <h2 class="section-title">Sektörden Haberler</h2>
        </div>
        <a href="/haberler" class="btn btn-outline btn-sm">Tüm Haberler &rarr;</a>
      </div>
      <div class="news-cards">
        <a href="/haberler/turkiyenin-ilk-buyuk-olcekli-metal-am-tesisi" class="news-card" id="newsCard1">
          <div class="news-card-img" style="background-image:url('/images/news-am.png')"></div>
          <div class="news-card-overlay"></div>
          <div class="news-card-content">
            <span class="news-card-cat">Eklemeli İmalat</span>
            <span class="news-card-date">20 Mar 2026</span>
            <h3>Türkiye'nin İlk Büyük Ölçekli Metal AM Tesisi İçin Çalışmalar Hızlandı</h3>
            <p>Eklemeli imalat sektöründe yerli üretim kapasitesini artırmaya yönelik yeni yatırımlar gündemde.</p>
          </div>
        </a>
        <a href="/haberler/waam-teknolojisinde-devrim" class="news-card" id="newsCard2">
          <div class="news-card-img" style="background-image:url('/images/news-iha.png')"></div>
          <div class="news-card-overlay"></div>
          <div class="news-card-content">
            <span class="news-card-cat">İnsansız Araçlar</span>
            <span class="news-card-date">15 Mar 2026</span>
            <h3>Avrupa'da İHA Regülasyonları Güncellendi: Yeni Sınıflandırma Sistemi</h3>
            <p>EASA'nın yeni düzenlemeleri insansız hava araçları sektörünü yeniden şekillendirecek.</p>
          </div>
        </a>
        <a href="/haberler/avrupada-iha-regulasyonlari" class="news-card" id="newsCard3">
          <div class="news-card-img" style="background-image:url('/images/news-energy.png')"></div>
          <div class="news-card-overlay"></div>
          <div class="news-card-content">
            <span class="news-card-cat">Sürdürülebilirlik</span>
            <span class="news-card-date">10 Mar 2026</span>
            <h3>Sürdürülebilir Enerji Yatırımlarında Rekor Artış</h3>
            <p>2026 yılının ilk çeyreğinde yenilenebilir enerji projelerine yapılan küresel yatırımlar %23 arttı.</p>
          </div>
        </a>
      </div>
    </div>
  </section>
  </div><!-- /news-wrapper -->

  <div class="contact-wrapper" id="contactWrapper">
  <section class="contact-unified" id="iletisim">

    <!-- Newsletter -->
    <div class="nu-newsletter">
      <div class="container">
        <div class="newsletter-inner">
          <div class="newsletter-overlay"></div>
          <div class="newsletter-content">
            <div>
              <h3>Haftalık Bülten</h3>
              <p>Mühendislik dünyasından seçilmiş haberler, her hafta e-posta kutunuzda.</p>
            </div>
            <form class="newsletter-form" onsubmit="return false;">
              <input type="email" placeholder="E-posta adresiniz" required>
              <button type="submit" class="btn btn-primary btn-sm">Abone Ol</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact -->
    <div class="nu-contact">
      <div class="container">
        <div class="nu-contact-grid">
          <!-- Left: Title + Info -->
          <div class="nu-contact-left">
            <div class="section-label" style="color: var(--accent);">İletişim</div>
            <h2 class="section-title">İletişime Geçin</h2>
            <p class="nu-contact-desc">Projeleriniz için bizimle iletişime geçin.</p>
            <div class="nu-info-cards">
              <div class="nu-info-card">
                <div class="nu-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <span class="nu-info-label">E-posta</span>
                  <span class="nu-info-value">info@blactsystems.com</span>
                </div>
              </div>
              <div class="nu-info-card">
                <div class="nu-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <span class="nu-info-label">Konum</span>
                  <span class="nu-info-value">İstanbul, Türkiye</span>
                </div>
              </div>
              <div class="nu-info-card">
                <div class="nu-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <span class="nu-info-label">Telefon</span>
                  <span class="nu-info-value">+90 (212) 000 00 00</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Form -->
          <div class="nu-contact-right">
            <form class="nu-form" onsubmit="return false;">
              <div class="nu-form-row">
                <div class="nu-field">
                  <input type="text" id="nuName" required placeholder=" ">
                  <label for="nuName">Adınız</label>
                </div>
                <div class="nu-field">
                  <input type="text" id="nuSurname" required placeholder=" ">
                  <label for="nuSurname">Soyadınız</label>
                </div>
              </div>
              <div class="nu-field">
                <input type="email" id="nuEmail" required placeholder=" ">
                <label for="nuEmail">E-posta adresiniz</label>
              </div>
              <div class="nu-field">
                <input type="text" id="nuSubject" placeholder=" ">
                <label for="nuSubject">Konu</label>
              </div>
              <div class="nu-field">
                <textarea id="nuMessage" rows="4" required placeholder=" "></textarea>
                <label for="nuMessage">Mesajınız</label>
              </div>
              <button type="submit" class="nu-submit">
                <span>Mesaj Gönder</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Map -->
    <div class="footer-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.3459498441!2d28.731989649999998!3d41.00498225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1711900000000!5m2!1str!2str" width="100%" height="180" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

  </section>
  </div><!-- /contact-wrapper -->

  <!-- Chatbot -->
  <button class="chatbot-toggle" id="chatbotToggle" aria-label="Soru sorun">
    <svg class="chat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
    <svg class="close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  </button>
  <div class="chatbot-window" id="chatbotWindow">
    <div class="chatbot-header">
      <span class="chatbot-header-dot"></span>
      <h4>Blact Systems</h4>
      <span class="chatbot-status">Çevrim İçi</span>
    </div>
    <div class="chatbot-body" id="chatbotBody">
      <div class="chat-message chat-bot">Merhaba! Blact Systems hakkında merak ettiklerinizi sorabilirsiniz.</div>
    </div>
    <div class="chatbot-questions" id="chatbotQuestions">
      <button class="chat-question" data-q="Blact Systems ne yapar?">Blact Systems ne yapar?</button>
      <button class="chat-question" data-q="Hangi teknolojilerle çalışıyorsunuz?">Hangi teknolojilerle çalışıyorsunuz?</button>
      <button class="chat-question" data-q="Eklemeli imalat nedir?">Eklemeli imalat nedir?</button>
      <button class="chat-question" data-q="İletişime nasıl geçebilirim?">İletişime nasıl geçebilirim?</button>
    </div>
  </div>

  <!-- Scroll to Top -->
  <button class="scroll-top" id="scrollTop" aria-label="Yukarı çık">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
  </button>

  </main>
  <footer class="footer">
    <div class="footer-bg-img"></div>
    <div class="container" style="position:relative;z-index:2;">

      <!-- Big brand statement -->
      <div class="footer-hero">
        <h2 class="footer-headline">Geleceğin Mühendisliği<br><span>Bugün Başlıyor.</span></h2>
        <a href="#iletisim" class="footer-cta">
          <span>Projenizi Konuşalım</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>

      <!-- Divider -->
      <div class="footer-divider"></div>

      <!-- Links grid -->
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="logo">BLACT SYSTEMS</a>
          <p>İleri teknoloji mühendislik çözümleriyle endüstrinin sınırlarını yeniden çiziyoruz.</p>
          <div class="footer-social">
            <a href="#" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
            <a href="#" aria-label="X"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a href="#" aria-label="GitHub"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Çözümlerimiz</h4>
          <ul>
            <li><a href="/cozum-eklemeli-imalat">Eklemeli İmalat</a></li>
            <li><a href="/cozum-kompozit">Kompozit Teknolojisi</a></li>
            <li><a href="/cozum-insansiz-araclar">İnsansız Araçlar</a></li>
            <li><a href="/cozum-surdurulebilirlik">Sürdürülebilirlik</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Şirket</h4>
          <ul>
            <li><a href="#hakkimizda">Hakkımızda</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/haberler">Haberler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Teknolojiler</h4>
          <ul>
            <li><a href="/cozum-eklemeli-imalat">SLM / WAAM</a></li>
            <li><a href="/cozum-eklemeli-imalat">LSAM / DED</a></li>
            <li><a href="/cozum-kompozit">Karbon Fiber</a></li>
            <li><a href="/cozum-insansiz-araclar">Otonom Sistemler</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="footer-bottom">
        <p>&copy; 2026 Blact Systems. Tüm hakları saklıdır.</p>
        <a href="https://crewmedya.com" target="_blank" rel="noopener noreferrer" class="footer-credit">
          <img src="/images/logo-beyaz.png" alt="Crew Medya" class="footer-credit-logo">
        </a>
        <div class="footer-bottom-links">
          <a href="#">Gizlilik Politikası</a>
          <a href="#">Kullanım Şartları</a>
        </div>
      </div>

    </div>
  </footer>
`;

function formatHomeDate(dateStr: string) {
  const months = ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'];
  const d = new Date(dateStr);
  return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
}

export default function Home() {
  useEffect(() => {
    // Fetch latest blog posts from DB and update homepage cards
    fetch('/api/blog').then(r => r.json()).then((posts: any[]) => {
      if (!posts || !posts.length) return;
      const published = posts.filter((p: any) => p.published !== false).sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
      if (published.length === 0) return;
      const main = document.querySelector('.blog-mag-main') as HTMLAnchorElement;
      if (main && published[0]) {
        const p = published[0];
        main.href = '/blog/' + p.slug;
        const img = main.querySelector('.blog-mag-img') as HTMLElement;
        if (img) img.style.backgroundImage = "url('" + (p.image || '/images/blog-ei.png') + "')";
        const cat = main.querySelector('.blog-mag-cat');
        if (cat) cat.textContent = p.category;
        const h3 = main.querySelector('h3');
        if (h3) h3.textContent = p.title;
        const pp = main.querySelector('p');
        if (pp) pp.textContent = p.excerpt;
        const date = main.querySelector('.blog-mag-date');
        if (date) date.textContent = formatHomeDate(p.date);
      }
      const sides = document.querySelectorAll('.blog-mag-card');
      [published[1], published[2]].forEach((p, i) => {
        if (!p || !sides[i]) return;
        const card = sides[i] as HTMLAnchorElement;
        card.href = '/blog/' + p.slug;
        const img = card.querySelector('.blog-mag-img') as HTMLElement;
        if (img) img.style.backgroundImage = "url('" + (p.image || '/images/blog-ei.png') + "')";
        const cat = card.querySelector('.blog-mag-cat');
        if (cat) cat.textContent = p.category;
        const h3 = card.querySelector('h3');
        if (h3) h3.textContent = p.title;
        const date = card.querySelector('.blog-mag-date');
        if (date) date.textContent = formatHomeDate(p.date);
      });
    }).catch(() => {});

    // Fetch latest news posts from DB
    fetch('/api/news').then(r => r.json()).then((posts: any[]) => {
      if (!posts || !posts.length) return;
      const published = posts.filter((p: any) => p.published !== false).sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
      const cards = document.querySelectorAll('.news-card');
      published.slice(0, 3).forEach((p, i) => {
        if (!cards[i]) return;
        const card = cards[i] as HTMLAnchorElement;
        card.href = '/haberler/' + p.slug;
        const img = card.querySelector('.news-card-img') as HTMLElement;
        if (img) img.style.backgroundImage = "url('" + (p.image || '/images/news-am.png') + "')";
        const cat = card.querySelector('.news-card-cat');
        if (cat) cat.textContent = p.category;
        const date = card.querySelector('.news-card-date');
        if (date) date.textContent = formatHomeDate(p.date);
        const h3 = card.querySelector('h3');
        if (h3) h3.textContent = p.title;
        const pp = card.querySelector('p');
        if (pp) pp.textContent = p.excerpt;
      });
    }).catch(() => {});
  }, [])

  return (
    <>
      <div style={{ background: '#050507', minHeight: '100vh' }} dangerouslySetInnerHTML={{ __html: bodyHTML }} />
      <Script src="/js/home.js" strategy="afterInteractive" />
    </>
  )
}
