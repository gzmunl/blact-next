import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import NavScript from '@/components/NavScript'
import Footer from '@/components/Footer'
import { newsPosts, getNewsPost } from '@/data/news'

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
  }
}

const pageStyles = `
  .sp-hero { position: relative; height: 55vh; min-height: 380px; display: flex; align-items: flex-end; background: #050507; }
  .sp-hero-img { position: absolute; inset: 0; background-size: cover; background-position: center; }
  .sp-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, #050507 0%, rgba(5,5,7,0.5) 40%, rgba(5,5,7,0.2) 100%); }
  .sp-hero-content { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; padding: 0 2.5rem 3.5rem; width: 100%; }
  .sp-cat { display: inline-block; background: rgba(226,119,29,0.15); color: #e2771d; padding: 0.3rem 0.9rem; border-radius: 0; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1.2rem; }
  .sp-hero-content h1 { font-family: 'NASA', 'Rajdhani', sans-serif; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 700; text-transform: uppercase; line-height: 1.1; color: #fff; margin-bottom: 1rem; }
  .sp-meta { display: flex; gap: 1.5rem; font-size: 0.8rem; color: rgba(255,255,255,0.5); }
  .sp-body { max-width: 750px; margin: 0 auto; padding: 3rem 2.5rem 5rem; line-height: 1.9; font-size: 1.05rem; color: #d0d0d0; background: #050507; }
  .sp-body h2 { font-family: 'Exo 2', sans-serif; font-size: 1.5rem; font-weight: 800; color: #fff; margin: 2.5rem 0 1rem; text-transform: uppercase; }
  .sp-body p { margin-bottom: 1.2rem; }
  .sp-body strong { color: #fff; }
  .sp-body a { color: #e2771d; }
  .sp-back { display: inline-flex; align-items: center; gap: 0.5rem; max-width: 750px; margin: 0 auto; padding: 0 2.5rem; color: #e2771d; font-size: 0.85rem; font-weight: 600; width: 100%; background: #050507; text-decoration: none; }
  .sp-back:hover { color: #f0943e; }
  .sp-share { max-width: 750px; margin: 0 auto; padding: 2rem 2.5rem; background: #050507; border-top: 1px solid rgba(255,255,255,0.06); display: flex; align-items: center; gap: 1rem; }
  .sp-share-label { font-size: 0.75rem; color: #666; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; }
  .sp-share a { color: #888; font-size: 0.85rem; text-decoration: none; transition: color 0.3s; }
  .sp-share a:hover { color: #e2771d; }
  @media (max-width: 768px) { .sp-hero { height: 40vh; min-height: 300px; } .sp-body { padding: 2rem 1.5rem 4rem; font-size: 1rem; } .sp-back { padding: 0 1.5rem; } .sp-share { padding: 2rem 1.5rem; } }
`

function formatDate(dateStr: string) {
  const months = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık']
  const d = new Date(dateStr)
  return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear()
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params
  const post = getNewsPost(slug)
  if (!post) notFound()

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
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

      <a href="/haberler" className="sp-back">&larr; Haberlere Dön</a>
      <article className="sp-body" dangerouslySetInnerHTML={{ __html: post.content }} />

      <div className="sp-share">
        <span className="sp-share-label">Paylaş:</span>
        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://blactsystems.com/haberler/' + post.slug)}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>

      <Footer />
    </>
  )
}
