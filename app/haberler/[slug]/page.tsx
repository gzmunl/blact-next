import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import NavScript from '@/components/NavScript'
import FooterPage from '@/components/FooterPage'
import { newsPosts, getNewsPost } from '@/data/news'
import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return newsPosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getNewsPost(slug)
  if (!post) return { title: '404 - Blact Systems' }
  return {
    title: `${post.title} - Blact Systems Haberler`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: [post.image],
    },
    alternates: { canonical: `https://blactsystems.com/haberler/${slug}` },
  }
}

const pageStyles = `
  .sp-hero { position: relative; height: 55vh; min-height: 380px; display: flex; align-items: flex-end; background: #050507; }
  .sp-hero-img { position: absolute; inset: 0; background-size: cover; background-position: center; }
  .sp-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, #050507 0%, rgba(5,5,7,0.5) 40%, rgba(5,5,7,0.2) 100%); }
  .sp-hero-content { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; padding: 0 2.5rem 3.5rem; width: 100%; }
  .sp-cat { display: inline-block; background: rgba(226,119,29,0.15); color: #e2771d; padding: 0.3rem 0.9rem; border-radius: 0; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1.2rem; }
  .sp-hero-content h1 { font-family: 'Industry', 'Barlow', sans-serif; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 700; text-transform: uppercase; line-height: 1.1; color: #fff; margin-bottom: 1rem; }
  .sp-meta { display: flex; gap: 1.5rem; font-size: 0.8rem; color: rgba(255,255,255,0.5); }
  .sp-body { max-width: 750px; margin: 0 auto; padding: 3rem 2.5rem 5rem; line-height: 1.9; font-size: 1.05rem; color: #111; background: #f0f0f0; border: 1px solid #111; }
  .sp-body h2 { font-family: 'Industry', 'Barlow', sans-serif; font-size: 1.5rem; font-weight: 800; color: #111; margin: 2.5rem 0 1rem; text-transform: uppercase; }
  .sp-body p { margin-bottom: 1.2rem; }
  .sp-body strong { color: #111; }
  .sp-body a { color: #e2771d; }
  .sp-back { display: inline-flex; align-items: center; gap: 0.5rem; max-width: 750px; margin: 0 auto; padding: 1rem 2.5rem; color: #e2771d; font-size: 0.85rem; font-weight: 600; width: 100%; background: #fff; text-decoration: none; }
  .sp-back:hover { color: #f0943e; }
  .sp-share { max-width: 750px; margin: 0 auto; padding: 2rem 2.5rem; background: #f0f0f0; border: 1px solid #111; border-top: none; display: flex; align-items: center; gap: 1rem; }
  .sp-share-label { font-size: 0.75rem; color: #999; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; }
  .sp-share a { color: #555; font-size: 0.85rem; text-decoration: none; transition: color 0.3s; }
  .sp-share a:hover { color: #e2771d; }
  .sp-content-wrap { background: #fff; padding: 3rem 0; }
  .sp-nav { max-width: 750px; margin: 0 auto; padding: 1.5rem 2.5rem; background: #f0f0f0; border: 1px solid #111; border-top: none; display: flex; justify-content: space-between; }
  .sp-nav a { font-size: 0.8rem; font-weight: 700; color: #111; text-transform: uppercase; letter-spacing: 1px; text-decoration: none; }
  .sp-nav a:hover { color: #e2771d; }
  @media (max-width: 768px) { .sp-hero { height: 35vh; min-height: 260px; } .sp-hero-content { padding: 0 1.2rem 2rem; } .sp-hero-content h1 { font-size: 1.3rem; } .sp-cat { font-size: 0.58rem; padding: 0.2rem 0.6rem; margin-bottom: 0.8rem; } .sp-meta { font-size: 0.7rem; gap: 1rem; } .sp-body { padding: 1.5rem 1.2rem 3rem; font-size: 0.88rem; line-height: 1.75; margin-left: 1rem; margin-right: 1rem; } .sp-body h2 { font-size: 1.15rem; margin: 1.8rem 0 0.8rem; } .sp-back { padding: 0.7rem 1.2rem; font-size: 0.78rem; margin-left: 1rem; margin-right: 1rem; } .sp-share { padding: 1.2rem; margin-left: 1rem; margin-right: 1rem; } .sp-share-label { font-size: 0.65rem; } .sp-share a { font-size: 0.75rem; } .sp-nav { padding: 1rem 1.2rem; margin-left: 1rem; margin-right: 1rem; } .sp-nav a { font-size: 0.7rem; } }
`

function formatDate(dateStr: string) {
  const months = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık']
  const d = new Date(dateStr)
  return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear()
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params
  let post = getNewsPost(slug)
  if (!post) {
    try {
      const dbPost = await prisma.newsPost.findUnique({ where: { slug } })
      if (dbPost && dbPost.published) {
        post = {
          slug: dbPost.slug, title: dbPost.title, excerpt: dbPost.excerpt,
          image: dbPost.image || '/images/news-am.png', category: dbPost.category,
          categorySlug: dbPost.categorySlug,
          date: dbPost.date instanceof Date ? dbPost.date.toISOString().split('T')[0] : String(dbPost.date),
          content: dbPost.content,
        }
      }
    } catch (e) {}
  }
  if (!post) notFound()

  let allPosts = [...newsPosts]
  try {
    const dbPosts = await prisma.newsPost.findMany({ where: { published: true }, orderBy: { date: 'desc' } })
    const staticSlugs = new Set(newsPosts.map(p => p.slug))
    dbPosts.forEach(p => {
      if (!staticSlugs.has(p.slug)) allPosts.push({ slug: p.slug, title: p.title, excerpt: p.excerpt, image: p.image || '', category: p.category, categorySlug: p.categorySlug, date: p.date instanceof Date ? p.date.toISOString().split('T')[0] : String(p.date), content: p.content })
    })
  } catch (e) {}
  allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    image: `https://blactsystems.com${post.image}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Blact Systems" },
    publisher: { "@type": "Organization", name: "Blact Systems", logo: { "@type": "ImageObject", url: "https://blactsystems.com/images/favicon.svg" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://blactsystems.com/haberler/${post.slug}` },
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <NavScript />

      <section className="sp-hero">
        <div className="sp-hero-img" style={{ backgroundImage: `url('${post.image}')` }} />
        <div className="sp-hero-overlay" />
        <div className="sp-hero-content">
          <span className="sp-cat">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="sp-meta">
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </section>

      <div className="sp-content-wrap">
        <a href="/haberler" className="sp-back">&larr; Haberlere Dön</a>
        <article className="sp-body" dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="sp-share">
          <span className="sp-share-label">Paylaş:</span>
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://blactsystems.com/haberler/' + post.slug)}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="sp-nav">
          {prevPost ? <a href={`/haberler/${prevPost.slug}`}>&larr; Önceki Haber</a> : <span />}
          {nextPost ? <a href={`/haberler/${nextPost.slug}`}>Sonraki Haber &rarr;</a> : <span />}
        </div>
      </div>

      <FooterPage />
    </>
  )
}
