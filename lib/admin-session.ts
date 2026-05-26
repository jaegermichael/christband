export const ADMIN_SESSION_COOKIE = "christbrand_admin_session"
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 8

const encoder = new TextEncoder()

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || ""
}

export function getConfiguredAdminPassword() {
  return process.env.ADMIN_PASSWORD || ""
}

function toBase64Url(value: string) {
  return btoa(value).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "")
}

function fromBase64Url(value: string) {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/")
  return atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="))
}

async function hmac(value: string) {
  const secret = getSessionSecret()
  if (!secret) return ""

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  )
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value))
  return toBase64Url(String.fromCharCode(...new Uint8Array(signature)))
}

function equalSignatures(a: string, b: string) {
  if (a.length !== b.length) return false

  let result = 0
  for (let i = 0; i < a.length; i += 1) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }
  return result === 0
}

export async function createAdminSessionToken(adminUserId: string) {
  const payload = toBase64Url(
    JSON.stringify({
      sub: adminUserId,
      exp: Math.floor(Date.now() / 1000) + ADMIN_SESSION_MAX_AGE,
      v: 1,
    })
  )
  const signature = await hmac(payload)
  if (!signature) throw new Error("Admin session secret is not configured")

  return `${payload}.${signature}`
}

export async function verifyAdminSessionToken(token?: string) {
  if (!token) return false

  const [payload, signature] = token.split(".")
  if (!payload || !signature) return false

  const expected = await hmac(payload)
  if (!expected || !equalSignatures(signature, expected)) return false

  try {
    const data = JSON.parse(fromBase64Url(payload)) as { exp?: number }
    return typeof data.exp === "number" && data.exp > Math.floor(Date.now() / 1000)
  } catch {
    return false
  }
}
