import bcrypt from "bcryptjs"
import { readJson, writeJson } from "@/lib/file-store"

export type AdminUser = {
  id: string
  name: string
  email: string
  passwordHash: string
  role: "OWNER" | "ADMIN" | "MODERATOR"
  active: boolean
  lastLoginAt?: string
  createdAt: string
  updatedAt: string
}

const adminUsersFile = "admin-users.json"

function defaultAdminEmail() {
  return process.env.ADMIN_EMAIL || "admin@christbrand.co.zw"
}

function defaultAdminPassword() {
  return process.env.ADMIN_PASSWORD || ""
}

export async function listAdminUsers() {
  const users = await readJson<AdminUser[]>(adminUsersFile, [])
  const email = defaultAdminEmail()

  if (users.length > 0 || !defaultAdminPassword()) return users

  const now = new Date().toISOString()
  const defaultUser: AdminUser = {
    id: crypto.randomUUID(),
    name: "Christbrand Admin",
    email,
    passwordHash: await bcrypt.hash(defaultAdminPassword(), 12),
    role: "OWNER",
    active: true,
    createdAt: now,
    updatedAt: now,
  }

  await writeJson(adminUsersFile, [defaultUser])
  return [defaultUser]
}

export async function verifyAdminUser(email: string, password: string) {
  const users = await listAdminUsers()
  const user = users.find((item) => item.email.toLowerCase() === email.toLowerCase() && item.active)
  if (!user) return null

  const valid = await bcrypt.compare(password, user.passwordHash)
  if (!valid) return null

  const updatedUser = { ...user, lastLoginAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
  await writeJson(
    adminUsersFile,
    users.map((item) => (item.id === user.id ? updatedUser : item))
  )

  return updatedUser
}
