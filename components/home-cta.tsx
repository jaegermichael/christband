import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HomeCTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-background p-10 text-center md:p-16">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
            Join the Christbrand Family Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-secondary/80 leading-relaxed">
            Whether you are a church leader, business owner, or a believer seeking community, there is a place for you at Christbrand. Register and connect with the Body of Christ across Zimbabwe.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/membership"
              className="flex items-center gap-2 rounded-xl bg-background px-7 py-3 font-semibold text-primary shadow-brand-lg transition-all hover:bg-secondary hover:text-background active:scale-[0.98]"
            >
              Register Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/subscriptions"
              className="flex items-center gap-2 rounded-xl border border-secondary/50 px-7 py-3 font-semibold text-secondary transition-all hover:bg-secondary/10 active:scale-[0.98]"
            >
              View Plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}