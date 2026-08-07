import Link from "next/link"
import Image from "next/image"
import { Search, ArrowRight, Cross } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-background">
      <Image
        src={encodeURI("/images/Welcome background.jpg")}
        alt="Church community worship background"
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-10 object-cover opacity-20"
        aria-hidden="true"
      />
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-secondary" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-secondary" />
        <div className="absolute right-1/4 top-1/3 h-40 w-40 rounded-full bg-primary" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center md:py-28">
        {/* Badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 backdrop-blur-xl">
          <Cross className="h-3.5 w-3.5 text-secondary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Zimbabwe's Christian Network
          </span>
        </div>

        <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl text-balance">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Christbrand
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl">
          Connecting the Body of Christ across Zimbabwe. Find churches, pastors, businesses, events, and a community united in faith.
        </p>

        {/* Search */}
        <form action="/churches" className="mt-8 flex w-full max-w-xl items-center rounded-2xl border border-border bg-card/50 p-1.5 backdrop-blur-xl">
          <Search className="ml-3 h-5 w-5 text-secondary" />
          <input
            name="q"
            type="text"
            placeholder="Search churches, pastors, events..."
            className="flex-1 bg-transparent px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          <button type="submit" className="rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]">
            Search
          </button>
        </form>

        {/* Quick links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/churches"
            className="flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-secondary transition-colors hover:bg-secondary/10 active:scale-[0.98]"
          >
            Find a Church <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/events"
            className="flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-foreground transition-colors hover:bg-secondary/10 active:scale-[0.98]"
          >
            Upcoming Events <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/prayer"
            className="flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-foreground transition-colors hover:bg-secondary/10 active:scale-[0.98]"
          >
            Prayer Requests <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: "523", label: "Churches Listed" },
            { value: "217", label: "Pastors Connected" },
            { value: "148", label: "Christian Businesses" },
            { value: "1,204", label: "Active Members" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-2xl font-bold text-secondary md:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60L48 53.3C96 46.7 192 33.3 288 26.7C384 20 480 20 576 26.7C672 33.3 768 46.7 864 50C960 53.3 1056 46.7 1152 40C1248 33.3 1344 26.7 1392 23.3L1440 20V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" fill="#141414"/>
        </svg>
      </div>
    </section>
  )
}