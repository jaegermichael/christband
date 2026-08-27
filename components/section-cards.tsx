import Link from "next/link"
import {
  Church,
  Users,
  Building2,
  BriefcaseBusiness,
  CalendarDays,
  ShoppingBag,
  HandHeart,
  BookOpen,
  Music2,
  UserPlus,
  Megaphone,
  ArrowUpRight,
} from "lucide-react"

const sections = [
  { title: "Churches", description: "Find a congregation, service time, or place to belong across Zimbabwe.", icon: Church, href: "/churches", featured: true },
  { title: "Pastors", description: "Meet spiritual leaders and connect with the people serving your community.", icon: Users, href: "/pastors", featured: true },
  { title: "Ministries", description: "Discover organisations doing kingdom work across the nation.", icon: Building2, href: "/organisations" },
  { title: "Sermons & gospel", description: "Listen, watch, and share messages that strengthen faith.", icon: Music2, href: "/gospel" },
  { title: "Prayer requests", description: "Send a request and stand with others in prayer.", icon: HandHeart, href: "/prayer" },
  { title: "Events", description: "Keep up with conferences, worship gatherings, and community moments.", icon: CalendarDays, href: "/events" },
  { title: "Christian businesses", description: "Support businesses and services run by fellow believers.", icon: BriefcaseBusiness, href: "/businesses" },
  { title: "Business adverts", description: "Put your work in front of the Christian community.", icon: Megaphone, href: "/businesses#adverts" },
  { title: "Christian store", description: "Browse faith-inspired books, gifts, and goods.", icon: ShoppingBag, href: "/shop" },
  { title: "Devotionals", description: "Make space for a daily word of motivation.", icon: BookOpen, href: "/devotionals" },
  { title: "Membership", description: "Create your place in the ChristBand family.", icon: UserPlus, href: "/membership" },
]

export function SectionCards() {
  const featured = sections.filter((section) => section.featured)
  const rest = sections.filter((section) => !section.featured)

  return (
    <section className="bg-white px-4 py-20 md:py-28" aria-labelledby="platform-map-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">The platform map</p>
            <h2 id="platform-map-heading" className="mt-4 max-w-lg font-serif text-4xl leading-tight tracking-[-0.03em] text-foreground md:text-5xl">Everything you need to live connected.</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-muted-foreground md:justify-self-end">From church discovery to prayer, media, events, and Christian enterprise, ChristBand gives Zimbabwe’s faith community one clear front door.</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {featured.map(({ title, description, icon: Icon, href }, index) => (
            <Link key={href} href={href} className={`group relative overflow-hidden rounded-xl border border-primary/10 p-7 ${index === 0 ? "bg-secondary text-secondary-foreground" : "bg-[#F5EEF9] text-foreground"}`}>
              <div className="absolute -right-10 -top-14 h-40 w-40 rounded-full border border-current opacity-15" />
              <div className="relative flex items-start justify-between gap-6">
                <span className={`flex h-11 w-11 items-center justify-center rounded-full ${index === 0 ? "bg-primary/10" : "bg-accent/10 text-accent"}`}><Icon className="h-5 w-5" aria-hidden="true" /></span>
                <ArrowUpRight className="h-5 w-5 opacity-70 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
              </div>
              <h3 className="relative mt-12 font-serif text-2xl font-semibold">{title}</h3>
              <p className={`relative mt-2 max-w-sm text-sm leading-7 ${index === 0 ? "text-secondary-foreground/75" : "text-muted-foreground"}`}>{description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map(({ title, description, icon: Icon, href }) => (
            <Link key={href} href={href} className="group flex min-h-[176px] flex-col justify-between rounded-xl border border-primary/10 bg-white p-5 hover:-translate-y-1 hover:border-accent/45 hover:bg-[#F7F2FA]">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                <ArrowUpRight className="h-4 w-4 text-accent opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
              </div>
              <div>
                <h3 className="mt-6 text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
