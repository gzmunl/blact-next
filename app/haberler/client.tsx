'use client'
import { useEffect, useState } from 'react'

interface Category { slug: string; name: string; }
interface Post { slug: string; title: string; excerpt: string; image: string; category: string; categorySlug: string; date: string; }

function formatDate(dateStr: string) {
  const months = ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'];
  const d = new Date(dateStr);
  return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
}

export default function HaberlerClient({ categories, posts }: { categories: Category[]; posts: Post[] }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const cards = document.querySelectorAll('.np-card');
    cards.forEach(card => card.classList.add('visible'));
  }, [filter, search]);

  const filtered = posts.filter(p => {
    const matchCat = filter === 'all' || p.categorySlug === filter;
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="np-layout">
      <div className="np-main">
        <div className="np-search">
          <input type="text" placeholder="Haberlerde ara..." value={search} onChange={(e) => setSearch(e.target.value)} className="np-search-input" />
        </div>
        <div className="np-filters">
          <button className={`np-filter ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>Tümü</button>
          {categories.map(cat => (
            <button key={cat.slug} className={`np-filter ${filter === cat.slug ? 'active' : ''}`} onClick={() => setFilter(cat.slug)}>{cat.name}</button>
          ))}
        </div>
        <div className="np-grid">
          {filtered.map((post, i) => (
            <a key={post.slug} href={`/haberler/${post.slug}`} className="np-card" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="np-card-img" style={{ backgroundImage: `url('${post.image}')` }} />
              <div className="np-card-overlay" />
              <div className="np-card-body">
                <div className="np-card-meta">
                  <span className="np-card-cat">{post.category}</span>
                  <span className="np-card-date">{formatDate(post.date)}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <aside className="np-sidebar">
        <div className="np-sidebar-box">
          <h4>Kategoriler</h4>
          <ul>
            {categories.map(cat => {
              const count = posts.filter(p => p.categorySlug === cat.slug).length
              return (
                <li key={cat.slug}>
                  <a href="#" onClick={(e) => { e.preventDefault(); setFilter(cat.slug); }}>{cat.name} <span className="np-cat-count">({count})</span></a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="np-sidebar-box">
          <h4>Haftalık Bülten</h4>
          <p>Her hafta, sektörün en önemli gelişmelerini derleyerek e-posta kutunuza gönderiyoruz.</p>
          <input type="email" placeholder="E-posta adresiniz" />
          <button>Abone Ol</button>
        </div>
        <div className="np-sidebar-box">
          <h4>Haber Kaynakları</h4>
          <ul>
            <li><a href="https://3dprintingindustry.com" target="_blank" rel="noopener noreferrer">3D Printing Industry</a></li>
            <li><a href="https://www.compositesworld.com" target="_blank" rel="noopener noreferrer">CompositesWorld</a></li>
            <li><a href="https://www.suasnews.com" target="_blank" rel="noopener noreferrer">sUAS News</a></li>
            <li><a href="https://www.renewableenergyworld.com" target="_blank" rel="noopener noreferrer">Renewable Energy World</a></li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
