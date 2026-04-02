interface NavbarProps {
  active?: 'blog' | 'haberler' | 'post';
  transparent?: boolean;
}

export default function Navbar({ active, transparent }: NavbarProps) {
  const cls = `navbar${transparent ? '' : ' navbar-solid'}`
  return (
    <nav className={cls} id="navbar">
      <div className="nav-inner">
        <a href="/" className="logo">BLACT SYSTEMS</a>
        <ul className="nav-links" id="navLinks">
          <li><a href="/#hakkimizda">Hakkımızda</a></li>
          <li className="nav-dropdown">
            <a href="/#cozumlerimiz">Çözümlerimiz</a>
            <div className="dropdown-menu">
              <a href="/cozum-eklemeli-imalat">Eklemeli İmalat</a>
              <a href="/cozum-kompozit">Kompozit Teknolojisi</a>
              <a href="/cozum-insansiz-araclar">İnsansız Hava &amp; Deniz Araçları</a>
              <a href="/cozum-surdurulebilirlik">Sürdürülebilirlik</a>
            </div>
          </li>
          <li><a href="/blog" style={active === 'blog' ? {color:'#e2771d'} : undefined}>Blog</a></li>
          <li><a href="/haberler" style={active === 'haberler' ? {color:'#e2771d'} : undefined}>Haberler</a></li>
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
