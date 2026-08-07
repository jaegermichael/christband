import Link from "next/link"
import { Cross, Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gradient-to-br from-primary via-secondary to-background px-4 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-card/50">
        <Cross className="h-8 w-8 text-secondary" />
      </div>
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
        Page Not Found
      </p>
      <h1 className="font-serif text-5xl font-bold text-primary-foreground md:text-7xl">404</h1>
      <p className="mx-auto mt-4 max-w-md text-secondary/80 leading-relaxed">
        The page you are looking for does not exist or has been moved. Let us guide you back to the Body of Christ.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl bg-background px-6 py-3 font-semibold text-primary shadow-brand-lg transition-all hover:bg-secondary hover:text-background active:scale-[0.98]"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
        <Link
          href="/churches"
          className="flex items-center gap-2 rounded-xl border border-secondary/50 px-6 py-3 font-semibold text-secondary transition-all hover:bg-secondary/10 active:scale-[0.98]"
        >
          <Search className="h-4 w-4" />
          Find a Church
        </Link>
      </div>
    </div>
  )
}