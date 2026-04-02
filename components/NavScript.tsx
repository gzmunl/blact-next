'use client'
import { useEffect } from 'react'

export default function NavScript() {
  useEffect(() => {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    const navParent = links.parentNode;
    const navNext = links.nextSibling;
    const toggleParent = toggle.parentNode;
    const toggleNext = toggle.nextSibling;

    const handler = () => {
      const opening = !links.classList.contains('open');
      if (opening && window.innerWidth <= 1024) {
        document.body.appendChild(links);
        document.body.appendChild(toggle);
      }
      links.classList.toggle('open');
      toggle.classList.toggle('open');
      if (!opening) {
        navParent?.insertBefore(links, navNext);
        toggleParent?.insertBefore(toggle, toggleNext);
      }
    };

    toggle.addEventListener('click', handler);

    // Dropdown toggle — ok butonuna bas
    document.querySelectorAll('.dropdown-arrow').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        (btn as HTMLElement).parentElement?.classList.toggle('dropdown-open');
      });
    });

    // Close on link click
    links.querySelectorAll('a').forEach(l => {
      l.addEventListener('click', function(this: HTMLElement) {
        // Tüm linkler menüyü kapatsın
        links.classList.remove('open');
        toggle.classList.remove('open');
        navParent?.insertBefore(links, navNext);
        toggleParent?.insertBefore(toggle, toggleNext);
      });
    });

    return () => toggle.removeEventListener('click', handler);
  }, []);
  return null;
}
