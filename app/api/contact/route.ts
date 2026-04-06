import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(messages)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, surname, email, subject, message } = body

    if (!name || !surname || !email || !message) {
      return NextResponse.json({ error: 'Gerekli alanlar eksik' }, { status: 400 })
    }

    const msg = await prisma.contactMessage.create({
      data: { name, surname, email, subject: subject || '', message },
    })

    return NextResponse.json(msg, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
