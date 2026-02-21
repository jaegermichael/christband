"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Megaphone, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

const adverts = [
  {
    title: "Grand Opening: Faith Print Harare East",
    business: "Faith Print Solutions",
    description:
      "New branch now open! 20% off all church printing orders this month. Visit us at Eastgate Mall, Harare.",
    cta: "Visit Us",
    href: "/businesses#adverts",
    badge: "New",
  },
  {
    title: "Wedding Season Special",
    business: "Shalom Catering Services",
    description:
      "Book your church wedding catering before March and receive a free dessert table. Serving Bulawayo and surrounds.",
    cta: "Book Now",
    href: "/businesses#adverts",
    badge: "Hot Deal",
  },
  {
    title: "Holy Land Tour 2026",
    business: "Zion Travels & Tours",
    description:
      "Join our 10-day Holy Land tour in September. Walk where Jesus walked. Early bird prices available now.",
    cta: "Learn More",
    href: "/businesses#adverts",
    badge: "Limited",
  },
  {
    title: "Church Management Software",
    business: "Grace IT Solutions",
    description:
      "Streamline your church operations. Member databases, giving records, and event management all in one place.",
    cta: "Get Started",
    href: "/businesses#adverts",
    badge: "Featured",
  },
]

export function HomeAds() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % adverts.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + adverts.length) % adverts.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [isPaused, next])

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-[#3A2268] via-[#4B2E83] to-[#3A2268]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-10 h-40 w-40 rounded-full bg-[#D4AF37]/5" />
        <div className="absolute -bottom-10 -right-20 h-40 w-40 rounded-full bg-[#D4AF37]/5" />
      </div>

      <div className="relative mx-auto flex max-w-7xl items-center px-4 py-3">
        {/* Left: Label */}
        <div className="hidden shrink-0 items-center gap-2 border-r border-[#FFFDF7]/15 pr-4 md:flex">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4AF37]/20">
            <Megaphone className="h-4 w-4 text-[#D4AF37]" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
            Adverts
          </span>
        </div>

        {/* Prev button */}
        <button
          onClick={prev}
          className="mr-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#FFFDF7]/20 text-[#FFFDF7]/70 transition-colors hover:border-[#D4AF37]/50 hover:text-[#D4AF37] md:ml-4"
          aria-label="Previous advert"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Carousel content */}
        <div className="flex min-w-0 flex-1 items-center gap-3 overflow-hidden">
          <span className="shrink-0 rounded-md bg-[#D4AF37]/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
            {adverts[current].badge}
          </span>
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <h3 className="shrink-0 text-sm font-bold text-[#FFFDF7]">
              {adverts[current].title}
            </h3>
            <span className="hidden text-[#FFFDF7]/30 lg:inline">|</span>
            <p className="hidden min-w-0 truncate text-sm text-[#B8A8D0] lg:block">
              {adverts[current].description}
            </p>
          </div>
          <Link
            href={adverts[current].href}
            className="flex shrink-0 items-center gap-1.5 rounded-lg bg-[#D4AF37] px-3 py-1.5 text-xs font-bold text-[#2D1B4E] transition-all hover:brightness-110"
          >
            {adverts[current].cta}
            <ExternalLink className="h-3 w-3" />
          </Link>
        </div>

        {/* Next button */}
        <button
          onClick={next}
          className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#FFFDF7]/20 text-[#FFFDF7]/70 transition-colors hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
          aria-label="Next advert"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        {/* Dot indicators */}
        <div className="ml-3 hidden shrink-0 items-center gap-1.5 border-l border-[#FFFDF7]/15 pl-3 md:flex">
          {adverts.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? "w-5 bg-[#D4AF37]" : "w-1.5 bg-[#FFFDF7]/25"
              }`}
              aria-label={`Go to advert ${i + 1}`}
            />
          ))}
        </div>

        {/* Place ad link */}
        <Link
          href="/businesses#adverts"
          className="ml-3 hidden shrink-0 items-center gap-1 rounded-lg border border-[#FFFDF7]/15 px-3 py-1.5 text-[11px] font-semibold text-[#FFFDF7]/70 transition-colors hover:border-[#D4AF37]/40 hover:text-[#D4AF37] lg:flex"
        >
          Place Your Ad
        </Link>
      </div>
    </section>
  )
}
