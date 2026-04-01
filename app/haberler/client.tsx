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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.np-card').forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [filter]);

  const filtered = filter === 'all' ? posts : posts.filter(p => p.categorySlug === filter);

  return (
    <>
      <div className="np-filters">
        <button className={`np-filter ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>Tümü</button>
        {categories.map(cat => (
          <button key={cat.slug} className={`np-filter ${filter === cat.slug ? 'active' : ''}`} onClick={() => setFilter(cat.slug)}>{cat.name}</button>
        ))}
      </div>
      <div className="np-grid">
        {filtered.map((post, i) => (
          <a key={post.slug} href={`/post/${post.slug}`} className="np-card" style={{ transitionDelay: `${i * 0.08}s` }}>
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
    </>
  );
}
