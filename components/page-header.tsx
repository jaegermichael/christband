import { Cross } from "lucide-react"

interface PageHeaderProps {
  title: string
  description: string
  badge?: string
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-secondary/20 bg-[#4F1A74] py-16 md:py-20">
      <div className="brand-grid absolute inset-0 opacity-45" />
      <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border border-secondary/20 bg-primary/30 blur-2xl" />
      <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4">
        {badge && <div className="mb-5 inline-flex items-center gap-2 border-l-2 border-secondary pl-3 text-xs font-bold uppercase tracking-[0.24em] text-secondary"><Cross className="h-3.5 w-3.5" aria-hidden="true" />{badge}</div>}
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 md:text-lg">{description}</p>
      </div>
    </section>
  )
}
