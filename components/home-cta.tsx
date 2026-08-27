import Link from "next/link"
import { ArrowUpRight, Cross } from "lucide-react"

export function HomeCTA() {
  return (
    <section className="relative overflow-hidden bg-secondary px-4 py-16 text-secondary-foreground md:py-20">
      <div className="brand-grid absolute inset-0 opacity-20" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em]"><Cross className="h-4 w-4" aria-hidden="true" />For every part of the Body</div>
          <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] md:text-5xl">Bring your church community closer.</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-secondary-foreground/75">Whether you lead a church, run a Christian business, or are looking for a place to belong, there is a place for you on ChristBand.</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Link href="/membership" className="inline-flex items-center gap-2 rounded-md bg-[#3A0353] px-5 py-3 text-sm font-bold text-foreground hover:-translate-y-0.5 hover:bg-[#4F1A74]">Join the community <ArrowUpRight className="h-4 w-4 text-secondary" aria-hidden="true" /></Link>
          <Link href="/subscriptions" className="inline-flex items-center gap-2 rounded-md border border-secondary-foreground/30 px-5 py-3 text-sm font-bold hover:bg-secondary-foreground/10">View plans <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  )
}
