'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const loginStyles = `
  .login-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #0a0a0a; }
  .login-box { width: 100%; max-width: 400px; padding: 3rem; background: #111; border: 1px solid #222; }
  .login-logo { font-family: 'Rajdhani', sans-serif; font-size: 1.4rem; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 2px; text-align: center; margin-bottom: 0.5rem; }
  .login-sub { font-size: 0.7rem; color: #e2771d; text-transform: uppercase; letter-spacing: 3px; text-align: center; font-weight: 700; margin-bottom: 2.5rem; }
  .login-group { margin-bottom: 1.2rem; }
  .login-label { display: block; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #666; margin-bottom: 0.5rem; }
  .login-input { width: 100%; padding: 0.8rem 1rem; background: #0a0a0a; border: 1px solid #222; color: #fff; font-size: 0.9rem; outline: none; transition: border-color 0.3s; font-family: 'Inter', sans-serif; }
  .login-input:focus { border-color: #e2771d; }
  .login-btn { width: 100%; padding: 0.9rem; background: #e2771d; color: #fff; border: none; font-size: 0.8rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; transition: background 0.3s; margin-top: 1rem; font-family: 'Inter', sans-serif; }
  .login-btn:hover { background: #f08a30; }
  .login-btn:disabled { opacity: 0.5; cursor: not-allowed; }
  .login-error { background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.2); color: #ef4444; padding: 0.7rem 1rem; font-size: 0.8rem; margin-bottom: 1rem; }
`

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (res.ok) {
        router.push('/admin')
      } else {
        const data = await res.json()
        setError(data.error || 'Giriş başarısız')
      }
    } catch {
      setError('Bağlantı hatası')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: loginStyles }} />
      <div className="login-page">
        <form className="login-box" onSubmit={handleSubmit}>
          <div className="login-logo">Blact Systems</div>
          <div className="login-sub">Admin Panel</div>

          {error && <div className="login-error">{error}</div>}

          <div className="login-group">
            <label className="login-label">E-posta</label>
            <input type="email" className="login-input" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="login-group">
            <label className="login-label">Şifre</label>
            <input type="password" className="login-input" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </button>
        </form>
      </div>
    </>
  )
}
