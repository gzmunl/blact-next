import { PrismaClient } from '../app/generated/prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'
import { blogPosts } from '../data/blog'
import { newsPosts } from '../data/news'
import path from 'path'
const bcrypt = require('bcryptjs')

const dbPath = path.resolve(process.cwd(), 'dev.db')
const adapter = new PrismaLibSql({ url: 'file:' + dbPath })
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('Seeding database...')

  // Seed blog posts
  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        image: post.image,
        category: post.category,
        categorySlug: post.categorySlug,
        date: new Date(post.date),
        readTime: post.readTime,
        content: post.content,
      },
    })
  }
  console.log(`Seeded ${blogPosts.length} blog posts`)

  // Seed news posts
  for (const post of newsPosts) {
    await prisma.newsPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        image: post.image,
        category: post.category,
        categorySlug: post.categorySlug,
        date: new Date(post.date),
        content: post.content,
      },
    })
  }
  console.log(`Seeded ${newsPosts.length} news posts`)

  // Seed admin user
  const passwordHash = await bcrypt.hash('admin123', 10)
  await prisma.admin.upsert({
    where: { email: 'admin@blactsystems.com' },
    update: {},
    create: {
      email: 'admin@blactsystems.com',
      passwordHash,
    },
  })
  console.log('Seeded admin user: admin@blactsystems.com')

  console.log('Seeding complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
