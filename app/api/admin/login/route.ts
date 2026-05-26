import { NextResponse } from "next/server"
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_MAX_AGE,
  createAdminSessionToken,
} from "@/lib/admin-session"
import { verifyAdminUser } from "@/lib/admin-users"

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { password?: string } | null
  const email = "email" in (body || {}) && typeof (body as { email?: unknown }).email === "string"
    ? (body as { email: string }).email
    : process.env.ADMIN_EMAIL || "admin@christbrand.co.zw"
  const adminUser = body?.password ? await verifyAdminUser(email, body.password) : null

  if (!adminUser) {
    return NextResponse.json({ error: "Incorrect password. Please try again." }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: await createAdminSessionToken(adminUser.id),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: ADMIN_SESSION_MAX_AGE,
    path: "/",
  })

  return response
}
