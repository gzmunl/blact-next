'use client'
import { useEffect } from 'react'

export default function CardAnimator({ selector }: { selector: string }) {
  useEffect(() => {
    let count = 0
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          const delay = el.dataset.delay ? parseInt(el.dataset.delay) * 150 : count * 80
          setTimeout(() => el.classList.add('visible'), delay)
          observer.unobserve(el)
          count++
        }
      })
    }, { threshold: 0.08 })
    document.querySelectorAll(selector).forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [selector])

  return null
}
