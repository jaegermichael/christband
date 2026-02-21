import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HomeCTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#4B2E83] via-[#3A2268] to-[#2D1B4E] p-10 text-center md:p-16">
          <h2 className="font-serif text-3xl font-bold text-[#FFFDF7] md:text-4xl text-balance">
            Join the Christbrand Family Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#B8A8D0] leading-relaxed">
            Whether you are a church leader, business owner, or a believer seeking community, there is a place for you at Christbrand. Register and connect with the Body of Christ across Zimbabwe.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/membership"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C49B2F] px-7 py-3 font-semibold text-[#2D1B4E] shadow-lg transition-all hover:brightness-110"
            >
              Register Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/subscriptions"
              className="flex items-center gap-2 rounded-xl border border-[#D4AF37]/30 px-7 py-3 font-semibold text-[#D4AF37] transition-all hover:bg-[#D4AF37]/10"
            >
              View Plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
