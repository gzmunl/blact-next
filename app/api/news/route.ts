import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { verifyAuth } from '@/lib/auth'

export async function GET() {
  try {
    const posts = await prisma.newsPost.findMany({
      orderBy: { date: 'desc' },
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching news posts:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  const auth = verifyAuth(request)
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await request.json()

    const post = await prisma.newsPost.create({
      data: {
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt,
        image: data.image,
        category: data.category,
        categorySlug: data.categorySlug,
        date: new Date(data.date),
        content: data.content,
        metaTitle: data.metaTitle || null,
        metaDescription: data.metaDescription || null,
        metaKeywords: data.metaKeywords || null,
        seoScore: data.seoScore || 0,
        published: data.published !== undefined ? data.published : true,
      },
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('Error creating news post:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
