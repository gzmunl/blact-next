import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog'
import { newsPosts } from '@/data/news'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://blactsystems.com'

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/cozum-eklemeli-imalat`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/cozum-kompozit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/cozum-insansiz-araclar`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/cozum-surdurulebilirlik`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/haberler`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
  ]

  const blogPages: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const newsPages: MetadataRoute.Sitemap = newsPosts.map(post => ({
    url: `${baseUrl}/haberler/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages, ...newsPages]
}
