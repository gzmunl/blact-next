'use client'
import { useEffect, useState } from 'react'
import { useI18n } from '@/lib/i18n'

interface Category { slug: string; name: string; nameEn?: string; }
interface Post { slug: string; title: string; excerpt: string; image: string; category: string; categorySlug: string; date: string; }

const monthsTr = ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'];
const monthsEn = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export default function HaberlerClient({ categories, posts }: { categories: Category[]; posts: Post[] }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const { lang } = useI18n();

  const months = lang === 'en' ? monthsEn : monthsTr;
  function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
  }

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
          <input type="text" placeholder={lang === 'en' ? 'Search news...' : 'Haberlerde ara...'} value={search} onChange={(e) => setSearch(e.target.value)} className="np-search-input" />
        </div>
        <div className="np-filters">
          <button className={`np-filter ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>{lang === 'en' ? 'All' : 'Tümü'}</button>
          {categories.map(cat => (
            <button key={cat.slug} className={`np-filter ${filter === cat.slug ? 'active' : ''}`} onClick={() => setFilter(cat.slug)}>{lang === 'en' && cat.nameEn ? cat.nameEn : cat.name}</button>
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
          <h4>{lang === 'en' ? 'Categories' : 'Kategoriler'}</h4>
          <ul>
            {categories.map(cat => {
              const count = posts.filter(p => p.categorySlug === cat.slug).length
              return (
                <li key={cat.slug}>
                  <a href="#" onClick={(e) => { e.preventDefault(); setFilter(cat.slug); }}>{lang === 'en' && cat.nameEn ? cat.nameEn : cat.name} <span className="np-cat-count">({count})</span></a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="np-sidebar-box">
          <h4>{lang === 'en' ? 'Weekly Newsletter' : 'Haftalık Bülten'}</h4>
          <p>{lang === 'en' ? 'We compile the most important developments in the sector and send them to your inbox every week.' : 'Her hafta, sektörün en önemli gelişmelerini derleyerek e-posta kutunuza gönderiyoruz.'}</p>
          <input type="email" placeholder={lang === 'en' ? 'Your email address' : 'E-posta adresiniz'} />
          <button>{lang === 'en' ? 'Subscribe' : 'Abone Ol'}</button>
        </div>
        <div className="np-sidebar-box">
          <h4>{lang === 'en' ? 'News Sources' : 'Haber Kaynakları'}</h4>
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
