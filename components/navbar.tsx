'use client'

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Cross, ChevronDown, MessageCircle } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Directories",
    href: "/churches",
    children: [
      { label: "Churches", href: "/churches" },
      { label: "Pastors", href: "/pastors" },
      { label: "Ministries", href: "/organisations" },
      { label: "Christian businesses", href: "/businesses" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Shop", href: "/shop" },
  { label: "Prayer", href: "/prayer" },
  {
    label: "Resources",
    href: "/devotionals",
    children: [
      { label: "Devotionals", href: "/devotionals" },
      { label: "Christian books", href: "/books" },
      { label: "Gospel music", href: "/gospel" },
    ],
  },
  { label: "Membership", href: "/membership" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const closeMobile = () => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#3A0353]/95 backdrop-blur-xl">
      <div className="border-b border-secondary/20 bg-[#4F1A74] text-xs text-parchment">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <span className="flex items-center gap-2 font-medium tracking-wide">
            <Cross className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
            One platform. One community. Many churches. One Christ.
          </span>
          <div className="hidden items-center gap-4 md:flex">
            <a href="https://wa.me/263780396185" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-secondary">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              WhatsApp +263 78 039 6185
            </a>
            <a href="tel:+263242485604" className="hover:text-secondary">Call +263 24 2485604</a>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3" aria-label="Main navigation">
        <Link href="/" className="group flex shrink-0 items-center gap-2" onClick={closeMobile}>
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-secondary/70 bg-secondary text-secondary-foreground shadow-[0_0_0_5px_rgba(242,181,68,0.10)]">
            <Cross className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block font-serif text-xl font-bold tracking-tight text-foreground group-hover:text-secondary">ChristBand</span>
            <span className="block text-[9px] font-semibold uppercase tracking-[0.25em] text-secondary">Connect · Worship · Serve</span>
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative" onMouseEnter={() => setOpenDropdown(link.label)} onMouseLeave={() => setOpenDropdown(null)}>
                <Link
                  href={link.href}
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === link.label}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-white/5 hover:text-secondary"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                {openDropdown === link.label && (
                  <div className="absolute left-0 top-full z-50 min-w-[210px] rounded-lg border border-secondary/25 bg-[#4F1A74] p-2 shadow-2xl" role="menu">
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href} role="menuitem" className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-secondary/10 hover:text-secondary">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href} className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-white/5 hover:text-secondary">
                {link.label}
              </Link>
            ),
          )}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/membership" className="hidden rounded-md bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground shadow-[0_8px_24px_rgba(242,181,68,0.2)] hover:-translate-y-0.5 hover:bg-[#F59E51] md:block">
            Join the community
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-md border border-white/10 p-2 text-foreground hover:border-secondary/50 hover:text-secondary lg:hidden" aria-label="Toggle navigation menu" aria-expanded={mobileOpen} aria-controls="mobile-menu">
            {mobileOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-secondary/20 bg-[#4F1A74] px-4 pb-5 lg:hidden">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="border-b border-white/10">
                <button type="button" onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)} aria-expanded={openDropdown === link.label} className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold text-foreground">
                  {link.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                {openDropdown === link.label && (
                  <div className="mb-2 ml-3 border-l border-secondary/50 pl-3">
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={closeMobile} className="block py-2 text-sm text-muted-foreground hover:text-secondary">{child.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href} onClick={closeMobile} className="block border-b border-white/10 py-3 text-sm font-semibold text-foreground hover:text-secondary">{link.label}</Link>
            ),
          )}
          <Link href="/membership" onClick={closeMobile} className="mt-4 block rounded-md bg-secondary px-4 py-3 text-center text-sm font-bold text-secondary-foreground">Join the community</Link>
        </div>
      )}
    </header>
  )
}
