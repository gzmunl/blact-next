'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import AdminLayout from '@/components/admin/AdminLayout'
import PostForm from '@/components/admin/PostForm'

export default function EditBlogPost() {
  const params = useParams()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/blog/${params.id}`)
      .then(r => r.json())
      .then(data => { setPost(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [params.id])

  if (loading) return <AdminLayout title="Yükleniyor..."><div className="admin-empty"><p>Yükleniyor...</p></div></AdminLayout>
  if (!post) return <AdminLayout title="Bulunamadı"><div className="admin-empty"><p>Yazı bulunamadı.</p></div></AdminLayout>

  return (
    <AdminLayout title="Blog Yazısını Düzenle">
      <PostForm type="blog" initialData={{
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        image: post.image,
        category: post.category,
        categorySlug: post.categorySlug,
        date: post.date,
        readTime: post.readTime,
        content: post.content,
        metaTitle: post.metaTitle || '',
        metaDescription: post.metaDescription || '',
        metaKeywords: post.metaKeywords || '',
        published: post.published,
      }} />
    </AdminLayout>
  )
}
