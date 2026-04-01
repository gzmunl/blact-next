'use client'
import AdminLayout from '@/components/admin/AdminLayout'
import PostForm from '@/components/admin/PostForm'

export default function NewNewsPost() {
  return (
    <AdminLayout title="Yeni Haber">
      <PostForm type="news" />
    </AdminLayout>
  )
}
