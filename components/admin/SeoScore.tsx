'use client'

interface SeoData {
  metaTitle: string
  metaDescription: string
  metaKeywords: string
  title: string
  slug: string
  content: string
  image: string
  excerpt: string
}

export function calculateSeoScore(data: SeoData): { score: number; items: { label: string; score: number; max: number; tip: string }[] } {
  const items: { label: string; score: number; max: number; tip: string }[] = []

  // Meta title present (15)
  const hasMetaTitle = (data.metaTitle || '').trim().length > 0
  items.push({ label: 'Meta Başlık', score: hasMetaTitle ? 15 : 0, max: 15, tip: hasMetaTitle ? 'Meta başlık mevcut' : 'Meta başlık ekleyin' })

  // Meta title length (10)
  const mtLen = (data.metaTitle || '').trim().length
  const mtScore = mtLen >= 50 && mtLen <= 60 ? 10 : mtLen > 0 ? Math.round((Math.min(mtLen, 60) / 60) * 10) : 0
  items.push({ label: 'Meta Başlık Uzunluğu', score: mtScore, max: 10, tip: `${mtLen}/60 karakter (ideal: 50-60)` })

  // Meta description present (15)
  const hasMetaDesc = (data.metaDescription || '').trim().length > 0
  items.push({ label: 'Meta Açıklama', score: hasMetaDesc ? 15 : 0, max: 15, tip: hasMetaDesc ? 'Meta açıklama mevcut' : 'Meta açıklama ekleyin' })

  // Meta description length (10)
  const mdLen = (data.metaDescription || '').trim().length
  const mdScore = mdLen >= 150 && mdLen <= 160 ? 10 : mdLen > 0 ? Math.round((Math.min(mdLen, 160) / 160) * 10) : 0
  items.push({ label: 'Meta Açıklama Uzunluğu', score: mdScore, max: 10, tip: `${mdLen}/160 karakter (ideal: 150-160)` })

  // Keywords present (10)
  const hasKeywords = (data.metaKeywords || '').trim().length > 0
  items.push({ label: 'Anahtar Kelimeler', score: hasKeywords ? 10 : 0, max: 10, tip: hasKeywords ? 'Anahtar kelimeler mevcut' : 'Anahtar kelimeler ekleyin' })

  // Title contains keyword (10)
  const keywords = (data.metaKeywords || '').split(',').map(k => k.trim().toLowerCase()).filter(Boolean)
  const titleLower = (data.title || '').toLowerCase()
  const titleHasKeyword = keywords.some(k => titleLower.includes(k))
  items.push({ label: 'Başlıkta Anahtar Kelime', score: titleHasKeyword ? 10 : 0, max: 10, tip: titleHasKeyword ? 'Başlık anahtar kelime içeriyor' : 'Başlığa anahtar kelime ekleyin' })

  // Slug is clean (5)
  const slugClean = /^[a-z0-9-]+$/.test(data.slug || '')
  items.push({ label: 'Temiz URL', score: slugClean ? 5 : 0, max: 5, tip: slugClean ? 'URL yapısı uygun' : 'URL sadece küçük harf, rakam ve tire içermeli' })

  // Content length (10)
  const wordCount = (data.content || '').replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length
  const contentScore = wordCount >= 300 ? 10 : Math.round((wordCount / 300) * 10)
  items.push({ label: 'İçerik Uzunluğu', score: contentScore, max: 10, tip: `${wordCount} kelime (ideal: 300+)` })

  // Image present (5)
  const hasImage = (data.image || '').trim().length > 0
  items.push({ label: 'Görsel', score: hasImage ? 5 : 0, max: 5, tip: hasImage ? 'Görsel mevcut' : 'Görsel ekleyin' })

  // Excerpt present (10)
  const hasExcerpt = (data.excerpt || '').trim().length > 0
  items.push({ label: 'Özet', score: hasExcerpt ? 10 : 0, max: 10, tip: hasExcerpt ? 'Özet mevcut' : 'Özet ekleyin' })

  const score = items.reduce((sum, item) => sum + item.score, 0)
  return { score, items }
}

export default function SeoScore({ data }: { data: SeoData }) {
  const { score, items } = calculateSeoScore(data)

  const color = score >= 71 ? '#22c55e' : score >= 41 ? '#f59e0b' : '#ef4444'
  const label = score >= 71 ? 'İyi' : score >= 41 ? 'Orta' : 'Zayıf'

  const circumference = 2 * Math.PI * 45
  const offset = circumference - (score / 100) * circumference

  return (
    <div style={{ background: '#111', border: '1px solid #222', padding: '1.5rem' }}>
      <h3 style={{ fontFamily: "'Industry', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem' }}>
        SEO Skoru
      </h3>

      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
        <div style={{ position: 'relative', width: 100, height: 100, flexShrink: 0 }}>
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#222" strokeWidth="6" />
            <circle cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="6"
              strokeDasharray={circumference} strokeDashoffset={offset}
              strokeLinecap="round" transform="rotate(-90 50 50)"
              style={{ transition: 'stroke-dashoffset 0.5s ease' }} />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.8rem', fontWeight: 800, color }}>{score}</span>
            <span style={{ fontSize: '0.65rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</span>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          {items.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <span style={{ color: item.score === item.max ? '#22c55e' : item.score > 0 ? '#f59e0b' : '#ef4444', fontSize: '0.7rem' }}>
                {item.score === item.max ? '●' : item.score > 0 ? '●' : '○'}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#ccc', flex: 1 }}>{item.label}</span>
              <span style={{ fontSize: '0.65rem', color: '#666' }}>{item.score}/{item.max}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
