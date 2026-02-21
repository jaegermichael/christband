import Link from "next/link"
import { Cross, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react"

const footerSections = [
  {
    title: "Directories",
    links: [
      { label: "Church Directory", href: "/churches" },
      { label: "Pastors Directory", href: "/pastors" },
      { label: "Church Organisations", href: "/organisations" },
      { label: "Christian Businesses", href: "/businesses" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Events Calendar", href: "/events" },
      { label: "Prayer Corner", href: "/prayer" },
      { label: "Word of Motivation", href: "/devotionals" },
      { label: "Christian Books", href: "/books" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Christian Shop", href: "/shop" },
      { label: "Membership", href: "/membership" },
      { label: "Subscriptions", href: "/subscriptions" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-[#E8E0D0] bg-[#2D1B4E] text-[#FFFDF7]">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#E8CC6A]">
                <Cross className="h-5 w-5 text-[#2D1B4E]" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-[#FFFDF7]">Christbrand</span>
                <span className="block text-[10px] uppercase tracking-widest text-[#D4AF37]">Body of Christ</span>
              </div>
            </Link>
            <p className="mb-4 text-sm leading-relaxed text-[#B8A8D0]">
              Connecting the Body of Christ across Zimbabwe. Uniting churches, pastors, businesses, and believers in faith and fellowship.
            </p>
            <div className="flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4B2E83] text-[#D4AF37] transition-colors hover:bg-[#5C3D96]" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4B2E83] text-[#D4AF37] transition-colors hover:bg-[#5C3D96]" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4B2E83] text-[#D4AF37] transition-colors hover:bg-[#5C3D96]" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-serif text-lg font-semibold text-[#D4AF37]">{section.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-[#B8A8D0] transition-colors hover:text-[#D4AF37]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="mt-10 flex flex-wrap items-center gap-6 rounded-xl border border-[#4B2E83] bg-[#3A2268] px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-[#B8A8D0]">
            <MapPin className="h-4 w-4 text-[#D4AF37]" />
            <span>Harare, Zimbabwe</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#B8A8D0]">
            <Phone className="h-4 w-4 text-[#D4AF37]" />
            <a href="tel:+263772000000" className="hover:text-[#D4AF37] transition-colors">+263 772 000 000</a>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#B8A8D0]">
            <Mail className="h-4 w-4 text-[#D4AF37]" />
            <a href="mailto:info@christbrand.co.zw" className="hover:text-[#D4AF37] transition-colors">info@christbrand.co.zw</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#4B2E83] pt-6 md:flex-row">
          <p className="text-xs text-[#8B7AAA]">
            &copy; 2026 Christbrand. All rights reserved. Made with love in Zimbabwe.
          </p>
          <div className="flex gap-4 text-xs text-[#8B7AAA]">
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
