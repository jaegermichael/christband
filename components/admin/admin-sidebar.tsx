"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Church,
  UserCheck,
  Megaphone,
  CreditCard,
  ArrowLeft,
  Menu,
  X,
  Cross,
} from "lucide-react"
import { useState } from "react"

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Members", href: "/admin/members", icon: Users },
  { label: "Churches", href: "/admin/churches", icon: Church },
  { label: "Pastors", href: "/admin/pastors", icon: UserCheck },
  { label: "Adverts", href: "/admin/ads", icon: Megaphone },
  { label: "Payments", href: "/admin/payments", icon: CreditCard },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin"
    return pathname.startsWith(href)
  }

  const sidebar = (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#2D1B4E] to-[#3A2268]">
      {/* Branding */}
      <div className="flex items-center gap-3 border-b border-[#FFFDF7]/10 px-5 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#C49B2F] shadow-md">
          <Cross className="h-5 w-5 text-[#2D1B4E]" />
        </div>
        <div>
          <h2 className="font-serif text-lg font-bold text-[#FFFDF7]">Christbrand</h2>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#D4AF37]">
            Admin Panel
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                active
                  ? "bg-[#FFFDF7]/10 text-[#D4AF37] shadow-sm"
                  : "text-[#B8A8D0] hover:bg-[#FFFDF7]/5 hover:text-[#FFFDF7]"
              }`}
            >
              <Icon className="h-4.5 w-4.5 shrink-0" />
              <span className="flex-1">{item.label}</span>
              {item.pending && item.pending > 0 && (
                <span
                  className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-bold ${
                    active
                      ? "bg-[#D4AF37] text-[#2D1B4E]"
                      : "bg-[#FFFDF7]/15 text-[#FFFDF7]/70"
                  }`}
                >
                  {item.pending}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Back to site */}
      <div className="border-t border-[#FFFDF7]/10 px-3 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#B8A8D0] transition-colors hover:bg-[#FFFDF7]/5 hover:text-[#FFFDF7]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Site
        </Link>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 lg:block">{sidebar}</aside>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-xl bg-[#4B2E83] text-[#FFFDF7] shadow-lg lg:hidden"
        aria-label="Open admin menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 z-50 w-64">
            {sidebar}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute right-3 top-5 flex h-8 w-8 items-center justify-center rounded-lg text-[#FFFDF7]/60 hover:text-[#FFFDF7]"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </aside>
        </>
      )}
    </>
  )
}
