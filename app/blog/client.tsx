'use client'
import { useEffect, useState } from 'react'
import { useI18n } from '@/lib/i18n'

interface Category { slug: string; name: string; nameEn?: string; }
interface Post { slug: string; title: string; excerpt: string; image: string; category: string; categorySlug: string; date: string; readTime: number; }

const monthsTr = ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'];
const monthsEn = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export default function BlogClient({ categories, posts }: { categories: Category[]; posts: Post[] }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const { lang } = useI18n();

  const months = lang === 'en' ? monthsEn : monthsTr;
  function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
  }

  useEffect(() => {
    const cards = document.querySelectorAll('.bp-card');
    cards.forEach(card => card.classList.add('visible'));
  }, [filter, search]);

  const filtered = posts.filter(p => {
    const matchCat = filter === 'all' || p.categorySlug === filter;
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <div className="bp-search">
        <input type="text" placeholder={lang === 'en' ? 'Search articles...' : 'Yazılarda ara...'} value={search} onChange={(e) => setSearch(e.target.value)} className="bp-search-input" />
      </div>
      <div className="bp-filters">
        <button className={`bp-filter ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>{lang === 'en' ? 'All' : 'Tümü'}</button>
        {categories.map(cat => (
          <button key={cat.slug} className={`bp-filter ${filter === cat.slug ? 'active' : ''}`} onClick={() => setFilter(cat.slug)}>{lang === 'en' && cat.nameEn ? cat.nameEn : cat.name}</button>
        ))}
      </div>
      <div className="bp-grid">
        {filtered.map((post, i) => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="bp-card" style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="bp-card-img" style={{ backgroundImage: `url('${post.image}')` }}>
              <span className="bp-card-cat">{post.category}</span>
            </div>
            <div className="bp-card-body">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="bp-card-meta">
                <span>{formatDate(post.date)}</span>
                <span>{post.readTime} {lang === 'en' ? 'min read' : 'dk okuma'}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
