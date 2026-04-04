'use client'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import SeoScore from './SeoScore'

const RichEditor = dynamic(() => import('./RichEditor'), { ssr: false })

interface PostFormProps {
  type: 'blog' | 'news'
  initialData?: {
    id?: number
    title: string
    slug: string
    excerpt: string
    image: string
    category: string
    categorySlug: string
    date: string
    readTime?: number
    content: string
    metaTitle: string
    metaDescription: string
    metaKeywords: string
    published: boolean
  }
}

const defaultCategories = [
  { slug: 'eklemeli-imalat', name: 'Eklemeli İmalat' },
  { slug: 'kompozit', name: 'Kompozit' },
  { slug: 'insansiz-araclar', name: 'İnsansız Araçlar' },
  { slug: 'surdurulebilirlik', name: 'Sürdürülebilirlik' },
]

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
    .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export default function PostForm({ type, initialData }: PostFormProps) {
  const router = useRouter()
  const isEdit = !!initialData?.id
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [categories, setCategories] = useState(defaultCategories)
  const [showNewCat, setShowNewCat] = useState(false)
  const [newCatName, setNewCatName] = useState('')

  const [form, setForm] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    excerpt: initialData?.excerpt || '',
    image: initialData?.image || '',
    category: initialData?.category || categories[0].name,
    categorySlug: initialData?.categorySlug || categories[0].slug,
    date: initialData?.date ? initialData.date.split('T')[0] : new Date().toISOString().split('T')[0],
    readTime: initialData?.readTime || 5,
    content: initialData?.content || '',
    metaTitle: initialData?.metaTitle || '',
    metaDescription: initialData?.metaDescription || '',
    metaKeywords: initialData?.metaKeywords || '',
    published: initialData?.published ?? true,
  })

  const updateField = (field: string, value: string | number | boolean) => {
    setForm(prev => {
      const updated = { ...prev, [field]: value }
      if (field === 'title' && !isEdit) {
        updated.slug = slugify(value as string)
      }
      if (field === 'category') {
        const cat = categories.find(c => c.name === value)
        if (cat) updated.categorySlug = cat.slug
      }
      return updated
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    const endpoint = isEdit ? `/api/${type === 'blog' ? 'blog' : 'news'}/${initialData!.id}` : `/api/${type === 'blog' ? 'blog' : 'news'}`
    const method = isEdit ? 'PUT' : 'POST'

    try {
      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        router.push(`/admin/${type === 'blog' ? 'blog' : 'news'}`)
        router.refresh()
      } else {
        const data = await res.json()
        setError(data.error || 'Kaydetme hatası')
      }
    } catch {
      setError('Bağlantı hatası')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form className="admin-form" style={{ maxWidth: '100%' }} onSubmit={handleSubmit}>
      {error && <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#ef4444', padding: '0.7rem 1rem', fontSize: '0.8rem', marginBottom: '1rem' }}>{error}</div>}

      <div className="admin-form-row">
        <div className="admin-form-group">
          <label className="admin-form-label">Başlık</label>
          <input className="admin-form-input" value={form.title} onChange={e => updateField('title', e.target.value)} required />
        </div>
        <div className="admin-form-group">
          <label className="admin-form-label">URL Slug</label>
          <input className="admin-form-input" value={form.slug} onChange={e => updateField('slug', e.target.value)} required />
        </div>
      </div>

      <div className="admin-form-group">
        <label className="admin-form-label">Özet</label>
        <textarea className="admin-form-input admin-form-textarea" style={{ minHeight: '80px' }} value={form.excerpt} onChange={e => updateField('excerpt', e.target.value)} required />
      </div>

      <div className="admin-form-row">
        <div className="admin-form-group">
          <label className="admin-form-label">Kategori</label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <select className="admin-form-input" style={{ flex: 1 }} value={form.category} onChange={e => updateField('category', e.target.value)}>
              {categories.map(c => <option key={c.slug} value={c.name}>{c.name}</option>)}
            </select>
            <button type="button" className="admin-btn admin-btn-outline" style={{ whiteSpace: 'nowrap', flexShrink: 0 }} onClick={() => setShowNewCat(!showNewCat)}>
              + Yeni
            </button>
          </div>
          {showNewCat && (
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              <input className="admin-form-input" style={{ flex: 1 }} placeholder="Yeni kategori adı" value={newCatName} onChange={e => setNewCatName(e.target.value)} />
              <button type="button" className="admin-btn admin-btn-primary admin-btn-sm" onClick={() => {
                if (newCatName.trim()) {
                  const newCat = { slug: slugify(newCatName.trim()), name: newCatName.trim() }
                  setCategories(prev => [...prev, newCat])
                  updateField('category', newCat.name)
                  setNewCatName('')
                  setShowNewCat(false)
                }
              }}>Ekle</button>
            </div>
          )}
        </div>
        <div className="admin-form-group">
          <label className="admin-form-label">Tarih</label>
          <input type="date" className="admin-form-input" value={form.date} onChange={e => updateField('date', e.target.value)} required />
        </div>
      </div>

      <div className="admin-form-row">
        <div className="admin-form-group">
          <label className="admin-form-label">Kapak Görseli</label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input className="admin-form-input" style={{ flex: 1 }} value={form.image} onChange={e => updateField('image', e.target.value)} placeholder="/images/..." />
            <label className="admin-btn admin-btn-outline" style={{ cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}>
              Yükle
              <input type="file" accept="image/*" style={{ display: 'none' }} onChange={async (e) => {
                const file = e.target.files?.[0]
                if (!file) return
                const fd = new FormData()
                fd.append('file', file)
                const res = await fetch('/api/upload', { method: 'POST', body: fd })
                if (res.ok) {
                  const data = await res.json()
                  updateField('image', data.url)
                }
              }} />
            </label>
          </div>
          {form.image && <div style={{ marginTop: '0.5rem' }}><img src={form.image} alt="" style={{ maxHeight: 80, border: '1px solid #222' }} /></div>}
        </div>
        {type === 'blog' && (
          <div className="admin-form-group">
            <label className="admin-form-label">Okuma Süresi (dk)</label>
            <input type="number" className="admin-form-input" value={form.readTime} onChange={e => updateField('readTime', parseInt(e.target.value) || 0)} />
          </div>
        )}
      </div>

      <div className="admin-form-group">
        <label className="admin-form-label">İçerik</label>
        <RichEditor value={form.content} onChange={(html) => updateField('content', html)} />
      </div>

      <div className="admin-form-group">
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}>
          <input type="checkbox" checked={form.published} onChange={e => updateField('published', e.target.checked)} />
          <span style={{ fontSize: '0.85rem', color: '#ccc' }}>Yayında</span>
        </label>
      </div>

      <div className="admin-seo-section">
        <h3 style={{ fontFamily: "'Industry', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#e2771d', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem' }}>
          SEO Ayarları
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
          {/* Sol: SEO alanları */}
          <div>
            <div className="admin-form-group">
              <label className="admin-form-label">Meta Başlık</label>
              <input className="admin-form-input" value={form.metaTitle} onChange={e => updateField('metaTitle', e.target.value)} placeholder="Arama sonuçlarında görünecek başlık" />
              <div className="admin-form-hint">{form.metaTitle.length}/60 karakter (ideal: 50-60)</div>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Meta Açıklama</label>
              <textarea className="admin-form-input admin-form-textarea" style={{ minHeight: '80px' }} value={form.metaDescription} onChange={e => updateField('metaDescription', e.target.value)} placeholder="Arama sonuçlarında görünecek açıklama" />
              <div className="admin-form-hint">{form.metaDescription.length}/160 karakter (ideal: 150-160)</div>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Anahtar Kelimeler</label>
              <input className="admin-form-input" value={form.metaKeywords} onChange={e => updateField('metaKeywords', e.target.value)} placeholder="Virgülle ayırın: eklemeli imalat, metal, SLM" />
            </div>
          </div>

          {/* Sağ: SEO Analizi + Google Önizleme */}
          <div>
            {/* Google Önizleme */}
            <div style={{ background: '#1a1a1a', border: '1px solid #222', padding: '1.2rem', marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.65rem', color: '#666', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: '0.8rem' }}>Google Önizleme</div>
              <div style={{ fontSize: '1.1rem', color: '#8ab4f8', marginBottom: '0.3rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {form.metaTitle || form.title || 'SEO Başlığı girilmedi...'}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#bdc1c6', marginBottom: '0.3rem' }}>
                https://blactsystems.com/{type === 'blog' ? 'blog' : 'haberler'}/{form.slug || '...'}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#9aa0a6', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>
                {form.metaDescription || form.excerpt || 'SEO açıklaması girilmedi...'}
              </div>
            </div>

            {/* SEO Analizi */}
            <SeoScore data={{
              metaTitle: form.metaTitle,
              metaDescription: form.metaDescription,
              metaKeywords: form.metaKeywords,
              title: form.title,
              slug: form.slug,
              content: form.content,
              image: form.image,
              excerpt: form.excerpt,
            }} />
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
        <button type="submit" className="admin-btn admin-btn-primary" disabled={saving}>
          {saving ? 'Kaydediliyor...' : isEdit ? 'Güncelle' : 'Yayınla'}
        </button>
        <a href={`/admin/${type === 'blog' ? 'blog' : 'news'}`} className="admin-btn admin-btn-outline">İptal</a>
      </div>
    </form>
  )
}
