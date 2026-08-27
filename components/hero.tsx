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
    <section className="relative isolate overflow-hidden border-b border-secondary/20 bg-[#160b25]">
      <Image
        src={encodeURI("/images/Welcome background.jpg")}
        alt="A Zimbabwean church community gathered in worship"
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-20 object-cover object-center opacity-25 mix-blend-screen"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,#160b25_10%,rgba(22,11,37,0.93)_44%,rgba(60,22,92,0.56)_100%)]" />
      <div className="brand-grid absolute inset-0 -z-10 opacity-50" />
      <div className="absolute -right-40 top-16 -z-10 h-[30rem] w-[30rem] rounded-full border border-secondary/20 bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-48 left-1/3 -z-10 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-3xl" />

      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20 lg:gap-20">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 border-l-2 border-secondary pl-3 text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
            <Cross className="h-3.5 w-3.5" aria-hidden="true" />
            Zimbabwe’s Christian community
          </div>
          <h1 className="max-w-xl font-serif text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-foreground md:text-7xl">
            One body. <span className="text-secondary">Many churches.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-foreground/75 md:text-lg">
            ChristBand connects believers, churches, pastors, ministries, and Christian businesses across Zimbabwe.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/membership" className="inline-flex items-center gap-2 rounded-md bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground shadow-[0_10px_30px_rgba(242,181,68,0.2)] hover:-translate-y-0.5 hover:bg-[#ffd16a]">
              Join the community <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/churches" className="inline-flex items-center gap-2 rounded-md border border-secondary/40 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground hover:border-secondary hover:bg-secondary/10">
              Find a church <ArrowUpRight className="h-4 w-4 text-secondary" aria-hidden="true" />
            </Link>
          </div>
          <form action="/churches" className="mt-9 flex max-w-xl items-center border-b border-secondary/40 pb-2">
            <Search className="mr-3 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
            <label htmlFor="site-search" className="sr-only">Search ChristBand</label>
            <input id="site-search" name="q" type="search" placeholder="Search churches, pastors, events" className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm text-foreground outline-none placeholder:text-foreground/45" />
            <button type="submit" className="px-2 py-2 text-sm font-semibold text-secondary hover:text-[#ffd16a]">Search</button>
          </form>
        </div>

        <div className="relative mx-auto w-full max-w-[470px]">
          <div className="absolute -inset-5 rounded-[2rem] border border-secondary/20" />
          <div className="brand-glow relative overflow-hidden rounded-[1.35rem] border border-secondary/40 bg-[#211132]/90 p-5 backdrop-blur-sm md:p-6">
            <div className="flex items-start justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-secondary">The ChristBand map</p>
                <p className="mt-2 font-serif text-2xl text-foreground">Connect · Worship · Serve</p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary/50 bg-secondary/10 text-secondary">
                <Cross className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
            <div className="relative my-6 flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-secondary/20 bg-[radial-gradient(circle,rgba(242,181,68,0.2),transparent_36%),linear-gradient(145deg,#3c165c,#160b25)]">
              <div className="absolute h-40 w-40 rounded-full border border-secondary/30" />
              <div className="absolute h-64 w-64 rounded-full border border-secondary/15" />
              <div className="absolute h-1 w-1 rounded-full bg-secondary shadow-[0_0_25px_10px_rgba(242,181,68,0.55)]" />
              <div className="absolute left-[18%] top-[25%] h-2 w-2 rounded-full bg-secondary shadow-[0_0_14px_4px_rgba(242,181,68,0.4)]" />
              <div className="absolute right-[21%] top-[36%] h-2 w-2 rounded-full bg-secondary shadow-[0_0_14px_4px_rgba(242,181,68,0.4)]" />
              <div className="absolute bottom-[22%] left-[34%] h-2 w-2 rounded-full bg-secondary shadow-[0_0_14px_4px_rgba(242,181,68,0.4)]" />
              <div className="absolute bottom-[28%] right-[23%] h-2 w-2 rounded-full bg-secondary shadow-[0_0_14px_4px_rgba(242,181,68,0.4)]" />
              <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 400 400" fill="none" aria-hidden="true">
                <path d="M73 102L200 200L316 145L267 288L140 311L200 200" stroke="#F2B544" strokeOpacity=".45" strokeDasharray="4 8" />
              </svg>
              <span className="relative rounded-full border border-secondary/60 bg-[#160b25]/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-secondary">Zimbabwe</span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {["Churches", "Pastors", "Ministries"].map((label) => (
                <div key={label} className="border-l border-secondary/30 first:border-0">
                  <p className="font-serif text-xl text-foreground">{label === "Churches" ? "10" : label === "Pastors" ? "∞" : "1"}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-5 text-center text-xs uppercase tracking-[0.24em] text-secondary/80">Together, let’s build the kingdom on one platform.</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-px border-t border-secondary/20 bg-secondary/20 md:grid-cols-3">
        {quickRoutes.map(({ label, detail, href, icon: Icon }) => (
          <Link key={href} href={href} className="group flex items-center gap-4 bg-[#160b25]/90 px-4 py-5 hover:bg-[#211132] md:px-7">
            <Icon className="h-5 w-5 text-secondary" aria-hidden="true" />
            <span><span className="block text-sm font-semibold text-foreground">{label}</span><span className="block text-xs text-muted-foreground">{detail}</span></span>
            <ArrowUpRight className="ml-auto h-4 w-4 text-secondary opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  )
}
