import Image from "next/image"
import Link from "next/link"
import { Search, ArrowUpRight, Cross, Church, HandHeart, CalendarDays } from "lucide-react"

const quickRoutes = [
  { label: "Churches", detail: "Find a place to belong", href: "/churches", icon: Church },
  { label: "Prayer requests", detail: "Stand together in faith", href: "/prayer", icon: HandHeart },
  { label: "Events", detail: "Gather, worship, serve", href: "/events", icon: CalendarDays },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-secondary/25 bg-[#3A0353]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(128,72,170,0.38),transparent_30%),linear-gradient(115deg,#3A0353_8%,#3A0353_54%,rgba(58,3,83,0.58)_100%)]" />
      <div className="brand-grid absolute inset-0 opacity-35" />
      <div className="absolute -right-40 top-10 -z-10 h-[30rem] w-[30rem] rounded-full border border-secondary/20 bg-primary/25 blur-3xl" />

      <div className="mx-auto grid min-h-[570px] max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-[1fr_0.82fr] md:py-16 lg:gap-20">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 border-l-2 border-secondary pl-3 text-xs font-semibold uppercase tracking-[0.23em] text-secondary">
            <Cross className="h-3.5 w-3.5" aria-hidden="true" />
            Zimbabwe’s Christian community
          </div>
          <h1 className="max-w-xl font-serif text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-7xl">
            One body. <span className="text-secondary">Many churches.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/80 md:text-lg">
            ChristBand brings believers, churches, pastors, ministries, and Christian businesses together across Zimbabwe.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/membership" className="inline-flex items-center gap-2 rounded-md bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground shadow-[0_10px_30px_rgba(248,210,153,0.2)] hover:-translate-y-0.5 hover:bg-[#F59E51]">
              Join the community <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/churches" className="inline-flex items-center gap-2 rounded-md border border-secondary/45 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:border-secondary hover:bg-secondary/10">
              Find a church <ArrowUpRight className="h-4 w-4 text-secondary" aria-hidden="true" />
            </Link>
          </div>
          <form action="/churches" className="mt-8 flex max-w-xl items-center border-b border-secondary/45 pb-2">
            <Search className="mr-3 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
            <label htmlFor="site-search" className="sr-only">Search ChristBand</label>
            <input id="site-search" name="q" type="search" placeholder="Search churches, pastors, events" className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm text-white outline-none placeholder:text-white/55" />
            <button type="submit" className="px-2 py-2 text-sm font-semibold text-secondary hover:text-[#F59E51]">Search</button>
          </form>
        </div>

        <div className="relative mx-auto w-full max-w-[430px]">
          <div className="absolute -inset-4 rounded-[1.6rem] border border-secondary/25" />
          <div className="relative overflow-hidden rounded-[1.25rem] border border-secondary/45 bg-[#4F1A74] p-2 shadow-[0_24px_80px_rgba(29,0,42,0.35)]">
            <div className="relative h-[300px] overflow-hidden rounded-[0.9rem] md:h-[360px]">
              <Image
                src={encodeURI("/images/Christian Group Prayer – African Faith, Unity & Spiritual Growth Inspiration.jpg")}
                alt="A welcoming Christian community gathered in prayer"
                fill
                sizes="(max-width: 768px) 100vw, 430px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_32%,rgba(58,3,83,0.9)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">A place to connect</p>
                <p className="mt-2 font-serif text-2xl leading-tight text-white md:text-3xl">Find your people. Share your faith.</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 px-3 py-4 text-center">
              {["Churches", "Pastors", "Ministries"].map((label) => (
                <div key={label} className="border-l border-secondary/30 first:border-0">
                  <p className="font-serif text-lg text-white">{label === "Churches" ? "10" : label === "Pastors" ? "∞" : "1"}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/65">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-secondary/85">Connect · Worship · Serve · Grow</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-px border-t border-secondary/25 bg-secondary/25 md:grid-cols-3">
        {quickRoutes.map(({ label, detail, href, icon: Icon }) => (
          <Link key={href} href={href} className="group flex items-center gap-4 bg-[#3A0353]/95 px-4 py-4 hover:bg-[#4F1A74] md:px-7">
            <Icon className="h-5 w-5 text-secondary" aria-hidden="true" />
            <span><span className="block text-sm font-semibold text-white">{label}</span><span className="block text-xs text-white/60">{detail}</span></span>
            <ArrowUpRight className="ml-auto h-4 w-4 text-secondary opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  )
}
