import { Cross } from "lucide-react"

interface PageHeaderProps {
  title: string
  description: string
  badge?: string
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-background py-16 md:py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-secondary" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 text-center">
        {badge && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 backdrop-blur-xl">
            <Cross className="h-3.5 w-3.5 text-secondary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">{badge}</span>
          </div>
        )}
        <h1 className="font-serif text-3xl font-bold text-primary-foreground md:text-5xl text-balance">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-secondary/80 leading-relaxed">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" className="w-full">
          <path d="M0 40L60 35C120 30 240 20 360 16.7C480 13.3 600 16.7 720 20C840 23.3 960 26.7 1080 25C1200 23.3 1320 16.7 1380 13.3L1440 10V40H0Z" fill="#141414"/>
        </svg>
      </div>
    </section>
  )
}