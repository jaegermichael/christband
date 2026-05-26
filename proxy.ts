import { NextRequest, NextResponse } from "next/server"
import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/admin-session"

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isAdminLogin = pathname === "/admin-login"
  const isAdminRoute = pathname === "/admin" || pathname.startsWith("/admin/")
  const isProtectedAdminApi = pathname.startsWith("/api/admin/") && !pathname.startsWith("/api/admin/login")
  const hasSession = await verifyAdminSessionToken(request.cookies.get(ADMIN_SESSION_COOKIE)?.value)

  if (isProtectedAdminApi && !hasSession) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  if (isAdminRoute && !hasSession) {
    const loginUrl = request.nextUrl.clone()
    loginUrl.pathname = "/admin-login"
    loginUrl.searchParams.set("next", `${pathname}${request.nextUrl.search}`)
    return NextResponse.redirect(loginUrl)
  }

  if (isAdminLogin && hasSession) {
    return NextResponse.redirect(new URL("/admin", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/admin-login", "/api/admin/:path*"],
}
