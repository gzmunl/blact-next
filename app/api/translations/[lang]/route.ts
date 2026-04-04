import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(req: NextRequest, { params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (lang !== 'tr' && lang !== 'en') {
    return NextResponse.json({ error: 'Invalid language' }, { status: 400 })
  }

  const filePath = path.join(process.cwd(), 'data', 'translations', `${lang}.json`)
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Translation file not found' }, { status: 404 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (lang !== 'tr' && lang !== 'en') {
    return NextResponse.json({ error: 'Invalid language' }, { status: 400 })
  }

  try {
    const body = await req.json()
    const filePath = path.join(process.cwd(), 'data', 'translations', `${lang}.json`)
    fs.writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf-8')
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
  }
}
