'use client'
import { useEffect, useState } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import SeoMini from '@/components/admin/SeoMini'

interface Post {
  id: number
  title: string
  slug: string
  category: string
  date: string
  published: boolean
  seoScore: number
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('tr-TR')
}

export default function AdminNewsList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  const fetchPosts = () => {
    fetch('/api/news')
      .then(r => r.json())
      .then(data => { setPosts(Array.isArray(data) ? data : []); setLoading(false) })
      .catch(() => setLoading(false))
  }

  useEffect(() => { fetchPosts() }, [])

  const handleDelete = async (id: number) => {
    if (!confirm('Bu haberi silmek istediğinize emin misiniz?')) return
    await fetch(`/api/news/${id}`, { method: 'DELETE' })
    fetchPosts()
  }

  return (
    <AdminLayout title="Haberler">
      <div style={{ marginBottom: '1.5rem' }}>
        <a href="/admin/news/new" className="admin-btn admin-btn-primary">+ Yeni Haber</a>
      </div>

      {loading ? (
        <div className="admin-empty"><p>Yükleniyor...</p></div>
      ) : posts.length === 0 ? (
        <div className="admin-empty">
          <p>Henüz haber yok.</p>
          <a href="/admin/news/new" className="admin-btn admin-btn-primary">İlk Haberi Ekle</a>
        </div>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Başlık</th>
              <th>Kategori</th>
              <th>Tarih</th>
              <th>SEO</th>
              <th>Durum</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td style={{ fontWeight: 600 }}>{post.title}</td>
                <td>{post.category}</td>
                <td>{formatDate(post.date)}</td>
                <td><SeoMini score={post.seoScore} /></td>
                <td>
                  <span className={`admin-badge ${post.published ? 'admin-badge-green' : 'admin-badge-gray'}`}>
                    {post.published ? 'Yayında' : 'Taslak'}
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <a href={`/admin/news/${post.id}/edit`} className="admin-btn admin-btn-outline admin-btn-sm">Düzenle</a>
                    <button onClick={() => handleDelete(post.id)} className="admin-btn admin-btn-danger admin-btn-sm">Sil</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </AdminLayout>
  )
}
