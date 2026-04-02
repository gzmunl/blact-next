export default function Navbar() {
  return (
    <nav className="navbar scrolled" id="navbar">
      <div className="nav-inner">
        <a href="/" className="logo">BLACT SYSTEMS</a>
        <ul className="nav-links" id="navLinks">
          <li><a href="/#hakkimizda">Hakkımızda</a></li>
          <li className="nav-dropdown">
            <a href="/#cozumlerimiz">Çözümlerimiz</a><button className="dropdown-arrow" aria-label="Alt menü">&#9662;</button>
            <div className="dropdown-menu">
              <a href="/cozum-eklemeli-imalat">Eklemeli İmalat</a>
              <a href="/cozum-kompozit">Kompozit Teknolojisi</a>
              <a href="/cozum-insansiz-araclar">İnsansız Hava &amp; Deniz Araçları</a>
              <a href="/cozum-surdurulebilirlik">Sürdürülebilirlik</a>
            </div>
          </li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/haberler">Haberler</a></li>
          <li><a href="/#iletisim">İletişim</a></li>
        </ul>
        <div className="lang-toggle" id="langToggle">
          <button className="lang-btn active" data-lang="tr">TR</button>
          <button className="lang-btn" data-lang="en">EN</button>
        </div>
        <button className="nav-toggle" id="navToggle" aria-label="Menüyü aç">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
