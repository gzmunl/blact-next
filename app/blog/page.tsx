import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavScript from '@/components/NavScript'
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
  .bp-featured { margin-top: -2rem; position: relative; z-index: 3; }
  .bp-featured .container { max-width: 1200px; margin: 0 auto; padding: 0 2.5rem; }
  .bp-feat-card { display: grid; grid-template-columns: 1.3fr 1fr; min-height: 400px; border-radius: 16px; overflow: hidden; background: #12121a; text-decoration: none; color: #fff; transition: transform 0.3s; }
  .bp-feat-card:hover { transform: translateY(-4px); color: #fff; }
  .bp-feat-img { background-size: cover; background-position: center; }
  .bp-feat-body { padding: 3rem; display: flex; flex-direction: column; justify-content: center; }
  .bp-feat-cat { display: inline-block; background: rgba(226,119,29,0.15); color: #e2771d; padding: 0.3rem 0.8rem; border-radius: 6px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; width: fit-content; }
  .bp-feat-body h2 { font-family: 'Rajdhani', sans-serif; font-size: 1.6rem; font-weight: 700; text-transform: uppercase; line-height: 1.15; margin-bottom: 1rem; }
  .bp-feat-body p { color: #999; font-size: 0.9rem; line-height: 1.7; margin-bottom: 1.5rem; }
  .bp-feat-meta { display: flex; gap: 1.5rem; font-size: 0.75rem; color: #666; }
  .bp-grid-section { background: #fff; padding: 4rem 0 5rem; }
  .bp-grid-section .container { max-width: 1200px; margin: 0 auto; padding: 0 2.5rem; }
  .bp-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
  .bp-card { background: #fff; border-radius: 14px; overflow: hidden; border: 1px solid #eee; text-decoration: none; color: #111; transition: transform 0.3s, box-shadow 0.3s; }
  .bp-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); color: #111; }
  .bp-card-img { height: 200px; background-size: cover; background-position: center; position: relative; }
  .bp-card-cat { position: absolute; top: 1rem; left: 1rem; background: rgba(226,119,29,0.9); color: #fff; padding: 0.2rem 0.7rem; border-radius: 4px; font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
  .bp-card-body { padding: 1.5rem; }
  .bp-card-body h3 { font-family: 'Rajdhani', sans-serif; font-size: 1.1rem; font-weight: 700; text-transform: uppercase; line-height: 1.2; margin-bottom: 0.6rem; }
  .bp-card-body p { color: #666; font-size: 0.85rem; line-height: 1.6; margin-bottom: 1rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .bp-card-meta { display: flex; justify-content: space-between; font-size: 0.72rem; color: #aaa; }
  @media (max-width: 1024px) { .bp-grid { grid-template-columns: repeat(2, 1fr); } .bp-feat-card { grid-template-columns: 1fr; } .bp-feat-img { min-height: 250px; } }
  @media (max-width: 768px) { .bp-hero { padding: 6rem 0 3rem; } .bp-grid { grid-template-columns: 1fr; } .bp-feat-body { padding: 2rem; } .bp-feat-body h2 { font-size: 1.3rem; } }
`;

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

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

      {featured && (
        <section className="bp-featured">
          <div className="container">
            <a href={`/post/${featured.slug}`} className="bp-feat-card">
              <div className="bp-feat-img" style={{ backgroundImage: `url('${featured.image}')` }} />
              <div className="bp-feat-body">
                <span className="bp-feat-cat">{featured.category}</span>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <div className="bp-feat-meta">
                  <span>{formatDate(featured.date)}</span>
                  <span>{featured.readTime} dk okuma</span>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      <section className="bp-grid-section">
        <div className="container">
          <div className="bp-grid">
            {rest.map(post => (
              <a key={post.slug} href={`/post/${post.slug}`} className="bp-card">
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
