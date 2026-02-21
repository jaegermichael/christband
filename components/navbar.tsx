"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Cross, ChevronDown } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Directories",
    href: "#",
    children: [
      { label: "Church Directory", href: "/churches" },
      { label: "Pastors Directory", href: "/pastors" },
      { label: "Church Organisations", href: "/organisations" },
      { label: "Christian Businesses", href: "/businesses" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Shop", href: "/shop" },
  { label: "Prayer Corner", href: "/prayer" },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Word of Motivation", href: "/devotionals" },
      { label: "Christian Books", href: "/books" },
    ],
  },
  { label: "Membership", href: "/membership" },
  { label: "Subscribe", href: "/subscriptions" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E8E0D0] bg-[#FFFDF7]/95 backdrop-blur-md">
      {/* Top bar */}
      <div className="bg-[#4B2E83] text-[#FFFDF7]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs">
          <span className="flex items-center gap-1.5">
            <Cross className="h-3 w-3 text-[#D4AF37]" />
            Body of Christ Christian Networking — Zimbabwe
          </span>
          <div className="hidden items-center gap-4 md:flex">
            <a href="tel:+263772000000" className="hover:text-[#D4AF37] transition-colors">+263 772 000 000</a>
            <a href="mailto:info@christbrand.co.zw" className="hover:text-[#D4AF37] transition-colors">info@christbrand.co.zw</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4B2E83] to-[#6B4EAA]">
            <Cross className="h-5 w-5 text-[#D4AF37]" />
          </div>
          <div>
            <span className="font-serif text-xl font-bold text-[#4B2E83]">Christbrand</span>
            <span className="block text-[10px] uppercase tracking-widest text-[#6B5A8A]">Body of Christ</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-[#2D1B4E] transition-colors hover:bg-[#F5F0E8] hover:text-[#4B2E83]">
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {openDropdown === link.label && (
                  <div className="absolute left-0 top-full z-50 min-w-[200px] rounded-xl border border-[#E8E0D0] bg-[#FFFDF7] p-2 shadow-lg">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-[#2D1B4E] transition-colors hover:bg-[#F5F0E8] hover:text-[#4B2E83]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#2D1B4E] transition-colors hover:bg-[#F5F0E8] hover:text-[#4B2E83]"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/membership"
            className="hidden rounded-lg bg-gradient-to-r from-[#4B2E83] to-[#6B4EAA] px-4 py-2 text-sm font-medium text-[#FFFDF7] shadow-md transition-all hover:shadow-lg hover:brightness-110 md:block"
          >
            Join Us
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-[#4B2E83] transition-colors hover:bg-[#F5F0E8] lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[#E8E0D0] bg-[#FFFDF7] px-4 pb-4 lg:hidden">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                  className="flex w-full items-center justify-between py-3 text-sm font-medium text-[#2D1B4E]"
                >
                  {link.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === link.label && (
                  <div className="ml-4 border-l-2 border-[#D4AF37] pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-[#6B5A8A] hover:text-[#4B2E83]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-[#F0EBE0] py-3 text-sm font-medium text-[#2D1B4E] hover:text-[#4B2E83]"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/membership"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block rounded-lg bg-gradient-to-r from-[#4B2E83] to-[#6B4EAA] px-4 py-2.5 text-center text-sm font-medium text-[#FFFDF7] shadow-md"
          >
            Join Us
          </Link>
        </div>
      )}
    </header>
  )
}
