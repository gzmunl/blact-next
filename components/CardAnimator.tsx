'use client'
import { useEffect } from 'react'

export default function CardAnimator({ selector }: { selector: string }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll(selector).forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [selector])

  return null
}
