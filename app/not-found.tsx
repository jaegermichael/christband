import Link from "next/link"
import { Cross, Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gradient-to-br from-[#551839] via-[#3B1027] to-[#2F0B20] px-4 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/20">
        <Cross className="h-8 w-8 text-[#D4AF37]" />
      </div>
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
        Page Not Found
      </p>
      <h1 className="font-serif text-5xl font-bold text-[#FFFDF7] md:text-7xl">404</h1>
      <p className="mx-auto mt-4 max-w-md text-[#D8B9CB] leading-relaxed">
        The page you are looking for does not exist or has been moved. Let us guide you back to the Body of Christ.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C49B2F] px-6 py-3 font-semibold text-[#2F0B20] shadow-brand-lg transition-all hover:brightness-110 active:scale-[0.98]"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
        <Link
          href="/churches"
          className="flex items-center gap-2 rounded-xl border border-[#D4AF37]/30 px-6 py-3 font-semibold text-[#D4AF37] transition-all hover:bg-[#D4AF37]/10 active:scale-[0.98]"
        >
          <Search className="h-4 w-4" />
          Find a Church
        </Link>
      </div>
    </div>
  )
}