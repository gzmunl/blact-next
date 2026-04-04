'use client'
import { useEffect, useRef } from 'react'
import { useI18n } from '@/lib/i18n'

const API_KEY = 'AIzaSyCrR2NLuYrR8ZmApoFFLdb96UX6Rrzy4dg'
const CACHE_KEY = 'blact-translate-cache'

// Elements to skip
const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'SVG', 'PATH', 'CIRCLE', 'RECT', 'POLYGON', 'LINE', 'POLYLINE', 'NOSCRIPT', 'CODE', 'PRE'])
const SKIP_CLASSES = new Set(['logo', 'lang-flag-btn'])

function getCache(): Record<string, string> {
  try { return JSON.parse(localStorage.getItem(CACHE_KEY) || '{}') } catch { return {} }
}
function setCache(cache: Record<string, string>) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)) } catch {}
}

function getTextNodes(root: Node): Text[] {
  const nodes: Text[] = []
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement
      if (!parent) return NodeFilter.FILTER_REJECT
      if (SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT
      if (parent.closest('svg')) return NodeFilter.FILTER_REJECT
      if (parent.classList && Array.from(parent.classList).some(c => SKIP_CLASSES.has(c))) return NodeFilter.FILTER_REJECT
      if (parent.closest('.logo')) return NodeFilter.FILTER_REJECT
      const text = node.textContent?.trim()
      if (!text || text.length < 2) return NodeFilter.FILTER_REJECT
      if (/^[\d\s\.\,\+\-\@\#\%\&\*\/\\]+$/.test(text)) return NodeFilter.FILTER_REJECT
      return NodeFilter.FILTER_ACCEPT
    }
  })
  while (walker.nextNode()) nodes.push(walker.currentNode as Text)
  return nodes
}

function getPlaceholders(root: Element): HTMLInputElement[] {
  return Array.from(root.querySelectorAll('input[placeholder], textarea[placeholder]')) as HTMLInputElement[]
}

async function translateBatch(texts: string[], source: string, target: string): Promise<string[]> {
  if (texts.length === 0) return []
  const cache = getCache()
  const results: string[] = new Array(texts.length)
  const toTranslate: { idx: number; text: string }[] = []

  texts.forEach((text, i) => {
    const cacheKey = `${source}>${target}:${text}`
    if (cache[cacheKey]) {
      results[i] = cache[cacheKey]
    } else {
      toTranslate.push({ idx: i, text })
    }
  })

  // Batch API calls (max 128 per request)
  for (let i = 0; i < toTranslate.length; i += 100) {
    const batch = toTranslate.slice(i, i + 100)
    const params = new URLSearchParams()
    params.set('key', API_KEY)
    params.set('source', source)
    params.set('target', target)
    batch.forEach(b => params.append('q', b.text))

    try {
      const res = await fetch(`https://translation.googleapis.com/language/translate/v2?${params}`)
      const data = await res.json()
      if (data.data?.translations) {
        data.data.translations.forEach((t: any, j: number) => {
          const decoded = t.translatedText
            .replace(/&#39;/g, "'")
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
          results[batch[j].idx] = decoded
          cache[`${source}>${target}:${batch[j].text}`] = decoded
        })
      }
    } catch {}
  }

  setCache(cache)
  // Fill any missing with original
  texts.forEach((text, i) => { if (!results[i]) results[i] = text })
  return results
}

export default function AutoTranslate() {
  const { lang } = useI18n()
  const originals = useRef<Map<Node, string>>(new Map())
  const originalPlaceholders = useRef<Map<Element, string>>(new Map())
  const lastLang = useRef('tr')

  useEffect(() => {
    if (lang === lastLang.current) return
    lastLang.current = lang

    const root = document.body

    if (lang === 'tr') {
      // Restore originals
      originals.current.forEach((text, node) => { node.textContent = text })
      originalPlaceholders.current.forEach((ph, el) => { (el as HTMLInputElement).placeholder = ph })
      return
    }

    // Translate to target language
    const textNodes = getTextNodes(root)
    const placeholders = getPlaceholders(root)

    // Save originals
    textNodes.forEach(node => {
      if (!originals.current.has(node)) {
        originals.current.set(node, node.textContent || '')
      }
    })
    placeholders.forEach(el => {
      if (!originalPlaceholders.current.has(el)) {
        originalPlaceholders.current.set(el, (el as HTMLInputElement).placeholder)
      }
    })

    const allTexts = [
      ...textNodes.map(n => originals.current.get(n) || n.textContent || ''),
      ...placeholders.map(el => originalPlaceholders.current.get(el) || (el as HTMLInputElement).placeholder)
    ]

    // Deduplicate for API efficiency
    const unique = [...new Set(allTexts.filter(t => t.trim().length >= 2))]

    translateBatch(unique, 'tr', lang).then(translated => {
      const map = new Map<string, string>()
      unique.forEach((text, i) => map.set(text, translated[i]))

      textNodes.forEach(node => {
        const orig = originals.current.get(node) || ''
        const tr = map.get(orig)
        if (tr) node.textContent = tr
      })

      placeholders.forEach(el => {
        const orig = originalPlaceholders.current.get(el) || ''
        const tr = map.get(orig)
        if (tr) (el as HTMLInputElement).placeholder = tr
      })
    })
  }, [lang])

  return null
}
