'use client'
import { useEffect, useState } from 'react'

interface Category { slug: string; name: string; }
interface Post { slug: string; title: string; excerpt: string; image: string; category: string; categorySlug: string; date: string; readTime: number; }

function formatDate(dateStr: string) {
  const months = ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'];
  const d = new Date(dateStr);
  return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
}

export default function BlogClient({ categories, posts }: { categories: Category[]; posts: Post[] }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

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
        <input type="text" placeholder="Yazılarda ara..." value={search} onChange={(e) => setSearch(e.target.value)} className="bp-search-input" />
      </div>
      <div className="bp-filters">
        <button className={`bp-filter ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>Tümü</button>
        {categories.map(cat => (
          <button key={cat.slug} className={`bp-filter ${filter === cat.slug ? 'active' : ''}`} onClick={() => setFilter(cat.slug)}>{cat.name}</button>
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
                <span>{post.readTime} dk okuma</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
