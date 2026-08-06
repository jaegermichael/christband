import Link from "next/link"
import {
  Church,
  Users,
  Building2,
  Briefcase,
  CalendarDays,
  ShoppingBag,
  HandHeart,
  BookOpen,
  Library,
  Music,
  UserPlus,
  CreditCard,
  Megaphone,
} from "lucide-react"

const sections = [
  {
    title: "Church Directory",
    description: "Find churches across Zimbabwe by denomination, city, or province.",
    icon: Church,
    href: "/churches",
    color: "from-[#551839] to-[#7A2A5E]",
    featured: true,
  },
  {
    title: "Pastors Directory",
    description: "Connect with pastors and spiritual leaders in your area.",
    icon: Users,
    href: "/pastors",
    color: "from-[#3B1027] to-[#551839]",
  },
  {
    title: "Church Organisations",
    description: "Explore Christian organisations and ministries in Zimbabwe.",
    icon: Building2,
    href: "/organisations",
    color: "from-[#551839] to-[#7A2A5E]",
  },
  {
    title: "Christian Businesses",
    description: "Support and discover businesses run by fellow believers.",
    icon: Briefcase,
    href: "/businesses",
    color: "from-[#3B1027] to-[#551839]",
  },
  {
    title: "Events Calendar",
    description: "Stay updated with Christian events, conferences, and gatherings.",
    icon: CalendarDays,
    href: "/events",
    color: "from-[#551839] to-[#7A2A5E]",
    featured: true,
  },
  {
    title: "Business Adverts",
    description: "Advertise your Christian business to the faith community.",
    icon: Megaphone,
    href: "/businesses#adverts",
    color: "from-[#3B1027] to-[#551839]",
  },
  {
    title: "Christian Shop",
    description: "Browse faith-inspired merchandise, books, and gifts.",
    icon: ShoppingBag,
    href: "/shop",
    color: "from-[#551839] to-[#7A2A5E]",
  },
  {
    title: "Prayer Corner",
    description: "Share prayer requests and stand in faith with the community.",
    icon: HandHeart,
    href: "/prayer",
    color: "from-[#3B1027] to-[#551839]",
  },
  {
    title: "Word of Motivation",
    description: "Daily devotionals and uplifting messages for your spiritual walk.",
    icon: BookOpen,
    href: "/devotionals",
    color: "from-[#551839] to-[#7A2A5E]",
  },
  {
    title: "Christian Books",
    description: "Discover recommended books for growth and inspiration.",
    icon: Library,
    href: "/books",
    color: "from-[#3B1027] to-[#551839]",
  },
  {
    title: "Gospel Music",
    description: "Enjoy worship playlists, choir performances, and music ministry resources.",
    icon: Music,
    href: "/gospel",
    color: "from-[#551839] to-[#7A2A5E]",
  },
  {
    title: "Membership",
    description: "Register as a member and join the Christbrand family.",
    icon: UserPlus,
    href: "/membership",
    color: "from-[#551839] to-[#7A2A5E]",
  },
  {
    title: "Subscriptions",
    description: "Choose a plan that suits you with local payment options.",
    icon: CreditCard,
    href: "/subscriptions",
    color: "from-[#3B1027] to-[#551839]",
  },
]

export function SectionCards() {
  const featured = sections.filter((s) => s.featured)
  const rest = sections.filter((s) => !s.featured)

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-12 text-center">
        <span className="mb-2 inline-block rounded-full bg-[#F5F0E8] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#551839]">
          Explore
        </span>
        <h2 className="font-serif text-3xl font-bold text-[#2F0B20] md:text-4xl text-balance">
          Everything You Need In One Place
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[#7A5A6D] leading-relaxed">
          Christbrand connects the Body of Christ across Zimbabwe through 12 dedicated sections designed to strengthen our faith community.
        </p>
      </div>

      {/* Featured cards - asymmetric bento */}
      <div className="mb-5 grid gap-5 md:grid-cols-2">
        {featured.map((section) => {
          const Icon = section.icon
          return (
            <Link
              key={section.href + section.title}
              href={section.href}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#551839] to-[#3B1027] p-8 shadow-brand-lg transition-all hover:-translate-y-1 hover:shadow-brand-xl active:scale-[0.99]"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#D4AF37]/10" />
              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-[#D4AF37]/5" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/20">
                  <Icon className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[#FFFDF7]">{section.title}</h3>
                <p className="text-sm text-[#D8B9CB] leading-relaxed">{section.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-[#D4AF37]">
                  Explore now →
                </span>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Rest of cards - varied grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rest.map((section, i) => {
          const Icon = section.icon
          const isWide = i % 5 === 0
          return (
            <Link
              key={section.href + section.title}
              href={section.href}
              className={`group relative overflow-hidden rounded-2xl border border-[#E8E0D0] bg-[#FFFFFF] p-6 shadow-brand-sm transition-all hover:-translate-y-1 hover:shadow-brand-lg hover:border-[#D4AF37]/50 active:scale-[0.99] ${
                isWide ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${section.color} shadow-brand-sm transition-transform group-hover:scale-110`}>
                <Icon className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-bold text-[#2F0B20]">{section.title}</h3>
              <p className="text-sm text-[#7A5A6D] leading-relaxed">{section.description}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#D4AF37] to-[#E8CC6A] transition-all group-hover:w-full" />
            </Link>
          )
        })}
      </div>
    </section>
  )
}