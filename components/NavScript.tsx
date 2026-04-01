'use client'
import { useEffect } from 'react'

export default function NavScript() {
  useEffect(() => {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (toggle && links) {
      const handler = () => {
        links.classList.toggle('open');
        toggle.classList.toggle('open');
      };
      toggle.addEventListener('click', handler);
      return () => toggle.removeEventListener('click', handler);
    }
  }, []);
  return null;
}
