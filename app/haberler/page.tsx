import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavScript from '@/components/NavScript'
import { newsPosts as staticPosts, newsCategories } from '@/data/news'
import HaberlerClient from './client'
import prisma from '@/lib/prisma'

export const metadata: Metadata = {
  title: 'Haberler - Blact Systems',
  description: 'Blact Systems — Mühendislik ve ileri teknoloji dünyasından son haberler.',
  openGraph: {
    title: 'Haberler - Blact Systems',
    description: 'Mühendislik ve ileri teknoloji dünyasından son haberler.',
    images: ['/images/hero-laser.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haberler - Blact Systems',
    description: 'Mühendislik ve ileri teknoloji dünyasından son haberler.',
    images: ['/images/hero-laser.png'],
  },
  alternates: { canonical: 'https://blactsystems.com/haberler' },
}

const pageStyles = `
  .np-hero { background: #050507; padding: 8rem 0 4rem; position: relative; overflow: hidden; }
  .np-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 70% 50%, rgba(226,119,29,0.05) 0%, transparent 60%); }
  .np-hero .container { position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; padding: 0 2.5rem; }
  .np-hero .section-label { color: var(--accent); font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; margin-bottom: 0.8rem; display: flex; align-items: center; gap: 1rem; }
  .np-hero .section-label::before { content: ''; width: 40px; height: 2px; background: var(--accent); }
  .np-hero h1 { font-family: 'Industry', 'Barlow', sans-serif; font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 700; color: #fff; text-transform: uppercase; line-height: 1.05; margin-bottom: 1rem; }
  .np-hero p { color: #888; max-width: 500px; line-height: 1.7; font-size: 0.95rem; }
  .np-section { background: #f5f5f7; padding: 2.5rem 0 5rem; }
  .np-section .container { max-width: 1200px; margin: 0 auto; padding: 0 2.5rem; }
  .np-search { padding-top: 2rem; margin-bottom: 1.2rem; }
  .np-search-input { width: 100%; padding: 0.8rem 1.2rem; border: 1px solid #ddd; background: #fff; font-size: 0.9rem; outline: none; transition: border-color 0.3s; }
  .np-search-input:focus { border-color: #e2771d; }
  .np-filters { display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 2.5rem; }
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
  .np-card-body h3 { font-family: 'Industry', 'Barlow', sans-serif; font-size: 1.1rem; font-weight: 800; text-transform: uppercase; line-height: 1.25; margin-bottom: 0.4rem; letter-spacing: 0.03em; }
  .np-card-body p { font-size: 0.8rem; color: rgba(255,255,255,0.6); line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .np-layout { display: grid; grid-template-columns: 1fr 320px; gap: 2.5rem; align-items: start; }
  .np-main { min-width: 0; }
  .np-sidebar { position: sticky; top: 5rem; padding-top: 2rem; }
  .np-sidebar-box { background: #fff; border: 1px solid #ddd; padding: 1.8rem; margin-bottom: 1.5rem; }
  .np-sidebar-box h4 { font-family: 'Industry', 'Barlow', sans-serif; font-size: 0.85rem; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; color: #e2771d; margin-bottom: 1.2rem; }
  .np-sidebar-box ul { list-style: none; padding: 0; margin: 0; }
  .np-sidebar-box li { padding: 0.6rem 0; border-bottom: 1px solid #eee; }
  .np-sidebar-box li:last-child { border-bottom: none; }
  .np-sidebar-box li a { color: #333; font-size: 0.88rem; text-decoration: none; transition: color 0.3s; }
  .np-sidebar-box li a:hover { color: #e2771d; }
  .np-sidebar-box p { color: #666; font-size: 0.85rem; line-height: 1.6; }
  .np-sidebar-box input { width: 100%; padding: 0.7rem 1rem; border: 1px solid #ddd; background: #f9f9f9; font-size: 0.85rem; outline: none; margin-bottom: 0.8rem; }
  .np-sidebar-box input:focus { border-color: #e2771d; }
  .np-sidebar-box button { width: 100%; padding: 0.7rem; background: #e2771d; color: #fff; border: none; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; transition: background 0.3s; }
  .np-sidebar-box button:hover { background: #c0601a; }
  .np-cat-count { color: #999; font-size: 0.8rem; }
  @media (max-width: 1024px) { .np-layout { grid-template-columns: 1fr; } .np-sidebar { position: relative; top: 0; } .np-grid { grid-template-columns: 1fr; } }
  @media (max-width: 768px) { .np-hero { padding: 6rem 0 3rem; } .np-card { min-height: 240px; } .np-filters { gap: 0.4rem; } .np-filter { padding: 0.35rem 0.75rem; font-size: 0.68rem; flex: 0 0 auto; } }
`;

export const dynamic = 'force-dynamic'

export default async function HaberlerPage() {
  let dbPosts: any[] = []
  try {
    dbPosts = await prisma.newsPost.findMany({
      where: { published: true },
      orderBy: { date: 'desc' },
    })
  } catch (e) {}

  const dbPostsMapped = dbPosts.map(p => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    image: p.image || '/images/news-am.png',
    category: p.category,
    categorySlug: p.categorySlug,
    date: p.date instanceof Date ? p.date.toISOString().split('T')[0] : p.date,
  }))

  const staticSlugs = new Set(staticPosts.map(p => p.slug))
  const allPosts = [...dbPostsMapped.filter(p => !staticSlugs.has(p.slug)), ...staticPosts]
  allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <Navbar />
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
          <HaberlerClient categories={newsCategories} posts={allPosts} />
        </div>
      </section>
      <Footer />
    </>
  )
}
