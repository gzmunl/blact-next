'use client'
import AdminLayout from '@/components/admin/AdminLayout'
import PostForm from '@/components/admin/PostForm'

export default function NewBlogPost() {
  return (
    <AdminLayout title="Yeni Blog Yazısı">
      <PostForm type="blog" />
    </AdminLayout>
  )
}
