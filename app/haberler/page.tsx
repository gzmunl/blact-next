import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavScript from '@/components/NavScript'
import { newsPosts, newsCategories } from '@/data/news'
import HaberlerClient from './client'

export const metadata: Metadata = {
  title: 'Haberler - Blact Systems',
  description: 'Blact Systems — Mühendislik ve ileri teknoloji dünyasından son haberler.',
}

const pageStyles = `
  .np-hero { background: #050507; padding: 8rem 0 4rem; position: relative; overflow: hidden; }
  .np-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 70% 50%, rgba(226,119,29,0.05) 0%, transparent 60%); }
  .np-hero .container { position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; padding: 0 2.5rem; }
  .np-hero .section-label { color: var(--accent); font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; margin-bottom: 0.8rem; display: flex; align-items: center; gap: 1rem; }
  .np-hero .section-label::before { content: ''; width: 40px; height: 2px; background: var(--accent); }
  .np-hero h1 { font-family: 'Rajdhani', sans-serif; font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 700; color: #fff; text-transform: uppercase; line-height: 1.05; margin-bottom: 1rem; }
  .np-hero p { color: #888; max-width: 500px; line-height: 1.7; font-size: 0.95rem; }
  .np-section { background: #f5f5f7; padding: 0 0 5rem; }
  .np-section .container { max-width: 1200px; margin: 0 auto; padding: 0 2.5rem; }
  .np-filters { display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 2.5rem; padding-top: 2rem; }
  .np-filter { padding: 0.5rem 1.2rem; border-radius: 0; border: 1px solid #ddd; background: transparent; color: #666; font-size: 0.78rem; font-weight: 600; cursor: pointer; transition: all 0.3s; }
  .np-filter:hover, .np-filter.active { background: #e2771d; color: #fff; border-color: #e2771d; }
  .np-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
  .np-card { position: relative; overflow: hidden; border-radius: 0; min-height: 280px; display: flex; align-items: flex-end; text-decoration: none; color: #fff; opacity: 0; transform: translateY(20px); transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
  .np-card.visible { opacity: 1; transform: translateY(0); }
  .np-card:hover { transform: translateY(-4px); color: #fff; }
  .np-card-img { position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
  .np-card:hover .np-card-img { transform: scale(1.06); }
  .np-card-overlay { position: absolute; inset: 0; background: linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.05) 100%); transition: background 0.5s; }
  .np-card:hover .np-card-overlay { background: linear-gradient(0deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%); }
  .np-card-body { position: relative; z-index: 2; padding: 1.5rem; width: 100%; }
  .np-card-meta { display: flex; align-items: center; gap: 0.8rem; margin-bottom: 0.5rem; }
  .np-card-cat { display: inline-block; font-size: 0.6rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #e2771d; }
  .np-card-date { font-size: 0.6rem; color: rgba(255,255,255,0.4); letter-spacing: 1px; }
  .np-card-body h3 { font-family: 'Rajdhani', sans-serif; font-size: 1.1rem; font-weight: 700; text-transform: uppercase; line-height: 1.25; margin-bottom: 0.4rem; letter-spacing: 0.03em; }
  .np-card-body p { font-size: 0.8rem; color: rgba(255,255,255,0.6); line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  @media (max-width: 1024px) { .np-grid { grid-template-columns: 1fr; } }
  @media (max-width: 768px) { .np-hero { padding: 6rem 0 3rem; } .np-card { min-height: 240px; } }
`;

export default function HaberlerPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <Navbar active="haberler" />
      <NavScript />
      <section className="np-hero">
        <div className="container">
          <div className="section-label">Haberler</div>
          <h1>Sektörden Haberler</h1>
          <p>Mühendislik ve ileri teknoloji dünyasından son gelişmeler.</p>
        </div>
      </section>
      <section className="np-section">
        <div className="container">
          <HaberlerClient categories={newsCategories} posts={newsPosts} />
        </div>
      </section>
      <Footer />
    </>
  )
}
