'use client'
import { useEffect, useState } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'

interface Message {
  id: number
  name: string
  surname: string
  email: string
  subject: string
  message: string
  read: boolean
  createdAt: string
}

const pageStyles = `
  .msg-card { background: #111; border: 1px solid #222; padding: 1.5rem; margin-bottom: 1rem; transition: all 0.2s; position: relative; }
  .msg-card.unread { border-left: 3px solid #e2771d; }
  .msg-card:hover { border-color: #333; }
  .msg-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.8rem; }
  .msg-sender { font-size: 1rem; font-weight: 700; color: #fff; }
  .msg-email { font-size: 0.8rem; color: #e2771d; margin-left: 0.8rem; }
  .msg-date { font-size: 0.7rem; color: #555; }
  .msg-subject { font-size: 0.85rem; font-weight: 600; color: #ccc; margin-bottom: 0.5rem; }
  .msg-body { font-size: 0.85rem; color: #888; line-height: 1.6; white-space: pre-wrap; }
  .msg-actions { display: flex; gap: 0.5rem; margin-top: 1rem; }
  .msg-filters { display: flex; gap: 0.8rem; margin-bottom: 1.5rem; }
  .msg-filter { padding: 0.4rem 1rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; border: 1px solid #333; background: transparent; color: #888; cursor: pointer; transition: all 0.2s; }
  .msg-filter.active { background: #e2771d; color: #fff; border-color: #e2771d; }
  .msg-count { display: inline-flex; align-items: center; justify-content: center; min-width: 20px; height: 20px; background: #e2771d; color: #fff; font-size: 0.65rem; font-weight: 700; border-radius: 50%; margin-left: 0.5rem; }
  @media (max-width: 768px) {
    .msg-filters { gap: 0.4rem; flex-wrap: wrap; }
    .msg-filter { padding: 0.3rem 0.6rem; font-size: 0.65rem; letter-spacing: 0; }
    .msg-card { padding: 1rem; }
    .msg-header { flex-direction: column; gap: 0.3rem; }
    .msg-sender { font-size: 0.9rem; }
    .msg-email { margin-left: 0; font-size: 0.75rem; }
    .msg-actions { flex-wrap: wrap; }
  }
`

function formatDate(d: string) {
  const date = new Date(d)
  return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all')
  const [expanded, setExpanded] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/contact').then(r => r.json()).then(setMessages).catch(() => {})
  }, [])

  const markRead = async (id: number) => {
    await fetch(`/api/contact/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ read: true }) })
    setMessages(msgs => msgs.map(m => m.id === id ? { ...m, read: true } : m))
  }

  const markUnread = async (id: number) => {
    await fetch(`/api/contact/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ read: false }) })
    setMessages(msgs => msgs.map(m => m.id === id ? { ...m, read: false } : m))
  }

  const deleteMsg = async (id: number) => {
    if (!confirm('Bu mesajı silmek istediğinize emin misiniz?')) return
    await fetch(`/api/contact/${id}`, { method: 'DELETE' })
    setMessages(msgs => msgs.filter(m => m.id !== id))
  }

  const filtered = messages.filter(m => {
    if (filter === 'unread') return !m.read
    if (filter === 'read') return m.read
    return true
  })

  const unreadCount = messages.filter(m => !m.read).length

  return (
    <AdminLayout title="Mesajlar">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <div className="msg-filters">
        <button className={`msg-filter ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
          Tümü ({messages.length})
        </button>
        <button className={`msg-filter ${filter === 'unread' ? 'active' : ''}`} onClick={() => setFilter('unread')}>
          Okunmamış {unreadCount > 0 && <span className="msg-count">{unreadCount}</span>}
        </button>
        <button className={`msg-filter ${filter === 'read' ? 'active' : ''}`} onClick={() => setFilter('read')}>
          Okunmuş
        </button>
      </div>

      {filtered.length === 0 ? (
        <div className="admin-empty">
          <p>{filter === 'unread' ? 'Okunmamış mesaj yok' : filter === 'read' ? 'Okunmuş mesaj yok' : 'Henüz mesaj yok'}</p>
        </div>
      ) : (
        filtered.map(msg => (
          <div
            key={msg.id}
            className={`msg-card ${!msg.read ? 'unread' : ''}`}
            onClick={() => setExpanded(expanded === msg.id ? null : msg.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="msg-header">
              <div>
                <span className="msg-sender">{msg.name} {msg.surname}</span>
                <span className="msg-email">{msg.email}</span>
              </div>
              <span className="msg-date">{formatDate(msg.createdAt)}</span>
            </div>
            {msg.subject && <div className="msg-subject">{msg.subject}</div>}
            <div className="msg-body" style={expanded === msg.id ? {} : { maxHeight: '3em', overflow: 'hidden' }}>
              {msg.message}
            </div>
            {expanded === msg.id && (
              <div className="msg-actions" onClick={e => e.stopPropagation()}>
                <a href={`mailto:${msg.email}?subject=Re: ${msg.subject || 'İletişim'}`} className="admin-btn admin-btn-primary admin-btn-sm">Yanıtla</a>
                {msg.read ? (
                  <button className="admin-btn admin-btn-outline admin-btn-sm" onClick={() => markUnread(msg.id)}>Okunmadı İşaretle</button>
                ) : (
                  <button className="admin-btn admin-btn-outline admin-btn-sm" onClick={() => markRead(msg.id)}>Okundu İşaretle</button>
                )}
                <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => deleteMsg(msg.id)}>Sil</button>
              </div>
            )}
          </div>
        ))
      )}
    </AdminLayout>
  )
}
