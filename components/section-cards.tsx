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
    color: "from-[#4B2E83] to-[#6B4EAA]",
  },
  {
    title: "Pastors Directory",
    description: "Connect with pastors and spiritual leaders in your area.",
    icon: Users,
    href: "/pastors",
    color: "from-[#3A2268] to-[#4B2E83]",
  },
  {
    title: "Church Organisations",
    description: "Explore Christian organisations and ministries in Zimbabwe.",
    icon: Building2,
    href: "/organisations",
    color: "from-[#4B2E83] to-[#6B4EAA]",
  },
  {
    title: "Christian Businesses",
    description: "Support and discover businesses run by fellow believers.",
    icon: Briefcase,
    href: "/businesses",
    color: "from-[#3A2268] to-[#4B2E83]",
  },
  {
    title: "Events Calendar",
    description: "Stay updated with Christian events, conferences, and gatherings.",
    icon: CalendarDays,
    href: "/events",
    color: "from-[#4B2E83] to-[#6B4EAA]",
  },
  {
    title: "Business Adverts",
    description: "Advertise your Christian business to the faith community.",
    icon: Megaphone,
    href: "/businesses#adverts",
    color: "from-[#3A2268] to-[#4B2E83]",
  },
  {
    title: "Christian Shop",
    description: "Browse faith-inspired merchandise, books, and gifts.",
    icon: ShoppingBag,
    href: "/shop",
    color: "from-[#4B2E83] to-[#6B4EAA]",
  },
  {
    title: "Prayer Corner",
    description: "Share prayer requests and stand in faith with the community.",
    icon: HandHeart,
    href: "/prayer",
    color: "from-[#3A2268] to-[#4B2E83]",
  },
  {
    title: "Word of Motivation",
    description: "Daily devotionals and uplifting messages for your spiritual walk.",
    icon: BookOpen,
    href: "/devotionals",
    color: "from-[#4B2E83] to-[#6B4EAA]",
  },
  {
    title: "Christian Books",
    description: "Discover recommended books for growth and inspiration.",
    icon: Library,
    href: "/books",
    color: "from-[#3A2268] to-[#4B2E83]",
  },
  {
    title: "Membership",
    description: "Register as a member and join the Christbrand family.",
    icon: UserPlus,
    href: "/membership",
    color: "from-[#4B2E83] to-[#6B4EAA]",
  },
  {
    title: "Subscriptions",
    description: "Choose a plan that suits you with local payment options.",
    icon: CreditCard,
    href: "/subscriptions",
    color: "from-[#3A2268] to-[#4B2E83]",
  },
]

export function SectionCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-12 text-center">
        <span className="mb-2 inline-block rounded-full bg-[#F5F0E8] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#4B2E83]">
          Explore
        </span>
        <h2 className="font-serif text-3xl font-bold text-[#2D1B4E] md:text-4xl text-balance">
          Everything You Need In One Place
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[#6B5A8A] leading-relaxed">
          Christbrand connects the Body of Christ across Zimbabwe through 12 dedicated sections designed to strengthen our faith community.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <Link
              key={section.href + section.title}
              href={section.href}
              className="group relative overflow-hidden rounded-2xl border border-[#E8E0D0] bg-[#FFFFFF] p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-[#D4AF37]/50"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${section.color} shadow-md transition-transform group-hover:scale-110`}>
                <Icon className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-bold text-[#2D1B4E]">{section.title}</h3>
              <p className="text-sm text-[#6B5A8A] leading-relaxed">{section.description}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#D4AF37] to-[#E8CC6A] transition-all group-hover:w-full" />
            </Link>
          )
        })}
      </div>
    </section>
  )
}
