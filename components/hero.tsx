import Link from "next/link"
import { Search, ArrowRight, Cross } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#4B2E83] via-[#3A2268] to-[#2D1B4E]">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#D4AF37]" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#D4AF37]" />
        <div className="absolute right-1/4 top-1/3 h-40 w-40 rounded-full bg-[#D4AF37]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center md:py-28">
        {/* Badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5">
          <Cross className="h-3.5 w-3.5 text-[#D4AF37]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Zimbabwe&apos;s Christian Network
          </span>
        </div>

        <h1 className="font-serif text-4xl font-bold leading-tight text-[#FFFDF7] md:text-6xl lg:text-7xl text-balance">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#E8CC6A] bg-clip-text text-transparent">
            Christbrand
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-[#B8A8D0] leading-relaxed md:text-xl">
          Connecting the Body of Christ across Zimbabwe. Find churches, pastors, businesses, events, and a community united in faith.
        </p>

        {/* Search */}
        <div className="mt-8 flex w-full max-w-xl items-center rounded-2xl border border-[#D4AF37]/30 bg-[#FFFDF7]/10 p-1.5 backdrop-blur-sm">
          <Search className="ml-3 h-5 w-5 text-[#D4AF37]" />
          <input
            type="text"
            placeholder="Search churches, pastors, events..."
            className="flex-1 bg-transparent px-3 py-2.5 text-sm text-[#FFFDF7] placeholder:text-[#B8A8D0] outline-none"
          />
          <button className="rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C49B2F] px-5 py-2.5 text-sm font-semibold text-[#2D1B4E] transition-all hover:brightness-110">
            Search
          </button>
        </div>

        {/* Quick links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/churches"
            className="flex items-center gap-1.5 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-sm text-[#D4AF37] transition-colors hover:bg-[#D4AF37]/20"
          >
            Find a Church <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/events"
            className="flex items-center gap-1.5 rounded-full border border-[#FFFDF7]/20 bg-[#FFFDF7]/10 px-4 py-2 text-sm text-[#FFFDF7] transition-colors hover:bg-[#FFFDF7]/20"
          >
            Upcoming Events <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/prayer"
            className="flex items-center gap-1.5 rounded-full border border-[#FFFDF7]/20 bg-[#FFFDF7]/10 px-4 py-2 text-sm text-[#FFFDF7] transition-colors hover:bg-[#FFFDF7]/20"
          >
            Prayer Requests <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: "500+", label: "Churches Listed" },
            { value: "200+", label: "Pastors Connected" },
            { value: "150+", label: "Christian Businesses" },
            { value: "1,000+", label: "Active Members" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-2xl font-bold text-[#D4AF37] md:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-[#B8A8D0]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60L48 53.3C96 46.7 192 33.3 288 26.7C384 20 480 20 576 26.7C672 33.3 768 46.7 864 50C960 53.3 1056 46.7 1152 40C1248 33.3 1344 26.7 1392 23.3L1440 20V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" fill="#FFFDF7"/>
        </svg>
      </div>
    </section>
  )
}
