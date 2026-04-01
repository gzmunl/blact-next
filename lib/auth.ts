import { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = 'blact-secret-key-2026'

export interface AuthPayload {
  adminId: number
  email: string
}

export function verifyAuth(request: NextRequest): AuthPayload | null {
  const token = request.cookies.get('auth-token')?.value

  if (!token) {
    return null
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET) as AuthPayload
    return payload
  } catch {
    return null
  }
}

export function signToken(payload: AuthPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}

export { JWT_SECRET }
