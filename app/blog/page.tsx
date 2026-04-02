import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavScript from '@/components/NavScript'
import CardAnimator from '@/components/CardAnimator'
import { blogPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Blog - Blact Systems',
  description: 'Blact Systems — Mühendislik dünyasından en son gelişmeler ve teknik analizler.',
}

function formatDate(dateStr: string) {
  const months = ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'];
  const d = new Date(dateStr);
  return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
}

const pageStyles = `
  .bp-hero { background: #050507; padding: 8rem 0 4rem; position: relative; overflow: hidden; }
  .bp-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 50%, rgba(226,119,29,0.06) 0%, transparent 60%); }
  .bp-hero .container { position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; padding: 0 2.5rem; }
  .bp-hero .section-label { color: var(--accent); font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; margin-bottom: 0.8rem; display: flex; align-items: center; gap: 1rem; }
  .bp-hero .section-label::before { content: ''; width: 40px; height: 2px; background: var(--accent); }
  .bp-hero h1 { font-family: 'Rajdhani', sans-serif; font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 700; color: #fff; text-transform: uppercase; line-height: 1.05; margin-bottom: 1rem; }
  .bp-hero p { color: #888; max-width: 500px; line-height: 1.7; font-size: 0.95rem; }
  .bp-grid-section { background: #fff; padding: 4rem 0 5rem; }
  .bp-grid-section .container { max-width: 1200px; margin: 0 auto; padding: 0 2.5rem; }
  .bp-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
  .bp-card { background: #fff; border-radius: 0; overflow: hidden; border: 1px solid #eee; text-decoration: none; color: #111; opacity: 0; transform: translateY(20px); transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
  .bp-card.visible { opacity: 1; transform: translateY(0); }
  .bp-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); color: #111; }
  .bp-card-img { height: 200px; background-size: cover; background-position: center; position: relative; }
  .bp-card-cat { position: absolute; top: 1rem; left: 1rem; background: rgba(226,119,29,0.9); color: #fff; padding: 0.2rem 0.7rem; border-radius: 0; font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
  .bp-card-body { padding: 1.5rem; }
  .bp-card-body h3 { font-family: 'Rajdhani', sans-serif; font-size: 1.1rem; font-weight: 700; text-transform: uppercase; line-height: 1.2; margin-bottom: 0.6rem; }
  .bp-card-body p { color: #666; font-size: 0.85rem; line-height: 1.6; margin-bottom: 1rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .bp-card-meta { display: flex; justify-content: space-between; font-size: 0.72rem; color: #aaa; }
  @media (max-width: 1024px) { .bp-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 768px) { .bp-hero { padding: 6rem 0 3rem; } .bp-grid { grid-template-columns: 1fr; } }
`;

export default function BlogPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <Navbar active="blog" />
      <NavScript />

      <section className="bp-hero">
        <div className="container">
          <div className="section-label">Blog</div>
          <h1>Güncel Yazılar</h1>
          <p>Mühendislik dünyasından en son gelişmeler, teknik analizler ve derinlemesine incelemeler.</p>
        </div>
      </section>

      <CardAnimator selector=".bp-card" />
      <section className="bp-grid-section">
        <div className="container">
          <div className="bp-grid">
            {blogPosts.map((post, i) => (
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
        </div>
      </section>

      <Footer />
    </>
  )
}
