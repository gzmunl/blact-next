'use client'

export default function SeoMini({ score }: { score: number }) {
  const color = score >= 71 ? '#22c55e' : score >= 41 ? '#f59e0b' : '#ef4444'
  const label = score >= 71 ? 'İyi' : score >= 41 ? 'Orta' : 'Zayıf'
  const circumference = 2 * Math.PI * 16
  const offset = circumference - (score / 100) * circumference

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <div style={{ position: 'relative', width: 38, height: 38, flexShrink: 0 }}>
        <svg width="38" height="38" viewBox="0 0 38 38">
          <circle cx="19" cy="19" r="16" fill="none" stroke="#222" strokeWidth="3" />
          <circle cx="19" cy="19" r="16" fill="none" stroke={color} strokeWidth="3"
            strokeDasharray={circumference} strokeDashoffset={offset}
            strokeLinecap="round" transform="rotate(-90 19 19)"
            style={{ transition: 'stroke-dashoffset 0.5s ease' }} />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 800, color }}>{score}</span>
        </div>
      </div>
      <span style={{ fontSize: '0.6rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>{label}</span>
    </div>
  )
}
