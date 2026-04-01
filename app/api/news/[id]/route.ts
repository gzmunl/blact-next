import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { verifyAuth } from '@/lib/auth'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const post = await prisma.newsPost.findUnique({
      where: { id: parseInt(id) },
    })

    if (!post) {
      return NextResponse.json({ error: 'News post not found' }, { status: 404 })
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error fetching news post:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = verifyAuth(request)
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params
    const data = await request.json()

    const post = await prisma.newsPost.update({
      where: { id: parseInt(id) },
      data: {
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt,
        image: data.image,
        category: data.category,
        categorySlug: data.categorySlug,
        date: data.date ? new Date(data.date) : undefined,
        content: data.content,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        metaKeywords: data.metaKeywords,
        seoScore: data.seoScore,
        published: data.published,
      },
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error updating news post:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = verifyAuth(request)
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params
    await prisma.newsPost.delete({
      where: { id: parseInt(id) },
    })

    return NextResponse.json({ message: 'News post deleted' })
  } catch (error) {
    console.error('Error deleting news post:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
