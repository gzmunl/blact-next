'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import AdminLayout from '@/components/admin/AdminLayout'
import PostForm from '@/components/admin/PostForm'

export default function EditNewsPost() {
  const params = useParams()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/news/${params.id}`)
      .then(r => r.json())
      .then(data => { setPost(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [params.id])

  if (loading) return <AdminLayout title="Yükleniyor..."><div className="admin-empty"><p>Yükleniyor...</p></div></AdminLayout>
  if (!post) return <AdminLayout title="Bulunamadı"><div className="admin-empty"><p>Haber bulunamadı.</p></div></AdminLayout>

  return (
    <AdminLayout title="Haberi Düzenle">
      <PostForm type="news" initialData={{
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        image: post.image,
        category: post.category,
        categorySlug: post.categorySlug,
        date: post.date,
        content: post.content,
        metaTitle: post.metaTitle || '',
        metaDescription: post.metaDescription || '',
        metaKeywords: post.metaKeywords || '',
        published: post.published,
      }} />
    </AdminLayout>
  )
}
