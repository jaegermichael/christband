"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { Cross, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AdminLoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/admin"

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl,
    })

    setSubmitting(false)

    if (!res || res.error) {
      setError("Invalid credentials or not an admin")
      return
    }

    router.push(res.url || callbackUrl)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#2D1B4E] via-[#4B2E83] to-[#3A2268] px-4">
      <div className="relative w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C49B2F] shadow-xl">
            <Cross className="h-8 w-8 text-[#2D1B4E]" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-[#FFFDF7]">Christbrand Admin</h1>
          <p className="mt-1 text-sm text-[#B8A8D0]">Sign in to continue</p>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-[#FFFDF7]/10 bg-[#FFFDF7]/5 p-6 shadow-2xl backdrop-blur-sm">
          <div className="mb-4">
            <label htmlFor="admin-email" className="mb-2 block text-sm font-medium text-[#D4AF37]">Email</label>
            <Input
              id="admin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter admin email"
              className="border-[#FFFDF7]/15 bg-[#FFFDF7]/5 text-[#FFFDF7] placeholder:text-[#B8A8D0]/50 focus-visible:border-[#D4AF37] focus-visible:ring-[#D4AF37]/30"
              autoComplete="email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="admin-password" className="mb-2 block text-sm font-medium text-[#D4AF37]">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#B8A8D0]" />
              <Input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="border-[#FFFDF7]/15 bg-[#FFFDF7]/5 pl-10 text-[#FFFDF7] placeholder:text-[#B8A8D0]/50 focus-visible:border-[#D4AF37] focus-visible:ring-[#D4AF37]/30"
                autoComplete="current-password"
              />
            </div>
          </div>

          {error && <p className="mb-4 text-sm text-red-400">{error}</p>}

          <Button type="submit" className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C49B2F] font-semibold text-[#2D1B4E] hover:brightness-110" disabled={submitting}>
            {submitting ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <p className="mt-6 text-center text-xs text-[#B8A8D0]/60">Christbrand Admin Panel — Authorized personnel only</p>
      </div>
    </div>
  )
}
