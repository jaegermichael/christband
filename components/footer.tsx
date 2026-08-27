import Link from "next/link"
import { Cross, Phone, MapPin, MessageCircle, ArrowUpRight } from "lucide-react"

const footerSections = [
  { title: "Find community", links: [{ label: "Churches", href: "/churches" }, { label: "Pastors", href: "/pastors" }, { label: "Ministries", href: "/organisations" }, { label: "Businesses", href: "/businesses" }] },
  { title: "Grow together", links: [{ label: "Events", href: "/events" }, { label: "Prayer requests", href: "/prayer" }, { label: "Devotionals", href: "/devotionals" }, { label: "Gospel music", href: "/gospel" }] },
  { title: "Take part", links: [{ label: "Christian store", href: "/shop" }, { label: "Membership", href: "/membership" }, { label: "Subscriptions", href: "/subscriptions" }, { label: "Contact", href: "/contact" }] },
]

export function Footer() {
  return (
    <footer className="border-t border-secondary/20 bg-[#11091c]">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_2fr]">
          <div>
            <Link href="/" className="group inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-[0_0_0_5px_rgba(242,181,68,0.1)]"><Cross className="h-5 w-5" aria-hidden="true" /></span>
              <span><span className="block font-serif text-2xl font-semibold text-foreground group-hover:text-secondary">ChristBand</span><span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-secondary">Connect · Worship · Serve</span></span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">One platform for Zimbabwe’s churches, believers, pastors, ministries, and Christian businesses to connect, worship, serve, and grow.</p>
            <Link href="/membership" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-[#F59E51]">Join the community <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerSections.map((section) => <div key={section.title}><h2 className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">{section.title}</h2><ul className="mt-4 space-y-3">{section.links.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">{link.label}</Link></li>)}</ul></div>)}
          </div>
        </div>

        <div className="mt-12 grid gap-3 border-y border-secondary/20 py-5 text-sm text-muted-foreground md:grid-cols-3">
          <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-secondary" aria-hidden="true" />Harare, Zimbabwe</div>
          <a href="https://wa.me/263780396185" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-foreground"><MessageCircle className="h-4 w-4 text-secondary" aria-hidden="true" />WhatsApp +263 78 039 6185</a>
          <a href="tel:+263242485604" className="flex items-center gap-3 hover:text-foreground"><Phone className="h-4 w-4 text-secondary" aria-hidden="true" />Call +263 24 2485604</a>
        </div>

        <div className="mt-7 flex flex-col gap-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 ChristBand. Bringing Zimbabwe’s Christian community together.</p>
          <div className="flex gap-5"><Link href="/privacy" className="hover:text-secondary">Privacy Policy</Link><Link href="/terms" className="hover:text-secondary">Terms of Service</Link></div>
        </div>
      </div>
    </footer>
  )
}
