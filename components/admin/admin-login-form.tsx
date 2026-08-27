"use client"

import { FormEvent, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Cross, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AdminLoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState("admin@christbrand.co.zw")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const next = searchParams.get("next") || "/admin"

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError("")
    setLoading(true)

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    setLoading(false)

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { error?: string } | null
      setError(data?.error || "Unable to sign in. Please try again.")
      return
    }

    router.replace(next.startsWith("/admin") ? next : "/admin")
    router.refresh()
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#2F0B20] via-[#551839] to-[#3B1027] px-4">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#D4AF37]/5" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#D4AF37]/5" />
      </div>

      <div className="relative w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C49B2F] shadow-xl">
            <Cross className="h-8 w-8 text-[#2F0B20]" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-[#FFFDF7]">ChristBand Admin</h1>
          <p className="mt-1 text-sm text-[#D8B9CB]">Sign in to continue to the admin panel</p>
        </div>

        <form
          onSubmit={handleLogin}
          className="rounded-2xl border border-[#FFFDF7]/10 bg-[#FFFDF7]/5 p-6 shadow-2xl backdrop-blur-sm"
        >
          <div className="mb-4">
            <label htmlFor="admin-email" className="mb-2 block text-sm font-medium text-[#D4AF37]">
              Admin Email
            </label>
            <Input
              id="admin-email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setError("")
              }}
              placeholder="admin@christbrand.co.zw"
              className="mb-4 border-[#FFFDF7]/15 bg-[#FFFDF7]/5 text-[#FFFDF7] placeholder:text-[#D8B9CB]/50 focus-visible:border-[#D4AF37] focus-visible:ring-[#D4AF37]/30"
            />
            <label htmlFor="admin-password" className="mb-2 block text-sm font-medium text-[#D4AF37]">
              Admin Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#D8B9CB]" />
              <Input
                id="admin-password"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                  setError("")
                }}
                placeholder="Enter admin password"
                className="border-[#FFFDF7]/15 bg-[#FFFDF7]/5 pl-10 text-[#FFFDF7] placeholder:text-[#D8B9CB]/50 focus-visible:border-[#D4AF37] focus-visible:ring-[#D4AF37]/30"
                autoFocus
              />
            </div>
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C49B2F] font-semibold text-[#2F0B20] hover:brightness-110 disabled:opacity-70"
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        <p className="mt-6 text-center text-xs text-[#D8B9CB]/60">
          ChristBand Admin Panel - authorized personnel only
        </p>
      </div>
    </main>
  )
}
