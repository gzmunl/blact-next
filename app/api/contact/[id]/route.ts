import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await req.json()
  const msg = await prisma.contactMessage.update({
    where: { id: Number(id) },
    data: { read: body.read ?? true },
  })
  return NextResponse.json(msg)
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  await prisma.contactMessage.delete({ where: { id: Number(id) } })
  return NextResponse.json({ ok: true })
}
