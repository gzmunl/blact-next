'use client'
import { useEffect, useState } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'

export default function AdminDashboard() {
  const [stats, setStats] = useState({ blogCount: 0, newsCount: 0, msgCount: 0, unreadCount: 0 })

  useEffect(() => {
    Promise.all([
      fetch('/api/blog').then(r => r.json()),
      fetch('/api/news').then(r => r.json()),
      fetch('/api/contact').then(r => r.json()),
    ]).then(([blogs, news, msgs]) => {
      const msgArr = Array.isArray(msgs) ? msgs : []
      setStats({
        blogCount: Array.isArray(blogs) ? blogs.length : 0,
        newsCount: Array.isArray(news) ? news.length : 0,
        msgCount: msgArr.length,
        unreadCount: msgArr.filter((m: any) => !m.read).length,
      })
    }).catch(() => {})
  }, [])

  return (
    <AdminLayout title="Dashboard">
      <div className="admin-stats">
        <div className="admin-stat-card">
          <div className="admin-stat-number">{stats.blogCount}</div>
          <div className="admin-stat-label">Blog Yazısı</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-number">{stats.newsCount}</div>
          <div className="admin-stat-label">Haber</div>
        </div>
        <div className="admin-stat-card">
          <a href="/admin/messages" style={{ textDecoration: 'none' }}>
            <div className="admin-stat-number">{stats.unreadCount > 0 ? stats.unreadCount : stats.msgCount}</div>
            <div className="admin-stat-label">{stats.unreadCount > 0 ? 'Okunmamış Mesaj' : 'Mesaj'}</div>
          </a>
        </div>
        <div className="admin-stat-card">
          <a href="/admin/blog/new" className="admin-btn admin-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            + Yeni Yazı
          </a>
          <div style={{ marginTop: '0.5rem' }}>
            <a href="/admin/news/new" className="admin-btn admin-btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
              + Yeni Haber
            </a>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
