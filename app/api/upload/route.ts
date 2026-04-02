import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const file = formData.get('file') as File | null

  if (!file) {
    return NextResponse.json({ error: 'Dosya bulunamadı' }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const ext = file.name.split('.').pop()?.toLowerCase() || 'png'
  const allowed = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg']
  if (!allowed.includes(ext)) {
    return NextResponse.json({ error: 'Desteklenmeyen dosya formatı' }, { status: 400 })
  }

  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${ext}`
  const uploadDir = path.join(process.cwd(), 'public', 'images', 'uploads')
  const filePath = path.join(uploadDir, fileName)

  await writeFile(filePath, buffer)

  return NextResponse.json({ url: `/images/uploads/${fileName}` })
}
