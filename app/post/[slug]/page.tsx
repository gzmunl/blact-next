import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import NavScript from '@/components/NavScript'
import { newsPosts, getNewsPost } from '@/data/news'
import { blogPosts, getBlogPost } from '@/data/blog'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const allSlugs = [
    ...newsPosts.map(p => ({ slug: p.slug })),
    ...blogPosts.map(p => ({ slug: p.slug })),
  ];
  return allSlugs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsPost(slug) || getBlogPost(slug);
  if (!post) return { title: '404 - Blact Systems' };
  return {
    title: `${post.title} - Blact Systems`,
    description: post.excerpt,
  };
}

const pageStyles = `
  .sp-hero { position: relative; height: 55vh; min-height: 380px; display: flex; align-items: flex-end; background: #050507; }
  .sp-hero-img { position: absolute; inset: 0; background-size: cover; background-position: center; }
  .sp-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, #050507 0%, rgba(5,5,7,0.5) 40%, rgba(5,5,7,0.2) 100%); }
  .sp-hero-content { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; padding: 0 2.5rem 3.5rem; width: 100%; }
  .sp-cat { display: inline-block; background: rgba(226,119,29,0.15); color: #e2771d; padding: 0.3rem 0.9rem; border-radius: 0; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1.2rem; }
  .sp-hero-content h1 { font-family: 'Rajdhani', sans-serif; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 700; text-transform: uppercase; line-height: 1.1; color: #fff; margin-bottom: 1rem; }
  .sp-meta { display: flex; gap: 1.5rem; font-size: 0.8rem; color: rgba(255,255,255,0.5); }
  .sp-body { max-width: 750px; margin: 0 auto; padding: 3rem 2.5rem 5rem; line-height: 1.9; font-size: 1.05rem; color: #d0d0d0; background: #050507; }
  .sp-body h2 { font-family: 'Rajdhani', sans-serif; font-size: 1.5rem; font-weight: 700; color: #fff; margin: 2.5rem 0 1rem; text-transform: uppercase; }
  .sp-body p { margin-bottom: 1.2rem; }
  .sp-body strong { color: #fff; }
  .sp-body a { color: #e2771d; }
  .sp-back { display: inline-flex; align-items: center; gap: 0.5rem; max-width: 750px; margin: 0 auto; padding: 0 2.5rem; color: #e2771d; font-size: 0.85rem; font-weight: 600; width: 100%; background: #050507; text-decoration: none; }
  .sp-back:hover { color: #f0943e; }
  @media (max-width: 768px) { .sp-hero { height: 40vh; min-height: 300px; } .sp-body { padding: 2rem 1.5rem 4rem; font-size: 1rem; } .sp-back { padding: 0 1.5rem; } }
`;

function formatDate(dateStr: string) {
  const months = ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'];
  const d = new Date(dateStr);
  return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const newsPost = getNewsPost(slug);
  const blogPost = getBlogPost(slug);
  const post = newsPost || blogPost;
  const isNews = !!newsPost;

  if (!post) notFound();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <Navbar active="post" />
      <NavScript />

      <section className="sp-hero">
        <div className="sp-hero-img" style={{ backgroundImage: `url('${post.image}')` }} />
        <div className="sp-hero-overlay" />
        <div className="sp-hero-content">
          <span className="sp-cat">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="sp-meta">
            <span>{formatDate(post.date)}</span>
            {'readTime' in post && <span>{(post as any).readTime} dk okuma</span>}
          </div>
        </div>
      </section>

      <a href={isNews ? '/haberler' : '/blog'} className="sp-back">
        &larr; {isNews ? 'Haberlere' : "Blog'a"} Dön
      </a>

      <article className="sp-body" dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  )
}
