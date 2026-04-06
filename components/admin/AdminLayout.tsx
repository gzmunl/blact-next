'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const adminStyles = `
  .admin-wrap { display: flex; min-height: 100vh; background: #0a0a0a; }
  .admin-sidebar { width: 240px; background: #111; border-right: 1px solid #222; padding: 2rem 0; flex-shrink: 0; position: fixed; top: 0; left: 0; bottom: 0; z-index: 100; }
  .admin-sidebar-logo { padding: 0 1.5rem; margin-bottom: 2.5rem; }
  .admin-sidebar-logo h2 { font-family: 'Industry', sans-serif; font-size: 1.2rem; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 2px; }
  .admin-sidebar-logo span { font-size: 0.65rem; color: #e2771d; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; }
  .admin-nav { list-style: none; padding: 0; margin: 0; }
  .admin-nav li a { display: flex; align-items: center; gap: 0.8rem; padding: 0.8rem 1.5rem; color: #888; font-size: 0.85rem; font-weight: 500; text-decoration: none; transition: all 0.2s; border-left: 3px solid transparent; }
  .admin-nav li a:hover { color: #fff; background: rgba(255,255,255,0.03); }
  .admin-nav li a.active { color: #e2771d; border-left-color: #e2771d; background: rgba(226,119,29,0.05); }
  .admin-nav-divider { height: 1px; background: #222; margin: 1rem 1.5rem; }
  .admin-nav-badge { display: inline-flex; align-items: center; justify-content: center; min-width: 18px; height: 18px; background: #ef4444; color: #fff; font-size: 0.6rem; font-weight: 800; border-radius: 50%; margin-left: auto; line-height: 1; padding: 0 4px; }
  .admin-main { flex: 1; margin-left: 240px; padding: 2rem 2.5rem; }
  .admin-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 1px solid #1a1a1a; }
  .admin-header h1 { font-family: 'Industry', sans-serif; font-size: 1.5rem; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 1px; }
  .admin-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.7rem 1.5rem; font-size: 0.8rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; border: none; cursor: pointer; transition: all 0.3s; text-decoration: none; }
  .admin-btn-primary { background: #e2771d; color: #fff; }
  .admin-btn-primary:hover { background: #f08a30; }
  .admin-btn-outline { background: transparent; color: #e2771d; border: 1px solid #e2771d; }
  .admin-btn-outline:hover { background: rgba(226,119,29,0.1); }
  .admin-btn-danger { background: transparent; color: #ef4444; border: 1px solid #ef4444; }
  .admin-btn-danger:hover { background: rgba(239,68,68,0.1); }
  .admin-btn-sm { padding: 0.4rem 0.8rem; font-size: 0.7rem; }
  .admin-table { width: 100%; border-collapse: collapse; }
  .admin-table th { text-align: left; padding: 0.8rem 1rem; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #666; border-bottom: 1px solid #222; }
  .admin-table td { padding: 1rem; font-size: 0.85rem; color: #ccc; border-bottom: 1px solid #1a1a1a; }
  .admin-table tr:hover td { background: rgba(255,255,255,0.02); }
  .admin-badge { display: inline-block; padding: 0.2rem 0.6rem; font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
  .admin-badge-green { background: rgba(34,197,94,0.1); color: #22c55e; border: 1px solid rgba(34,197,94,0.2); }
  .admin-badge-gray { background: rgba(150,150,150,0.1); color: #888; border: 1px solid rgba(150,150,150,0.2); }
  .admin-form { max-width: 900px; }
  .admin-form-group { margin-bottom: 1.5rem; }
  .admin-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
  .admin-form-label { display: block; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #888; margin-bottom: 0.5rem; }
  .admin-form-input { width: 100%; padding: 0.8rem 1rem; background: #0a0a0a; border: 1px solid #222; color: #fff; font-family: 'Barlow', sans-serif; font-size: 0.9rem; outline: none; transition: border-color 0.3s; }
  .admin-form-input:focus { border-color: #e2771d; }
  .admin-form-textarea { min-height: 120px; resize: vertical; }
  .admin-form-hint { font-size: 0.7rem; color: #555; margin-top: 0.3rem; }
  .admin-seo-section { margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #222; }
  .admin-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-bottom: 2rem; }
  .admin-stat-card { background: #111; border: 1px solid #222; padding: 1.5rem; }
  .admin-stat-number { font-size: 2rem; font-weight: 800; color: #fff; margin-bottom: 0.3rem; }
  .admin-stat-label { font-size: 0.7rem; color: #666; text-transform: uppercase; letter-spacing: 2px; font-weight: 600; }
  .admin-empty { text-align: center; padding: 4rem 2rem; color: #555; }
  .admin-empty p { margin-bottom: 1rem; }
  @media (max-width: 768px) {
    .admin-sidebar { width: 50px; padding: 1rem 0; }
    .admin-sidebar-logo { padding: 0 0.6rem; margin-bottom: 1.5rem; }
    .admin-sidebar-logo h2, .admin-sidebar-logo span, .admin-nav li a span { display: none; }
    .admin-nav li a { padding: 0.8rem 0; justify-content: center; border-left: none; border-bottom: 2px solid transparent; font-size: 1.1rem; }
    .admin-nav li a.active { border-left: none; border-bottom-color: #e2771d; }
    .admin-nav-divider { margin: 0.5rem 0.5rem; }
    .admin-main { margin-left: 50px; padding: 1rem 0.8rem; }
    .admin-header { margin-bottom: 1rem; padding-bottom: 1rem; }
    .admin-header h1 { font-size: 1.1rem; }
    .admin-stats { grid-template-columns: repeat(2, 1fr); gap: 0.8rem; }
    .admin-stat-card { padding: 1rem; }
    .admin-stat-number { font-size: 1.5rem; }
    .admin-form-row { grid-template-columns: 1fr; }
    .admin-table { font-size: 0.75rem; }
    .admin-table th, .admin-table td { padding: 0.6rem 0.5rem; }
    .admin-btn { padding: 0.5rem 0.8rem; font-size: 0.7rem; }
  }
`

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: '◆' },
  { href: '/admin/blog', label: 'Blog Yazıları', icon: '✎' },
  { href: '/admin/news', label: 'Haberler', icon: '☰' },
  { href: '/admin/messages', label: 'Mesajlar', icon: '✉' },
]

export default function AdminLayout({ children, title }: { children: React.ReactNode; title: string }) {
  const pathname = usePathname()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    setMounted(true)
    // Auth check
    fetch('/api/auth/check').then(r => {
      if (!r.ok) router.push('/admin/login')
    }).catch(() => router.push('/admin/login'))
    // Unread messages
    fetch('/api/contact').then(r => r.json()).then(msgs => {
      if (Array.isArray(msgs)) setUnreadCount(msgs.filter((m: any) => !m.read).length)
    }).catch(() => {})
  }, [])

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  if (!mounted) return null

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: adminStyles }} />
      <div className="admin-wrap">
        <aside className="admin-sidebar">
          <div className="admin-sidebar-logo">
            <h2>Blact Systems</h2>
            <span>Admin Panel</span>
          </div>
          <ul className="admin-nav">
            {navItems.map(item => (
              <li key={item.href}>
                <a href={item.href} className={pathname === item.href ? 'active' : ''}>
                  {item.icon} <span>{item.label}</span>
                  {item.href === '/admin/messages' && unreadCount > 0 && (
                    <span className="admin-nav-badge">{unreadCount}</span>
                  )}
                </a>
              </li>
            ))}
            <div className="admin-nav-divider" />
            <li>
              <a href="/" target="_blank">↗ <span>Siteyi Gör</span></a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleLogout() }} style={{ color: '#ef4444' }}>✕ <span>Çıkış</span></a>
            </li>
          </ul>
        </aside>
        <main className="admin-main">
          <div className="admin-header">
            <h1>{title}</h1>
          </div>
          {children}
        </main>
      </div>
    </>
  )
}
