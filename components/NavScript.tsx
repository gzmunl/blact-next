'use client'
import { useEffect } from 'react'

export default function NavScript() {
  useEffect(() => {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    // Menu toggle
    const handler = () => {
      links.classList.toggle('open');
      toggle.classList.toggle('open');
    };
    toggle.addEventListener('click', handler);

    // Dropdown toggle (Çözümlerimiz)
    document.querySelectorAll('.nav-dropdown > a').forEach(a => {
      a.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          (a as HTMLElement).parentElement?.classList.toggle('dropdown-open');
        }
      });
    });

    // Close menu on link click
    links.querySelectorAll('a').forEach(l => {
      l.addEventListener('click', function(this: HTMLElement) {
        if (window.innerWidth <= 1024 && this.parentElement?.classList.contains('nav-dropdown')) return;
        links.classList.remove('open');
        toggle.classList.remove('open');
      });
    });

    return () => toggle.removeEventListener('click', handler);
  }, []);
  return null;
}
